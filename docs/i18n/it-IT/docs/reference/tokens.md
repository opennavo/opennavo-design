[English](../../../../reference/tokens.md) · [简体中文](../../../zh-CN/docs/reference/tokens.md) · [繁體中文](../../../zh-Hant/docs/reference/tokens.md) · [日本語](../../../ja-JP/docs/reference/tokens.md) · [Español](../../../es-ES/docs/reference/tokens.md) · [Português (Brasil)](../../../pt-BR/docs/reference/tokens.md) · [Русский](../../../ru-RU/docs/reference/tokens.md) · [Deutsch](../../../de-DE/docs/reference/tokens.md) · [Français](../../../fr-FR/docs/reference/tokens.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="token-reference"></a>

# Riferimento token

<!-- Generated from tokens/tokens.json by packages/tokens/scripts/generate.ts; do not edit. After changing tokens.json, run `pnpm gen`. -->

Ogni valore qui sotto proviene da `tokens/tokens.json`. Dark è il tema predefinito; la colonna Light mostra il valore
il tema della luce utilizza (un em dash significa che il token è lo stesso in entrambi i temi). CSS le variabili sono ciò che il web
pacchetti emit; la colonna di utilità è la UnoCSS / Tailwind gambo di classe (in inglese)`bg-`, `text-`, `border-` ... + stelo).
Flutter (`OnColors`) e SwiftUI (`OnColor`) utilizzare il percorso camelCase, ad esempio. `surface.cardAlt` → `surfaceCardAlt`.

<a id="color"></a>

## Colore

<a id="surfaces"></a>

### Superfici

| Token di design   | CSS variabile           | Utilità            | Scuro                    | Chiaro                      | Uso                                                                                                                        |
| ----------------- | ----------------------- | ------------------ | ------------------------ | --------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `surface.page`    | `--on-surface-page`     | `surface-page`     | `#0B0B0B`                | `#F2F2F2`                   | Outer web e sfondo finestra.                                                                                               |
| `surface.base`    | `--on-surface-base`     | `surface-base`     | `#131313`                | `#F8F8F8`                   | Sfondo principale dei contenuti.                                                                                           |
| `surface.sidebar` | `--on-surface-sidebar`  | `surface-sidebar`  | `#161616`                | `#F1F1F1`                   | Barra laterale Desktop.                                                                                                    |
| `surface.rail`    | `--on-surface-rail`     | `surface-rail`     | `#141414`                | `#F5F5F5`                   | Ferrovia destra con sintesi e azioni secondarie.                                                                           |
| `surface.card`    | `--on-surface-card`     | `surface-card`     | `#1A1A1A`                | `#FFFFFF`                   | Carte.                                                                                                                     |
| `surface.cardAlt` | `--on-surface-card-alt` | `surface-card-alt` | `#1F1F1F`                | `#F5F5F5`                   | Ingressi e blocchi secondari all'interno delle carte.                                                                      |
| `surface.raised`  | `--on-surface-raised`   | `surface-raised`   | `#262626`                | `#EDEDED`                   | Hover, selezione, piastrelle icone; più scuro delle carte in modalità luce, così pannelli galleggianti utilizzano popover. |
| `surface.chip`    | `--on-surface-chip`     | `surface-chip`     | `#2A2A2A`                | `#EBEBEB`                   | Sfondo di badge neutro.                                                                                                    |
| `surface.control` | `--on-surface-control`  | `surface-control`  | `#2B2B2B`                | `#FFFFFF`                   | Ingressi, strumenti e controlli secondari.                                                                                 |
| `surface.inset`   | `--on-surface-inset`    | `surface-inset`    | `#111111`                | `#F0F0F0`                   | Blocchi di codice, registri, tracce di controllo segmentato.                                                               |
| `surface.overlay` | `--on-surface-overlay`  | `surface-overlay`  | `rgba(28, 28, 28, 0.92)` | `rgba(255, 255, 255, 0.94)` | Sovrapposizioni con fondo filtrante: sfocatura(20px).                                                                      |
| `surface.popover` | `--on-surface-popover`  | `surface-popover`  | `#262626`                | `#FFFFFF`                   | Pannelli di galleggiamento e comunicazioni sui contenuti, come le schede di consenso e suggerimento.                       |

<a id="borders-utility-prefix-line"></a>

### Prefisso dell'utility `line`)

