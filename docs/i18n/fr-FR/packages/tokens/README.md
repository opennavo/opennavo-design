[English](../../../../../packages/tokens/README.md) · [简体中文](../../../zh-CN/packages/tokens/README.md) · [繁體中文](../../../zh-Hant/packages/tokens/README.md) · [日本語](../../../ja-JP/packages/tokens/README.md) · [Español](../../../es-ES/packages/tokens/README.md) · [Português (Brasil)](../../../pt-BR/packages/tokens/README.md) · [Русский](../../../ru-RU/packages/tokens/README.md) · [Deutsch](../../../de-DE/packages/tokens/README.md) · **Français** · [Italiano](../../../it-IT/packages/tokens/README.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="opennavodesign-tokens"></a>

# @opennavo/design-tokens

Produit à partir de [`tokens/tokens.json`](../../../../../tokens/tokens.json). Ne pas modifier `dist/`; modifier le JSON et courir
`pnpm gen` au dépôt racine.

| Exportations                                                             | Quoi ?                                                                                                                                                                                           |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `@opennavo/design-tokens/tokens.css`                                     | Chaque jeton comme un `--on-*` CSS variable. Dark par défaut; lumière à travers `prefers-color-scheme` ou `data-theme="light"`, sombre forcé avec `data-theme="dark"`, aussi sur les sous-arbres |
| `@opennavo/design-tokens/base.css`                                       | Styles de base pour tout cadre : couleurs et polices html, `[data-theme]` sous-arbre couleur, thème-switch transition garde, mouvement réduit                                                    |
| `@opennavo/design-tokens/system-fonts.css`                               | Piles de police de l'interface utilisateur système par langue (SF Pro, PingFang SC/TC, Hiragino Sans)                                                                                            |
| `@opennavo/design-tokens/uno-preset`                                     | `presetOpenNavo()` pour UnoCSS (avec `presetWind3()`)                                                                                                                                            |
| `@opennavo/design-tokens/tailwind.css`                                   | Tailwind CSS v4 `@theme inline` cartographie (importations) `tokens.css`)                                                                                                                        |
| `@opennavo/design-tokens/tailwind-preset`                                | Tailwind CSS v3 prédéfini (`presets: [openNavoPreset]`)                                                                                                                                          |
| `@opennavo/design-tokens`                                                | Valeurs dactylographiées: `color` (dark), `lightTheme`, `space`, `radius`, `typography` …, `tokenVar()`, `detailGlow()`                                                                          |
| `@opennavo/design-tokens/theme`                                          | `applyThemePreference()`, `themeBootScript()`, `resolveTheme()`, `THEME_PREFERENCES`                                                                                                             |
| `@opennavo/design-tokens/contrast`                                       | WCAG les aides de contraste utilisées par les tests                                                                                                                                              |
| `@opennavo/design-tokens/build`                                          | Le générateur fonctionne comme suit: `buildArtifacts()`, `mergeTokens()` pour les remplacements de marque                                                                                        |
| `@opennavo/design-tokens/tokens.json`, `…/dtcg/{dark,light}.tokens.json` | Jetons bruts et jetons de conception par thème (DTCG) fichiers pour Figma Tokens Studio, Dictionnaire Style                                                                                      |

Noms d'utilité : `bg-surface-*`, `text-ink-*` (couleurs du texte), `border-line-*` (frontières), `bg-brand-*`, `bg-accent-*`,
`bg-status-*`, `bg-button-*`, `bg-component-*`, `bg-chart-*`, `rounded-*`, `shadow-*`, `text-{hero … mono}`,
`duration-*`, `ease-*`, `z-*`. La liste complète avec les valeurs est dans [docs/reference/tokens.md](../../docs/reference/tokens.md).

Le générateur écrit aussi le Flutter (`packages/flutter/lib/src/tokens.g.dart`) et SwiftUI
(`packages/swift/Sources/OpenNavoDesign/Tokens.generated.swift`) jetons et la référence de jetons.
marque: `node scripts/generate.ts --overrides brand.json --out <dir>` ([docs/theming.md](../../docs/theming.md)).
