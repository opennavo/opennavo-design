[English](../../../components.md) · [简体中文](../../zh-CN/docs/components.md) · [繁體中文](../../zh-Hant/docs/components.md) · [日本語](../../ja-JP/docs/components.md) · [Español](../../es-ES/docs/components.md) · [Português (Brasil)](../../pt-BR/docs/components.md) · [Русский](../../ru-RU/docs/components.md) · [Deutsch](../../de-DE/docs/components.md) · [Français](../../fr-FR/docs/components.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="components"></a>

# Componenti

Riferimento per ogni componente in [`@opennavo/design-vue`](../../../../packages/vue): per cosa, per i suoi oggetti, per gli eventi e
slot (come dichiarato nella fonte), varianti, quando usarlo, e come si comporta per la tastiera e la tecnologia assistiva.
Come i componenti si combinano negli schermi è in [Modelli](patterns.md); la galleria (`pnpm gallery`) mostra ogni
variante in entrambi i temi e tutte le dieci lingue. App che non utilizzano Vue seguire la stessa anatomia, dimensioni e stati
con i gettoni direttamente ([Piattaforme](platforms.md)).

Convenzioni:

- **Predefinito** `—` significa che il prop è facoltativo e non impostato; i prop booleani senza un default elencato sono `false`.
- Le stringhe integrate ("Close", "Pagination", "Search" ...) provengono dal catalogo dei messaggi del pacchetto nel locale
  dato a `createOnUi({ locale })` (Altrimenti in inglese). Props nominato `label`, `placeholder`, `title`,
  `description`, `…Label` Li sovrintende.
- **Icone** sono Lucide nomi (i)`search`, `lucide:search`) o `prefix:name` di un insieme aggiunto con `registerIcons`.
- **Links:** componenti che rendono i collegamenti prendono `linkAs` (`'a'` per impostazione predefinita, o `RouterLink` / `NuxtLink`). Con un
  componente router l'URL viene passato come `to`; i componenti non leggono mai la rotta corrente — pass `active`,
  `modelValue` o `page` Da solo.
- **Anello a fuoco:** ogni parte interattiva mostra `shadow-focus-ring` su `:focus-visible`. Overlays spostare la concentrazione con
  `moveFocus`, che anelli script focus solo dopo la navigazione della tastiera (WebKit altrimenti suonerebbe su qualsiasi
  focus programmatico).
- Colori, radii e tipo provengono da `@opennavo/design-tokens`; nulla qui codici duri un colore, così sia i temi e un
  l'accento re-branded si applica automaticamente.

