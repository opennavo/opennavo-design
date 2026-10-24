[English](../../../../reference/tokens.md) · [简体中文](../../../zh-CN/docs/reference/tokens.md) · [繁體中文](../../../zh-Hant/docs/reference/tokens.md) · [日本語](../../../ja-JP/docs/reference/tokens.md) · [Español](../../../es-ES/docs/reference/tokens.md) · [Português (Brasil)](../../../pt-BR/docs/reference/tokens.md) · **Русский** · [Deutsch](../../../de-DE/docs/reference/tokens.md) · [Français](../../../fr-FR/docs/reference/tokens.md) · [Italiano](../../../it-IT/docs/reference/tokens.md)

> Оригинал написан на английском. Переводы подготовлены локально с помощью машинного перевода и требуют проверки носителями языка. Код и тексты лицензий сохранены.

<a id="token-reference"></a>

# Ссылка на токены

<!-- Generated from tokens/tokens.json by packages/tokens/scripts/generate.ts; do not edit. After changing tokens.json, run `pnpm gen`. -->

Каждая величина ниже исходит из `tokens/tokens.json`Темнота - это тема по умолчанию; столбец Света показывает значение
Световая тема используется (эм-даш означает, что токен одинаков в обеих темах). CSS Переменные — это то, что делает Интернет
Упаковки излучают; колонка полезности - это UnoCSS / Tailwind Стебель класса`bg-`, `text-`, `border-` ... + стебель.
Flutter (`OnColors`и SwiftUI (`OnColor`) использовать траекторию верблюжьего калия, например. `surface.cardAlt` → `surfaceCardAlt`.

<a id="color"></a>

## цвет

<a id="surfaces"></a>

### Поверхности

| Дизайн-токен      | CSS переменный          | полезность         | Тёмная                   | Светлая                     | Использовать                                                                                               |
| ----------------- | ----------------------- | ------------------ | ------------------------ | --------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `surface.page`    | `--on-surface-page`     | `surface-page`     | `#0B0B0B`                | `#F2F2F2`                   | Внешний веб-сайт и фон окна.                                                                               |
| `surface.base`    | `--on-surface-base`     | `surface-base`     | `#131313`                | `#F8F8F8`                   | Основной контент фон.                                                                                      |
| `surface.sidebar` | `--on-surface-sidebar`  | `surface-sidebar`  | `#161616`                | `#F1F1F1`                   | Настольная боковая панель.                                                                                 |
| `surface.rail`    | `--on-surface-rail`     | `surface-rail`     | `#141414`                | `#F5F5F5`                   | Правый рельс с резюме и второстепенными действиями.                                                        |
| `surface.card`    | `--on-surface-card`     | `surface-card`     | `#1A1A1A`                | `#FFFFFF`                   | Карты.                                                                                                     |
| `surface.cardAlt` | `--on-surface-card-alt` | `surface-card-alt` | `#1F1F1F`                | `#F5F5F5`                   | Вводы и вторичные блоки внутри карт.                                                                       |
| `surface.raised`  | `--on-surface-raised`   | `surface-raised`   | `#262626`                | `#EDEDED`                   | Зависание, выбор, иконки; темнее, чем карты в светлом режиме, поэтому плавающие панели используют попувер. |
| `surface.chip`    | `--on-surface-chip`     | `surface-chip`     | `#2A2A2A`                | `#EBEBEB`                   | Нейтральный бейдж фон.                                                                                     |
| `surface.control` | `--on-surface-control`  | `surface-control`  | `#2B2B2B`                | `#FFFFFF`                   | Вводы, подсказки и вторичный контроль.                                                                     |
| `surface.inset`   | `--on-surface-inset`    | `surface-inset`    | `#111111`                | `#F0F0F0`                   | Блоки кода, журналы, треки с сегментированным управлением.                                                 |
| `surface.overlay` | `--on-surface-overlay`  | `surface-overlay`  | `rgba(28, 28, 28, 0.92)` | `rgba(255, 255, 255, 0.94)` | Накладки с фонофильтром: blur(20px).                                                                       |
| `surface.popover` | `--on-surface-popover`  | `surface-popover`  | `#262626`                | `#FFFFFF`                   | Плавающие панели и уведомления о контенте, такие как карты согласия и предложения.                         |

<a id="borders-utility-prefix-line"></a>

### Границы (приставка полезности) `line`)

| Дизайн-токен     | CSS переменный        | полезность     | Тёмная                      | Светлая               | Использовать                         |
| ---------------- | --------------------- | -------------- | --------------------------- | --------------------- | ------------------------------------ |
| `border.subtle`  | `--on-border-subtle`  | `line-subtle`  | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.08)` | Карточные границы и разделители.     |
| `border.default` | `--on-border-default` | `line-default` | `rgba(255, 255, 255, 0.12)` | `rgba(0, 0, 0, 0.13)` | Вход, кнопка-призрак и границы окон. |
| `border.strong`  | `--on-border-strong`  | `line-strong`  | `rgba(255, 255, 255, 0.20)` | `rgba(0, 0, 0, 0.22)` | Границы навеса.                      |
| `border.sidebar` | `--on-border-sidebar` | `line-sidebar` | `#1D1D1D`                   | `#E5E5E5`             | Правая боковая граница.              |

