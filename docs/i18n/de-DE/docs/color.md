[English](../../../color.md) · [简体中文](../../zh-CN/docs/color.md) · [繁體中文](../../zh-Hant/docs/color.md) · [日本語](../../ja-JP/docs/color.md) · [Español](../../es-ES/docs/color.md) · [Português (Brasil)](../../pt-BR/docs/color.md) · [Русский](../../ru-RU/docs/color.md) · **Deutsch** · [Français](../../fr-FR/docs/color.md) · [Italiano](../../it-IT/docs/color.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="color"></a>

# Farbe

Jede Farbe hat einen dunklen Wert (Standard) und, wo sie sich unterscheidet, einen Lichtwert;
das [Kennung des Zeichens](reference/tokens.md) Auf dieser Seite werden die Rollen erläutert, die Sie benötigen, um
Die richtige Karte auswählen. [Theming](theming.md).

<a id="how-the-two-themes-differ"></a>

## Wie sich die beiden Themen unterscheiden

- **Dunkel** Schritte tauchen in der Leichtigkeit auf: Seite `#0B0B0B` → Basis `#131313` → Karte `#1A1A1A` → hoch `#262626`.
  Elevation liest sich als "leichter".
- **Hell** behält die gleiche Reihenfolge, kann aber nicht weißer als weiß werden: Seite `#F2F2F2` → Basis `#F8F8F8` → Karte `#FFFFFF`.
  Erhöhte Tafeln sind weiß mit einer Umrandung und einem weichen Schatten; füllt innen weiße Karten ()`cardAlt`, `raised`, `chip`)
  sind grau, so lesen sie als vertieft.
- Die Ränder sind im Dunkelmodus durchscheinend weiß und im Lichtmodus durchscheinend schwarz, bei ähnlicher Stärke.
- Marken- und Statusfarben sind im hellen Modus tiefer, so dass Text 4,5:1 auf weiß bleibt.

Wählen Sie niemals eine Farbe mit dem Auge aus einem Screenshot eines Themas. Wählen Sie die Rolle; das Token trägt beide Werte.

<a id="surfaces"></a>

## Oberflächen

| Design-Token      | Rolle                             | Verwendung für                                                                                         | Verwenden Sie nicht für                                 |
| ----------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| `surface.page`    | Äußerster Hintergrund             | Website Körper, obere Navigationsleiste, Bereich hinter schwimmenden Fenstern                          | Inhaltsbereiche innerhalb der App-Shell                 |
| `surface.base`    | Hauptinhaltshintergrund           | Inhaltsspalte der App Shell, Fensterhintergrund                                                        | Karten                                                  |
| `surface.sidebar` | Seitenleiste                      | Die linke Navigationsspalte                                                                            | Alles andere                                            |
| `surface.rail`    | Rechtslenker                      | Das optionale Statistik-Schiene an breiten Fenstern                                                    | —                                                       |
| `surface.card`    | Karten und Tafeln                 | Karten, Listencontainer, Einstellungsgruppen, Menüleisten-Popover                                      | Floating Panels über dem Inhalt (Verwendung) `popover`) |
| `surface.cardAlt` | Innerhalb einer Karte             | Eingaben, Sekundärblöcke, Tabellenzeilen-Highlight, Hinweisboxen innerhalb einer Karte                 | Hintergründe auf Seitenebene                            |
| `surface.raised`  | Schwebeblatt und kleine Füllungen | Hover-Hintergründe, aktuelle Seite in Paginierung, Icon-Kacheln, `⌘K` Andeutungen                      | Floating Panels; ausgewählte Segmente                   |
| `surface.chip`    | Neutrale Abzeichen                | Neutrale Chips, Keyboard-Hinweise, kleine Tags                                                         | Knöpfe (Verwendung) `button.secondary*`)                |
| `surface.control` | Kontrollen                        | Texteingaben und -auswahl in Einstellungen, Tooltips                                                   | Große Flächen                                           |
| `surface.inset`   | Brunnen                           | Codeblöcke, Protokolle, segmentierte Kontrollspuren, Fortschrittsspuren                                | Knöpfe                                                  |
| `surface.overlay` | Transluzente Überlagerung         | Menüs und die Befehlspalette, mit einem 20 px Hintergrund Unschärfe                                    | Lichtundurchlässige Platten                             |
| `surface.popover` | Schwimmende Platte                | Zustimmungs- und Vorschlagskarten, Demo-Popovers - alles, was über den Inhalt schwebt `shadow.popover` | Inline-Inhalte                                          |

