[English](../../../CHANGELOG.md) · [简体中文](../zh-CN/CHANGELOG.md) · [繁體中文](../zh-Hant/CHANGELOG.md) · [日本語](../ja-JP/CHANGELOG.md) · [Español](../es-ES/CHANGELOG.md) · [Português (Brasil)](../pt-BR/CHANGELOG.md) · [Русский](../ru-RU/CHANGELOG.md) · [Deutsch](../de-DE/CHANGELOG.md) · **Français** · [Italiano](../it-IT/CHANGELOG.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="changelog"></a>

# Changer de journal

<a id="010--unreleased"></a>

## 0,1.0 — non libéré

Première version, extraite de la OpenNavo application de bureau et site Web.

- Tokens: thèmes sombres et clairs pour chaque couleur; mode lumière suit le système ou un `data-theme` attribut, également sur
  Nouveaux rôles pour le mode lumière: `surface.popover`, `text.accent`, `component.segmentActive`,
  `status.*Border`, `component.menuBarBg` / `menuBarText`, `shadow.segment`, `shadow.knob`,
  `effect.accentGlowOpacity`.
- Produits : CSS variables, valeurs TS dactylographiées, UnoCSS préréglé, Tailwind CSS le thème v4 et le préréglage v3, DTCG fichiers par thème,
  Flutter `ThemeExtension`s et le constructeur de thème, SwiftUI couleurs et échelles dynamiques, une référence symbolique générée.
- `@opennavo/design-vue`: le générique OpenNavo composants, aides thématiques (`applyThemePreference`,
  `themeBootScript`), des styles de base et une galerie de composants.
- Spécification dans `docs/`.