<a id="text-utility-prefix-ink"></a>

### Текст (полезный префикс) `ink`)

| Дизайн-токен     | CSS переменный        | полезность      | Тёмная    | Светлая   | Использовать                                                                                                                                   |
| ---------------- | --------------------- | --------------- | --------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `text.primary`   | `--on-text-primary`   | `ink-primary`   | `#EDEDED` | `#1A1A1A` | Заголовки, подчеркнутый текст тела, цифры (14,9:1 на темных картах, 17,4:1 на светлых картах).                                                 |
| `text.secondary` | `--on-text-secondary` | `ink-secondary` | `#A8A8A8` | `#575757` | Текст тела и описания (7.3:1 на темных картах, 7.2:1 на светлых картах).                                                                       |
| `text.tertiary`  | `--on-text-tertiary`  | `ink-tertiary`  | `#8F8F8F` | `#6B6B6B` | Вторичная информация, ярлыки, времена (5.4:1 на темных карточках, 4.7:1 на темных поднятых; 5.3:1 и 4.6:1 в светлом режиме).                   |
| `text.disabled`  | `--on-text-disabled`  | `ink-disabled`  | `#5C5C5C` | `#A6A6A6` | Инвалидные/декоративные; никогда не передайте важную информацию.                                                                               |
| `text.inverse`   | `--on-text-inverse`   | `ink-inverse`   | `#141414` | `#FFFFFF` | Текст и иконки на твердых заливках (статус, коралл, лосось); темный в темном режиме, белый в светлом режиме.                                   |
| `text.onAccent`  | `--on-text-on-accent` | `ink-on-accent` | `#1B0A05` | —         | Текст на коралловых пуговицах/значках (7.2:1).                                                                                                 |
| `text.accent`    | `--on-text-accent`    | `ink-accent`    | `#FF7356` | `#B83A15` | Коралловый текст, ссылки и иконки; Brand.coral предназначен для заполнения и графики (световой режим требует более темного оттенка для 4.5:1). |

<a id="brand"></a>

### Бренд

| Дизайн-токен                    | CSS переменный                           | полезность        | Тёмная                            | Светлая               | Использовать                                                                                                                                     |
| ------------------------------- | ---------------------------------------- | ----------------- | --------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `brand.coral`                   | `--on-brand-coral`                       | `brand-coral`     | `#FF7356`                         | `#EE5533`             | Основной цвет бренда для наполнителей и графики: логотип, прогресс, значки, подчеркнутые кнопки. Для кораллового текста используйте text.accent. |
| `brand.salmon`                  | `--on-brand-salmon`                      | `brand-salmon`    | `#F99E70`                         | `#A74C1B`             | Подчеркнутый текст: герой второй строки, значки, доступные обновления.                                                                           |
| `brand.violet`                  | `--on-brand-violet`                      | `brand-violet`    | `#5B5BD6`                         | —                     | Главный герой светится цветом.                                                                                                                   |
| `brand.glowCore`                | `--on-brand-glow-core`                   | `brand-glow-core` | `#CDCDFF`                         | —                     | Светодиодный центр.                                                                                                                              |
| `brand.logoGradient`            | `--on-brand-logo-gradient`               | —                 | `#FFB347` → `#FF7356` → `#FF4E3A` | —                     | Логотип N градиент, сверху слева внизу справа.                                                                                                   |
| `brand.logoCoreGradient`        | `--on-brand-logo-core-gradient`          | —                 | `#FFF6D6` → `#FFC861`             | `#FFB347` → `#FF8F3F` | Логотип Polaris на темных фонах.                                                                                                                 |
| `brand.logoCoreGradientOnLight` | `--on-brand-logo-core-gradient-on-light` | —                 | `#FFB347` → `#FF8F3F`             | —                     | Логотип Polaris градиент на светлых фонах; теплый белый исчезнет.                                                                                |

