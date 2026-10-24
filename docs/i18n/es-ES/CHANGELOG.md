[English](../../../CHANGELOG.md) · [简体中文](../zh-CN/CHANGELOG.md) · [繁體中文](../zh-Hant/CHANGELOG.md) · [日本語](../ja-JP/CHANGELOG.md) · **Español** · [Português (Brasil)](../pt-BR/CHANGELOG.md) · [Русский](../ru-RU/CHANGELOG.md) · [Deutsch](../de-DE/CHANGELOG.md) · [Français](../fr-FR/CHANGELOG.md) · [Italiano](../it-IT/CHANGELOG.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="changelog"></a>

# Cambio

<a id="010--unreleased"></a>

## 0.1.0 — sin publicar

Primera versión, extraída de la OpenNavo Aplicación de escritorio y sitio web.

- Tokens: temas oscuros y ligeros para cada color; modo de luz sigue el sistema o un `data-theme` atributo, también en
  subárboles. Nuevos roles para el modo de luz: `surface.popover`, `text.accent`, `component.segmentActive`,
  `status.*Border`, `component.menuBarBg` / `menuBarText`, `shadow.segment`, `shadow.knob`,
  `effect.accentGlowOpacity`.
- Productos: CSS variables, valores tipo TS, UnoCSS preset, Tailwind CSS v4 tema y v3 preset, DTCG archivos por tema,
  Flutter `ThemeExtension`s y constructor de temas, SwiftUI colores dinámicos y escalas, una referencia token generada.
- `@opennavo/design-vue`: el genérico OpenNavo componentes, ayudantes temáticos (`applyThemePreference`,
  `themeBootScript`), estilos de base y una galería de componentes.
- Especificación en `docs/`.
