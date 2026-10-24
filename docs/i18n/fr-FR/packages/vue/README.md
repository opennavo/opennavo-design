[English](../../../../../packages/vue/README.md) · [简体中文](../../../zh-CN/packages/vue/README.md) · [繁體中文](../../../zh-Hant/packages/vue/README.md) · [日本語](../../../ja-JP/packages/vue/README.md) · [Español](../../../es-ES/packages/vue/README.md) · [Português (Brasil)](../../../pt-BR/packages/vue/README.md) · [Русский](../../../ru-RU/packages/vue/README.md) · [Deutsch](../../../de-DE/packages/vue/README.md) · **Français** · [Italiano](../../../it-IT/packages/vue/README.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="opennavodesign-vue"></a>

# @opennavo/design-vue

Vue 3 composants de OpenNavo Conception: boutons et entrées, affichage des données, états vides et d'erreur, dialogues, menus, un
palette de commandes, toasts et la coque de l'application (la barre latérale, barre d'outils, la navigation en haut, rail latéral).
UnoCSS préréglage de [`@opennavo/design-tokens`](../../../../../packages/tokens), suivre les thèmes sombres et légers automatiquement et expédier leurs
propres cordes en dix langues (en-US, zh-CN, ja-JP, es-ES, pt-BR, ru-RU, de-DE, fr-FR, it-IT, zh-Hant).

- **Présentation seulement.** Les composants ne récupèrent jamais les données, ne lisent pas les routes ou n'appellent pas les API de la plate-forme.
  accessoires et fentes, et liens à travers `linkAs` (`RouterLink`, `NuxtLink`) ou des ancres simples.
- **Navires TypeScript et `.vue` sources**, pas d'étape de construction: votre Vite (ou Nuxt) build les compile donc SSR, arbre
  Vous tremblez et vous tremblez TypeScript les paramètres s'appliquent.
- **Pas de marque à l'intérieur.** Les composants qui montrent la marque d'une application le prennent à travers un `brand` fente, avec un texte clair
  `brandName` Les OpenNavo nom et logo ne font pas partie de ce paquet ([MARQUES MARQUES](../../TRADEMARKS.md)).

Accessoires, machines à sous, événements et notes d'accessibilité par composant : [docs/composants.md](../../docs/components.md). La galerie des composants
(`pnpm gallery`) montre chaque composante dans les deux thèmes et les dix langues.

<a id="install"></a>

## Installer

Les paquets ne sont pas encore sur un registre.

**Dans ce dépôt ou dans un pnpm espace de travail qui le contient**

```json
{ "dependencies": { "@opennavo/design-vue": "workspace:*", "@opennavo/design-tokens": "workspace:*" } }
```

**De Git (pnpm)** — installer les deux paquets à partir du même commit et pointer la dépendance des jetons Vue colis
(déclaré comme `workspace:*`) à la copie Git avec un rebord:

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

Pinner une balise ou un commit (`#v0.1.0&path:packages/vue`) pour les installations reproductibles. `vue` 3.5.

<a id="default-language"></a>

## Langue par défaut

`app.use(createOnUi())` utilise l'anglais (`en-US`). Passer `createOnUi({ locale })` pour suivre une sélection explicite de langues réactives. Sans le plugin, les composants reviennent aussi à l'anglais. La galerie honore un valide `?locale=` d'abord, puis une sélection sauvegardée, et autrement utilise l'anglais.

<a id="vite--vue--unocss-also-tauri"></a>

## Vite + Vue + UnoCSS (également Tauri)

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

TypeScript: l'utilisation des sources Viteles types de clients (`import.meta.env`, CSS les importations), qui Vite et Nuxt projets
déjà inclus (`"types": ["vite/client"]`).

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

Le script en tête ci-dessus est exactement ce que `themeBootScript('app:theme')` retourne; le générer en code si vous préférez.

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

