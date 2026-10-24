[English](../../../../../packages/vue/README.md) · [简体中文](../../../zh-CN/packages/vue/README.md) · [繁體中文](../../../zh-Hant/packages/vue/README.md) · [日本語](../../../ja-JP/packages/vue/README.md) · [Español](../../../es-ES/packages/vue/README.md) · [Português (Brasil)](../../../pt-BR/packages/vue/README.md) · [Русский](../../../ru-RU/packages/vue/README.md) · [Deutsch](../../../de-DE/packages/vue/README.md) · [Français](../../../fr-FR/packages/vue/README.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="opennavodesign-vue"></a>

# @opennavo/design-vue

Vue 3 componenti di OpenNavo Design: pulsanti e ingressi, visualizzazione dati, stati vuoti e di errore, finestre di dialogo, menu, un
tavolozza di comando, brindisi e la shell app (barba laterale, barra degli strumenti, navigazione superiore, rotaia laterale).
UnoCSS preimpostazione di [`@opennavo/design-tokens`](../../../../../packages/tokens), seguire automaticamente i temi scuri e leggeri e spedire loro
proprie stringhe in dieci lingue (en-US, zh-CN, ja-JP, es-ES, pt-BR, ru-RU, de-DE, fr-FR, it-IT, zh-Hant).

- **Solo presentazione.** I componenti non acquisiscono mai dati, leggono percorsi o chiamano le API della piattaforma.
  oggetti e slot, e collegamenti attraverso `linkAs` (`RouterLink`, `NuxtLink`) o ancoraggi semplici.
- **Navi TypeScript e `.vue` fonti**, nessun passo di costruzione: il tuo Vite (o Nuxt) compilarli, quindi SSR, albero
  scuotere e il proprio TypeScript si applicano le impostazioni.
- **Non c'e' nessun marchio dentro.** I componenti che mostrano un segno di app lo portano attraverso un `brand` slot, con un testo semplice
  `brandName` Il ritorno. OpenNavo nome e logo non fanno parte di questo pacchetto ([TRADEMARKS.md](../../TRADEMARKS.md)).

Applique, slot, eventi e note di accessibilità: [docs/components.md](../../docs/components.md). La galleria dei componenti
(`pnpm gallery`) mostra ogni componente in entrambi i temi e in tutte le dieci lingue.

<a id="install"></a>

## Installazione

I pacchetti non sono ancora in un registro.

**All'interno di questo repository o di un pnpm spazio di lavoro che lo contiene**

```json
{ "dependencies": { "@opennavo/design-vue": "workspace:*", "@opennavo/design-tokens": "workspace:*" } }
```

**Da Git (in inglese)pnpm)** — installare entrambi i pacchetti dallo stesso commit e indicare la dipendenza dei gettoni Vue pacchetto
(Dichiarato) `workspace:*`) alla copia Git con un override:

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

Pin un tag o un commit (`#v0.1.0&path:packages/vue`) per installazioni riproducibili. Dipendenza dei pari: `vue` 3.5.

<a id="default-language"></a>

## Lingua predefinita

`app.use(createOnUi())` utilizza l'inglese (inglese)`en-US`). Passaggio `createOnUi({ locale })` senza il plugin, i componenti ricadono anche in inglese. La galleria onora un valido `?locale=` parametro prima, poi una selezione salvata, e altrimenti usa l'inglese.

<a id="vite--vue--unocss-also-tauri"></a>

## Vite + Vue + UnoCSS (anche) Tauri)

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

TypeScript: l'uso delle fonti Vitetipi di client (`import.meta.env`, CSS Importazioni, che Vite e Nuxt progetti
già incluso (`"types": ["vite/client"]`).

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

La sceneggiatura della testa sopra è esattamente quello che `themeBootScript('app:theme')` restituisce; generarlo in codice se si preferisce.

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

