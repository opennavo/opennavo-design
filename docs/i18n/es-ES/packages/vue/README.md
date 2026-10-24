[English](../../../../../packages/vue/README.md) · [简体中文](../../../zh-CN/packages/vue/README.md) · [繁體中文](../../../zh-Hant/packages/vue/README.md) · [日本語](../../../ja-JP/packages/vue/README.md) · **Español** · [Português (Brasil)](../../../pt-BR/packages/vue/README.md) · [Русский](../../../ru-RU/packages/vue/README.md) · [Deutsch](../../../de-DE/packages/vue/README.md) · [Français](../../../fr-FR/packages/vue/README.md) · [Italiano](../../../it-IT/packages/vue/README.md)

> El inglés es el original. Las traducciones son borradores realizados con traducción automática local y requieren revisión humana. El código y los textos de las licencias se conservan.

<a id="opennavodesign-vue"></a>

# @opennavo/design-vue

Vue 3 componentes de OpenNavo Diseño: botones y entradas, visualización de datos, estados vacíos y de error, diálogos, menús, un
paleta de comandos, tostadas y la cáscara de aplicación (bar lateral, barra de herramientas, navegación superior, carril lateral).
UnoCSS preset of [`@opennavo/design-tokens`](../../../../../packages/tokens), seguir los temas oscuros y ligeros automáticamente y enviar sus
propias cuerdas en diez idiomas (en-US, zh-CN, ja-JP, es-ES, pt-BR, ru-RU, de-DE, fr-FR, it-IT, zh-Hant).

- **Presentación solamente.** Los componentes nunca recogen datos, leen rutas o llamen a la plataforma API.
  accesorios y ranuras, y enlaces a través `linkAs` (`RouterLink`, `NuxtLink`) o anclas simples.
- **Barcos TypeScript y `.vue` fuentes**, sin paso de construcción: su Vite (o Nuxt) construir los compila, así que SSR, árbol
  temblor y tu propio TypeScript Los ajustes se aplican.
- **No hay marca dentro.** Los componentes que muestran la marca de una aplicación lo llevan a través de una `brand` tragaperras, con un texto plano
  `brandName` El retroceso. OpenNavo nombre y logotipo no son parte de este paquete ([TRADEMARKS.md](../../TRADEMARKS.md)).

Propietarios, tragamonedas, eventos y notas de accesibilidad: [docs/components.md](../../docs/components.md). La galería de componentes
(`pnpm gallery`) muestra cada componente tanto en temas como en los diez idiomas.

<a id="install"></a>

## Instala

Los paquetes todavía no están en un registro.

**Dentro de este repositorio o un pnpm espacio de trabajo que lo contiene**

```json
{ "dependencies": { "@opennavo/design-vue": "workspace:*", "@opennavo/design-tokens": "workspace:*" } }
```

**De Gitpnpm)** — instalar ambos paquetes de la misma confirmación y señalar la dependencia de fichas de la Vue paquete
(declarado como `workspace:*`) en la copia de Git con una anulación:

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

Pin una etiqueta o cometer (`#v0.1.0&path:packages/vue`) para instalaciones reproducibles. `vue` 3.5.

<a id="default-language"></a>

## Idioma predeterminado

`app.use(createOnUi())` usa inglés (inglés)`en-US`). Paso `createOnUi({ locale })` para seguir una selección explícita del lenguaje reactiva. Sin el plugin, los componentes también se vuelven al inglés. La galería honra una válida `?locale=` Parámetro primero, luego una selección guardada, y de otro modo utiliza el inglés.

<a id="vite--vue--unocss-also-tauri"></a>

## Vite + Vue + UnoCSS (también Tauri)

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

TypeScript: uso de las fuentes Vite's tipos de clientes (`import.meta.env`, CSS importaciones), que Vite y Nuxt proyectos
ya se incluye (`"types": ["vite/client"]`).

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

