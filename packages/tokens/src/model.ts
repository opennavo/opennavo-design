// Shared parsing for every generator: tokens/tokens.json is the only source, each platform renders from these helpers.

export type Json = string | number | boolean | null | Json[] | { [key: string]: Json };
export type JsonObject = { [key: string]: Json };
export type ThemeName = 'dark' | 'light';

/** One flattened token as a CSS custom property. */
export interface CssVariable {
  /** For example, --on-surface-card-alt. */
  name: string;
  /** Default (dark) theme value. */
  value: string;
  /** Light theme value, present only when it differs from the dark value. */
  light?: string;
  /** Path within tokens.json, e.g. ['color', 'surface', 'cardAlt']. */
  path: string[];
  desc?: string;
}

export const HEADER =
  'Generated from tokens/tokens.json by packages/tokens/scripts/generate.ts; do not edit. After changing tokens.json, run `pnpm gen`.';

// Unquoted generic font families and system keywords.
const GENERIC_FONTS = new Set([
  '-apple-system',
  'BlinkMacSystemFont',
  'sans-serif',
  'serif',
  'monospace',
  'ui-monospace',
  'system-ui'
]);

export function kebab(key: string): string {
  return key
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/\./g, '-')
    .toLowerCase();
}

/** camelCase identifier for Dart and Swift: ['surface', 'cardAlt'] → surfaceCardAlt, ['space', '0.5'] → s0_5 style handled by callers. */
export function camel(segments: string[]): string {
  const words = segments.flatMap(segment => kebab(segment).split('-')).filter(Boolean);
  return words.map((word, index) => (index === 0 ? word : word[0]!.toUpperCase() + word.slice(1))).join('');
}

export function isObject(node: Json | undefined): node is JsonObject {
  return typeof node === 'object' && node !== null && !Array.isArray(node);
}

export function child(node: Json | undefined, key: string): JsonObject {
  const value = isObject(node) ? node[key] : undefined;
  if (!isObject(value)) throw new Error(`tokens.json is missing object: ${key}`);
  return value;
}

/** Numeric units: px for spacing/radii/sizes, ms for durations, unitless weights/z-indices. */
function unitFor(path: string[]): string {
  const [group, second] = path;
  if (group === 'zIndex') return '';
  if (group === 'motion') return second === 'duration' ? 'ms' : '';
  if (group === 'typography') return path.at(-1) === 'weight' ? '' : 'px';
  return 'px';
}

export function fontStack(families: Json[]): string {
  return families
    .map(item => {
      const name = String(item);
      return GENERIC_FONTS.has(name) || !/[\s\d]/.test(name) ? name : `"${name}"`;
    })
    .join(', ');
}

function formatValue(value: Json, path: string[]): string {
  if (Array.isArray(value)) return path.includes('family') ? fontStack(value) : value.map(String).join(', ');
  if (typeof value === 'number') return `${value}${unitFor(path)}`;
  return String(value);
}

/** Variable names: --on-{group}-{name}; omit the color level and convert camelCase to kebab-case. */
export function variableName(path: string[]): string {
  const segments = path[0] === 'color' ? path.slice(1) : path;
  return `--on-${segments.map(kebab).join('-')}`;
}

export function collectCssVariables(source: JsonObject): CssVariable[] {
  const variables: CssVariable[] = [];

  const visit = (node: Json, path: string[], desc?: string, light?: Json) => {
    if (isObject(node) && 'value' in node) {
      const description = typeof node.desc === 'string' ? node.desc : undefined;
      visit(node.value as Json, path, description, node.light);
      return;
    }
    if (isObject(node)) {
      const entries = Object.entries(node).filter(([key]) => key !== 'desc');
      // Sort numeric keys such as spacing numerically; JavaScript objects place integer keys first.
      if (entries.every(([key]) => /^\d+(\.\d+)?$/.test(key))) entries.sort(([a], [b]) => Number(a) - Number(b));
      for (const [key, value] of entries) visit(value, [...path, key]);
      return;
    }
    const value = formatValue(node, path);
    // Placeholder templates such as detailGlow's {accent} are available only as functions.
    if (value.includes('{')) return;
    const lightValue = light === undefined ? undefined : formatValue(light, path);
    variables.push({
      name: variableName(path),
      value,
      ...(lightValue !== undefined && lightValue !== value ? { light: lightValue } : {}),
      path,
      ...(desc ? { desc } : {})
    });
    // Color arrays (gradients) also expose each stop, e.g. --on-brand-logo-core-gradient-1, for SVG stop-color.
    if (path[0] === 'color' && Array.isArray(node)) {
      node.forEach((stop, index) => {
        const lightStop = Array.isArray(light) ? String(light[index]) : undefined;
        variables.push({
          name: `${variableName(path)}-${index + 1}`,
          value: String(stop),
          ...(lightStop !== undefined && lightStop !== String(stop) ? { light: lightStop } : {}),
          path: [...path, String(index + 1)]
        });
      });
    }
  };

  for (const [group, node] of Object.entries(source)) {
    if (group === 'meta') continue;
    visit(node, [group]);
  }
  return variables;
}

