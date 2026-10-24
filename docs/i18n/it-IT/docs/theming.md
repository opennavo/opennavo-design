[English](../../../theming.md) · [简体中文](../../zh-CN/docs/theming.md) · [繁體中文](../../zh-Hant/docs/theming.md) · [日本語](../../ja-JP/docs/theming.md) · [Español](../../es-ES/docs/theming.md) · [Português (Brasil)](../../pt-BR/docs/theming.md) · [Русский](../../ru-RU/docs/theming.md) · [Deutsch](../../de-DE/docs/theming.md) · [Français](../../fr-FR/docs/theming.md) · **Italiano**

> La versione inglese è il riferimento. Le traduzioni sono bozze prodotte localmente con traduzione automatica e richiedono una revisione umana. Il codice e i testi delle licenze restano invariati.

<a id="theming"></a>

# Theming

Ogni giorno OpenNavo app offre tre scelte di aspetto: **Sistema** (il default), **Chiaro** e **Scuro**. Questa pagina è
il contratto ogni piattaforma implementa.

<a id="the-rule"></a>

## La regola

- Dark è il valore predefinito di ogni token.
- Il tema della luce si applica quando il sistema operativo preferisce la luce **e** la pagina non ha forzato il buio, o quando la
  pagina forza la luce.
- La scelta può anche applicarsi a un sottotreo, ad esempio un'anteprima terminale sempre pericolosa all'interno di una pagina luminosa.

`@opennavo/design-tokens/tokens.css` encodes esattamente che:

```css
:root {
  color-scheme: dark;
  --on-surface-card: #1a1a1a; /* every token, dark values */
}

@media (prefers-color-scheme: light) {
  :root:not([data-theme='dark']) {
    color-scheme: light;
    --on-surface-card: #ffffff; /* themed tokens only */
  }
}
[data-theme='light'] {
  color-scheme: light;
  --on-surface-card: #ffffff;
}
[data-theme='dark'] {
  color-scheme: dark;
  --on-surface-card: #1a1a1a;
}
```

Vengono ripetuti solo token che differiscono tra i temi; spaziatura, tipo, radii e movimento. `color-scheme` Arriva
con il tema, così i controlli di forma nativa e le barre di scorrimento seguono esso — mai impostato `color-scheme` altrove.

| Preferenze | `<html>` attributo              |
| ---------- | ------------------------------- |
| Sistema    | nessuno (la query media decide) |
| Chiaro     | `data-theme="light"`            |
| Scuro      | `data-theme="dark"`             |

`applyThemePreference(preference)` da `@opennavo/design-tokens/theme` (riesportato da `@opennavo/design-vue`) set
o rimuove l'attributo. Imposta anche `data-theme-switching` per una cornice; `base.css` spegne le transizioni
esso, così tutti i colori cambiano nella stessa cornice invece di ogni controllo sbiadisce separatamente.

<a id="subtrees"></a>

### Subtres

`data-theme` funziona su qualsiasi elemento. `base.css` riapplicazioni `color: var(--on-text-primary)` su `[data-theme]`Perché?
un colore di testo ereditato è calcolato nel tema del genitore. Utilizzare i sottotitoli con parsimonia, per le superfici che tengono un tema su
scopo: lo screenshot lightbox e chip didascalia (`component.lightboxScrim` e `component.captionBg` sono scuri in
entrambi i temi, quindi il testo su di loro deve rimanere leggero), screenshot del prodotto nell'altro tema, anteprime terminali.
Mai usare uno per "fissare" un componente che non riesce in un unico tema.

<a id="web-nuxt-vite"></a>

## Web (in inglese)Nuxt, Vite)

Le pagine vengono rese sul server e memorizzate in cache per tutti, quindi HTML non può mai contenere la scelta di un visitatore.

1. Il `<head>` dichiara sia schemi che esegue un piccolo script di blocco prima di qualsiasi foglio di stile:

   ```ts
   import { themeBootScript } from '@opennavo/design-tokens/theme';

   app: {
     head: {
       meta: [{ name: 'color-scheme', content: 'dark light' }],
       script: [{ innerHTML: themeBootScript('onv:theme'), tagPosition: 'head', tagPriority: 'critical' }]
     }
   }
   ```

   Lo script legge `localStorage`, si applica `data-theme` per un salvato `light` o `dark`, e non fa altro.
   Con JavaScript dalla pagina segue ancora il sistema attraverso la query mediatica.

2. L'interruttore a tema memorizza la scelta (`localStorage`, chiave per app — OpenNavo usi `onv:theme`; rimuovere la chiave per
   Sistema) e chiamate `applyThemePreference`.
3. Render l'interruttore nel suo stato "Sistema" sul server e leggere la scelta salvata dopo l'idratazione, o il markup
   non corrisponderà.
4. Ascoltare il `storage` evento così altre schede aperte seguire.