<a id="accent-tints"></a>

### Акцентные оттенки

| Дизайн-токен          | CSS переменный              | полезность             | Тёмная                      | Светлая                   | Использовать                         |
| --------------------- | --------------------------- | ---------------------- | --------------------------- | ------------------------- | ------------------------------------ |
| `accent.coralSubtle`  | `--on-accent-coral-subtle`  | `accent-coral-subtle`  | `rgba(255, 115, 86, 0.12)`  | `rgba(238, 85, 51, 0.10)` | Прогресс-треки и Обновление значков. |
| `accent.salmonSubtle` | `--on-accent-salmon-subtle` | `accent-salmon-subtle` | `rgba(249, 158, 112, 0.10)` | `rgba(167, 76, 27, 0.10)` | Значок и доступные обновленные фоны. |

<a id="status"></a>

### Статус

| Дизайн-токен           | CSS переменный               | полезность              | Тёмная                      | Светлая                    | Использовать                                          |
| ---------------------- | ---------------------------- | ----------------------- | --------------------------- | -------------------------- | ----------------------------------------------------- |
| `status.success`       | `--on-status-success`        | `status-success`        | `#3FCF6C`                   | `#187733`                  | Установка, успех, актуальность.                       |
| `status.successSubtle` | `--on-status-success-subtle` | `status-success-subtle` | `rgba(63, 207, 108, 0.10)`  | `rgba(24, 119, 51, 0.10)`  |                                                       |
| `status.warning`       | `--on-status-warning`        | `status-warning`        | `#FAB219`                   | `#965A00`                  | Требуются предупреждения и разрешение администратора. |
| `status.warningSubtle` | `--on-status-warning-subtle` | `status-warning-subtle` | `rgba(250, 178, 25, 0.10)`  | `rgba(150, 90, 0, 0.10)`   |                                                       |
| `status.danger`        | `--on-status-danger`         | `status-danger`         | `#FF5D51`                   | `#C22B21`                  | Неудача, обесценивание, удаление.                     |
| `status.dangerSubtle`  | `--on-status-danger-subtle`  | `status-danger-subtle`  | `rgba(255, 93, 81, 0.10)`   | `rgba(194, 43, 33, 0.10)`  |                                                       |
| `status.info`          | `--on-status-info`           | `status-info`           | `#66A4FA`                   | `#1564CD`                  | Самообновление, ссылки, информация.                   |
| `status.infoSubtle`    | `--on-status-info-subtle`    | `status-info-subtle`    | `rgba(102, 164, 250, 0.10)` | `rgba(21, 100, 205, 0.10)` |                                                       |
| `status.successBorder` | `--on-status-success-border` | `status-success-border` | `rgba(63, 207, 108, 0.20)`  | `rgba(24, 119, 51, 0.24)`  | Граница панелей, тонированных с успехом.              |
| `status.warningBorder` | `--on-status-warning-border` | `status-warning-border` | `rgba(250, 178, 25, 0.25)`  | `rgba(150, 90, 0, 0.24)`   | Граница панелей, тонированных предупреждением.        |
| `status.dangerBorder`  | `--on-status-danger-border`  | `status-danger-border`  | `rgba(255, 93, 81, 0.25)`   | `rgba(194, 43, 33, 0.24)`  | Граница панелей, тонированных опасностями.            |
| `status.infoBorder`    | `--on-status-info-border`    | `status-info-border`    | `rgba(102, 164, 250, 0.25)` | `rgba(21, 100, 205, 0.24)` | Граница панелей, тонированных infoSubtle.             |

<a id="buttons"></a>

### Кнопки

