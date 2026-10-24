// Flutter tokens: theme colors and shadows as ThemeExtensions (dark/light constants), plus spacing, radii, type,
// motion and layout constants. The hand-written theme builder lives in packages/flutter/lib/src/theme.dart.
import { HEADER, camel, child, collectLeaves, hexByte, isObject, parseColor, parseShadows, unwrap } from './model.ts';
import type { Json, JsonObject, Leaf, Rgba, Shadow } from './model.ts';

// Words Dart reserves or that read badly as members; radius.default is OnRadius.standard on every platform.
const RENAMES: Record<string, string> = { default: 'standard' };

function dartColor(value: string): string {
  const color = parseColor(value);
  if (!color) throw new Error(`Not a color: ${value}`);
  return dartRgba(color);
}

function dartRgba({ r, g, b, a }: Rgba): string {
  return `Color(0x${hexByte(a * 255)}${hexByte(r)}${hexByte(g)}${hexByte(b)})`;
}

function doc(text: string | undefined, indent: string): string[] {
  return text ? [`${indent}/// ${text}`] : [];
}

function number(value: number): string {
  return Number.isInteger(value) ? String(value) : String(Math.round(value * 1000) / 1000);
}

interface ColorField {
  name: string;
  list: boolean;
  dark: string;
  light: string;
  desc?: string;
}

function colorFields(source: JsonObject): ColorField[] {
  return collectLeaves(child(source, 'color')).flatMap((leaf: Leaf): ColorField[] => {
    const name = camel(leaf.path);
    if (Array.isArray(leaf.dark)) {
      const list = (value: Json) => `<Color>[${(value as Json[]).map(stop => dartColor(String(stop))).join(', ')}]`;
      return [{ name, list: true, dark: list(leaf.dark), light: list(leaf.light), desc: leaf.desc }];
    }
    if (typeof leaf.dark !== 'string' || !parseColor(leaf.dark)) return [];
    return [{ name, list: false, dark: dartColor(leaf.dark), light: dartColor(String(leaf.light)), desc: leaf.desc }];
  });
}

function boxShadows(value: string): string {
  // Flutter has no inset shadow; the inner hairline of shadow.appIcon is dropped.
  const layers = parseShadows(value).filter((shadow: Shadow) => !shadow.inset && shadow.color.a > 0);
  const items = layers.map(
    shadow =>
      `BoxShadow(color: ${dartRgba(shadow.color)}, offset: Offset(${number(shadow.x)}, ${number(shadow.y)}), blurRadius: ${number(shadow.blur)}, spreadRadius: ${number(shadow.spread)})`
  );
  return `<BoxShadow>[${items.join(', ')}]`;
}

function extensionClass(
  name: string,
  summary: string,
  fields: Array<{ name: string; type: string; dark: string; light: string; desc?: string; lerp: string }>
): string[] {
  const lines = [
    `/// ${summary}`,
    '@immutable',
    `class ${name} extends ThemeExtension<${name}> {`,
    `  const ${name}({`
  ];
  lines.push(...fields.map(field => `    required this.${field.name},`), '  });', '');
  for (const field of fields) lines.push(...doc(field.desc, '  '), `  final ${field.type} ${field.name};`);
  lines.push('');
  for (const theme of ['dark', 'light'] as const) {
    lines.push(`  static const ${name} ${theme} = ${name}(`);
    lines.push(...fields.map(field => `    ${field.name}: ${field[theme]},`), '  );', '');
  }
  lines.push(
    `  /// The ${name} of the nearest Theme, falling back to the brightness's constant when the theme has none.`,
    `  static ${name} of(BuildContext context) {`,
    `    final theme = Theme.of(context);`,
    `    return theme.extension<${name}>() ?? (theme.brightness == Brightness.light ? light : dark);`,
    '  }',
    '',
    '  @override',
    `  ${name} copyWith({`,
    ...fields.map(field => `    ${field.type}? ${field.name},`),
    '  }) {',
    `    return ${name}(`,
    ...fields.map(field => `      ${field.name}: ${field.name} ?? this.${field.name},`),
    '    );',
    '  }',
    '',
    '  @override',
    `  ${name} lerp(covariant ThemeExtension<${name}>? other, double t) {`,
    `    if (other is! ${name}) return this;`,
    `    return ${name}(`,
    ...fields.map(field => `      ${field.name}: ${field.lerp.replaceAll('$', field.name)},`),
    '    );',
    '  }',
    '}',
    ''
  );
  return lines;
}

