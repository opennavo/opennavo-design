**English** · [简体中文](i18n/zh-CN/docs/layout.md) · [繁體中文](i18n/zh-Hant/docs/layout.md) · [日本語](i18n/ja-JP/docs/layout.md) · [Español](i18n/es-ES/docs/layout.md) · [Português (Brasil)](i18n/pt-BR/docs/layout.md) · [Русский](i18n/ru-RU/docs/layout.md) · [Deutsch](i18n/de-DE/docs/layout.md) · [Français](i18n/fr-FR/docs/layout.md) · [Italiano](i18n/it-IT/docs/layout.md)

# Layout

## Spacing

One 4 px based scale (`space.*`, also the UnoCSS/Tailwind spacing used in components):

| Step | 0   | 0.5 | 1   | 1.5 | 2   | 2.5 | 3   | 3.5 | 4   | 5   | 6   | 7   | 8   | 10  | 12  | 16  | 20  |
| ---- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| px   | 0   | 2   | 4   | 6   | 8   | 10  | 12  | 14  | 16  | 20  | 24  | 28  | 32  | 40  | 48  | 64  | 80  |

Typical rhythm:

- 4–8 between an icon and its label, chips in a row, a title and its subtitle.
- 10–14 inside dense rows and between controls in a toolbar (toolbar items sit 14 apart).
- 16–20 card padding (20 in the rail), 22 between rail sections.
- 24–28 between page sections; 28 is the desktop content gutter.
- 40–80 between website sections.

## Radius

| Class              | px  | Use                                               |
| ------------------ | --- | ------------------------------------------------- |
| `rounded-tiny`     | 4   | Keyboard hints, tiny tags, inline code            |
| `rounded-small`    | 7   | Chips, inputs in dense rows, segments, menu items |
| `rounded-default`  | 10  | Buttons, inputs, notices, small cards             |
| `rounded-panel`    | 12  | Menus, popovers, screenshots, list containers     |
| `rounded-big`      | 14  | Cards                                             |
| `rounded-huge`     | 20  | Dialogs, sheets, feature heroes, detail headers   |
| `rounded-xl`       | 28  | Large marketing panels                            |
| `rounded-full`     | —   | Pills, avatars, toggles, dots                     |
| `rounded-app-icon` | 23% | App icon tiles (approximates the macOS squircle)  |

Nested corners shrink: an element inside a padded container uses the next smaller radius.

## Elevation

Elevation is color plus shadow, never shadow alone:

| Level | Surface                                                  | Shadow           | Examples                                           |
| ----- | -------------------------------------------------------- | ---------------- | -------------------------------------------------- |
| 0     | `surface.base`                                           | —                | Window content                                     |
| 1     | `surface.card` + `border.subtle`                         | —                | Cards, lists, settings groups                      |
| 2     | `surface.popover` / `surface.overlay` + `border.default` | `shadow.popover` | Menus, tooltips, floating notices, command palette |
| 3     | `component.modalBg` + `border.default`                   | `shadow.modal`   | Dialogs, sheets                                    |
| —     | `component.toastBg`                                      | `shadow.toast`   | Toasts                                             |
| —     | —                                                        | `shadow.window`  | Window frames in screenshots and marketing mockups |

Shadows are heavy and black in dark mode, soft in light mode; the tokens carry both. Overlays above content blur what
is behind them (`effect.backdropBlur`, 20 px).

## Layers

| `z-*`      | Value | Use                                      |
| ---------- | ----- | ---------------------------------------- |
| `base`     | 0     | Content                                  |
| `sticky`   | 10    | Sticky toolbars, sidebars, table headers |
| `dropdown` | 100   | Menus, rail overlay                      |
| `overlay`  | 200   | Scrims                                   |
| `modal`    | 300   | Dialogs, sheets, lightbox                |
| `popover`  | 400   | Popovers above dialogs                   |
| `toast`    | 500   | Toasts                                   |
| `tooltip`  | 600   | Tooltips                                 |

## The app shell

Desktop window (Tauri) — `OnAppShell` in container mode:

```
┌──────────┬──────────────────────────────────────────────┬──────────┐
│ ● ● ●    │ toolbar · 52 px · back/forward · ⌘K search    │          │
│          ├──────────────────────────────────────────────┤  rail    │
│ sidebar  │ main · scrolls · 28 px gutters                │  288 px  │
│ 224 px   │                                              │ optional │
│          │                                              │          │
└──────────┴──────────────────────────────────────────────┴──────────┘
```

- Default window 1280 × 820, minimum 1100 × 700. Traffic lights inset 18 × 22 over the sidebar (overlay title bar);
  the toolbar and empty sidebar top are window drag regions.
- Sidebar: brand mark, grouped navigation (`text-label` group titles, 13.5 px items), settings pinned to the bottom.
  Labels have about 152 px; translations must fit ([Content](content.md)).
- Rail: only on pages that have one, docked at 1240 px and wider, otherwise opened from the toolbar as an overlay.
- Main content: `px-28px pb-28px`, sections 24–28 apart, page header (`text-title1` + one line of `text-body-sm`
  secondary text) at the top.

Website — `OnAppShell` in document mode for store pages, a full-width landing layout for marketing pages:

- Page width 1240 max with 24 px gutters; top navigation 64 px; breakpoints `sm` 640, `md` 768, `lg` 1024, `xl` 1280,
  `2xl` 1440.
- Store pages reuse the desktop shell: sidebar and toolbar are sticky from `md`; below `md` a compact bar with a menu
  replaces both; the rail sits beside content from `xl` and below it otherwise.
- Marketing pages: full-bleed `surface.page`, centered sections, mock app windows using the same tokens as the app.

## Grids

- Card grids fill columns of at least 260 px with 12 px gaps (`grid-cols-[repeat(auto-fill,minmax(260px,1fr))]`): three
  across in a full desktop window, fewer as it narrows. Denser app grids inside a page with a rail use 220 px.
- Statistic tiles: 2 columns in the rail, up to 5 across in a detail page.
- Settings: a 720 px column of `OnCard` groups with rows (label + hint left, control right); section navigation on the
  left at 180 px.
- Forms on the web: a single 720 px column; labels above fields.

## Density

Desktop UI is dense but not cramped: 32–40 px rows in lists, 28–34 px controls, 13–13.5 px text. Touch targets on the
web are at least 32 px (44 px for primary mobile actions).
