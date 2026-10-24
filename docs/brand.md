**English** · [简体中文](i18n/zh-CN/docs/brand.md) · [繁體中文](i18n/zh-Hant/docs/brand.md) · [日本語](i18n/ja-JP/docs/brand.md) · [Español](i18n/es-ES/docs/brand.md) · [Português (Brasil)](i18n/pt-BR/docs/brand.md) · [Русский](i18n/ru-RU/docs/brand.md) · [Deutsch](i18n/de-DE/docs/brand.md) · [Français](i18n/fr-FR/docs/brand.md) · [Italiano](i18n/it-IT/docs/brand.md)

# Brand

OpenNavo Design is shared by a family of apps. They share everything except a thin brand layer, so a person who knows
one app already knows the others.

## The brand layer

An app may change only these tokens (with both theme values):

| Token                                                                                | What it carries                                                                     |
| ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| `brand.coral`                                                                        | The accent fill: accent buttons, toggles on, progress, focus ring color, small dots |
| `text.accent`                                                                        | Accent-colored text and links                                                       |
| `accent.coralSubtle`                                                                 | Accent tints behind chips and progress tracks                                       |
| `button.accentBg`, `button.accentHover`, `button.accentPressed`, `button.accentText` | The accent button                                                                   |
| `shadow.focusRing`                                                                   | The focus ring (keep the 2 px gap + 2 px ring shape)                                |
| `component.runningBorder`                                                            | The border of a running task                                                        |
| `brand.salmon`, `accent.salmonSubtle`                                                | Warm emphasis text and badges                                                       |
| `brand.violet`, `effect.heroGlow`, `effect.coverGlow`                                | Hero glows                                                                          |
| `brand.logoGradient`, `brand.logoCoreGradient`                                       | The app's own mark                                                                  |

Token names stay the same (`brand.coral` keeps its name even when an app's accent is blue) so components and docs
never fork. Generate an app's tokens with an override file ([Theming › Re-branding](theming.md#re-branding-another-app))
and keep the contrast tests green: accent text must still reach 4.5:1 in both themes and the accent fill 3:1.

Everything else — neutrals, status colors, type, spacing, radii, motion, components and patterns — is the same in
every app.

## Names and marks

- Each app has its own name and mark. Components take the mark through a `brand` slot; the design system ships no
  logo.
- The OpenNavo name and logo are trademarks of the OpenNavo authors and are **not** covered by this repository's MIT
  license ([TRADEMARKS.md](../TRADEMARKS.md)). Apps built on the system must not use them as their own name or icon.
- The component prefix `On` and the CSS prefix `--on-` belong to the system, not to a product; keep them.

## Using the mark well (for OpenNavo itself)

- The wordmark sits beside the mark at 15 px, weight 600, in `brand.coral`; the mark is 22 px tall next to it.
- Below 32 px the mark uses its simplified geometry. Keep clear space of at least half the mark's height.
- On light backgrounds the star in the mark switches to the amber core gradient; never place the mark on a busy image.