| Token di design  | CSS variabile         | Utilità        | Scuro                       | Chiaro                | Uso                                              |
| ---------------- | --------------------- | -------------- | --------------------------- | --------------------- | ------------------------------------------------ |
| `border.subtle`  | `--on-border-subtle`  | `line-subtle`  | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.08)` | Confezioni e divisori di carte.                  |
| `border.default` | `--on-border-default` | `line-default` | `rgba(255, 255, 255, 0.12)` | `rgba(0, 0, 0, 0.13)` | Input, pulsante fantasma e bordi delle finestre. |
| `border.strong`  | `--on-border-strong`  | `line-strong`  | `rgba(255, 255, 255, 0.20)` | `rgba(0, 0, 0, 0.22)` | Hover confina.                                   |
| `border.sidebar` | `--on-border-sidebar` | `line-sidebar` | `#1D1D1D`                   | `#E5E5E5`             | Frontiera laterale destra.                       |

<a id="text-utility-prefix-ink"></a>

### Testo (prefisso dell'utility `ink`)

| Token di design  | CSS variabile         | Utilità         | Scuro     | Chiaro    | Uso                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------- | --------------------- | --------------- | --------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text.primary`   | `--on-text-primary`   | `ink-primary`   | `#EDEDED` | `#1A1A1A` | Rubriche, Animali domestici, Altri, Le donne, Seppia, Gatti, Gatti, Gatti, Gatti, Gatti, Gatti, Gatti, Gatti, Gatti, Gatti, Gatti, Gatti, Gatti, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Cartoline, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte, Carte |
| `text.secondary` | `--on-text-secondary` | `ink-secondary` | `#A8A8A8` | `#575757` | Testo del corpo e descrizioni (7.3:1 su carte scure, 7.2:1 su schede leggere).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `text.tertiary`  | `--on-text-tertiary`  | `ink-tertiary`  | `#8F8F8F` | `#6B6B6B` | Informazioni secondarie, etichette, tempi (5.4:1 su carte scure, 4.7:1 su dark raise; 5.3:1 e 4.6:1 in modalità light).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `text.disabled`  | `--on-text-disabled`  | `ink-disabled`  | `#5C5C5C` | `#A6A6A6` | Disabili/decorative solo; non trasmettere mai informazioni essenziali.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `text.inverse`   | `--on-text-inverse`   | `ink-inverse`   | `#141414` | `#FFFFFF` | Testi e icone su pieni (status, corallo, salmone); scuro in modalità dark, bianco in modalità luce.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `text.onAccent`  | `--on-text-on-accent` | `ink-on-accent` | `#1B0A05` | —         | Testo sui pulsanti coralli/cattivi (7.2:1).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `text.accent`    | `--on-text-accent`    | `ink-accent`    | `#FF7356` | `#B83A15` | Testo corallo, link e icone; brand.coral è per i riempimenti e la grafica (la modalità di luce ha bisogno di un'ombra più scura per 4.5:1).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

<a id="brand"></a>

### Marca

| Token di design                 | CSS variabile                            | Utilità           | Scuro                             | Chiaro                | Uso                                                                                                                                                          |
| ------------------------------- | ---------------------------------------- | ----------------- | --------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `brand.coral`                   | `--on-brand-coral`                       | `brand-coral`     | `#FF7356`                         | `#EE5533`             | Colore del marchio primario per i riempimenti e la grafica: logo, progresso, distintivi, pulsanti sottolineati. Per il testo corallo utilizzare text.accent. |
| `brand.salmon`                  | `--on-brand-salmon`                      | `brand-salmon`    | `#F99E70`                         | `#A74C1B`             | Testo enfatizzato: seconda linea eroe, distintivi, aggiornamenti disponibili.                                                                                |
| `brand.violet`                  | `--on-brand-violet`                      | `brand-violet`    | `#5B5BD6`                         | —                     | Eroe primario colore di luce.                                                                                                                                |
| `brand.glowCore`                | `--on-brand-glow-core`                   | `brand-glow-core` | `#CDCDFF`                         | —                     | Evidenziare il centro.                                                                                                                                       |
| `brand.logoGradient`            | `--on-brand-logo-gradient`               | —                 | `#FFB347` → `#FF7356` → `#FF4E3A` | —                     | Logo N gradiente, in alto a sinistra verso il basso a destra.                                                                                                |
| `brand.logoCoreGradient`        | `--on-brand-logo-core-gradient`          | —                 | `#FFF6D6` → `#FFC861`             | `#FFB347` → `#FF8F3F` | Logo Polaris gradiente su sfondi scuri.                                                                                                                      |
| `brand.logoCoreGradientOnLight` | `--on-brand-logo-core-gradient-on-light` | —                 | `#FFB347` → `#FF8F3F`             | —                     | Logo Polaris gradiente su sfondi leggeri; bianco caldo scomparirebbe.                                                                                        |

<a id="accent-tints"></a>

### Tinte acustiche

| Token di design       | CSS variabile               | Utilità                | Scuro                       | Chiaro                    | Uso                                                     |
| --------------------- | --------------------------- | ---------------------- | --------------------------- | ------------------------- | ------------------------------------------------------- |
| `accent.coralSubtle`  | `--on-accent-coral-subtle`  | `accent-coral-subtle`  | `rgba(255, 115, 86, 0.12)`  | `rgba(238, 85, 51, 0.10)` | Le tracce di progresso e i distintivi di aggiornamento. |
| `accent.salmonSubtle` | `--on-accent-salmon-subtle` | `accent-salmon-subtle` | `rgba(249, 158, 112, 0.10)` | `rgba(167, 76, 27, 0.10)` | Sfondi brutti e aggiornati.                             |

<a id="status"></a>

### Stato

| Token di design        | CSS variabile                | Utilità                 | Scuro                       | Chiaro                     | Uso                                                        |
| ---------------------- | ---------------------------- | ----------------------- | --------------------------- | -------------------------- | ---------------------------------------------------------- |
| `status.success`       | `--on-status-success`        | `status-success`        | `#3FCF6C`                   | `#187733`                  | Installato, successo, corrente.                            |
| `status.successSubtle` | `--on-status-success-subtle` | `status-success-subtle` | `rgba(63, 207, 108, 0.10)`  | `rgba(24, 119, 51, 0.10)`  |                                                            |
| `status.warning`       | `--on-status-warning`        | `status-warning`        | `#FAB219`                   | `#965A00`                  | Avvertenze e autorizzazione dell'amministratore richiesti. |
| `status.warningSubtle` | `--on-status-warning-subtle` | `status-warning-subtle` | `rgba(250, 178, 25, 0.10)`  | `rgba(150, 90, 0, 0.10)`   |                                                            |
| `status.danger`        | `--on-status-danger`         | `status-danger`         | `#FF5D51`                   | `#C22B21`                  | Fallimento, deprecato, cancella.                           |
| `status.dangerSubtle`  | `--on-status-danger-subtle`  | `status-danger-subtle`  | `rgba(255, 93, 81, 0.10)`   | `rgba(194, 43, 33, 0.10)`  |                                                            |
| `status.info`          | `--on-status-info`           | `status-info`           | `#66A4FA`                   | `#1564CD`                  | Auto-updating, link, informazioni.                         |
| `status.infoSubtle`    | `--on-status-info-subtle`    | `status-info-subtle`    | `rgba(102, 164, 250, 0.10)` | `rgba(21, 100, 205, 0.10)` |                                                            |
| `status.successBorder` | `--on-status-success-border` | `status-success-border` | `rgba(63, 207, 108, 0.20)`  | `rgba(24, 119, 51, 0.24)`  | Border di pannelli stagnati con successoSubtle.            |
| `status.warningBorder` | `--on-status-warning-border` | `status-warning-border` | `rgba(250, 178, 25, 0.25)`  | `rgba(150, 90, 0, 0.24)`   | Border di pannelli stagnati con avvisoSubtle.              |
| `status.dangerBorder`  | `--on-status-danger-border`  | `status-danger-border`  | `rgba(255, 93, 81, 0.25)`   | `rgba(194, 43, 33, 0.24)`  | Confezionamento di pannelli stagnati con pericoloSubtle.   |
| `status.infoBorder`    | `--on-status-info-border`    | `status-info-border`    | `rgba(102, 164, 250, 0.25)` | `rgba(21, 100, 205, 0.24)` | Border di pannelli stagnati con infoSubtle.                |

<a id="buttons"></a>

### Pulsanti

| Token di design           | CSS variabile                   | Utilità                    | Scuro     | Chiaro    | Uso |
| ------------------------- | ------------------------------- | -------------------------- | --------- | --------- | --- |
| `button.primaryBg`        | `--on-button-primary-bg`        | `button-primary-bg`        | `#EBEBEB` | `#1F1F1F` |     |
| `button.primaryHover`     | `--on-button-primary-hover`     | `button-primary-hover`     | `#FFFFFF` | `#333333` |     |
| `button.primaryPressed`   | `--on-button-primary-pressed`   | `button-primary-pressed`   | `#D6D6D6` | `#0A0A0A` |     |
| `button.primaryText`      | `--on-button-primary-text`      | `button-primary-text`      | `#141414` | `#FFFFFF` |     |
| `button.secondaryBg`      | `--on-button-secondary-bg`      | `button-secondary-bg`      | `#2B2B2B` | `#EBEBEB` |     |
| `button.secondaryHover`   | `--on-button-secondary-hover`   | `button-secondary-hover`   | `#333333` | `#E0E0E0` |     |
| `button.secondaryPressed` | `--on-button-secondary-pressed` | `button-secondary-pressed` | `#242424` | `#D6D6D6` |     |
| `button.secondaryText`    | `--on-button-secondary-text`    | `button-secondary-text`    | `#EDEDED` | `#1A1A1A` |     |
| `button.accentBg`         | `--on-button-accent-bg`         | `button-accent-bg`         | `#FF7356` | `#EE5533` |     |
| `button.accentHover`      | `--on-button-accent-hover`      | `button-accent-hover`      | `#FF8468` | `#F46546` |     |
| `button.accentPressed`    | `--on-button-accent-pressed`    | `button-accent-pressed`    | `#F0603F` | `#E24A28` |     |
| `button.accentText`       | `--on-button-accent-text`       | `button-accent-text`       | `#1B0A05` | —         |     |
| `button.disabledBg`       | `--on-button-disabled-bg`       | `button-disabled-bg`       | `#171717` | `#F0F0F0` |     |
| `button.disabledText`     | `--on-button-disabled-text`     | `button-disabled-text`     | `#5C5C5C` | `#A6A6A6` |     |

<a id="charts"></a>

### Carte

| Token di design    | CSS variabile           | Utilità            | Scuro     | Chiaro    | Uso                                                                                                   |
| ------------------ | ----------------------- | ------------------ | --------- | --------- | ----------------------------------------------------------------------------------------------------- |
| `chart.series1`    | `--on-chart-series1`    | `chart-series1`    | `#7B72EE` | `#6A61E8` | Categoria colore 1, viola.                                                                            |
| `chart.series2`    | `--on-chart-series2`    | `chart-series2`    | `#E0663F` | `#D9572E` | Categoria colore 2, corallo.                                                                          |
| `chart.series3`    | `--on-chart-series3`    | `chart-series3`    | `#1E9E72` | `#168A62` | Categoria colore 3, ciano; tutti e tre controllati per l'accessibilità/contrasto a colori su #1A1A1A. |
| `chart.emphasis`   | `--on-chart-emphasis`   | `chart-emphasis`   | `#F99E70` | `#D0602A` | enfasi monoserie, periodo attuale.                                                                    |
| `chart.deemphasis` | `--on-chart-deemphasis` | `chart-deemphasis` | `#4A4A4A` | `#CFCFCF` | Singola serie de-emfasi, periodo storico.                                                             |
| `chart.grid`       | `--on-chart-grid`       | `chart-grid`       | `#2C2C2A` | `#EBEBEB` |                                                                                                       |
| `chart.axis`       | `--on-chart-axis`       | `chart-axis`       | `#383838` | `#D6D6D6` |                                                                                                       |

<a id="component-colors"></a>

### Colori dei componenti

| Token di design            | CSS variabile                     | Utilità                      | Scuro                       | Chiaro                      | Uso                                                                                                                                           |
| -------------------------- | --------------------------------- | ---------------------------- | --------------------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `component.searchBg`       | `--on-component-search-bg`        | `component-search-bg`        | `#1C1C1C`                   | `#FFFFFF`                   | Campo di ricerca e fondo di input formativo.                                                                                                  |
| `component.cardHover`      | `--on-component-card-hover`       | `component-card-hover`       | `#1D1D1D`                   | `#FAFAFA`                   | Priorità interattiva del mouse della carta.                                                                                                   |
| `component.toggleTrack`    | `--on-component-toggle-track`     | `component-toggle-track`     | `#333333`                   | `#D9D9D9`                   | Fuori pista da gioco.                                                                                                                         |
| `component.toggleKnob`     | `--on-component-toggle-knob`      | `component-toggle-knob`      | `#BDBDBD`                   | `#FFFFFF`                   | Scendi il pollice.                                                                                                                            |
| `component.toggleKnobOn`   | `--on-component-toggle-knob-on`   | `component-toggle-knob-on`   | `#FFFFFF`                   | —                           | Accosta il pollice.                                                                                                                           |
| `component.tabIndicator`   | `--on-component-tab-indicator`    | `component-tab-indicator`    | `#FFFFFF`                   | `#1A1A1A`                   | Indicatore selezionato-tab.                                                                                                                   |
| `component.navActive`      | `--on-component-nav-active`       | `component-nav-active`       | `#202020`                   | `#E3E3E3`                   | Sfondo di navigazione laterale selezionato.                                                                                                   |
| `component.heroBg`         | `--on-component-hero-bg`          | `component-hero-bg`          | `#0E0E10`                   | `#F4F3FD`                   | Sfondo di carta eroe in primo piano.                                                                                                          |
| `component.captionBg`      | `--on-component-caption-bg`       | `component-caption-bg`       | `rgba(0, 0, 0, 0.55)`       | —                           | Sceneggiatura sotto-sinistra sfondo didascalia; scuro in entrambi i temi, in modo che la didascalia rende nel tema scuro (data-theme='dark'). |
| `component.topNavScrolled` | `--on-component-top-nav-scrolled` | `component-top-nav-scrolled` | `rgba(11, 11, 11, 0.85)`    | `rgba(242, 242, 242, 0.85)` | Sfondo di navigazione: superficie.pagina all'85% con filtro di sfondo: blur(20px).                                                            |
| `component.scrim`          | `--on-component-scrim`            | `component-scrim`            | `rgba(0, 0, 0, 0.50)`       | `rgba(0, 0, 0, 0.30)`       | Dialogo/fondo del foglio.                                                                                                                     |
| `component.lightboxScrim`  | `--on-component-lightbox-scrim`   | `component-lightbox-scrim`   | `rgba(0, 0, 0, 0.88)`       | —                           | Schermata lightbox sfondo; scuro in entrambi i temi, quindi la lightbox rende nel tema scuro (data-theme='dark').                             |
| `component.modalBg`        | `--on-component-modal-bg`         | `component-modal-bg`         | `#171717`                   | `#FFFFFF`                   | Sfondo del pannello di dialogo / foglio.                                                                                                      |
| `component.toastBg`        | `--on-component-toast-bg`         | `component-toast-bg`         | `rgba(44, 44, 44, 0.92)`    | `rgba(255, 255, 255, 0.94)` | Sfondo tostato con fondo-filtro: sfocatura(20px).                                                                                             |
| `component.itemActive`     | `--on-component-item-active`      | `component-item-active`      | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.06)`       | Menù corrente/fondo di voce della frittata.                                                                                                   |
| `component.runningBorder`  | `--on-component-running-border`   | `component-running-border`   | `rgba(255, 115, 86, 0.25)`  | `rgba(238, 85, 51, 0.40)`   | Confine di carta attiva-task, corallo al 25%.                                                                                                 |
| `component.logHeading`     | `--on-component-log-heading`      | `component-log-heading`      | `#E8E8E8`                   | `#1A1A1A`                   | Linee di passo di log che iniziano con ==>.                                                                                                   |
| `component.logSuccess`     | `--on-component-log-success`      | `component-log-success`      | `#7FD88F`                   | `#187733`                   | Linee di log di successo.                                                                                                                     |
| `component.monoText`       | `--on-component-mono-text`        | `component-mono-text`        | `#D0D0D0`                   | `#333333`                   | Testo da tavolo monospazio, come le versioni.                                                                                                 |
| `component.timelineLine`   | `--on-component-timeline-line`    | `component-timeline-line`    | `#333333`                   | `#D6D6D6`                   | Inizio linea timeline, sbiadito attraverso superficie.raised a trasparente.                                                                   |
| `component.timelineDot`    | `--on-component-timeline-dot`     | `component-timeline-dot`     | `#3A3A3A`                   | `#C4C4C4`                   | Dots normali di immissione della linea temporale.                                                                                             |
| `component.sourceMeta`     | `--on-component-source-meta`      | `component-source-meta`      | `#555555`                   | `#B0B0B0`                   | Dots di risorse ausiliarie, come GitHub metadati nelle fonti di rilascio.                                                                     |
| `component.collectionFrom` | `--on-component-collection-from`  | `component-collection-from`  | `#1D1A26`                   | `#F1EEFB`                   | Inizio gradiente della carta di raccolta, 160°.                                                                                               |
| `component.collectionTo`   | `--on-component-collection-to`    | `component-collection-to`    | `#161616`                   | `#FFFFFF`                   | Rilevamento della carta di raccolta fine al 70%.                                                                                              |
| `component.collectionRing` | `--on-component-collection-ring`  | `component-collection-ring`  | `#1B1922`                   | `#F8F7FD`                   | Collezione accatastata-confine.                                                                                                               |
| `component.detailHeaderBg` | `--on-component-detail-header-bg` | `component-detail-header-bg` | `#171717`                   | `#FFFFFF`                   | Dettaglio intestazione sfondo carta sotto bagliore.                                                                                           |
| `component.cliIconFrom`    | `--on-component-cli-icon-from`    | `component-cli-icon-from`    | `#2A2A2A`                   | —                           | Comando-line tile gradiente inizio.                                                                                                           |
| `component.cliIconTo`      | `--on-component-cli-icon-to`      | `component-cli-icon-to`      | `#1B1B1B`                   | —                           | Fine gradiente di piastrelle di linea di comando.                                                                                             |
| `component.cliIconText`    | `--on-component-cli-icon-text`    | `component-cli-icon-text`    | `#E2E2E2`                   | —                           | Testo della piastrella della riga di comando.                                                                                                 |
| `component.letterIconText` | `--on-component-letter-icon-text` | `component-letter-icon-text` | `#FFFFFF`                   | —                           | Testo letterale, decorativo perché i nomi appaiono sempre accanto.                                                                            |
| `component.segmentActive`  | `--on-component-segment-active`   | `component-segment-active`   | `#262626`                   | `#FFFFFF`                   | segmento selezionato di un controllo segmentato.                                                                                              |
| `component.menuBarBg`      | `--on-component-menu-bar-bg`      | `component-menu-bar-bg`      | `rgba(38, 38, 40, 0.96)`    | `rgba(246, 246, 246, 0.96)` | In-app anteprima del macOS menu barra strip.                                                                                                  |
| `component.menuBarText`    | `--on-component-menu-bar-text`    | `component-menu-bar-text`    | `#E6E6E6`                   | `#1F1F1F`                   | Elenco degli elementi di anteprima della barra del menu, disegnati come immagini del modello di AppKit.                                       |

