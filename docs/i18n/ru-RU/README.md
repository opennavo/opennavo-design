[English](../../../README.md) · [简体中文](../zh-CN/README.md) · [繁體中文](../zh-Hant/README.md) · [日本語](../ja-JP/README.md) · [Español](../es-ES/README.md) · [Português (Brasil)](../pt-BR/README.md) · **Русский** · [Deutsch](../de-DE/README.md) · [Français](../fr-FR/README.md) · [Italiano](../it-IT/README.md)

> Оригинал написан на английском. Переводы подготовлены локально с помощью машинного перевода и требуют проверки носителями языка. Код и тексты лицензий сохранены.

<a id="opennavo-design"></a>

# OpenNavo Design

Дизайн-система [OpenNavo](https://opennavo.com) — бесплатного магазина приложений Homebrew для Mac с открытым исходным кодом — и связанных с ним приложений. Общие дизайн-токены, спецификация и готовые компоненты обеспечивают единый внешний вид, тексты и поведение в светлой и тёмной темах.

<a id="language-and-release-status"></a>

## Предпросмотр

### Тёмная тема

![Тёмная тема](../../previews/shell-dark.png)

### Светлая тема

![Светлая тема](../../previews/shell-light.png)

### Компоненты

![Компоненты](../../previews/components-dark.png)

## Язык и статус выпуска

Английский язык`en-US`Галерея начинается на английском языке, если язык не был явно выбран через его URL или сохраненные настройки; язык браузера не переопределяет его. Компоненты также поддерживают упрощенный китайский, традиционный китайский, японский, испанский, бразильский португальский, русский, немецкий, французский и итальянский.

Документация, комментарии в коде, инструменты разработки и примечания к выпускам GitHub по умолчанию используют английский. Переводы следуют английскому оригиналу.

Версия 0.1.0 является ранним предварительным просмотром: API могут изменяться до 1.0, а пакеты еще не опубликованы в реестрах. [Безопасность.md](SECURITY.md).

<a id="whats-inside"></a>

## Содержимое репозитория

| Путь                                                                                    | Пакет                     | Для                                                                                                                                                                    |
| --------------------------------------------------------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`tokens/tokens.json`](../../../tokens/tokens.json)                                     | —                         | Единый источник: цвета (темный + светлый), тип, расстояние, радиусы, тени, движение, макет                                                                             |
| [`packages/tokens`](../../../packages/tokens)                                           | `@opennavo/design-tokens` | CSS переменные для обеих тем, UnoCSS предустановлено, Tailwind CSS v4-тема и v3-предустановленные, типизированные значения, DTCG Файлы для инструментов проектирования |
| [`packages/vue`](../../../packages/vue)                                                 | `@opennavo/design-vue`    | Vue 3 компонента (кнопки, меню, диалоги, таблицы, оболочка приложения ...), помощники по темам, стили базы, галерея компонентов                                        |
| [`packages/swift`](../../../packages/swift) + [`Package.swift`](../../../Package.swift) | `OpenNavoDesign`          | SwiftUI токены: динамические цвета, интервал, тип, движение                                                                                                            |
| [`packages/flutter`](../../../packages/flutter)                                         | `opennavo_design`         | Flutter токены как `ThemeExtension`s и a `ThemeData` строитель                                                                                                         |
| [`docs`](docs/README.md)                                                                | —                         | Спецификация: принципы, цвет, тематика, компоненты, шаблоны, контент, доступность                                                                                      |

Все под этим `packages/*/` В этом случае generated получается из `tokens/tokens.json` через `pnpm gen`CI проваливается, если
Сгенерированный файл редактируется вручную или устарел.

<a id="quick-start"></a>

## Быстрый старт

