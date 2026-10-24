# Color

All color comes from tokens. Each color token has a dark value (the default) and, where it differs, a light value;
the [token reference](reference/tokens.md) lists every one. This page explains the roles, which is what you need to
pick the right token. Theme mechanics are in [Theming](theming.md).

## How the two themes differ

- **Dark** steps surfaces up in lightness: page `#0B0B0B` → base `#131313` → card `#1A1A1A` → raised `#262626`.
  Elevation reads as "lighter".
- **Light** keeps the same order but cannot go whiter than white: page `#F2F2F2` → base `#F8F8F8` → card `#FFFFFF`.
  Elevated panels are white with a border and a soft shadow; fills inside white cards (`cardAlt`, `raised`, `chip`)
  are gray, so they read as recessed.
- Borders are translucent white in dark mode and translucent black in light mode, at similar strength.
- Brand and status colors are deeper in light mode so text keeps 4.5:1 on white.

Never pick a color by eye from a screenshot of one theme. Pick the role; the token carries both values.

## Surfaces

| Token             | Role                    | Use for                                                                                            | Don't use for                                |
| ----------------- | ----------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `surface.page`    | Outermost background    | Website body, top navigation bar, area behind floating windows                                     | Content areas inside the app shell           |
| `surface.base`    | Main content background | The app shell's content column, window background                                                  | Cards                                        |
| `surface.sidebar` | Sidebar                 | The left navigation column                                                                         | Anything else                                |
| `surface.rail`    | Right rail              | The optional statistics rail on wide windows                                                       | —                                            |
| `surface.card`    | Cards and panels        | Cards, list containers, settings groups, menu bar popovers                                         | Floating panels over content (use `popover`) |
| `surface.cardAlt` | Inside a card           | Inputs, secondary blocks, table row highlight, notice boxes inside a card                          | Page-level backgrounds                       |
| `surface.raised`  | Hover and small fills   | Hover backgrounds, current page in pagination, icon tiles, `⌘K` hints                              | Floating panels; selected segments           |
| `surface.chip`    | Neutral badges          | Neutral chips, keyboard hints, small tags                                                          | Buttons (use `button.secondary*`)            |
| `surface.control` | Controls                | Text inputs and selects in settings, tooltips                                                      | Large areas                                  |
| `surface.inset`   | Wells                   | Code blocks, logs, segmented-control tracks, progress tracks                                       | Buttons                                      |
| `surface.overlay` | Translucent overlay     | Menus and the command palette, with a 20 px backdrop blur                                          | Opaque panels                                |
| `surface.popover` | Floating panel          | Consent and suggestion cards, demo popovers — anything floating over content with `shadow.popover` | Inline content                               |