**Gruppi:** [Azioni e ingressi](#actions-and-inputs) · [Contenitori e dati](#containers-and-data) ·
[Stati](#states) · [Sovrapposizioni](#overlays) · [Telaio e navigazione](#layout-and-navigation) ·
[Vetrina](#showcase)

---

<a id="actions-and-inputs"></a>

## Azioni e ingressi

<a id="onbutton"></a>

### OnButton

Il pulsante standard, o un link che sembra uno.

| Prop            | Tipologia                                                     | Predefinito   | Designazione                                                                                |
| --------------- | ------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------- |
| `variant`       | `'primary' \| 'secondary' \| 'accent' \| 'ghost' \| 'danger'` | `'secondary'` | Peso visivo; vedi Varianti.                                                                 |
| `size`          | `'xs' \| 'sm' \| 'md' \| 'lg'`                                | `'md'`        | Altezza 26 / 28 / 34 / 40.                                                                  |
| `shape`         | `'default' \| 'round'`                                        | `'default'`   | `round` dà una forma di pillola.                                                            |
| `icon`          | `string`                                                      | —             | Icona prima del testo (14 px in xs/sm, 15 px in md/lg).                                     |
| `iconOnly`      | `boolean`                                                     | —             | Pulsante quadrato che mostra solo l'icona; lo slot predefinito non viene reso. `ariaLabel`. |
| `ariaLabel`     | `string`                                                      | —             | Nome accessibile; richiesto per i pulsanti icona-solo.                                      |
| `loading`       | `boolean`                                                     | —             | Mostra un girante invece dell'icona, set `aria-busy`, e disabilita il pulsante.             |
| `disabled`      | `boolean`                                                     | —             | Look per disabili; i clic vengono ignorati.                                                 |
| `block`         | `boolean`                                                     | —             | Riempire la larghezza disponibile.                                                          |
| `type`          | `'button' \| 'submit' \| 'reset'`                             | `'button'`    | Pulsante nativo tipo (solo bottoni).                                                        |
| `href`          | `string`                                                      | —             | Render un link invece di un pulsante.                                                       |
| `target`, `rel` | `string`                                                      | —             | Passato al link.                                                                            |
| `linkAs`        | `string \| Component`                                         | `'a'`         | Componente di collegamento; `href` è passato come `to` per i componenti del router.         |

| Evento  | Carico di pagamento   | Designazione                                     |
| ------- | --------------------- | ------------------------------------------------ |
| `click` | `[event: MouseEvent]` | Non emesso durante il disabile o il caricamento. |

| Slot      | Designazione |
| --------- | ------------ |
| `default` | L'etichetta. |

**Varianti.** `primary` (invertito, uno per area), `secondary` (default) `accent` (colore di marca, per l'unica azione
che dovrebbe distinguersi), `ghost` (outlined, per azioni a bassa enfasi e barre degli strumenti), `danger` (tinta rossa, distruttiva).
I pulsanti disabilitati e di carico di ogni variante condividono uno stile muto.

**Uso** per le azioni. Per la navigazione in stile come un pulsante passa `href`. Non utilizzare un pulsante per le impostazioni di accensione/spegni
(`OnToggle`) o scegliere una delle poche opzioni (`OnSegmented`).

**Accessibilità.** Un nativo `<button>` (comportamento di tastiera e forma incluso) o un link. I pulsanti per disabili sono nativamente
disabili; un collegamento disabili perde il suo `href` (o, con un componente router, mantiene `to`♪ `aria-disabled="true"` e
il suo clic è impedito). I pulsanti di sola icona devono avere `ariaLabel`; aggiungere un `OnTooltip` per gli utenti avvistati.

<a id="onicon"></a>

### OnIcon

Un'icona SVG in linea dai set in bundle o registrati.

| Prop    | Tipologia | Predefinito | Designazione                                                                            |
| ------- | --------- | ----------- | --------------------------------------------------------------------------------------- |
| `name`  | `string`  | richiesto   | Lucide nome (`search`, `lucide:search`) o `prefix:name` di un insieme registrato.       |
| `size`  | `number`  | `16`        | Dimensioni pixel: 12 in badge, 14 in pulsanti, 16 di default, 17 sidebar, 18 tavolozza. |
| `label` | `string`  | —           | Rende l'icona un'immagine (`role="img"`, `aria-label`); altrimenti è decorativo.        |

Larghezza di punta è 2 sotto 16 px e 1.6 altrimenti. Icons prendere `currentColor`. I nomi sconosciuti rendono un SVG vuoto e
il rendering è sincrono, quindi le icone appaiono in server-rendered HTML.

**Accessibilità.** Decorativo per impostazione predefinita (`aria-hidden="true"`). Dare `label` solo alle icone che portano significato sulla loro
proprio; accanto al testo, lascialo fuori.

<a id="onchip"></a>

### OnChip

Una breve etichetta per un tipo o uno stato ("App", "Aggiornamento disponibile", "Deprecato").

| Prop      | Tipologia                                                                                       | Predefinito | Designazione                                                                                                             |
| --------- | ----------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| `tone`    | `'neutral' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'accent' \| 'coral' \| 'outline'` | `'neutral'` | `accent` (salmone) per aggiornamenti, `coral` per il progresso, `outline` per note neutre come la traduzione automatica. |
| `outline` | `boolean`                                                                                       | —           | Esterno invece di riempito; si combina con qualsiasi tono (ad esempio disabilitato = `danger` + profilo).                |
| `dot`     | `boolean`                                                                                       | —           | Piombo 6 px dot nel colore del testo.                                                                                    |
| `icon`    | `string`                                                                                        | —           | Conducente icona di 12 px.                                                                                               |
| `size`    | `'sm' \| 'md'`                                                                                  | `'sm'`      | Altezza 20 / 24.                                                                                                         |

| Slot      | Designazione |
| --------- | ------------ |
| `default` | Il testo.    |

**Uso** per lo stato e i metadati. Dire sempre lo stato in parole; il colore lo supporta solo. Non interattivo — per un
uso della scelta `OnSegmented`; per un conteggio sull'uso della navigazione `OnBadge`.

**Accessibilità.** Testo in linea della pianura; il punto e l'icona sono decorativi.

<a id="onbadge"></a>

### OnBadge

Un conteggio di coralli ("6", "99+") o una piccola etichetta di testo evidenziata ("Caratterata questa settimana").

| Prop    | Tipologia | Predefinito | Designazione                                                                                    |
| ------- | --------- | ----------- | ----------------------------------------------------------------------------------------------- |
| `count` | `number`  | —           | Rende un distintivo di conteggio; senza di esso il distintivo mostra la sua fessura come testo. |
| `max`   | `number`  | `99`        | Conta al di sopra di esso mostra `max+`.                                                        |
| `label` | `string`  | —           | Nome accessibile di un badge di conteggio, ad esempio "6 aggiornamenti disponibili".            |

| Slot         | Designazione                                                                                                                            |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `default`    | Testo di un distintivo di testo.                                                                                                        |
| `decoration` | Un piccolo segno dopo il testo (circa 13 px, `currentColor`), ad esempio una stella o un segno di app. Nascosto dai lettori di schermo. |

**Uso** contare i distintivi per le cose che hanno bisogno di attenzione (aggiornamento); `OnNavItem` e `OnSidebar` usarli attraverso
loro loro `badge` prop. Utilizzare i badge di testo per evidenziazioni editoriali. Per uso di stato `OnChip`.

**Accessibilità.** Un numero nudo significa poco a un lettore di schermo; passare `label` per il conteggio dei distintivi.

<a id="ontoggle"></a>

### OnToggle

Un interruttore on/off per le impostazioni che si applicano immediatamente.

| Prop             | Tipologia | Predefinito | Designazione                                                                   |
| ---------------- | --------- | ----------- | ------------------------------------------------------------------------------ |
| `modelValue`     | `boolean` | richiesto   | Su o fuori (`v-model`).                                                        |
| `disabled`       | `boolean` | —           | Non cambiabile; dimmerato.                                                     |
| `ariaLabel`      | `string`  | —           | Nome accessibile quando non c'è etichetta visibile.                            |
| `ariaLabelledby` | `string`  | —           | ID dell'etichetta visibile, ad esempio il testo della riga delle impostazioni. |

| Evento              | Carico di pagamento | Designazione    |
| ------------------- | ------------------- | --------------- |
| `update:modelValue` | `[value: boolean]`  | Il nuovo stato. |

**Uso** in righe di impostazioni con l'etichetta a sinistra e l'interruttore a destra. Per le scelte che si applicano solo dopo
"Salva", o in un elenco di elementi su cui agire, utilizzare `OnCheckbox`.

**Accessibilità.** A `<button role="switch">` con `aria-checked`; Spazio e Inserire lo attivare.
`ariaLabelledby` (preferito, punti all'etichetta visibile) o `ariaLabel`.

<a id="oncheckbox"></a>

### OnCheckbox

Una casella di controllo con etichetta facoltativa, stati misti e bloccati.

| Prop            | Tipologia | Predefinito | Designazione                                                                                                                       |
| --------------- | --------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `modelValue`    | `boolean` | richiesto   | Checked (`v-model`).                                                                                                               |
| `indeterminate` | `boolean` | —           | Alcuni bambini selezionati (tavolo o intestazione di gruppo); fare clic seleziona tutto. Ignorato durante il controllo o bloccato. |
| `disabled`      | `boolean` | —           | Non cambiabile; dimmerato.                                                                                                         |
| `locked`        | `boolean` | —           | Sempre incluso e immutabile, ad esempio un elemento richiesto di un piano di rimozione: mostrato controllato e grigiato.           |
| `ariaLabel`     | `string`  | —           | Nome accessibile quando lo slot predefinito non ha etichetta visibile.                                                             |
| `title`         | `string`  | —           | Hover suggerisce, ad esempio perché la scatola è disabilitata.                                                                     |

| Evento              | Carico di pagamento | Designazione                |
| ------------------- | ------------------- | --------------------------- |
| `update:modelValue` | `[value: boolean]`  | Il nuovo stato controllato. |

| Slot      | Designazione                            |
| --------- | --------------------------------------- |
| `default` | L'etichetta visibile, dentro `<label>`. |

**Uso** selezionare gli elementi per un'azione successiva (list, tabelle, piani di rimozione) e per le opzioni confermate da un pulsante.
Per l'uso delle impostazioni istantanee `OnToggle`.

**Accessibilità.** Una casella di controllo nativo dentro una `<label>`, quindi il testo dell'etichetta è il suo nome e cliccandolo si attiva.
Lo stato misto è impostato come DOM `indeterminate` proprietà e `aria-checked="mixed"`. Cassette bloccate sono disabilitate
e controllato. Clic si ferma all'etichetta in modo che una riga di tabella circostante o intestazione di gruppo non reagisca anche.

<a id="onsegmented"></a>

### OnSegmented

Un controllo segmentato: scegliere una delle due a cinque opzioni, come un filtro di visualizzazione o un intervallo di tempo.

| Prop         | Tipologia                         | Predefinito | Designazione                                                                                                                                                   |
| ------------ | --------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `modelValue` | `T extends string`                | richiesto   | Valore di opzione selezionato (`v-model`).                                                                                                                     |
| `options`    | `readonly OnSegmentedOption<T>[]` | richiesto   | `{ value, label, count?, dots? }`; `dots` sono i nomi variabili di token (ad es. `chart-series1`) disegnata come piccoli punti di colore prima dell'etichetta. |
| `size`       | `'sm' \| 'md'`                    | `'md'`      | Altezza d'opzione 24 / 28.                                                                                                                                     |
| `ariaLabel`  | `string`                          | —           | Nome accessibile del gruppo.                                                                                                                                   |

| Evento              | Carico di pagamento | Designazione                         |
| ------------------- | ------------------- | ------------------------------------ |
| `update:modelValue` | `[value: T]`        | Emesso solo quando il valore cambia. |

**Uso** per una visione reciprocamente esclusiva dello stesso contenuto. Per la navigazione tra le pagine utilizzare `OnTabs`; per molti
opzioni utilizzare un menu.

**Accessibilità.** `role="radiogroup"` con `role="radio"` pulsanti e `aria-checked`. Solo l'opzione selezionata è
nell'ordine della scheda; i tasti freccia si muovono e selezionano (spingere), Home e Fine saltare alle estremità.

<a id="ontabs"></a>

### OnTabs

Tabs, sia i pannelli di commutazione sulla stessa pagina o il collegamento a pagine separate.

| Prop         | Tipologia                 | Predefinito | Designazione                                                   |
| ------------ | ------------------------- | ----------- | -------------------------------------------------------------- |
| `modelValue` | `T extends string`        | richiesto   | Valore attuale della scheda.                                   |
| `items`      | `readonly OnTabItem<T>[]` | richiesto   | `{ value, label, count?, disabled?, href?, controls? }`.       |
| `ariaLabel`  | `string`                  | —           | Nome accessibile dell'elenco delle schede o della navigazione. |
| `linkAs`     | `string \| Component`     | `'a'`       | Componente di collegamento in modalità link.                   |

| Evento              | Carico di pagamento | Designazione                                                                     |
| ------------------- | ------------------- | -------------------------------------------------------------------------------- |
| `update:modelValue` | `[value: T]`        | Fare clic su (o tasto freccia in modalità tablist) su un'altra scheda abilitata. |

**Varianti.** Modalità di listino (nessun elemento ha `href`): pannelli della stessa pagina. Link mode (qualsiasi elemento ha `href`): ogni scheda è una
link al proprio URL, ad esempio, i motori di ricerca indicizzano ogni scheda. La scheda attiva ha un indicatore di sottolinea; `count`
mostra un piccolo numero dopo l'etichetta.

**Uso** per la visione semplificata di un soggetto. Per i filtri di un elenco utilizzare `OnSegmented`.

**Accessibilità.** Modalità Tablist: `role="tablist"` / `role="tab"` con `aria-selected`, roving Tab messa a fuoco, tasti freccia
(sfrutta le schede disabilitate), Home e Fine; set `controls` al pannello ID per `aria-controls` e dare il pannello
`role="tabpanel"`. Modalità di collegamento: a `<nav>` di collegamenti con `aria-current="page"` su quello attivo; gli oggetti disabili sono
non-link `<span aria-disabled="true">`.

<a id="onsearchfield"></a>

### OnSearchField

Un campo di testo per la ricerca e il filtraggio, con un pulsante chiaro e un accenno di collegamento.

| Prop          | Tipologia | Predefinito | Designazione                                                                            |
| ------------- | --------- | ----------- | --------------------------------------------------------------------------------------- |
| `modelValue`  | `string`  | richiesto   | La query (`v-model`).                                                                   |
| `placeholder` | `string`  | —           | Testo dei segnaposto.                                                                   |
| `ariaLabel`   | `string`  | —           | Nome accessibile; default al segnaposto.                                                |
| `shortcut`    | `string`  | —           | Colpiti a destra, ad esempio. `⌘K`; sostituito dal pulsante chiaro mentre c'è il testo. |
| `clearable`   | `boolean` | `true`      | Mostra un pulsante chiaro quando c'è il testo.                                          |
| `disabled`    | `boolean` | —           | Non modificabile; dimmer.                                                               |

| Evento              | Carico di pagamento | Designazione                                             |
| ------------------- | ------------------- | -------------------------------------------------------- |
| `update:modelValue` | `[value: string]`   | Ogni input.                                              |
| `submit`            | `[value: string]`   | Inserire (non mentre un metodo di input sta componendo). |
| `clear`             | `[]`                | Pulsante chiaro o fuga con testo.                        |

Esposto: `focus()`, `blur()`.

**Uso** Per aprire una palette di comando da una barra degli strumenti, utilizzare il pulsante di ricerca
di `OnToolbar` / `OnTopNav` Invece.

**Accessibilità.** Un nativo `type="search"` input chiamato da `ariaLabel` o il titolare del posto. Fuggire cancella un non-vuoto
campo e si ferma lì; su un campo vuoto bolle (in modo da poter chiudere una finestra di dialogo circostante).
etichettato "Clear" nella lingua corrente e restituisce la messa a fuoco all'ingresso.

<a id="ontooltip"></a>

### OnTooltip

Una breve descrizione che appare sul fuoco hover e tastiera.

| Prop        | Tipologia                                | Predefinito | Designazione                                                                                                                                                                                                                                                           |
| ----------- | ---------------------------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content`   | `string`                                 | richiesto   | Il testo; il contenuto vuoto disabilita la punta degli strumenti.                                                                                                                                                                                                      |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`     | Lato preferito; capovolge quando non c'è spazio e rimane all'interno del viewport.                                                                                                                                                                                     |
| `delay`     | `number`                                 | `400`       | Mostra ritardo in millisecondi.                                                                                                                                                                                                                                        |
| `disabled`  | `boolean`                                | —           | Mai mostrare.                                                                                                                                                                                                                                                          |
| `lazy`      | `boolean`                                | —           | Render il tooltip solo una volta che il trigger viene utilizzato per la prima volta, e senza `aria-describedby`. Per i trigger decorativi le cui informazioni sono sulla pagina comunque (cart bar con una tabella nascosta); lo tiene fuori dal server-rendered HTML. |

| Slot      | Designazione                                                    |
| --------- | --------------------------------------------------------------- |
| `default` | Il grilletto; il suo primo elemento ottiene `aria-describedby`. |

Attributi (`class`, `style`) andare al pacco `<span>`. Il tooltip è teletrasportato a `<body>` e posizionato
`fixed`, così i contenitori scorrevoli non lo clip mai; si nasconde sulla pergamena e ridimensiona.

**Uso** per i pulsanti di icona e il testo troncato. Non mettere mai informazioni essenziali o contenuti interattivi in un tooltip.

**Accessibilità.** `role="tooltip"`, collegato dal grilletto con `aria-describedby` (inutile) `lazy`, disabili o vuoti).
Si apre a fuoco così come hover, e fuga lo chiude (WCAG 1.4.13).

<a id="onmenu"></a>

### OnMenu

Un menu di azione dietro un pulsante, come "More azioni" o un menu di scelta / scelta.

| Prop      | Tipologia               | Predefinito   | Designazione                                                                  |
| --------- | ----------------------- | ------------- | ----------------------------------------------------------------------------- |
| `items`   | `readonly OnMenuItem[]` | richiesto     | `{ key, label, icon?, shortcut?, danger?, disabled?, separator?, checked? }`. |
| `label`   | `string`                | —             | Nome accessibile del grilletto e del menu; default di "More azioni".          |
| `icon`    | `string`                | `'ellipsis'`  | Icona del trigger predefinito.                                                |
| `variant` | `OnButtonVariant`       | `'secondary'` | Variante del trigger predefinito.                                             |
| `size`    | `OnButtonSize`          | `'md'`        | Dimensione del trigger predefinito.                                           |
| `align`   | `'start' \| 'end'`      | `'end'`       | Quale lato del grilletto il menu si allinea.                                  |

| Evento   | Carico di pagamento | Designazione                                                                     |
| -------- | ------------------- | -------------------------------------------------------------------------------- |
| `select` | `[key: string]`     | È stata scelta una voce abilitata; il menu si chiude e si concentra sul trigger. |

| Slot      | Firma                                                                   | Designazione                                                                        |
| --------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `trigger` | `(props: { open: boolean; attrs: Record<string, unknown> }) => unknown` | Un trigger personalizzato; legare `attrs` (ARIA, click e key handler) sul pulsante. |

Articoli: `danger` disegna il testo rosso, `separator` aggiunge un divisore prima dell'oggetto, `shortcut` mostra un accenno sulla destra,
`checked` (qualsiasi valore definito) trasforma l'oggetto in una scelta: `true` mostra un segno di spunta.

**Uso** per azioni secondarie di una riga o di una pagina e per la scelta di un'opzione (ordine assortimento, lingua).
azione su un pulsante visibile.

**Accessibilità.** Trigger: `aria-haspopup="menu"`, `aria-expanded`, `aria-controls`; ArrowDown o ArrowUp si apre su
il primo o l'ultimo elemento. Un puntatore apre il menu senza preimpostare un elemento; una tastiera aperta focalizza il primo.
Menu: `role="menu"` con `menuitem` o `menuitemradio` (`aria-checked`) elementi al di fuori dell'ordine Tab; tasti freccia
ciclo (skipping disabilitato), Home and End jump, Escape and Tab chiuderlo e restituire la messa a fuoco al trigger.
il ridimensionamento o lo scorrimento lo chiude. Il menu è teletrasportato per `<body>`, si apre verso l'alto quando non c'è spazio qui sotto.

---

<a id="containers-and-data"></a>

## Contenitori e dati

<a id="oncard"></a>

### OnCard

Una superficie delimitata che raggruppa contenuti correlati; facoltativamente un link o un pulsante.

| Prop          | Tipologia                                                    | Predefinito | Designazione                                                                                 |
| ------------- | ------------------------------------------------------------ | ----------- | -------------------------------------------------------------------------------------------- |
| `as`          | `'div' \| 'section' \| 'article' \| 'li' \| 'a' \| 'button'` | `'div'`     | Elemento di rendering (ignorato quando `href` è impostato). `button` - Si'. `type="button"`. |
| `href`        | `string`                                                     | —           | Render la carta come un collegamento (attraverso `linkAs`).                                  |
| `interactive` | `boolean`                                                    | —           | Hover bordo/fondo, puntatore cursore e anello di messa a fuoco.                              |
| `padding`     | `'none' \| 'sm' \| 'md' \| 'lg'`                             | `'md'`      | 0 / 14 / 16 / 18 px.                                                                         |
| `linkAs`      | `string \| Component`                                        | `'a'`       | Componente di collegamento.                                                                  |

| Slot      | Designazione           |
| --------- | ---------------------- |
| `default` | Contenuto della carta. |

**Uso** per il raggruppamento e per i collegamenti interconnessi. Le carte usano un bordo e un riempimento, nessuna ombra.
carte o mettere diversi link all'interno di una carta che è di per sé un link.

**Accessibilità.** Una carta cliccabile deve essere un vero link (`href`) o pulsante (`as="button"`); il suo testo diventa
nome accessibile, quindi tienilo breve.

<a id="onstattile"></a>

### OnStatTile

Un numero etichettato con unità, accenno e cambio.

| Prop    | Tipologia      | Predefinito | Designazione                                                                                                                                      |
| ------- | -------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label` | `string`       | richiesto   | Caso di separazione senza un colon, ad esempio "utilizzo disco".                                                                                  |
| `value` | `string`       | richiesto   | Il valore formattato.                                                                                                                             |
| `unit`  | `string`       | —           | ad esempio "GB", "min fa".                                                                                                                        |
| `hint`  | `string`       | —           | Terza linea.                                                                                                                                      |
| `delta` | `OnStatDelta`  | —           | `{ value, direction: 'up' \| 'down', good }`: la freccia mostra la direzione, `good` sceglie verde o rosso.                                       |
| `size`  | `'sm' \| 'md'` | `'sm'`      | `sm`: una piastrella standalone (ad es. una rete ferroviaria 2×2); `md`: una cella di una striscia di stat il cui contenitore disegna i divisori. |

**Uso** per cruscotti e riepiloghi. Per l'uso di liste di etichette/valore `OnKeyValueList`.

**Accessibilità.** Testo normale in ordine di lettura (etichetta, valore, unità, cambiamento, accenno).
carattere freccia e un colore; assicurarsi `delta.value` ha senso leggere ad alta voce.

<a id="onkeyvaluelist"></a>

### OnKeyValueList

Un elenco a due colonne di valori etichettati, ad esempio i dettagli di un articolo.

| Prop    | Tipologia                   | Predefinito | Designazione                                                                                                                          |
| ------- | --------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `items` | `readonly OnKeyValueItem[]` | richiesto   | `{ key, label, value, mono?, href? }`; `mono` per identificativi, comandi e percorsi; `href` rende il valore un collegamento esterno. |

I valori si troncano con un'ellissi su una linea.

**Accessibilità.** A `<dl>` di `<dt>`/`<dd>` coppie. Collegamenti esterni aperti in una nuova scheda con
`rel="noopener noreferrer"` e un'icona freccia.

<a id="ontable"></a>

### OnTable

Una tabella di dati con visualizzazione di selezione, selezione, celle personalizzate e scorrimento virtuale.

| Prop             | Tipologia                            | Predefinito | Designazione                                                                                                                      |
| ---------------- | ------------------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `columns`        | `readonly OnTableColumn[]`           | richiesto   | `{ key, label, numeric?, mono?, sortable?, width?, hideLabel? }`.                                                                 |
| `rows`           | `readonly Row[]`                     | richiesto   | Le righe, già ordinate dall'ospite.                                                                                               |
| `rowKey`         | `(row: Row) => string`               | richiesto   | Chiave stabile per riga.                                                                                                          |
| `cellValue`      | `(row: Row, key: string) => unknown` | —           | Contenuto di cella predefinito; altrimenti `row[column.key]`.                                                                     |
| `sort`           | `OnTableSort \| null`                | —           | `{ key, order: 'asc' \| 'desc' }` da visualizzare; il componente non ordina.                                                      |
| `selectedKey`    | `string \| null`                     | —           | Evidenziata (corrente) riga.                                                                                                      |
| `dimmed`         | `(row: Row) => boolean`              | —           | Remi defatte (ad es. dipendenze) al 55% di opacità.                                                                               |
| `caption`        | `string`                             | —           | Tavolino visivamente nascosto.                                                                                                    |
| `height`         | `number`                             | —           | Altezza fissa in px con intestazione appiccicosa; sopra 200 righe solo le righe visibili rendono (44 px ciascuna).                |
| `layout`         | `'auto' \| 'fixed'`                  | —           | `fixed` onora le larghezze della colonna e tronca la colonna flessibile, così le tabelle larghe non scorreranno mai lateralmente. |
| `selectable`     | `boolean`                            | —           | Colonna della casella di controllo principale; uso `v-model:selected`.                                                            |
| `selected`       | `readonly string[]`                  | —           | Tasti di riga selezionati; chiavi di righe filtrate fuori `rows` sono tenuti.                                                     |
| `canSelect`      | `(row: Row) => boolean`              | —           | righe che non possono essere selezionate (ad esempio oggetti protetti); tutte per impostazione predefinita.                       |
| `selectAllLabel` | `string`                             | —           | Nome accessibile dell'intestazione.                                                                                               |
| `selectRowLabel` | `(row: Row) => string`               | —           | Nome accessibile di ogni casella di controllo della riga.                                                                         |

| Evento            | Carico di pagamento       | Designazione                                                                                                                                            |
| ----------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `update:sort`     | `[sort: OnTableSort]`     | Un intestazione selezionabile è stato cliccato: la stessa colonna inverte, una nuova colonna inizia a scendere quando numerico e ascendente altrimenti. |
| `update:selected` | `[keys: string[]]`        | Cambia la casella di controllo; la casella di intestazione seleziona o cancella ogni riga selezionabile.                                                |
| `rowClick`        | `[key: string, row: Row]` | Una riga è stata cliccata (clic checkbox esclusi).                                                                                                      |

| Slot         | Firma                                              | Designazione                                                                   |
| ------------ | -------------------------------------------------- | ------------------------------------------------------------------------------ |
| `cell-{key}` | `(props: { row: Row; value: unknown }) => unknown` | Contenuto personalizzato per colonna `key`Per esempio. `#cell-name="{ row }"`. |

**Uso** per record comparabili con diversi attributi. Per una manciata di coppie di etichette/valore utilizzare `OnKeyValueList`;
per contenuti ricchi e irregolari utilizzare una lista di carte.

**Accessibilità.** Un vero `<table>` con `scope="col"` intestazioni. Intestazioni ordinabili sono pulsanti denominati "Sort by
{label}" e la cella dell'intestazione trasporta `aria-sort`. `hideLabel` mantiene un intestazione visivamente nascosta (ad esempio "Azioni").
Le righe selezionabili espongono `aria-selected`; la casella di controllo dell'intestazione mostra lo stato misto. `height`, la pergamena
contenitore è concentrabile in modo che gli utenti della tastiera possono scorrere.

<a id="onpagination"></a>

### OnPagination

Numeri di pagina e/o precedente con ellisse; pulsanti o link quando ogni pagina ha un URL.

| Prop        | Tipologia                  | Predefinito | Designazione                                                                                                                |
| ----------- | -------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| `page`      | `number`                   | richiesto   | Pagina corrente, basata su una sola.                                                                                        |
| `pageCount` | `number`                   | richiesto   | Pagine totali; nulla rende per una pagina.                                                                                  |
| `max`       | `number`                   | `7`         | Fessure tra cui ellisse (minimo 5); prima, ultima e attuale pagina mostra sempre.                                           |
| `hrefFor`   | `(page: number) => string` | —           | Collegamenti di rimborso: ogni pagina ha un proprio URL (ad es. `?page=3`).                                                 |
| `linkAs`    | `string \| Component`      | `'a'`       | Componente di collegamento per `hrefFor`.                                                                                   |
| `jumps`     | `readonly number[]`        | —           | Pagine extra questo molti passi prima e dopo quella corrente; default a `[10, 100]` con `hrefFor` e nessuno per i pulsanti. |

| Evento        | Carico di pagamento | Designazione                                                                                  |
| ------------- | ------------------- | --------------------------------------------------------------------------------------------- |
| `update:page` | `[page: number]`    | Un'altra pagina è stata scelta (anche licenziato per i collegamenti prima della navigazione). |

**Uso** per liste lunghe e indirizzabili (risultati di ricerca, cataloghi) Per i feed preferiscono "caricare di più" o scorrimento infinito.

**Accessibilità.** `<nav aria-label="Pagination">`; i pulsanti di pagina sono denominati "Page N", quello attuale ha
`aria-current="page"`; il precedente/next alle estremità diventa non interattivo con `aria-disabled="true"`; ellisse sono
nascosto dai lettori di schermo.

<a id="onprogressmeter"></a>

### OnProgressMeter

Una barra di avanzamento, determinata o indeterminata.

| Prop    | Tipologia        | Predefinito | Designazione                                                |
| ------- | ---------------- | ----------- | ----------------------------------------------------------- |
| `value` | `number \| null` | —           | 0–100 (clamato); unset o `null` significa indeterminato.    |
| `size`  | `'md' \| 'sm'`   | `'md'`      | Altezza bar 6 / 4 px (`sm` per barre di menu e file dense). |
| `label` | `string`         | —           | Nome accessibile, ad esempio "Scaricare l'aggiornamento".   |

**Uso** per compiti con progressi misurabili, o lavori in corso senza di essa (indeterminato).
rimanendo il tempo accanto ad esso quando ne hai uno.

**Accessibilità.** `role="progressbar"` con `aria-valuemin`, `aria-valuemax`, `aria-valuenow` (arrotondato) o
`aria-valuetext="In progress"` quando indeterminato. Con movimento ridotto la barra indeterminata smette di muoversi e mostra
"In corso" come testo.

<a id="onstackbar"></a>

### OnStackBar

Una singola barra accatastata con leggenda: come un totale si divide in parti (ad es. stoccaggio per tipo).

| Prop      | Tipologia                   | Predefinito | Designazione                                                                   |
| --------- | --------------------------- | ----------- | ------------------------------------------------------------------------------ |
| `items`   | `readonly OnStackItem[]`    | richiesto   | `{ key, label, value, display? }`; valori zero e negativi sono lasciati fuori. |
| `caption` | `string`                    | richiesto   | Nome grafico; la didascalia del tavolo nascosto.                               |
| `format`  | `(value: number) => string` | —           | Formatta i valori senza `display`, compreso l'Altra fusa.                      |

Fino a tre colori della serie (`chart.series1–3`) sono utilizzati in ordine; con più di tre articoli il terzo e più tardi
Un segmento che mostra una pigrizia tooltip.

**Accessibilità.** La barra e la leggenda sono nascosti dai lettori di schermo; un tavolo visivamente nascosto (Item, Valore, Condividi)
con la capzione trasporta i dati.

<a id="onhbarchart"></a>

### OnHBarChart

Barre orizzontali a confronto di alcuni valori, ad esempio download per periodo.

| Prop      | Tipologia               | Predefinito | Designazione                                                                                                                                                                                   |
| --------- | ----------------------- | ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`   | `readonly OnHBarItem[]` | richiesto   | `{ key, label, value, display?, full?, emphasis? }`: `display` alla fine del bar (ad esempio "17K"), `full` in tooltip e tabella (ad esempio "17.394"), `emphasis` colori il periodo corrente. |
| `caption` | `string`                | richiesto   | Nome grafico; la didascalia del tavolo nascosto.                                                                                                                                               |
| `max`     | `number`                | —           | Scala massima; default al valore più grande.                                                                                                                                                   |

**Accessibilità.** Le barre sono nascoste dai lettori dello schermo; un tavolo visivamente nascosto (Item, Value) trasporta i valori completi.
I tooltips sono pigri, quindi non diventano mai testo di pagina stray.

<a id="onskeleton"></a>

### OnSkeleton

Un segnaposto shimmering mentre il contenuto si carica.

| Prop     | Tipologia                                                                   | Predefinito | Designazione                              |
| -------- | --------------------------------------------------------------------------- | ----------- | ----------------------------------------- |
| `width`  | `string`                                                                    | `'100%'`    | CSS lunghezza.                            |
| `height` | `string`                                                                    | `'14px'`    | CSS lunghezza di ogni linea.              |
| `radius` | `'tiny' \| 'small' \| 'default' \| 'big' \| 'huge' \| 'full' \| 'app-icon'` | `'small'`   | Abbina il raggio di quello che si carica. |
| `lines`  | `number`                                                                    | —           | Diverse linee; l'ultima è larga del 60%.  |

**Uso** solo per il primo carico, a forma di contenuto. Mentre il ripieno, tenere il vecchio contenuto (dimmerso) invece
di scheletri lampeggianti.

**Accessibilità.** `aria-hidden="true"`. Annunciare il caricamento altrove se è importante (ad es. `aria-busy` sulla regione).
Lo shimmer si ferma con movimento ridotto.

<a id="oncodetext"></a>

### OnCodeText

Inline codice testo che avvolge tra le parole, mai dentro uno.

| Prop   | Tipologia | Predefinito | Designazione                   |
| ------ | --------- | ----------- | ------------------------------ |
| `text` | `string`  | richiesto   | Il comando, percorso o codice. |

Ogni corsa di caratteri non spaziali è un blocco in linea, quindi un nome o un nome iphenated `--flag` non si divide mai; una parola più ampia
che la linea si rompe preferibilmente dopo `/`, `.` o `=`. Whitespace è mantenuto come testo, quindi copia restituisce l'originale
e `white-space: pre-wrap` i contenitori tengono l'indentazione. Mettilo dentro la tua `<code>` o `<pre>`.

`codeParts`, `wordPieces` e `codeWordsHtml` esporre lo stesso divisorio per i renderer Markdown (wrap codice inline
parole in `.on-code-word`; `OnMarkdownView` li stili).

<a id="onlogviewer"></a>

### OnLogViewer

Un tronco monospaziale con tipi di linea colorati, limite di coda e scorrimento virtuale.

| Prop     | Tipologia           | Predefinito | Designazione                                                                                      |
| -------- | ------------------- | ----------- | ------------------------------------------------------------------------------------------------- |
| `lines`  | `readonly string[]` | richiesto   | Le linee di registro, prima piu' antiche.                                                         |
| `tail`   | `number`            | `2000`      | Mostrare solo le ultime linee (incassate a 2.000), ad esempio 5 in una scheda di lavoro compatta. |
| `height` | `number`            | —           | Scorrere all'interno di questa altezza; oltre 200 linee solo rendering visibile.                  |
| `label`  | `string`            | —           | Nome accessibile; default di "Log".                                                               |

Colori di linea (`classifyLogLine`): `==>` voci, `###… 62.4%` barre di progresso, `Error:` / `fatal:` / errori di curl, e
i marcatori di successo. Le linee vuote mantengono la loro altezza.

**Accessibilità.** A `<pre role="log">` con un nome accessibile e `tabindex="0"`, così gli utenti della tastiera possono scorrere.
Gli aggiornamenti non sono annunciati automaticamente oltre quello che `role="log"` implica; riassumere i risultati importanti altrove.

<a id="onhighlighttext"></a>

### OnHighlightText

Testo in cui `**…**` frasi sono enfatizzate; nient'altro è parso.

| Prop   | Tipologia                | Predefinito | Designazione                                                                                       |
| ------ | ------------------------ | ----------- | -------------------------------------------------------------------------------------------------- |
| `text` | `string`                 | richiesto   | Testo con facoltativo `**…**` enfasi; altri personaggi rimangono letterali (no Markdown, no HTML). |
| `as`   | `'span' \| 'p' \| 'div'` | `'span'`    | Elemento reso.                                                                                     |

Le parti sottolineate utilizzano il colore del testo primario a peso 500 (`parseHighlight` espone la parsing).

**Uso** per una breve copia editoriale da dati (descrizioni eroiche, riassunti). Per l'uso completo di Markdown `OnMarkdownView`.

<a id="onsectionheader"></a>

### OnSectionHeader

Un titolo di sezione con un accenno azzerato facoltativo e un tracciante "Visualizza tutto" in stile link.

| Prop        | Tipologia             | Predefinito | Designazione                                              |
| ----------- | --------------------- | ----------- | --------------------------------------------------------- |
| `title`     | `string`              | richiesto   | Il `<h2>` testo.                                          |
| `hint`      | `string`              | —           | Testo mutato accanto al titolo.                           |
| `moreLabel` | `string`              | —           | Testo di collegamento; il link rende solo con `moreHref`. |
| `moreHref`  | `string`              | —           | Obiettivo di collegamento.                                |
| `linkAs`    | `string \| Component` | `'a'`       | Componente di collegamento.                               |

**Accessibilità.** Il `<h2>` detiene solo il titolo; l'accenno è un paragrafo separato, quindi non diventa mai intestazione
testo. Il link ha un'icona freccia (decorative).

<a id="onpageheader"></a>

### OnPageHeader

La parte superiore di una pagina: un grande `<h1>`, un sottotitolo e azioni a destra.

| Prop       | Tipologia | Predefinito | Designazione                       |
| ---------- | --------- | ----------- | ---------------------------------- |
| `title`    | `string`  | richiesto   | Il `<h1>` testo (30 px, peso 600). |
| `subtitle` | `string`  | —           | Linea sotto il titolo.             |

| Slot      | Designazione                                                      |
| --------- | ----------------------------------------------------------------- |
| `default` | Contenuto extra sotto il titolo (chips, filtri).                  |
| `actions` | Pulsanti a destra; su schermi stretti si avvolge sotto il titolo. |

**Uso** una volta per pagina. Titoli di sezione all'interno della pagina `OnSectionHeader`.

<a id="onbreadcrumb"></a>

### OnBreadcrumb

Il percorso da una pagina di alto livello a quella attuale.

| Prop     | Tipologia                     | Predefinito | Designazione                                                                           |
| -------- | ----------------------------- | ----------- | -------------------------------------------------------------------------------------- |
| `items`  | `readonly OnBreadcrumbItem[]` | richiesto   | `{ label, href? }`; l'ultimo elemento è la pagina corrente e non ha bisogno di `href`. |
| `linkAs` | `string \| Component`         | `'a'`       | Componente di collegamento.                                                            |

**Accessibilità.** `<nav aria-label="Breadcrumb">` con un elenco ordinato; l'ultimo elemento ha `aria-current="page"`.
I separatori sono icone decorative. Oggetti senza `href` (prima dell'ultimo) rendere come testo normale.

<a id="onmarkdownview"></a>

### OnMarkdownView

Tipografia per Markdown (noti di rilascio, descrizioni, articoli).

| Prop   | Tipologia                   | Predefinito | Designazione                                                                                                                                      |
| ------ | --------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `html` | `string`                    | —           | **Sanitaria** HTML, inserito come è. Ignorato quando viene utilizzato lo slot predefinito.                                                        |
| `size` | `'sm' \| 'md' \| 'article'` | `'sm'`      | `sm` 13/20 per le note di rilascio, `md` 14/1.75 per descrizioni (entrambi max 72ch), `article` 15/1.8 attraverso la colonna con voci più grandi. |

| Slot      | Designazione                                                                                  |
| --------- | --------------------------------------------------------------------------------------------- |
| `default` | Elementi residuati al posto di un HTML stringa (ad esempio da un renderer che emette VNodes). |

Questo pacchetto navi **nessun rendering Markdown e nessun sanitizer**. Render e sanitize nella vostra app — per esempio
markdown-it con grezzo HTML disabilitato, quindi un igienico-sanitario per i permessi come DOMPurify - e non passa mai controllato dall'utente
HTML non autorizzato. Classifica il tuo renderizzatore può aggiungere: `on-md-heading-1…3` (dimensione della voce visiva per ordine, indipendente
il livello semantico), `on-md-center` / `on-md-right` (allineamento della tabella), `on-code-word` (parole di codice in linea).

**Accessibilità.** I semantici vengono dalla tua HTML: utilizzare i livelli delle voci che si adattano al profilo della pagina (ad es. avviare `h3`
sotto una sezione `h2`) e aggiungere `alt` testo alle immagini. I collegamenti ottengono un anello di messa a fuoco.

---

<a id="states"></a>

## Stati

<a id="onempty"></a>

### OnEmpty

Uno stato vuoto: icona, titolo, descrizione e azioni.

| Prop          | Tipologia | Predefinito      | Designazione                                               |
| ------------- | --------- | ---------------- | ---------------------------------------------------------- |
| `title`       | `string`  | richiesto        | Il `<h3>` testo, ad esempio "Nessun risultato per "x"".    |
| `description` | `string`  | —                | Una o due frasi su cosa fare dopo.                         |
| `icon`        | `string`  | `'lucide:inbox'` | Icona disegnato a 48 px nel colore del testo disabilitato. |

| Slot      | Designazione             |
| --------- | ------------------------ |
| `actions` | Pulsanti sotto il testo. |

**Uso** quando una lista o una ricerca non ha nulla da mostrare. Dire perché e offrire il passo successivo.
`OnErrorState`; per nessun collegamento `OnOffline`.

**Accessibilità.** Il titolo è un `<h3>`; l'icona è decorativo. Se lo stato vuoto appare dopo un'azione dell'utente
(una ricerca), annunciare attraverso la vostra regione dal vivo quando necessario.

<a id="onerrorstate"></a>

### OnErrorState

Un guasto di carico con riprovazione e un ID di richiesta opzionale per i rapporti.

| Prop          | Tipologia        | Predefinito | Designazione                                                           |
| ------------- | ---------------- | ----------- | ---------------------------------------------------------------------- |
| `title`       | `string`         | —           | Predefiniti per "Non caricare".                                        |
| `description` | `string`         | —           | Predefinisce "La rete o il servizio è temporaneamente non disponibile. |
| `requestId`   | `string \| null` | —           | Mostrato in monospazio per i rapporti di emissione.                    |
| `retryable`   | `boolean`        | `true`      | Mostra il pulsante Retry.                                              |

| Evento  | Carico di pagamento | Designazione                        |
| ------- | ------------------- | ----------------------------------- |
| `retry` | `[]`                | Il pulsante Retry è stato cliccato. |

**Accessibilità.** L'involucro ha `role="alert"`, così il messaggio viene annunciato quando appare.

<a id="onoffline"></a>

### OnOffline

Uno stato di no-connessione.

| Prop          | Tipologia | Predefinito | Designazione                                                                                                                                                  |
| ------------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | `string`  | —           | Predefiniti per "Offline".                                                                                                                                    |
| `description` | `string`  | —           | Predefinisce "Mostrare i contenuti salvati. Si aggiorna automaticamente quando sei tornato online". — sovrascriverlo quando l'app può dire quello che mostra. |

| Slot      | Designazione                |
| --------- | --------------------------- |
| `actions` | Pulsanti, ad esempio Retry. |

**Accessibilità.** L'involucro ha `role="status"` (annunziato gentilmente).

---

<a id="overlays"></a>

## Sovrapposizioni

Tutti gli overlays vengono inseriti `<body>` (teletrasporto), spostare l'attenzione all'interno quando si aprono, tenere Tab dentro, pagina di blocco
scorrere (i sovrapposizioni adesiti sono conteggiati di riferimento) e tornare a fuoco all'elemento che li ha aperti.
in 200 ms e fuori 120 ms, senza movimento quando il moto ridotto è acceso.

<a id="ondialogshell"></a>

### OnDialogShell

Lo strato modale di basso livello sotto `OnModal`, `OnSheet` e `OnCommandPalette`: sfondo, transizioni, fuga, messa a fuoco
e serratura a scorrimento. Utilizzare direttamente solo per i pannelli personalizzati.

| Prop           | Tipologia                      | Predefinito | Designazione                                                                                                            |
| -------------- | ------------------------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| `open`         | `boolean`                      | richiesto   | Mostrato quando vero; nulla rende chiuso (anche sul server).                                                            |
| `placement`    | `'center' \| 'right' \| 'top'` | `'center'`  | finestra di dialogo centrale, foglio destro o tavolozza superiore (15vh).                                               |
| `dismissible`  | `boolean`                      | `true`      | `false` ignora Escape e click sullo sfondo (conferme distruttive).                                                      |
| `role`         | `'dialog' \| 'alertdialog'`    | `'dialog'`  | Il ruolo del pannello.                                                                                                  |
| `labelledby`   | `string`                       | —           | ID del titolo (`aria-labelledby`).                                                                                      |
| `describedby`  | `string`                       | —           | ID della descrizione (`aria-describedby`).                                                                              |
| `ariaLabel`    | `string`                       | —           | Nome accessibile quando non c'è un titolo visibile.                                                                     |
| `initialFocus` | `string`                       | —           | Selezionatore all'interno del pannello per focalizzare prima; default al primo elemento focalizzabile, poi il pannello. |
| `backdrop`     | `'dim' \| 'clear'`             | `'dim'`     | Schiuma dimmersa, o un click-catcher trasparente (palette).                                                             |
| `panelClass`   | `string`                       | —           | Classi per l'elemento del pannello (dimensione, superficie, raggio).                                                    |

| Evento  | Carico di pagamento | Designazione                                                                                            |
| ------- | ------------------- | ------------------------------------------------------------------------------------------------------- |
| `close` | `[]`                | Fuggire o una stampa e rilasciare sullo sfondo (selezionare il testo e rilasciare fuori non si chiude). |

| Slot      | Designazione            |
| --------- | ----------------------- |
| `default` | Contenuto del pannello. |

**Accessibilità.** Il pannello ha il dato `role`, `aria-modal="true"` e il suo nome; ciclo Tab e Shift-Tab attraverso
i suoi elementi focalizzabili. Fornire sempre `labelledby` o `ariaLabel`.

<a id="onmodal"></a>

### OnModal

Una finestra di dialogo con titolo, descrizione facoltativa, corpo e azioni piè di pagina.

| Prop           | Tipologia                   | Predefinito | Designazione                                                                                         |
| -------------- | --------------------------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| `open`         | `boolean`                   | richiesto   | Uso `v-model:open`.                                                                                  |
| `title`        | `string`                    | richiesto   | Il `<h2>` e il nome della finestra di dialogo è accessibile.                                         |
| `description`  | `string`                    | —           | sotto il titolo; diventa `aria-describedby`.                                                         |
| `size`         | `'sm' \| 'md' \| 'lg'`      | `'md'`      | Larghezza massima 480 / 560 / 720.                                                                   |
| `dismissible`  | `boolean`                   | `true`      | `false` ignora Escape e clicca sullo sfondo.                                                         |
| `closable`     | `boolean`                   | `true`      | Pulsante chiuso nell'angolo in alto a destra.                                                        |
| `role`         | `'dialog' \| 'alertdialog'` | `'dialog'`  | Uso `alertdialog` per le conferme che hanno bisogno di una risposta.                                 |
| `initialFocus` | `string`                    | —           | Selettore da focalizzare prima; default al primo elemento focalizzabile (spesso il pulsante Chiudi). |

| Evento        | Carico di pagamento | Designazione                            |
| ------------- | ------------------- | --------------------------------------- |
| `update:open` | `[open: boolean]`   | `false` su qualsiasi licenziamento.     |
| `close`       | `[]`                | Scappare, fondare o il pulsante Chiudi. |

| Slot       | Designazione                                                                               |
| ---------- | ------------------------------------------------------------------------------------------ |
| `default`  | Corpo; scorre quando alto.                                                                 |
| `footer`   | Azioni allineate a destra (prima elementare secondaria, ultima primaria).                  |
| `leading`  | Prima del titolo, ad esempio un'icona dell'app.                                            |
| `subtitle` | Una linea ricca sotto il titolo (chips, codice); `description` rende ancora sotto di esso. |

Esposto: `close()`.

**Uso** per compiti focalizzati che bloccano la pagina (una forma breve, una decisione).
`OnSheet`; per un uso si/no di domanda `OnConfirm`.

<a id="onsheet"></a>

### OnSheet

Un pannello che scorre a destra (420 px), ad esempio per i log o i dettagli.

| Prop           | Tipologia | Predefinito | Designazione                                                             |
| -------------- | --------- | ----------- | ------------------------------------------------------------------------ |
| `open`         | `boolean` | richiesto   | Uso `v-model:open`.                                                      |
| `title`        | `string`  | richiesto   | Il `<h2>` e nome accessibile.                                            |
| `initialFocus` | `string`  | —           | Selettore da focalizzare prima; default al primo elemento focalizzabile. |

| Evento        | Carico di pagamento | Designazione                      |
| ------------- | ------------------- | --------------------------------- |
| `update:open` | `[open: boolean]`   | `false` quando e' stato respinto. |
| `close`       | `[]`                | Fuggire, fondare o chiudere.      |

| Slot      | Designazione                                                           |
| --------- | ---------------------------------------------------------------------- |
| `default` | Corpo rotante.                                                         |
| `actions` | Pulsanti di intestazione tra il titolo e Close, ad esempio "Copy all". |
| `footer`  | Barra inferiore con azioni giuste allineate.                           |

Esposto: `close()`.

<a id="onconfirm"></a>

### OnConfirm

Una finestra di dialogo di conferma con Annulla e Conferma.

| Prop              | Tipologia               | Predefinito | Designazione                                                                                         |
| ----------------- | ----------------------- | ----------- | ---------------------------------------------------------------------------------------------------- |
| `open`            | `boolean`               | richiesto   | Uso `v-model:open`.                                                                                  |
| `title`           | `string`                | richiesto   | La domanda, ad esempio "Delete Orbitfold?".                                                          |
| `description`     | `string`                | —           | Cosa succederà.                                                                                      |
| `confirmLabel`    | `string`                | —           | Predefiniti per "Confermare"; preferire il verbo ("Scelta").                                         |
| `cancelLabel`     | `string`                | —           | Predefiniti per "Cancel".                                                                            |
| `tone`            | `'primary' \| 'danger'` | `'primary'` | `danger`: rosso pulsante di conferma, no Fuga/rilasciatore di scarico, Annulla focalizzato prima.    |
| `loading`         | `boolean`               | —           | Spinner su Conferma mentre l'azione viene eseguita; Annulla è disattivata nel frattempo.             |
| `confirmDisabled` | `boolean`               | —           | Disabilitare Conferma fino a quando non vengono soddisfatti i prerequisiti (ad esempio un permesso). |

| Evento        | Carico di pagamento | Designazione                                                                 |
| ------------- | ------------------- | ---------------------------------------------------------------------------- |
| `confirm`     | `[]`                | Confermare cliccato; l'host esegue l'azione e chiude la finestra di dialogo. |
| `cancel`      | `[]`                | Annulla, Fuga o sfondo (non per `danger`).                                   |
| `update:open` | `[open: boolean]`   | `false` per annullare.                                                       |

| Slot      | Designazione                                                              |
| --------- | ------------------------------------------------------------------------- |
| `default` | Contenuto extra del corpo, ad esempio un elenco di ciò che verrà rimosso. |

**Accessibilità.** `role="alertdialog"`, nominato dal titolo e descritto dalla descrizione. Primario
conferma focus Conferma; quelli distruttivi si concentrano Annulla quindi Entra non distrugge mai per caso.

<a id="ontoast"></a>

### OnToast

Una singola scheda di notifica. Di solito reso da `OnToastRegion`; utilizzarlo direttamente per anteprime statiche.

| Prop          | Tipologia                                      | Predefinito | Designazione                                                    |
| ------------- | ---------------------------------------------- | ----------- | --------------------------------------------------------------- |
| `tone`        | `'info' \| 'success' \| 'warning' \| 'danger'` | `'info'`    | Icona e colore: info, check, triangolo, cross.                  |
| `title`       | `string`                                       | richiesto   | Una riga, ad esempio "Updated Prismark".                        |
| `description` | `string`                                       | —           | Linea di dettaglio.                                             |
| `actionLabel` | `string`                                       | —           | Un piccolo pulsante d'azione fantasma, ad esempio "Visualizza". |
| `time`        | `string`                                       | —           | Testo del tempo nell'angolo in alto a destra, ad esempio "Ora". |

| Evento   | Carico di pagamento | Designazione                              |
| -------- | ------------------- | ----------------------------------------- |
| `action` | `[]`                | Il pulsante di azione è stato cliccato.   |
| `close`  | `[]`                | Il pulsante di chiusura è stato cliccato. |

**Accessibilità.** `danger` i brindisi hanno `role="alert"` (annunziato immediatamente); altri si affidano alla cortesia della regione
live region. Il pulsante di chiusura è chiamato "Notifica di esclusione".

<a id="ontoastregion-and-createtoastqueue"></a>

### OnToastRegion e creareToastQueue

Lo stack fisso di notifiche in basso a destra, con tempistica gestita per voi.

| Prop    | Tipologia                | Predefinito | Designazione                                                          |
| ------- | ------------------------ | ----------- | --------------------------------------------------------------------- |
| `items` | `readonly OnToastItem[]` | richiesto   | `{ id, tone?, title, description?, actionLabel?, time?, duration? }`. |
| `max`   | `number`                 | `3`         | I tostati visibili; quelli più vecchi si nascondono per primo.        |

| Evento    | Carico di pagamento | Designazione                                                                                                    |
| --------- | ------------------- | --------------------------------------------------------------------------------------------------------------- |
| `dismiss` | `[id: string]`      | Rimuovere l'oggetto: emesso dopo la sua `duration` (default 4000 ms; `0` mantiene), su Close, e dopo un'azione. |
| `action`  | `[id: string]`      | Il pulsante di azione dell'articolo è stato cliccato (seguito da `dismiss`).                                    |

I timer si fermano mentre il puntatore o la messa a fuoco è all'interno della regione e riprendere con il tempo rimanente.

```ts
const toasts = createToastQueue(); // one per app (or per request in SSR), never a shared module singleton
toasts.push({ tone: 'success', title: 'Copied' }); // returns the id
toasts.push({ id: 'sync', title: 'Syncing…', duration: 0 }); // same id replaces, e.g. progress updates
```

```vue
<OnToastRegion :items="toasts.items.value" @dismiss="toasts.dismiss" @action="openDetails" />
```

`createToastQueue()` restituisce `{ items, push, dismiss, clear }` (`items` è un ref di sola lettura).

**Uso** per un breve, non bloccare il feedback su qualcosa che è successo. Mai per informazioni l'utente deve agire su
(utilizzare una finestra di dialogo o un messaggio in linea).

**Accessibilità.** A `<section aria-label="Notifications">` con un `aria-live="polite"` elenco; i guasti annunciano
subito attraverso la propria `role="alert"`.

<a id="oncommandpalette"></a>

### OnCommandPalette

Una tavolozza di comando guidata da ricerca (⌘K): risultati raggruppati con selezione della tastiera.

| Prop          | Tipologia                   | Predefinito | Designazione                                                                                                      |
| ------------- | --------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| `open`        | `boolean`                   | richiesto   | Uso `v-model:open`.                                                                                               |
| `query`       | `string`                    | richiesto   | Uso `v-model:query`; i filtri dell'host.                                                                          |
| `groups`      | `readonly OnCommandGroup[]` | richiesto   | `{ key, label, items: OnCommandItem[] }`; i gruppi vuoti sono nascosti.                                           |
| `placeholder` | `string`                    | —           | Input segnaposto e nome; default per "Ricerca o eseguire un comando".                                             |
| `loading`     | `boolean`                   | —           | Senza risultati, mostra "Ricerca..." invece del testo vuoto.                                                      |
| `emptyText`   | `string`                    | —           | Predefiniti per "Nessun risultato corrispondente".                                                                |
| `hints`       | `readonly string[]`         | —           | Suggerimenti di piè di pagina; default a "↑↓ Select" e "↵ Open". Aggiungi il tuo per il meta e copia scorciatoie. |

`OnCommandItem`: `{ key, label, description?, icon?, image?, iconTone?, badge?, badgeTone?, hint? }` — `icon` è un
icona di 18 px (per azioni e navigazione), `image` a 26 px image URL (un'icona dell'app, un avatar) che rientra al
icona se non riesce a caricare; `iconTone: 'accent'` colori l'icona; `badge` è un `OnChip` (accente per impostazione predefinita); `hint`
mostra un indizio chiave sulla destra.

| Evento         | Carico di pagamento                                 | Designazione                                                                                                                         |
| -------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `update:open`  | `[open: boolean]`                                   | `false` su Fuga o un clic fuori.                                                                                                     |
| `update:query` | `[query: string]`                                   | Ogni input.                                                                                                                          |
| `select`       | `[item: OnCommandItem, options: { meta: boolean }]` | Inserire o fare clic sull'elemento attivo; `meta` con Comando/Ctrl (un'azione secondaria, ad esempio, aperta in una nuova finestra). |
| `copy`         | `[item: OnCommandItem]`                             | Comando/Ctrl-C mentre non viene selezionato alcun testo di input; l'host decide cosa copiare (un link, un ID).                       |

L'elemento attivo si resetta al primo risultato ogni volta che i risultati cambiano o la tavolozza si apre.

**Accessibilità.** Una finestra di dialogo top-placed denominata "Command tavolozza". L'ingresso è un `combobox` (`aria-autocomplete="list"`,
`aria-controls`, `aria-activedescendant`) su un `listbox` di `role="group"` sezioni con `option`S e
`aria-selected`. ArrowUp/ArrowDown passare attraverso tutti i gruppi (wrapping, scorrendo l'elemento in vista), Invio seleziona,
La fuga si chiude; le chiavi vengono ignorate mentre un metodo di input sta componendo.

---

<a id="layout-and-navigation"></a>

## Telaio e navigazione

<a id="onappshell"></a>

### OnAppShell

La struttura della pagina: barra laterale, barra degli strumenti, colonna principale e binario destro opzionale.

| Prop         | Tipologia                   | Predefinito   | Designazione                                                                                                                                                                                                                                                                                |
| ------------ | --------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hasRail`    | `boolean`                   | `false`       | La pagina ha una guida destra.                                                                                                                                                                                                                                                              |
| `railDocked` | `boolean`                   | `true`        | Modalità contenitore: la rotaia rimane accanto alla colonna principale (decidere dalla larghezza della finestra, ad esempio ≥ 1240 px).                                                                                                                                                     |
| `railOpen`   | `boolean`                   | `false`       | Modalità contenitore, non docked: mostrare la rotaia come un sovrapposizione.                                                                                                                                                                                                               |
| `scroll`     | `'container' \| 'document'` | `'container'` | `container` (desktop app): altezza della finestra fissa, la colonna principale scorre da sola. `document` (web): la pagina scorre; la barra laterale e la barra degli strumenti sono appiccicose da `md`, la ferrovia si attacca `xl` e si muove al di sotto del contenuto prima di questo. |

| Slot         | Designazione                                                                                                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sidebar`    | Di solito `OnSidebar` (224 px colonna).                                                                                                                |
| `toolbar`    | Di solito `OnToolbar`.                                                                                                                                 |
| `compactBar` | Modalità del documento qui sotto `md`: sostituisce la barra laterale e la barra degli strumenti (ad esempio una barra superiore compatta con un menu). |
| `default`    | Il contenuto principale.                                                                                                                               |
| `rail`       | Di solito `OnRailPanel` (288 px).                                                                                                                      |
| `footer`     | Modalità Documento: dopo il contenuto e la rotaia.                                                                                                     |
| `overlay`    | Sovrapposizioni che appartengono al guscio (terreno, tavolozza).                                                                                       |

Esposto: `scrollToTop()` — scorre la colonna principale (modalità container) o la finestra (modalità documento), ad esempio dopo
navigazione.

**Accessibilità.** Il contenuto è un `<main>` punto di riferimento; dare la navigazione laterale un `label` (v. `OnSidebar`).
Tenere un guscio per pagina.

<a id="onsidebar"></a>

### OnSidebar

Brand, una scheda superiore opzionale, link di navigazione raggruppati e piè di pagina.

| Prop          | Tipologia                   | Predefinito | Designazione                                                                                   |
| ------------- | --------------------------- | ----------- | ---------------------------------------------------------------------------------------------- |
| `groups`      | `readonly OnSidebarGroup[]` | richiesto   | `{ key, label, items: OnSidebarItem[] }`.                                                      |
| `footerItems` | `readonly OnSidebarItem[]`  | `[]`        | Elementi incassati sul fondo (Impostazioni, Informazioni).                                     |
| `label`       | `string`                    | richiesto   | Nome accessibile della navigazione.                                                            |
| `topLabel`    | `string`                    | —           | Sopracciglia sopra `top` slot.                                                                 |
| `brandName`   | `string`                    | —           | Marchio di testo quando il `brand` la fessura è vuota.                                         |
| `dragRegion`  | `boolean`                   | `false`     | Finestre desktop: un'area trascinabile da 52 px per macOS semafori (`data-tauri-drag-region`). |
| `linkAs`      | `string \| Component`       | `'a'`       | Componente di collegamento per gli elementi.                                                   |

`OnSidebarItem`: `{ key, label, href, icon?, active?, count?, meta?, badge?, dot?, badgeLabel? }` — passato a
`OnNavItem`.

| Slot     | Designazione                                                                                                                                                                     |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `brand`  | Il marchio e il nome dell'app (logo plus wordmark); il sistema di progettazione non spedisce alcun logo. Senza di esso e senza `brandName` la riga del marchio è lasciata fuori. |
| `top`    | Una carta sotto il marchio, ad esempio "Get the desktop app".                                                                                                                    |
| `footer` | Contenuto extra dopo gli elementi del piè di pagina.                                                                                                                             |

**Accessibilità.** An `<aside>` con un `<nav aria-label>`; le etichette di gruppo sono voci visive al di sopra dei loro articoli;
l'oggetto corrente ha `aria-current="page"`. Se la fessura del marchio è solo un'immagine, darlo un `alt` testo o un nome visibile.

<a id="onnavitem"></a>

### OnNavItem

Una riga di navigazione: icona, etichetta e un conteggio, distintivo, punto o meta testo sulla destra.

| Prop         | Tipologia             | Predefinito | Designazione                                                                                |
| ------------ | --------------------- | ----------- | ------------------------------------------------------------------------------------------- |
| `icon`       | `string`              | —           | Icona alle 17.                                                                              |
| `active`     | `boolean`             | —           | La pagina corrente: evidenziata, `aria-current="page"`.                                     |
| `count`      | `number`              | —           | Contare a destra.                                                                           |
| `meta`       | `string`              | —           | Testo mutato sulla destra quando non c'è conteggio, ad esempio "34 GB".                     |
| `badge`      | `number`              | —           | Tasso di conteggio corallo (solo quando > 0); prende la priorità `dot`, `count` e `meta`.   |
| `dot`        | `boolean`             | —           | Un punto di attenzione senza un numero; prende la priorità `count` e `meta`.                |
| `badgeLabel` | `string`              | —           | Testo accessibile del badge o punto, ad esempio "4 aggiornamenti".                          |
| `as`         | `string \| Component` | `'a'`       | Elemento o componente del collegamento; un semplice `a` senza `href` diventa un `<button>`. |
| `href`       | `string`              | —           | Link URL (nativo) `a`).                                                                     |
| `to`         | `string`              | —           | Destinazione del router quando `as` è un collegamento router.                               |

| Slot      | Designazione             |
| --------- | ------------------------ |
| `default` | L'etichetta (truncates). |

**Accessibilità.** Il distintivo è chiamato da `badgeLabel`; a) a) b) a) a) a) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b) b `badgeLabel` è `role="img"`, senza di esso è
Preferisci dare ogni distintivo e fare un'etichetta.

