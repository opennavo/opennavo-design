[English](../../../CHANGELOG.md) · [简体中文](../zh-CN/CHANGELOG.md) · [繁體中文](../zh-Hant/CHANGELOG.md) · [日本語](../ja-JP/CHANGELOG.md) · [Español](../es-ES/CHANGELOG.md) · [Português (Brasil)](../pt-BR/CHANGELOG.md) · [Русский](../ru-RU/CHANGELOG.md) · **Deutsch** · [Français](../fr-FR/CHANGELOG.md) · [Italiano](../it-IT/CHANGELOG.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="changelog"></a>

# Changelog

<a id="010--unreleased"></a>

## 0.1.0 — unveröffentlicht

Erste Version, extrahiert aus der OpenNavo Desktop-App und Website.

- Token: dunkle und helle Themen für jede Farbe; Lichtmodus folgt dem System oder einem `data-theme` Attribut, auch auf
  Neue Rollen für den Lichtmodus: `surface.popover`, `text.accent`, `component.segmentActive`,
  `status.*Border`, `component.menuBarBg` / `menuBarText`, `shadow.segment`, `shadow.knob`,
  `effect.accentGlowOpacity`.
- Outputs: CSS Variablen, typisierte TS-Werte, UnoCSS voreingestellt, Tailwind CSS v4-Thema und v3-Preset, DTCG Dateien pro Thema,
  Flutter `ThemeExtension`s und Theme Builder, SwiftUI dynamische Farben und Skalen, eine generierte Token-Referenz.
- `@opennavo/design-vue`: Generisches OpenNavo Komponenten, Themenhelfer ()`applyThemePreference`,
  `themeBootScript`), Basisstile und eine Komponentengalerie.
- Spezifikation in `docs/`.
