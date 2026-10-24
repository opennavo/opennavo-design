[English](../../../platforms.md) · [简体中文](../../zh-CN/docs/platforms.md) · [繁體中文](../../zh-Hant/docs/platforms.md) · [日本語](../../ja-JP/docs/platforms.md) · [Español](../../es-ES/docs/platforms.md) · [Português (Brasil)](../../pt-BR/docs/platforms.md) · [Русский](../../ru-RU/docs/platforms.md) · **Deutsch** · [Français](../../fr-FR/docs/platforms.md) · [Italiano](../../it-IT/docs/platforms.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="platforms"></a>

# Plattformen

Die gleichen Token und Regeln auf jeder Plattform; Diese Seite listet auf, was sich unterscheidet.

<a id="macos-desktop-tauri--vue"></a>

## macOS DesktopTauri + Vue)

- **Fenster:** Titelleiste mit verstecktem Titel, Ampeln mit 18 × 22, Standard 1280 × 820, Minimum
  1100 × 700 Symbolleiste und leere Header-Bereiche als Drag-Bereiche markieren`data-tauri-drag-region`).
- **Aussehen:** Lagerhaus `system | light | dark` in den Einstellungen; gelten mit `app.set_theme()` Bevor Fenster anzeigen; Sync
  Hintergrund des Hauptfensters zum `surface.base` und am `ThemeChanged` ([Theming](theming.md#macos-desktop-tauri)).
- **Popover und Overlays** separate transparente, randlose Fenster (Menüleisten-Popovers, Erlaubnisführer),
  Ausschreibungen: ihre `html` Bleibt transparent mit `color-scheme: normal`, das Panel zieht `surface.card` mit
  `rounded-panel` und seinen eigenen Schatten; native Schatten sind weg, so dass die transparenten Grenzen nie zeigen.
- **Menüleiste:** Items sind Template Images, also macOS färbt sie; Klicken schaltet den Popover um; nichts aktiviert die
  Hauptfenster, es sei denn, der Benutzer wählt "Öffnen".
- **Systemintegration:** Berechtigungen durch Systemeinstellungen tiefe Links mit einem Guide-Overlay, das nicht
  focus; das native Menü der App enthält Standardelemente (Über, Einstellungen ⌘, Hide, Quit); Dialoge, die ein Passwort benötigen
  Verwenden Sie das System prompt und sagen, wofür es ist.
- **Schriften:** Die Systemschrift über `system-fonts.css`. **Scroll:** Die Hauptspalte scrollt innerhalb des Fensters
  (`OnAppShell scroll="container"`).
- **WebKit Besonderheiten:** Testfokus und Transparenz in WKWebView, nicht nur in Chrom — `:focus-visible` und
  Okklusion verhält sich anders.

<a id="web-nuxt"></a>

## WebNuxt)

- Server-rendered und Cache-freundlich: die HTML ist für jeden Besucher gleich; Thema, Zustimmung und Vorschläge sind
  Das Theme-Boot-Skript ist das einzige Inline-Skript, das das Designsystem benötigt.
- `OnAppShell scroll="document"` mit Sticky Sidebar und Toolbar von `md`, ein kompakter Balken unten.
- Links sind echte Links ()`linkAs` = `NuxtLink`), mit Prefetch auf Interaktion statt Sichtbarkeit.
- Meta: `color-scheme: dark light`; Satz `lang` und hreflang pro Seite.

<a id="react--tailwind-css"></a>

## React + Tailwind CSS

Es gibt keine React Komponenten; Verwenden Sie die Tokens und folgen Sie den Komponentenspezifikationen.

```css
/* app.css — Tailwind CSS v4 */
@import 'tailwindcss';
@import '@opennavo/design-tokens/tailwind.css'; /* theme mapping + tokens.css */
@import '@opennavo/design-tokens/base.css'; /* html colors, theme-switch guard, reduced motion */
@import '@opennavo/design-tokens/system-fonts.css';
```

Themenhelfer ohne Vue: `applyThemePreference`, `themeBootScript` und `THEME_PREFERENCES` von
`@opennavo/design-tokens/theme`. [`examples/react-tailwind`](../../../../examples/react-tailwind) zeigt eine Einstellungskarte mit einer
Theme Switch, ein Umschalter und Tasten, die aus diesen Klassen aufgebaut sind.

Klassen entsprechen dem Vue Komponenten ()`bg-surface-card`, `text-ink-secondary`, `border-line-subtle`, `rounded-big`,
`shadow-popover`, `text-title1`, `duration-fast`, `z-modal`). Tailwind CSS v3 verwendet das Preset:
`presets: [openNavoPreset]` von `@opennavo/design-tokens/tailwind-preset`, plus
`import '@opennavo/design-tokens/tokens.css'`Thema Switching ist das gleiche `data-theme` Attribut.

<a id="swiftui-opennavodesign-swift-package"></a>

## SwiftUI (`OpenNavoDesign` Schnellpaket

- `OnColor.*` dynamische Farben, `OnSpace.*`, `OnRadius.*`, `OnTypography.*` mit `.onTextStyle(_:)`, `OnShadow.*` mit
  `.onShadow(_:)`, `OnMotion.*` (Dauer und) `Animation` Kurven, `OnLayout.*`.
- Systemsteuerungen bleiben Systemsteuerungen; gelten Token auf Hintergründe, Text und Abstand um sie herum.
- Type verwendet SF Pro bei den Tokengrößen; Tracking wird von em in Punkte konvertiert.

<a id="flutter-opennavo_design-package"></a>

## Flutter (`opennavo_design` Packung

- `onThemeData(Brightness)` für `theme` / `darkTheme`; `OnColors.of(context)` und `OnShadows.of(context)` für Token
  Farben und Schatten ()`ThemeExtension`Die zwischen den Themen animieren.
- `OnSpace`, `OnRadius`, `OnTypography` (`TextStyle`s; Großbuchstaben `label` String selbst, `OnMotion`
  (`Duration`s und `Cubic` Kurven, `OnLayout`.
- Inset Shadow Layers sind nicht verfügbar in Flutter und ausgelassen werden.
