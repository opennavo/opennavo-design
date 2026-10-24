[English](../../../patterns.md) · [简体中文](../../zh-CN/docs/patterns.md) · [繁體中文](../../zh-Hant/docs/patterns.md) · [日本語](../../ja-JP/docs/patterns.md) · [Español](../../es-ES/docs/patterns.md) · [Português (Brasil)](../../pt-BR/docs/patterns.md) · [Русский](../../ru-RU/docs/patterns.md) · **Deutsch** · [Français](../../fr-FR/docs/patterns.md) · [Italiano](../../it-IT/docs/patterns.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="patterns"></a>

# Muster

Wie die Komponenten zu Bildschirmen kombiniert werden. Jedes Muster benennt die verwendeten Komponenten; ihre Details sind in
[Komponenten](components.md).

<a id="navigation"></a>

## Navigation

- **Seitenleiste** (`OnSidebar`, `OnNavItem`): Markenzeichen, dann Gruppen mit einem `text-label` Titel (Browse, Listen, Tools),
  Mine ...), dann Einstellungen unten angeheftet. `component.navActive` und `aria-current="page"`.
  Die Grafen sitzen rechtsbündig in `text-ink-tertiary`; eine Zählung, die Aufmerksamkeit braucht, wird zu einem Korallenabzeichen; ein Punktzeichen
  "Etwas Neues" ohne Nummer.
- **Symbolleiste** (`OnToolbar`): Zurück / Vorwärts und Neuladen auf der linken Seite in Desktop-Apps (der Browser stellt sie auf der Website zur Verfügung)
  Web), der Suchauslöser mit seinen `⌘K` Tippen Sie rechts, dann globale Switches (Thema, Sprache im Web).
- **Kommandopalette** (`OnCommandPalette`, `⌘K` / `Ctrl K`): Aktionen und Ziele zuerst, mit
  "Sehen Sie alle Ergebnisse für "q" als erste Zeile (Enter öffnet die vollständige Ergebnisseite); Elemente unten. Pfeiltasten verschieben, Enter
  öffnet, Escape schließt und gibt den Fokus zurück.
- **Registerkarten** (`OnTabs`) wechseln Sie die Ansichten eines Objekts (Übersicht, Versionen, Abhängigkeiten, Details einer App) und sind Links
  Wenn jede Ansicht eine eigene URL hat. **Segmentierte Steuerungen** (`OnSegmented`) Filter- oder Schaltmodi innerhalb einer Ansicht (Periode,
  sortieren "Alles / Erfolg / Fehlgeschlagen").
- **Brotkrumen** (`OnBreadcrumb`) erscheinen auf Detailseiten, die aus einer Liste erreicht werden.
- Jede Ansicht hat eine URL (Desktop-Routen enthalten), also tiefe Links, zurück / vorwärts und Wiederherstellung der Arbeit.

<a id="page-anatomy"></a>

## Seitenanatomie

1. Page Header (Seitenüberschrift)`OnPageHeader`): `text-title1` Titel, eine Zeile des sekundären Textes mit der wichtigsten Tatsache (zählt, letzte)
   check), Seitenaktionen rechtsbündig (primär zuletzt).
2. Optionales Banner für degradierten Zustand (offline, Teilausfall) direkt unter dem Header.
3. Abschnitte (`OnSectionHeader`): `text-headline` Titel, ein kurzer tertiärer Untertitel, "Alle anzeigen →" rechts.
4. Die Schiene (`OnRailPanel`, `OnRailSection`) trägt Zusammenfassungen und sekundäre Aktionen; nichts in der Schiene ist erforderlich
   um eine Aufgabe in der Hauptspalte zu beenden.

<a id="lists-cards-and-tables"></a>

## Listen, Karten und Tabellen

- **Karten** für das Surfen (Symbol, Name, einzeilige Zusammenfassung, zwei oder drei Statistiken, eine Aktion); die gesamte Karte ist der Link;
  Der Aktionsknopf im Inneren stoppt die Ausbreitung.
- **Reihen** für dichte Listen, auf die Sie reagieren (Updates, Historie, installierte Apps): Icon, Name und Meta links, Statuschips
  in der Mitte, Aktionen rechts; destruktive Aktionen leben im ⋯-Menü der Zeile.
- **Tabellen** (`OnTable`) wenn Spalten verglichen oder sortiert werden; numerische Spalten rechts ausgerichtet mit `tabular-nums`;
  Auswahl-Checkboxen in der ersten Spalte; eine klebrige Kopfzeile in langen Tabellen.
