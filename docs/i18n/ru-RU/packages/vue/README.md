[English](../../../../../packages/vue/README.md) · [简体中文](../../../zh-CN/packages/vue/README.md) · [繁體中文](../../../zh-Hant/packages/vue/README.md) · [日本語](../../../ja-JP/packages/vue/README.md) · [Español](../../../es-ES/packages/vue/README.md) · [Português (Brasil)](../../../pt-BR/packages/vue/README.md) · **Русский** · [Deutsch](../../../de-DE/packages/vue/README.md) · [Français](../../../fr-FR/packages/vue/README.md) · [Italiano](../../../it-IT/packages/vue/README.md)

> Оригинал написан на английском. Переводы подготовлены локально с помощью машинного перевода и требуют проверки носителями языка. Код и тексты лицензий сохранены.

<a id="opennavodesign-vue"></a>

# @opennavo/design-vue

Vue 3 Компоненты OpenNavo Дизайн: кнопки и входы, отображение данных, пустые и состояния ошибок, диалоги, меню, а
командная палитра, тосты и оболочка приложения (боковая панель, панель инструментов, верхняя навигация, боковая рельс).
UnoCSS предустановленный [`@opennavo/design-tokens`](../../../../../packages/tokens)Следуйте темным и светлым темам автоматически и отправляйте их.
собственные строки на десяти языках (en-US, zh-CN, ja-JP, es-ES, pt-BR, ru-RU, de-DE, fr-FR, it-IT, zh-Hant).

- **Только презентация.** Компоненты никогда не получают данные, не читают маршруты и не звонят на платформу API.
  Продвижение и слоты, а также ссылки через `linkAs` (`RouterLink`, `NuxtLink`) или простые якоря.
- **Корабли TypeScript и `.vue` источники**Нет, нет, нет, нет, нет, нет, нет, нет. Vite или Nuxt) их компилируют, так что SSRДерево
  Трясти и свой собственный TypeScript Применяются настройки.
- **Никакого бренда внутри.** Компоненты, которые показывают отметку приложения, проходят через `brand` Слот, с простым текстом
  `brandName` Откат. OpenNavo название и логотип не являются частью этого пакета (далее...)[TRADEMARKS.md](../../TRADEMARKS.md)).

Пер-компонент реквизит, слоты, события и примечания доступности: [docs/components.md](../../docs/components.md)Компонентная галерея
(`pnpm gallery`) показывает каждый компонент в обеих темах и во всех десяти языках.

<a id="install"></a>

## устанавливать

Пакеты еще не зарегистрированы.

**Внутри этого репозитория или pnpm Рабочее пространство, которое содержит**

```json
{ "dependencies": { "@opennavo/design-vue": "workspace:*", "@opennavo/design-tokens": "workspace:*" } }
```

**Из Гит (Git)pnpm)** - установить оба пакета из одного и того же пакета и указать зависимость токенов от Vue упаковка
(объявляется как `workspace:*`) в экземпляре Git с переопределением:

```json
{
  "dependencies": {
    "@opennavo/design-tokens": "github:opennavo/opennavo-design#path:packages/tokens",
    "@opennavo/design-vue": "github:opennavo/opennavo-design#path:packages/vue",
    "vue": "^3.5.0"
  },
  "pnpm": {
    "overrides": { "@opennavo/design-tokens": "github:opennavo/opennavo-design#path:packages/tokens" }
  }
}
```

Пин-метка или фиксация.`#v0.1.0&path:packages/vue`) для воспроизводимых установок. `vue` 3.5.

<a id="default-language"></a>

## Язык по умолчанию

`app.use(createOnUi())` использует английский язык ()`en-US`Пасс. `createOnUi({ locale })` Для того, чтобы следить за явным реактивным выбором языка. Без плагина компоненты также возвращаются к английскому. Галерея чтит действительный `?locale=` Сначала параметр, затем сохраненный выбор, а в остальном используется английский язык.