| Дизайн-токен              | CSS переменный                  | полезность                 | Тёмная    | Светлая   | Использовать |
| ------------------------- | ------------------------------- | -------------------------- | --------- | --------- | ------------ |
| `button.primaryBg`        | `--on-button-primary-bg`        | `button-primary-bg`        | `#EBEBEB` | `#1F1F1F` |              |
| `button.primaryHover`     | `--on-button-primary-hover`     | `button-primary-hover`     | `#FFFFFF` | `#333333` |              |
| `button.primaryPressed`   | `--on-button-primary-pressed`   | `button-primary-pressed`   | `#D6D6D6` | `#0A0A0A` |              |
| `button.primaryText`      | `--on-button-primary-text`      | `button-primary-text`      | `#141414` | `#FFFFFF` |              |
| `button.secondaryBg`      | `--on-button-secondary-bg`      | `button-secondary-bg`      | `#2B2B2B` | `#EBEBEB` |              |
| `button.secondaryHover`   | `--on-button-secondary-hover`   | `button-secondary-hover`   | `#333333` | `#E0E0E0` |              |
| `button.secondaryPressed` | `--on-button-secondary-pressed` | `button-secondary-pressed` | `#242424` | `#D6D6D6` |              |
| `button.secondaryText`    | `--on-button-secondary-text`    | `button-secondary-text`    | `#EDEDED` | `#1A1A1A` |              |
| `button.accentBg`         | `--on-button-accent-bg`         | `button-accent-bg`         | `#FF7356` | `#EE5533` |              |
| `button.accentHover`      | `--on-button-accent-hover`      | `button-accent-hover`      | `#FF8468` | `#F46546` |              |
| `button.accentPressed`    | `--on-button-accent-pressed`    | `button-accent-pressed`    | `#F0603F` | `#E24A28` |              |
| `button.accentText`       | `--on-button-accent-text`       | `button-accent-text`       | `#1B0A05` | —         |              |
| `button.disabledBg`       | `--on-button-disabled-bg`       | `button-disabled-bg`       | `#171717` | `#F0F0F0` |              |
| `button.disabledText`     | `--on-button-disabled-text`     | `button-disabled-text`     | `#5C5C5C` | `#A6A6A6` |              |

<a id="charts"></a>

### Диаграммы

| Дизайн-токен       | CSS переменный          | полезность         | Тёмная    | Светлая   | Использовать                                                                                                 |
| ------------------ | ----------------------- | ------------------ | --------- | --------- | ------------------------------------------------------------------------------------------------------------ |
| `chart.series1`    | `--on-chart-series1`    | `chart-series1`    | `#7B72EE` | `#6A61E8` | Цвет категории 1, фиолетовый.                                                                                |
| `chart.series2`    | `--on-chart-series2`    | `chart-series2`    | `#E0663F` | `#D9572E` | Цвет категории 2, коралл.                                                                                    |
| `chart.series3`    | `--on-chart-series3`    | `chart-series3`    | `#1E9E72` | `#168A62` | Цвет категории 3, циан; все три проверены на наличие цветовой слепой доступности / контрастности на #1A1A1A. |
| `chart.emphasis`   | `--on-chart-emphasis`   | `chart-emphasis`   | `#F99E70` | `#D0602A` | Односерийный акцент, текущий период.                                                                         |
| `chart.deemphasis` | `--on-chart-deemphasis` | `chart-deemphasis` | `#4A4A4A` | `#CFCFCF` | Односерийный де-эмпраздник, исторический период.                                                             |
| `chart.grid`       | `--on-chart-grid`       | `chart-grid`       | `#2C2C2A` | `#EBEBEB` |                                                                                                              |
| `chart.axis`       | `--on-chart-axis`       | `chart-axis`       | `#383838` | `#D6D6D6` |                                                                                                              |

<a id="component-colors"></a>

### Компонентные цвета

