[English](../../../CHANGELOG.md) · [简体中文](../zh-CN/CHANGELOG.md) · [繁體中文](../zh-Hant/CHANGELOG.md) · [日本語](../ja-JP/CHANGELOG.md) · [Español](../es-ES/CHANGELOG.md) · [Português (Brasil)](../pt-BR/CHANGELOG.md) · [Русский](../ru-RU/CHANGELOG.md) · [Deutsch](../de-DE/CHANGELOG.md) · [Français](../fr-FR/CHANGELOG.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="changelog"></a>

# Changelog

<a id="010--unreleased"></a>

## 0,1.0 — non rilasciati

Prima versione, estratta dalla OpenNavo app desktop e sito web.

- Token: temi scuri e leggeri per ogni colore; la modalità luminosa segue il sistema o un `data-theme` attributo, anche su
  sottotitoli. Nuovi ruoli per la modalità della luce: `surface.popover`, `text.accent`, `component.segmentActive`,
  `status.*Border`, `component.menuBarBg` / `menuBarText`, `shadow.segment`, `shadow.knob`,
  `effect.accentGlowOpacity`.
- Uscite: CSS variabili, valori TS digitati, UnoCSS preimpostato, Tailwind CSS v4 tema e v3 preset, DTCG file per tema,
  Flutter `ThemeExtension`s e costruttore di temi, SwiftUI colori e scale dinamiche, un riferimento token generato.
- `@opennavo/design-vue`: il generico OpenNavo componenti, aiutanti a tema (`applyThemePreference`,
  `themeBootScript`), stili di base e una galleria di componenti.
- Specificazione in `docs/`.