<a id="macos-window-controls"></a>

### macOS comandi finestra

| Token di design  | CSS variabile         | Utilità          | Scuro     | Chiaro | Uso |
| ---------------- | --------------------- | ---------------- | --------- | ------ | --- |
| `macos.close`    | `--on-macos-close`    | `macos-close`    | `#FF5F57` | —      |     |
| `macos.minimize` | `--on-macos-minimize` | `macos-minimize` | `#FEBC2E` | —      |     |
| `macos.zoom`     | `--on-macos-zoom`     | `macos-zoom`     | `#28C840` | —      |     |

<a id="typography"></a>

## Tipografia

Classe `text-{name}` imposta dimensione, altezza linea, peso e tracciamento insieme.

| Nome        | Classe          | Dimensioni / altezza della linea | Peso | Tracciamento      | Uso                                                      |
| ----------- | --------------- | -------------------------------- | ---- | ----------------- | -------------------------------------------------------- |
| `hero`      | `text-hero`     | 76 / 78 px                       | 600  | -0.035.           | Web homepage eroe titolo                                 |
| `section`   | `text-section`  | 46 / 50 px                       | 600  | -0.03e            | Titolo della sezione Web                                 |
| `display`   | `text-display`  | 40 / 44 px                       | 600  | -0.03e            | Intestazione protagonista in primo piano                 |
| `title1`    | `text-title1`   | 28 / 34 px                       | 600  | -0.02e            | Designazione delle merci                                 |
| `title2`    | `text-title2`   | 22 / 28 px                       | 600  | -0.02e            | Titolo Dialog e intestazione compatta dei dettagli       |
| `headline`  | `text-headline` | 16 / 24 px                       | 600  | -0.01e            | Designazione delle merci                                 |
| `statValue` | `text-stat`     | 20 / 26 px                       | 600  | -0.015e           | Valori statistici con numeri proporzionali               |
| `body`      | `text-body`     | 14 / 22 px                       | 400  | 0                 | Testo del corpo                                          |
| `bodySm`    | `text-body-sm`  | 13 / 20 px                       | 400  | 0                 | Elenco e testo del corpo della tabella                   |
| `caption`   | `text-caption`  | 12 / 18 px                       | 400  | 0                 | Informazione secondaria                                  |
| `label`     | `text-label`    | 11 / 16 px                       | 600  | 0.08em, maiuscolo | Etichette di gruppo, come i titoli delle sezioni sidebar |
| `mono`      | `text-mono`     | 12 / 18 px                       | 400  | 0                 | Comandi, versioni e registri                             |

