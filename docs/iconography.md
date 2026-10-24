**English** · [简体中文](i18n/zh-CN/docs/iconography.md) · [繁體中文](i18n/zh-Hant/docs/iconography.md) · [日本語](i18n/ja-JP/docs/iconography.md) · [Español](i18n/es-ES/docs/iconography.md) · [Português (Brasil)](i18n/pt-BR/docs/iconography.md) · [Русский](i18n/ru-RU/docs/iconography.md) · [Deutsch](i18n/de-DE/docs/iconography.md) · [Français](i18n/fr-FR/docs/iconography.md) · [Italiano](i18n/it-IT/docs/iconography.md)

# Iconography

## Interface icons

- **Set:** [Lucide](https://lucide.dev) (ISC license), bundled as an offline subset — only icons listed in
  `packages/vue/src/icons/names.ts` ship, rendered as inline SVG so they work in SSR and without a network.
- **Sizes:** 16 px in menus and navigation, 15 px in `md`/`lg` buttons, 14 px in `xs`/`sm` buttons and chips, 12–13 px
  inline with metadata. Icons inside a 26–32 px tile render at 14–16 px.
- **Stroke and color:** Lucide's 2 px stroke at 24 px, scaled; icons take `currentColor`, so they follow the text
  token of their context. Do not color icons independently unless they carry status.
- **Meaning:** one icon per concept across the app (for example `circle-arrow-down` for updates, `shield-check` for
  security, `eraser` for cleanup). Icon-only buttons always have an `aria-label` and a tooltip.
- **Adding icons:** the package bundles only the icons its components draw. An app adds its own with
  `registerIcons(getIcons(lucide, ['compass', 'settings']))` (`@iconify/utils` + `@iconify-json/lucide`, or any set in
  Iconify JSON shape, addressed as `prefix:name`) once at startup, so its bundle carries just what it uses. Icons the
  components themselves need go into `packages/vue/src/icons/names.ts`, then `pnpm gen`. Unknown names render
  nothing and warn in development.

## Icon tiles

Small square tiles hold an icon in feature lists, settings and notices: 26–40 px, `rounded-[7–9px]` (or
`rounded-app-icon` at 40 px and up), `bg-surface-raised` with `text-ink-secondary`, or a status subtle fill with the
status color for stateful items.

## App icons

- App artwork is shown as delivered, `object-contain`, no added mask: macOS icons already include their shape.
- Missing artwork falls back to a **letter tile**: a 160° gradient of the app's accent (or a color derived from its
  identifier) darkened 18%, white initials at 42% of the side, `rounded-app-icon`, `shadow-app-icon`.
- Command-line tools use the **terminal tile**: a dark gradient tile in both themes with a monospace abbreviation at
  30% of the side and a colored bar.
- Sizes in use: 20, 24, 26, 28, 30, 32, 40, 44, 46, 54, 64, 96, 118 px.

## Brand mark

Each app ships its own mark; the system components take it through a `brand` slot. Brand marks are not part of this
repository's license ([Brand](brand.md)).
