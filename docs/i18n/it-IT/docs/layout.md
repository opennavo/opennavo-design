[English](../../../layout.md) · [简体中文](../../zh-CN/docs/layout.md) · [繁體中文](../../zh-Hant/docs/layout.md) · [日本語](../../ja-JP/docs/layout.md) · [Español](../../es-ES/docs/layout.md) · [Português (Brasil)](../../pt-BR/docs/layout.md) · [Русский](../../ru-RU/docs/layout.md) · [Deutsch](../../de-DE/docs/layout.md) · [Français](../../fr-FR/docs/layout.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="layout"></a>

# Telaio

<a id="spacing"></a>

## Spaziatura

Una scala basata su 4 px (`space.*`, anche il UnoCSS/Tailwind spaziatura utilizzata nei componenti):

| Passo | 0   | 0.5 | 1   | 1.5 | 2   | 2.5 | 3   | 3.5 | 4   | 5   | 6   | 7   | 8   | 10  | 12  | 16  | 20  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| P.    | 0   | 2   | 4   | 6   | 8   | 10  | 12  | 14  | 16  | 20  | 24  | 28  | 32  | 40  | 48  | 64  | 80  |

Tipico ritmo:

- 4-8 tra un'icona e la sua etichetta, chip di fila, un titolo e il suo sottotitolo.
- 10–14 all'interno di file dense e tra i controlli in una barra degli strumenti (le voci toolbar siedono 14 a parte).
- Imbottitura da 16 a 20 carte (20 nella rotaia), 22 tra le sezioni ferroviarie.
- 24–28 tra le sezioni di pagina; 28 è il contenuto desktop gutter.
- 40–80 tra le sezioni del sito web.

<a id="radius"></a>

## Raggio

| Classe             | P.  | Uso                                                             |
| ------------------ | --- | --------------------------------------------------------------- |
| `rounded-tiny`     | 4   | Suggerimenti tastiera, minuscole etichette, codice in linea     |
| `rounded-small`    | 7   | Chips, ingressi in file dense, segmenti, menu                   |
| `rounded-default`  | 10  | Pulsanti, ingressi, avvisi, piccole carte                       |
| `rounded-panel`    | 12  | Menu, popover, screenshot, elenco contenitori                   |
| `rounded-big`      | 14  | Riquadri                                                        |
| `rounded-huge`     | 20  | Dialogi, fogli, caratteristiche eroi, intestazioni di dettaglio |
| `rounded-xl`       | 28  | Grandi pannelli di marketing                                    |
| `rounded-full`     | —   | Pillole, avatar, toggles, dots                                  |
| `rounded-app-icon` | 23% | Piastrelle icone dell'app (approssima le macOS Squircle)        |

Gli angoli nidi si restringono: un elemento all'interno di un contenitore imbottito utilizza il raggio più piccolo successivo.

<a id="elevation"></a>

## Elevazione

L'elevazione è il colore più l'ombra, mai l'ombra da sola:

| Livello | Superficie                                               | Ombra            | Esempi                                                    |
| ------- | -------------------------------------------------------- | ---------------- | --------------------------------------------------------- |
| 0       | `surface.base`                                           | —                | Contenuto della finestra                                  |
| 1       | `surface.card` + `border.subtle`                         | —                | Carte, liste, gruppi di impostazioni                      |
| 2       | `surface.popover` / `surface.overlay` + `border.default` | `shadow.popover` | Menù, puntali, avvisi galleggianti, tavolozza dei comandi |
| 3       | `component.modalBg` + `border.default`                   | `shadow.modal`   | Dialogs, fogli                                            |
| —       | `component.toastBg`                                      | `shadow.toast`   | Toasts                                                    |
| —       | —                                                        | `shadow.window`  | Cornici finestra in screenshot e mockup di marketing      |

Le ombre sono pesanti e nere in modalità oscura, morbide in modalità leggera; i gettoni portano entrambi.
è dietro di loro (`effect.backdropBlur`, 20 px).

<a id="layers"></a>

## Datori di lavoro

| `z-*`      | Valore | Uso                                                                       |
| ---------- | ------ | ------------------------------------------------------------------------- |
| `base`     | 0      | Contenuto                                                                 |
| `sticky`   | 10     | Barra degli strumenti appiccicose, barre laterali, intestazioni da tavolo |
| `dropdown` | 100    | Menù, sovrapposizione a binario                                           |
| `overlay`  | 200    | Scrims                                                                    |
| `modal`    | 300    | Dialogi, fogli, lightbox                                                  |
| `popover`  | 400    | Popovers sopra le finestre di dialogo                                     |
| `toast`    | 500    | Toasts                                                                    |
| `tooltip`  | 600    | Taglie di trasmissione                                                    |

<a id="the-app-shell"></a>

## Il guscio dell'app

Finestra Desktop (Tauri) — `OnAppShell` in modalità contenitore:

```
┌──────────┬──────────────────────────────────────────────┬──────────┐
│ ● ● ●    │ toolbar · 52 px · back/forward · ⌘K search    │          │
│          ├──────────────────────────────────────────────┤  rail    │
│ sidebar  │ main · scrolls · 28 px gutters                │  288 px  │
│ 224 px   │                                              │ optional │
│          │                                              │          │
└──────────┴──────────────────────────────────────────────┴──────────┘
```

- Finestra di default 1280 × 820, minimo 1100 × 700. Semaforo inset 18 × 22 sulla barra laterale (barra del titolo di sovrapposizione);
  la barra degli strumenti e la barra laterale vuota sono regioni di trascinamento della finestra.
- Barra laterale: marca, navigazione raggruppata (`text-label` titoli di gruppo, 13.5 px elementi), impostazioni pinned al fondo.
  Le etichette hanno circa 152 px; le traduzioni devono adattarsi ([Contenuto](content.md)).
- Ferrovia: solo su pagine che ne hanno una, attraccate a 1240 px e più ampie, altrimenti aperte dalla barra degli strumenti come sovrapposizione.
- Contenuto principale: `px-28px pb-28px`, sezioni 24–28 a parte, intestazione pagina (`text-title1` + una linea di `text-body-sm`
  testo secondario) in alto.

Sito web — `OnAppShell` in modalità documento per le pagine del negozio, un layout di atterraggio a tutta larghezza per le pagine di marketing:

- Larghezza pagina 1240 max con 24 px grondaie; navigazione superiore 64 px; breakpoints `sm` 640, `md` 768, `lg` 1024, `xl` 1280,
  `2xl` 1440.
- Riutilizzare le pagine del desktop: la barra laterale e la barra degli strumenti sono appiccicose da `md`; `md` una barra compatta con un menu
  sostituisce entrambi; la rotaia siede accanto al contenuto da `xl` e sotto di esso altrimenti.
- Pagine di marketing: a pieno sangue `surface.page`, sezioni incentrate, mock app windows utilizzando gli stessi gettoni dell'app.

<a id="grids"></a>

## Griglia

- Le griglie di carta riempiono le colonne di almeno 260 px con 12 spalline di px (`grid-cols-[repeat(auto-fill,minmax(260px,1fr))]`Tre.
  in una finestra desktop completa, meno come si restringe. Griglie app Denser all'interno di una pagina con un uso ferroviario 220 px.
- Piastrelle statistiche: 2 colonne nella rotaia, fino a 5 in una pagina di dettaglio.
- Impostazioni: una colonna 720 px di `OnCard` gruppi con righe (label + suggerimento a sinistra, controllo a destra); sezione navigazione sulla
  a sinistra a 180 px.
- Forme sul web: una singola colonna di 720 px; etichette sopra i campi.

<a id="density"></a>

## Densità

UI Desktop è denso ma non crampo: 32–40 px righe in liste, 28–34 px controlli, 13–13.5 px testo.
web sono almeno 32 px (44 px per azioni mobili primarie).
