[English](../../../../../packages/vue/README.md) · [简体中文](../../../zh-CN/packages/vue/README.md) · [繁體中文](../../../zh-Hant/packages/vue/README.md) · [日本語](../../../ja-JP/packages/vue/README.md) · [Español](../../../es-ES/packages/vue/README.md) · **Português (Brasil)** · [Русский](../../../ru-RU/packages/vue/README.md) · [Deutsch](../../../de-DE/packages/vue/README.md) · [Français](../../../fr-FR/packages/vue/README.md) · [Italiano](../../../it-IT/packages/vue/README.md)

> O inglês é a fonte. As traduções são rascunhos feitos com tradução automática local e precisam de revisão humana. O código e os textos das licenças são preservados.

<a id="opennavodesign-vue"></a>

# @opennavo/design-vue

Vue 3 componentes de OpenNavo Desenho: botões e entradas, exibição de dados, estados de erro e vazios, diálogos, menus, a
paleta de comandos, brindes e a shell da aplicação (barra lateral, barra de ferramentas, navegação de topo, trilho lateral).
UnoCSS predefinição de [`@opennavo/design-tokens`](../../../../../packages/tokens), seguir os temas escuros e claros automaticamente e enviar seus
as cordas próprias em dez línguas (en-US, zh-CN, ja-JP, es-ES, pt-BR, ru-RU, de-DE, fr-FR, it-IT, zh-Hant).

- **Apenas apresentação.** Os componentes nunca obtêm dados, lêem rotas ou usam APIs de plataforma de chamadas.
  adereços e slots, e links através `linkAs` (`RouterLink`, `NuxtLink`) ou âncoras simples.
- **Navios TypeScript e `.vue` fontes**, nenhum passo de construção: seu Vite (ou Nuxt) compila-os, então SSR, árvore
  tremores e o seu próprio TypeScript as configurações aplicam-se.
- **Não há marca lá dentro.** Componentes que mostram a marca de um aplicativo levá-lo através de um `brand` slot, com um texto simples
  `brandName` Recuar. OpenNavo nome e logotipo não fazem parte desta embalagem ([MARCAS COMERCIAIS.md](../../TRADEMARKS.md)).

Produtos por componente, slots, eventos e notas de acessibilidade: [docs/componentes.md](../../docs/components.md). A galeria de componentes
(`pnpm gallery`) mostra cada componente em ambos os temas e todas as dez línguas.

<a id="install"></a>

## Instalar

Os pacotes ainda não estão em um registro.

**Dentro deste repositório ou um pnpm espaço de trabalho que o contém**

```json
{ "dependencies": { "@opennavo/design-vue": "workspace:*", "@opennavo/design-tokens": "workspace:*" } }
```

**De Git (pnpm)** — instalar ambos os pacotes do mesmo commit e apontar a dependência dos tokens do Vue pacote
(declarado como `workspace:*`) na cópia Git com um sobreposição:

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

Pin um tag ou commit (`#v0.1.0&path:packages/vue`) para instalações reprodutíveis. `vue` 3.5.

<a id="default-language"></a>

## Idioma padrão

`app.use(createOnUi())` usa o inglês (`en-US`). Pass `createOnUi({ locale })` para seguir uma seleção de idioma reativo explícito. Sem o plugin, os componentes também se encaixam no inglês. A galeria homenageia uma `?locale=` parâmetro primeiro, em seguida, uma seleção salva, e de outra forma usa Inglês.

<a id="vite--vue--unocss-also-tauri"></a>

## Vite + Vue + UnoCSS (também Tauri)

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

TypeScript: o uso de fontes ViteTipos de clientes (`import.meta.env`, CSS Importações), que Vite e Nuxt projetos
já incluir (`"types": ["vite/client"]`).

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

O script principal acima é exatamente o que `themeBootScript('app:theme')` retorna; gere- o em código se preferir.

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

Passar `NuxtLink` para componentes que renderizam links (`OnButton`, `OnCard`, `OnTabs`, `OnPagination`, `OnBreadcrumb`,
`OnSectionHeader`, `OnSidebar`, `OnNavItem`, `OnTopNav`, `OnFeatureHero`) com `:link-as="NuxtLink"`
(`const NuxtLink = resolveComponent('NuxtLink')`). Componentes nunca ler a rota; passe `active`/`modelValue`.

<a id="tauri-desktop-apps"></a>

## Tauri aplicativos de desktop

Tauri os aplicativos usam o Vite configuração acima. Além disso:

- Utilização `OnAppShell scroll="container"`: a janela mantém uma altura fixa e a coluna principal rola sozinha.
- `OnSidebar` e `OnToolbar` tomar `drag-region` a adicionar `data-tauri-drag-region` para a área da barra de título (52 px para o
  macOS semáforos). Botões e links dentro nunca são marcados como draggable.
- Importar `system-fonts.css` para renderizar nas fontes da própria plataforma.
- Tema: armazenar `system | light | dark` em suas configurações e definir o tema da janela nativa a partir dele (Tauri's
  `set_theme` / `setTheme`), assim que a vista da web `prefers-color-scheme` A seguir: `applyThemePreference` também funciona
  por janela. Janelas popover transparentes devem ser reiniciadas `html { background: transparent }` na sua própria entrada,
  desde `base.css` pinta o fundo da página.
- O WebKit toca o foco que um script moveu, a menos que o usuário apenas tenha usado o teclado; as sobreposições já são responsáveis
  Esta situação (`moveFocus`), assim as janelas abertas pelo próprio aplicativo não mostram um anel de foco.

<a id="locale"></a>

## Localidade

```ts
app.use(createOnUi({ locale })); // locale: Ref<Locale>, reactive
```

