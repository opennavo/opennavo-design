// SwiftUI tokens: colors that follow the view's light/dark appearance, plus spacing, radii, type, motion and layout.
// Color.on(light:dark:) and OnTextStyle live in packages/swift/Sources/OpenNavoDesign/Support.swift.
import { HEADER, camel, child, collectLeaves, isObject, parseColor, parseShadows, unwrap } from './model.ts';
import type { Json, JsonObject, Rgba } from './model.ts';

// radius.default is OnRadius.standard on every platform (default is a keyword in Swift and Dart).
const RENAMES: Record<string, string> = { default: 'standard' };

function number(value: number): string {
  if (Number.isInteger(value)) return String(value);
  return String(Math.round(value * 1000) / 1000);
}

function hex({ r, g, b }: Rgba): string {
  return `0x${[r, g, b].map(channel => channel.toString(16).padStart(2, '0').toUpperCase()).join('')}`;
}

function dynamicColor(dark: string, light: string): string {
  const d = parseColor(dark);
  const l = parseColor(light);
  if (!d || !l) throw new Error(`Not a color: ${dark} / ${light}`);
  const alpha = (color: Rgba, label: string) => (color.a < 1 ? `, ${label}Alpha: ${number(color.a)}` : '');
  return `Color.on(light: ${hex(l)}${alpha(l, 'light')}, dark: ${hex(d)}${alpha(d, 'dark')})`;
}

function doc(text: string | undefined, indent = '    '): string[] {
  return text ? [`${indent}/// ${text}`] : [];
}

