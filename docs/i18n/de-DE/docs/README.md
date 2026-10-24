[English](../../../README.md) · [简体中文](../../zh-CN/docs/README.md) · [繁體中文](../../zh-Hant/docs/README.md) · [日本語](../../ja-JP/docs/README.md) · [Español](../../es-ES/docs/README.md) · [Português (Brasil)](../../pt-BR/docs/README.md) · [Русский](../../ru-RU/docs/README.md) · **Deutsch** · [Français](../../fr-FR/docs/README.md) · [Italiano](../../it-IT/docs/README.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="opennavo-design--specification"></a>

# OpenNavo Entwurf — Spezifikation

OpenNavo Design ist das Designsystem des OpenNavo Apps: Die macOS Kunde ()Tauri + Vue), die Website (Nuxt) und die
Diesen Ordner gibt es als geschriebenen Standard. Die Codepakete implementieren ihn und die Token-Referenz lautet:
aus der gleichen Quelle generiert, so dass die Zahlen hier immer übereinstimmen, welche Schiffe.

Lesen Sie in dieser Reihenfolge das erste Mal:

1. [Grundsätze](principles.md) — wofür das System optimiert wird, und die Regeln, die Argumente regeln.
2. [Farbe](color.md) - Oberflächen, Text, Grenzen, Marke, Status; die dunklen und hellen Themen und ihre Kontrastregeln.
3. [Theming](theming.md) - wie dunkel, hell und "folgen Sie dem System" im Web funktionieren, in Tauri, Flutter und SwiftUI,
   und wie eine andere App das System neu brandmarkt.
4. [Typografie](typography.md), [Layout](layout.md) (Abstand, Radius, Höhe, App-Shell), [Bewegung](motion.md),
   [Ikonographie](iconography.md).
5. [Komponenten](components.md) — die Vue Komponentensatz und wann jedes Teil zu verwenden ist.
6. [Muster](patterns.md) Navigation, Listen, Formulare, Feedback, destruktive Aktionen, Lade- und Leerzustände,
   Berechtigungen, Menüleiste Popovers.
7. [Inhalt](content.md) — Stimme, Wortlautsregeln, Zahlen und Daten, die zehn Schnittstellensprachen.
8. [Zugänglichkeit](accessibility.md) und [Plattformen](platforms.md) (macOS Desktop, Web, Flutter, SwiftUI).
9. [Marke](brand.md) — die Markenschicht, Namen und Logos.
10. [Annahme](adoption.md) - Starten einer neuen App auf dem System und Verschieben einer App, die kopiert wurde OpenNavo's Pakete.

Bezug: [alle Token](reference/tokens.md) (erzeugt von) `tokens/tokens.json`Nicht von Hand bearbeiten.

<a id="conventions-in-this-spec"></a>

## Konventionen in dieser Spec

- **muss** und **nie** sind Regeln; eine Überprüfung sollte sie blockieren. **sollte** Ist der standard, der einen grund braucht, um.
  Alles andere ist Führung.
- Token-Namen werden als ihre JSON Weg ()`surface.card`), mit dem CSS Variable ()`--on-surface-card`) oder
  Versorgungsklasse:`bg-surface-card`wobei der Kontext Code ist.
- Messungen sind CSS Pixel (Punkte auf Apple-Plattformen, logische Pixel in) Flutter).
- Beispiele kommen von OpenNavo. Eine Geschwister-App behält die Struktur bei und tauscht die Markenschicht ()[Marke](brand.md)).
