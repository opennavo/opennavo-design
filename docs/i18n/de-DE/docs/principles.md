[English](../../../principles.md) · [简体中文](../../zh-CN/docs/principles.md) · [繁體中文](../../zh-Hant/docs/principles.md) · [日本語](../../ja-JP/docs/principles.md) · [Español](../../es-ES/docs/principles.md) · [Português (Brasil)](../../pt-BR/docs/principles.md) · [Русский](../../ru-RU/docs/principles.md) · **Deutsch** · [Français](../../fr-FR/docs/principles.md) · [Italiano](../../it-IT/docs/principles.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="principles"></a>

# Grundsätze

OpenNavo Apps verwalten Dinge, die Menschen auf ihrem eigenen Computer interessieren: was installiert ist, was beim Login läuft, was
Was mit dem Netzwerk spricht, wird gelöscht. Das Interface muss sich ruhig und vertrauenswürdig fühlen, bevor es sich clever anfühlt.
Diese Prinzipien entscheiden über die Kompromisse; der Rest der Spezifikation wendet sie an.

<a id="1-content-first-chrome-recedes"></a>

## 1. Inhalt zuerst, Chromrückgänge

Oberflächen sind nahezu neutral und um kleine Beträge gestuft; Grenzen sind Haarlinien. Farbe ist der Bedeutung vorbehalten — die
Markenakzent für die eine Sache, die als nächstes zu tun ist, Statusfarben für den Staat - niemals für die Dekoration.
Farbiger Hintergrund, um fertig auszusehen, die Hierarchie ist falsch.

- Zwei Themen, beide erstklassig. Dunkel ist der Standard-Look der Marke; Licht ist kein Filter darüber. Jede Farbe
  Token trägt einen Wert für jedes Thema, und beide werden in CI auf Kontrast geprüft ()[Farbe](color.md)).
- Leuchten und Verläufe sind an genau zwei Stellen erlaubt: Feature Heroes und Markenzeichen. Sie sind weicher im Licht
  Modus.

<a id="2-say-what-will-happen-then-do-exactly-that"></a>

## 2. Sagen Sie, was passieren wird, dann tun Sie genau das

Bevor sich etwas am Computer des Benutzers ändert, gibt die Benutzeroberfläche den Effekt in einfachen Worten an und zeigt, wo es hilft,
Buttons benennen die Aktion ("Deinstallieren", "Zum Papierkorb bewegen"), nicht "OK".
"Nichts passiert, bis Sie bestätigen" ist ein Versprechen, das der Code hält.

