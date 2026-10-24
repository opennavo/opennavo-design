[English](../../../../../packages/tokens/README.md) · [简体中文](../../../zh-CN/packages/tokens/README.md) · [繁體中文](../../../zh-Hant/packages/tokens/README.md) · [日本語](../../../ja-JP/packages/tokens/README.md) · [Español](../../../es-ES/packages/tokens/README.md) · [Português (Brasil)](../../../pt-BR/packages/tokens/README.md) · [Русский](../../../ru-RU/packages/tokens/README.md) · [Deutsch](../../../de-DE/packages/tokens/README.md) · [Français](../../../fr-FR/packages/tokens/README.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="opennavodesign-tokens"></a>

# @opennavo/design-tokens

Generato da [`tokens/tokens.json`](../../../../../tokens/tokens.json). Non modificare `dist/`; modifica del regolamento JSON e correre
`pnpm gen` alla radice del repository.

| Esportazione                                                             | Cosa?                                                                                                                                                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `@opennavo/design-tokens/tokens.css`                                     | Ogni segno come un `--on-*` CSS variabile. Oscuro per impostazione predefinita; luce attraverso `prefers-color-scheme` o `data-theme="light"`, buio forzato con `data-theme="dark"`, anche su sottotre |
| `@opennavo/design-tokens/base.css`                                       | Stile di base per qualsiasi struttura: colori html e carattere, `[data-theme]` subtree colore, a tema-switch guardia di transizione, movimento ridotto                                                 |
| `@opennavo/design-tokens/system-fonts.css`                               | Sistema UI caratteri stack per lingua (SF Pro, PingFang SC/TC, Hiragino Sans)                                                                                                                          |
| `@opennavo/design-tokens/uno-preset`                                     | `presetOpenNavo()` per UnoCSS (con `presetWind3()`)                                                                                                                                                    |
| `@opennavo/design-tokens/tailwind.css`                                   | Tailwind CSS V `@theme inline` mappatura (importazioni `tokens.css`)                                                                                                                                   |
| `@opennavo/design-tokens/tailwind-preset`                                | Tailwind CSS preimpostazione v3 (`presets: [openNavoPreset]`)                                                                                                                                          |
| `@opennavo/design-tokens`                                                | Valori di tipo: `color` (dark) `lightTheme`, `space`, `radius`, `typography` …, `tokenVar()`, `detailGlow()`                                                                                           |
| `@opennavo/design-tokens/theme`                                          | `applyThemePreference()`, `themeBootScript()`, `resolveTheme()`, `THEME_PREFERENCES`                                                                                                                   |
| `@opennavo/design-tokens/contrast`                                       | WCAG aiutanti a contrasto utilizzati dai test                                                                                                                                                          |
| `@opennavo/design-tokens/build`                                          | Il generatore come funzioni: `buildArtifacts()`, `mergeTokens()` per overrides di marca                                                                                                                |
| `@opennavo/design-tokens/tokens.json`, `…/dtcg/{dark,light}.tokens.json` | Token grezzi e per tema Design Tokens (DTCG) file per Figma Tokens Studio, Dizionario di stile                                                                                                         |

Nomi di utilità: `bg-surface-*`, `text-ink-*` (colori di testo), `border-line-*` (Confronti), `bg-brand-*`, `bg-accent-*`,
`bg-status-*`, `bg-button-*`, `bg-component-*`, `bg-chart-*`, `rounded-*`, `shadow-*`, `text-{hero … mono}`,
`duration-*`, `ease-*`, `z-*`. L'elenco completo con i valori è in [docs/reference/tokens.md](../../docs/reference/tokens.md).

Il generatore scrive anche il Flutter (`packages/flutter/lib/src/tokens.g.dart`) e SwiftUI
(`packages/swift/Sources/OpenNavoDesign/Tokens.generated.swift`) token e riferimento token. Per un'altra app
marca: `node scripts/generate.ts --overrides brand.json --out <dir>` ([Docs/theming.md](../../docs/theming.md)).
