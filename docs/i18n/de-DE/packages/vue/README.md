[English](../../../../../packages/vue/README.md) · [简体中文](../../../zh-CN/packages/vue/README.md) · [繁體中文](../../../zh-Hant/packages/vue/README.md) · [日本語](../../../ja-JP/packages/vue/README.md) · [Español](../../../es-ES/packages/vue/README.md) · [Português (Brasil)](../../../pt-BR/packages/vue/README.md) · [Русский](../../../ru-RU/packages/vue/README.md) · **Deutsch** · [Français](../../../fr-FR/packages/vue/README.md) · [Italiano](../../../it-IT/packages/vue/README.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="opennavodesign-vue"></a>

# @opennavo/design-vue

Vue 3 Komponenten von OpenNavo Design: Tasten und Eingaben, Datenanzeige, Leer- und Fehlerzustände, Dialoge, Menüs, a
Befehlspalette, Toasts und die App-Shell (Sidebar, Toolbar, Top Navigation, Side Rail).
UnoCSS voreingestellt von [`@opennavo/design-tokens`](../../../../../packages/tokens), folgen Sie den dunklen und hellen Themen automatisch und versenden Sie ihre
eigene Strings in zehn Sprachen (en-US, zh-CN, ja-JP, es-ES, pt-BR, ru-RU, de-DE, fr-FR, it-IT, zh-Hant).

- **Nur Aufmachung.** Komponenten holen niemals Daten ab, lesen Routen oder rufen Plattform-APIs an. Apps geben Inhalte durch
  Requisiten und Slots und Verbindungen durch `linkAs` (`RouterLink`, `NuxtLink`) oder schlichten Ankern.
- **Schiffe TypeScript und `.vue` Quellen**, kein Build Step: Ihre Vite (oder) NuxtUnd er stellt sie zusammen, so SSR, Baum
  Schütteln und dein eigenes TypeScript Es gelten Einstellungen.
- **Keine Marke drinnen.** Komponenten, die die markierung einer app anzeigen, führen sie durch eine. `brand` Slot, mit Klartext
  `brandName` Fallback. Der OpenNavo Name und Logo sind nicht Teil dieses Pakets ()[TRADEMARKS.md](../../TRADEMARKS.md)).

Props, Slots, Events und Barrierefreiheitsanmerkungen pro Komponente: [docs/components.md](../../docs/components.md)Die Komponentengalerie
(`pnpm gallery`) zeigt jede Komponente in beiden Themen und allen zehn Sprachen.

<a id="install"></a>

## Installieren

Die Pakete befinden sich noch nicht in einer Registrierung.

**Innerhalb dieses Repositorys oder pnpm Arbeitsbereich, der es enthält**

```json
{ "dependencies": { "@opennavo/design-vue": "workspace:*", "@opennavo/design-tokens": "workspace:*" } }
```

**von Git ()pnpm)** - Installieren Sie beide Pakete aus dem gleichen Commit und zeigen Sie die Token-Abhängigkeit des Vue Packung
(Angemeldet als) `workspace:*`) bei der Git-Kopie mit einem Override:

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

Pin ein Tag oder Commit ()`#v0.1.0&path:packages/vue`) für reproduzierbare Anlagen. `vue` 3.5.

<a id="default-language"></a>

## Standardsprache

`app.use(createOnUi())` verwendet Englisch ()`en-US`. Pass `createOnUi({ locale })` Eine explizite reaktive Sprachauswahl zu verfolgen. Ohne das Plugin fallen auch Komponenten auf Englisch zurück. `?locale=` Parameter zuerst, dann eine gespeicherte Auswahl und verwendet ansonsten Englisch.

<a id="vite--vue--unocss-also-tauri"></a>

## Vite + Vue + UnoCSS (auch) Tauri)

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

TypeScript: Die Quellen verwenden Vite's Kundentypen`import.meta.env`, CSS Einfuhren, die Vite und Nuxt Projekte
bereits enthalten ()`"types": ["vite/client"]`).

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

Das Head-Script oben ist genau das, was `themeBootScript('app:theme')` Retouren; generieren Sie es in Code, wenn Sie es vorziehen.

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