Passaggio `NuxtLink` a componenti che rendono i collegamenti (`OnButton`, `OnCard`, `OnTabs`, `OnPagination`, `OnBreadcrumb`,
`OnSectionHeader`, `OnSidebar`, `OnNavItem`, `OnTopNav`, `OnFeatureHero`) `:link-as="NuxtLink"`
(`const NuxtLink = resolveComponent('NuxtLink')`). I componenti non leggono mai il percorso; pass `active`/`modelValue`.

<a id="tauri-desktop-apps"></a>

## Tauri applicazioni desktop

Tauri le app utilizzano Vite configurazione sopra. Inoltre:

- Uso `OnAppShell scroll="container"`: la finestra mantiene un'altezza fissa e la colonna principale scorre da sola.
- `OnSidebar` e `OnToolbar` prendere `drag-region` per aggiungere `data-tauri-drag-region` al titolo-bar area (52 px per il
  macOS Pulsanti e collegamenti all'interno non sono mai segnalati trascinabili.
- Importazioni `system-fonts.css` per rendere i propri font della piattaforma.
- Tema: negozio `system | light | dark` nelle tue impostazioni e impostare il tema finestra nativo da esso (TauriE'...
  `set_theme` / `setTheme`), quindi la vista web è `prefers-color-scheme` segue; `applyThemePreference` anche opere
  per finestra. Le finestre trasparenti popover dovrebbero resettare `html { background: transparent }` nel loro ingresso,
  da `base.css` dipinge lo sfondo della pagina.
- Gli anelli WebKit si concentrano sul fatto che uno script si sia spostato a meno che l'utente non abbia appena usato la tastiera; gli overlays già account per
  questo (`moveFocus`), così le finestre di dialogo aperte dall'app stessa non mostrano un anello di messa a fuoco.

<a id="locale"></a>

## Locale

```ts
app.use(createOnUi({ locale })); // locale: Ref<Locale>, reactive
```

Senza il plugin, i componenti utilizzano l'inglese. `useUiLocale()` restituisce il ref locale e
`useUiMessages()` le corde per esso; `LOCALES`, `isLocale(value)`, `uiMessages` e `interpolate(template, params)`
sono esportati per le applicazioni che vogliono le stesse stringhe. Props come `placeholder`, `label`, `title` o `description`
sovrascrivere le impostazioni predefinite.

<a id="theme"></a>

## Tema

Il buio è il default; la luce si applica quando il sistema lo preferisce, a meno che la pagina non costringe un tema con `data-theme` su
`<html>` (`"dark"` o `"light"`). `data-theme="light"` o `"dark"` funziona anche su qualsiasi subtreo, ad esempio un pannello di anteprima.

```ts
import { applyThemePreference, resolveTheme, themeBootScript } from '@opennavo/design-vue/theme';

applyThemePreference('light'); // 'system' | 'light' | 'dark'; system removes the attribute
localStorage.setItem('app:theme', 'light');
resolveTheme('system'); // 'light' | 'dark' as currently shown

// In the document <head>, before any bundle: applies a saved light/dark choice before first paint.
const inline = themeBootScript('app:theme');
```

`applyThemePreference` spegne transizioni per una cornice (`base.css` `[data-theme-switching]`), così ogni colore
cambia subito. `THEME_PREFERENCES` e `isThemePreference` aiutare a convalidare i valori memorizzati.

<a id="icons"></a>

## Icone

`OnIcon` e ogni `icon` rendering inline SVG da un bundle Lucide sottoinsieme: le icone che i componenti utilizzano più
`sun`, `moon` e `sun-moon` (`BUNDLED_ICONS`). Registrati prima del montaggio:

```ts
import { getIcons } from '@iconify/utils';
import { icons as lucide } from '@iconify-json/lucide'; // the whole set; or a subset you generate at build time
import { registerIcons } from '@opennavo/design-vue';

registerIcons(getIcons(lucide, ['compass', 'settings', 'trash-2'])!);
```

I nomi sono Lucide nomi (i)`settings`, `lucide:settings`) o `prefix:name` per un altro set registrato.
rendere un'icona vuota e mettere in guardia nello sviluppo. `vite.config.ts` mostra un modulo virtuale che taglia il
subset al tempo di costruzione, quindi l'insieme icona completa non raggiunge mai il bundle.