Sem o plugin, os componentes usam o inglês. `useUiLocale()` retorna o ref locale e
`useUiMessages()` as cordas para ele; `LOCALES`, `isLocale(value)`, `uiMessages` e `interpolate(template, params)`
são exportados para aplicativos que querem as mesmas strings. `placeholder`, `label`, `title` ou `description`
sobrepor os padrões incorporados.

<a id="theme"></a>

## Tema

Escuro é o padrão; a luz aplica- se quando o sistema o prefere, a menos que a página force um tema com `data-theme` ligado
`<html>` (`"dark"` ou `"light"`). `data-theme="light"` ou `"dark"` também funciona em qualquer subárvore, por exemplo, um painel de antevisão.

```ts
import { applyThemePreference, resolveTheme, themeBootScript } from '@opennavo/design-vue/theme';

applyThemePreference('light'); // 'system' | 'light' | 'dark'; system removes the attribute
localStorage.setItem('app:theme', 'light');
resolveTheme('system'); // 'light' | 'dark' as currently shown

// In the document <head>, before any bundle: applies a saved light/dark choice before first paint.
const inline = themeBootScript('app:theme');
```

`applyThemePreference` desliga as transições para um quadro (`base.css` `[data-theme-switching]`), então cada cor
alterações imediatas. `THEME_PREFERENCES` e `isThemePreference` ajudar a validar valores armazenados.

<a id="icons"></a>

## Ícones

`OnIcon` e cada `icon` renderização prop em linha SVG de um pacote Lucide subconjunto: os ícones que os componentes usam mais
`sun`, `moon` e `sun-moon` (`BUNDLED_ICONS`). Registre-se mais antes de montar:

```ts
import { getIcons } from '@iconify/utils';
import { icons as lucide } from '@iconify-json/lucide'; // the whole set; or a subset you generate at build time
import { registerIcons } from '@opennavo/design-vue';

registerIcons(getIcons(lucide, ['compass', 'settings', 'trash-2'])!);
```

Nomes são Lucide nomes (`settings`, `lucide:settings`) ou `prefix:name` para outro conjunto registrado. Nomes desconhecidos
mostra um ícone vazio e avisa em desenvolvimento. `vite.config.ts` mostra um módulo virtual que corta o
subconjunto na hora de compilação, de modo que o conjunto completo de ícones nunca atinge o pacote.

<a id="components"></a>

## Componentes

| Grupo                  | Componentes                                                                                                                                                                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Ações e insumos        | `OnButton`, `OnIcon`, `OnChip`, `OnBadge`, `OnToggle`, `OnCheckbox`, `OnSegmented`, `OnTabs`, `OnSearchField`, `OnTooltip`, `OnMenu`                                                                                                                   |
| Containers e dados     | `OnCard`, `OnStatTile`, `OnKeyValueList`, `OnTable`, `OnPagination`, `OnProgressMeter`, `OnStackBar`, `OnHBarChart`, `OnSkeleton`, `OnCodeText`, `OnLogViewer`, `OnHighlightText`, `OnSectionHeader`, `OnPageHeader`, `OnBreadcrumb`, `OnMarkdownView` |
| Estados                | `OnEmpty`, `OnErrorState`, `OnOffline`                                                                                                                                                                                                                 |
| Sobreposições          | `OnDialogShell`, `OnModal`, `OnSheet`, `OnConfirm`, `OnToast`, `OnToastRegion` (+ `createToastQueue`), `OnCommandPalette`                                                                                                                              |
| Disposição e navegação | `OnAppShell`, `OnSidebar`, `OnNavItem`, `OnToolbar`, `OnTopNav`, `OnRailPanel`, `OnRailSection`                                                                                                                                                        |
| Apresentar             | `OnFeatureHero`, `OnAppIcon`                                                                                                                                                                                                                           |

Ajudantes: `createOnUi`, `useUiLocale`, `useUiMessages`, `createToastQueue`, `registerIcons`, `getIcon`, assistentes temáticos
(também em `@opennavo/design-vue/theme`), sobreposição de auxiliares de foco (`moveFocus`, `trapTab`, `lockScroll`, ...), errante
focalização (`nextRovingIndex`), e as pequenas utilidades que os componentes usam (`paginationRange`, `parseHighlight`,
`codeParts`/`codeWordsHtml`, `classifyLogLine`, `formatPercent`, `heroGlowGradient`, `imageSrcset`, `iconColor`,
`iconInitials`, …).

`OnMarkdownView` estilos HTML somente: renderizar Markdown e higienizá-lo em seu aplicativo (por exemplo, markdown-it com bruto HTML
Off, então DOMPURIFY), ou passar elementos através de sua fenda.

<a id="development"></a>

## Desenvolvimento

Da raiz do repositório (`pnpm install` primeiro):

```sh
pnpm --filter @opennavo/design-vue gen            # regenerate src/icons/lucide.ts from src/icons/names.ts
pnpm --filter @opennavo/design-vue check          # fail if the generated icon subset is stale
pnpm --filter @opennavo/design-vue typecheck      # vue-tsc --noEmit
pnpm --filter @opennavo/design-vue test           # vitest run (jsdom)
pnpm --filter @opennavo/design-vue gallery        # http://127.0.0.1:6106
pnpm --filter @opennavo/design-vue build:gallery  # static gallery in gallery/dist
```

Novas strings de componentes vão para todos os dez arquivos `src/messages`; `tests/locale.test.ts` verifica que cada localidade tem
As mesmas chaves e placeholders.

<a id="license"></a>

## Licença

MIT. O empacotado Lucide os dados do ícone são ISC (com MIT porções de Feather): ver
[TERCEIRO PARTE NOTICES.md](THIRD_PARTY_NOTICES.md). A OpenNavo nome e logotipo não são licenciados:
[MARCAS COMERCIAIS.md](../../TRADEMARKS.md).
