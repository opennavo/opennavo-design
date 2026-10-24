// docs/reference/tokens.md: every token with its CSS variable, utility class and both theme values, so the written
// spec never drifts from the generated code.
import { HEADER, child, collectLeaves, isObject, kebab, unwrap, variableName } from './model.ts';
import type { Json, JsonObject } from './model.ts';

const CLASS_PREFIX: Record<string, string> = {
  surface: 'surface',
  text: 'ink',
  border: 'line',
  brand: 'brand',
  accent: 'accent',
  status: 'status',
  button: 'button',
  chart: 'chart',
  component: 'component',
  macos: 'macos'
};

const GROUP_TITLES: Record<string, string> = {
  surface: 'Surfaces',
  border: 'Borders (utility prefix `line`)',
  text: 'Text (utility prefix `ink`)',
  brand: 'Brand',
  accent: 'Accent tints',
  status: 'Status',
  button: 'Buttons',
  chart: 'Charts',
  component: 'Component colors',
  macos: 'macOS window controls'
};

function cell(value: Json): string {
  if (Array.isArray(value)) return value.map(item => `\`${String(item)}\``).join(' → ');
  return `\`${String(value)}\``.replace(/\|/g, '\\|');
}

function text(value: string | undefined): string {
  return (value ?? '').replace(/\|/g, '\\|');
}

export function renderTokenReference(source: JsonObject): string {
  const lines = [
    '# Token reference',
    '',
    `<!-- ${HEADER} -->`,
    '',
    'Every value below comes from `tokens/tokens.json`. Dark is the default theme; the Light column shows the value',
    'the light theme uses (an em dash means the token is the same in both themes). CSS variables are what the web',
    'packages emit; the utility column is the UnoCSS / Tailwind class stem (`bg-`, `text-`, `border-` … + stem).',
    'Flutter (`OnColors`) and SwiftUI (`OnColor`) use the camelCase path, e.g. `surface.cardAlt` → `surfaceCardAlt`.',
    '',
    '## Color',
    ''
  ];
  const color = child(source, 'color');
  for (const [group, node] of Object.entries(color)) {
    if (!isObject(node)) continue;
    lines.push(
      `### ${GROUP_TITLES[group] ?? group}`,
      '',
      '| Token | CSS variable | Utility | Dark | Light | Use |',
      '| --- | --- | --- | --- | --- | --- |'
    );
    for (const leaf of collectLeaves(node, ['color', group])) {
      const key = leaf.path.at(-1)!;
      const utility = Array.isArray(leaf.dark) ? '—' : `\`${CLASS_PREFIX[group] ?? group}-${kebab(key)}\``;
      const same = JSON.stringify(leaf.dark) === JSON.stringify(leaf.light);
      lines.push(
        `| \`${group}.${key}\` | \`${variableName(leaf.path)}\` | ${utility} | ${cell(leaf.dark)} | ${same ? '—' : cell(leaf.light)} | ${text(leaf.desc)} |`
      );
    }
    lines.push('');
  }

  lines.push('## Typography', '', 'Class `text-{name}` sets size, line height, weight and tracking together.', '');
  lines.push(
    '| Name | Class | Size / line height | Weight | Tracking | Use |',
    '| --- | --- | --- | --- | --- | --- |'
  );
  for (const [key, spec] of Object.entries(child(source, 'typography'))) {
    if (!isObject(spec)) continue;
    const name = key === 'statValue' ? 'stat' : kebab(key);
    const tracking = typeof spec.letterSpacing === 'string' ? spec.letterSpacing : '0';
    const transform = spec.textTransform ? `, ${String(spec.textTransform)}` : '';
    lines.push(
      `| \`${key}\` | \`text-${name}\` | ${String(spec.size)} / ${String(spec.lineHeight)} px | ${String(spec.weight)} | ${tracking}${transform} | ${text(typeof spec.desc === 'string' ? spec.desc : undefined)} |`
    );
  }
  const fonts = unwrap(child(source, 'font')) as { family: Record<string, string[]> };
  lines.push('', '| Font family | Stack |', '| --- | --- |');
  for (const [key, stack] of Object.entries(fonts.family)) lines.push(`| \`${key}\` | ${stack.join(', ')} |`);
  lines.push('');

  const scale = (title: string, group: string, unit: string, prefix: string) => {
    lines.push(`## ${title}`, '', `| Name | CSS variable | Value | Use |`, '| --- | --- | --- | --- |');
    for (const leaf of collectLeaves(child(source, group), [group])) {
      const key = leaf.path.at(-1)!;
      const value = typeof leaf.dark === 'number' ? `${leaf.dark}${unit}` : String(leaf.dark);
      lines.push(`| \`${prefix}${kebab(key)}\` | \`${variableName(leaf.path)}\` | ${value} | ${text(leaf.desc)} |`);
    }
    lines.push('');
  };
  scale('Spacing', 'space', 'px', '');
  scale('Radius', 'radius', 'px', 'rounded-');

  lines.push('## Shadows', '', '| Name | Dark | Light | Use |', '| --- | --- | --- | --- |');
  for (const leaf of collectLeaves(child(source, 'shadow'), ['shadow'])) {
    const same = leaf.dark === leaf.light;
    lines.push(
      `| \`shadow-${kebab(leaf.path.at(-1)!)}\` | ${cell(leaf.dark)} | ${same ? '—' : cell(leaf.light)} | ${text(leaf.desc)} |`
    );
  }
  lines.push('');

  const motion = unwrap(child(source, 'motion')) as {
    duration: Record<string, number>;
    easing: Record<string, string>;
  };
  lines.push('## Motion', '', '| Name | Value |', '| --- | --- |');
  for (const [key, ms] of Object.entries(motion.duration)) lines.push(`| \`duration-${key}\` | ${ms} ms |`);
  for (const [key, easing] of Object.entries(motion.easing)) lines.push(`| \`ease-${key}\` | \`${easing}\` |`);
  lines.push('');

  lines.push('## Z-index', '', '| Name | Value |', '| --- | --- |');
  for (const [key, value] of Object.entries(unwrap(child(source, 'zIndex')) as Record<string, number>)) {
    lines.push(`| \`z-${kebab(key)}\` | ${value} |`);
  }
  lines.push('');

  lines.push('## Layout', '', '| Token | Value |', '| --- | --- |');
  const layout = unwrap(child(source, 'layout')) as Record<string, Record<string, Json>>;
  for (const [platform, values] of Object.entries(layout)) {
    for (const [key, value] of Object.entries(values)) {
      if (isObject(value)) {
        const parts = Object.entries(value).map(([inner, innerValue]) => `${inner} ${String(innerValue)}px`);
        lines.push(`| \`layout.${platform}.${key}\` | ${parts.join(', ')} |`);
      } else lines.push(`| \`layout.${platform}.${key}\` | ${String(value)}px |`);
    }
  }
  lines.push('');

  lines.push('## Effects', '', '| Token | Dark | Light | Use |', '| --- | --- | --- | --- |');
  for (const leaf of collectLeaves(child(source, 'effect'), ['effect'])) {
    const same = JSON.stringify(leaf.dark) === JSON.stringify(leaf.light);
    lines.push(
      `| \`${leaf.path.slice(1).join('.')}\` | ${cell(leaf.dark)} | ${same ? '—' : cell(leaf.light)} | ${text(leaf.desc)} |`
    );
  }
  lines.push('');
  return lines.join('\n');
}