<a id="ontoolbar"></a>

### OnToolbar

La barra sopra la colonna principale: avviare lo slot, uno spacer trascinabile, un pulsante di ricerca e uno slot finale.

| Prop             | Tipologia | Predefinito | Designazione                                                                                                       |
| ---------------- | --------- | ----------- | ------------------------------------------------------------------------------------------------------------------ |
| `searchLabel`    | `string`  | richiesto   | Testo e nome accessibile del pulsante di ricerca, ad esempio "Search app" o "Search files".                        |
| `searchShortcut` | `string`  | —           | Suggerimento chiave sul pulsante, ad esempio. `⌘K`; anche insiemi `aria-keyshortcuts="Meta+K"`.                    |
| `dragRegion`     | `boolean` | `false`     | Finestre desktop: la barra e lo distanziatore sono regioni di trascinamento; i suoi pulsanti rimangono cliccabili. |

| Evento   | Carico di pagamento | Designazione                                                         |
| -------- | ------------------- | -------------------------------------------------------------------- |
| `search` | `[]`                | Il pulsante di ricerca è stato cliccato; apri la palette di comando. |

| Slot    | Designazione                                                     |
| ------- | ---------------------------------------------------------------- |
| `start` | Comandi di guida, ad esempio i pulsanti di retro / verso l'alto. |
| `end`   | Controlli di tracciamento, ad esempio notifiche, lingua.         |

