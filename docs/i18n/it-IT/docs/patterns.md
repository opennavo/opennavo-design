[English](../../../patterns.md) · [简体中文](../../zh-CN/docs/patterns.md) · [繁體中文](../../zh-Hant/docs/patterns.md) · [日本語](../../ja-JP/docs/patterns.md) · [Español](../../es-ES/docs/patterns.md) · [Português (Brasil)](../../pt-BR/docs/patterns.md) · [Русский](../../ru-RU/docs/patterns.md) · [Deutsch](../../de-DE/docs/patterns.md) · [Français](../../fr-FR/docs/patterns.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="patterns"></a>

# Modelli

Come i componenti si combinano negli schermi. Ogni modello nomina i componenti che utilizza; i loro dettagli sono in
[Componenti](components.md).

<a id="navigation"></a>

## Navigazione

- **Barra laterale** (`OnSidebar`, `OnNavItem`): il marchio, poi i gruppi con un `text-label` titolo (Sfoglia, Liste, Strumenti,
  Mine ...), poi le impostazioni incassate in basso. L'elemento corrente utilizza `component.navActive` e `aria-current="page"`.
  I conti siedono a destra allineati `text-ink-tertiary`; un conteggio che ha bisogno di attenzione diventa un distintivo di corallo; un segno di puntino
  "qualcosa di nuovo" senza numero.
- **Barra degli strumenti** (`OnToolbar`): back/forward e ricaricare a sinistra in applicazioni desktop (il browser li fornisce sul
  web), il trigger di ricerca con il suo `⌘K` accenno a destra, poi interruttori globali (tema, lingua sul web).
- **tavolozza dei comandi** (`OnCommandPalette`, `⌘K` / `Ctrl K`): azioni e destinazioni prima, con
  "Vedi tutti i risultati per "q"" come prima riga (Enter apre la pagina dei risultati completi); elementi qui sotto.
  si apre, fuga chiude e ritorna messa a fuoco.
- **Schede** (`OnTabs`) cambiare le viste di un oggetto ( Panoramica di un'app, Versioni, Dipendenze, Dettagli) e sono collegamenti
  quando ogni vista ha il suo URL. **Comandi segmentati** (`OnSegmented`) filtrare o commutare le modalità all'interno di una vista (periodo,
  ordinare, "Tutto / Successo / Non riuscito").
- **Pancroci** (`OnBreadcrumb`) appaiono su pagine di dettaglio raggiunte da un elenco.
- Ogni vista ha un URL (le tratte di destinazione incluse) così profondi collegamenti, indietro / avanti e ripristinare il lavoro.

<a id="page-anatomy"></a>

## Anatomia

1. Intestazione di pagina (`OnPageHeader`): `text-title1` titolo, una riga di testo secondario con il fatto chiave (conti, ultimi
   check), azioni di pagina a destra allineate (primario ultima).
2. Banner opzionale per stato degradato (offline, guasto parziale) direttamente sotto l'intestazione.
3. Sezioni (`OnSectionHeader`): `text-headline` titolo, un breve sottotitolo terziario, "Visualizza tutto →" a destra.
4. La ferrovia (`OnRailPanel`, `OnRailSection`) trasporta i riassunti e le azioni secondarie; non è necessario nulla nella rotaia
   per terminare un'attività nella colonna principale.

<a id="lists-cards-and-tables"></a>

## Liste, carte e tavoli

- **Riquadri** per la navigazione (icona, nome, sommario di una linea, due o tre statistiche, un'azione). L'intera carta è il link;
  il pulsante di azione all'interno ferma la propagazione.
- **Righe** per liste dense si agisce su (aggiornamento, storia, applicazioni installate): icona, nome e meta a sinistra, chip di stato
  nel mezzo, azioni giuste; azioni distruttive vivono nel menu apparenza della fila.
- **Tavole** (`OnTable`) quando le colonne sono confrontate o ordinate; colonne numeriche a destra allineate con `tabular-nums`;
  selezionando le caselle di controllo nella prima colonna; un intestazione appiccicosa nelle lunghe tabelle.
- Liste lunghe Paginate (`OnPagination`) piuttosto che rotolo infinito, quindi la posizione è collegabile e stabile.
- **La raffinazione mantiene il contenuto:** mentre una query, ordinare, filtrare o modificare la pagina, continuare a mostrare i risultati precedenti (dimmed
  se necessario) fino all'arrivo dei nuovi; riservare spazio per le linee di conteggio opzionali in modo che nulla cambi.

<a id="search"></a>

## Ricerca

- La barra degli strumenti apre la tavolozza; una pagina di ricerca mostra i risultati completi con i filtri come controlli segmentati o
  patatine.
- Aggiornamento dei risultati come tipi di utente senza compensazione tra; "Nessun risultato per "q" viene fornito con un suggerimento concreto
  (un'altra ortografia, il nome inglese, una fonte diversa).

<a id="settings-and-forms"></a>

## Impostazioni e forme

- Le impostazioni sono raggruppate in schede di righe (`SettingRow` modello): etichetta e optional one-line accenno sulla sinistra, la
  controllo a destra, righe separate da `border.subtle`.
- **Le modifiche si applicano immediatamente** — toggles, controlli segmentati, menu; non c'è nessun pulsante Salva nelle impostazioni; una modifica
  che fallisce ritorna e dice perché in un brindisi.
- Scegliere il controllo dal numero di opzioni: una toggle per on/off, un controllo segmentato per due a quattro esclusivi
  opzioni, un menu per liste più lunghe (lingua) con la scelta corrente controllata.
- Gli ingressi di testo convalidano su blur o inviano, mai su ogni tasto; gli errori appaiono sotto il campo in
  `text-status-danger` con la correzione ("Usa un indirizzo completo https://"), e il campo mantiene il suo valore.
- I moduli sul web sono una colonna con le etichette sopra i campi; il pulsante di presentazione viene disabilitato fino a quando i campi richiesti non sono
  valido, con un accenno che dice ciò che manca.

<a id="feedback"></a>

## Feedback

| Situazione                                         | Uso                                                                                                              |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Un'azione terminata (copied, aggiunto, installato) | Toast, successo o neutrale, licenzia dopo 4 s, pause su hover                                                    |
| Un'azione fallita                                  | Toast con la ragione e, quando possibile, un'azione (Ricerca, Vedi log)                                          |
| Una vista è degradata (offline, dati parziali)     | Banner sotto l'intestazione che dice cosa funziona ancora                                                        |
| Una decisione è richiesta                          | Dialogo (`OnConfirm`, `OnModal`)                                                                                 |
| Un lungo compito è in esecuzione                   | Progressi in posizione (freccia, scheda o pannello di attività) e nella barra dei menu se continua in background |
| È successo qualcosa mentre la finestra era chiusa. | Una notifica di sistema, solo se l'utente li ha abilitati                                                        |

Nella maggior parte dei tre toast sono visibili; i guasti sono annunciati immediatamente ai lettori dello schermo (`role="alert"`), altri
Educatamente.

<a id="destructive-and-system-changing-actions"></a>

## Azioni distruttive e di cambiamento del sistema

1. Dite cosa accadrà, con l'elenco di ciò che sarà rimosso o cambiato e la sua dimensione.
2. Predefinito l'opzione reversibile: passare a Cestino, disabilitare un elemento di login piuttosto che eliminarlo, mantenere un rollback.
3. Il pulsante di conferma chiama l'azione ("Uninstall", "Move 14 elementi per Cestino") e usa la variante di pericolo; Annulla è
   la messa a fuoco predefinita.
4. Dopo l'azione: il risultato in atto, un brindisi con Undo quando è possibile annullare, e un ingresso in
   storia.
5. Azioni che hanno bisogno di diritti dell'amministratore lo dicono prima di iniziare; la parola d'ordine nomi di prompt per ciò che è per.

<a id="loading-progress-and-results"></a>

## Carico, progresso e risultati

- Primo carico di vista: scheletri (`OnSkeleton`) a forma di contenuto, senza giranti su pagine intere.
- Aggiornamento, raffinatezza, ricariche di sfondo: mantenere il contenuto attuale; un piccolo progresso accenno al massimo.
- Le attività lunghe mostrano determinati progressi non appena esiste un numero (byte, elementi), con il passo attuale delle parole,
  e può essere annullato quando la cancellazione è sicura. I registri sono disponibili ma sono crollati.
- **I risultati si stabiliscono subito:** quando un compito finisce, ogni luogo che mostra l'oggetto (row, dettaglio pagina, sidebar
  conteggio, barra dei menu) aggiornamenti immediatamente dal risultato dell'attività, non dopo il successivo aggiornamento periodico.

<a id="empty-error-and-offline-states"></a>

## Stati vuoti, errori e offline

- **Vuoto** (`OnEmpty`): un'icona, un breve titolo ("La tua lista è vuota"), una frase che dice come riempirla, e
  l'azione quando c'è uno.
- **Errore** (`OnErrorState`): ciò che è fallito in parole semplici, Retry, e nessuna traccia di stack; un aggiornamento fallito di una vista che
  aveva contenuto mostra un banner invece e mantiene il contenuto.
- **Offline** (`OnOffline`): il contenuto memorizzato nella cache rimane utilizzabile; le funzionalità che necessitano della rete dicono così dove sarebbero
  appaiono.

<a id="permissions"></a>

## Permissioni

- Chiedete al momento del bisogno, con una frase del perché e che cosa rimane privato.
- "Enable" apre il riquadro Impostazioni del sistema esatto; una piccola guida galleggiante mostra cosa trascinare o commutare, senza prendere
  focus da Impostazioni di sistema.
- Quando l'utente ritorna, la vista ricontrolla e continua da sola; se macOS richiede un rilancio, la vista dice così
  e lo offre.
- Mai nag: un permesso rifiutato lascia una riga tranquilla con Attiva, non ripetuti dialoghi.

<a id="menu-bar-items-and-popovers-macos"></a>

## Elementi di barra del menu e popover (macOS)

- Gli elementi della barra dei menu sono immagini dei modelli disegnate come elementi di sistema; testo e grafici seguono lo stile della barra dei menu del sistema.
- Fare clic su un elemento apre il suo popover sotto di esso; fare clic di nuovo o altrove lo chiude. Popovers non attivare mai il
  finestra principale o rubare la messa a fuoco dall'app in cui l'utente è.
- I popover sono carte compatte (`surface.card`, `rounded-panel`) con le più utili tre a cinque righe, una prima
  azione e un link che apre la vista completa nella finestra principale.

<a id="onboarding"></a>

## A bordo

Una sola schermata della lista di controllo: ogni requisito è una riga con un'icona di stato, che cosa è e un'azione fissa; la prima
Il pulsante "Get start" consente quando le righe richieste passano, con una frase che dice ciò che manca ancora.
i passaggi sono skippable e raggiungibili in seguito in Impostazioni.

<a id="website-specifics"></a>

## Specifiche del sito

- Il sito non chiede mai un account. Le scelte per visitatori (tema, consenso, suggerimento linguistico, liste salvate) vivono in
  il browser.
- I link "Apri in app" chiedono all'app desktop di mostrare cosa farebbe; l'app chiede sempre la conferma prima
  eseguire qualsiasi cosa una pagina web richiesta.
- Un suggerimento linguistico appare una volta, dismissibile, e non reindirizza mai da solo.
