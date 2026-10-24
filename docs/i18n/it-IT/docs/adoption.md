[English](../../../adoption.md) · [简体中文](../../zh-CN/docs/adoption.md) · [繁體中文](../../zh-Hant/docs/adoption.md) · [日本語](../../ja-JP/docs/adoption.md) · [Español](../../es-ES/docs/adoption.md) · [Português (Brasil)](../../pt-BR/docs/adoption.md) · [Русский](../../ru-RU/docs/adoption.md) · [Deutsch](../../de-DE/docs/adoption.md) · [Français](../../fr-FR/docs/adoption.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="adopting-the-system-in-an-app"></a>

# Adottare il sistema in un'app

Come inizia una nuova app OpenNavo Design, e come un'app che ha copiato OpenNavoI pacchetti prima si spostano su di esso.

<a id="a-new-tauri--vue-app"></a>

## Un nuovo Tauri + Vue app

1. **Dipendenze** (fino a quando i pacchetti sono pubblicati, utilizzare git dipendenze subdirezionali o un link workspace):

   ```json
   {
     "dependencies": {
       "@opennavo/design-tokens": "github:opennavo/opennavo-design#path:packages/tokens",
       "@opennavo/design-vue": "github:opennavo/opennavo-design#path:packages/vue"
     }
   }
   ```

2. **Stili e plugin** in `main.ts`, in questo ordine:

   ```ts
   import '@unocss/reset/tailwind.css';
   import '@opennavo/design-tokens/tokens.css';
   import '@opennavo/design-vue/base.css';
   import '@opennavo/design-vue/system-fonts.css';
   import 'virtual:uno.css';
   import { createOnUi } from '@opennavo/design-vue';

   app.use(createOnUi({ locale })); // a ref holding one of the ten locales
   ```

3. **UnoCSS** con la preimpostazione, la scansione del pacchetto componente troppo in modo che le sue utilità sono generate:

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

   In `vite.config.ts` aggiungere `optimizeDeps: { exclude: ['@opennavo/design-vue'] }`: il pacchetto navi fonti, e
   pre-bundling farebbe una seconda copia dei suoi registri locali e icone, quindi `createOnUi` e `registerIcons` avrebbe voluto
   non raggiungere i componenti.

4. **Impostazione dell'apparenza**: aggiungere `appearance: system | light | dark` alle impostazioni dell'app, applicarlo con
   `app.set_theme()` in ruggine prima di finestre mostrano, sincronizzare lo sfondo principale della finestra, e specchiarlo nella finestra principale
   con `applyThemePreference()` ([Theming › macOS desktop desktop desktop](theming.md#macos-desktop-tauri)). Offrire la scelta in
   Impostazioni › Generale come un controllo segmentato: Sistema / Luce / Oscuro.
5. **Strato di marca**: scrivere l'app `brand.json` con il suo accento ([Marca](brand.md)), generare con
   `--overrides brand.json --out <app>/design`, e importare il generato `tokens.css` invece del pacchetto uno.
6. **Struttura dell’app**: `OnAppShell` con `OnSidebar` (il marchio dell'app nel `brand` fessura), `OnToolbar`, e la pagina anatomia
   in [Modelli](patterns.md#page-anatomy).
7. **Lingue**: spedire tutte le dieci localitÃ per le stringhe dell'app; i componenti portano la loro.

Un'app web (Nuxt) aggiunge `@unocss/nuxt`, lo stesso CSS in ordine `css: [...]`, e lo script di avvio della testa
([Theming › Web](theming.md#web-nuxt-vite)) A React app utilizza `tailwind.css` e `base.css` dal pacchetto gettoni
([Piattaforme › React](platforms.md#react--tailwind-css)).

<a id="moving-an-app-that-copied-opennavos-packages"></a>

## Trasferire un'app che copia OpenNavo'pacchetti

Per un'app che ha copiato `packages/tokens` e `packages/ui`, questo esempio utilizza la finzione `example-app`,
con `@example-app/tokens`, `--ex-` variabili e `Ex*` componenti. Le classi di utilità sono le stesse
(`bg-surface-card`, `text-ink-secondary` ...), quindi la maggior parte della mossa è importazioni e nomi:

| Prima (copia)                                           | Dopo (sistema)                                                                            |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `@example-app/tokens/tokens.css`                        | `@opennavo/design-tokens/tokens.css` (o la copia di marca generata dell'app)              |
| `@example-app/tokens/uno-preset` → `presetExampleApp()` | `@opennavo/design-tokens/uno-preset` → `presetOpenNavo()`                                 |
| `@example-app/ui` → `ExButton`, `createExUi()`          | `@opennavo/design-vue` → `OnButton`, `createOnUi()`                                       |
| `var(--ex-…)` negli stili di app                        | `var(--on-…)`                                                                             |
| `ExLogo` dentro la barra laterale                       | il proprio componente logo dell'app `OnSidebar`E'... `brand` slot slot                    |
| Valori token locali che differiscono                    | a `brand.json` override se sono token di marca; altrimenti adottare il valore del sistema |

Passos:

1. Elenca le differenze di token dell'app (`diff` la sua `tokens.json` contro `tokens/tokens.json`). I gettoni di marca entrano
   `brand.json`; qualsiasi altra differenza è un bug da cadere o una proposta per il sistema.
2. Sostituire le importazioni e i prefissi (un codice o ricerca-e-sostituire: `Ex` → `On`, `--ex-` → `--on-`, i nomi dei pacchetti).
3. Spostare i componenti specifici dell'app (quelli che conoscono i dati dell'app) nell'app; mantenere quelli generici dal sistema.
4. Eseguire l'applicazione in entrambi i temi e confrontare con la galleria; eseguire i test di contrasto contro i token fusi.
5. Eliminare la copiata `packages/tokens` e `packages/ui`.

Un'applicazione non può fork i neutri, spaziatura, tipo o componenti. Se ha bisogno di qualcosa il sistema manca, aggiungerlo a
il sistema prima ([CONTRIBUTO.md](../CONTRIBUTING.md)).

<a id="checklist"></a>

## Elenco di controllo

- [ ] Tokens da `@opennavo/design-tokens` (o una copia di marca generata da esso); nessun colore codificato duro.
- [ ] Impostazione aspetto con sistema / luce / scuro; nessun flash all'inizio; ogni finestra segue.
- [ ] Componenti da `@opennavo/design-vue`; il marchio dell'app attraverso `brand` slot.
- [ ] Dieci lingue di interfaccia.
- [ ] Entrambi i temi controllati; test di contrasto verde per il marchio overrides.
