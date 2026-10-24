[English](../../../CHANGELOG.md) · [简体中文](../zh-CN/CHANGELOG.md) · [繁體中文](../zh-Hant/CHANGELOG.md) · [日本語](../ja-JP/CHANGELOG.md) · [Español](../es-ES/CHANGELOG.md) · [Português (Brasil)](../pt-BR/CHANGELOG.md) · **Русский** · [Deutsch](../de-DE/CHANGELOG.md) · [Français](../fr-FR/CHANGELOG.md) · [Italiano](../it-IT/CHANGELOG.md)

> Оригинал написан на английском. Переводы подготовлены локально с помощью машинного перевода и требуют проверки носителями языка. Код и тексты лицензий сохранены.

<a id="changelog"></a>

# Изменить

<a id="010--unreleased"></a>

## 0.1.0 — невыпущенный

Первая версия, извлеченная из OpenNavo Десктопное приложение и сайт.

- Токены: темные и светлые темы для каждого цвета; световой режим следует за системой. `data-theme` атрибутов, а также на
  Новые роли для светового режима: `surface.popover`, `text.accent`, `component.segmentActive`,
  `status.*Border`, `component.menuBarBg` / `menuBarText`, `shadow.segment`, `shadow.knob`,
  `effect.accentGlowOpacity`.
- Результаты: CSS переменные, типизированные значения TS, UnoCSS предустановлено, Tailwind CSS v4 тема и v3 предустановленная, DTCG Файлы по теме,
  Flutter `ThemeExtension`s и тематический строитель, SwiftUI Динамические цвета и шкалы, генерируемая ссылка на токен.
- `@opennavo/design-vue`: Общий OpenNavo Компоненты, помощники по теме (`applyThemePreference`,
  `themeBootScript`), базовые стили и галерея компонентов.
- Спецификация в `docs/`.
