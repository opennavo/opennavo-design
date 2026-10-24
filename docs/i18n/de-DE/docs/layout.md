[English](../../../layout.md) · [简体中文](../../zh-CN/docs/layout.md) · [繁體中文](../../zh-Hant/docs/layout.md) · [日本語](../../ja-JP/docs/layout.md) · [Español](../../es-ES/docs/layout.md) · [Português (Brasil)](../../pt-BR/docs/layout.md) · [Русский](../../ru-RU/docs/layout.md) · **Deutsch** · [Français](../../fr-FR/docs/layout.md) · [Italiano](../../it-IT/docs/layout.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="layout"></a>

# Layout

<a id="spacing"></a>

## Abstand

Eine 4 px basierte Skala ()`space.*`, auch die UnoCSS/Tailwind in den Bauteilen verwendete Abstände:

| Schritt | 0   | 0.5 | 1   | 1.5 | 2   | 2.5 | 3   | 3.5 | 4   | 5   | 6   | 7   | 8   | 10  | 12  | 16  | 20  |
| ------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| px      | 0   | 2   | 4   | 6   | 8   | 10  | 12  | 14  | 16  | 20  | 24  | 28  | 32  | 40  | 48  | 64  | 80  |

Typischer Rhythmus:

- 4-8 zwischen einem Icon und seinem Label, Chips in einer Reihe, einem Titel und seinem Untertitel.
- 10-14 innerhalb dichter Reihen und zwischen Steuerelementen in einer Symbolleiste (Symbolleistenelemente sitzen 14 auseinander).
- 16 bis 20 Kardenpolsterung (20 in der Schiene), 22 zwischen Schienenabschnitten.
- 24-28 zwischen Seitenabschnitten; 28 ist die Desktop-Inhaltsrinne.
- 40-80 zwischen Website-Abschnitten.

<a id="radius"></a>

## Radius

| Klasse             | px  | Verwendung                                                |
| ------------------ | --- | --------------------------------------------------------- |
| `rounded-tiny`     | 4   | Keyboard Hinweise, winzige Tags, Inline-Code              |
| `rounded-small`    | 7   | Chips, Eingaben in dichten Zeilen, Segmenten, Menüpunkten |
| `rounded-default`  | 10  | Knöpfe, Eingaben, Mitteilungen, kleine Karten             |
| `rounded-panel`    | 12  | Menüs, Popovers, Screenshots, Listencontainer             |
| `rounded-big`      | 14  | Karten                                                    |
| `rounded-huge`     | 20  | Dialoge, Blätter, Feature-Helden, Detail-Header           |
| `rounded-xl`       | 28  | Große Vermarktungspanels                                  |
| `rounded-full`     | —   | Pillen, Avatare, Umschalter, Punkte                       |
| `rounded-app-icon` | 23% | App-Icon-Kacheln (nähert sich dem) macOS Eichhörnchen     |

Verschachtelte Ecken schrumpfen: Ein Element in einem gepolsterten Container nutzt den nächst kleineren Radius.

<a id="elevation"></a>

## Höhe

Elevation ist Farbe plus Schatten, niemals Schatten allein:

| Ebene | Oberfläche                                               | Schatten         | Beispiele                                          |
| ----- | -------------------------------------------------------- | ---------------- | -------------------------------------------------- |
| 0     | `surface.base`                                           | —                | Fensterinhalt                                      |
| 1     | `surface.card` + `border.subtle`                         | —                | Karten, Listen, Einstellungsgruppen                |
| 2     | `surface.popover` / `surface.overlay` + `border.default` | `shadow.popover` | Menüs, Tooltips, Floating Notices, Kommandopalette |
| 3     | `component.modalBg` + `border.default`                   | `shadow.modal`   | Dialoge, Blätter                                   |
| —     | `component.toastBg`                                      | `shadow.toast`   | Braten                                             |
| —     | —                                                        | `shadow.window`  | Fensterrahmen in Screenshots und Marketing-Mockups |

Schatten sind schwer und schwarz im dunklen Modus, weich im hellen Modus; die Token tragen beides.
hinter ihnen steht ()`effect.backdropBlur`20 px.

<a id="layers"></a>

## Schichten

| `z-*`      | Wert | Verwendung                                                |
| ---------- | ---- | --------------------------------------------------------- |
| `base`     | 0    | Inhalt                                                    |
| `sticky`   | 10   | Klebrige Symbolleisten, Seitenleisten, Tischüberschriften |
| `dropdown` | 100  | Menüs, Schienenüberlagerung                               |
| `overlay`  | 200  | Krampen                                                   |
| `modal`    | 300  | Dialoge, Blätter, Lightbox                                |
| `popover`  | 400  | Popovers über Dialogen                                    |
| `toast`    | 500  | Braten                                                    |
| `tooltip`  | 600  | Tooltips                                                  |

<a id="the-app-shell"></a>

## Die App Shell

Desktop-FensterTauri) — `OnAppShell` im Containerbetrieb:

```
┌──────────┬──────────────────────────────────────────────┬──────────┐
│ ● ● ●    │ toolbar · 52 px · back/forward · ⌘K search    │          │
│          ├──────────────────────────────────────────────┤  rail    │
│ sidebar  │ main · scrolls · 28 px gutters                │  288 px  │
│ 224 px   │                                              │ optional │
│          │                                              │          │
└──────────┴──────────────────────────────────────────────┴──────────┘
```

- Standardfenster 1280 × 820, mindestens 1100 × 700 Ampeln 18 × 22 über der Seitenleiste (Overlay-Titelleiste);
  die Symbolleiste und die leere Seitenleistenoberseite sind Fensterschleppbereiche.
- Seitenleiste: Markenzeichen, gruppierte Navigation ()`text-label` Gruppentitel, 13,5 px Items), Einstellungen an den Boden gepinnt.
  Labels haben etwa 152 px; Übersetzungen müssen passen ([Inhalt](content.md)).
- Schiene: nur auf Seiten, die eine haben, angedockt bei 1240 px und breiter, ansonsten von der Symbolleiste als Overlay geöffnet.
- Hauptinhalt: `px-28px pb-28px`Abschnitte 24-28 auseinander, Page Header ()`text-title1` + eine Zeile von `text-body-sm`
  Sekundärtext) oben.

Website — `OnAppShell` im Dokumentmodus für Speicherseiten ein Landungslayout in voller Breite für Marketingseiten:

- Seitenbreite 1240 max mit 24 px Rinnen; obere Navigation 64 px; Haltepunkte `sm` 640, `md` 768, `lg` 1024, `xl` 1280,
  `2xl` 1440.
- Speicherseiten verwenden die Desktop-Shell wieder: Sidebar und Toolbar sind klebrig von `md`; unten `md` eine kompakte Bar mit einem Menü
  Ersetzt beide; die Schiene sitzt neben dem Inhalt von `xl` und darunter sonst.
- Marketingseiten: Full-Bleed `surface.page`, zentrierte Abschnitte, Mock-App-Fenster mit den gleichen Token wie die App.

<a id="grids"></a>

## Gitter

- Kartenraster füllen Spalten von mindestens 260 px mit 12 px Lücken ()`grid-cols-[repeat(auto-fill,minmax(260px,1fr))]`: drei
  In einem vollen Desktop-Fenster, weniger, da es sich verengt. Die dichtere App rastet innerhalb einer Seite mit einer Schiene 220 px.
- Statistische Kacheln: 2 Spalten in der Schiene, bis zu 5 über in einer Detailseite.
- Einstellungen: eine 720 px Spalte von `OnCard` Gruppen mit Zeilen (Label + Hinweis links, Kontrolle rechts); Abschnitt Navigation auf der
  links bei 180 px.
- Formulare im Web: eine einzelne 720 px Spalte; Beschriftungen über Feldern.

<a id="density"></a>

## Dichte

Desktop-Benutzeroberfläche ist dicht, aber nicht eng: 32-40 px Zeilen in Listen, 28-34 px Steuerelemente, 13-13,5 px Text.
Web sind mindestens 32 px (44 px für primäre mobile Aktionen).