<a id="ontopnav"></a>

### OnTopNav

L'intestazione del sito web: home link con il marchio dell'app, link centrati, ricerca, una chiamata opzionale all'azione e un cellulare
menu.

| Prop             | Tipologia                 | Predefinito | Designazione                                                                                                                          |
| ---------------- | ------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `items`          | `readonly OnTopNavItem[]` | richiesto   | `{ label, href, active? }`.                                                                                                           |
| `homeHref`       | `string`                  | `'/'`       | Obiettivo del collegamento a casa.                                                                                                    |
| `brandName`      | `string`                  | —           | Marchio di testo in pianura nel link di casa quando il `brand` lo slot è vuoto; anche i nomi del link ("{brandName} home", tradotto). |
| `homeLabel`      | `string`                  | —           | Nome accessibile del link di casa, sovrascrivendo quello da `brandName`.                                                              |
| `downloadHref`   | `string`                  | —           | Pulsante di chiamata a azione a destra (ad esempio una pagina di download); nascosto senza di essa.                                   |
| `downloadLabel`  | `string`                  | —           | Il suo testo; predefinito "Scarica".                                                                                                  |
| `searchable`     | `boolean`                 | `true`      | Mostra il campo di ricerca e il pulsante.                                                                                             |
| `searchLabel`    | `string`                  | —           | Cerca testo e nome; default per "Cerca".                                                                                              |
| `searchShortcut` | `string`                  | —           | Un indizio chiave nel campo di ricerca, ad esempio. `⌘K`.                                                                             |
| `label`          | `string`                  | —           | Nome accessibile della navigazione; default di "Main".                                                                                |
| `linkAs`         | `string \| Component`     | `'a'`       | Componente di collegamento.                                                                                                           |