Passierpass `NuxtLink` zu Komponenten, die Links darstellen`OnButton`, `OnCard`, `OnTabs`, `OnPagination`, `OnBreadcrumb`,
`OnSectionHeader`, `OnSidebar`, `OnNavItem`, `OnTopNav`, `OnFeatureHero`) `:link-as="NuxtLink"`
(`const NuxtLink = resolveComponent('NuxtLink')`Komponenten lesen nie die Route; Pass `active`/`modelValue`.

<a id="tauri-desktop-apps"></a>

## Tauri Desktop Apps

Tauri Apps nutzen die Vite Aufbau oben, zusätzlich:

- Verwendung `OnAppShell scroll="container"`: Das Fenster behält eine feste Höhe und die Hauptspalte scrollt von selbst.
- `OnSidebar` und `OnToolbar` nehmen `drag-region` zuzusetzen `data-tauri-drag-region` zum Titelleistenbereich (52 px für den
  macOS Ampeln. Knöpfe und Links im Inneren sind nie als schleppbar gekennzeichnet.
- Einfuhr `system-fonts.css` um in den eigenen Fonts der Plattform zu rendern.
- Thema: Lager `system | light | dark` in Ihren Einstellungen und legen Sie das native Fensterthema daraus fest ()Tauri's
  `set_theme` / `setTheme`), so dass die Web View `prefers-color-scheme` folgt: `applyThemePreference` auch Arbeiten
  Transparente Popover-Fenster sollten zurückgesetzt werden `html { background: transparent }` bei ihrem eigenen Eintritt,
  seit `base.css` Malt den Seitenhintergrund.
- WebKit-Ringe konzentrieren sich darauf, dass ein Skript verschoben wurde, es sei denn, der Benutzer hat gerade die Tastatur verwendet; die Overlays berücksichtigen bereits
  Dies ()`moveFocus`), so dass Dialoge, die von der App selbst geöffnet werden, keinen Fokusring anzeigen.

<a id="locale"></a>

## Ortschaft

```ts
app.use(createOnUi({ locale })); // locale: Ref<Locale>, reactive
```

Ohne das Plugin verwenden Komponenten Englisch. `useUiLocale()` gibt die locale ref zurück und
`useUiMessages()` die Strings dafür; `LOCALES`, `isLocale(value)`, `uiMessages` und `interpolate(template, params)`
werden für Apps exportiert, die die gleichen Strings wollen. `placeholder`, `label`, `title` oder `description`
Überschreiben Sie die eingebauten Defaults.

<a id="theme"></a>

## Design

Dark ist die Standardeinstellung; light gilt, wenn das System es bevorzugt, es sei denn, die Seite erzwingt ein Theme mit `data-theme` am
`<html>` (`"dark"` oder `"light"`). `data-theme="light"` oder `"dark"` funktioniert auch auf jedem Unterbaum, z. B. einem Vorschaufeld.

```ts
import { applyThemePreference, resolveTheme, themeBootScript } from '@opennavo/design-vue/theme';

applyThemePreference('light'); // 'system' | 'light' | 'dark'; system removes the attribute
localStorage.setItem('app:theme', 'light');
resolveTheme('system'); // 'light' | 'dark' as currently shown

// In the document <head>, before any bundle: applies a saved light/dark choice before first paint.
const inline = themeBootScript('app:theme');
```

`applyThemePreference` schaltet die Übergänge für einen Frame aus ()`base.css` `[data-theme-switching]`), also jede Farbe
Ändert sich sofort. `THEME_PREFERENCES` und `isThemePreference` helfen, gespeicherte Werte zu validieren.

<a id="icons"></a>

## Icons

