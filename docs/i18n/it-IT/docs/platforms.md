[English](../../../platforms.md) · [简体中文](../../zh-CN/docs/platforms.md) · [繁體中文](../../zh-Hant/docs/platforms.md) · [日本語](../../ja-JP/docs/platforms.md) · [Español](../../es-ES/docs/platforms.md) · [Português (Brasil)](../../pt-BR/docs/platforms.md) · [Русский](../../ru-RU/docs/platforms.md) · [Deutsch](../../de-DE/docs/platforms.md) · [Français](../../fr-FR/docs/platforms.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="platforms"></a>

# Piattaforme

Gli stessi token e regole su ogni piattaforma; questa pagina elenca ciò che differisce.

<a id="macos-desktop-tauri--vue"></a>

## macOS desktop (in inglese)Tauri + Vue)

- **Finestra:** overlay title bar con titolo nascosto, semaforo inset 18 × 22, default 1280 × 820, minimo
  1100 × 700. Segnare la barra degli strumenti e le aree di intestazione vuota come regioni di trascinamento (`data-tauri-drag-region`).
- **Aspetto:** negozio `system | light | dark` nelle impostazioni; applicare con `app.set_theme()` prima dell'esposizione delle finestre; sincronizzazione
  lo sfondo principale della finestra a `surface.base` e su `ThemeChanged` ([Theming](theming.md#macos-desktop-tauri)).
- **Popover e overlays** sono trasparenti separate, finestre senza bordi (poveri barra dimenu, guide di autorizzazione,
  avvisi): loro `html` soggiorni trasparenti con `color-scheme: normal`, il pannello disegna `surface.card` con
  `rounded-panel` e la sua ombra; le ombre native sono spente così i limiti trasparenti non mostrano mai.
- **Menu bar:** gli elementi sono immagini di modello in modo da macOS colorarli; facendo clic su acceca il popover; nulla attiva il
  finestra principale a meno che l'utente non scelga "Apri".
- **Integrazione del sistema:** autorizzazioni attraverso i collegamenti profondi Impostazioni di sistema con un overlay guida che non prende
  focus; il menu nativo dell'app ha elementi standard (Su, Impostazioni ⌘,,, Nascondi, Pianta); le finestre di dialogo che hanno bisogno di una password
  utilizzare il prompt del sistema e dire a cosa serve.
- **Fonti:** il font del sistema tramite `system-fonts.css`. **Scroll:** la colonna principale scorre all'interno della finestra
  (`OnAppShell scroll="container"`).
- **Specifiche WebKit:** messa a fuoco di prova e trasparenza in WKWebView, non solo in Chromium — `:focus-visible` e
  occlusione comportarsi in modo diverso.

<a id="web-nuxt"></a>

## Web (in inglese)Nuxt)

- Server-rendered e cache-friendly: il HTML è lo stesso per ogni visitatore; tema, consenso e suggerimenti sono
  applicato nel browser. Lo script di avvio a tema è l'unico script in linea di cui il sistema di progettazione ha bisogno.
- `OnAppShell scroll="document"` con barra laterale appiccicosa e barra degli strumenti da `md`, una barra compatta qui sotto.
- I collegamenti sono collegamenti reali (`linkAs` = `NuxtLink`), con prefetch sull'interazione piuttosto che la visibilità.
- Meta: `color-scheme: dark light`Set `lang` e hreflang per pagina.

<a id="react--tailwind-css"></a>

## React + Tailwind CSS

Non ci sono React componenti; utilizzare i gettoni e seguire le specifiche del componente.

```css
/* app.css — Tailwind CSS v4 */
@import 'tailwindcss';
@import '@opennavo/design-tokens/tailwind.css'; /* theme mapping + tokens.css */
@import '@opennavo/design-tokens/base.css'; /* html colors, theme-switch guard, reduced motion */
@import '@opennavo/design-tokens/system-fonts.css';
```

Aiutanti a tema senza Vue: `applyThemePreference`, `themeBootScript` e `THEME_PREFERENCES` da
`@opennavo/design-tokens/theme`. [`examples/react-tailwind`](../../../../examples/react-tailwind) mostra una scheda impostazioni con una
Interruttore a tema, una toggle e pulsanti costruiti da queste classi.

Le lezioni corrispondono al Vue componenti (`bg-surface-card`, `text-ink-secondary`, `border-line-subtle`, `rounded-big`,
`shadow-popover`, `text-title1`, `duration-fast`, `z-modal`). Tailwind CSS v3 utilizza la preimpostazione:
`presets: [openNavoPreset]` da `@opennavo/design-tokens/tailwind-preset`# Piu' #
`import '@opennavo/design-tokens/tokens.css'`. Interruttore a tema è lo stesso `data-theme` attributo.

<a id="swiftui-opennavodesign-swift-package"></a>

## SwiftUI (`OpenNavoDesign` Pacchetto rapido)

- `OnColor.*` colori dinamici `OnSpace.*`, `OnRadius.*`, `OnTypography.*` con `.onTextStyle(_:)`, `OnShadow.*` con
  `.onShadow(_:)`, `OnMotion.*` (durazioni e `Animation` curve), `OnLayout.*`.
- I controlli di sistema rimangono controlli di sistema; applicare token a sfondi, testo e spaziatura intorno a loro.
- Tipo utilizza SF Pro alle dimensioni dei token; il tracciamento viene convertito da em a punti.

<a id="flutter-opennavo_design-package"></a>

## Flutter (`opennavo_design` pacchetto)

- `onThemeData(Brightness)` per `theme` / `darkTheme`; `OnColors.of(context)` e `OnShadows.of(context)` per il token
  colori e ombre (`ThemeExtension`s che animano tra temi).
- `OnSpace`, `OnRadius`, `OnTypography` (`TextStyle`s; maiuscolo `label` stringa tu stesso), `OnMotion`
  (`Duration`S e `Cubic` curve), `OnLayout`.
- Gli strati d'ombra inset non sono disponibili Flutter e sono omessi.
