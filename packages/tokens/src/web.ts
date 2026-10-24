// Web artifacts: CSS variables for both themes, typed TS values, the UnoCSS preset and Tailwind (v4 CSS, v3 preset).
import { HEADER, child, hasLight, isObject, kebab, unwrap } from './model.ts';
import type { CssVariable, Json, JsonObject } from './model.ts';

// Typography token class names; unlisted tokens use kebab-case.
const TYPOGRAPHY_CLASS: Record<string, string> = { statValue: 'stat' };

function themeBlock(
  selector: string,
  scheme: 'dark' | 'light',
  entries: Array<[string, string]>,
  indent = ''
): string[] {
  return [
    `${indent}${selector} {`,
    `${indent}  color-scheme: ${scheme};`,
    ...entries.map(([name, value]) => `${indent}  ${name}: ${value};`),
    `${indent}}`
  ];
}

// Dark is the default theme. Light follows prefers-color-scheme unless the page sets data-theme='dark';
// data-theme on html or any element forces a theme for that subtree (docs/theming.md).
export function renderCss(variables: CssVariable[]): string {
  const lines = [`/* ${HEADER} */`, ':root {', '  color-scheme: dark;', ''];
  let previousGroup = '';
  for (const variable of variables) {
    const group = variable.name.split('-')[3] ?? '';
    if (previousGroup && group !== previousGroup) lines.push('');
    previousGroup = group;
    if (variable.desc) lines.push(`  /* ${variable.desc} */`);
    lines.push(`  ${variable.name}: ${variable.value};`);
  }
  lines.push('}', '');

  // Only themed tokens are repeated; spacing, type, radii and motion are the same in both themes.
  const themed = variables.filter(variable => variable.light !== undefined);
  const light = themed.map(variable => [variable.name, variable.light ?? variable.value] as [string, string]);
  const dark = themed.map(variable => [variable.name, variable.value] as [string, string]);
  lines.push(
    "/* Light theme: follows the system (prefers-color-scheme) unless the page sets data-theme='dark'. */",
    '@media (prefers-color-scheme: light) {',
    ...themeBlock(":root:not([data-theme='dark'])", 'light', light, '  '),
    '}',
    '',
    "/* data-theme='light' forces the light theme on the page (html) or on a subtree. */",
    ...themeBlock("[data-theme='light']", 'light', light),
    '',
    "/* data-theme='dark' forces the dark theme, also for a subtree inside a light page. */",
    ...themeBlock("[data-theme='dark']", 'dark', dark),
    ''
  );
  for (const [language, name] of [
    ['ja', 'sans-ja'],
    ['zh', 'sans-zh']
  ]) {
    const font = variables.find(variable => variable.name === `--on-font-family-${name}`);
    if (font) lines.push(`:lang(${language}) { --on-font-family-sans: ${font.value}; }`, '');
  }
  return lines.join('\n');
}

function literal(value: Json): string {
  return JSON.stringify(value, null, 2);
}

export function renderTokensTs(source: JsonObject, variables: CssVariable[]): string {
  const groups = Object.keys(source).filter(group => group !== 'meta');
  const blocks = groups.map(group => `export const ${group} = ${literal(unwrap(source[group] ?? null))} as const;`);
  const lightTheme = Object.fromEntries(
    groups.filter(group => hasLight(source[group])).map(group => [group, unwrap(source[group] ?? null, 'light')])
  );
  const names = variables.map(variable => `  | '${variable.name.slice('--on-'.length)}'`).join('\n');
  const detailGlow = String(unwrap(child(source.effect, 'detailGlow')));

  return `/* ${HEADER} */

${blocks.join('\n\n')}

/** Theme names; dark is the default and the values above. */
export const themeNames = ['dark', 'light'] as const;
export type ThemeName = (typeof themeNames)[number];

/** Light theme values of the themed groups; tokens without a light value repeat the dark value. */
export const lightTheme = ${literal(lightTheme)} as const;

/** All CSS variable names without the --on- prefix. */
export type TokenVariable =
${names};

/** Reference a token CSS variable, e.g. tokenVar('surface-card') → var(--on-surface-card). */
export function tokenVar(name: TokenVariable): string {
  return \`var(--on-\${name})\`;
}

/** Upper-right detail-header glow; accent is a six-digit hex accent color, default #3C96F5. */
export function detailGlow(accent = '#3C96F5'): string {
  return ${JSON.stringify(detailGlow)}.replaceAll('{accent}', accent);
}
`;
}