/** Remove { value, light, desc } wrappers to obtain raw runtime values for one theme. */
export function unwrap(node: Json, theme: ThemeName = 'dark'): Json {
  if (isObject(node)) {
    if ('value' in node) return unwrap((theme === 'light' && 'light' in node ? node.light : node.value) as Json, theme);
    const result: JsonObject = {};
    for (const [key, value] of Object.entries(node)) {
      if (key === 'desc') continue;
      result[key] = unwrap(value, theme);
    }
    return result;
  }
  return node;
}

export function hasLight(node: Json | undefined): boolean {
  if (!isObject(node)) return false;
  if ('value' in node) return 'light' in node;
  return Object.values(node).some(hasLight);
}

/** A leaf token: its path, both theme values and description. Gradient arrays and placeholders are kept raw. */
export interface Leaf {
  path: string[];
  dark: Json;
  light: Json;
  desc?: string;
}

export function collectLeaves(node: Json, path: string[] = []): Leaf[] {
  if (isObject(node) && 'value' in node) {
    const leaf: Leaf = { path, dark: node.value as Json, light: ('light' in node ? node.light : node.value) as Json };
    if (typeof node.desc === 'string') leaf.desc = node.desc;
    return [leaf];
  }
  if (isObject(node)) {
    return Object.entries(node)
      .filter(([key]) => key !== 'desc' && key !== 'meta')
      .flatMap(([key, value]) => collectLeaves(value, [...path, key]));
  }
  return [{ path, dark: node, light: node }];
}

export interface Rgba {
  r: number;
  g: number;
  b: number;
  /** 0–1. */
  a: number;
}

/** Parse #RGB, #RRGGBB, #RRGGBBAA or rgba(r, g, b, a); undefined for anything else (gradients, keywords). */
export function parseColor(value: string): Rgba | undefined {
  const text = value.trim();
  const hex = /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.exec(text)?.[1];
  if (hex) {
    const full = hex.length === 3 ? [...hex].map(c => c + c).join('') : hex;
    const n = (i: number) => Number.parseInt(full.slice(i, i + 2), 16);
    return { r: n(0), g: n(2), b: n(4), a: full.length === 8 ? Math.round((n(6) / 255) * 1000) / 1000 : 1 };
  }
  const rgba = /^rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\s*\)$/.exec(text);
  if (rgba)
    return {
      r: Number(rgba[1]),
      g: Number(rgba[2]),
      b: Number(rgba[3]),
      a: rgba[4] === undefined ? 1 : Number(rgba[4])
    };
  return undefined;
}

export function hexByte(value: number): string {
  return Math.round(value).toString(16).padStart(2, '0').toUpperCase();
}

/** #RRGGBB, or #RRGGBBAA when translucent. */
export function toHex({ r, g, b, a }: Rgba): string {
  return `#${hexByte(r)}${hexByte(g)}${hexByte(b)}${a < 1 ? hexByte(a * 255) : ''}`;
}

export interface Shadow {
  inset: boolean;
  x: number;
  y: number;
  blur: number;
  spread: number;
  color: Rgba;
}

/** Parse a CSS box-shadow list such as "0 24px 60px rgba(0, 0, 0, 0.60), 0 0 0 0.5px #000000". */
export function parseShadows(value: string): Shadow[] {
  const parts = value.split(/,(?![^(]*\))/).map(part => part.trim());
  return parts.map(part => {
    const inset = part.startsWith('inset ');
    const body = inset ? part.slice(6) : part;
    const colorMatch = /(rgba?\([^)]*\)|#[0-9a-f]{3,8})\s*$/i.exec(body);
    const color = colorMatch ? parseColor(colorMatch[1]!) : undefined;
    const lengths = (colorMatch ? body.slice(0, colorMatch.index) : body)
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map(length => Number.parseFloat(length));
    const [x = 0, y = 0, blur = 0, spread = 0] = lengths;
    return { inset, x, y, blur, spread, color: color ?? { r: 0, g: 0, b: 0, a: 0 } };
  });
}

/** Deep-merge brand or app overrides into the base tokens; objects merge, everything else replaces. */
export function mergeTokens(base: JsonObject, overrides: JsonObject): JsonObject {
  const result: JsonObject = { ...base };
  for (const [key, value] of Object.entries(overrides)) {
    const current = result[key];
    result[key] =
      isObject(current) && isObject(value) && !('value' in value) ? mergeTokens(current, value) : (value as Json);
  }
  return result;
}
