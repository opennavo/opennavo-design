[English](../../../CHANGELOG.md) · [简体中文](../zh-CN/CHANGELOG.md) · [繁體中文](../zh-Hant/CHANGELOG.md) · [日本語](../ja-JP/CHANGELOG.md) · [Español](../es-ES/CHANGELOG.md) · **Português (Brasil)** · [Русский](../ru-RU/CHANGELOG.md) · [Deutsch](../de-DE/CHANGELOG.md) · [Français](../fr-FR/CHANGELOG.md) · [Italiano](../it-IT/CHANGELOG.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="changelog"></a>

# Changelog

<a id="010--unreleased"></a>

## 0.1.0 — não libertado

Primeira versão, extraída do OpenNavo aplicativo e site para desktop.

- Tokens: temas escuros e claros para cada cor; o modo luz segue o sistema ou um `data-theme` atributo, também em
  subárvores. Novos papéis para o modo de luz: `surface.popover`, `text.accent`, `component.segmentActive`,
  `status.*Border`, `component.menuBarBg` / `menuBarText`, `shadow.segment`, `shadow.knob`,
  `effect.accentGlowOpacity`.
- Saídas: CSS variáveis, valores de ST dactilografados, UnoCSS predefinido, Tailwind CSS tema v4 e predefinido v3, DTCG ficheiros por tema,
  Flutter `ThemeExtension`s e construtor de temas, SwiftUI cores e escalas dinâmicas, uma referência gerada.
- `@opennavo/design-vue`: o genérico OpenNavo componentes, ajudantes de temas (`applyThemePreference`,
  `themeBootScript`), estilos de base e uma galeria de componentes.
- Especificação em `docs/`.
