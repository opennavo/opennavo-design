// Design-tool export: one W3C Design Tokens (DTCG draft format) file per theme, for Figma Tokens Studio,
// Style Dictionary and similar tools. Colors are hex strings, sizes px strings; radial glow effects are omitted.
import { child, collectLeaves, isObject, parseColor, parseShadows, toHex, unwrap } from './model.ts';
import type { Json, JsonObject, Leaf, ThemeName } from './model.ts';

type Token = { $type: string; $value: Json; $description?: string };

function color(value: Json): string | undefined {
  const parsed = typeof value === 'string' ? parseColor(value) : undefined;
  return parsed ? toHex(parsed) : undefined;
}

function px(value: Json): string | undefined {
  if (typeof value === 'number') return `${value}px`;
  if (typeof value === 'string' && /^-?\d+(\.\d+)?%$/.test(value)) return value;
  return undefined;
}

function token(type: string, value: Json, desc?: string): Token {
  return desc ? { $type: type, $value: value, $description: desc } : { $type: type, $value: value };
}

function place(root: JsonObject, path: string[], value: Token) {
  let node = root;
  for (const segment of path.slice(0, -1)) {
    const next = node[segment];
    node = (isObject(next) ? next : (node[segment] = {})) as JsonObject;
  }
  node[path.at(-1)!] = value as unknown as Json;
}

function colorToken(leaf: Leaf, value: Json): Token | undefined {
  if (Array.isArray(value)) {
    const stops = value.map((stop, index) => ({
      color: color(stop) ?? String(stop),
      position: value.length === 1 ? 0 : Math.round((index / (value.length - 1)) * 1000) / 1000
    }));
    return token('gradient', stops as unknown as Json, leaf.desc);
  }
  const hex = color(value);
  return hex ? token('color', hex, leaf.desc) : undefined;
}

function shadowToken(leaf: Leaf, value: Json): Token | undefined {
  if (typeof value !== 'string') return undefined;
  const shadows = parseShadows(value).map(shadow => ({
    color: toHex(shadow.color),
    offsetX: `${shadow.x}px`,
    offsetY: `${shadow.y}px`,
    blur: `${shadow.blur}px`,
    spread: `${shadow.spread}px`,
    ...(shadow.inset ? { inset: true } : {})
  }));
  return token('shadow', (shadows.length === 1 ? shadows[0] : shadows) as unknown as Json, leaf.desc);
}

export function renderDtcg(source: JsonObject, theme: ThemeName): string {
  const root: JsonObject = {
    $description: `OpenNavo Design Tokens, ${theme} theme. Generated from tokens/tokens.json; do not edit.`
  } as JsonObject;
  const pick = (leaf: Leaf) => (theme === 'light' ? leaf.light : leaf.dark);

  for (const leaf of collectLeaves(child(source, 'color'), ['color'])) {
    const value = colorToken(leaf, pick(leaf));
    if (value) place(root, leaf.path, value);
  }
  for (const leaf of collectLeaves(child(source, 'shadow'), ['shadow'])) {
    const value = shadowToken(leaf, pick(leaf));
    if (value) place(root, leaf.path, value);
  }
  for (const group of ['space', 'radius'] as const) {
    for (const leaf of collectLeaves(child(source, group), [group])) {
      const value = px(leaf.dark);
      if (value) place(root, leaf.path, token('dimension', value, leaf.desc));
    }
  }
  const families = unwrap(child(source, 'font')) as { family: Record<string, string[]> };
  for (const [key, stack] of Object.entries(families.family)) {
    place(root, ['font', 'family', key], token('fontFamily', stack));
  }
  for (const [key, spec] of Object.entries(child(source, 'typography'))) {
    if (!isObject(spec)) continue;
    const size = Number(spec.size);
    place(
      root,
      ['typography', key],
      token(
        'typography',
        {
          fontFamily: key === 'mono' ? '{font.family.mono}' : '{font.family.sans}',
          fontSize: `${size}px`,
          fontWeight: Number(spec.weight),
          lineHeight: Math.round((Number(spec.lineHeight) / size) * 1000) / 1000,
          letterSpacing: typeof spec.letterSpacing === 'string' ? spec.letterSpacing : '0em'
        },
        typeof spec.desc === 'string' ? spec.desc : undefined
      )
    );
  }
  const motion = unwrap(child(source, 'motion')) as {
    duration: Record<string, number>;
    easing: Record<string, string>;
  };
  for (const [key, ms] of Object.entries(motion.duration))
    place(root, ['motion', 'duration', key], token('duration', `${ms}ms`));
  for (const [key, easing] of Object.entries(motion.easing)) {
    const numbers = /cubic-bezier\(([^)]+)\)/.exec(easing)?.[1]?.split(',').map(Number);
    if (numbers?.length === 4) place(root, ['motion', 'easing', key], token('cubicBezier', numbers));
  }
  for (const [key, value] of Object.entries(unwrap(child(source, 'zIndex')) as Record<string, number>)) {
    place(root, ['zIndex', key], token('number', value));
  }
  return `${JSON.stringify(root, null, 2)}\n`;
}
