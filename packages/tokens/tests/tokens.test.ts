import { readFileSync } from 'node:fs';
import { createGenerator, presetWind3 } from 'unocss';
import { describe, expect, it } from 'vitest';
import { buildArtifacts, collectCssVariables, mergeTokens, parseShadows } from '../src/build.ts';
import type { JsonObject } from '../src/build.ts';
import { blendOver, contrastRatio } from '../src/contrast.ts';
import { color, lightTheme } from '../dist/tokens.ts';
import { presetOpenNavo } from '../dist/uno-preset.ts';

const root = new URL('../../../', import.meta.url);
const source = JSON.parse(readFileSync(new URL('tokens/tokens.json', root), 'utf8')) as JsonObject;
const artifacts = buildArtifacts(source);
const variables = collectCssVariables(source);
const variable = (name: string) => variables.find(item => item.name === name)?.value;
const themed = variables.filter(item => item.light !== undefined);

describe('Generated files', () => {
  it.each(Object.entries(artifacts))('Keeps %s current', (path, content) => {
    expect(readFileSync(new URL(path, root), 'utf8')).toBe(content);
  });
});

describe('CSS variable naming', () => {
  it('Matches the documented examples', () => {
    expect(variable('--on-surface-card-alt')).toBe('#1F1F1F');
    expect(variable('--on-text-tertiary')).toBe('#8F8F8F');
    expect(variable('--on-radius-big')).toBe('14px');
    expect(variable('--on-space-3-5')).toBe('14px');
    expect(variable('--on-typography-title1-size')).toBe('28px');
    expect(variable('--on-motion-duration-fast')).toBe('120ms');
    expect(variable('--on-z-index-modal')).toBe('300');
    expect(variable('--on-radius-app-icon')).toBe('23%');
  });

  it('Uses unique names with the allowed prefix and characters', () => {
    const names = variables.map(item => item.name);
    for (const name of names) expect(name).toMatch(/^--on-[a-z0-9]+(-[a-z0-9]+)*$/);
    expect(new Set(names).size).toBe(names.length);
  });

  it('Exposes all colors as variables and emits no placeholder CSS', () => {
    const groups = source.color as Record<string, Record<string, unknown>>;
    for (const [group, entries] of Object.entries(groups)) {
      for (const key of Object.keys(entries)) {
        const kebabKey = key.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
        expect(variable(`--on-${group}-${kebabKey}`), `${group}.${key}`).toBeDefined();
      }
    }
    expect(variables.some(item => item.value.includes('{'))).toBe(false);
  });
});

