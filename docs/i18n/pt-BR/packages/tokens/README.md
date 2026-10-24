[English](../../../../../packages/tokens/README.md) · [简体中文](../../../zh-CN/packages/tokens/README.md) · [繁體中文](../../../zh-Hant/packages/tokens/README.md) · [日本語](../../../ja-JP/packages/tokens/README.md) · [Español](../../../es-ES/packages/tokens/README.md) · **Português (Brasil)** · [Русский](../../../ru-RU/packages/tokens/README.md) · [Deutsch](../../../de-DE/packages/tokens/README.md) · [Français](../../../fr-FR/packages/tokens/README.md) · [Italiano](../../../it-IT/packages/tokens/README.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="opennavodesign-tokens"></a>

# @opennavo/design-tokens

Gerado de [`tokens/tokens.json`](../../../../../tokens/tokens.json). Não editar `dist/`; alterar o JSON e correr
`pnpm gen` no repositório root.

| Exportar                                                                 | O quê?                                                                                                                                                                                  |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@opennavo/design-tokens/tokens.css`                                     | Cada símbolo como um `--on-*` CSS variável. Escuro por padrão; luz através `prefers-color-scheme` ou `data-theme="light"`, escuro forçado com `data-theme="dark"`, também em subárvores |
| `@opennavo/design-tokens/base.css`                                       | Estilos de base para qualquer framework: html cores e fonte, `[data-theme]` cor da subárvore, proteção de transição tema-comutação, movimento reduzido                                  |
| `@opennavo/design-tokens/system-fonts.css`                               | Pilha de fontes do sistema UI por idioma (SF Pro, PingFang SC/TC, Hiragino Sans)                                                                                                        |
| `@opennavo/design-tokens/uno-preset`                                     | `presetOpenNavo()` em vez UnoCSS (com `presetWind3()`)                                                                                                                                  |
| `@opennavo/design-tokens/tailwind.css`                                   | Tailwind CSS v4 `@theme inline` mapeamento (importações) `tokens.css`)                                                                                                                  |
| `@opennavo/design-tokens/tailwind-preset`                                | Tailwind CSS v3 predefinido (`presets: [openNavoPreset]`)                                                                                                                               |
| `@opennavo/design-tokens`                                                | Valores tipográficos: `color` (escuro), `lightTheme`, `space`, `radius`, `typography` …, `tokenVar()`, `detailGlow()`                                                                   |
| `@opennavo/design-tokens/theme`                                          | `applyThemePreference()`, `themeBootScript()`, `resolveTheme()`, `THEME_PREFERENCES`                                                                                                    |
| `@opennavo/design-tokens/contrast`                                       | WCAG ajudantes de contraste usados pelos testes                                                                                                                                         |
| `@opennavo/design-tokens/build`                                          | O gerador como funções: `buildArtifacts()`, `mergeTokens()` para substituições de marca                                                                                                 |
| `@opennavo/design-tokens/tokens.json`, `…/dtcg/{dark,light}.tokens.json` | Tokens brutos e por tema Tokens de Desenho (DTCG) arquivos para Figma Tokens Studio, Dicionário de Estilo                                                                               |

Nomes de utilitários: `bg-surface-*`, `text-ink-*` (cor do texto), `border-line-*` (fronteiras), `bg-brand-*`, `bg-accent-*`,
`bg-status-*`, `bg-button-*`, `bg-component-*`, `bg-chart-*`, `rounded-*`, `shadow-*`, `text-{hero … mono}`,
`duration-*`, `ease-*`, `z-*`. A lista completa com valores está em [docs/reference/tokens.md](../../docs/reference/tokens.md).

O gerador também escreve o Flutter (`packages/flutter/lib/src/tokens.g.dart`) e SwiftUI
(`packages/swift/Sources/OpenNavoDesign/Tokens.generated.swift`) tokens e a referência do token.
marca: `node scripts/generate.ts --overrides brand.json --out <dir>` ([docs/theming.md](../../docs/theming.md)).