<a id="vite--vue--unocss-also-tauri"></a>

## Vite + Vue + UnoCSS также Tauri)

```ts
// main.ts — order matters: reset, tokens, base styles, (optional) system fonts, then UnoCSS
import { createApp, ref } from 'vue';
import '@unocss/reset/tailwind.css';
import '@opennavo/design-tokens/tokens.css';
import '@opennavo/design-vue/base.css';
import '@opennavo/design-vue/system-fonts.css'; // platform fonts instead of Inter; leave out to use Inter
import 'virtual:uno.css';
import { createOnUi } from '@opennavo/design-vue';
import type { Locale } from '@opennavo/design-vue';
import App from './App.vue';

const locale = ref<Locale>('en-US'); // drive it from your i18n state or settings
createApp(App).use(createOnUi({ locale })).mount('#app');
```

```ts
// uno.config.ts
import { defineConfig, presetWind3 } from 'unocss';
import { presetOpenNavo } from '@opennavo/design-tokens/uno-preset';

export default defineConfig({
  presets: [presetWind3(), presetOpenNavo()],
  content: {
    pipeline: {
      include: [
        // UnoCSS's default file types…
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // …plus the component sources when the package lives in node_modules (Git or registry installs)
        /@opennavo[\\/]design-vue[\\/]src[\\/].+\.(vue|ts)($|\?)/
      ]
    }
  }
});
```

```ts
// vite.config.ts
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [vue(), UnoCSS()],
  // Required when the package is installed in node_modules: pre-bundling would split it into two copies (the
  // pre-bundled index and the .vue files), so createOnUi's locale and registerIcons would not reach the components.
  optimizeDeps: { exclude: ['@opennavo/design-vue'] }
  // With Vite SSR also add: ssr: { noExternal: ['@opennavo/design-vue', '@opennavo/design-tokens'] }
});
```

```vue
<script setup lang="ts">
import { OnButton, OnCard } from '@opennavo/design-vue';
</script>

<template>
  <OnCard>
    <p class="m-0 text-body text-ink-secondary">Only on this device; nothing is uploaded.</p>
    <OnButton variant="primary" icon="download">Install</OnButton>
  </OnCard>
</template>
```

TypeScriptИсточники используют ViteТипы клиентов (`import.meta.env`, CSS импорта, который Vite и Nuxt проекты
уже включают в себя:`"types": ["vite/client"]`).

<a id="nuxt"></a>

## Nuxt

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@unocss/nuxt'], // reads uno.config.ts above
  css: [
    '@unocss/reset/tailwind.css',
    '@opennavo/design-tokens/tokens.css',
    '@opennavo/design-vue/base.css',
    '@opennavo/design-vue/system-fonts.css' // optional
  ],
  // Compile the TypeScript/.vue sources for the server bundle as well.
  build: { transpile: ['@opennavo/design-vue', '@opennavo/design-tokens'] },
  vite: { optimizeDeps: { exclude: ['@opennavo/design-vue'] } },
  app: {
    head: {
      // Apply a saved light/dark choice before first paint (see Theme below).
      script: [
        {
          innerHTML: `try{var t=localStorage.getItem("app:theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`
        }
      ],
      meta: [{ name: 'color-scheme', content: 'dark light' }]
    }
  }
});
```

Сценарий выше – это то, что `themeBootScript('app:theme')` Создайте его в коде, если хотите.

```ts
// plugins/opennavo-ui.ts
import { createOnUi, isLocale } from '@opennavo/design-vue';
import type { Locale } from '@opennavo/design-vue';

