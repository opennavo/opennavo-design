[English](../../../adoption.md) · [简体中文](../../zh-CN/docs/adoption.md) · [繁體中文](../../zh-Hant/docs/adoption.md) · [日本語](../../ja-JP/docs/adoption.md) · [Español](../../es-ES/docs/adoption.md) · [Português (Brasil)](../../pt-BR/docs/adoption.md) · **Русский** · [Deutsch](../../de-DE/docs/adoption.md) · [Français](../../fr-FR/docs/adoption.md) · [Italiano](../../it-IT/docs/adoption.md)

> Оригинал написан на английском. Переводы подготовлены локально с помощью машинного перевода и требуют проверки носителями языка. Код и тексты лицензий сохранены.

<a id="adopting-the-system-in-an-app"></a>

# Утверждение системы в приложении

Как начинается новое приложение OpenNavo Дизайн и как копировалось приложение OpenNavoУпаковки раньше переходят на него.

<a id="a-new-tauri--vue-app"></a>

## Новый Tauri + Vue приложение

1. **Зависимости** (пока пакеты не будут опубликованы, используйте Git-подкаталоги или ссылку на рабочее пространство):

   ```json
   {
     "dependencies": {
       "@opennavo/design-tokens": "github:opennavo/opennavo-design#path:packages/tokens",
       "@opennavo/design-vue": "github:opennavo/opennavo-design#path:packages/vue"
     }
   }
   ```

2. **Стили и плагин** в `main.ts`В этом порядке:

   ```ts
   import '@unocss/reset/tailwind.css';
   import '@opennavo/design-tokens/tokens.css';
   import '@opennavo/design-vue/base.css';
   import '@opennavo/design-vue/system-fonts.css';
   import 'virtual:uno.css';
   import { createOnUi } from '@opennavo/design-vue';

   app.use(createOnUi({ locale })); // a ref holding one of the ten locales
   ```

3. **UnoCSS** с помощью предустановленного сканирования пакета компонентов, чтобы генерировать его утилиты:

   ```ts
   import { defineConfig, presetWind3 } from 'unocss';
   import { presetOpenNavo } from '@opennavo/design-tokens/uno-preset';

   export default defineConfig({
     presets: [presetWind3(), presetOpenNavo()],
     content: {
       pipeline: { include: [/\.(vue|ts)($|\?)/, /@opennavo\/design-vue\/src\/.*\.(vue|ts)$/] },
       filesystem: ['node_modules/@opennavo/design-vue/src/**/*.{vue,ts}']
     }
   });
   ```

   в `vite.config.ts` добавлять `optimizeDeps: { exclude: ['@opennavo/design-vue'] }`Источники посылок, и
   предварительное объединение сделало бы вторую копию его локальных и иконочных реестров, так что `createOnUi` и `registerIcons` был бы
   не доходят до компонентов.

4. **Настройка внешнего вида**Добавить `appearance: system | light | dark` в настройках приложения, применять его с
   `app.set_theme()` в Rust перед появлением окон, синхронизируйте основной фон окна и зеркально отобразите его в главном окне
   с `applyThemePreference()` ([Название: Theming macOS рабочий стол](theming.md#macos-desktop-tauri)Предложите выбор в
   Настройки › Общие как сегментированное управление: Система / Свет / Тьма.
5. **Брендовый слой**Напишите приложение `brand.json` С его акцентом ()[Бренд](brand.md)генерировать вместе с
   `--overrides brand.json --out <app>/design`и импортировать генерируемые `tokens.css` Вместо пакета один.
6. **Макет приложения**: `OnAppShell` с `OnSidebar` (отметка приложения в `brand` слот, `OnToolbar`, а также анатомия страницы
   в [Узоры](patterns.md#page-anatomy).
7. **Языки**Отправьте все десять локаций для собственных строк приложения; компоненты приносят свои.

Веб-приложение ()Nuxt) Добавить `@unocss/nuxt`То же самое CSS по порядку `css: [...]`, и сценарий головного ботинка
([Theming › Интернет](theming.md#web-nuxt-vite)А. React Приложение использует `tailwind.css` и `base.css` из пакета Tokens
([Платформы › React](platforms.md#react--tailwind-css)).

<a id="moving-an-app-that-copied-opennavos-packages"></a>

## Перемещение приложения, которое скопировало OpenNavoпакеты

Для приложения, которое скопировало `packages/tokens` и `packages/ui`В этом примере используется вымышленный `example-app`,
с `@example-app/tokens`, `--ex-` переменных и `Ex*` Компоненты. Классы полезности одинаковы.
(`bg-surface-card`, `text-ink-secondary` ...), поэтому большая часть этого шага - импорт и названия:

| Прежде чем (копия)                                      | После (система)                                                                                                  |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `@example-app/tokens/tokens.css`                        | `@opennavo/design-tokens/tokens.css` (или созданная копия бренда приложения)                                     |
| `@example-app/tokens/uno-preset` → `presetExampleApp()` | `@opennavo/design-tokens/uno-preset` → `presetOpenNavo()`                                                        |
| `@example-app/ui` → `ExButton`, `createExUi()`          | `@opennavo/design-vue` → `OnButton`, `createOnUi()`                                                              |
| `var(--ex-…)` В стиле приложений                        | `var(--on-…)`                                                                                                    |
| `ExLogo` внутри боковой панели                          | Собственный компонент логотипа приложения в `OnSidebar`? `brand` игровой автомат                                 |
| Значения локальных токенов, которые отличаются          | а `brand.json` переопределить, если они являются токенами бренда; в противном случае принять системную стоимость |

Шаги:

1. Перечислите различия токенов приложения (`diff` его `tokens.json` против `tokens/tokens.json`Брендовые токены входят в
   `brand.json`Любое другое различие - это либо ошибка, которую нужно удалить, либо предложение для системы.
2. Заменить импорт и префиксы (кодмод или поиск-и-заменить): `Ex` → `On`, `--ex-` → `--on-`Названия пакетов.
3. Переместите компоненты, специфичные для приложения (те, которые знают данные приложения), в приложение; сохраните общие компоненты из системы.
4. Запустите приложение в обеих темах и сравните с галереей; запустите контрастные тесты против объединенных токенов.
5. Удалить скопированный `packages/tokens` и `packages/ui`.

Приложение не может расщеплять нейтральные точки, интервалы, тип или компоненты. Если ему нужно что-то, чего не хватает системе, добавьте его к
Сначала система ([CONTRIBUTING.md](../CONTRIBUTING.md)).

<a id="checklist"></a>

## Контрольный список

- [ ] Токены из `@opennavo/design-tokens` (или копия бренда, созданная из него); без жестко закодированных цветов.
- [ Настройка внешнего вида с системой / Свет / Тьма; без вспышки на старте; каждое окно следует.
- [ Компоненты из `@opennavo/design-vue`; знак приложения через `brand` Слоты.
- [ ] Десять языков интерфейса.
- [ Обе темы проверены; контрастные тесты, зеленые для бренда, переопределяются.
