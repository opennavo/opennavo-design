[English](../../../accessibility.md) · [简体中文](../../zh-CN/docs/accessibility.md) · [繁體中文](../../zh-Hant/docs/accessibility.md) · [日本語](../../ja-JP/docs/accessibility.md) · [Español](../../es-ES/docs/accessibility.md) · [Português (Brasil)](../../pt-BR/docs/accessibility.md) · [Русский](../../ru-RU/docs/accessibility.md) · **Deutsch** · [Français](../../fr-FR/docs/accessibility.md) · [Italiano](../../it-IT/docs/accessibility.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="accessibility"></a>

# Zugänglichkeit

Das Ziel ist WCAG 2.2 AA in beiden Themes. Das meiste davon ist in die Token und Komponenten eingebaut; diese Seite listet auf, was
Apps dürfen nicht rückgängig gemacht werden.

<a id="contrast"></a>

## Kontrast

- Text 4.5:1 vor seinem tatsächlichen Hintergrund, einschließlich getönter Abzeichen und Hover-Füllungen; Text mit großer Anzeige (24 px+), oder
  19 px+ bei 600) 3:1. [Farbe › Kontrast](color.md#contrast).
- Icons, die Bedeutung, Chartmarken, Eingabegrenzen und den Fokusring tragen: 3:1.
- Dekorativer Text (`text.disabled`Wasserzeichen tragen keine Informationen.

<a id="keyboard"></a>

## Tastatur

- Alles erreichbar mit Tab in visueller Reihenfolge; nichts fokussierbares ist unsichtbar.
- **Fokusring:** `shadow-focus-ring` am `:focus-visible` — eine 2 px Lücke in der Oberflächenfarbe plus ein 2 px Korallenring.
  Entfernen Sie es niemals ohne ein Äquivalent.
- **Verbund-Widgets** Verwenden Sie den Roving-Fokus (ein Tab-Stopp, Pfeile im Inneren): segmentierte Steuerungen (`radiogroup`), Tabs
  (`tablist`), Chipbars, Menüs (`menu` mit `menuitem` / `menuitemradio`), die Befehlspalette (`combobox` +
  `listbox`).
- **Überlagerungen** Bewegen Sie den Fokus nach innen auf offen, Fallen Sie Tab, schließen Sie auf Escape und kehren Sie den Fokus zu dem Element zurück, das sie geöffnet hat.
  Der Script-bewegte Fokus zeigt keinen Ring an, wenn der Benutzer das Overlay mit dem Zeiger geöffnet hat.
- **Abkürzungen** Folgen Sie der Plattform (⌘K-Suche, ⌘, Einstellungen, ⌘F in einer Ansicht finden, Escape back out) und werden in
  Menüs und Hinweise, nie erforderlich.

<a id="screen-readers"></a>

## Screenreader

- Verwenden Sie zuerst das semantische Element ()`button`, `a`, `nav`, `main`, `h1`–`h3`, `table`); Komponenten fügen nur Rollen hinzu, wenn
  HTML hat keine.
- Icon-only-Kontrollen haben `aria-label`dekorative Icons und App-Icons neben ihren Namen sind `aria-hidden`.
- Aktuelle Seite `aria-current="page"`; Toggles `role="switch"` mit `aria-checked`; Besetzte Buttons `aria-busy`.
- Toasts: Misserfolge `role="alert"`, andere eine höfliche Live-Region. Progress hat ein Textäquivalent ("1.2 von 3,4 GB").
- Charts haben eine Textzusammenfassung oder ein Tabellenäquivalent; Sparklines sind mit ihrem aktuellen Wert gekennzeichnet.

<a id="motion-and-timing"></a>

## Bewegung und Timing

- Respektieren Sie "Reduzieren Bewegung" (`base.css` Griffe CSS; JavaScript Animation muss überprüft werden `matchMedia`).
- Toasts halten inne, während sie schwebten; nichts Wichtiges verschwindet auf einem Timer, ohne dass es wieder gefunden werden kann (Geschichte,
  Aufgabenliste.

<a id="pointer-and-touch"></a>

## Zeiger und Berührung

- Zielt mindestens 24 × 24 px in dichter Desktop-Benutzeroberfläche, 32 px für primäre Steuerungen, 44 px für primäre mobile Web-Aktionen.
- Hover zeigt nichts, was Tastatur- und Touch-Benutzer nicht erreichen können.

<a id="language"></a>

## Sprache

Setz `lang` am `<html>` und auf jeder Passage in einer anderen Sprache, also Bildschirmleser und Schriftarten wechseln.
Bedeutung allein durch Farbe, Position oder Form: Status paart Farbe mit einem Symbol und einem Wort.
