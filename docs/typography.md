# Typography

## Typeface

Apps use the **system UI font** — SF Pro on Apple platforms, Segoe UI on Windows — through
`@opennavo/design-vue/system-fonts.css`, with the platform's CJK faces for Chinese and Japanese:

| Language                                                 | Stack (system-fonts.css)                                                          |
| -------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Latin, Cyrillic                                          | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`                       |
| Simplified Chinese (`:lang(zh)`)                         | `-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif` |
| Traditional Chinese (`:lang(zh-Hant)`, `zh-TW`, `zh-HK`) | `… 'PingFang TC', 'Microsoft JhengHei', sans-serif`                               |
| Japanese (`:lang(ja)`)                                   | `… 'Hiragino Sans', 'Yu Gothic', sans-serif`                                      |
| Code, versions, paths                                    | `ui-monospace, 'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace`   |

The system font matches the operating system, costs no download and renders CJK best. The token font stacks
(`font.family.*`, which start with Inter) are the **brand stack** for places where the system font is not available
or not wanted: generated share images, marketing artwork, and the component gallery. Set `lang` on `<html>` (and on
any element in another language) so the right stack applies.

Inter, when used, runs with `font-feature-settings: "cv11", "ss01"` (single-storey a, alternate numerals) and
`font-optical-sizing: auto`; `base.css` sets both.

## Scale

`text-{name}` sets size, line height, weight and tracking together. Use the scale; do not set font sizes by hand
except for the dense sizes listed under _Small text_.

| Class           | Size / line height | Weight | Tracking          | Use                                       |
| --------------- | ------------------ | ------ | ----------------- | ----------------------------------------- |
| `text-hero`     | 76 / 78            | 600    | −0.035em          | Website home hero only                    |
| `text-section`  | 46 / 50            | 600    | −0.03em           | Website section headings                  |
| `text-display`  | 40 / 44            | 600    | −0.03em           | Feature hero headings                     |
| `text-title1`   | 28 / 34            | 600    | −0.02em           | Page titles                               |
| `text-title2`   | 22 / 28            | 600    | −0.02em           | Dialog titles, compact detail headers     |
| `text-headline` | 16 / 24            | 600    | −0.01em           | Section headings, card titles             |
| `text-stat`     | 20 / 26            | 600    | −0.015em          | Statistic values                          |
| `text-body`     | 14 / 22            | 400    | 0                 | Body text                                 |
| `text-body-sm`  | 13 / 20            | 400    | 0                 | Lists, tables, settings rows              |
| `text-caption`  | 12 / 18            | 400    | 0                 | Secondary information                     |
| `text-label`    | 11 / 16            | 600    | 0.08em, uppercase | Group labels (sidebar sections, eyebrows) |
| `text-mono`     | 12 / 18            | 400    | 0                 | Commands, versions, logs                  |

On narrow screens headings step down the scale rather than shrinking freely: the home hero is `text-display` below
768 px, `text-section` from 768 px and `text-hero` from 1024 px; feature-hero headings drop to 36 px below 768 px. App
windows never go below their minimum width, so app text does not scale.

### Small text

Dense desktop UI uses a few in-between sizes, always with tokens for color: 12.5 px for compact controls and table
cells, 11.5 px for metadata under a row, 10.5 px for tiny badges. Nothing smaller than 10.5 px, and nothing below
12 px carries essential information.

## Rules

- **Numbers:** use `tabular-nums` wherever numbers line up or change in place (statistics, tables, progress,
  counters, monitors). Format numbers, sizes and dates for the locale ([Content](content.md)).
- **Weight:** 400 for text, 500 for controls and segmented labels, 600 for headings, button labels and emphasis. No
  700+ in the interface.
- **Emphasis:** bold (600) within a sentence, never color alone. Inline highlights in descriptions use `**…**` and
  render as `text-ink-primary` weight 600 inside secondary text.
- **Uppercase** only through `text-label`, and only for Latin and Cyrillic; CJK labels are not transformed.
- **Line length:** keep body text under about 72 characters (or 40 CJK characters) per line; descriptions in heroes
  are capped around 430 px.
- **Headings** balance their lines (`text-wrap: balance`) on marketing pages; CJK headings break at punctuation, not
  mid-word, where the browser allows.
- **Truncation:** truncate single-line labels with an ellipsis and expose the full text in a tooltip or `title`;
  never truncate numbers or status.
- **CJK spacing:** copy puts one half-width space between CJK and Latin letters or digits ("近 30 天",
  "下载约 768 MB") and none next to full-width punctuation. `text-autospace: normal` in `base.css` only fills a gap the
  copy missed; it never replaces the space in the source text.