Bauteilspezifische Oberflächen leben in `component.*`: `modalBg` (Dialoge und Blätter), `searchBg` (Suchfelder und Formular)
Eingaben auf Seiten, `navActive` (ausgewählte Position in der Seitenleiste), `segmentActive` (ausgewähltes Segment), `heroBg` (Feature Hero)
`detailHeaderBg`, `toastBg`, `scrim` (hinter Dialogen) `lightboxScrim` (Bildbetrachter, dunkel in beiden Themen, so die
viewer rendert im dunklen Thema: [Theming › Subtrees](theming.md#subtrees)), `menuBarBg` / `menuBarText` (eine In-App)
Vorschau der macOS Menüleiste.

<a id="text"></a>

## Text

| Design-Token     | Verwendung                                                         | Dunkel               | Hell                 |
| ---------------- | ------------------------------------------------------------------ | -------------------- | -------------------- |
| `text.primary`   | Überschriften, betonter Körper, Zahlen                             | 14.9:1 auf der Karte | 17.4:1 auf der Karte |
| `text.secondary` | Text, Beschreibungen                                               | 7.3:1                | 7.2:1                |
| `text.tertiary`  | Beschriftungen, Metadaten, Zeitstempel, Hinweise                   | 5.4:1                | 5.3:1                |
| `text.disabled`  | Deaktivierter und rein dekorativer Text                            | —                    | —                    |
| `text.accent`    | Korallentext: Links, Korallenchips, hervorgehobene Inline-Aktionen | 6.5:1                | 5.7:1                |
| `text.inverse`   | Text und Symbole auf starken Füllungen (Status, Korallen, Lachs)   | dunkel               | weiß                 |
| `text.onAccent`  | Text auf Korallenknöpfen und Korallenabzeichen                     | 7.2:1 auf Korallen   | 5,5:1 auf Korallen   |

Regeln:

- Verwenden Sie maximal drei Textebenen in einer Komponente. Tertiär ist die Etage für alles, was ein Benutzer lesen muss.
- `text.disabled` trägt niemals Informationen: Eine deaktivierte Steuerung muss immer noch sagen, warum sie in der Nähe deaktiviert ist.
- **`brand.coral` ist eine Füllung, keine Textfarbe.** Auf weiß ist es 3,5:1. Coral text verwendet `text.accent`.
- Niemals `text.tertiary` am `surface.chip` oder `surface.raised` für langen Text; Verwendung `text.secondary` dort.

<a id="borders"></a>

## Grenzen

`border.subtle` für Kartenkanten und Trennwände, `border.default` für Eingaben, Geistertasten und Fenster,
`border.strong` für Hover. `border.sidebar` Trennt die Seitenleiste. Status-Panels verwenden den Abgleich
`status.*Border` Mit ihren `status.*Subtle` Füllen.

<a id="brand"></a>

## Marke

| Design-Token                                   | Verwendung                                                                                                                               |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `brand.coral`                                  | Der Markenakzent als Füllung oder Grafik: der Akzentknopf, Fortschritt, Schaltflächen, die eingeschaltet sind, Fokusring, kleine Punkte. |
| `brand.salmon`                                 | Warme Betonung Text: Abschnitt Augenbrauen, die zweite Linie eines Helden, "Update verfügbar" Abzeichen.                                 |
| `brand.violet`                                 | Der Held leuchtet. Auch gemischt in getönten Icon-Hintergründen auf Marketing-Seiten.                                                    |
| `brand.logoGradient`, `brand.logoCoreGradient` | Nur Logo-Markierung: Der Kerngradient schaltet auf hellen Hintergrund in gelb.                                                           |

Accent-Tönungen: `accent.coralSubtle` (Fortschrittsspuren, Korallenspäne) und `accent.salmonSubtle` (Lachsabzeichen) Text auf
Sie verwenden `text.accent` und `brand.salmon`.

Verwenden Sie Korallen sparsam: ein Akzent-Button pro Ansicht und niemals Korallen für Fehler (das ist `status.danger`).

<a id="status"></a>

## Status

| Familie   | Mittel                                                                           | Typische Verwendung                                                       |
| --------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `success` | Fertig, installiert, gesund, aktuell                                             | Installierte Abzeichen, "Alles ist normal" Banner, Erfolgsprotokollzeilen |
| `warning` | Benötigt Aufmerksamkeit, benötigt Administratorberechtigung, partielles Ergebnis | Übersprungene Elemente, Administratoraufforderungen, "Bedürfnisse" Chips  |
| `danger`  | Gescheitert, veraltet, destruktiv                                                | Fehlerzustände, Gefahrenknöpfe, gefundene Bedrohungen                     |
| `info`    | Neutrale Informationen, selbstaktualisierende Apps, Links in Dokumenten          | Info-Hinweise, "Auto-Updates" Chips                                       |

Jede Familie hat die einfarbige Farbe (Text, Icons, Punkte), `*Subtle` (10% Farbhintergründe) und `*Border` (getönte Tafel)
Farbpaar mit einem Symbol oder einem Wort - der Status wird niemals nur durch Farbe kommuniziert.

<a id="buttons"></a>

## Knöpfe

| Variante   | Design-Tokens                                                   | Verwendung                                                                                                   |
| ---------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Primär     | `button.primary*` Nahezu weiß im Dunkeln, fast schwarz im Licht | Die Hauptaktion einer Ansicht. Eine pro Region.                                                              |
| Sekundär   | `button.secondary*`                                             | Andere Aktionen. Die Standardvariante.                                                                       |
| Accent     | `button.accent*` (Koralle, dunkler Text)                        | Ein Markenmoment: Der Held ruft zum Handeln auf, "Alle aktualisieren". Selten mehr als einer pro Bildschirm. |
| Geist      | transparent, `border.default`                                   | Tertiäre Aktionen in Symbolleisten und dichten Zeilen.                                                       |
| Gefahr     | `status.dangerSubtle` + `status.danger`                         | Destruktive Aktionen. Niemals die Standardtaste eines Dialogs.                                               |
| Behinderte | `button.disabled*`                                              | Inaktive Steuerung jeder Variante.                                                                           |

<a id="charts"></a>

## Karten

`chart.series1` (violett) `chart.series2` (Koralle), `chart.series3` (grün) sind die kategorischen Farben, gewählt zu bleiben
Unterscheidbar für gemeinsame Farbvision Mängel; verwenden Sie sie in dieser Reihenfolge und beschriften Sie die Serie direkt, wenn es
Mehr als zwei. Einseriendiagramme verwenden `chart.emphasis` für den aktuellen Wert und `chart.deemphasis` für die Geschichte.
`chart.grid` und `chart.axis` Überwachungsansichten können auch Status- und Infofarben für Bedeutungen verwenden.
(Temperaturwarnung, Netzwerk Down/Up).

<a id="contrast"></a>

## Kontrast

Gemessen an der WCAG 2.2 Formel; `packages/tokens/tests` schlägt den Build fehl, wenn ein Paar unter sein Ziel fällt.

| Paar                     | Ziel | Dunkel (Basis / Karte / erhöht) | Licht (Basis / Karte / erhöht) |
| ------------------------ | ---- | ------------------------------- | ------------------------------ |
| `text.primary`           | 4.5  | 15.9 / 14.9 / 12.9              | 16.4 / 17.4 / 14.9             |
| `text.secondary`         | 4.5  | 7.8 / 7.3 / 6.4                 | 6.8 / 7.2 / 6.2                |
| `text.tertiary`          | 4.5  | 5.7 / 5.4 / 4.7                 | 5.0 / 5.3 / 4.6                |
| `text.accent`            | 4.5  | 6.9 / 6.5 / 5.6                 | 5.4 / 5.7 / 4.9                |
| `brand.salmon`           | 4.5  | 9.0 / 8.4 / 7.3                 | 5.4 / 5.7 / 4.9                |
| `status.success`         | 4.5  | 9.2 / 8.6 / 7.5                 | 5.3 / 5.6 / 4.8                |
| `status.warning`         | 4.5  | 10.1 / 9.5 / 8.2                | 5.3 / 5.6 / 4.8                |
| `status.danger`          | 4.5  | 6.1 / 5.7 / 5.0                 | 5.4 / 5.7 / 4.9                |
| `status.info`            | 4.5  | 7.3 / 6.8 / 5.9                 | 5.3 / 5.6 / 4.8                |
| `brand.coral` als Grafik | 3.0  | 6.9 / 6.5 / 5.6                 | 3.3 / 3.5 / 3.0                |

Die Tests umfassen auch Status- und Akzenttexte auf ihren getönten Hintergründen (über Base, Karte und cardAlt), jeden Button.
Zustand, Text auf Koralle, Terminalkachel und Monoraumtext in Brunnen.

<a id="do-and-dont"></a>

## Tun und nicht tun

- Do-Verwendung `bg-surface-popover shadow-popover border border-line-default` für eine Floating Card; nicht wiederverwenden
  `surface.raised` Im Lichtmodus ist es grau.
- Mischen Sie transluzente Tönungen von Token ()`color-mix(in srgb, var(--on-status-success) 14%, transparent)`, wenn a
  Marketing-Glanz braucht einen Farbton; Schreiben Sie keine Hex- oder RGBA-Werte in Komponenten.
- Überprüfen sie beide themen, bevor sie die ui zusammenführen; die galerie und die app wechseln beide mit einer einstellung.
