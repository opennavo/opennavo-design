[English](../../../../../packages/tokens/README.md) · [简体中文](../../../zh-CN/packages/tokens/README.md) · [繁體中文](../../../zh-Hant/packages/tokens/README.md) · [日本語](../../../ja-JP/packages/tokens/README.md) · **Español** · [Português (Brasil)](../../../pt-BR/packages/tokens/README.md) · [Русский](../../../ru-RU/packages/tokens/README.md) · [Deutsch](../../../de-DE/packages/tokens/README.md) · [Français](../../../fr-FR/packages/tokens/README.md) · [Italiano](../../../it-IT/packages/tokens/README.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="opennavodesign-tokens"></a>

# @opennavo/design-tokens

Generado en [`tokens/tokens.json`](../../../../../tokens/tokens.json). No editar `dist/`; cambiar el JSON y correr
`pnpm gen` en la raíz del repositorio.

| Exportación                                                              | ¿Qué?                                                                                                                                                                                        |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@opennavo/design-tokens/tokens.css`                                     | Cada token como una `--on-*` CSS variable. Oscuro por defecto; luz a través `prefers-color-scheme` o `data-theme="light"`, oscuro forzado con `data-theme="dark"`, también en los subárboles |
| `@opennavo/design-tokens/base.css`                                       | Estilos de base para cualquier marco: html colores y fuente, `[data-theme]` color de subárbol, guardia de transición con el tema, movimiento reducido                                        |
| `@opennavo/design-tokens/system-fonts.css`                               | Sistema UI pilas de fuentes por idioma (SF Pro, PingFang SC/TC, Hiragino Sans)                                                                                                               |
| `@opennavo/design-tokens/uno-preset`                                     | `presetOpenNavo()` para UnoCSS (con `presetWind3()`)                                                                                                                                         |
| `@opennavo/design-tokens/tailwind.css`                                   | Tailwind CSS v4 `@theme inline` mapeo (importaciones `tokens.css`)                                                                                                                           |
| `@opennavo/design-tokens/tailwind-preset`                                | Tailwind CSS v3 preset (`presets: [openNavoPreset]`)                                                                                                                                         |
| `@opennavo/design-tokens`                                                | Valores tipo: `color` (Dark), `lightTheme`, `space`, `radius`, `typography` …, `tokenVar()`, `detailGlow()`                                                                                  |
| `@opennavo/design-tokens/theme`                                          | `applyThemePreference()`, `themeBootScript()`, `resolveTheme()`, `THEME_PREFERENCES`                                                                                                         |
| `@opennavo/design-tokens/contrast`                                       | WCAG ayudadores de contraste utilizados por las pruebas                                                                                                                                      |
| `@opennavo/design-tokens/build`                                          | El generador como funciones: `buildArtifacts()`, `mergeTokens()` para anulaciones de marca                                                                                                   |
| `@opennavo/design-tokens/tokens.json`, `…/dtcg/{dark,light}.tokens.json` | Tokens crudas y tokens de diseño por tema (DTCG) archivos para Figma Tokens Studio, Diccionario de estilo                                                                                    |

Nombres de Utilidad: `bg-surface-*`, `text-ink-*` (colores de texto), `border-line-*` (fronterizas) `bg-brand-*`, `bg-accent-*`,
`bg-status-*`, `bg-button-*`, `bg-component-*`, `bg-chart-*`, `rounded-*`, `shadow-*`, `text-{hero … mono}`,
`duration-*`, `ease-*`, `z-*`. La lista completa con valores está en [docs/reference/tokens.md](../../docs/reference/tokens.md).

El generador también escribe el Flutter (`packages/flutter/lib/src/tokens.g.dart`) y SwiftUI
(`packages/swift/Sources/OpenNavoDesign/Tokens.generated.swift`) fichas y la referencia token. Para otra aplicación
marca: `node scripts/generate.ts --overrides brand.json --out <dir>` ([docs/theming.md](../../docs/theming.md)).