| Evento   | Carico di pagamento | Designazione                                                                     |
| -------- | ------------------- | -------------------------------------------------------------------------------- |
| `search` | `[]`                | Il campo di ricerca o l'icona è stato cliccato; aprire la tavolozza dei comandi. |

| Slot    | Designazione                                                                                                             |
| ------- | ------------------------------------------------------------------------------------------------------------------------ |
| `brand` | Il marchio dell'app all'interno del link home (logo plus wordmark). Il sistema di progettazione non spedisce alcun logo. |
| `extra` | Tra ricerca e chiamata all'azione, ad esempio un menu di lingua.                                                         |

Comportamento: i collegamenti mostrano da 1024 px; di seguito, un pulsante del menu apre un pannello con i collegamenti (e la chiamata all'azione sotto
640 px). La ricerca è un campo completo a 768–1023 px e da 1280 px, un pulsante icona altrimenti.
sfondo diventa traslucido con un blur.

**Accessibilità.** Un appiccicoso `<header>` con `<nav>` monumenti di nome `label`. I link attivi hanno
`aria-current="page"`. Nome del link di casa: pass `brandName` ( soddisfa anche "label in name" quando il wordmark
mostra lo stesso nome) o `homeLabel`; con né, né, `brand` lo slot deve portare il nome stesso (ad esempio un `img alt`).
Il pulsante del menu ha `aria-expanded`/`aria-controls` e un nome "Aperto menu" / "Close menu"; Fuga chiude il pannello
e torna a fuoco al pulsante. Il campo di ricerca ha `aria-haspopup="dialog"`.

