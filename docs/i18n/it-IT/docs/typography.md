[English](../../../typography.md) · [简体中文](../../zh-CN/docs/typography.md) · [繁體中文](../../zh-Hant/docs/typography.md) · [日本語](../../ja-JP/docs/typography.md) · [Español](../../es-ES/docs/typography.md) · [Português (Brasil)](../../pt-BR/docs/typography.md) · [Русский](../../ru-RU/docs/typography.md) · [Deutsch](../../de-DE/docs/typography.md) · [Français](../../fr-FR/docs/typography.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="typography"></a>

# Tipografia

<a id="typeface"></a>

## Tipologia

Le app utilizzano **sistema UI font** — SF Pro su piattaforme Apple, Segoe UI su Windows — attraverso
`@opennavo/design-vue/system-fonts.css`, con i volti CJK della piattaforma per cinesi e giapponesi:

| Lingua                                                   | Stack (system-fonts.css)                                                          |
| -------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Latino, Cirillico                                        | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`                       |
| Cinese semplificato (`:lang(zh)`)                        | `-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif` |
| Cinese tradizionale (`:lang(zh-Hant)`, `zh-TW`, `zh-HK`) | `… 'PingFang TC', 'Microsoft JhengHei', sans-serif`                               |
| Giapponese (`:lang(ja)`)                                 | `… 'Hiragino Sans', 'Yu Gothic', sans-serif`                                      |
| Codice, versioni, percorsi                               | `ui-monospace, 'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace`   |

Il font di sistema corrisponde al sistema operativo, non costa download e rende il CJK migliore.
(`font.family.*`, che iniziano con Inter) sono i **pila di marca** per i luoghi in cui il font del sistema non è disponibile
o non voluto: immagini di condivisione generate, opere d'arte di marketing, e la galleria dei componenti. `lang` su `<html>` (e)
qualsiasi elemento in un'altra lingua) quindi lo stack giusto si applica.

Inter, quando usato, corre con `font-feature-settings: "cv11", "ss01"` (single-storey a, numeri alternativi) e
`font-optical-sizing: auto`; `base.css` imposta entrambi.

<a id="scale"></a>

## Scala

`text-{name}` imposta le dimensioni, l'altezza della linea, il peso e il monitoraggio insieme.
ad eccezione delle dimensioni dense elencate sotto Small text .

| Classe          | Dimensioni / altezza della linea | Peso | Tracciamento      | Uso                                                              |
| --------------- | -------------------------------- | ---- | ----------------- | ---------------------------------------------------------------- |
| `text-hero`     | 76 / 78                          | 600  | -0.035.           | Sito web home eroe solo                                          |
| `text-section`  | 46 / 50                          | 600  | -0.03e            | Intestazioni delle sezioni del sito                              |
| `text-display`  | 40 / 44                          | 600  | -0.03e            | Intestazioni di eroe caratteristica                              |
| `text-title1`   | 28 / 34                          | 600  | -0.02e            | Titoli di pagina                                                 |
| `text-title2`   | 22 / 28                          | 600  | -0.02e            | Titoli di dialogo, intestazioni di dettaglio compatte            |
| `text-headline` | 16 / 24                          | 600  | -0,01e            | Titoli di sezione, titoli di carta                               |
| `text-stat`     | 20 / 26                          | 600  | -0.015e           | Valori statistici                                                |
| `text-body`     | 14 / 22                          | 400  | 0                 | Testo del corpo                                                  |
| `text-body-sm`  | 13 / 20                          | 400  | 0                 | Liste, tabelle, righe delle impostazioni                         |
| `text-caption`  | 12 / 18                          | 400  | 0                 | Informazione secondaria                                          |
| `text-label`    | 11 / 16                          | 600  | 0.08em, maiuscolo | Etichette di gruppo (sezioni della barra laterale, sopracciglia) |
| `text-mono`     | 12 / 18                          | 400  | 0                 | Comandi, versioni, log                                           |

Su schermi ristretti le voci scendono giù la scala piuttosto che restringere liberamente: l'eroe domestico è `text-display` Di seguito
768 px, `text-section` da 768 px e `text-hero` a partire da 1024 px; le voci aerodinamiche scendono a 36 px inferiori a 768 px. App
le finestre non vanno mai al di sotto della loro larghezza minima, quindi il testo dell'app non scala.

<a id="small-text"></a>

### Piccolo testo

Dense desktop UI utilizza alcuni formati intermedi, sempre con gettoni per colore: 12,5 px per controlli compatti e tavolo
celle, 11,5 px per metadati sotto una riga, 10.5 px per minuscoli badge. Niente più piccolo di 10.5 px, e niente di più sotto
12 px contiene informazioni essenziali.

<a id="rules"></a>

## Regole

- **Numeri:** uso `tabular-nums` dove i numeri si allineano o cambiano in luogo (statistica, tabelle, progresso,
  contatori, monitor). Formattazione numeri, dimensioni e date per la locale ([Contenuto](content.md)).
- **Peso:** 400 per testo, 500 per i controlli e le etichette segmentate, 600 per le voci, le etichette a bottone e l'enfasi.
  700+ nell'interfaccia.
- **Emphasis:** grassetto (600) all'interno di una frase, mai colore da solo. `**…**` e
  rendering come `text-ink-primary` peso 600 all'interno testo secondario.
- **Valigia superiore** solo attraverso `text-label`, e solo per latino e cirillico; le etichette CJK non sono trasformate.
- **Lunghezza della linea:** mantenere il testo del corpo sotto circa 72 caratteri (o 40 caratteri CJK) per linea; descrizioni in eroi
  sono bloccati intorno a 430 px.
- **Rubriche: Dimensions, Gli uccelli, Fiori** bilanciare le loro linee (`text-wrap: balance`) sulle pagine di marketing; le voci CJK si rompono a punteggiatura, non
  metà parola, dove il browser permette.
- **Truncation:** troncare le etichette a linea singola con un ellisse e esporre il testo completo in una punta di strumenti o `title`;
  mai troncare numeri o status.
- **CJK spacing:** copia mette uno spazio a metà larghezza tra CJK e lettere latine o cifre ("近 30 天",
  "下载约 768 MB") e nessuno accanto alla punteggiatura a tutta la larghezza. `text-autospace: normal` in `base.css` solo riempie un gap il
  copia mancata; non sostituisce mai lo spazio nel testo sorgente.