export function renderDart(source: JsonObject): string {
  const lines = [
    `// ${HEADER}`,
    '// ignore_for_file: lines_longer_than_80_chars',
    '',
    "import 'package:flutter/material.dart';",
    ''
  ];

  const colors = colorFields(source).map(field => ({
    name: field.name,
    type: field.list ? 'List<Color>' : 'Color',
    dark: field.dark,
    light: field.light,
    desc: field.desc,
    lerp: field.list ? '_lerpColors($, other.$, t)' : 'Color.lerp($, other.$, t)!'
  }));
  lines.push(
    ...extensionClass(
      'OnColors',
      'Theme colors (tokens color.*). Dark is the default; light holds the light-theme values.',
      colors
    )
  );

  const shadowLeaves = collectLeaves(child(source, 'shadow'), []);
  const shadows = shadowLeaves.map(leaf => ({
    name: camel(leaf.path),
    type: 'List<BoxShadow>',
    dark: boxShadows(String(leaf.dark)),
    light: boxShadows(String(leaf.light)),
    desc: leaf.desc,
    lerp: 'BoxShadow.lerpList($, other.$, t)!'
  }));
  lines.push(
    ...extensionClass('OnShadows', 'Elevation shadows (tokens shadow.*); inset layers are omitted in Flutter.', shadows)
  );

  lines.push(
    'List<Color> _lerpColors(List<Color> a, List<Color> b, double t) => <Color>[',
    '  for (var i = 0; i < a.length && i < b.length; i++) Color.lerp(a[i], b[i], t)!,',
    '];',
    ''
  );

  lines.push('/// Spacing scale in logical pixels (tokens space.*): s0_5 is space 0.5 (2), s4 is space 4 (16).');
  lines.push('abstract final class OnSpace {');
  const space = unwrap(child(source, 'space')) as Record<string, number>;
  for (const [key, value] of Object.entries(space).sort(([a], [b]) => Number(a) - Number(b))) {
    lines.push(`  static const double s${key.replace('.', '_')} = ${number(value)};`);
  }
  lines.push('}', '');

  lines.push('/// Corner radii (tokens radius.*); standard is radius.default.');
  lines.push('abstract final class OnRadius {');
  for (const leaf of collectLeaves(child(source, 'radius'))) {
    const key = leaf.path.at(-1)!;
    if (typeof leaf.dark === 'string' && leaf.dark.endsWith('%')) {
      lines.push(
        ...doc(leaf.desc, '  '),
        `  static const double ${camel([key])}Fraction = ${number(Number.parseFloat(leaf.dark) / 100)};`
      );
      continue;
    }
    lines.push(
      ...doc(leaf.desc, '  '),
      `  static const double ${RENAMES[key] ?? camel([key])} = ${number(Number(leaf.dark))};`
    );
  }
  lines.push('}', '');

  const family = unwrap(child(source, 'font')) as { family: Record<string, string[]> };
  lines.push('/// Font families (tokens font.family.*): the first entry, then fallbacks in order.');
  lines.push('abstract final class OnFonts {');
  for (const [key, stack] of Object.entries(family.family)) {
    lines.push(`  static const String ${camel([key])} = ${JSON.stringify(stack[0])};`);
    lines.push(
      `  static const List<String> ${camel([key])}Fallback = <String>[${stack
        .slice(1)
        .map(name => JSON.stringify(name))
        .join(', ')}];`
    );
  }
  lines.push('}', '');

  lines.push(
    '/// Type scale (tokens typography.*): size, line height and weight; letter spacing converted from em to pixels.',
    '/// label is drawn uppercase (textTransform), which TextStyle cannot express: uppercase the string.'
  );
  lines.push('abstract final class OnTypography {');
  for (const [key, spec] of Object.entries(child(source, 'typography'))) {
    if (!isObject(spec)) continue;
    const size = Number(spec.size);
    const tracking = typeof spec.letterSpacing === 'string' ? Number.parseFloat(spec.letterSpacing) * size : undefined;
    const parts = [
      `fontSize: ${number(size)}`,
      `height: ${number(Number(spec.lineHeight) / size)}`,
      `fontWeight: FontWeight.w${Number(spec.weight)}`,
      ...(tracking !== undefined ? [`letterSpacing: ${number(tracking)}`] : []),
      ...(key === 'mono' ? ['fontFamily: OnFonts.mono', 'fontFamilyFallback: OnFonts.monoFallback'] : [])
    ];
    lines.push(...doc(typeof spec.desc === 'string' ? spec.desc : undefined, '  '));
    lines.push(`  static const TextStyle ${camel([key])} = TextStyle(${parts.join(', ')});`);
  }
  lines.push('}', '');

  const motion = unwrap(child(source, 'motion')) as {
    duration: Record<string, number>;
    easing: Record<string, string>;
  };
  lines.push('/// Motion (tokens motion.*): durations and easing curves.');
  lines.push('abstract final class OnMotion {');
  for (const [key, ms] of Object.entries(motion.duration)) {
    lines.push(`  static const Duration ${camel([key])} = Duration(milliseconds: ${ms});`);
  }
  for (const [key, easing] of Object.entries(motion.easing)) {
    const numbers = /cubic-bezier\(([^)]+)\)/
      .exec(easing)?.[1]
      ?.split(',')
      .map(value => number(Number(value)));
    if (numbers?.length === 4) lines.push(`  static const Cubic ${camel([key])} = Cubic(${numbers.join(', ')});`);
  }
  lines.push('}', '');

  lines.push('/// Layout metrics (tokens layout.*) in logical pixels.');
  lines.push('abstract final class OnLayout {');
  const layout = unwrap(child(source, 'layout')) as Record<string, Record<string, Json>>;
  for (const [platform, values] of Object.entries(layout)) {
    for (const [key, value] of Object.entries(values)) {
      if (typeof value === 'number') {
        lines.push(`  static const double ${camel([platform, key])} = ${number(value)};`);
      } else if (isObject(value)) {
        for (const [inner, innerValue] of Object.entries(value)) {
          lines.push(`  static const double ${camel([platform, key, inner])} = ${number(Number(innerValue))};`);
        }
      }
    }
  }
  lines.push('}', '');
  return lines.join('\n');
}