describe('Themes', () => {
  const css = artifacts['packages/tokens/dist/tokens.css']!;

  it('Defaults to dark and switches to light by media query or data-theme', () => {
    expect(css).toMatch(/^:root \{\n  color-scheme: dark;/m);
    expect(css).toContain(
      "@media (prefers-color-scheme: light) {\n  :root:not([data-theme='dark']) {\n    color-scheme: light;"
    );
    expect(css).toContain("[data-theme='light'] {\n  color-scheme: light;");
    expect(css).toContain("[data-theme='dark'] {\n  color-scheme: dark;");
  });

  it('Repeats only themed tokens, with their light values', () => {
    const block = css.slice(css.indexOf("[data-theme='light'] {"), css.indexOf("[data-theme='dark'] {"));
    for (const item of themed) expect(block).toContain(`  ${item.name}: ${item.light};`);
    for (const fixed of ['--on-space-', '--on-radius-', '--on-typography-', '--on-motion-']) {
      expect(block).not.toContain(fixed);
    }
  });

  it('Gives every themed color a light color of the same kind', () => {
    for (const item of themed.filter(entry => entry.path[0] === 'color')) {
      expect(item.light, item.name).toMatch(/^(#|rgba\()/);
    }
  });
});

// Every text color is checked on the surfaces it sits on, in both themes (docs/color.md).
const themes = { dark: color, light: lightTheme.color };
describe.each(Object.entries(themes))('%s theme contrast', (_name, palette) => {
  const surfaces = [palette.surface.base, palette.surface.card, palette.surface.raised, palette.surface.sidebar];

  it.each([
    ['text.primary', palette.text.primary],
    ['text.secondary', palette.text.secondary],
    ['text.tertiary', palette.text.tertiary],
    ['text.accent', palette.text.accent],
    ['brand.salmon', palette.brand.salmon],
    ['status.success', palette.status.success],
    ['status.warning', palette.status.warning],
    ['status.danger', palette.status.danger],
    ['status.info', palette.status.info]
  ])('Meets 4.5:1 for %s on base, card, raised and sidebar', (_token, foreground) => {
    for (const background of surfaces) expect(contrastRatio(foreground, background)).toBeGreaterThanOrEqual(4.5);
  });

  it.each([
    ['success', palette.status.success, palette.status.successSubtle],
    ['warning', palette.status.warning, palette.status.warningSubtle],
    ['danger', palette.status.danger, palette.status.dangerSubtle],
    ['info', palette.status.info, palette.status.infoSubtle],
    ['salmon', palette.brand.salmon, palette.accent.salmonSubtle],
    ['accent', palette.text.accent, palette.accent.coralSubtle]
  ])('Meets 4.5:1 for %s badges on their tinted backgrounds', (_token, text, subtle) => {
    for (const surface of [palette.surface.base, palette.surface.card, palette.surface.cardAlt]) {
      expect(contrastRatio(text, blendOver(subtle, surface))).toBeGreaterThanOrEqual(4.5);
    }
  });

  it('Keeps button text readable in every state', () => {
    const { button } = palette;
    for (const [text, states] of [
      [button.primaryText, [button.primaryBg, button.primaryHover, button.primaryPressed]],
      [button.secondaryText, [button.secondaryBg, button.secondaryHover, button.secondaryPressed]],
      [button.accentText, [button.accentBg, button.accentHover, button.accentPressed]]
    ] as const) {
      for (const background of states) expect(contrastRatio(text, background)).toBeGreaterThanOrEqual(4.5);
    }
  });

  it('Keeps graphics at 3:1 and readable text on fills and terminal tiles', () => {
    for (const background of [palette.surface.card, palette.surface.base]) {
      for (const graphic of [
        palette.brand.coral,
        palette.chart.series1,
        palette.chart.series2,
        palette.chart.series3
      ]) {
        expect(contrastRatio(graphic, background)).toBeGreaterThanOrEqual(3);
      }
    }
    expect(contrastRatio(palette.text.onAccent, palette.brand.coral)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(palette.component.cliIconText, palette.component.cliIconFrom)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(palette.component.monoText, palette.surface.inset)).toBeGreaterThanOrEqual(4.5);
  });
});

describe('UnoCSS preset', () => {
  it('Generates token utilities', async () => {
    const generator = await createGenerator({ presets: [presetWind3(), presetOpenNavo()] });
    const { css } = await generator.generate(
      'bg-surface-card-alt text-ink-tertiary text-ink-accent border-line-subtle bg-chart-series1 rounded-big shadow-popover z-modal duration-fast ease-standard text-title1 text-label',
      { preflights: false }
    );
    expect(css).toContain('.bg-surface-card-alt{background-color:var(--on-surface-card-alt);}');
    expect(css).toContain('.text-ink-accent{color:var(--on-text-accent);}');
    expect(css).toContain('.bg-chart-series1{background-color:var(--on-chart-series1);}');
    expect(css).toContain('.z-modal{z-index:var(--on-z-index-modal);}');
    expect(css).toContain('text-transform:var(--on-typography-label-text-transform);');
  });
});

describe('Tailwind CSS', () => {
  it('Compiles the v4 theme into the same class names', async () => {
    const { compile } = await import('tailwindcss');
    const files: Record<string, string> = {
      'tailwindcss/theme.css': '',
      './tokens.css': artifacts['packages/tokens/dist/tokens.css']!
    };
    const compiler = await compile(
      `@import 'tailwindcss/theme.css';\n${artifacts['packages/tokens/dist/tailwind.css']}\n@tailwind utilities;`,
      {
        base: '/',
        loadStylesheet: async (id: string) => ({ path: id, base: '/', content: files[id] ?? '' })
      }
    );
    const css = compiler.build([
      'bg-surface-card',
      'text-ink-primary',
      'border-line-default',
      'rounded-panel',
      'shadow-modal',
      'z-toast',
      'duration-slow',
      'text-title2'
    ]);
    expect(css).toContain('background-color: var(--on-surface-card)');
    expect(css).toContain('color: var(--on-text-primary)');
    expect(css).toContain('border-radius: var(--on-radius-panel)');
    expect(css).toContain('z-index: var(--on-z-index-toast)');
    expect(css).toContain('font-size: var(--on-typography-title2-size)');
  });

  it('Exposes the same groups in the v3 preset', async () => {
    const { openNavoPreset } = await import('../dist/tailwind-preset.ts');
    expect(openNavoPreset.theme.extend.colors.surface.card).toBe('var(--on-surface-card)');
    expect(openNavoPreset.theme.extend.colors.ink.primary).toBe('var(--on-text-primary)');
    expect(openNavoPreset.theme.extend.screens.lg).toBe('1024px');
  });
});

describe('Platform files', () => {
  it('Writes per-theme DTCG colors', () => {
    const dark = JSON.parse(artifacts['packages/tokens/dist/dtcg/dark.tokens.json']!);
    const light = JSON.parse(artifacts['packages/tokens/dist/dtcg/light.tokens.json']!);
    expect(dark.color.surface.card).toEqual({ $type: 'color', $value: '#1A1A1A', $description: 'Cards.' });
    expect(light.color.surface.card.$value).toBe('#FFFFFF');
    expect(light.color.border.subtle.$value).toBe('#00000014');
    expect(dark.typography.title1.$value.fontSize).toBe('28px');
  });

  it('Writes Flutter and Swift values for both themes', () => {
    const dart = artifacts['packages/flutter/lib/src/tokens.g.dart']!;
    const swift = artifacts['packages/swift/Sources/OpenNavoDesign/Tokens.generated.swift']!;
    expect(dart).toContain('surfaceCard: Color(0xFF1A1A1A),');
    expect(dart).toContain('surfaceCard: Color(0xFFFFFFFF),');
    expect(dart).toContain('static const double s0_5 = 2;');
    expect(swift).toContain('public static let surfaceCard = Color.on(light: 0xFFFFFF, dark: 0x1A1A1A)');
    expect(swift).toContain('public static let standard: CGFloat = 10');
  });

  it('Parses shadow lists', () => {
    expect(parseShadows('inset 0 0 0 0.5px rgba(255, 255, 255, 0.14), 0 1px 2px rgba(0, 0, 0, 0.40)')).toEqual([
      { inset: true, x: 0, y: 0, blur: 0, spread: 0.5, color: { r: 255, g: 255, b: 255, a: 0.14 } },
      { inset: false, x: 0, y: 1, blur: 2, spread: 0, color: { r: 0, g: 0, b: 0, a: 0.4 } }
    ]);
  });
});

describe('Brand overrides', () => {
  it('Re-themes the brand layer without touching anything else', () => {
    const merged = mergeTokens(source, { color: { brand: { coral: { value: '#3C7BFF', light: '#2457D6' } } } });
    const css = buildArtifacts(merged)['packages/tokens/dist/tokens.css']!;
    expect(css).toContain('--on-brand-coral: #3C7BFF;');
    expect(css).toContain('--on-brand-coral: #2457D6;');
    expect(css).toContain('--on-surface-card: #1A1A1A;');
    const lightOnly = mergeTokens(source, { color: { brand: { coral: { light: '#C2410C' } } } });
    expect(collectCssVariables(lightOnly).find(item => item.name === '--on-brand-coral')).toMatchObject({
      value: '#FF7356',
      light: '#C2410C'
    });
  });
});