Пакеты еще не зарегистрированы; напрямую зависит от этого хранилища (см.pnpm git подкаталогические зависимости,
SwiftPMили паб `git` Зависимость или копия `packages/tokens/dist` в вашем приложении.

<a id="vue-3--unocss-vite-tauri"></a>

### Vue 3 + UnoCSS (Vite, Tauri)

```ts
// main.ts — order matters: reset, tokens, base styles, system fonts, then UnoCSS
import '@unocss/reset/tailwind.css';
import '@opennavo/design-tokens/tokens.css';
import '@opennavo/design-vue/base.css';
import '@opennavo/design-vue/system-fonts.css';
import 'virtual:uno.css';
import { createOnUi } from '@opennavo/design-vue';

app.use(createOnUi({ locale })); // a ref with one of the ten locales
```

```ts
// uno.config.ts
import { defineConfig, presetWind3 } from 'unocss';
import { presetOpenNavo } from '@opennavo/design-tokens/uno-preset';

export default defineConfig({ presets: [presetWind3(), presetOpenNavo()] });
```

```vue
<OnButton variant="primary" icon="download">Install</OnButton>
<OnCard><p class="text-body text-ink-secondary">Only on this Mac; nothing is uploaded.</p></OnCard>
```

Видишь? [`packages/vue/README.md`](packages/vue/README.md) для NuxtСканирование контента и список компонентов.

<a id="react--tailwind-css-v4"></a>

### React + Tailwind CSS v4

```css
@import 'tailwindcss';
@import '@opennavo/design-tokens/tailwind.css';
```

```tsx
<button className="h-[34px] rounded-default bg-button-primary-bg px-4 text-[13px] font-semibold text-button-primary-text">
  Install
</button>
```

Полный пример живет в [`examples/react-tailwind`](../../../examples/react-tailwind) (тематический переключатель включен).

<a id="swiftui"></a>

### SwiftUI

```swift
.package(url: "https://github.com/opennavo/opennavo-design.git", branch: "main")

Text("Installed").onTextStyle(OnTypography.bodySm).foregroundStyle(OnColor.statusSuccess)
```

<a id="flutter"></a>

### Flutter

```yaml
opennavo_design:
  git: { url: https://github.com/opennavo/opennavo-design.git, path: packages/flutter }
```

```dart
MaterialApp(theme: onThemeData(Brightness.light), darkTheme: onThemeData(Brightness.dark));
```

<a id="dark-light-and-system"></a>

## Тёмная, светлая и системная темы

Темнота - это по умолчанию; свет следует за операционной системой, если приложение не навязывает тему.
`data-theme` атрибут на `<html>` (`applyThemePreference()`, плюс крошечный сценарий для головы, чтобы сохраненный выбор никогда не мигал;
в Tauri Приложения нативный внешний вид устанавливается один раз, и каждое окно и веб-просмотр следует; SwiftUI и Flutter решать
Цвета на вид. Подробности: [docs/theming.md](docs/theming.md).

<a id="the-specification"></a>

## Спецификация дизайна

Начнем с [Docs/README.md](docs/README.md)Короткая версия принципов: сначала содержание, скажите, что будет
локальный, стабильный под указателем, уважающий платформу, тихий по умолчанию, одна система для каждого приложения,
Доступный по конструкции, подходит каждому языку.

<a id="development"></a>

## Разработка

Требования: Node 24, pnpm 10; Свифт 5.9+ (Xcodeи Flutter 3.24+ для нативных пакетов.

```sh
pnpm install
pnpm gen          # render every generated file from tokens/tokens.json (and the icon subset)
pnpm check        # fail if any generated file is stale
pnpm test         # token contrast and output tests, Vue component tests
pnpm typecheck
pnpm gallery      # component gallery at http://127.0.0.1:6106 with a theme and language switch
swift test        # SwiftUI package
(cd packages/flutter && flutter test)
```

Меняем токены в `tokens/tokens.json` Только тогда беги `pnpm gen` и записать с его помощью сгенерированные файлы.
[CONTRIBUTING.md](CONTRIBUTING.md).

<a id="license"></a>

## Лицензия

Кодекс и документация лицензируются в соответствии с [MIT Лицензия](../../../LICENSE)Вон тот. OpenNavo имя и логотип не лицензируются;
смотреть [TRADEMARKS.md](TRADEMARKS.md)Связанный материал третьей стороны сохраняет свою собственную лицензию: Lucide Подмножество иконок ISC
([Обсуждение:Third PARTY NOTICES.md](packages/vue/THIRD_PARTY_NOTICES.md)).

Источники и отдельные MIT Разрешение: [ПРОВЕНАНС.МД](PROVENANCE.md).