| Famiglia di caratteri | Stack                                                                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sans`                | Inter Variabile, Inter, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif      |
| `sansZh`              | Inter Variabile, Inter, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif      |
| `sansJa`              | Inter Variabile, Inter, Hiragino Sans, Hiragino Kaku gotico ProN, Yu gotico, Noto Sans JP, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif |
| `mono`                | SF Mono, JetBrains Mono, ui-monospace, Menlo, Consolas, Liberation Mono, monospazio                                                                      |

<a id="spacing"></a>

## Spaziatura

| Nome  | CSS variabile    | Valore | Uso |
| ----- | ---------------- | ------ | --- |
| `0`   | `--on-space-0`   | 0p.    |     |
| `1`   | `--on-space-1`   | 4px    |     |
| `2`   | `--on-space-2`   | 8px    |     |
| `3`   | `--on-space-3`   | 12px   |     |
| `4`   | `--on-space-4`   | 16px   |     |
| `5`   | `--on-space-5`   | 20px   |     |
| `6`   | `--on-space-6`   | 24px   |     |
| `7`   | `--on-space-7`   | 28px   |     |
| `8`   | `--on-space-8`   | 32px   |     |
| `10`  | `--on-space-10`  | 40px   |     |
| `12`  | `--on-space-12`  | 48px   |     |
| `16`  | `--on-space-16`  | 64px   |     |
| `20`  | `--on-space-20`  | 80px   |     |
| `0-5` | `--on-space-0-5` | 2p.    |     |
| `1-5` | `--on-space-1-5` | 6px    |     |
| `2-5` | `--on-space-2-5` | 10px   |     |
| `3-5` | `--on-space-3-5` | 14px   |     |

<a id="radius"></a>

## Raggio

| Nome               | CSS variabile          | Valore | Uso                                                                               |
| ------------------ | ---------------------- | ------ | --------------------------------------------------------------------------------- |
| `rounded-tiny`     | `--on-radius-tiny`     | 4px    |                                                                                   |
| `rounded-small`    | `--on-radius-small`    | 7px    |                                                                                   |
| `rounded-default`  | `--on-radius-default`  | 10px   |                                                                                   |
| `rounded-panel`    | `--on-radius-panel`    | 12px   | Carte da schermate, menu, overlays.                                               |
| `rounded-big`      | `--on-radius-big`      | 14px   |                                                                                   |
| `rounded-huge`     | `--on-radius-huge`     | 20px   |                                                                                   |
| `rounded-xl`       | `--on-radius-xl`       | 28px   |                                                                                   |
| `rounded-full`     | `--on-radius-full`     | 9999px |                                                                                   |
| `rounded-app-icon` | `--on-radius-app-icon` | 23%    | App raggio icona: 23% della lunghezza laterale, approssimando macOS superellisse. |

<a id="shadows"></a>

## Ombre

| Nome                | Scuro                                                                        | Chiaro                                                                 | Uso                                                                                                 |
| ------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `shadow-window`     | `0 50px 140px rgba(0, 0, 0, 0.65), 0 0 0 0.5px #000000`                      | `0 40px 100px rgba(0, 0, 0, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.16)`    |                                                                                                     |
| `shadow-popover`    | `0 24px 60px rgba(0, 0, 0, 0.60)`                                            | `0 12px 40px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04)`       |                                                                                                     |
| `shadow-modal`      | `0 30px 80px rgba(0, 0, 0, 0.60)`                                            | `0 24px 64px rgba(0, 0, 0, 0.16)`                                      |                                                                                                     |
| `shadow-toast`      | `0 18px 40px rgba(0, 0, 0, 0.50)`                                            | `0 10px 30px rgba(0, 0, 0, 0.12)`                                      |                                                                                                     |
| `shadow-float-icon` | `0 18px 30px rgba(0, 0, 0, 0.55)`                                            | `0 14px 28px rgba(0, 0, 0, 0.16)`                                      |                                                                                                     |
| `shadow-app-icon`   | `inset 0 0 0 0.5px rgba(255, 255, 255, 0.14), 0 1px 2px rgba(0, 0, 0, 0.40)` | `inset 0 0 0 0.5px rgba(0, 0, 0, 0.10), 0 1px 2px rgba(0, 0, 0, 0.12)` |                                                                                                     |
| `shadow-icon-text`  | `0 1px 2px rgba(0, 0, 0, 0.30)`                                              | —                                                                      | Letter-tile ombra preserva la leggibilità su sfondi leggeri.                                        |
| `shadow-focus-ring` | `0 0 0 2px #131313, 0 0 0 4px #FF7356`                                       | `0 0 0 2px #FFFFFF, 0 0 0 4px #EE5533`                                 | Tastiera di messa a fuoco anello: 2 px gap più 2 px corallo (3.5:1 contro bianco in modalità luce). |
| `shadow-segment`    | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.10), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | Sollevamento segmento selezionato; nessuno (un'ombra trasparente) in modalità scuro.                |
| `shadow-knob`       | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.22), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | Sollevamento manopola di manovra; la manopola bianca ne ha bisogno sulla pista leggera.             |