function themeGroup(variables: CssVariable[], path: string[]): Record<string, string> {
  const result: Record<string, string> = {};
  for (const variable of variables) {
    if (variable.path.length !== path.length + 1) continue;
    if (!path.every((segment, index) => variable.path[index] === segment)) continue;
    const key = variable.path.at(-1) ?? '';
    result[kebab(key)] = `var(${variable.name})`;
  }
  return result;
}

// UnoCSS splits trailing color-name digits into shades (series1 → series-1, then series.1).
// Store these keys nested in the theme, keeping class names such as bg-chart-series1.
function nestTrailingDigits(group: Record<string, string>): Record<string, string | Record<string, string>> {
  const result: Record<string, string | Record<string, string>> = {};
  for (const [key, value] of Object.entries(group)) {
    const match = /^(.*[a-z])(\d+)$/.exec(key);
    if (!match?.[1] || !match[2]) {
      result[key] = value;
      continue;
    }
    const nested = result[match[1]] ?? {};
    if (typeof nested === 'string') throw new Error(`Color key ${match[1]} conflicts with ${key}`);
    nested[match[2]] = value;
    result[match[1]] = nested;
  }
  return result;
}

/** Utility color groups: class prefix → token group. ink = text colors, line = borders (the CSS names keep text/border). */
const COLOR_GROUPS: Array<[string, string]> = [
  ['surface', 'surface'],
  ['ink', 'text'],
  ['line', 'border'],
  ['brand', 'brand'],
  ['accent', 'accent'],
  ['status', 'status'],
  ['button', 'button'],
  ['chart', 'chart'],
  ['component', 'component'],
  ['macos', 'macos']
];

function colorGroups(source: JsonObject, variables: CssVariable[]): Record<string, Record<string, string>> {
  const groups: Record<string, Record<string, string>> = {};
  for (const [prefix, group] of COLOR_GROUPS) groups[prefix] = themeGroup(variables, ['color', group]);
  // Gradient arrays are not single colors and do not enter the color theme.
  for (const [key, token] of Object.entries(child(child(source, 'color'), 'brand'))) {
    if (isObject(token) && Array.isArray(token.value)) delete groups.brand?.[kebab(key)];
  }
  return groups;
}

function typographySpecs(source: JsonObject): Record<string, Record<string, string>> {
  const typography: Record<string, Record<string, string>> = {};
  for (const [key, spec] of Object.entries(child(source, 'typography'))) {
    if (!isObject(spec)) continue;
    const base = `--on-typography-${kebab(key)}`;
    const css: Record<string, string> = {
      'font-size': `var(${base}-size)`,
      'line-height': `var(${base}-line-height)`,
      'font-weight': `var(${base}-weight)`,
      'letter-spacing': 'letterSpacing' in spec ? `var(${base}-letter-spacing)` : '0'
    };
    if ('textTransform' in spec) css['text-transform'] = `var(${base}-text-transform)`;
    if (key === 'mono') css['font-family'] = 'var(--on-font-family-mono)';
    typography[TYPOGRAPHY_CLASS[key] ?? kebab(key)] = css;
  }
  return typography;
}

function breakpoints(source: JsonObject): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(child(child(source.layout, 'web'), 'breakpoints'))) {
    result[key] = `${String(value)}px`;
  }
  return result;
}

