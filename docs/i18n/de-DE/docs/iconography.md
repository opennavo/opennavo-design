[English](../../../iconography.md) · [简体中文](../../zh-CN/docs/iconography.md) · [繁體中文](../../zh-Hant/docs/iconography.md) · [日本語](../../ja-JP/docs/iconography.md) · [Español](../../es-ES/docs/iconography.md) · [Português (Brasil)](../../pt-BR/docs/iconography.md) · [Русский](../../ru-RU/docs/iconography.md) · **Deutsch** · [Français](../../fr-FR/docs/iconography.md) · [Italiano](../../it-IT/docs/iconography.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="iconography"></a>

# Ikonographie

<a id="interface-icons"></a>

## Icons für Schnittstellen

- **Set:** [Lucide](https://lucide.dev) (ISC Lizenz), gebündelt als Offline-Untermenge — nur Icons aufgeführt in
  `packages/vue/src/icons/names.ts` Schiff, gerendert als inline SVG, so dass sie in SSR und ohne Netzwerk.
- **Größen:** 16 px in Menüs und Navigation, 15 px in `md`/`lg` Knöpfe, 14 px in `xs`/`sm` Knöpfe und Chips, 12–13 px
  Icons in einem 26-32 px-Kachelrender bei 14-16 px.
- **Strich und Farbe:** Lucide's 2 px Strich bei 24 px, skaliert; Icons nehmen `currentColor`So folgen sie dem Text
  Farbe Icons nicht unabhängig, es sei denn, sie tragen Status.
- **Bedeutung:** ein Icon pro Konzept über die App hinweg (zum Beispiel) `circle-arrow-down` für Updates, `shield-check` für
  Sicherheit, `eraser` Icon-only Buttons haben immer eine `aria-label` und einem Tooltip.
- **Hinzufügen von Icons:** Das Paket bündelt nur die Icons, die seine Komponenten zeichnen. Eine App fügt ihre eigenen hinzu
  `registerIcons(getIcons(lucide, ['compass', 'settings']))` (`@iconify/utils` + `@iconify-json/lucide`, oder ein beliebiges in
  Iconify JSON Form, adressiert als `prefix:name`) einmal beim Start, so dass sein Bundle genau das trägt, was es verwendet.
  Komponenten selbst müssen in `packages/vue/src/icons/names.ts`, dann `pnpm gen`Unbekannte Namen
  Nichts und warnen in der Entwicklung.

<a id="icon-tiles"></a>

## Icon Fliesen

Kleine quadratische Kacheln enthalten ein Symbol in Feature-Listen, Einstellungen und Hinweisen: 26-40 px, `rounded-[7–9px]` (oder)
`rounded-app-icon` bei 40 px und höher, `bg-surface-raised` mit `text-ink-secondary`oder einen subtilen Status mit dem
Statusfarbe für stateful items.

<a id="app-icons"></a>

## App-Icons

- App-Artwork wird als geliefert angezeigt, `object-contain`, keine Maske hinzugefügt: macOS Icons enthalten bereits ihre Form.
- Fehlendes Kunstwerk fällt zurück auf eine **Briefkachel**: ein 160°-Gradient des Akzents der App (oder eine Farbe, die sich aus ihrer
  Identifikator) abgedunkelt 18%, weiße Initialen bei 42% der Seite, `rounded-app-icon`, `shadow-app-icon`.
- Kommandozeilen-Tools verwenden die **Terminalkachel**: eine dunkle Gradientenkachel in beiden Themen mit einer Monospace-Abkürzung bei
  30% der Seite und ein farbiger Balken.
- Gebrauchte Größen: 20, 24, 26, 28, 30, 32, 40, 44, 46, 54, 64, 96, 118 px.

<a id="brand-mark"></a>

## Markenzeichen

Jede App versendet ihre eigene Markierung; die Systemkomponenten führen sie durch eine `brand` Markenzeichen gehören nicht dazu
Lizenz des Repository ()[Marke](brand.md)).