Component-specific surfaces live in `component.*`: `modalBg` (dialogs and sheets), `searchBg` (search fields and form
inputs on pages), `navActive` (selected sidebar item), `segmentActive` (selected segment), `heroBg` (feature hero),
`detailHeaderBg`, `toastBg`, `scrim` (behind dialogs), `lightboxScrim` (image viewer, dark in both themes, so the
viewer renders in the dark theme: [Theming › Subtrees](theming.md#subtrees)), `menuBarBg` / `menuBarText` (an in-app
preview of the macOS menu bar).

## Text

| Token            | Use                                                       | Dark           | Light          |
| ---------------- | --------------------------------------------------------- | -------------- | -------------- |
| `text.primary`   | Headings, emphasized body, numbers                        | 14.9:1 on card | 17.4:1 on card |
| `text.secondary` | Body text, descriptions                                   | 7.3:1          | 7.2:1          |
| `text.tertiary`  | Labels, metadata, timestamps, hints                       | 5.4:1          | 5.3:1          |
| `text.disabled`  | Disabled and purely decorative text only                  | —              | —              |
| `text.accent`    | Coral text: links, coral chips, emphasized inline actions | 6.5:1          | 5.7:1          |
| `text.inverse`   | Text and icons on strong fills (status, coral, salmon)    | dark           | white          |
| `text.onAccent`  | Text on coral buttons and coral badges                    | 7.2:1 on coral | 5.5:1 on coral |

Rules:

- Use at most three text levels in one component. Tertiary is the floor for anything a user must read.
- `text.disabled` never carries information: a disabled control must still say why it is disabled nearby.
- **`brand.coral` is a fill, not a text color.** On white it is 3.5:1. Coral text uses `text.accent`.
- Never put `text.tertiary` on `surface.chip` or `surface.raised` for long text; use `text.secondary` there.

## Borders

`border.subtle` for card edges and dividers, `border.default` for inputs, ghost buttons and windows,
`border.strong` for hover. `border.sidebar` separates the sidebar. Status panels use the matching
`status.*Border` with their `status.*Subtle` fill.

## Brand

| Token                                          | Use                                                                                                              |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `brand.coral`                                  | The brand accent as a fill or graphic: the accent button, progress, toggles that are on, focus ring, small dots. |
| `brand.salmon`                                 | Warm emphasis text: section eyebrows, the second line of a hero, "update available" badges.                      |
| `brand.violet`                                 | The hero glow. Also mixed into tinted icon backgrounds on marketing pages.                                       |
| `brand.logoGradient`, `brand.logoCoreGradient` | The logo mark only. The core gradient switches to amber on light backgrounds.                                    |

Accent tints: `accent.coralSubtle` (progress tracks, coral chips) and `accent.salmonSubtle` (salmon badges). Text on
them uses `text.accent` and `brand.salmon`.

Use coral sparingly: one accent button per view, and never coral for errors (that is `status.danger`).

## Status

| Family    | Means                                                           | Typical use                                                         |
| --------- | --------------------------------------------------------------- | ------------------------------------------------------------------- |
| `success` | Done, installed, healthy, current                               | Installed badges, "Everything is normal" banners, success log lines |
| `warning` | Needs attention, needs administrator permission, partial result | Skipped items, admin prompts, "needs confirmation" chips            |
| `danger`  | Failed, deprecated, destructive                                 | Failure states, danger buttons, threats found                       |
| `info`    | Neutral information, self-updating apps, links in docs          | Info notices, "auto-updates" chips                                  |

Each family has the solid color (text, icons, dots), `*Subtle` (10% tint backgrounds) and `*Border` (tinted panel
edges). Pair color with an icon or a word — status is never communicated by color alone.

## Buttons

| Variant   | Tokens                                                      | Use                                                                                     |
| --------- | ----------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Primary   | `button.primary*` — near-white on dark, near-black on light | The main action of a view. One per region.                                              |
| Secondary | `button.secondary*`                                         | Other actions. The default variant.                                                     |
| Accent    | `button.accent*` (coral, dark text)                         | A brand moment: the hero call to action, "Update all". Rarely more than one per screen. |
| Ghost     | transparent, `border.default`                               | Tertiary actions in toolbars and dense rows.                                            |
| Danger    | `status.dangerSubtle` + `status.danger`                     | Destructive actions. Never the default button of a dialog.                              |
| Disabled  | `button.disabled*`                                          | Inactive controls of any variant.                                                       |

## Charts

`chart.series1` (violet), `chart.series2` (coral), `chart.series3` (green) are the categorical colors, chosen to stay
distinguishable for common color-vision deficiencies; use them in that order and label series directly when there
are more than two. Single-series charts use `chart.emphasis` for the current value and `chart.deemphasis` for history.
`chart.grid` and `chart.axis` are hairlines. Monitoring views may also use status and info colors for meaning
(temperature warning, network down/up).

## Contrast

Measured with the WCAG 2.2 formula; `packages/tokens/tests` fails the build if any pair drops below its target.

| Pair                       | Target | Dark (base / card / raised) | Light (base / card / raised) |
| -------------------------- | ------ | --------------------------- | ---------------------------- |
| `text.primary`             | 4.5    | 15.9 / 14.9 / 12.9          | 16.4 / 17.4 / 14.9           |
| `text.secondary`           | 4.5    | 7.8 / 7.3 / 6.4             | 6.8 / 7.2 / 6.2              |
| `text.tertiary`            | 4.5    | 5.7 / 5.4 / 4.7             | 5.0 / 5.3 / 4.6              |
| `text.accent`              | 4.5    | 6.9 / 6.5 / 5.6             | 5.4 / 5.7 / 4.9              |
| `brand.salmon`             | 4.5    | 9.0 / 8.4 / 7.3             | 5.4 / 5.7 / 4.9              |
| `status.success`           | 4.5    | 9.2 / 8.6 / 7.5             | 5.3 / 5.6 / 4.8              |
| `status.warning`           | 4.5    | 10.1 / 9.5 / 8.2            | 5.3 / 5.6 / 4.8              |
| `status.danger`            | 4.5    | 6.1 / 5.7 / 5.0             | 5.4 / 5.7 / 4.9              |
| `status.info`              | 4.5    | 7.3 / 6.8 / 5.9             | 5.3 / 5.6 / 4.8              |
| `brand.coral` as a graphic | 3.0    | 6.9 / 6.5 / 5.6             | 3.3 / 3.5 / 3.0              |

The tests also cover status and accent text on their tinted backgrounds (over base, card and cardAlt), every button
state, text on coral, the terminal tile and monospace text in wells.

## Do and don't

- Do use `bg-surface-popover shadow-popover border border-line-default` for a floating card; don't reuse
  `surface.raised` — in light mode it is gray.
- Do mix translucent tints from tokens (`color-mix(in srgb, var(--on-status-success) 14%, transparent)`) when a
  marketing glow needs a hue; don't write hex or rgba values in components.
- Do check both themes before merging UI; the gallery and the app both switch with one setting.
