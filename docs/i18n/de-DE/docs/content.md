[English](../../../content.md) · [简体中文](../../zh-CN/docs/content.md) · [繁體中文](../../zh-Hant/docs/content.md) · [日本語](../../ja-JP/docs/content.md) · [Español](../../es-ES/docs/content.md) · [Português (Brasil)](../../pt-BR/docs/content.md) · [Русский](../../ru-RU/docs/content.md) · **Deutsch** · [Français](../../fr-FR/docs/content.md) · [Italiano](../../it-IT/docs/content.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="content"></a>

# Inhalt

Wörter sind Interface. Die gleichen Regeln gelten in jeder Sprache; Englisch und vereinfachtes Chinesisch werden zuerst geschrieben, die
weitere acht Sprachen werden von ihnen übersetzt und überprüft.

<a id="voice"></a>

## Stimme

Einfach, spezifisch und ruhig - ein fähiger Freund, der erklärt, was vor sich geht, kein Verkäufer und keine Protokolldatei.

- **Sagen Sie, was passiert.** "Verschiebt 14 Gegenstände in den Papierkorb. Sie können sie von dort aus wiederherstellen." nicht "Sind Sie sicher?"
- **Sagen Sie, wohin die Daten gehen.** "Nur auf diesem Mac; nichts wird hochgeladen." "Suche geht direkt von diesem Mac zu Apple."
- **Eigene Misserfolge, bieten den nächsten Schritt.** "Einige Inhalte konnten nicht geladen werden. Zuvor geladene Inhalte wurden beibehalten."
  "Der Update-Check konnte nicht abgeschlossen werden. Versuchen Sie es noch einmal, oder überprüfen Sie das Netzwerk."
- **Kein Hype, kein Füllstoff.** Keine "Oops!", keine Ausrufezeichen, keine "einfach", "gerecht", "nahtlos", "mächtig".
- **Konkret über abstrakt.** Benennen Sie die App, die Anzahl, die Größe, die Zeit. "Docker Desktop braucht Administrator
  Permission" schlägt "Permission required" vor.

<a id="wording-rules"></a>

## Wortlautsregeln

- **Knöpfe** sind Verben, die die Aktion benennen: Installieren, Aktualisieren Sie alle (4), Bewegen Sie sich in den Papierkorb, Rollen Sie zurück, Öffnen Sie in OpenNavo.
  Englische Button-Etiketten und Menüpunkte verwenden Titelfall; alles andere verwendet Satzfall.
- **Titel** sind kurze Substantivphrasen oder Zustände: "Ihre Liste ist leer", "Keine Ergebnisse für" vscode ".
- **Beschreibungen** Das ist ein Satz. Zwei höchstens. Setzen Sie die Aktion hinter die Erklärung.
- **Hinweise** unter den Einstellungen sagen, was die Option tut, wenn sie eingeschaltet ist, nicht das, was das Etikett bereits sagt.
- **Bestätigungsdialoge**: Titel stellt die spezifische Frage ("Löschen Sie "Arbeit" von diesem Mac?"), Körper sagt die
  consequence, confirm button wiederholt das Verb.
- **Fehler**: was schief gelaufen ist, in den Begriffen des Benutzers, plus was zu tun ist. Fehlercodes gehen in Details oder Protokolle, nicht Titel.
- **Datenschutzlinien** Beginnen Sie mit einem Schloss-Symbol und bleiben Sie eine Zeile.
- Verwenden Sie lockige Anführungszeichen (" " " " ), echte Apostrophe, das Ellipsenzeichen (...), das Multiplikationszeichen (x) und die
  Pfeil (→) für Versionsänderungen: `1.2.9 → 1.3.0`.
- Produkt- und Plattformnamen behalten ihre Schreibweise: macOS, iPhone, App Store GitHub, HomebrewApp-Namen werden angezeigt als
  Der Entwickler schreibt sie.

<a id="chinese-简体--繁體"></a>

## Chinesisch (简体 / 繁體)

- 用自然、具体的口语书面语，不写套话和模板句（“一站式”“全方位”“赋能”“轻松实现”之类）。
- 按钮用动词短语：“安装”“全部更新（4）”“移到废纸篓”。不要“确定”“好的”。
- 中�与英�、数之间加一个半角空格:„近 30 天“„下载约 768 MB“在 OpenNavo 中打开”；与全角标点相邻时不加。
- 全角标点：，。；：？！“”（）——……；引号用“”，嵌套用‘’。
- 数量用“个”“款”“项”等合适的量词，大数用“万”“亿”（由格式化函数处理）。
- 繁体中文是独立的语言版本：用台湾、香港用户熟悉的词（“軟體”“資料夾”“設定”），不是简体的字形转换。

<a id="numbers-sizes-and-dates"></a>

## Zahlen, Größen und Daten

Formatieren Sie immer über die geteilten Helfer ()`Intl`-basiert), niemals durch String-Verkettung:

| Art des Tieres  | Regel                                                                         | Beispiele                    |
| --------------- | ----------------------------------------------------------------------------- | ---------------------------- |
| Grafen          | Lokale Gruppierung; kompakte Form in engen Räumen                             | 17,392 · 1.7 万 · 1,7 тыс.   |
| Größen          | Dezimaleinheiten (1 KB = 1000 B), eine Dezimalstelle unter 10                 | 768 MB · 2,3 GB              |
| Drehzahlen      | Größe pro Sekunde                                                             | 560,6 KB/s                   |
| %               | Ganze Zahlen, es sei denn, die Dezimalzahl ändert ihre Bedeutung              | 62% · 0.8%                   |
| Daten           | Lokale Bestellung, kurzer Monat; Weglassen des Jahres im laufenden Jahr       | Okt 23 · 10月23日 · 23. Okt. |
| Relative Zeiten | Gerade jetzt → Minuten → Stunden → Gestern → Tage (unter einer Woche) → Datum | Vor 2 Stunden · 昨天         |
| Zeiten          | 24-Stunden-Uhr in jeder Sprache                                               | 09:00 · 21:41                |
| Laufzeiten      | Sekunden unter einer Minute, dann Minuten und Sekunden                        | 38 s · 2 min 5 s · 2 分 5 秒 |
| Fassungen       | Wie veröffentlicht; Pfeile zwischen                                           | 4.49.9 → 4.50.0              |

Plural verwenden die Pluralkategorien des Gebietsschemas (Englisch eins/anderes; Russisch eins/wenige/viele/andere; Chinesisch und Japanisch eins)
Formblatt — niemals `item(s)`.

<a id="interface-languages"></a>

## Schnittstellensprachen

| Code      | Sprache               | Anmerkungen                                             |
| --------- | --------------------- | ------------------------------------------------------- |
| `en-US`   | Englisch              | Autorsprache für den Wortlaut; Satzfall                 |
| `zh-CN`   | 简体中文              | Quelle der Wahrheit für die Bedeutung in OpenNavo       |
| `zh-Hant` | 繁體中文              | Taiwan/Hongkong-Vokabular; Daten folgen `zh-TW`         |
| `ja-JP`   | 日本語                | Höflich, prägnant; keine Großbuchstabentransformationen |
| `es-ES`   | Español               | Oft 25-35% länger als Englisch                          |
| `pt-BR`   | Português (Brasilien) | Oft 25-35% länger                                       |
| `ru-RU`   | Русский               | Oft 30-60% länger; vier Pluralformen                    |
| `de-DE`   | Deutsch               | Lange Verbindungen; Umhüllung ermöglichen               |
| `fr-FR`   | Français              | Nicht brechenden Raum vor : ; ? !                       |
| `it-IT`   | Italienisch           | Oft 20-30% länger                                       |

Regeln:

- **Design für die längste Sprache.** Ein Sidebar-Etikett hat etwa 152 px bei 13,5 px; messen Russisch, Spanisch und
  Deutsch dagegen und verkürzen die Übersetzung statt abschneiden. Knöpfe können wachsen; fixieren Sie niemals ihre Breite.
- **Keine Verkettung.** Ganze Sätze mit benannten Platzhaltern ()`{count}`, `{name}`Übersetzer bewegen sie.
- **Jedes Lokal hat jeden Schlüssel.** Eine fehlende Übersetzung fällt auf Englisch zurück und CI prüft Schlüssel und Platzhalter.
- **Marken- und Produktnamen** werden nicht übersetzt; der App-Name bleibt OpenNavo In jeder Sprache.
- **Maschinelle Übersetzung** ist als solche gekennzeichnet, wo der Inhalt (nicht die Schnittstelle) automatisch übersetzt wird, mit einem Link zu
  das Original.