| Дизайн-токен               | CSS переменный                    | полезность                   | Тёмная                      | Светлая                     | Использовать                                                                                                                        |
| -------------------------- | --------------------------------- | ---------------------------- | --------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `component.searchBg`       | `--on-component-search-bg`        | `component-search-bg`        | `#1C1C1C`                   | `#FFFFFF`                   | Поисковое поле и фон ввода формы.                                                                                                   |
| `component.cardHover`      | `--on-component-card-hover`       | `component-card-hover`       | `#1D1D1D`                   | `#FAFAFA`                   | Интерактивный фон для зависания карт.                                                                                               |
| `component.toggleTrack`    | `--on-component-toggle-track`     | `component-toggle-track`     | `#333333`                   | `#D9D9D9`                   | Включай переключатель.                                                                                                              |
| `component.toggleKnob`     | `--on-component-toggle-knob`      | `component-toggle-knob`      | `#BDBDBD`                   | `#FFFFFF`                   | Снимите большой палец.                                                                                                              |
| `component.toggleKnobOn`   | `--on-component-toggle-knob-on`   | `component-toggle-knob-on`   | `#FFFFFF`                   | —                           | На переключательном пальце.                                                                                                         |
| `component.tabIndicator`   | `--on-component-tab-indicator`    | `component-tab-indicator`    | `#FFFFFF`                   | `#1A1A1A`                   | Индикатор селективного таба.                                                                                                        |
| `component.navActive`      | `--on-component-nav-active`       | `component-nav-active`       | `#202020`                   | `#E3E3E3`                   | Выбранный фон навигации боковой панели.                                                                                             |
| `component.heroBg`         | `--on-component-hero-bg`          | `component-hero-bg`          | `#0E0E10`                   | `#F4F3FD`                   | Изображение карты героя.                                                                                                            |
| `component.captionBg`      | `--on-component-caption-bg`       | `component-caption-bg`       | `rgba(0, 0, 0, 0.55)`       | —                           | Скриншот фона с нижним левым заголовком; темный в обеих темах, поэтому подпись отображается в темной теме (тема данных = «темная»). |
| `component.topNavScrolled` | `--on-component-top-nav-scrolled` | `component-top-nav-scrolled` | `rgba(11, 11, 11, 0.85)`    | `rgba(242, 242, 242, 0.85)` | Прокрученный фон веб-навигации: surface.page на 85% с фоновым фильтром: blur(20px).                                                 |
| `component.scrim`          | `--on-component-scrim`            | `component-scrim`            | `rgba(0, 0, 0, 0.50)`       | `rgba(0, 0, 0, 0.30)`       | Диалог / лист фон.                                                                                                                  |
| `component.lightboxScrim`  | `--on-component-lightbox-scrim`   | `component-lightbox-scrim`   | `rgba(0, 0, 0, 0.88)`       | —                           | Скриншот фона лайтбокса; темный в обеих темах, поэтому лайтбокс отображается в темной теме (тема данных = «темный»).                |
| `component.modalBg`        | `--on-component-modal-bg`         | `component-modal-bg`         | `#171717`                   | `#FFFFFF`                   | Диалог / панель фона.                                                                                                               |
| `component.toastBg`        | `--on-component-toast-bg`         | `component-toast-bg`         | `rgba(44, 44, 44, 0.92)`    | `rgba(255, 255, 255, 0.94)` | Тостовый фон с фонофильтром: blur(20px).                                                                                            |
| `component.itemActive`     | `--on-component-item-active`      | `component-item-active`      | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.06)`       | Текущее меню/командно-палетное меню.                                                                                                |
| `component.runningBorder`  | `--on-component-running-border`   | `component-running-border`   | `rgba(255, 115, 86, 0.25)`  | `rgba(238, 85, 51, 0.40)`   | Карта активной задачи, коралл на 25%.                                                                                               |
| `component.logHeading`     | `--on-component-log-heading`      | `component-log-heading`      | `#E8E8E8`                   | `#1A1A1A`                   | Лог-шаговые линии, начинающиеся с ==>.                                                                                              |
| `component.logSuccess`     | `--on-component-log-success`      | `component-log-success`      | `#7FD88F`                   | `#187733`                   | Успешные бревенчатые линии.                                                                                                         |
| `component.monoText`       | `--on-component-mono-text`        | `component-mono-text`        | `#D0D0D0`                   | `#333333`                   | Текст таблицы Monospace, например, версии.                                                                                          |
| `component.timelineLine`   | `--on-component-timeline-line`    | `component-timeline-line`    | `#333333`                   | `#D6D6D6`                   | Начало линии времени, затухание по поверхности. поднято до прозрачного.                                                             |
| `component.timelineDot`    | `--on-component-timeline-dot`     | `component-timeline-dot`     | `#3A3A3A`                   | `#C4C4C4`                   | Нормальные точки входа по временной шкале.                                                                                          |
| `component.sourceMeta`     | `--on-component-source-meta`      | `component-source-meta`      | `#555555`                   | `#B0B0B0`                   | Вспомогательные точки, такие как GitHub метаданные в источниках высвобождения.                                                      |
| `component.collectionFrom` | `--on-component-collection-from`  | `component-collection-from`  | `#1D1A26`                   | `#F1EEFB`                   | Начало градиента карты сбора, 160°.                                                                                                 |
| `component.collectionTo`   | `--on-component-collection-to`    | `component-collection-to`    | `#161616`                   | `#FFFFFF`                   | Градиент коллекционных карт заканчивается на 70%.                                                                                   |
| `component.collectionRing` | `--on-component-collection-ring`  | `component-collection-ring`  | `#1B1922`                   | `#F8F7FD`                   | Коллекция уложена иконой границы.                                                                                                   |
| `component.detailHeaderBg` | `--on-component-detail-header-bg` | `component-detail-header-bg` | `#171717`                   | `#FFFFFF`                   | Детальный заголовок карты фон под свечением.                                                                                        |
| `component.cliIconFrom`    | `--on-component-cli-icon-from`    | `component-cli-icon-from`    | `#2A2A2A`                   | —                           | Начинается градиент плитки командной строки.                                                                                        |
| `component.cliIconTo`      | `--on-component-cli-icon-to`      | `component-cli-icon-to`      | `#1B1B1B`                   | —                           | Командно-линейный градиент плитки.                                                                                                  |
| `component.cliIconText`    | `--on-component-cli-icon-text`    | `component-cli-icon-text`    | `#E2E2E2`                   | —                           | Текст из командной строки.                                                                                                          |
| `component.letterIconText` | `--on-component-letter-icon-text` | `component-letter-icon-text` | `#FFFFFF`                   | —                           | Плиточный текст, декоративный, потому что имена всегда появляются рядом.                                                            |
| `component.segmentActive`  | `--on-component-segment-active`   | `component-segment-active`   | `#262626`                   | `#FFFFFF`                   | Выбранный сегмент сегментированного контроля.                                                                                       |
| `component.menuBarBg`      | `--on-component-menu-bar-bg`      | `component-menu-bar-bg`      | `rgba(38, 38, 40, 0.96)`    | `rgba(246, 246, 246, 0.96)` | In-app предварительный просмотр macOS Барная полоска меню.                                                                          |
| `component.menuBarText`    | `--on-component-menu-bar-text`    | `component-menu-bar-text`    | `#E6E6E6`                   | `#1F1F1F`                   | Предпросмотр элементов меню, нарисованных как шаблонные изображения AppKit.                                                         |

