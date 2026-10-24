[English](../../../../../packages/tokens/README.md) · [简体中文](../../../zh-CN/packages/tokens/README.md) · [繁體中文](../../../zh-Hant/packages/tokens/README.md) · [日本語](../../../ja-JP/packages/tokens/README.md) · [Español](../../../es-ES/packages/tokens/README.md) · [Português (Brasil)](../../../pt-BR/packages/tokens/README.md) · [Русский](../../../ru-RU/packages/tokens/README.md) · **Deutsch** · [Français](../../../fr-FR/packages/tokens/README.md) · [Italiano](../../../it-IT/packages/tokens/README.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="opennavodesign-tokens"></a>

# @opennavo/design-tokens

Erzeugt aus [`tokens/tokens.json`](../../../../../tokens/tokens.json). Nicht bearbeiten `dist/`; ändern Sie die JSON und laufen
`pnpm gen` am Repository root.

| Ausfuhren                                                                | Was                                                                                                                                                                                    |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@opennavo/design-tokens/tokens.css`                                     | Jedes Token als ein `--on-*` CSS variabel. Standardmäßig dunkel; Licht durch `prefers-color-scheme` oder `data-theme="light"`Dark Forced mit `data-theme="dark"`, auch auf Unterbäumen |
| `@opennavo/design-tokens/base.css`                                       | Basis-Styles für jedes Framework: HTML-Farben und Schriftart, `[data-theme]` Unterbaumfarbe, Theme-Switch-Übergangsschutz, reduzierte Bewegung                                         |
| `@opennavo/design-tokens/system-fonts.css`                               | System UI Font Stacks pro Sprache (SF Pro, PingFang SC/TC, Hiragino Sans)                                                                                                              |
| `@opennavo/design-tokens/uno-preset`                                     | `presetOpenNavo()` für UnoCSS (mit) `presetWind3()`)                                                                                                                                   |
| `@opennavo/design-tokens/tailwind.css`                                   | Tailwind CSS v4 `@theme inline` Kartierung (Einfuhren) `tokens.css`)                                                                                                                   |
| `@opennavo/design-tokens/tailwind-preset`                                | Tailwind CSS v3 voreingestellt ()`presets: [openNavoPreset]`)                                                                                                                          |
| `@opennavo/design-tokens`                                                | Typisierte Werte: `color` (dunkel) `lightTheme`, `space`, `radius`, `typography` …, `tokenVar()`, `detailGlow()`                                                                       |
| `@opennavo/design-tokens/theme`                                          | `applyThemePreference()`, `themeBootScript()`, `resolveTheme()`, `THEME_PREFERENCES`                                                                                                   |
| `@opennavo/design-tokens/contrast`                                       | WCAG Kontrasthelfer, die von den Tests verwendet werden                                                                                                                                |
| `@opennavo/design-tokens/build`                                          | Der Generator als Funktionen: `buildArtifacts()`, `mergeTokens()` für Brand Overrides                                                                                                  |
| `@opennavo/design-tokens/tokens.json`, `…/dtcg/{dark,light}.tokens.json` | Raw Tokens und Pro-Theme Design Tokens ()DTCG) Dateien für Figma Tokens Studio, Style Dictionary                                                                                       |

Bezeichnung des Versorgungsunternehmens: `bg-surface-*`, `text-ink-*` (Textfarben), `border-line-*` (Grenzen), `bg-brand-*`, `bg-accent-*`,
`bg-status-*`, `bg-button-*`, `bg-component-*`, `bg-chart-*`, `rounded-*`, `shadow-*`, `text-{hero … mono}`,
`duration-*`, `ease-*`, `z-*`Die vollständige Liste mit Werten ist in [docs/reference/tokens.md](../../docs/reference/tokens.md).

Der Generator schreibt auch die Flutter (`packages/flutter/lib/src/tokens.g.dart`) SwiftUI
(`packages/swift/Sources/OpenNavoDesign/Tokens.generated.swift`) Token und die Token-Referenz.
Marke: `node scripts/generate.ts --overrides brand.json --out <dir>` ([docs/theming.md](../../docs/theming.md)).