Passons `NuxtLink` vers des composants qui rendent les liens (`OnButton`, `OnCard`, `OnTabs`, `OnPagination`, `OnBreadcrumb`,
`OnSectionHeader`, `OnSidebar`, `OnNavItem`, `OnTopNav`, `OnFeatureHero`) avec `:link-as="NuxtLink"`
(`const NuxtLink = resolveComponent('NuxtLink')`). Les composants ne lisent jamais l'itinéraire; passez `active`/`modelValue`.

<a id="tauri-desktop-apps"></a>

## Tauri applications de bureau

Tauri les applications utilisent les Vite configuration ci-dessus. En outre:

- Utilisation `OnAppShell scroll="container"`: la fenêtre garde une hauteur fixe et la colonne principale défile seule.
- `OnSidebar` et `OnToolbar` prendre `drag-region` à ajouter `data-tauri-drag-region` à la zone de la barre de titre (52 px pour la
  macOS les feux de circulation). Les boutons et les liaisons à l'intérieur ne sont jamais marqués draggable.
- Importation `system-fonts.css` à rendre dans les polices de la plate-forme.
- Thème: magasin `system | light | dark` dans vos paramètres et définissez le thème de la fenêtre native à partir de celui-ci (Tauri's
  `set_theme` / `setTheme`), donc la vue sur le web `prefers-color-scheme` ci-après; `applyThemePreference` fonctionne aussi
  par fenêtre. Les fenêtres popover transparentes devraient être réinitialisées `html { background: transparent }` dans leur propre entrée,
  depuis `base.css` peint le fond de la page.
- WebKit sonnes focus qu'un script déplacé à moins que l'utilisateur vient d'utiliser le clavier; les superpositions déjà compte pour
  qui (`moveFocus`), donc les dialogues ouverts par l'application elle-même ne montrent pas un anneau de focus.

<a id="locale"></a>

## Locale

```ts
app.use(createOnUi({ locale })); // locale: Ref<Locale>, reactive
```

Sans le plugin, les composants utilisent l'anglais. `useUiLocale()` retourne la locale ref et
`useUiMessages()` les cordes pour elle; `LOCALES`, `isLocale(value)`, `uiMessages` et `interpolate(template, params)`
sont exportés pour les applications qui veulent les mêmes chaînes. `placeholder`, `label`, `title` ou `description`
remplacer les valeurs par défaut intégrées.

<a id="theme"></a>

## Thème

Dark est la valeur par défaut; la lumière s'applique lorsque le système le préfère, à moins que la page ne force un thème avec `data-theme` le
`<html>` (`"dark"` ou `"light"`). `data-theme="light"` ou `"dark"` fonctionne également sur n'importe quel sous-arbre, par exemple un panneau de prévisualisation.

```ts
import { applyThemePreference, resolveTheme, themeBootScript } from '@opennavo/design-vue/theme';

applyThemePreference('light'); // 'system' | 'light' | 'dark'; system removes the attribute
localStorage.setItem('app:theme', 'light');
resolveTheme('system'); // 'light' | 'dark' as currently shown

// In the document <head>, before any bundle: applies a saved light/dark choice before first paint.
const inline = themeBootScript('app:theme');
```

`applyThemePreference` éteindre les transitions pour un seul cadre (`base.css` `[data-theme-switching]`), donc toutes les couleurs
des changements à la fois. `THEME_PREFERENCES` et `isThemePreference` aide à valider les valeurs stockées.

<a id="icons"></a>

## Icônes

`OnIcon` et chaque `icon` prop render inline SVG à partir d'un paqueté Lucide sous-ensemble : les icônes utilisent les composants plus
`sun`, `moon` et `sun-moon` (`BUNDLED_ICONS`). Inscrivez-vous plus avant de monter:

```ts
import { getIcons } from '@iconify/utils';
import { icons as lucide } from '@iconify-json/lucide'; // the whole set; or a subset you generate at build time
import { registerIcons } from '@opennavo/design-vue';

registerIcons(getIcons(lucide, ['compass', 'settings', 'trash-2'])!);
```