<a id="onrailpanel"></a>

### OnRailPanel

Il telaio destro (288 px) per riassunti e contenuti secondari.

| Prop         | Tipologia | Predefinito | Designazione                                                                                                                                                                     |
| ------------ | --------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `responsive` | `boolean` | `false`     | Web: qui sotto `xl` la rotaia siede sotto il contenuto principale con un bordo superiore e scorre con la pagina; da `xl` è una colonna con un bordo sinistro e la sua pergamena. |

| Slot      | Designazione                         |
| --------- | ------------------------------------ |
| `default` | Di solito parecchi `OnRailSection`S. |

**Accessibilità.** An `<aside>` punto di riferimento; è contenuto complementare, quindi la pagina deve avere senso senza di essa.

<a id="onrailsection"></a>

### OnRailSection

Una sezione intitolata all'interno della rotaia.

| Prop       | Tipologia | Predefinito | Designazione                  |
| ---------- | --------- | ----------- | ----------------------------- |
| `title`    | `string`  | richiesto   | Il `<h2>`.                    |
| `subtitle` | `string`  | —           | Linea mutata sotto il titolo. |

| Slot      | Designazione                                               |
| --------- | ---------------------------------------------------------- |
| `default` | Contenuto della sezione (tegole dello stato, liste brevi). |

