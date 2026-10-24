[English](../../../accessibility.md) · [简体中文](../../zh-CN/docs/accessibility.md) · [繁體中文](../../zh-Hant/docs/accessibility.md) · [日本語](../../ja-JP/docs/accessibility.md) · [Español](../../es-ES/docs/accessibility.md) · [Português (Brasil)](../../pt-BR/docs/accessibility.md) · [Русский](../../ru-RU/docs/accessibility.md) · [Deutsch](../../de-DE/docs/accessibility.md) · [Français](../../fr-FR/docs/accessibility.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="accessibility"></a>

# Accesso

L'obiettivo è WCAG 2.2 AA in entrambi i temi. La maggior parte di esso è costruito nei token e componenti; questa pagina elenca ciò che
le applicazioni non devono annullare.

<a id="contrast"></a>

## Contrasto

- Testo 4.5:1 sul suo sfondo reale, compresi i distintivi stagnati e i riempimenti di luppolo; testo di grande display (24 px+, o
  19 px+ a 600) 3:1. I test di token applicano le coppie in [Colore › Contrasto](color.md#contrast).
- Icone che portano significato, segni di grafico, bordi di input e l'anello di messa a fuoco: 3:1.
- Testo decorativo (`text.disabled`, filigrane) non contiene informazioni.

<a id="keyboard"></a>

## Tastiera

- Tutto raggiungibile con Tab in ordine visivo; niente di focalizzabile è invisibile.
- **Anello a fuoco:** `shadow-focus-ring` su `:focus-visible` — un divario di 2 px nel colore della superficie più un anello di corallo di 2 px.
  Non rimuoverlo mai senza un equivalente.
- **widget compositi** utilizzare roving focus (un tab stop, frecce interne): controlli segmentati (`radiogroup`), schede
  (`tablist`), barre di chip, menu (`menu` con `menuitem` / `menuitemradio`), la tavolozza dei comandi (`combobox` +
  `listbox`).
- **Sovrapposizioni** spostare l'attenzione all'interno su aperto, intrappolare Tab, chiudere su Escape e tornare a fuoco all'elemento che li ha aperti.
  La messa a fuoco Script-moved non mostra un anello quando l'utente ha aperto la sovrapposizione con il puntatore.
- **Scorciatoie** seguire la piattaforma (Cerca ⌘K, ⌘, impostazioni, ⌘F trovare in una vista, Escape back out) e vengono mostrati in
  menu e suggerimenti, mai richiesti.

<a id="screen-readers"></a>

## Lettori di schermo

- Utilizzare prima l'elemento semantico (`button`, `a`, `nav`, `main`, `h1`–`h3`, `table`); componenti aggiungono ruoli solo dove
  HTML non ha nessuno.
- I controlli di sola Icon hanno `aria-label`; icone decorative e icone app accanto ai loro nomi sono `aria-hidden`.
- Pagina corrente `aria-current="page"`; toggles `role="switch"` con `aria-checked`; bottoni occupati `aria-busy`.
- Toasts: guasti `role="alert"`, altri una regione live educata. Il progresso ha un equivalente di testo ("1.2 di 3.4 GB").
- I grafici hanno un riassunto del testo o un equivalente della tabella; le linee di scintilla sono etichettate con il loro valore attuale.

<a id="motion-and-timing"></a>

## Moto e tempistica

- Rispettare "ridurre il moto" (`base.css` maniglie CSS; JavaScript l'animazione deve controllare `matchMedia`).
- Toasts pausa mentre hovered; nulla di importante scompare su un timer senza un modo per trovarlo di nuovo (storia,
  elenco delle attività).

<a id="pointer-and-touch"></a>

## Puntatore e tocco

- Obiettivi almeno 24 × 24 px in UI desktop denso, 32 px per i controlli primari, 44 px per le azioni principali del web mobile.
- Hover non rivela nulla che la tastiera e gli utenti touch non possono raggiungere.

<a id="language"></a>

## Lingua

Set Set `lang` su `<html>` e su qualsiasi passaggio in un'altra lingua, così i lettori dello schermo e i font commutano. Mai trasmettere
significato per colore, posizione o forma da solo: stato coppie colore con un'icona e una parola.
