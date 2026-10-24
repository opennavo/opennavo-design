[English](../../../brand.md) · [简体中文](../../zh-CN/docs/brand.md) · [繁體中文](../../zh-Hant/docs/brand.md) · [日本語](../../ja-JP/docs/brand.md) · [Español](../../es-ES/docs/brand.md) · [Português (Brasil)](../../pt-BR/docs/brand.md) · [Русский](../../ru-RU/docs/brand.md) · **Deutsch** · [Français](../../fr-FR/docs/brand.md) · [Italiano](../../it-IT/docs/brand.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="brand"></a>

# Marke

OpenNavo Design wird von einer Familie von Apps geteilt. Sie teilen alles, außer einer dünnen Markenschicht, also eine Person, die es kennt
Eine App kennt die anderen bereits.

<a id="the-brand-layer"></a>

## Die Markenschicht

Eine App darf nur diese Token ändern (mit beiden Theme-Werten):

| Design-Token                                                                         | Was es trägt                                                                               |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `brand.coral`                                                                        | Die Akzentfüllung: Akzenttasten, Umschaltungen, Fortschritt, Fokusringfarbe, kleine Punkte |
| `text.accent`                                                                        | Akzentfarbener Text und Links                                                              |
| `accent.coralSubtle`                                                                 | Accent Tönungen hinter Chips und Progress Tracks                                           |
| `button.accentBg`, `button.accentHover`, `button.accentPressed`, `button.accentText` | Der Akzent-Button                                                                          |
| `shadow.focusRing`                                                                   | Der Fokusring (halten Sie die 2 px Lücke + 2 px Ringform)                                  |
| `component.runningBorder`                                                            | Die Grenze einer laufenden Aufgabe                                                         |
| `brand.salmon`, `accent.salmonSubtle`                                                | Warme Betonung Text und Abzeichen                                                          |
| `brand.violet`, `effect.heroGlow`, `effect.coverGlow`                                | Hero Glows                                                                                 |
| `brand.logoGradient`, `brand.logoCoreGradient`                                       | Die eigene Marke der App                                                                   |

Token-Namen bleiben gleich ()`brand.coral` behält seinen namen auch dann, wenn der akzent einer app blau ist komponenten und docs.
Generieren Sie die Token einer App mit einer Override-Datei ()[Theming › Re-Branding](theming.md#re-branding-another-app))
und halten Sie die Kontrasttests grün: Akzenttext muss in beiden Themen immer noch 4,5:1 erreichen und der Akzent füllt 3:1.

Alles andere - Neutrale, Statusfarben, Typ, Abstand, Radien, Bewegung, Komponenten und Muster - ist in
Jede App.

<a id="names-and-marks"></a>

## Bezeichnungen und Marken

- Jede App hat ihren eigenen Namen und ihre eigene Marke. `brand` Slot; das Designsystem liefert keine
  Logo.
- Die OpenNavo Name und Logo sind Markenzeichen der OpenNavo Autoren und sind **nicht** von diesem Repository abgedeckt MIT
  Lizenz[TRADEMARKS.md](../TRADEMARKS.md)Apps, die auf dem System aufgebaut sind, dürfen sie nicht als eigenen Namen oder Icon verwenden.
- Das Komponentenpräfix `On` und die CSS Präfix `--on-` gehören zum System, nicht zu einem Produkt; halten Sie sie.

<a id="using-the-mark-well-for-opennavo-itself"></a>

## Verwenden Sie die Markierung gut (für) OpenNavo selbst

- Die Wortmarke sitzt neben der Marke bei 15 px, Gewicht 600, in `brand.coral`; die Marke ist 22 px hoch daneben.
- Unterhalb von 32 px verwendet die Markierung ihre vereinfachte Geometrie.
- Auf hellen Hintergründen wechselt der Stern in der Markierung zum Bernsteinkerngradienten; Legen Sie die Markierung niemals auf ein beschäftigtes Bild.