`OnIcon` und alle `icon` Prop Render Inline SVG von einem gebündelten Lucide Subset: die Icons, die die Komponenten verwenden plus
`sun`, `moon` und `sun-moon` (`BUNDLED_ICONS`Mehr registrieren vor der Montage:

```ts
import { getIcons } from '@iconify/utils';
import { icons as lucide } from '@iconify-json/lucide'; // the whole set; or a subset you generate at build time
import { registerIcons } from '@opennavo/design-vue';

registerIcons(getIcons(lucide, ['compass', 'settings', 'trash-2'])!);
```

Namen sind Lucide Namen`settings`, `lucide:settings`) oder `prefix:name` für eine andere registrierte Gruppe. Unbekannte Namen
ein leeres Icon und warnen in der Entwicklung. `vite.config.ts` zeigt ein virtuelles Modul, das die
Teilmenge bei Build-Zeit, so dass das vollständige Icon-Set niemals das Bundle erreicht.

<a id="components"></a>

## Komponenten

| Gruppe                | Komponenten                                                                                                                                                                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Aktionen und Inputs   | `OnButton`, `OnIcon`, `OnChip`, `OnBadge`, `OnToggle`, `OnCheckbox`, `OnSegmented`, `OnTabs`, `OnSearchField`, `OnTooltip`, `OnMenu`                                                                                                                   |
| Container und Daten   | `OnCard`, `OnStatTile`, `OnKeyValueList`, `OnTable`, `OnPagination`, `OnProgressMeter`, `OnStackBar`, `OnHBarChart`, `OnSkeleton`, `OnCodeText`, `OnLogViewer`, `OnHighlightText`, `OnSectionHeader`, `OnPageHeader`, `OnBreadcrumb`, `OnMarkdownView` |
| Zustände              | `OnEmpty`, `OnErrorState`, `OnOffline`                                                                                                                                                                                                                 |
| Überlagerungen        | `OnDialogShell`, `OnModal`, `OnSheet`, `OnConfirm`, `OnToast`, `OnToastRegion` (+ `createToastQueue`), `OnCommandPalette`                                                                                                                              |
| Layout und Navigation | `OnAppShell`, `OnSidebar`, `OnNavItem`, `OnToolbar`, `OnTopNav`, `OnRailPanel`, `OnRailSection`                                                                                                                                                        |
| Schaufenster          | `OnFeatureHero`, `OnAppIcon`                                                                                                                                                                                                                           |

Helfer: `createOnUi`, `useUiLocale`, `useUiMessages`, `createToastQueue`, `registerIcons`, `getIcon`, Themenhelfer
(auch bei) `@opennavo/design-vue/theme`), Overlay Fokus Helfer (`moveFocus`, `trapTab`, `lockScroll`, ..., Roving
Fokussierung`nextRovingIndex`), und die kleinen Dienstprogramme, die die Komponenten verwenden (`paginationRange`, `parseHighlight`,
`codeParts`/`codeWordsHtml`, `classifyLogLine`, `formatPercent`, `heroGlowGradient`, `imageSrcset`, `iconColor`,
`iconInitials`, …).

`OnMarkdownView` Stile HTML Nur: Markdown rendern und in Ihrer App desinfizieren (z.B. Markdown-it mit raw) HTML
Ausschalten, dann DOMPurify) oder Elemente durch seinen Slot führen.

<a id="development"></a>

## Entwicklung

Aus der Repository-Root ()`pnpm install` zuerst:

```sh
pnpm --filter @opennavo/design-vue gen            # regenerate src/icons/lucide.ts from src/icons/names.ts
pnpm --filter @opennavo/design-vue check          # fail if the generated icon subset is stale
pnpm --filter @opennavo/design-vue typecheck      # vue-tsc --noEmit
pnpm --filter @opennavo/design-vue test           # vitest run (jsdom)
pnpm --filter @opennavo/design-vue gallery        # http://127.0.0.1:6106
pnpm --filter @opennavo/design-vue build:gallery  # static gallery in gallery/dist
```

Neue Komponenten-Strings gehen in alle zehn Dateien in `src/messages`; `tests/locale.test.ts` prüft, ob jeder Locale
die gleichen Schlüssel und Platzhalter.

<a id="license"></a>

## Lizenz

MIT. Die gebündelten Lucide Icon-Daten sind ISC (mit) MIT Portionen aus Feather: siehe
[THIRD PARTY NOTICES.md](THIRD_PARTY_NOTICES.md). OpenNavo Name und Logo sind nicht lizenziert:
[TRADEMARKS.md](../../TRADEMARKS.md).
