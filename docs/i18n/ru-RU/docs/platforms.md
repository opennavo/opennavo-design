[English](../../../platforms.md) · [简体中文](../../zh-CN/docs/platforms.md) · [繁體中文](../../zh-Hant/docs/platforms.md) · [日本語](../../ja-JP/docs/platforms.md) · [Español](../../es-ES/docs/platforms.md) · [Português (Brasil)](../../pt-BR/docs/platforms.md) · **Русский** · [Deutsch](../../de-DE/docs/platforms.md) · [Français](../../fr-FR/docs/platforms.md) · [Italiano](../../it-IT/docs/platforms.md)

> Оригинал написан на английском. Переводы подготовлены локально с помощью машинного перевода и требуют проверки носителями языка. Код и тексты лицензий сохранены.

<a id="platforms"></a>

# Платформы

Одинаковые токены и правила на каждой платформе; на этой странице перечислены отличия.

<a id="macos-desktop-tauri--vue"></a>

## macOS рабочий столTauri + Vue)

- **Окно:** накладная панель заголовка со скрытым заголовком, светофоры вставлены 18 × 22, по умолчанию 1280 × 820, минимум
  1100 × 700. Отметьте панель инструментов и пустые области заголовка как области перетаскивания (`data-tauri-drag-region`).
- **Внешность:** магазин `system | light | dark` в настройках; применять с `app.set_theme()` перед выходом Windows; синхронизация
  Основной фон окна для `surface.base` и так далее `ThemeChanged` ([Имя](theming.md#macos-desktop-tauri)).
- **Поповеры и накладки** - отдельные прозрачные окна без границ (популяции в баре меню, путеводители по разрешению,
  Предупреждения: их `html` быть прозрачным с `color-scheme: normal`, панель рисует `surface.card` с
  `rounded-panel` и его собственная тень; родные тени удалены, поэтому прозрачные границы никогда не проявляются.
- **Меню-бар:** Предметы являются шаблонными изображениями, поэтому macOS Цвета их; щелчок переключает потоп; ничто не активирует
  Главное окно, если пользователь не выбирает «Открыть».
- **Системная интеграция:** разрешения через настройки системы глубокие ссылки с наложением руководства, которое не принимает
  фокус; в родном меню приложения есть стандартные элементы (About, Settings s, Hide, Quit); диалоги, для которых нужен пароль
  Используйте систему и скажите, для чего она нужна.
- **Шрифты:** Системный шрифт через `system-fonts.css`. **Свиток:** Главная колонна прокручивается внутри окна
  (`OnAppShell scroll="container"`).
- **Специфика WebKit:** Тестовый фокус и прозрачность в WKWebView не только в Chromium `:focus-visible` и
  Окклюзия ведет себя по-разному.

<a id="web-nuxt"></a>

## Веб.Nuxt)

- Сервер-рендеринг и кэш-дружественный: HTML одинакова для каждого посетителя; тема, согласие и предложения
  Загрузочный скрипт темы - единственный встроенный скрипт, который нужен системе дизайна.
- `OnAppShell scroll="document"` с липкой боковой панелью и панелью инструментов из `md`Компактный бар внизу.
- Ссылки - это реальные ссылки (`linkAs` = `NuxtLink`), с префиктом на взаимодействие, а не на видимость.
- Мета: `color-scheme: dark light`установленный `lang` и hreflang на странице.

<a id="react--tailwind-css"></a>

## React + Tailwind CSS

Нет никакого React компоненты; используйте токены и следуйте спецификациям компонентов.

```css
/* app.css — Tailwind CSS v4 */
@import 'tailwindcss';
@import '@opennavo/design-tokens/tailwind.css'; /* theme mapping + tokens.css */
@import '@opennavo/design-tokens/base.css'; /* html colors, theme-switch guard, reduced motion */
@import '@opennavo/design-tokens/system-fonts.css';
```

Помощники без темы Vue: `applyThemePreference`, `themeBootScript` и `THEME_PREFERENCES` из
`@opennavo/design-tokens/theme`. [`examples/react-tailwind`](../../../../examples/react-tailwind) показывает карту настроек с
Переключатель темы, переключатель и кнопки, построенные из этих классов.

Классы соответствуют Vue компоненты`bg-surface-card`, `text-ink-secondary`, `border-line-subtle`, `rounded-big`,
`shadow-popover`, `text-title1`, `duration-fast`, `z-modal`). Tailwind CSS v3 использует предустановленное:
`presets: [openNavoPreset]` из `@opennavo/design-tokens/tailwind-preset`плюс
`import '@opennavo/design-tokens/tokens.css'`Тема переключения одинакова `data-theme` атрибут.

<a id="swiftui-opennavodesign-swift-package"></a>

## SwiftUI (`OpenNavoDesign` Свифт-пакет

- `OnColor.*` Динамические цвета, `OnSpace.*`, `OnRadius.*`, `OnTypography.*` с `.onTextStyle(_:)`, `OnShadow.*` с
  `.onShadow(_:)`, `OnMotion.*` (длительность и `Animation` кривые, `OnLayout.*`.
- Системные элементы управления остаются системными элементами управления; применять токены к фонам, тексту и интервалам вокруг них.
- Type использует SF Pro при размерах токенов; отслеживание преобразуется из em в точки.

<a id="flutter-opennavo_design-package"></a>

## Flutter (`opennavo_design` посылка

- `onThemeData(Brightness)` для `theme` / `darkTheme`; `OnColors.of(context)` и `OnShadows.of(context)` Для жетонов
  Цвета и тени ()`ThemeExtension`Это оживляет между темами.
- `OnSpace`, `OnRadius`, `OnTypography` (`TextStyle`s; верхний регистр `label` струна сама, `OnMotion`
  (`Duration`s и `Cubic` кривые, `OnLayout`.
- Встроенные теневые слои не доступны в Flutter и опущены.
