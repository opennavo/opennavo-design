[English](../../../README.md) · [简体中文](../zh-CN/README.md) · [繁體中文](../zh-Hant/README.md) · [日本語](../ja-JP/README.md) · [Español](../es-ES/README.md) · [Português (Brasil)](../pt-BR/README.md) · [Русский](../ru-RU/README.md) · [Deutsch](../de-DE/README.md) · [Français](../fr-FR/README.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="opennavo-design"></a>

# OpenNavo Design

Il sistema di design di [OpenNavo](https://opennavo.com), lo store di app Homebrew gratuito e open source per Mac, e delle app della stessa famiglia. Token di design condivisi, specifiche documentate e componenti riutilizzabili garantiscono un aspetto, testi e interazioni coerenti nei temi chiaro e scuro.

<a id="language-and-release-status"></a>

## Anteprima

### Tema scuro

![Tema scuro](../../previews/shell-dark.png)

### Tema chiaro

![Tema chiaro](../../previews/shell-light.png)

### Componenti

![Componenti](../../previews/components-dark.png)

## Lingua e stato della versione

Inglese (inglese)`en-US`) è la lingua dei componenti di default e la fonte per le traduzioni. La galleria inizia in inglese a meno che una lingua non sia stata esplicitamente selezionata attraverso il suo URL o le impostazioni salvate; la lingua del browser non lo sovrascrive. I componenti supportano anche cinese semplificato, cinese tradizionale, giapponese, spagnolo, portoghese brasiliano, russo, tedesco, francese e italiano.

La documentazione, i commenti nel codice, gli strumenti di sviluppo e le note di rilascio GitHub sono in inglese per impostazione predefinita. Le traduzioni seguono l’originale inglese.

La versione 0.1.0 è un'anteprima anticipata: le API possono cambiare prima dell'1,0 e i pacchetti non sono ancora pubblicati ai registri. [SICUREZZA.](SECURITY.md).

<a id="whats-inside"></a>

## Contenuto del repository

| Sentiero                                                                                | Pacchetto                 | Per                                                                                                                                                 |
| --------------------------------------------------------------------------------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`tokens/tokens.json`](../../../tokens/tokens.json)                                     | —                         | L'unica fonte: colori (dark + light), tipo, spaziatura, radii, ombre, movimento, layout                                                             |
| [`packages/tokens`](../../../packages/tokens)                                           | `@opennavo/design-tokens` | CSS variabili per entrambi i temi, UnoCSS preimpostato, Tailwind CSS v4 tema e v3 preset, valori digitati, DTCG file per strumenti di progettazione |
| [`packages/vue`](../../../packages/vue)                                                 | `@opennavo/design-vue`    | Vue 3 componenti (bottoni, menu, dialoghi, tabelle, app shell ...), helper a tema, stili di base, galleria dei componenti                           |
| [`packages/swift`](../../../packages/swift) + [`Package.swift`](../../../Package.swift) | `OpenNavoDesign`          | SwiftUI token: colori dinamici, spaziatura, tipo, movimento                                                                                         |
| [`packages/flutter`](../../../packages/flutter)                                         | `opennavo_design`         | Flutter token come `ThemeExtension`s e s `ThemeData` costruttore                                                                                    |
| [`docs`](docs/README.md)                                                                | —                         | Le specifiche: principi, colore, a tema, componenti, modelli, contenuto, accessibilità                                                              |

Tutto sotto `packages/*/` che dice generated è reso da `tokens/tokens.json` di `pnpm gen`; CI fallisce se
un file generato viene modificato a mano o fuori data.

<a id="quick-start"></a>

## Avvio rapido

I pacchetti non sono ancora su un registro; dipendono direttamente da questo repository (pnpm dipendenze subdirezionali,
SwiftPMo un pub `git` dipendenza), o copia `packages/tokens/dist` nella tua app.

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

Vedi [`packages/vue/README.md`](packages/vue/README.md) per Nuxt, la scansione dei contenuti e l'elenco dei componenti.

<a id="react--tailwind-css-v4"></a>

### React + Tailwind CSS V

```css
@import 'tailwindcss';
@import '@opennavo/design-tokens/tailwind.css';
```

```tsx
<button className="h-[34px] rounded-default bg-button-primary-bg px-4 text-[13px] font-semibold text-button-primary-text">
  Install
</button>
```

Un esempio completo vive in [`examples/react-tailwind`](../../../examples/react-tailwind) (l'interruttore a tema incluso).

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

## Tema scuro, chiaro e di sistema

Dark è il default; la luce segue il sistema operativo a meno che l'app non formi un tema.
`data-theme` attributo su `<html>` (`applyThemePreference()`, più un piccolo script della testa in modo che una scelta salvata non lampi mai);
in Tauri app l'aspetto nativo è impostato una volta e ogni finestra e la vista web segue; SwiftUI e Flutter risolvere
colori per aspetto. Dettagli: [Docs/theming.md](docs/theming.md).

<a id="the-specification"></a>

## Specifiche di design

Iniziare con [Docs/README.md](docs/README.md). La breve versione dei principi: il contenuto prima, dire quello che sarà
succedere, locale prima, stabile sotto il puntatore, rispettare la piattaforma, tranquillo per impostazione predefinita, un sistema per ogni applicazione,
accessibile per costruzione, ogni lingua si adatta.

<a id="development"></a>

## Sviluppo

Requisiti: Node 24, pnpm 10; Swift 5.9+ (Xcode) e Flutter 3.24+ per i pacchetti nativi.

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

Cambiare i token `tokens/tokens.json` solo, poi correre `pnpm gen` e commettere i file generati con esso.
[CONTRIBUTO.md](CONTRIBUTING.md).

<a id="license"></a>

## Licenza

Codice e documentazione sono rilasciati sotto la licenza [MIT Licenza](../../../LICENSE). OpenNavo nome e logo non sono autorizzati;
vedi [TRADEMARKS.md](TRADEMARKS.md). Il materiale di terze parti Bundled mantiene la propria licenza: il Lucide icona sottoset è ISC
([pacchetti/vue/THIRD PARTY NOTICES.md](packages/vue/THIRD_PARTY_NOTICES.md)).

Fonte e separata MIT autorizzazione: [PROVENANCE.md](PROVENANCE.md).