- Paginate lange Listen ()`OnPagination`) statt unendlich scrollen, so ist die Position verknüpfbar und stabil.
- **Raffination hält Inhalt:** während sich eine Abfrage, Sortierung, Filter oder Seite ändert, die vorherigen Ergebnisse anzeigen (dimmed)
  falls erforderlich) bis die neuen ankommen; reservieren Sie Platz für optionale Zähllinien, damit sich nichts ändert.

<a id="search"></a>

## Suchen

- Der Symbolleisten-Trigger öffnet die Palette; eine Suchseite zeigt vollständige Ergebnisse mit Filtern als segmentierte Steuerelemente oder
  Chips.
- Ergebnisse aktualisieren, wenn die Benutzertypen ohne Zwischenklärung; "Keine Ergebnisse für "q" kommt mit einem konkreten Hinweis
  (eine andere Schreibweise, der englische Name, eine andere Quelle).

<a id="settings-and-forms"></a>

## Einstellungen und Formulare

- Einstellungen werden in Karten von Zeilen gruppiert (`SettingRow` Pattern: Etikett und optionaler Einzeilenhinweis links, der
  rechts, Zeilen getrennt durch `border.subtle`.
- **Änderungen gelten sofort** - Umschalter, segmentierte Steuerungen, Menüs. Es gibt keinen Speicher-Button in den Einstellungen; eine Änderung
  das fehlschlägt, kehrt zurück und sagt warum in einem toast.
- Wählen Sie die Steuerung nach der Anzahl der Optionen: ein Umschalter für Ein / Aus, eine segmentierte Steuerung für zwei bis vier exklusive
  Optionen, ein Menü für längere Listen (Sprache) mit der aktuellen Auswahl überprüft.
- Texteingaben validieren bei Unschärfen oder Senden, niemals bei jedem Tastendruck; Fehler erscheinen unter dem Feld in
  `text-status-danger` mit dem Fix ("Verwenden Sie eine vollständige https://Adresse"), und das Feld behält seinen Wert.
- Formulare im Web sind eine Spalte mit Beschriftungen über Feldern; die Schaltfläche Absenden ist deaktiviert, bis die erforderlichen Felder
  gültig, mit einem Hinweis, der sagt, was fehlt.

<a id="feedback"></a>

## Feedback

| Lage                                                           | Verwendung                                                                                                                    |
| -------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Eine abgeschlossene Aktion (kopiert, hinzugefügt, installiert) | Toast, Erfolg oder neutral, entlässt nach 4 s, Pausen auf Schwebe                                                             |
| Eine Aktion ist fehlgeschlagen                                 | Toast mit dem Grund und, wenn möglich, eine Aktion (Retry, View log)                                                          |
| Eine Ansicht ist degradiert (offline, Teildaten)               | Banner unter dem Header, der sagt, was noch funktioniert                                                                      |
| Eine Entscheidung ist erforderlich                             | Dialog`OnConfirm`, `OnModal`)                                                                                                 |
| Eine lange Aufgabe läuft                                       | Fortschritt an Ort und Stelle (Zeile, Karte oder Aufgabenfeld) und in der Menüleiste, wenn er im Hintergrund fortgesetzt wird |
| Etwas passierte, während das Fenster geschlossen war           | Eine Systembenachrichtigung, nur wenn der Benutzer sie aktiviert hat                                                          |

Höchstens drei Toasts sind sichtbar; Ausfälle werden sofort an Bildschirmleser angekündigt ()`role="alert"`), andere
Höflich.

<a id="destructive-and-system-changing-actions"></a>

## Zerstörende und systemverändernde Aktionen

1. Sagen Sie, was passieren wird, mit der Liste dessen, was entfernt oder geändert wird und seiner Größe.
2. Standardmäßig auf die reversible Option: Wechseln Sie zu Papierkorb, deaktivieren Sie ein Anmeldeelement, anstatt es zu löschen, halten Sie ein Rollback.
3. Der Bestätigungsbutton benennt die Aktion ("Deinstallieren", "14 Elemente in den Papierkorb verschieben") und verwendet die Gefahrenvariante; Cancel ist
   Standardfokus.
4. Nach der Aktion: das Ergebnis sofort an Ort und Stelle, ein Toast mit Undo, wenn Undo möglich ist, und ein Eintrag in der
   Geschichte.
