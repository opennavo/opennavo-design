[English](../../../color.md) · [简体中文](../../zh-CN/docs/color.md) · [繁體中文](../../zh-Hant/docs/color.md) · [日本語](../../ja-JP/docs/color.md) · [Español](../../es-ES/docs/color.md) · [Português (Brasil)](../../pt-BR/docs/color.md) · [Русский](../../ru-RU/docs/color.md) · [Deutsch](../../de-DE/docs/color.md) · [Français](../../fr-FR/docs/color.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="color"></a>

# Colore

Ogni token di colore ha un valore scuro (il valore predefinito) e, dove differisce, un valore leggero;
il [token riferimento](reference/tokens.md) elenca ogni uno. Questa pagina spiega i ruoli, che è quello che devi
scegliere il token giusto. [Theming](theming.md).

<a id="how-the-two-themes-differ"></a>

## Come differiscono i due temi

- **Scuro** passi superfici in su nella leggerezza: pagina `#0B0B0B` → base di base `#131313` → carta `#1A1A1A` → allevato `#262626`.
  Elevation legge come "più leggero".
- **Chiaro** mantiene lo stesso ordine ma non può andare più bianco del bianco: pagina `#F2F2F2` → base di base `#F8F8F8` → carta `#FFFFFF`.
  Pannelli elevati sono bianchi con un bordo e un'ombra morbida; riempie all'interno di carte bianche (`cardAlt`, `raised`, `chip`)
  sono grigi, quindi leggono come recesso.
- I bordi sono bianchi traslucidi in modo scuro e nero traslucido in modalità luce, a forza simile.
- I colori del marchio e dello stato sono più profondi in modalità leggera, quindi il testo mantiene 4.5:1 su bianco.

Non scegliere mai un colore per occhio da uno screenshot di un tema. Scegli il ruolo; il token porta entrambi i valori.

<a id="surfaces"></a>

## Superfici

| Token di design   | Role                            | Utilizzare per                                                                                                    | Non usare per                                      |
| ----------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| `surface.page`    | Sfondo esterno                  | Corpo del sito, barra di navigazione superiore, area dietro finestre galleggianti                                 | Aree di contenuto all'interno della shell dell'app |
| `surface.base`    | Sfondo dei contenuti principali | La colonna dei contenuti della shell app, sfondo della finestra                                                   | Riquadri                                           |
| `surface.sidebar` | Barra laterale                  | La colonna di navigazione sinistra                                                                                | Qualsiasi altra cosa                               |
| `surface.rail`    | Rullo destro                    | Le statistiche opzionali si spostano su ampie finestre                                                            | —                                                  |
| `surface.card`    | Carte e pannelli                | Carte, elenco contenitori, gruppi di impostazioni, popover menu                                                   | Pannelli galleggianti su contenuto (uso `popover`) |
| `surface.cardAlt` | All'interno di una carta        | Ingressi, blocchi secondari, evidenziazione della riga della tabella, scatole di avviso all'interno di una scheda | Sfondi a livello di pagina                         |
| `surface.raised`  | Foro e piccoli riempimenti      | Sfondi Hover, pagina corrente in impaginazione, icone piastrelle, `⌘K` suggerimenti                               | Pannelli galleggianti; segmenti selezionati        |
| `surface.chip`    | Tassi neutri                    | Chips neutro, accenni tastiera, piccoli tag                                                                       | Pulsanti (uso `button.secondary*`)                 |
| `surface.control` | Controlli                       | Ingressi di testo e seleziona nelle impostazioni, tooltips                                                        | Grandi aree                                        |
| `surface.inset`   | Pozzi                           | Blocchi di codice, registri, tracce di controllo segmentato, tracce di progresso                                  | Pulsanti                                           |
| `surface.overlay` | Sovrapposizione traslucida      | Menù e tavolozza di comando, con un blur di sfondo 20 px                                                          | Pannelli Opaque                                    |
| `surface.popover` | Pannello di galleggiamento      | Carte di consenso e suggerimento, popover demo — qualsiasi cosa che galleggia sul contenuto con `shadow.popover`  | Contenuto in linea                                 |

Le superfici specifiche dei componenti vivono in `component.*`: `modalBg` (dialogo e fogli), `searchBg` (campi di ricerca e forma
ingressi su pagine), `navActive` (elemento barra laterale selezionato), `segmentActive` (seletto segmento) `heroBg` (eroe di temperatura),
`detailHeaderBg`, `toastBg`, `scrim` (dietro finestre di dialogo), `lightboxScrim` (image viewer, dark in entrambi i temi, così il
Visualizzatore renders nel tema scuro: [Theming › Sottotitoli](theming.md#subtrees)), `menuBarBg` / `menuBarText` (un inapp)
anteprima della macOS barra dei menu).

<a id="text"></a>

## Testo

| Token di design  | Uso                                                                 | Scuro              | Chiaro             |
| ---------------- | ------------------------------------------------------------------- | ------------------ | ------------------ |
| `text.primary`   | Rubriche: Dimensions, Animali domestici, Gatti                      | 14.9:1 sulla carta | 17.4:1 sulla carta |
| `text.secondary` | Testo del corpo, descrizioni                                        | 7.3:1              | 7.2:1              |
| `text.tertiary`  | Etichette, metadati, timestamp, suggerimenti                        | 5.4:1              | 5.3:1              |
| `text.disabled`  | Solo testo disabile e puramente decorativo                          | —                  | —                  |
| `text.accent`    | Testo del corallo: link, chip di corallo, azioni inline enfatizzate | 6.5:1              | 5.7:1              |
| `text.inverse`   | Testo e icone su forti riempimenti (status, corallo, salmone)       | buio buio scuro    | bianco             |
| `text.onAccent`  | Testo sui pulsanti coralli e sui distintivi coralli                 | 7.2:1 su corallo   | 5.5:1 su corallo   |

Regole:

- Utilizzare al massimo tre livelli di testo in un unico componente. Terziario è il pavimento per qualsiasi cosa un utente deve leggere.
- `text.disabled` mai trasporta informazioni: un controllo disabile deve ancora dire perché è disabilitato nelle vicinanze.
- **`brand.coral` è un riempimento, non un colore di testo.** Su bianco è 3.5:1. Il testo corallo utilizza `text.accent`.
- Mai messo `text.tertiary` su `surface.chip` o `surface.raised` per testo lungo; uso `text.secondary` Ecco.

<a id="borders"></a>

## Borse

`border.subtle` per bordi e divisori di carta, `border.default` per ingressi, pulsanti fantasma e finestre,
`border.strong` per l'hover. `border.sidebar` separa la barra laterale. I pannelli di stato utilizzano l'abbinamento
`status.*Border` con loro `status.*Subtle` Riempi.

<a id="brand"></a>

## Marca

| Token di design                                | Uso                                                                                                                                                            |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `brand.coral`                                  | L'accento del marchio come un riempimento o grafica: il pulsante accento, il progresso, le regolazioni che sono, l'anello di messa a fuoco, i puntini piccoli. |
| `brand.salmon`                                 | Testo di enfasi caldo: sezione sopracciglia, la seconda linea di un eroe, "aggiornamento disponibili" distintivi.                                              |
| `brand.violet`                                 | Il bagliore dell'eroe. Anche mescolato in sfondi icona stagnata su pagine di marketing.                                                                        |
| `brand.logoGradient`, `brand.logoCoreGradient` | Il segno del logo è solo il gradiente del nucleo passa all'ambra su sfondi leggeri.                                                                            |

Tinte di accento: `accent.coralSubtle` (percorsi di progresso, chip di corallo) e `accent.salmonSubtle` Testo in corso
loro usa `text.accent` e `brand.salmon`.

Utilizzare il corallo con parsimonia: un pulsante di accento per vista, e non corallo per errori (cioè `status.danger`).

<a id="status"></a>

## Stato

| Famiglia  | Mezzi di trasporto                                                                             | Uso tipico                                                           |
| --------- | ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `success` | Fatto, installato, sano, attuale                                                               | badge installati, banner "tutto è normale", linee di log di successo |
| `warning` | Ha bisogno di attenzione, ha bisogno di autorizzazione dell'amministratore, risultato parziale | Oggetti saltati, consigli di amministrazione, chip "necess confirm"  |
| `danger`  | Ingannato, deprecato, distruttivo                                                              | Stati falliti, pulsanti di pericolo, minacce trovate                 |
| `info`    | Informazioni neutre, applicazioni auto-updating, link in documenti                             | Info note, chip "auto-updates"                                       |

Ogni famiglia ha il colore solido (testo, icone, punti), `*Subtle` (10% sfondi tinti) e `*Border` (pannello colorato)
bordi). Abbina colore con un'icona o una parola — lo stato non viene mai comunicato dal solo colore.

<a id="buttons"></a>

## Pulsanti

| Variante   | Token di design                                               | Uso                                                                                                |
| ---------- | ------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Primario   | `button.primary*` — quasi bianco su scuro, quasi nero su luce | L'azione principale di una vista. Una per regione.                                                 |
| Secondario | `button.secondary*`                                           | Altre azioni. La variante predefinita.                                                             |
| Accent     | `button.accent*` (corale, testo scuro)                        | Un momento di marca: l'eroe chiama all'azione, "Aggiorna tutto". Raramente più di uno per schermo. |
| Fantasma   | trasparente, `border.default`                                 | Azioni terziarie nelle barre degli strumenti e file dense.                                         |
| Pericolo   | `status.dangerSubtle` + `status.danger`                       | Azioni distruttive. Mai il pulsante predefinito di una finestra di dialogo.                        |
| Disabili   | `button.disabled*`                                            | Controlli inattivi di qualsiasi variante.                                                          |

<a id="charts"></a>

## Carte

`chart.series1` (viola) `chart.series2` (coral) `chart.series3` (verde) sono i colori categorici, scelti per rimanere
distinguibile per le carenze di colore-visione comuni; usarli in quella serie di ordine e di etichetta direttamente quando là
sono più di due. I grafici a serie singola usano `chart.emphasis` per il valore attuale e `chart.deemphasis` per la storia.
`chart.grid` e `chart.axis` le opinioni di monitoraggio possono anche utilizzare i colori di stato e di informazione per il significato
(avviso di temperatura, rete in giù/in su).

<a id="contrast"></a>

## Contrasto

Misurato con WCAG 2.2 formula; `packages/tokens/tests` fallisce la costruzione se una coppia scende al di sotto del suo obiettivo.

| Coppia                        | Obiettivo | Dark (base / card / sollevato) | Luce (base / carta / sollevato) |
| ----------------------------- | --------- | ------------------------------ | ------------------------------- |
| `text.primary`                | 4.5       | 15.9 / 14.9 / 12.9             | 16.4 / 17.4 / 14.9              |
| `text.secondary`              | 4.5       | 7.8 / 7.3 / 6.4                | 6.8 / 7.2 / 6.2                 |
| `text.tertiary`               | 4.5       | 5.7 / 5.4 / 4.7                | 5.0 / 5.3 / 4.6                 |
| `text.accent`                 | 4.5       | 6.9 / 6.5 / 5.6                | 5.4 / 5.7 / 4.9                 |
| `brand.salmon`                | 4.5       | 9.0 / 8.4 / 7.3                | 5.4 / 5.7 / 4.9                 |
| `status.success`              | 4.5       | 9.2 / 8.6 / 7.5                | 5.3 / 5.6 / 4.8                 |
| `status.warning`              | 4.5       | 10.1 / 9.5 / 8.2               | 5.3 / 5.6 / 4.8                 |
| `status.danger`               | 4.5       | 6.1 / 5.7 / 5.0                | 5.4 / 5.7 / 4.9                 |
| `status.info`                 | 4.5       | 7.3 / 6.8 / 5.9                | 5.3 / 5.6 / 4.8                 |
| `brand.coral` come un grafico | 3.0       | 6.9 / 6.5 / 5.6                | 3.3 / 3.5 / 3.0                 |

I test coprono anche lo stato e il testo accento sui loro sfondi stagnati (sotto base, carta e cardAlt), ogni pulsante
stato, testo su corallo, la mattonella terminale e testo monospazio in pozzi.

<a id="do-and-dont"></a>

## Fai e non farlo.

- Dotazione `bg-surface-popover shadow-popover border border-line-default` per una carta galleggiante; non riutilizzare
  `surface.raised` — in modalità luce è grigio.
- Fare mescolare le tinte traslucide da gettoni (`color-mix(in srgb, var(--on-status-success) 14%, transparent)`) quando un
  marketing glow ha bisogno di una tonalità; non scrivere esagonali o valori rgba in componenti.
- Controllare entrambi i temi prima di unire l'interfaccia utente; la galleria e l'applicazione entrambi passare con un'impostazione.