Les noms sont Lucide noms (`settings`, `lucide:settings`) ou `prefix:name` pour un autre ensemble enregistré.
rendre une icône vide et mettre en garde dans le développement. `vite.config.ts` montre un module virtuel qui coupe le
sous-ensemble au moment de la construction, de sorte que le jeu d'icônes complet n'atteint jamais le paquet.

<a id="components"></a>

## Composantes

| Groupe                     | Composantes                                                                                                                                                                                                                                            |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Actions et apports         | `OnButton`, `OnIcon`, `OnChip`, `OnBadge`, `OnToggle`, `OnCheckbox`, `OnSegmented`, `OnTabs`, `OnSearchField`, `OnTooltip`, `OnMenu`                                                                                                                   |
| Conteneurs et données      | `OnCard`, `OnStatTile`, `OnKeyValueList`, `OnTable`, `OnPagination`, `OnProgressMeter`, `OnStackBar`, `OnHBarChart`, `OnSkeleton`, `OnCodeText`, `OnLogViewer`, `OnHighlightText`, `OnSectionHeader`, `OnPageHeader`, `OnBreadcrumb`, `OnMarkdownView` |
| États                      | `OnEmpty`, `OnErrorState`, `OnOffline`                                                                                                                                                                                                                 |
| Superpositions             | `OnDialogShell`, `OnModal`, `OnSheet`, `OnConfirm`, `OnToast`, `OnToastRegion` (+ `createToastQueue`), `OnCommandPalette`                                                                                                                              |
| Mise en page et navigation | `OnAppShell`, `OnSidebar`, `OnNavItem`, `OnToolbar`, `OnTopNav`, `OnRailPanel`, `OnRailSection`                                                                                                                                                        |
| Afficher                   | `OnFeatureHero`, `OnAppIcon`                                                                                                                                                                                                                           |

Aides : `createOnUi`, `useUiLocale`, `useUiMessages`, `createToastQueue`, `registerIcons`, `getIcon`, aides thématiques
(également à `@opennavo/design-vue/theme`), les aides à la mise au point de recouvrement (`moveFocus`, `trapTab`, `lockScroll`, ...), en mouvement
focalisation (`nextRovingIndex`) et les petits utilitaires les composants utilisés (`paginationRange`, `parseHighlight`,
`codeParts`/`codeWordsHtml`, `classifyLogLine`, `formatPercent`, `heroGlowGradient`, `imageSrcset`, `iconColor`,
`iconInitials`, …).

`OnMarkdownView` styles HTML Uniquement: rendre Markdown et le désinfecter dans votre application (par exemple balisdown-it avec brut HTML
ou passer des éléments dans sa fente.

<a id="development"></a>

## Développement

De la racine du dépôt (`pnpm install` Premièrement:

```sh
pnpm --filter @opennavo/design-vue gen            # regenerate src/icons/lucide.ts from src/icons/names.ts
pnpm --filter @opennavo/design-vue check          # fail if the generated icon subset is stale
pnpm --filter @opennavo/design-vue typecheck      # vue-tsc --noEmit
pnpm --filter @opennavo/design-vue test           # vitest run (jsdom)
pnpm --filter @opennavo/design-vue gallery        # http://127.0.0.1:6106
pnpm --filter @opennavo/design-vue build:gallery  # static gallery in gallery/dist
```

Les nouvelles chaînes de composants entrent dans les dix fichiers `src/messages`; `tests/locale.test.ts` vérifie que chaque local a
les mêmes clés et les mêmes placeholders.

<a id="license"></a>

## Licence

MIT. Le paqueté Lucide les données de l'icône sont ISC (avec MIT portions de Feather): voir
[TROISIÈME PARTIE NOTICES.md](THIRD_PARTY_NOTICES.md). Les OpenNavo nom et logo ne sont pas autorisés:
[MARQUES MARQUES](../../TRADEMARKS.md).