<a id="components"></a>

## Componenti

| Gruppo               | Componenti                                                                                                                                                                                                                                             |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Azioni e ingressi    | `OnButton`, `OnIcon`, `OnChip`, `OnBadge`, `OnToggle`, `OnCheckbox`, `OnSegmented`, `OnTabs`, `OnSearchField`, `OnTooltip`, `OnMenu`                                                                                                                   |
| Contenitori e dati   | `OnCard`, `OnStatTile`, `OnKeyValueList`, `OnTable`, `OnPagination`, `OnProgressMeter`, `OnStackBar`, `OnHBarChart`, `OnSkeleton`, `OnCodeText`, `OnLogViewer`, `OnHighlightText`, `OnSectionHeader`, `OnPageHeader`, `OnBreadcrumb`, `OnMarkdownView` |
| Stati                | `OnEmpty`, `OnErrorState`, `OnOffline`                                                                                                                                                                                                                 |
| Sovrapposizioni      | `OnDialogShell`, `OnModal`, `OnSheet`, `OnConfirm`, `OnToast`, `OnToastRegion` (+ `createToastQueue`), `OnCommandPalette`                                                                                                                              |
| Telaio e navigazione | `OnAppShell`, `OnSidebar`, `OnNavItem`, `OnToolbar`, `OnTopNav`, `OnRailPanel`, `OnRailSection`                                                                                                                                                        |
| Vetrina              | `OnFeatureHero`, `OnAppIcon`                                                                                                                                                                                                                           |

Aiutanti: `createOnUi`, `useUiLocale`, `useUiMessages`, `createToastQueue`, `registerIcons`, `getIcon`, aiutanti a tema
(anche a `@opennavo/design-vue/theme`), helper di messa a fuoco sovrapposizione (`moveFocus`, `trapTab`, `lockScroll`, ...), roving
focus (`nextRovingIndex`), e le piccole utilità che i componenti utilizzano (`paginationRange`, `parseHighlight`,
`codeParts`/`codeWordsHtml`, `classifyLogLine`, `formatPercent`, `heroGlowGradient`, `imageSrcset`, `iconColor`,
`iconInitials`, …).

`OnMarkdownView` stili HTML solo: rendere Markdown e sanitizzarlo nella tua app (ad esempio markdown-it con raw HTML
fuori, poi DOMPurify), o passare gli elementi attraverso la sua slot.

<a id="development"></a>

## Sviluppo

Dalla radice del repository (`pnpm install` primo):

```sh
pnpm --filter @opennavo/design-vue gen            # regenerate src/icons/lucide.ts from src/icons/names.ts
pnpm --filter @opennavo/design-vue check          # fail if the generated icon subset is stale
pnpm --filter @opennavo/design-vue typecheck      # vue-tsc --noEmit
pnpm --filter @opennavo/design-vue test           # vitest run (jsdom)
pnpm --filter @opennavo/design-vue gallery        # http://127.0.0.1:6106
pnpm --filter @opennavo/design-vue build:gallery  # static gallery in gallery/dist
```

Nuove stringhe dei componenti vanno in tutti i dieci file in `src/messages`; `tests/locale.test.ts` controlli che ogni locale ha
le stesse chiavi e segnaposto.

<a id="license"></a>

## Licenza

MIT. Il pacchetto Lucide dati icona è ISC (con MIT porzioni da Feather): vedi
[THIRD PARTY NOTICS.md](THIRD_PARTY_NOTICES.md). OpenNavo nome e logo non sono autorizzati:
[TRADEMARKS.md](../../TRADEMARKS.md).