export default defineNuxtPlugin(nuxtApp => {
  // Map your i18n locale to one of the ten codes; anything else falls back to English.
  const locale = computed<Locale>(() => {
    const code = nuxtApp.$i18n.locale.value;
    return isLocale(code) ? code : 'en-US';
  });
  nuxtApp.vueApp.use(createOnUi({ locale }));
});
```

Пассажир `NuxtLink` для компонентов, которые создают ссылки (`OnButton`, `OnCard`, `OnTabs`, `OnPagination`, `OnBreadcrumb`,
`OnSectionHeader`, `OnSidebar`, `OnNavItem`, `OnTopNav`, `OnFeatureHero`) с `:link-as="NuxtLink"`
(`const NuxtLink = resolveComponent('NuxtLink')`Компоненты никогда не читают маршрут; проход `active`/`modelValue`.

<a id="tauri-desktop-apps"></a>

## Tauri настольные приложения

Tauri Приложения используют Vite Установка выше. Кроме того:

- Использовать `OnAppShell scroll="container"`Окно сохраняет фиксированную высоту, а основная колонна прокручивается сама по себе.
- `OnSidebar` и `OnToolbar` брать `drag-region` добавлять `data-tauri-drag-region` в область титульной панели (52 px для
  macOS Кнопки и ссылки внутри никогда не помечаются перетаскивающимися.
- импорт `system-fonts.css` Для отображения в собственных шрифтах платформы.
- Тема: магазин `system | light | dark` в ваших настройках и установите исходную тему окна из него (Tauri?
  `set_theme` / `setTheme`), так что веб-вид `prefers-color-scheme` последующий; `applyThemePreference` Также работает
  Прозрачные окна должны быть сброшены `html { background: transparent }` в своем собственном вступлении,
  с тех пор `base.css` рисует фон страницы.
- Кольца WebKit фокусируются на том, что скрипт перемещается, если пользователь просто не использовал клавиатуру; оверлеи уже учитывают
  Это`moveFocus`), поэтому диалоги, открытые самим приложением, не показывают фокус-кольца.

<a id="locale"></a>

## местность

```ts
app.use(createOnUi({ locale })); // locale: Ref<Locale>, reactive
```

Без плагина компоненты используют английский. `useUiLocale()` Возвращает местность и
`useUiMessages()` Для него струны; `LOCALES`, `isLocale(value)`, `uiMessages` и `interpolate(template, params)`
экспортируются для приложений, которым нужны те же строки. `placeholder`, `label`, `title` или `description`
Преодолейте встроенные дефолты.

<a id="theme"></a>

## Тема

Темнота - это по умолчанию; свет применяется, когда система предпочитает его, если страница не заставляет тему работать с темой. `data-theme` на
`<html>` (`"dark"` или `"light"`). `data-theme="light"` или `"dark"` Работает также на любом поддереве, например, на панели предварительного просмотра.

```ts
import { applyThemePreference, resolveTheme, themeBootScript } from '@opennavo/design-vue/theme';

applyThemePreference('light'); // 'system' | 'light' | 'dark'; system removes the attribute
localStorage.setItem('app:theme', 'light');
resolveTheme('system'); // 'light' | 'dark' as currently shown

// In the document <head>, before any bundle: applies a saved light/dark choice before first paint.
const inline = themeBootScript('app:theme');
```

`applyThemePreference` выключает переходы для одного кадра (`base.css` `[data-theme-switching]`Все цвета, каждый цвет
Изменения сразу. `THEME_PREFERENCES` и `isThemePreference` Помогите проверить сохраненные значения.

<a id="icons"></a>

## Иконы

`OnIcon` и каждый `icon` ветвь (внутренний) из розетки Lucide Подмножество: значки, используемые компонентами плюс
`sun`, `moon` и `sun-moon` (`BUNDLED_ICONS`Зарегистрируйтесь перед монтажом:

```ts
import { getIcons } from '@iconify/utils';
import { icons as lucide } from '@iconify-json/lucide'; // the whole set; or a subset you generate at build time
import { registerIcons } from '@opennavo/design-vue';