<a id="motion"></a>

## Mozione

| Nome              | Valore                           |
| ----------------- | -------------------------------- |
| `duration-fast`   | 120 m                            |
| `duration-base`   | 200 m                            |
| `duration-slow`   | 320 ms                           |
| `ease-standard`   | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)`     |
| `ease-exit`       | `cubic-bezier(0.4, 0, 1, 1)`     |

<a id="z-index"></a>

## Z-index

| Nome         | Valore |
| ------------ | ------ |
| `z-base`     | 0      |
| `z-sticky`   | 10     |
| `z-dropdown` | 100    |
| `z-overlay`  | 200    |
| `z-modal`    | 300    |
| `z-popover`  | 400    |
| `z-toast`    | 500    |
| `z-tooltip`  | 600    |

<a id="layout"></a>

## Telaio

| Token di design                      | Valore                                               |
| ------------------------------------ | ---------------------------------------------------- |
| `layout.desktop.windowDefaultWidth`  | 1280px                                               |
| `layout.desktop.windowDefaultHeight` | 820px                                                |
| `layout.desktop.windowMinWidth`      | 1100px                                               |
| `layout.desktop.windowMinHeight`     | 700px                                                |
| `layout.desktop.sidebarWidth`        | 224px                                                |
| `layout.desktop.toolbarHeight`       | 52px                                                 |
| `layout.desktop.railWidth`           | 288px                                                |
| `layout.desktop.contentPaddingX`     | 28px                                                 |
| `layout.desktop.railPadding`         | 20px                                                 |
| `layout.desktop.trafficLightInset`   | x 18px, y 22px                                       |
| `layout.web.pageMaxWidth`            | 1240px                                               |
| `layout.web.pageGutter`              | 24px                                                 |
| `layout.web.navHeight`               | 64px                                                 |
| `layout.web.breakpoints`             | sm 640px, md 768px, lg 1024px, xl 1280px, 2xl 1440px |

<a id="effects"></a>

## Effetti

| Token di design     | Scuro                                                                                                                                                             | Chiaro                | Uso                                                                                                                                                                                                |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `heroGlow`          | `radial-gradient(circle, rgba(205, 205, 255, 0.95) 0%, rgba(135, 135, 245, 0.78) 14%, rgba(92, 92, 220, 0.50) 32%, rgba(64, 64, 190, 0.20) 52%, transparent 70%)` | —                     | In primo piano eroe viola bagliore.                                                                                                                                                                |
| `coverGlow`         | `radial-gradient(circle, rgba(170, 170, 255, 0.55) 0%, rgba(110, 110, 235, 0.35) 16%, rgba(80, 80, 214, 0.18) 34%, rgba(60, 60, 180, 0.06) 52%, transparent 66%)` | —                     | Più morbido grande luce di web-hero.                                                                                                                                                               |
| `ring.stroke`       | `rgba(255, 255, 255, 0.13)`                                                                                                                                       | `rgba(0, 0, 0, 0.10)` |                                                                                                                                                                                                    |
| `ring.dasharray`    | `2 6`                                                                                                                                                             | —                     |                                                                                                                                                                                                    |
| `detailGlow`        | `radial-gradient(closest-side, {accent}73, {accent}2E 55%, transparent)`                                                                                          | —                     | Luce superiore di dettaglio-capo; {accent} è l'accento del pacchettoColore (default #3C96F5); 73/2E sono valori alfa esadecimali.                                                                  |
| `backdropBlur`      | `20`                                                                                                                                                              | —                     |                                                                                                                                                                                                    |
| `accentGlowOpacity` | `1`                                                                                                                                                               | `0.5`                 | Opacità di guanti costruiti da un colore di accento di pacchetto (intestazione di dettaglio, bagliore di eroe personalizzato); accenti saturati hanno bisogno di ammorbidimento su sfondi di luce. |
