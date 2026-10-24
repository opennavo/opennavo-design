**English** · [简体中文](docs/i18n/zh-CN/CHANGELOG.md) · [繁體中文](docs/i18n/zh-Hant/CHANGELOG.md) · [日本語](docs/i18n/ja-JP/CHANGELOG.md) · [Español](docs/i18n/es-ES/CHANGELOG.md) · [Português (Brasil)](docs/i18n/pt-BR/CHANGELOG.md) · [Русский](docs/i18n/ru-RU/CHANGELOG.md) · [Deutsch](docs/i18n/de-DE/CHANGELOG.md) · [Français](docs/i18n/fr-FR/CHANGELOG.md) · [Italiano](docs/i18n/it-IT/CHANGELOG.md)

# Changelog

## 0.1.0 — unreleased

First version, extracted from the OpenNavo desktop app and website.

- Tokens: dark and light themes for every color; light mode follows the system or a `data-theme` attribute, also on
  subtrees. New roles for light mode: `surface.popover`, `text.accent`, `component.segmentActive`,
  `status.*Border`, `component.menuBarBg` / `menuBarText`, `shadow.segment`, `shadow.knob`,
  `effect.accentGlowOpacity`.
- Outputs: CSS variables, typed TS values, UnoCSS preset, Tailwind CSS v4 theme and v3 preset, DTCG files per theme,
  Flutter `ThemeExtension`s and theme builder, SwiftUI dynamic colors and scales, a generated token reference.
- `@opennavo/design-vue`: the generic OpenNavo components, theme helpers (`applyThemePreference`,
  `themeBootScript`), base styles and a component gallery.
- Specification in `docs/`.
