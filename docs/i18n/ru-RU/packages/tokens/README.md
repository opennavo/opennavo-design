[English](../../../../../packages/tokens/README.md) · [简体中文](../../../zh-CN/packages/tokens/README.md) · [繁體中文](../../../zh-Hant/packages/tokens/README.md) · [日本語](../../../ja-JP/packages/tokens/README.md) · [Español](../../../es-ES/packages/tokens/README.md) · [Português (Brasil)](../../../pt-BR/packages/tokens/README.md) · **Русский** · [Deutsch](../../../de-DE/packages/tokens/README.md) · [Français](../../../fr-FR/packages/tokens/README.md) · [Italiano](../../../it-IT/packages/tokens/README.md)

> Оригинал написан на английском. Переводы подготовлены локально с помощью машинного перевода и требуют проверки носителями языка. Код и тексты лицензий сохранены.

<a id="opennavodesign-tokens"></a>

# @opennavo/design-tokens

генерируется из [`tokens/tokens.json`](../../../../../tokens/tokens.json)Не редактировать `dist/`; изменить JSON бегать
`pnpm gen` в корневой репозитории.

| экспорт                                                                  | Что?                                                                                                                                                                                 |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `@opennavo/design-tokens/tokens.css`                                     | Каждый токен как `--on-*` CSS переменная. Темнота по умолчанию; свет через `prefers-color-scheme` или `data-theme="light"`Темный вынужденный с `data-theme="dark"`Также на подлесках |
| `@opennavo/design-tokens/base.css`                                       | Базовые стили для любых фреймворков: html цвета и шрифт, `[data-theme]` цвет поддеревьев, защитный механизм переключения тем, уменьшенное движение                                   |
| `@opennavo/design-tokens/system-fonts.css`                               | Стек шрифта System UI на язык (SF Pro, PingFang SC/TC, Hiragino Sans)                                                                                                                |
| `@opennavo/design-tokens/uno-preset`                                     | `presetOpenNavo()` для UnoCSS (с `presetWind3()`)                                                                                                                                    |
| `@opennavo/design-tokens/tailwind.css`                                   | Tailwind CSS v4 `@theme inline` картографирование (импорт) `tokens.css`)                                                                                                             |
| `@opennavo/design-tokens/tailwind-preset`                                | Tailwind CSS v3 предустановленный`presets: [openNavoPreset]`)                                                                                                                        |
| `@opennavo/design-tokens`                                                | Типовые значения: `color` (темный) `lightTheme`, `space`, `radius`, `typography` …, `tokenVar()`, `detailGlow()`                                                                     |
| `@opennavo/design-tokens/theme`                                          | `applyThemePreference()`, `themeBootScript()`, `resolveTheme()`, `THEME_PREFERENCES`                                                                                                 |
| `@opennavo/design-tokens/contrast`                                       | WCAG Контрастные помощники, используемые в тестах                                                                                                                                    |
| `@opennavo/design-tokens/build`                                          | Генератор как функция: `buildArtifacts()`, `mergeTokens()` Для брендов Overrides                                                                                                     |
| `@opennavo/design-tokens/tokens.json`, `…/dtcg/{dark,light}.tokens.json` | Сырые токены и токены дизайна для каждой темы (DTCG) файлы для Figma Tokens Studio, Style Dictionary                                                                                 |

Имена удобств: `bg-surface-*`, `text-ink-*` (текстовые цвета), `border-line-*` (границы), `bg-brand-*`, `bg-accent-*`,
`bg-status-*`, `bg-button-*`, `bg-component-*`, `bg-chart-*`, `rounded-*`, `shadow-*`, `text-{hero … mono}`,
`duration-*`, `ease-*`, `z-*`Полный список со значениями находится в [docs/reference/tokens.md](../../docs/reference/tokens.md).

Генератор также записывает Flutter (`packages/flutter/lib/src/tokens.g.dart`и SwiftUI
(`packages/swift/Sources/OpenNavoDesign/Tokens.generated.swift`) токены и ссылка на токены.
бренд: `node scripts/generate.ts --overrides brand.json --out <dir>` ([docs/theming.md](../../docs/theming.md)).