<a id="macos-window-controls"></a>

### macOS Контроль за окнами

| Дизайн-токен     | CSS переменный        | полезность       | Тёмная    | Светлая | Использовать |
| ---------------- | --------------------- | ---------------- | --------- | ------- | ------------ |
| `macos.close`    | `--on-macos-close`    | `macos-close`    | `#FF5F57` | —       |              |
| `macos.minimize` | `--on-macos-minimize` | `macos-minimize` | `#FEBC2E` | —       |              |
| `macos.zoom`     | `--on-macos-zoom`     | `macos-zoom`     | `#28C840` | —       |              |

<a id="typography"></a>

## Типография

Класс `text-{name}` устанавливает размер, высоту линии, вес и отслеживание вместе.

| Имя         | Класс           | Размер/высота линии | вес | Отслеживание           | Использовать                                                 |
| ----------- | --------------- | ------------------- | --- | ---------------------- | ------------------------------------------------------------ |
| `hero`      | `text-hero`     | 76/78 px            | 600 | -0.035em               | Герой веб-сайта Heading                                      |
| `section`   | `text-section`  | 46/50 х             | 600 | -0,03em                | Заголовок веб-раздела                                        |
| `display`   | `text-display`  | 40/44 х             | 600 | -0,03em                | Оригинальное название: Hero Head                             |
| `title1`    | `text-title1`   | 28/34 х             | 600 | -0,02эм                | Заголовок страницы                                           |
| `title2`    | `text-title2`   | 22/28 х             | 600 | -0,02эм                | Диалоговое название и компактный заголовок детали            |
| `headline`  | `text-headline` | 16/24 х             | 600 | -0,01эм                | Раздельный заголовок                                         |
| `statValue` | `text-stat`     | 20/26 х             | 600 | -0,015эм               | Значения статистики с пропорциональными цифрами              |
| `body`      | `text-body`     | 14/22 х             | 400 | 0                      | Текст текста тела                                            |
| `bodySm`    | `text-body-sm`  | 13/20 х             | 400 | 0                      | Список и основной текст таблицы                              |
| `caption`   | `text-caption`  | 12/18 х             | 400 | 0                      | Вторичная информация                                         |
| `label`     | `text-label`    | 11/16 х             | 600 | 0,08м, верхний регистр | Групповые ярлыки, такие как названия разделов боковой панели |
| `mono`      | `text-mono`     | 12/18 х             | 400 | 0                      | Команды, версии и журналы                                    |

