[English](../../../typography.md) · [简体中文](../../zh-CN/docs/typography.md) · [繁體中文](../../zh-Hant/docs/typography.md) · [日本語](../../ja-JP/docs/typography.md) · [Español](../../es-ES/docs/typography.md) · [Português (Brasil)](../../pt-BR/docs/typography.md) · [Русский](../../ru-RU/docs/typography.md) · **Deutsch** · [Français](../../fr-FR/docs/typography.md) · [Italiano](../../it-IT/docs/typography.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="typography"></a>

# Typografie

<a id="typeface"></a>

## Schriftart

Apps nutzen die **System-UI-Schrift** - SF Pro auf Apple-Plattformen, Segoe UI unter Windows - durch
`@opennavo/design-vue/system-fonts.css`, mit den CJK-Gesichtern der Plattform für Chinesisch und Japanisch:

| Sprache                                                         | Stack (system-fonts.css)                                                          |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Lateinisch, kyrillisch                                          | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`                       |
| Vereinfachtes Chinesisch ()`:lang(zh)`)                         | `-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif` |
| Traditionelles Chinesisch ()`:lang(zh-Hant)`, `zh-TW`, `zh-HK`) | `… 'PingFang TC', 'Microsoft JhengHei', sans-serif`                               |
| Japanisch`:lang(ja)`)                                           | `… 'Hiragino Sans', 'Yu Gothic', sans-serif`                                      |
| Code, Versionen, Pfade                                          | `ui-monospace, 'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace`   |

Die Systemschrift passt zum Betriebssystem, kostet keinen Download und macht CJK am besten.
(`font.family.*`, die beginnen mit Inter) sind die **Brand Stack** für Orte, an denen die Systemschrift nicht verfügbar ist
or not wanted: generierte Share-Bilder, Marketing-Kunstwerk und die Komponentengalerie. `lang` am `<html>` (und am)
jedes Element in einer anderen Sprache, so dass der richtige Stack gilt.

InterWenn verwendet, läuft mit `font-feature-settings: "cv11", "ss01"` (einstöckiges A, abwechselnde Ziffern) und
`font-optical-sizing: auto`; `base.css` setzt beides.

<a id="scale"></a>

## Waage

`text-{name}` Setzt Größe, Linienhöhe, Gewicht und Tracking zusammen, benutzt die Skala; legt die Schriftgrößen nicht von Hand fest
mit Ausnahme der dichten Größen, die unter Kleiner Text aufgeführt sind.

| Klasse          | Größe/Linienhöhe | Gewicht | Verfolgung             | Verwendung                                         |
| --------------- | ---------------- | ------- | ---------------------- | -------------------------------------------------- |
| `text-hero`     | 76 / 78          | 600     | -0,035 em              | Website nur Heimhelden                             |
| `text-section`  | 46 / 50          | 600     | -0,03m                 | Überschriften der Website-Abschnitte               |
| `text-display`  | 40 / 44          | 600     | -0,03m                 | Heldenüberschriften                                |
| `text-title1`   | 28 / 34          | 600     | -0,02m                 | Seitentitel                                        |
| `text-title2`   | 22 / 28          | 600     | -0,02m                 | Dialogtitel, kompakte Detail-Header                |
| `text-headline` | 16 / 24          | 600     | -0,01m                 | Abschnittsüberschriften, Kartentitel               |
| `text-stat`     | 20 / 26          | 600     | -0,015m                | Statistische Werte                                 |
| `text-body`     | 14 / 22          | 400     | 0                      | Körpertext                                         |
| `text-body-sm`  | 13 / 20          | 400     | 0                      | Listen, Tabellen, Einstellungszeilen               |
| `text-caption`  | 12 / 18          | 400     | 0                      | Sekundärinformationen                              |
| `text-label`    | 11 / 16          | 600     | 0,08em, Großbuchstaben | Gruppenetiketten (Sidebar-Abschnitte, Augenbrauen) |
| `text-mono`     | 12 / 18          | 400     | 0                      | Befehle, Versionen, Protokolle                     |

Auf schmalen Bildschirmen treten Überschriften die Waage herunter, anstatt frei zu schrumpfen: Der Heimheld ist `text-display` unten
768 px, `text-section` von 768 px und `text-hero` von 1024 px; Feature-Helden Überschriften fallen auf 36 px unter 768 px. App
Fenster gehen nie unter ihre minimale Breite, so dass App-Text nicht skaliert wird.

<a id="small-text"></a>

### Kleiner Text

Die dichte Desktop-Benutzeroberfläche verwendet ein paar Zwischengrößen, immer mit Farbmarken: 12,5 px für kompakte Steuerungen und Tabellen
Zellen, 11,5 px für Metadaten unter einer Reihe, 10,5 px für winzige Abzeichen, nichts kleiner als 10,5 px und nichts darunter
12 px trägt wesentliche Informationen.

<a id="rules"></a>

## Vorschriften

- **Anzahl:** Verwendung `tabular-nums` überall dort, wo sich die Zahlen aneinanderreihen oder ändern (Statistiken, Tabellen, Fortschritt),
  Zähler, Monitore: Formatnummern, Größen und Daten für das Gebietsschema ()[Inhalt](content.md)).
- **Gewicht:** 400 für Text, 500 für Bedienelemente und segmentierte Etiketten, 600 für Überschriften, Button-Etiketten und Hervorhebung.
  700+ im Interface.
- **Hervorhebung:** Fett (600) innerhalb eines Satzes, niemals Farbe allein. `**…**` und
  Putz `text-ink-primary` Gewicht 600 im Sekundärtext.
- **Oberkörper** Nur durch `text-label`, und nur für Latein und Kyrillisch; CJK-Etiketten sind nicht transformiert.
- **Länge der Leitung:** Halten Sie den Körpertext unter etwa 72 Zeichen (oder 40 CJK-Zeichen) pro Zeile; Beschreibungen in Helden
  sind um 430 px gedeckelt.
- **Rubriken** Balancieren Sie Ihre Linien ()`text-wrap: balance`) auf Marketing-Seiten; CJK Überschriften brechen bei der Interpunktion, nicht
  Mitte des Wortes, wo der Browser es erlaubt.
- **Trunkung:** Einzeilige Etiketten mit einer Ellipse abschneiden und den Volltext in einem Tooltip belichten oder `title`;
  Niemals Zahlen oder Status abschneiden.
- **CJK-Abstand:** Kopie legt eine halbe Breite zwischen CJK und lateinischen Buchstaben oder Ziffern ("近 30 天"),
  "下载约 768 MB") und keine neben der Interpunktion in voller Breite. `text-autospace: normal` in `base.css` Füllt nur eine Lücke
  Kopie verpasst; es ersetzt nie den Raum im Quelltext.