export function renderUnoPreset(source: JsonObject, variables: CssVariable[]): string {
  const colors = colorGroups(source, variables);
  const theme = {
    colors: { ...colors, chart: nestTrailingDigits(colors.chart ?? {}) },
    borderRadius: themeGroup(variables, ['radius']),
    boxShadow: themeGroup(variables, ['shadow']),
    fontFamily: themeGroup(variables, ['font', 'family']),
    duration: themeGroup(variables, ['motion', 'duration']),
    easing: themeGroup(variables, ['motion', 'easing']),
    zIndex: themeGroup(variables, ['zIndex']),
    breakpoints: breakpoints(source)
  };

  return `/* ${HEADER} */
import type { Preset } from 'unocss';

/** Colors, radii, shadows reference token CSS variables; pages must import @opennavo/design-tokens/tokens.css. */
export const theme = ${literal(theme)};

/** Typography text-{name} classes set font size, line height, weight, and tracking together. */
export const typography: Record<string, Record<string, string>> = ${literal(typographySpecs(source))};

const typographyPattern = new RegExp(\`^text-(\${Object.keys(typography).join('|')})$\`);

/** Use alongside presetWind3: presets: [presetWind3(), presetOpenNavo()]. */
export function presetOpenNavo(): Preset {
  return {
    name: '@opennavo/design-tokens',
    theme,
    rules: [[typographyPattern, ([, name]) => (name ? typography[name] : undefined)]]
  };
}
`;
}

/** Tailwind CSS v4: @theme inline maps the same class names onto the token variables. */
export function renderTailwindCss(source: JsonObject, variables: CssVariable[]): string {
  const lines = [
    `/* ${HEADER} */`,
    '/* Tailwind CSS v4: @import "tailwindcss"; then @import "@opennavo/design-tokens/tailwind.css"; */',
    "@import './tokens.css';",
    '',
    '@theme inline {'
  ];
  for (const [prefix, group] of Object.entries(colorGroups(source, variables))) {
    for (const [key, value] of Object.entries(group)) lines.push(`  --color-${prefix}-${key}: ${value};`);
  }
  for (const [key, value] of Object.entries(themeGroup(variables, ['radius'])))
    lines.push(`  --radius-${key}: ${value};`);
  for (const [key, value] of Object.entries(themeGroup(variables, ['shadow'])))
    lines.push(`  --shadow-${key}: ${value};`);
  for (const [key, value] of Object.entries(themeGroup(variables, ['font', 'family'])))
    lines.push(`  --font-${key}: ${value};`);
  for (const [key, value] of Object.entries(themeGroup(variables, ['motion', 'easing'])))
    lines.push(`  --ease-${key}: ${value};`);
  for (const [key, value] of Object.entries(breakpoints(source))) lines.push(`  --breakpoint-${key}: ${value};`);
  lines.push('}', '');
  // Tailwind v4 has no named duration or z-index scale, and text-* sizes cannot carry text-transform: add utilities.
  for (const [key, value] of Object.entries(themeGroup(variables, ['motion', 'duration']))) {
    lines.push(`@utility duration-${key} {`, `  transition-duration: ${value};`, '}', '');
  }
  for (const [key, value] of Object.entries(themeGroup(variables, ['zIndex']))) {
    lines.push(`@utility z-${key} {`, `  z-index: ${value};`, '}', '');
  }
  for (const [name, css] of Object.entries(typographySpecs(source))) {
    lines.push(`@utility text-${name} {`, ...Object.entries(css).map(([key, value]) => `  ${key}: ${value};`), '}', '');
  }
  return lines.join('\n');
}

/** Tailwind CSS v3 preset (also usable from v4 through @config): presets: [openNavoPreset]. */
export function renderTailwindPreset(source: JsonObject, variables: CssVariable[]): string {
  const theme = {
    colors: colorGroups(source, variables),
    borderRadius: themeGroup(variables, ['radius']),
    boxShadow: themeGroup(variables, ['shadow']),
    fontFamily: themeGroup(variables, ['font', 'family']),
    transitionDuration: themeGroup(variables, ['motion', 'duration']),
    transitionTimingFunction: themeGroup(variables, ['motion', 'easing']),
    zIndex: themeGroup(variables, ['zIndex']),
    screens: breakpoints(source)
  };
  return `/* ${HEADER} */
// Tailwind CSS v3: import '@opennavo/design-tokens/tokens.css' once, then presets: [openNavoPreset] in tailwind.config.

export const typography: Record<string, Record<string, string>> = ${literal(typographySpecs(source))};

export const openNavoPreset = {
  theme: { extend: ${literal(theme).replace(/\n/g, '\n  ')} },
  plugins: [
    ({ addUtilities }: { addUtilities: (utilities: Record<string, Record<string, string>>) => void }) =>
      addUtilities(Object.fromEntries(Object.entries(typography).map(([name, css]) => [\`.text-\${name}\`, css])))
  ]
};

export default openNavoPreset;
`;
}
