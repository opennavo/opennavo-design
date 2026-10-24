# @opennavo/design-vue

Vue 3 components of OpenNavo Design: buttons and inputs, data display, empty and error states, dialogs, menus, a
command palette, toasts and the app shell (sidebar, toolbar, top navigation, side rail). They are styled with the
UnoCSS preset of [`@opennavo/design-tokens`](../tokens), follow the dark and light themes automatically and ship their
own strings in ten languages (en-US, zh-CN, ja-JP, es-ES, pt-BR, ru-RU, de-DE, fr-FR, it-IT, zh-Hant).

- **Presentation only.** Components never fetch data, read routes or call platform APIs. Apps pass content in through
  props and slots, and links through `linkAs` (`RouterLink`, `NuxtLink`) or plain anchors.
- **Ships TypeScript and `.vue` sources**, no build step: your Vite (or Nuxt) build compiles them, so SSR, tree
  shaking and your own TypeScript settings apply.
- **No brand inside.** Components that show an app's mark take it through a `brand` slot, with a plain-text
  `brandName` fallback. The OpenNavo name and logo are not part of this package ([TRADEMARKS.md](../../TRADEMARKS.md)).

Per-component props, slots, events and accessibility notes: [docs/components.md](../../docs/components.md). The component gallery
(`pnpm gallery`) shows every component in both themes and all ten languages.

## Install

The packages are not on a registry yet.

**Inside this repository or a pnpm workspace that contains it**

```json
{ "dependencies": { "@opennavo/design-vue": "workspace:*", "@opennavo/design-tokens": "workspace:*" } }
```

**From Git (pnpm)** — install both packages from the same commit and point the tokens dependency of the Vue package
(declared as `workspace:*`) at the Git copy with an override:

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

Pin a tag or commit (`#v0.1.0&path:packages/vue`) for reproducible installs. Peer dependency: `vue` 3.5.

## Default language

`app.use(createOnUi())` uses English (`en-US`). Pass `createOnUi({ locale })` to follow an explicit reactive language selection. Without the plugin, components also fall back to English. The gallery honors a valid `?locale=` parameter first, then a saved selection, and otherwise uses English.

## Vite + Vue + UnoCSS (also Tauri)

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

TypeScript: the sources use Vite's client types (`import.meta.env`, CSS imports), which Vite and Nuxt projects
already include (`"types": ["vite/client"]`).

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

The head script above is exactly what `themeBootScript('app:theme')` returns; generate it in code if you prefer.

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

Pass `NuxtLink` to components that render links (`OnButton`, `OnCard`, `OnTabs`, `OnPagination`, `OnBreadcrumb`,
`OnSectionHeader`, `OnSidebar`, `OnNavItem`, `OnTopNav`, `OnFeatureHero`) with `:link-as="NuxtLink"`
(`const NuxtLink = resolveComponent('NuxtLink')`). Components never read the route; pass `active`/`modelValue`.

## Tauri desktop apps

Tauri apps use the Vite setup above. In addition:

- Use `OnAppShell scroll="container"`: the window keeps a fixed height and the main column scrolls on its own.
- `OnSidebar` and `OnToolbar` take `drag-region` to add `data-tauri-drag-region` to the title-bar area (52 px for the
  macOS traffic lights). Buttons and links inside are never marked draggable.
- Import `system-fonts.css` to render in the platform's own fonts.
- Theme: store `system | light | dark` in your settings and set the native window theme from it (Tauri's
  `set_theme` / `setTheme`), so the web view's `prefers-color-scheme` follows; `applyThemePreference` also works
  per window. Transparent popover windows should reset `html { background: transparent }` in their own entry,
  since `base.css` paints the page background.
- WebKit rings focus that a script moved unless the user just used the keyboard; the overlays already account for
  this (`moveFocus`), so dialogs opened by the app itself do not show a focus ring.

## Locale

```ts
app.use(createOnUi({ locale })); // locale: Ref<Locale>, reactive
```

Without the plugin, components use English. Inside components, `useUiLocale()` returns the locale ref and
`useUiMessages()` the strings for it; `LOCALES`, `isLocale(value)`, `uiMessages` and `interpolate(template, params)`
are exported for apps that want the same strings. Props such as `placeholder`, `label`, `title` or `description`
override the built-in defaults.

## Theme

Dark is the default; light applies when the system prefers it, unless the page forces a theme with `data-theme` on
`<html>` (`"dark"` or `"light"`). `data-theme="light"` or `"dark"` also works on any subtree, e.g. a preview panel.

