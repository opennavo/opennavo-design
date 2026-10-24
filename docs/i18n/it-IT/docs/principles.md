[English](../../../principles.md) · [简体中文](../../zh-CN/docs/principles.md) · [繁體中文](../../zh-Hant/docs/principles.md) · [日本語](../../ja-JP/docs/principles.md) · [Español](../../es-ES/docs/principles.md) · [Português (Brasil)](../../pt-BR/docs/principles.md) · [Русский](../../ru-RU/docs/principles.md) · [Deutsch](../../de-DE/docs/principles.md) · [Français](../../fr-FR/docs/principles.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="principles"></a>

# Principi

OpenNavo le applicazioni gestiscono le cose che le persone si preoccupano sul proprio computer: che cosa è installato, che cosa viene eseguito al login, che cosa
viene eliminato, che cosa parla alla rete. L'interfaccia deve sentirsi calma e affidabile prima che si senta intelligente.
Questi principi decidono i trade-off; il resto della spec li applica.

<a id="1-content-first-chrome-recedes"></a>

## 1. Contenuto prima, cromato recedes

Le superfici sono quasi neutro e passo per piccole quantità; i bordi sono linee di capelli. Il colore è riservato per il significato — il
marca accento per l'unica cosa da fare il prossimo, i colori di stato per lo stato — mai per la decorazione.
sfondo colorato per guardare finito, la gerarchia è sbagliata.

- Due temi, entrambi di prima classe. L'oscuritÃ Ã ̈ l'aspetto predefinito del marchio; la luce non Ã ̈ un filtro sopra di esso.
  token porta un valore per ogni tema, e entrambi sono controllati per il contrasto in CI ([Colore](color.md)).
- Glows e gradienti sono ammessi in esattamente due posti: eroi caratteristica e il marchio di marca.
  Modalità.

<a id="2-say-what-will-happen-then-do-exactly-that"></a>

## 2. Di' cosa succederà, allora fai esattamente quello che vuoi.

Prima di tutto cambia la macchina dell'utente, l'interfaccia afferma l'effetto in parole semplici e, dove aiuta, mostra
il comando effettivo o l'elenco dei file. Pulsanti nominare l'azione ("Uninstall", "Move to Trash"), non "OK".
"Niente succede finché non confermi" è una promessa che il codice mantiene.

- Le azioni distruttive confermano, e di default alla variante reversibile (Trash prima di eliminare, disabilitare prima di rimuovere).
- Dopo l'azione, il risultato appare dove l'utente ha iniziato, subito ([Modelli › I risultati si stabiliscono subito](patterns.md#loading-progress-and-results)).

<a id="3-local-first-and-say-so"></a>

## 3. Prima locale, e dire così

I dati letti dalla macchina dell'utente rimangono lì a meno che non scelgano il contrario.
sensibile (utilizzo del disk, elementi di avvio, connessioni di rete), una nota di una linea dice dove i dati vanno — di solito
"Solo su questo Mac; nulla viene caricato", quando qualcosa va su un server, la copia chiama il server.

<a id="4-stable-under-the-pointer"></a>

## 4. Stabile sotto il puntatore

Il layout non svuota e riempie mai mentre l'utente interagisce con esso. Digitando in un campo di ricerca, cambiando un
smistamento, paging o un aggiornamento di sfondo mantiene il contenuto precedente fino a quando il nuovo contenuto è pronto, e le linee opzionali
Gli scheletri sono solo per il primo carico di vista. Un aggiornamento fallito mantiene l'ultimo buon contenuto
e lo dice in un banner. La gente legge flicker come "l'app è rotta".

<a id="5-respect-the-platform"></a>

## 5. Rispettare la piattaforma

- **macOS:** semaforo nativo e comportamento della barra del titolo, Impostazioni di sistema collegamenti profondi per autorizzazioni, elementi della barra dei menu
  che si comportano come le immagini del sistema (template, mai attivando l'app o rubando fuoco), tasti di scelta rapida
  che corrispondono al Mac (Cerca ⌘K, ⌘, impostazioni, Escape closes).
- **Web:** pagine che possono essere memorizzate e condivise in modo semplice e veloce, in modo da nulla HTML dipende dal visitatore;
  le scelte per-visitor (tema, suggerimento di lingua, consenso) si applicano nel browser.
- **Strumenti nativi** (SwiftUI, Flutter) utilizzare gli stessi gettoni con i propri controlli e font di sistema della piattaforma.

<a id="6-quiet-by-default"></a>

## 6. Silenzio per impostazione predefinita

Utilizzare il feedback più leggero che fa il lavoro: stato in linea per le cose che persistono, un brindisi per un'azione completa, un
banner per una vista degradata, una finestra di dialogo solo quando l'utente deve decidere. Mai interrompere per le informazioni.
fuori dalla finestra sono opt-in e dire perché sono venuti.

<a id="7-one-system-for-every-app"></a>

## 7. Un sistema per ogni applicazione

Tokens, non valori: nessun colore codificato duro, radii o durate in codice app. Componenti, non one-off. Lo strato di marca
è l'unica parte che cambia un'app semplificata ([Marca](brand.md)). Quando un design ha bisogno di qualcosa il sistema manca, aggiungerlo a
il sistema prima.

<a id="8-accessible-by-construction"></a>

## 8. Accessibile per costruzione

Riunione del testo WCAG 2.2 AA (4.5:1) in entrambi i temi, grafici e indicatori di messa a fuoco 3:1. Tutto funziona dalla tastiera
con un anello di messa a fuoco visibile. Moto rispetta "ridurre il movimento". Componenti portano i loro ruoli ARIA in modo che le applicazioni non devono
ricordateli ([Accesso](accessibility.md)).

<a id="9-every-language-fits"></a>

## 9. Ogni lingua si adatta

Le navi di interfaccia in dieci lingue. I layout sono progettati per l'etichetta più lunga (russo e tedesco eseguire il 30–60%
più lungo dell'inglese; cinese e giapponese sono più brevi ma più alti), numeri e date sono formattati per locale, e
nulla è concatenato da frammenti ([Contenuto](content.md)).

<a id="rules-that-settle-arguments"></a>

## Regole che regolano gli argomenti

1. **Token, non valore.** Se manca un valore, aggiungi un token con entrambi i valori tematici.
2. **Stesso valore scuro, lavoro diverso → token diverso.** Riempimento Hover, pannello galleggiante e segmento selezionato tutti look
   `#262626` in modalità oscura ma necessita di valori di luce diversi (`surface.raised`, `surface.popover`,
   `component.segmentActive`). Spaccare i ruoli presto.
3. **Un'azione primaria per regione.** Le azioni secondarie sono pulsanti secondari o fantasma; le azioni distruttive sono
   pulsanti di pericolo e non sono mai l'obiettivo predefinito.
4. **I controlli di sola Icon hanno bisogno di un'etichetta** (`aria-label` e un tooltip) e deve essere riconoscibile icone.
5. **Un carico fallito non svuota mai lo schermo** che aveva contenuto.
6. **Se cambia la macchina, conferma o può essere annullata** — preferibilmente entrambi.
