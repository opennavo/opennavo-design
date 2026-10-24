**English** · [简体中文](../../docs/i18n/zh-CN/packages/tokens/README.md) · [繁體中文](../../docs/i18n/zh-Hant/packages/tokens/README.md) · [日本語](../../docs/i18n/ja-JP/packages/tokens/README.md) · [Español](../../docs/i18n/es-ES/packages/tokens/README.md) · [Português (Brasil)](../../docs/i18n/pt-BR/packages/tokens/README.md) · [Русский](../../docs/i18n/ru-RU/packages/tokens/README.md) · [Deutsch](../../docs/i18n/de-DE/packages/tokens/README.md) · [Français](../../docs/i18n/fr-FR/packages/tokens/README.md) · [Italiano](../../docs/i18n/it-IT/packages/tokens/README.md)

# @opennavo/design-tokens

Generated from [`tokens/tokens.json`](../../tokens/tokens.json). Do not edit `dist/`; change the JSON and run
`pnpm gen` at the repository root.

| Export                                                                   | What                                                                                                                                                                          |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@opennavo/design-tokens/tokens.css`                                     | Every token as a `--on-*` CSS variable. Dark by default; light through `prefers-color-scheme` or `data-theme="light"`, dark forced with `data-theme="dark"`, also on subtrees |
| `@opennavo/design-tokens/base.css`                                       | Base styles for any framework: html colors and font, `[data-theme]` subtree color, theme-switch transition guard, reduced motion                                              |
| `@opennavo/design-tokens/system-fonts.css`                               | System UI font stacks per language (SF Pro, PingFang SC/TC, Hiragino Sans)                                                                                                    |
| `@opennavo/design-tokens/uno-preset`                                     | `presetOpenNavo()` for UnoCSS (with `presetWind3()`)                                                                                                                          |
| `@opennavo/design-tokens/tailwind.css`                                   | Tailwind CSS v4 `@theme inline` mapping (imports `tokens.css`)                                                                                                                |
| `@opennavo/design-tokens/tailwind-preset`                                | Tailwind CSS v3 preset (`presets: [openNavoPreset]`)                                                                                                                          |
| `@opennavo/design-tokens`                                                | Typed values: `color` (dark), `lightTheme`, `space`, `radius`, `typography` …, `tokenVar()`, `detailGlow()`                                                                   |
| `@opennavo/design-tokens/theme`                                          | `applyThemePreference()`, `themeBootScript()`, `resolveTheme()`, `THEME_PREFERENCES`                                                                                          |
| `@opennavo/design-tokens/contrast`                                       | WCAG contrast helpers used by the tests                                                                                                                                       |
| `@opennavo/design-tokens/build`                                          | The generator as functions: `buildArtifacts()`, `mergeTokens()` for brand overrides                                                                                           |
| `@opennavo/design-tokens/tokens.json`, `…/dtcg/{dark,light}.tokens.json` | Raw tokens and per-theme Design Tokens (DTCG) files for Figma Tokens Studio, Style Dictionary                                                                                 |

Utility names: `bg-surface-*`, `text-ink-*` (text colors), `border-line-*` (borders), `bg-brand-*`, `bg-accent-*`,
`bg-status-*`, `bg-button-*`, `bg-component-*`, `bg-chart-*`, `rounded-*`, `shadow-*`, `text-{hero … mono}`,
`duration-*`, `ease-*`, `z-*`. The full list with values is in [docs/reference/tokens.md](../../docs/reference/tokens.md).

The generator also writes the Flutter (`packages/flutter/lib/src/tokens.g.dart`) and SwiftUI
(`packages/swift/Sources/OpenNavoDesign/Tokens.generated.swift`) tokens and the token reference. For another app's
brand: `node scripts/generate.ts --overrides brand.json --out <dir>` ([docs/theming.md](../../docs/theming.md)).