| Семейство шрифтов | стек                                                                                                                                                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sans`            | Inter Переменная, Inter, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC, -apple-система, BlinkMacSystemFont, Helvetica Neue, sans-serif    |
| `sansZh`          | Inter Переменная, Inter, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC, -apple-система, BlinkMacSystemFont, Helvetica Neue, sans-serif    |
| `sansJa`          | Inter Переменная, Inter, Hiragino Sans, Hiragino Kaku Gothic ProN, Yu Gothic, Noto Sans JP, -applesystem, BlinkMacSystemFont, Helvetica Neue, sans-serif |
| `mono`            | SF Mono, JetBrains Mono, ui-monospace, Menlo, Consolas, Liberation Mono, monospace                                                                       |

<a id="spacing"></a>

## прозрачный

| Имя   | CSS переменный   | ценность | Использовать |
| ----- | ---------------- | -------- | ------------ |
| `0`   | `--on-space-0`   | 0px      |              |
| `1`   | `--on-space-1`   | 4px      |              |
| `2`   | `--on-space-2`   | 8px      |              |
| `3`   | `--on-space-3`   | 12px     |              |
| `4`   | `--on-space-4`   | 16px     |              |
| `5`   | `--on-space-5`   | 20px     |              |
| `6`   | `--on-space-6`   | 24px     |              |
| `7`   | `--on-space-7`   | 28px     |              |
| `8`   | `--on-space-8`   | 32px     |              |
| `10`  | `--on-space-10`  | 40px     |              |
| `12`  | `--on-space-12`  | 48px     |              |
| `16`  | `--on-space-16`  | 64px     |              |
| `20`  | `--on-space-20`  | 80px     |              |
| `0-5` | `--on-space-0-5` | 2px      |              |
| `1-5` | `--on-space-1-5` | 6px      |              |
| `2-5` | `--on-space-2-5` | 10px     |              |
| `3-5` | `--on-space-3-5` | 14px     |              |

<a id="radius"></a>

## Радиус

| Имя                | CSS переменный         | ценность | Использовать                                                                    |
| ------------------ | ---------------------- | -------- | ------------------------------------------------------------------------------- |
| `rounded-tiny`     | `--on-radius-tiny`     | 4px      |                                                                                 |
| `rounded-small`    | `--on-radius-small`    | 7px      |                                                                                 |
| `rounded-default`  | `--on-radius-default`  | 10px     |                                                                                 |
| `rounded-panel`    | `--on-radius-panel`    | 12px     | Карты скриншотов, меню, наложения.                                              |
| `rounded-big`      | `--on-radius-big`      | 14px     |                                                                                 |
| `rounded-huge`     | `--on-radius-huge`     | 20px     |                                                                                 |
| `rounded-xl`       | `--on-radius-xl`       | 28px     |                                                                                 |
| `rounded-full`     | `--on-radius-full`     | 9999px   |                                                                                 |
| `rounded-app-icon` | `--on-radius-app-icon` | 23%      | Радиус значка приложения: 23% от длины стороны, приближение macOS суперэллипсы. |

<a id="shadows"></a>

## Тени

| Имя                 | Тёмная                                                                       | Светлая                                                                | Использовать                                                                                    |
| ------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `shadow-window`     | `0 50px 140px rgba(0, 0, 0, 0.65), 0 0 0 0.5px #000000`                      | `0 40px 100px rgba(0, 0, 0, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.16)`    |                                                                                                 |
| `shadow-popover`    | `0 24px 60px rgba(0, 0, 0, 0.60)`                                            | `0 12px 40px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04)`       |                                                                                                 |
| `shadow-modal`      | `0 30px 80px rgba(0, 0, 0, 0.60)`                                            | `0 24px 64px rgba(0, 0, 0, 0.16)`                                      |                                                                                                 |
| `shadow-toast`      | `0 18px 40px rgba(0, 0, 0, 0.50)`                                            | `0 10px 30px rgba(0, 0, 0, 0.12)`                                      |                                                                                                 |
| `shadow-float-icon` | `0 18px 30px rgba(0, 0, 0, 0.55)`                                            | `0 14px 28px rgba(0, 0, 0, 0.16)`                                      |                                                                                                 |
| `shadow-app-icon`   | `inset 0 0 0 0.5px rgba(255, 255, 255, 0.14), 0 1px 2px rgba(0, 0, 0, 0.40)` | `inset 0 0 0 0.5px rgba(0, 0, 0, 0.10), 0 1px 2px rgba(0, 0, 0, 0.12)` |                                                                                                 |
| `shadow-icon-text`  | `0 1px 2px rgba(0, 0, 0, 0.30)`                                              | —                                                                      | Плиточная тень сохраняет читаемость на светлом фоне.                                            |
| `shadow-focus-ring` | `0 0 0 2px #131313, 0 0 0 4px #FF7356`                                       | `0 0 0 2px #FFFFFF, 0 0 0 4px #EE5533`                                 | Кольцо фокусировки клавиатуры: 2 px gap плюс 2 px coral (3,5:1 против белого в светлом режиме). |
| `shadow-segment`    | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.10), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | Выбранный сегмент лифта; нет (прозрачная тень) в темном режиме.                                 |
| `shadow-knob`       | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.22), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | Подъем на ручке тумбла; белая ручка нуждается в нем на легкой дорожке.                          |