5. Aktionen, die Administratorrechte benötigen, sagen dies, bevor sie beginnen; das Passwort fordert Namen auf, wofür es ist.

<a id="loading-progress-and-results"></a>

## Belastung, Fortschritt und Ergebnisse

- Erstes Laden einer Ansicht: Skelette ()`OnSkeleton`) wie der Inhalt geformt, keine Spinner auf ganzen Seiten.
- Refresh, Raffinesse, Background Reloads: Behalten Sie den aktuellen Inhalt; höchstens ein kleiner Fortschrittshinweis.
- Lange Tasks zeigen einen bestimmten Fortschritt, sobald eine Zahl (Byte, Items) vorliegt, mit dem aktuellen Schritt in Worten,
  Die Protokolle sind verfügbar, aber zusammengebrochen.
- **Die Ergebnisse setzen sich sofort ein:** Wenn eine Aufgabe beendet ist, an jedem Ort, an dem das Objekt angezeigt wird (Zeile, Detailseite, Seitenleiste)
  Zählen, Menüleiste) Updates sofort vom eigenen Ergebnis der Aufgabe, nicht nach der nächsten periodischen Aktualisierung.

<a id="empty-error-and-offline-states"></a>

## Leere, Fehler und Offline-Zustände

- **Leer** (`OnEmpty`): ein Icon, ein kurzer Titel ("Ihre Liste ist leer"), ein Satz, der sagt, wie man sie füllt, und
  die Handlung, wenn es eine gibt.
- **Fehler** (`OnErrorState`): was in einfachen Worten fehlgeschlagen ist, Retry und keine Stapelspuren; eine fehlgeschlagene Aktualisierung einer Ansicht, die
  Hatte content zeigt stattdessen ein banner und behält den inhalt.
- **Offline** (`OnOffline`): Der zwischengespeicherte Inhalt bleibt verwendbar; Funktionen, die das Netzwerk benötigen, sagen, wo sie
  erscheinen.

<a id="permissions"></a>

## Genehmigungen

- Fragen sie im moment der notwendigkeit, mit einem satz, warum und was privat bleibt.
- "Enable" öffnet den genauen Systemeinstellungsbereich; ein kleiner schwimmender Leitfaden zeigt, was gezogen oder gewechselt werden soll, ohne
  Fokus auf Systemeinstellungen.
- Wenn der Benutzer zurückkehrt, wird die Ansicht erneut überprüft und von selbst fortgesetzt; wenn macOS erfordert einen Relaunch, sagt die Ansicht so
  und bietet es an.
- Niemals nag: Eine abgelehnte Berechtigung hinterlässt eine ruhige Zeile mit Enable, nicht wiederholten Dialogen.

<a id="menu-bar-items-and-popovers-macos"></a>

## Menüleisten und Popovers (macOS)

- Menüleistenelemente sind Vorlagenbilder, die wie Systemelemente gezeichnet werden; Text und Grafiken folgen dem Menüleistenstil des Systems.
- Wenn Sie auf einen Gegenstand klicken, wird der Popover unter ihm geöffnet; wenn Sie erneut oder irgendwo anders klicken, wird er geschlossen.
  Hauptfenster oder stehlen Sie den Fokus aus der App, in der sich der Benutzer befindet.
- Popovers sind Kompaktkarten ()`surface.card`, `rounded-panel`) mit den nützlichsten drei bis fünf Zeilen, eine primäre
  Aktion und ein Link, der die vollständige Ansicht im Hauptfenster öffnet.

<a id="onboarding"></a>

## Onboarding

Ein einzelner Checklistenbildschirm: Jede Anforderung ist eine Zeile mit einem Statussymbol, was es ist und einer Fix-Aktion; die primäre
Die Schaltfläche "Get started" wird aktiviert, wenn die erforderlichen Zeilen vergehen, mit einem Satz, der sagt, was noch fehlt.
Schritte sind überspringbar und später in den Einstellungen erreichbar.

<a id="website-specifics"></a>

## Besonderheiten der Website

- Die Website fragt nie nach einem Konto. Per-Besucher-Entscheidungen (Thema, Zustimmung, Sprachvorschlag, gespeicherte Listen) leben in
  den Browser.
- "In App öffnen"-Links bitten die Desktop-App zu zeigen, was sie tun würde; die App bittet immer um Bestätigung, bevor
  Ausführen von allem, was eine webseite angefordert hat.
- Ein Sprachvorschlag erscheint einmal, abstoßend und leitet sich nie von selbst um.
