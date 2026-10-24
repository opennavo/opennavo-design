**English** · [简体中文](i18n/zh-CN/docs/platforms.md) · [繁體中文](i18n/zh-Hant/docs/platforms.md) · [日本語](i18n/ja-JP/docs/platforms.md) · [Español](i18n/es-ES/docs/platforms.md) · [Português (Brasil)](i18n/pt-BR/docs/platforms.md) · [Русский](i18n/ru-RU/docs/platforms.md) · [Deutsch](i18n/de-DE/docs/platforms.md) · [Français](i18n/fr-FR/docs/platforms.md) · [Italiano](i18n/it-IT/docs/platforms.md)

# Platforms

The same tokens and rules on every platform; this page lists what differs.

## macOS desktop (Tauri + Vue)

- **Window:** overlay title bar with hidden title, traffic lights inset 18 × 22, default 1280 × 820, minimum
  1100 × 700. Mark the toolbar and empty header areas as drag regions (`data-tauri-drag-region`).
- **Appearance:** store `system | light | dark` in settings; apply with `app.set_theme()` before windows show; sync
  the main window background to `surface.base` and on `ThemeChanged` ([Theming](theming.md#macos-desktop-tauri)).
- **Popovers and overlays** are separate transparent, borderless windows (menu bar popovers, permission guides,
  alerts): their `html` stays transparent with `color-scheme: normal`, the panel draws `surface.card` with
  `rounded-panel` and its own shadow; native shadows are off so the transparent bounds never show.
- **Menu bar:** items are template images so macOS colors them; clicking toggles the popover; nothing activates the
  main window unless the user chooses "Open".
- **System integration:** permissions through System Settings deep links with a guide overlay that does not take
  focus; the app's native menu has standard items (About, Settings ⌘,, Hide, Quit); dialogs that need a password
  use the system prompt and say what it is for.
- **Fonts:** the system font via `system-fonts.css`. **Scroll:** the main column scrolls inside the window
  (`OnAppShell scroll="container"`).
- **WebKit specifics:** test focus and transparency in WKWebView, not only in Chromium — `:focus-visible` and
  occlusion behave differently.

## Web (Nuxt)

- Server-rendered and cache-friendly: the HTML is the same for every visitor; theme, consent and suggestions are
  applied in the browser. The theme boot script is the only inline script the design system needs.
- `OnAppShell scroll="document"` with sticky sidebar and toolbar from `md`, a compact bar below.
- Links are real links (`linkAs` = `NuxtLink`), with prefetch on interaction rather than visibility.
- Meta: `color-scheme: dark light`; set `lang` and hreflang per page.

## React + Tailwind CSS

There are no React components; use the tokens and follow the component specs.

```css
/* app.css — Tailwind CSS v4 */
@import 'tailwindcss';
@import '@opennavo/design-tokens/tailwind.css'; /* theme mapping + tokens.css */
@import '@opennavo/design-tokens/base.css'; /* html colors, theme-switch guard, reduced motion */
@import '@opennavo/design-tokens/system-fonts.css';
```

Theme helpers without Vue: `applyThemePreference`, `themeBootScript` and `THEME_PREFERENCES` from
`@opennavo/design-tokens/theme`. [`examples/react-tailwind`](../examples/react-tailwind) shows a settings card with a
theme switch, a toggle and buttons built from these classes.

Classes match the Vue components (`bg-surface-card`, `text-ink-secondary`, `border-line-subtle`, `rounded-big`,
`shadow-popover`, `text-title1`, `duration-fast`, `z-modal`). Tailwind CSS v3 uses the preset:
`presets: [openNavoPreset]` from `@opennavo/design-tokens/tailwind-preset`, plus
`import '@opennavo/design-tokens/tokens.css'`. Theme switching is the same `data-theme` attribute.

## SwiftUI (`OpenNavoDesign` Swift package)

- `OnColor.*` dynamic colors, `OnSpace.*`, `OnRadius.*`, `OnTypography.*` with `.onTextStyle(_:)`, `OnShadow.*` with
  `.onShadow(_:)`, `OnMotion.*` (durations and `Animation` curves), `OnLayout.*`.
- System controls stay system controls; apply tokens to backgrounds, text and spacing around them.
- Type uses SF Pro at the token sizes; tracking is converted from em to points.

## Flutter (`opennavo_design` package)

- `onThemeData(Brightness)` for `theme` / `darkTheme`; `OnColors.of(context)` and `OnShadows.of(context)` for token
  colors and shadows (`ThemeExtension`s that animate between themes).
- `OnSpace`, `OnRadius`, `OnTypography` (`TextStyle`s; uppercase the `label` string yourself), `OnMotion`
  (`Duration`s and `Cubic` curves), `OnLayout`.
- Inset shadow layers are not available in Flutter and are omitted.