export function renderSwift(source: JsonObject): string {
  const lines = [`// ${HEADER}`, '', 'import SwiftUI', ''];

  lines.push('/// Theme colors (tokens color.*): each value follows the light or dark appearance it is drawn in.');
  lines.push('public enum OnColor {');
  const gradients: string[] = [];
  for (const leaf of collectLeaves(child(source, 'color'))) {
    const name = camel(leaf.path);
    if (Array.isArray(leaf.dark)) {
      const light = leaf.light as Json[];
      const stops = leaf.dark.map((stop, index) => dynamicColor(String(stop), String(light[index] ?? stop)));
      gradients.push(...doc(leaf.desc), `    public static let ${name}: [Color] = [${stops.join(', ')}]`);
      continue;
    }
    if (typeof leaf.dark !== 'string' || !parseColor(leaf.dark)) continue;
    lines.push(...doc(leaf.desc), `    public static let ${name} = ${dynamicColor(leaf.dark, String(leaf.light))}`);
  }
  lines.push('}', '');
  lines.push('/// Gradient stops (tokens color.brand.*Gradient), top-left to bottom-right.');
  lines.push('public enum OnGradient {', ...gradients, '}', '');

  lines.push('/// Spacing scale in points (tokens space.*): s0_5 is space 0.5 (2), s4 is space 4 (16).');
  lines.push('public enum OnSpace {');
  const space = unwrap(child(source, 'space')) as Record<string, number>;
  for (const [key, value] of Object.entries(space).sort(([a], [b]) => Number(a) - Number(b))) {
    lines.push(`    public static let s${key.replace('.', '_')}: CGFloat = ${number(value)}`);
  }
  lines.push('}', '');

  lines.push('/// Corner radii (tokens radius.*); standard is radius.default.');
  lines.push('public enum OnRadius {');
  for (const leaf of collectLeaves(child(source, 'radius'))) {
    const key = leaf.path.at(-1)!;
    if (typeof leaf.dark === 'string' && leaf.dark.endsWith('%')) {
      lines.push(
        ...doc(leaf.desc),
        `    public static let ${camel([key])}Fraction: CGFloat = ${number(Number.parseFloat(leaf.dark) / 100)}`
      );
      continue;
    }
    lines.push(
      ...doc(leaf.desc),
      `    public static let ${RENAMES[key] ?? camel([key])}: CGFloat = ${number(Number(leaf.dark))}`
    );
  }
  lines.push('}', '');

  lines.push(
    '/// Type scale (tokens typography.*). Native apps draw it in the system font (SF Pro); tracking is in points.'
  );
  lines.push('public enum OnTypography {');
  for (const [key, spec] of Object.entries(child(source, 'typography'))) {
    if (!isObject(spec)) continue;
    const size = Number(spec.size);
    const tracking = typeof spec.letterSpacing === 'string' ? Number.parseFloat(spec.letterSpacing) * size : 0;
    const weight = { 400: 'regular', 500: 'medium', 600: 'semibold', 700: 'bold' }[Number(spec.weight)] ?? 'regular';
    const parts = [
      `size: ${number(size)}`,
      `lineHeight: ${number(Number(spec.lineHeight))}`,
      `weight: .${weight}`,
      `tracking: ${number(tracking)}`,
      ...(spec.textTransform === 'uppercase' ? ['uppercase: true'] : []),
      ...(key === 'mono' ? ['monospaced: true'] : [])
    ];
    lines.push(...doc(typeof spec.desc === 'string' ? spec.desc : undefined));
    lines.push(`    public static let ${camel([key])} = OnTextStyle(${parts.join(', ')})`);
  }
  lines.push('}', '');

  lines.push(
    '/// Elevation shadows (tokens shadow.*): SwiftUI radius is half the CSS blur; spread and inset layers are omitted.'
  );
  lines.push('public enum OnShadow {');
  for (const leaf of collectLeaves(child(source, 'shadow'))) {
    const layer = (value: string) =>
      parseShadows(value).find(shadow => !shadow.inset && shadow.blur > 0 && shadow.color.a > 0);
    const dark = layer(String(leaf.dark));
    const light = layer(String(leaf.light));
    if (!dark && !light) continue;
    const color = (shadow: ReturnType<typeof layer>) =>
      shadow ? `rgba(${shadow.color.r}, ${shadow.color.g}, ${shadow.color.b}, ${shadow.color.a})` : 'rgba(0, 0, 0, 0)';
    const pick = (dark ?? light)!;
    lines.push(
      ...doc(leaf.desc),
      `    public static let ${camel(leaf.path)} = OnShadowStyle(color: ${dynamicColor(color(dark), color(light))}, radius: ${number(pick.blur / 2)}, x: ${number(pick.x)}, y: ${number(pick.y)})`
    );
  }
  lines.push('}', '');

  const motion = unwrap(child(source, 'motion')) as {
    duration: Record<string, number>;
    easing: Record<string, string>;
  };
  lines.push('/// Motion (tokens motion.*): durations in seconds and timing curves.');
  lines.push('public enum OnMotion {');
  for (const [key, ms] of Object.entries(motion.duration)) {
    lines.push(`    public static let ${camel([key])}: TimeInterval = ${number(ms / 1000)}`);
  }
  for (const [key, easing] of Object.entries(motion.easing)) {
    const numbers = /cubic-bezier\(([^)]+)\)/
      .exec(easing)?.[1]
      ?.split(',')
      .map(value => number(Number(value)));
    if (numbers?.length !== 4) continue;
    lines.push(
      `    /// ${key} easing; pass a duration such as OnMotion.base.`,
      `    public static func ${camel([key])}(duration: TimeInterval = ${number(motion.duration.base! / 1000)}) -> Animation {`,
      `        .timingCurve(${numbers.join(', ')}, duration: duration)`,
      '    }'
    );
  }
  lines.push('}', '');

  lines.push('/// Layout metrics (tokens layout.*) in points.');
  lines.push('public enum OnLayout {');
  const layout = unwrap(child(source, 'layout')) as Record<string, Record<string, Json>>;
  for (const [platform, values] of Object.entries(layout)) {
    for (const [key, value] of Object.entries(values)) {
      if (typeof value === 'number')
        lines.push(`    public static let ${camel([platform, key])}: CGFloat = ${number(value)}`);
      else if (isObject(value)) {
        for (const [inner, innerValue] of Object.entries(value)) {
          lines.push(`    public static let ${camel([platform, key, inner])}: CGFloat = ${number(Number(innerValue))}`);
        }
      }
    }
  }
  lines.push('}', '');
  return lines.join('\n');
}