registerIcons(getIcons(lucide, ['compass', 'settings', 'trash-2'])!);
```

Имена есть Lucide Имена`settings`, `lucide:settings`или `prefix:name` Еще один зарегистрированный набор. Неизвестные имена
Отрисуйте пустую икону и предупредите в разработке. `vite.config.ts` Виртуальный модуль, который сокращает
Подмножество в момент сборки, поэтому полный набор значков никогда не достигает пучка.

<a id="components"></a>

## Компоненты

| Группа                 | Компоненты                                                                                                                                                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Меры и вклад           | `OnButton`, `OnIcon`, `OnChip`, `OnBadge`, `OnToggle`, `OnCheckbox`, `OnSegmented`, `OnTabs`, `OnSearchField`, `OnTooltip`, `OnMenu`                                                                                                                   |
| контейнеры и данные    | `OnCard`, `OnStatTile`, `OnKeyValueList`, `OnTable`, `OnPagination`, `OnProgressMeter`, `OnStackBar`, `OnHBarChart`, `OnSkeleton`, `OnCodeText`, `OnLogViewer`, `OnHighlightText`, `OnSectionHeader`, `OnPageHeader`, `OnBreadcrumb`, `OnMarkdownView` |
| Состояния              | `OnEmpty`, `OnErrorState`, `OnOffline`                                                                                                                                                                                                                 |
| Наложения              | `OnDialogShell`, `OnModal`, `OnSheet`, `OnConfirm`, `OnToast`, `OnToastRegion` (+ `createToastQueue`), `OnCommandPalette`                                                                                                                              |
| Планировка и навигация | `OnAppShell`, `OnSidebar`, `OnNavItem`, `OnToolbar`, `OnTopNav`, `OnRailPanel`, `OnRailSection`                                                                                                                                                        |
| Витрина                | `OnFeatureHero`, `OnAppIcon`                                                                                                                                                                                                                           |

Помощники: `createOnUi`, `useUiLocale`, `useUiMessages`, `createToastQueue`, `registerIcons`, `getIcon`Помощники темы
(также в `@opennavo/design-vue/theme`), помощники по фокусировке наложений (`moveFocus`, `trapTab`, `lockScroll`, , ровный
фокусировка`nextRovingIndex`), а также небольшие утилиты, используемые компонентами (`paginationRange`, `parseHighlight`,
`codeParts`/`codeWordsHtml`, `classifyLogLine`, `formatPercent`, `heroGlowGradient`, `imageSrcset`, `iconColor`,
`iconInitials`, …).

`OnMarkdownView` стили HTML Только: отобразите Markdown и дезинфицируйте его в своем приложении (например, Markdown-it с сырым шрифтом) HTML
Выключите, затем DOMPurify, или пропустите элементы через его слот.

<a id="development"></a>

## Разработка

Из корня репозитория (`pnpm install` во-первых:

```sh
pnpm --filter @opennavo/design-vue gen            # regenerate src/icons/lucide.ts from src/icons/names.ts
pnpm --filter @opennavo/design-vue check          # fail if the generated icon subset is stale
pnpm --filter @opennavo/design-vue typecheck      # vue-tsc --noEmit
pnpm --filter @opennavo/design-vue test           # vitest run (jsdom)
pnpm --filter @opennavo/design-vue gallery        # http://127.0.0.1:6106
pnpm --filter @opennavo/design-vue build:gallery  # static gallery in gallery/dist
```

Новые строки компонентов входят во все десять файлов `src/messages`; `tests/locale.test.ts` Проверка, которую имеет каждая местность
одинаковые ключи и заполнители.

<a id="license"></a>

## Лицензия

MITСвязанный Lucide Данные иконки ISC (с MIT порций из Feather): см.
[Third PARTY NOTICES.md](THIRD_PARTY_NOTICES.md)Вон тот. OpenNavo Имя и логотип не лицензируются:
[TRADEMARKS.md](../../TRADEMARKS.md).
