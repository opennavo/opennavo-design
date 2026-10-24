**English** · [简体中文](i18n/zh-CN/docs/content.md) · [繁體中文](i18n/zh-Hant/docs/content.md) · [日本語](i18n/ja-JP/docs/content.md) · [Español](i18n/es-ES/docs/content.md) · [Português (Brasil)](i18n/pt-BR/docs/content.md) · [Русский](i18n/ru-RU/docs/content.md) · [Deutsch](i18n/de-DE/docs/content.md) · [Français](i18n/fr-FR/docs/content.md) · [Italiano](i18n/it-IT/docs/content.md)

# Content

Words are interface. The same rules apply in every language; English and Simplified Chinese are written first, the
other eight languages are translated from them and reviewed.

## Voice

Plain, specific and calm — a capable friend who explains what is going on, not a salesperson and not a log file.

- **Say what happens.** "Moves 14 items to the Trash. You can restore them from there." not "Are you sure?"
- **Say where data goes.** "Only on this Mac; nothing is uploaded." "Search goes straight from this Mac to Apple."
- **Own failures, offer the next step.** "Some content could not be loaded. Previously loaded content has been kept."
  "The update check could not complete. Try again, or check the network."
- **No hype, no filler.** No "Oops!", no exclamation marks, no "simply", "just", "seamlessly", "powerful".
- **Concrete over abstract.** Name the app, the count, the size, the time. "Docker Desktop needs administrator
  permission" beats "Permission required".

## Wording rules

- **Buttons** are verbs that name the action: Install, Update all (4), Move to Trash, Roll back, Open in OpenNavo.
  English button labels and menu items use title case; everything else uses sentence case.
- **Titles** are short noun phrases or states: "Your list is empty", "No results for “vscode”".
- **Descriptions** are one sentence. Two at most. Put the action after the explanation.
- **Hints** under settings say what the option does when it is on, not what the label already says.
- **Confirmation dialogs**: title asks the specific question ("Delete “Work” from this Mac?"), body states the
  consequence, confirm button repeats the verb.
- **Errors**: what went wrong, in the user's terms, plus what to do. Error codes go in details or logs, not titles.
- **Privacy lines** start with a lock icon and stay one line.
- Use curly quotes (“ ” ‘ ’), real apostrophes, the ellipsis character (…), the multiplication sign (×) and the
  arrow (→) for version changes: `1.2.9 → 1.3.0`.
- Product and platform names keep their spelling: macOS, iPhone, App Store, GitHub, Homebrew. App names are shown as
  the developer writes them.

## Chinese (简体 / 繁體)

- 用自然、具体的口语书面语，不写套话和模板句（“一站式”“全方位”“赋能”“轻松实现”之类）。
- 按钮用动词短语：“安装”“全部更新（4）”“移到废纸篓”。不要“确定”“好的”。
- 中文与英文、数字之间加一个半角空格：“近 30 天”“下载约 768 MB”“在 OpenNavo 中打开”；与全角标点相邻时不加。
- 全角标点：，。；：？！“”（）——……；引号用“”，嵌套用‘’。
- 数量用“个”“款”“项”等合适的量词，大数用“万”“亿”（由格式化函数处理）。
- 繁体中文是独立的语言版本：用台湾、香港用户熟悉的词（“軟體”“資料夾”“設定”），不是简体的字形转换。

## Numbers, sizes and dates

Always format through the shared helpers (`Intl`-based), never by string concatenation:

| Kind           | Rule                                                                | Examples                     |
| -------------- | ------------------------------------------------------------------- | ---------------------------- |
| Counts         | Locale grouping; compact form in tight spaces                       | 17,392 · 1.7 万 · 1,7 тыс.   |
| Sizes          | Decimal units (1 KB = 1000 B), one decimal under 10                 | 768 MB · 2.3 GB              |
| Speeds         | Size per second                                                     | 560.6 KB/s                   |
| Percent        | Whole numbers unless a decimal changes meaning                      | 62% · 0.8%                   |
| Dates          | Locale order, short month; omit the year in the current year        | Oct 23 · 10月23日 · 23. Okt. |
| Relative times | Just now → minutes → hours → yesterday → days (under a week) → date | 2 hours ago · 昨天           |
| Times          | 24-hour clock in every language                                     | 09:00 · 21:41                |
| Durations      | Seconds under a minute, then minutes and seconds                    | 38 s · 2 min 5 s · 2 分 5 秒 |
| Versions       | As published; arrows between                                        | 4.49.9 → 4.50.0              |

Plurals use the locale's plural categories (English one/other; Russian one/few/many/other; Chinese and Japanese one
form) — never `item(s)`.

## Interface languages

| Code      | Language           | Notes                                             |
| --------- | ------------------ | ------------------------------------------------- |
| `en-US`   | English            | Authoring language for wording; sentence case     |
| `zh-CN`   | 简体中文           | Source of truth for meaning in OpenNavo           |
| `zh-Hant` | 繁體中文           | Taiwan/Hong Kong vocabulary; dates follow `zh-TW` |
| `ja-JP`   | 日本語             | Polite, concise; no uppercase transforms          |
| `es-ES`   | Español            | Often 25–35% longer than English                  |
| `pt-BR`   | Português (Brasil) | Often 25–35% longer                               |
| `ru-RU`   | Русский            | Often 30–60% longer; four plural forms            |
| `de-DE`   | Deutsch            | Long compounds; allow wrapping                    |
| `fr-FR`   | Français           | Non-breaking space before : ; ? !                 |
| `it-IT`   | Italiano           | Often 20–30% longer                               |

Rules:

- **Design for the longest language.** A sidebar label has about 152 px at 13.5 px; measure Russian, Spanish and
  German against it and shorten the translation rather than truncating. Buttons may grow; never fix their width.
- **No concatenation.** Whole sentences with named placeholders (`{count}`, `{name}`); translators move them.
- **Every locale has every key.** A missing translation falls back to English, and CI checks keys and placeholders.
- **Brand and product names** are not translated; the app name stays OpenNavo in every language.
- **Machine translation** is marked as such where content (not interface) is translated automatically, with a link to
  the original.