<a id="motion"></a>

## Движение

| Имя               | ценность                         |
| ----------------- | -------------------------------- |
| `duration-fast`   | 120 мс                           |
| `duration-base`   | 200 мс                           |
| `duration-slow`   | 320 мс                           |
| `ease-standard`   | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)`     |
| `ease-exit`       | `cubic-bezier(0.4, 0, 1, 1)`     |

<a id="z-index"></a>

## Z-индекс

| Имя          | ценность |
| ------------ | -------- |
| `z-base`     | 0        |
| `z-sticky`   | 10       |
| `z-dropdown` | 100      |
| `z-overlay`  | 200      |
| `z-modal`    | 300      |
| `z-popover`  | 400      |
| `z-toast`    | 500      |
| `z-tooltip`  | 600      |

<a id="layout"></a>

## укладка

| Дизайн-токен                         | ценность                                             |
| ------------------------------------ | ---------------------------------------------------- |
| `layout.desktop.windowDefaultWidth`  | 1280px                                               |
| `layout.desktop.windowDefaultHeight` | 820px                                                |
| `layout.desktop.windowMinWidth`      | 1100px                                               |
| `layout.desktop.windowMinHeight`     | 700px                                                |
| `layout.desktop.sidebarWidth`        | 224px                                                |
| `layout.desktop.toolbarHeight`       | 52px                                                 |
| `layout.desktop.railWidth`           | 288px                                                |
| `layout.desktop.contentPaddingX`     | 28px                                                 |
| `layout.desktop.railPadding`         | 20px                                                 |
| `layout.desktop.trafficLightInset`   | x 18px, y 22px                                       |
| `layout.web.pageMaxWidth`            | 1240px                                               |
| `layout.web.pageGutter`              | 24px                                                 |
| `layout.web.navHeight`               | 64px                                                 |
| `layout.web.breakpoints`             | sm 640px, md 768px, lg 1024px, xl 1280px, 2xl 1440px |

<a id="effects"></a>

## последствия

| Дизайн-токен        | Тёмная                                                                                                                                                            | Светлая               | Использовать                                                                                                                                                                     |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `heroGlow`          | `radial-gradient(circle, rgba(205, 205, 255, 0.95) 0%, rgba(135, 135, 245, 0.78) 14%, rgba(92, 92, 220, 0.50) 32%, rgba(64, 64, 190, 0.20) 52%, transparent 70%)` | —                     | Герой фиолетового свечения.                                                                                                                                                      |
| `coverGlow`         | `radial-gradient(circle, rgba(170, 170, 255, 0.55) 0%, rgba(110, 110, 235, 0.35) 16%, rgba(80, 80, 214, 0.18) 34%, rgba(60, 60, 180, 0.06) 52%, transparent 66%)` | —                     | Мягкий большой веб-герой светится.                                                                                                                                               |
| `ring.stroke`       | `rgba(255, 255, 255, 0.13)`                                                                                                                                       | `rgba(0, 0, 0, 0.10)` |                                                                                                                                                                                  |
| `ring.dasharray`    | `2 6`                                                                                                                                                             | —                     |                                                                                                                                                                                  |
| `detailGlow`        | `radial-gradient(closest-side, {accent}73, {accent}2E 55%, transparent)`                                                                                          | —                     | Верхний правый заголовок детали; {accent} - пакетный акцентЦвет (по умолчанию #3C96F5); 73/2E - шестидесятичные альфа-значения.                                                  |
| `backdropBlur`      | `20`                                                                                                                                                              | —                     |                                                                                                                                                                                  |
| `accentGlowOpacity` | `1`                                                                                                                                                               | `0.5`                 | Непрозрачность свечений, построенных из цвета акцента пакета (детальный заголовок, пользовательский герой свечения); насыщенные акценты нуждаются в размягчении на светлом фоне. |