---

<a id="showcase"></a>

## Vetrina

<a id="onfeaturehero"></a>

### OnFeatureHero

Una grande scheda caratteristica con una fase anelli e oggetti decorativi galleggianti.

| Prop           | Tipologia             | Predefinito | Designazione                                                                                                      |
| -------------- | --------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------- |
| `title`        | `string`              | richiesto   | La direzione.                                                                                                     |
| `subtitle`     | `string`              | —           | Una seconda linea di salmone, all'interno della testata.                                                          |
| `badge`        | `string`              | —           | Piccolo testo evidenziato sopra il titolo, ad esempio "Featured this week".                                       |
| `description`  | `string`              | —           | Corpo con corpo `**…**` enfasi (`OnHighlightText`).                                                               |
| `floats`       | `readonly T[]`        | `[]`        | Fino a tre oggetti decorativi posti sul palco, ciascuno disegnato dal `float` slot.                               |
| `glowColor`    | `string \| null`      | —           | Tinta di esagonale a sei cifre del bagliore (ammorbidito in modalità leggera); il bagliore di token altrimenti.   |
| `actionLabel`  | `string`              | —           | Testo del pulsante primario; default di "Get iniziato".                                                           |
| `actionIcon`   | `string`              | —           | Icona lucida opzionale prima del testo del pulsante primario, ad esempio. `download`.                             |
| `detailHref`   | `string`              | —           | Aggiunge un pulsante di collegamento "Visualizza dettagli".                                                       |
| `detailLabel`  | `string`              | —           | Il suo testo.                                                                                                     |
| `linkAs`       | `string \| Component` | `'a'`       | Componente di collegamento per il link di dettaglio.                                                              |
| `responsive`   | `boolean`             | —           | Web: 360 px alto da 1024 px (276 px altrimenti), palco scalato.                                                   |
| `compact`      | `boolean`             | —           | Scheda più piccola per le griglie; la fase mostra solo quando la carta è larga almeno 460 px (questry container). |
| `headingLevel` | `2 \| 3`              | `2`         | Elemento di testa.                                                                                                |

