**English** · [简体中文](i18n/zh-CN/docs/accessibility.md) · [繁體中文](i18n/zh-Hant/docs/accessibility.md) · [日本語](i18n/ja-JP/docs/accessibility.md) · [Español](i18n/es-ES/docs/accessibility.md) · [Português (Brasil)](i18n/pt-BR/docs/accessibility.md) · [Русский](i18n/ru-RU/docs/accessibility.md) · [Deutsch](i18n/de-DE/docs/accessibility.md) · [Français](i18n/fr-FR/docs/accessibility.md) · [Italiano](i18n/it-IT/docs/accessibility.md)

# Accessibility

The target is WCAG 2.2 AA in both themes. Most of it is built into the tokens and components; this page lists what
apps must not undo.

## Contrast

- Text 4.5:1 against its actual background, including tinted badges and hover fills; large display text (24 px+, or
  19 px+ at 600) 3:1. The token tests enforce the pairs in [Color › Contrast](color.md#contrast).
- Icons that carry meaning, chart marks, input borders and the focus ring: 3:1.
- Decorative text (`text.disabled`, watermarks) carries no information.

## Keyboard

- Everything reachable with Tab in visual order; nothing focusable is invisible.
- **Focus ring:** `shadow-focus-ring` on `:focus-visible` — a 2 px gap in the surface color plus a 2 px coral ring.
  Never remove it without an equivalent.
- **Composite widgets** use roving focus (one Tab stop, arrows inside): segmented controls (`radiogroup`), tabs
  (`tablist`), chip bars, menus (`menu` with `menuitem` / `menuitemradio`), the command palette (`combobox` +
  `listbox`).
- **Overlays** move focus inside on open, trap Tab, close on Escape and return focus to the element that opened them.
  Script-moved focus does not show a ring when the user opened the overlay with the pointer.
- **Shortcuts** follow the platform (⌘K search, ⌘, settings, ⌘F find in a view, Escape back out) and are shown in
  menus and hints, never required.

## Screen readers

- Use the semantic element first (`button`, `a`, `nav`, `main`, `h1`–`h3`, `table`); components add roles only where
  HTML has none.
- Icon-only controls have `aria-label`; decorative icons and app icons next to their names are `aria-hidden`.
- Current page `aria-current="page"`; toggles `role="switch"` with `aria-checked`; busy buttons `aria-busy`.
- Toasts: failures `role="alert"`, others a polite live region. Progress has a text equivalent ("1.2 of 3.4 GB").
- Charts have a text summary or a table equivalent; sparklines are labeled with their current value.

## Motion and timing

- Respect "reduce motion" (`base.css` handles CSS; JavaScript animation must check `matchMedia`).
- Toasts pause while hovered; nothing important disappears on a timer without a way to find it again (history,
  task list).

## Pointer and touch

- Targets at least 24 × 24 px in dense desktop UI, 32 px for primary controls, 44 px for primary mobile web actions.
- Hover reveals nothing that keyboard and touch users cannot reach.

## Language

Set `lang` on `<html>` and on any passage in another language, so screen readers and fonts switch. Never convey
meaning by color, position or shape alone: status pairs color with an icon and a word.