El guión de la cabeza encima es exactamente lo que `themeBootScript('app:theme')` devuelve; generarlo en código si lo prefieres.

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

Paso `NuxtLink` a componentes que hacen enlaces (`OnButton`, `OnCard`, `OnTabs`, `OnPagination`, `OnBreadcrumb`,
`OnSectionHeader`, `OnSidebar`, `OnNavItem`, `OnTopNav`, `OnFeatureHero`) con `:link-as="NuxtLink"`
(`const NuxtLink = resolveComponent('NuxtLink')`). Los componentes nunca leen la ruta; pase `active`/`modelValue`.

<a id="tauri-desktop-apps"></a>

## Tauri Aplicaciones de escritorio

Tauri las aplicaciones utilizan Vite setup above. In addition:

- Uso `OnAppShell scroll="container"`: la ventana mantiene una altura fija y los pergaminos de la columna principal por su cuenta.
- `OnSidebar` y `OnToolbar` Toma. `drag-region` a añadir `data-tauri-drag-region` al área de la barra de título (52 px para el
  macOS Los botones y enlaces dentro nunca son marcados arrastrables.
- Importación `system-fonts.css` para renderizar en las propias fuentes de la plataforma.
- Tema: tienda `system | light | dark` en su configuración y establecer el tema de la ventana nativa de ella (Tauri's
  `set_theme` / `setTheme`), así que la vista web `prefers-color-scheme` a continuación; `applyThemePreference` también obras
  por ventana. ventanas popover transparentes debe reajustar `html { background: transparent }` en su propia entrada,
  desde entonces `base.css` pinta el fondo de la página.
- Los anillos WebKit se centran en que un script se movió a menos que el usuario acaba de utilizar el teclado; los overlays ya cuenta para
  esto (`moveFocus`), así que los diálogos abiertos por la propia aplicación no muestran un anillo de enfoque.

<a id="locale"></a>

## Locale

```ts
app.use(createOnUi({ locale })); // locale: Ref<Locale>, reactive
```

Sin el plugin, los componentes usan inglés. `useUiLocale()` devuelve el locale ref y
`useUiMessages()` las cuerdas para ella; `LOCALES`, `isLocale(value)`, `uiMessages` y `interpolate(template, params)`
son exportados para aplicaciones que quieren las mismas cadenas. Props como `placeholder`, `label`, `title` o `description`
anular los defectos incorporados.

<a id="theme"></a>

## Tema

La oscuridad es el defecto; la luz se aplica cuando el sistema lo prefiere, a menos que la página forme un tema con `data-theme` on
`<html>` (`"dark"` o `"light"`). `data-theme="light"` o `"dark"` también funciona en cualquier subárbol, por ejemplo un panel de vista previa.

```ts
import { applyThemePreference, resolveTheme, themeBootScript } from '@opennavo/design-vue/theme';

applyThemePreference('light'); // 'system' | 'light' | 'dark'; system removes the attribute
localStorage.setItem('app:theme', 'light');
resolveTheme('system'); // 'light' | 'dark' as currently shown

// In the document <head>, before any bundle: applies a saved light/dark choice before first paint.
const inline = themeBootScript('app:theme');
```

`applyThemePreference` apaga las transiciones para un marco (`base.css` `[data-theme-switching]`), así que cada color
cambia a la vez. `THEME_PREFERENCES` y `isThemePreference` ayudar a validar los valores almacenados.

<a id="icons"></a>

## Iconos

`OnIcon` y todos `icon` Producir SVG inline de un paquete Lucide subconjunto: los iconos que usan los componentes más
`sun`, `moon` y `sun-moon` (`BUNDLED_ICONS`). Registrar más antes de montar:

```ts
import { getIcons } from '@iconify/utils';
import { icons as lucide } from '@iconify-json/lucide'; // the whole set; or a subset you generate at build time
import { registerIcons } from '@opennavo/design-vue';

registerIcons(getIcons(lucide, ['compass', 'settings', 'trash-2'])!);
```

Los nombres son Lucide (Nombres)`settings`, `lucide:settings`) o `prefix:name` para otro conjunto registrado. Nombres desconocidos
Hacer un icono vacío y advertir en el desarrollo. `vite.config.ts` muestra un módulo virtual que corta el
subconjunto en tiempo de construcción, por lo que el conjunto completo del icono nunca alcanza el paquete.