- Destruktive Aktionen bestätigen und standardmäßig auf die reversible Variante (Abfall vor Löschen, Deaktivieren vor Entfernen).
- Nach der Aktion erscheint das Ergebnis, wo der Benutzer es gestartet hat, sofort ()[Patterns › Ergebnisse setzen sich sofort ein](patterns.md#loading-progress-and-results)).

<a id="3-local-first-and-say-so"></a>

## 3. Lokal zuerst, und sagen Sie es

Daten, die vom Computer des Benutzers gelesen werden, bleiben dort, es sei denn, sie entscheiden sich für etwas anderes.
Sensibel (Disk-Nutzung, Startelemente, Netzwerkverbindungen), eine One-Line-Note sagt, wohin die Daten gehen - normalerweise
"Nur auf diesem Mac; nichts wird hochgeladen". Wenn etwas auf einen Server geht, benennt die Kopie den Server.

<a id="4-stable-under-the-pointer"></a>

## 4. Stabil unter dem Zeiger

Das Layout wird nie geleert und wieder aufgefüllt, während der Benutzer mit ihm interagiert.
Sortieren, Paging oder eine Hintergrundaktualisierung behält den vorherigen Inhalt, bis der neue Inhalt fertig ist, und optionale Zeilen
Skelette sind nur für das erste Laden einer Ansicht. Eine fehlgeschlagene Aktualisierung behält den letzten guten Inhalt.
Die Leute lesen das Flimmern als "Die App ist kaputt".

<a id="5-respect-the-platform"></a>

## 5. Respektieren Sie die Plattform

- **macOS:** native Ampeln und Titelleistenverhalten, Systemeinstellungen tiefe Links für Berechtigungen, Menüleistenelemente
  die sich wie die des Systems verhalten (Vorlagenbilder, niemals die App aktivieren oder den Fokus stehlen), Tastenkombinationen
  die zum Mac passen (⌘K-Suche, ⌘, Einstellungen, Escape schließt).
- **Web:** schnelle server-gerenderte seiten, die zwischengespeichert und geteilt werden können, also nichts in der. HTML ist abhängig vom Besucher;
  Per-Besucher-Auswahl (Thema, Sprachvorschlag, Einwilligung) gelten im Browser.
- **Native Toolkits** (SwiftUI, Flutter) verwenden Sie die gleichen Token mit den eigenen Steuerungen und der Systemschriftart der Plattform.

<a id="6-quiet-by-default"></a>

## 6. Standardmäßig ruhig

Verwenden Sie das leichteste Feedback, das den Job erledigt: Inline-Zustand für Dinge, die bestehen bleiben, ein Toast für eine abgeschlossene Aktion, ein
Banner für eine degradierte Ansicht, ein Dialog nur, wenn der Benutzer entscheiden muss.
außerhalb des Fensters sind Opt-in und sagen, warum sie gekommen sind.

<a id="7-one-system-for-every-app"></a>

## 7. Ein System für jede App

Tokens, nicht Werte: keine fest codierten Farben, Radien oder Dauern im App-Code. Komponenten, keine Einmaligkeiten. Die Markenschicht
ist der einzige Teil, den eine Geschwister-App ändert ()[Marke](brand.md)Wenn ein Design etwas braucht, das dem System fehlt, füge es hinzu
Das System zuerst.

<a id="8-accessible-by-construction"></a>

## 8. Baulich zugänglich

Text trifft sich WCAG 2.2 AA (4.5:1) in beiden Themen, Grafiken und Fokusindikatoren 3:1. Alles funktioniert von der Tastatur aus
Mit sichtbarem Fokusring. Bewegung respektiert "Bewegung reduzieren". Komponenten tragen ihre ARIA-Rollen, so dass Apps nicht benötigt werden
Erinnern Sie sich an ()[Zugänglichkeit](accessibility.md)).

<a id="9-every-language-fits"></a>

## 9. Jede Sprache passt

Die Schnittstelle wird in zehn Sprachen ausgeliefert. Layouts sind für das längste Label konzipiert (Russisch und Deutsch 30–60%).
länger als Englisch; Chinesisch und Japanisch sind kürzer, aber größer), Zahlen und Daten werden pro Gebietsschema formatiert, und
Nichts ist aus Fragmenten verkettet ()[Inhalt](content.md)).

<a id="rules-that-settle-arguments"></a>

## Regeln, die Argumente beilegen

1. **Token, nicht Wert.** Wenn ein Wert fehlt, fügen Sie ein Token mit beiden Themewerten hinzu.
2. **Gleicher dunkler Wert, anderer Job → unterschiedliche Token.** Schwebefüller, Floating Panel und ausgewähltes Segment alle aussehen
   `#262626` im Dunkelmodus, benötigen aber unterschiedliche Lichtwerte ()`surface.raised`, `surface.popover`,
   `component.segmentActive`Split Rollen früh.
3. **Eine primäre Aktion pro Region.** Sekundäre Aktionen sind sekundäre oder Geisterknöpfe; destruktive Aktionen sind
   Gefahrenknöpfe und sind nie der standardfokus.
4. **Icon-only-Controls benötigen ein Label** (`aria-label` und ein Tooltip) und müssen erkennbare Icons sein.
5. **Eine ausgefallene Last leert nie den Bildschirm** Das hatte Inhalt.
6. **Wenn es die Maschine ändert, bestätigt es oder es kann rückgängig gemacht werden** - vorzugsweise beides.