```ts
import { applyThemePreference, resolveTheme, themeBootScript } from '@opennavo/design-vue/theme';

applyThemePreference('light'); // 'system' | 'light' | 'dark'; system removes the attribute
localStorage.setItem('app:theme', 'light');
resolveTheme('system'); // 'light' | 'dark' as currently shown

// In the document <head>, before any bundle: applies a saved light/dark choice before first paint.
const inline = themeBootScript('app:theme');
```

`applyThemePreference` turns transitions off for one frame (`base.css` `[data-theme-switching]`), so every color
changes at once. `THEME_PREFERENCES` and `isThemePreference` help validate stored values.

## Icons

`OnIcon` and every `icon` prop render inline SVG from a bundled Lucide subset: the icons the components use plus
`sun`, `moon` and `sun-moon` (`BUNDLED_ICONS`). Register more before mounting:

```ts
import { getIcons } from '@iconify/utils';
import { icons as lucide } from '@iconify-json/lucide'; // the whole set; or a subset you generate at build time
import { registerIcons } from '@opennavo/design-vue';

registerIcons(getIcons(lucide, ['compass', 'settings', 'trash-2'])!);
```

Names are Lucide names (`settings`, `lucide:settings`) or `prefix:name` for another registered set. Unknown names
render an empty icon and warn in development. The gallery's `vite.config.ts` shows a virtual module that cuts the
subset at build time, so the full icon set never reaches the bundle.

## Components

| Group                 | Components                                                                                                                                                                                                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Actions and inputs    | `OnButton`, `OnIcon`, `OnChip`, `OnBadge`, `OnToggle`, `OnCheckbox`, `OnSegmented`, `OnTabs`, `OnSearchField`, `OnTooltip`, `OnMenu`                                                                                                                   |
| Containers and data   | `OnCard`, `OnStatTile`, `OnKeyValueList`, `OnTable`, `OnPagination`, `OnProgressMeter`, `OnStackBar`, `OnHBarChart`, `OnSkeleton`, `OnCodeText`, `OnLogViewer`, `OnHighlightText`, `OnSectionHeader`, `OnPageHeader`, `OnBreadcrumb`, `OnMarkdownView` |
| States                | `OnEmpty`, `OnErrorState`, `OnOffline`                                                                                                                                                                                                                 |
| Overlays              | `OnDialogShell`, `OnModal`, `OnSheet`, `OnConfirm`, `OnToast`, `OnToastRegion` (+ `createToastQueue`), `OnCommandPalette`                                                                                                                              |
| Layout and navigation | `OnAppShell`, `OnSidebar`, `OnNavItem`, `OnToolbar`, `OnTopNav`, `OnRailPanel`, `OnRailSection`                                                                                                                                                        |
| Showcase              | `OnFeatureHero`, `OnAppIcon`                                                                                                                                                                                                                           |

Helpers: `createOnUi`, `useUiLocale`, `useUiMessages`, `createToastQueue`, `registerIcons`, `getIcon`, theme helpers
(also at `@opennavo/design-vue/theme`), overlay focus helpers (`moveFocus`, `trapTab`, `lockScroll`, …), roving
focus (`nextRovingIndex`), and the small utilities the components use (`paginationRange`, `parseHighlight`,
`codeParts`/`codeWordsHtml`, `classifyLogLine`, `formatPercent`, `heroGlowGradient`, `imageSrcset`, `iconColor`,
`iconInitials`, …).

`OnMarkdownView` styles HTML only: render Markdown and sanitize it in your app (for example markdown-it with raw HTML
off, then DOMPurify), or pass elements through its slot.

## Development

From the repository root (`pnpm install` first):

```sh
pnpm --filter @opennavo/design-vue gen            # regenerate src/icons/lucide.ts from src/icons/names.ts
pnpm --filter @opennavo/design-vue check          # fail if the generated icon subset is stale
pnpm --filter @opennavo/design-vue typecheck      # vue-tsc --noEmit
pnpm --filter @opennavo/design-vue test           # vitest run (jsdom)
pnpm --filter @opennavo/design-vue gallery        # http://127.0.0.1:6106
pnpm --filter @opennavo/design-vue build:gallery  # static gallery in gallery/dist
```

New component strings go into all ten files in `src/messages`; `tests/locale.test.ts` checks that every locale has
the same keys and placeholders.

## License

MIT. The bundled Lucide icon data is ISC (with MIT portions from Feather): see
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). The OpenNavo name and logo are not licensed:
[TRADEMARKS.md](../../TRADEMARKS.md).