<a id="components"></a>

## Componentes

| Grupo               | Componentes                                                                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Acciones e insumos  | `OnButton`, `OnIcon`, `OnChip`, `OnBadge`, `OnToggle`, `OnCheckbox`, `OnSegmented`, `OnTabs`, `OnSearchField`, `OnTooltip`, `OnMenu`                                                                                                                   |
| Containers and data | `OnCard`, `OnStatTile`, `OnKeyValueList`, `OnTable`, `OnPagination`, `OnProgressMeter`, `OnStackBar`, `OnHBarChart`, `OnSkeleton`, `OnCodeText`, `OnLogViewer`, `OnHighlightText`, `OnSectionHeader`, `OnPageHeader`, `OnBreadcrumb`, `OnMarkdownView` |
| Estados             | `OnEmpty`, `OnErrorState`, `OnOffline`                                                                                                                                                                                                                 |
| Capas superpuestas  | `OnDialogShell`, `OnModal`, `OnSheet`, `OnConfirm`, `OnToast`, `OnToastRegion` (+ `createToastQueue`), `OnCommandPalette`                                                                                                                              |
| Diseño y navegación | `OnAppShell`, `OnSidebar`, `OnNavItem`, `OnToolbar`, `OnTopNav`, `OnRailPanel`, `OnRailSection`                                                                                                                                                        |
| Showcase            | `OnFeatureHero`, `OnAppIcon`                                                                                                                                                                                                                           |

Ayudantes: `createOnUi`, `useUiLocale`, `useUiMessages`, `createToastQueue`, `registerIcons`, `getIcon`, ayudantes de tema
(también en `@opennavo/design-vue/theme`), ayudantes de enfoque superpuestos (`moveFocus`, `trapTab`, `lockScroll`, ...), rugiendo
(en inglés)`nextRovingIndex`), y las pequeñas utilidades que los componentes utilizan (`paginationRange`, `parseHighlight`,
`codeParts`/`codeWordsHtml`, `classifyLogLine`, `formatPercent`, `heroGlowGradient`, `imageSrcset`, `iconColor`,
`iconInitials`, …).

`OnMarkdownView` estilos HTML sólo: hacer Markdown y sanitizarlo en su aplicación (por ejemplo, markdown-it con crudo HTML
apagado, luego DOMPurify), o pasar elementos a través de su ranura.

<a id="development"></a>

## Desarrollo

De la raíz del repositorio (`pnpm install` primero:

```sh
pnpm --filter @opennavo/design-vue gen            # regenerate src/icons/lucide.ts from src/icons/names.ts
pnpm --filter @opennavo/design-vue check          # fail if the generated icon subset is stale
pnpm --filter @opennavo/design-vue typecheck      # vue-tsc --noEmit
pnpm --filter @opennavo/design-vue test           # vitest run (jsdom)
pnpm --filter @opennavo/design-vue gallery        # http://127.0.0.1:6106
pnpm --filter @opennavo/design-vue build:gallery  # static gallery in gallery/dist
```

Nuevas cadenas de componentes entran en los diez archivos en `src/messages`; `tests/locale.test.ts` comprueba que cada local tiene
las mismas llaves y los titulares de puestos.

<a id="license"></a>

## Licencia

MIT. El paquete Lucide datos de icono ISC (con MIT porciones de Feather): véase
[THIRD PARTY NOTICES.md](THIRD_PARTY_NOTICES.md). El OpenNavo nombre y logotipo no están autorizados:
[TRADEMARKS.md](../../TRADEMARKS.md).