Mai messo `data-theme` in `app.head.htmlAttrs`. Nuxt rendering `app.head` anche sul cliente, e quando l'idratazione
termina il suo head manager imposta l'attributo indietro, sopra la scelta dello script applicato.
tema invece di System scrive che il default nel server render solo (un Nitro `render:html` gancio), e il suo stivale
script deve quindi rimuovere l'attributo per una scelta di sistema salvata.

Il CSP deve consentire lo script in linea (`script-src 'self' 'unsafe-inline'`, o un nonce/hash per esso).

<a id="macos-desktop-tauri"></a>

## macOS desktop (in inglese)Tauri)

Conservare la preferenza con le impostazioni dell'app (`appearance: "system" | "light" | "dark"`) e applicarlo in modo nativo:

```rust
app.set_theme(match appearance {
    Appearance::System => None,
    Appearance::Light => Some(tauri::Theme::Light),
    Appearance::Dark => Some(tauri::Theme::Dark),
});
```

`set_theme` Set set set set `NSApp.appearance`. Rapporti WKWebView `prefers-color-scheme` dall'aspetto efficace e
aggiornamenti dal vivo, quindi **ogni finestra segue senza alcuna JavaScript**: la finestra principale, popover barra dei menu, sovrapposizioni e
avvisi. La finestra principale rispecchia inoltre l'impostazione con `applyThemePreference` così si accende nella stessa cornice,
e così il mock del browser dell'app (nessun aspetto nativo) può essere a tema.

Anche:

- Applicare l'aspetto salvato durante la configurazione, prima che una finestra possa mostrare, o un tema forzato lampeggia l'altro.
- Lo sfondo della finestra è visibile prima che la pagina dipinga e durante il ridimensionamento dal vivo: impostalo su `surface.base` del
  tema efficace (`#131313` / `#F8F8F8`) e aggiornarlo `WindowEvent::ThemeChanged`.
- trasparente popover finestre mantenere `html { background: transparent; color-scheme: normal }` sul proprio documento;
  il loro pannello disegna `surface.card`.
- Seguono menu, avvisi e pannelli aperti `NSApp.appearance` automaticamente. Le icone della barra del menu sono immagini dei modelli;
  macOS colorarli per la barra dei menu, qualunque sia il tema dell'app.

<a id="swiftui"></a>

## SwiftUI

`OnColor.*` valori sono colori dinamici che si risolvono con l'aspetto della vista disegnandoli:

```swift
Text("Installed").foregroundStyle(OnColor.statusSuccess)
    .padding(OnSpace.s2)
    .background(OnColor.statusSuccessSubtle, in: .rect(cornerRadius: OnRadius.small))

ContentView().preferredColorScheme(preference == .system ? nil : (preference == .light ? .light : .dark))
```

Su macOS set set `NSApp.appearance` per il controllo a livello di app, esattamente come in Tauri.

<a id="flutter"></a>

## Flutter

`OnColors` e `OnShadows` sono `ThemeExtension`con `dark` e `light` costanti; `onThemeData(brightness)` costruisce un
Tema materiale che li trasporta:

```dart
MaterialApp(
  theme: onThemeData(Brightness.light),
  darkTheme: onThemeData(Brightness.dark),
  themeMode: switch (preference) { 'light' => ThemeMode.light, 'dark' => ThemeMode.dark, _ => ThemeMode.system },
);

final colors = OnColors.of(context);
Container(color: colors.surfaceCard);
```

<a id="re-branding-another-app"></a>

## Re-branding un'altra app

Lo strato di marca è il set di gettoni un'app di fratelli può cambiare; tutto il resto rimane identico in modo che le applicazioni si sentono come
una famiglia ([Marca](brand.md)). Scrivere un file override con solo quei token e generare:

```json
{
  "color": {
    "brand": { "coral": { "value": "#3C7BFF", "light": "#2457D6" } },
    "text": { "accent": { "value": "#7AA2FF", "light": "#1F4FC2" } }
  }
}
```

```sh
node packages/tokens/scripts/generate.ts --overrides ../my-app/design/brand.json --out ../my-app/design/generated
```

`--out` scrive gli stessi file (CSS, presets, Dart, Swift, DTCG) sotto la cartella dell'app invece di questo repository.

o chiamata `mergeTokens(base, overrides)` e `buildArtifacts()` da `@opennavo/design-tokens/build` nell'app
costruire. Oggetti si fondono, quindi `{ "light": "…" }` cambia solo il valore della luce. Ri-riprendere i test di contrasto contro la fusione
gettoni prima della spedizione.

<a id="checklist-for-a-new-screen"></a>

## Lista di controllo per una nuova schermata

- [ ] Utilizza solo i gettoni; `rg '#[0-9a-fA-F]{3,8}\b|rgba?\('` non trova nulla nel componente.
- [ ] Sembra proprio in buio, luce e luce con un sottotetto scuro se incorpora anteprime.
- [ ] Uso dei pannelli di galleggiamento `surface.popover`, segmenti selezionati `component.segmentActive`.
- [ ] I guanti costruiti da un colore accento sono moltiplicati per `effect.accentGlowOpacity`.
- [ ] Nessun cambiamento di layout o colore sbiadiscono quando il tema cambia.
