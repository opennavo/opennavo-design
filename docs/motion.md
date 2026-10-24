**English** · [简体中文](i18n/zh-CN/docs/motion.md) · [繁體中文](i18n/zh-Hant/docs/motion.md) · [日本語](i18n/ja-JP/docs/motion.md) · [Español](i18n/es-ES/docs/motion.md) · [Português (Brasil)](i18n/pt-BR/docs/motion.md) · [Русский](i18n/ru-RU/docs/motion.md) · [Deutsch](i18n/de-DE/docs/motion.md) · [Français](i18n/fr-FR/docs/motion.md) · [Italiano](i18n/it-IT/docs/motion.md)

# Motion

Motion explains a change; it never decorates. Most of the interface does not animate at all.

## Tokens

| Token             | Value                            | Use                                                          |
| ----------------- | -------------------------------- | ------------------------------------------------------------ |
| `duration-fast`   | 120 ms                           | Color changes on hover, press and focus; toggles; every exit |
| `duration-base`   | 200 ms                           | Dialogs, sheets, the command palette and toasts entering     |
| `duration-slow`   | 320 ms                           | Progress filling, scan meters, hero and marketing entrances  |
| `ease-standard`   | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Default for state changes and small movements                |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)`     | Overlays arriving                                            |
| `ease-exit`       | `cubic-bezier(0.4, 0, 1, 1)`     | Anything leaving, always with `duration-fast`                |

## What moves

- **State changes** fade colors with `duration-fast` (`transition-colors duration-fast ease-standard` on every
  interactive control).
- **Overlays** enter in 200 ms with the emphasized curve and leave in 120 ms with the exit curve: centered dialogs
  fade and scale from 0.96, sheets slide in from their edge, the command palette drops 8 px from the top, toasts rise
  8 px. The scrim fades with its panel. Menus and tooltips appear without animation.
- **Progress** animates its value, never jumps backwards, and shows an indeterminate state only until the first real
  number arrives.
- **Marketing pages** may use slow ambient motion (a breathing glow, drifting dashed rings, floating icons) on the
  compositor (transform, opacity) only.

## What never moves

- Layout. Content does not slide, collapse or reflow while the user reads or types; see
  [Principles › Stable under the pointer](principles.md#4-stable-under-the-pointer).
- Theme switches: colors change in a single frame (`applyThemePreference` disables transitions for that frame).
- Numbers that update in place (monitors, counters) change without tweening.

## Reduced motion

`base.css` clamps every animation and transition to 0.01 ms under `prefers-reduced-motion: reduce`, and removes smooth
scrolling. Do not rely on an animation to convey information; the end state must make sense on its own.