| Evento   | Carico di pagamento | Designazione                             |
| -------- | ------------------- | ---------------------------------------- |
| `action` | `[]`                | Il pulsante principale è stato cliccato. |

| Slot               | Firma                                                                 | Designazione                                                                                                                                        |
| ------------------ | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `float`            | `(props: { item: T; index: number; size: OnAppIconSize }) => unknown` | Un elemento galleggiante, in genere `<OnAppIcon :size="size" :priority="index === 0" …>`. Le dimensioni sono 118 / 54 / 46 (compatto 64 / 40 / 32). |
| `badge-decoration` | `() => unknown`                                                       | Un piccolo segno dopo il testo del badge (circa 13 px, `currentColor`).                                                                             |
| `actions`          | `() => unknown`                                                       | Sostituisce il pulsante primario e il link di dettaglio.                                                                                            |

```vue
<OnFeatureHero title="Orbitfold 4" subtitle="Plans that keep up with you." :floats="apps" detail-href="/apps/orbitfold">
  <template #float="{ item, size, index }">
    <OnAppIcon :name="item.name" :src="item.icon" :size="size" :priority="index === 0" />
  </template>
</OnFeatureHero>
```

**Uso** una volta per pagina per il punto di forza principale. Gli elementi galleggianti sono nascosti sotto i 768 px, dove coprirebbero il testo.

**Accessibilità.** L'intera fase (glow, anelli, carri) è `aria-hidden`; mettere qualsiasi informazione che trasportano in
testo. Il sottotitolo fa parte della voce. Il bagliore respira lentamente e si ferma con movimento ridotto.

<a id="onappicon"></a>

### OnAppIcon

Una tegola app: l'immagine dell'app, o una lettera tile generata; `variant="terminal"` disegna una piastrella di riga di comando.

| Prop         | Tipologia                                                                     | Predefinito | Designazione                                                                                                                                            |
| ------------ | ----------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`       | `string`                                                                      | richiesto   | Nome di visualizzazione; la lettera tile mostra le sue iniziali (primo carattere CJK, o le prime lettere fino a due parole).                            |
| `variant`    | `'app' \| 'terminal'`                                                         | `'app'`     | Fallback quando non c'è immagine: tile lettera o tessere terminale (dark in entrambi i temi, abbreviazione monospaziale, barra colorata).               |
| `seed`       | `string`                                                                      | —           | Identificatore stabile hashed (FNV-1a) per scegliere il colore della piastrella e, per le piastrelle terminali, l'abbreviazione; di default per `name`. |
| `initials`   | `string`                                                                      | —           | Testo di piastrelle al posto di quello derivato, ad esempio una forma breve convenzionale di un comando.                                                |
| `src`        | `string \| null`                                                              | —           | URL immagine; su guasto di carico (anche uno che non è riuscito prima dell'idratazione) la piastrella mostra invece.                                    |
| `renditions` | `readonly OnImageRendition[] \| null`                                         | —           | `{ width, url }` interpretazioni di `src` per `srcset`; il browser sceglie uno per la dimensione resid.                                                 |
| `size`       | `20 \| 24 \| 26 \| 28 \| 30 \| 32 \| 40 \| 44 \| 46 \| 54 \| 64 \| 96 \| 118` | `44`        | Lato in px.                                                                                                                                             |
| `accent`     | `string \| null`                                                              | —           | accento esagonale a sei cifre per la piastrella della lettera; altrimenti un colore della tavolozza dal seme.                                           |
| `label`      | `string`                                                                      | —           | Rende l'icona un'immagine con questo nome; altrimenti è decorativo.                                                                                     |
| `priority`   | `boolean`                                                                     | —           | Caricamento ansioso e alta priorità fetch per la prima icona visibile (eroe, intestazione di dettaglio).                                                |

Le immagini vengono mostrate come consegnate (`object-contain`, nessuna maschera, carico pigro); piastrelle ottenere il raggio app-icon e ombra.
Aiutanti: `iconColor(seed, accent)`, `darken(hex)`, `iconInitials(name)`, `cliAbbreviation(command)`, `ICON_PALETTE`.

**Accessibilità.** Decorazione (`aria-hidden`) a meno che `label` è impostato; accanto a un nome visibile lasciare `label` Fuori.
