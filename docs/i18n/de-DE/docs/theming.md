[English](../../../theming.md) · [简体中文](../../zh-CN/docs/theming.md) · [繁體中文](../../zh-Hant/docs/theming.md) · [日本語](../../ja-JP/docs/theming.md) · [Español](../../es-ES/docs/theming.md) · [Português (Brasil)](../../pt-BR/docs/theming.md) · [Русский](../../ru-RU/docs/theming.md) · **Deutsch** · [Français](../../fr-FR/docs/theming.md) · [Italiano](../../it-IT/docs/theming.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="theming"></a>

# Theming

Jeder OpenNavo Die App bietet drei Möglichkeiten zum Aussehen: **System** (Ausfall), **Hell** und **Dunkel**Diese Seite ist
den Vertrag, den jede Plattform umsetzt.

<a id="the-rule"></a>

## Die Regel

- Dark ist der Standardwert jedes Tokens.
- Das Lichtthema gilt, wenn das Betriebssystem Licht bevorzugt **und** die Seite nicht dunkel gemacht hat, oder wenn die
  Page Forces Light.
- Die Auswahl kann auch für einen Teilbaum gelten, beispielsweise eine Vorschau auf ein immer dunkles Terminal innerhalb einer Lichtseite.

`@opennavo/design-tokens/tokens.css` kodiert genau das:

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

Nur Token, die sich zwischen den Themen unterscheiden, werden wiederholt; Abstand, Typ, Radien und Bewegung werden geteilt. `color-scheme` kommt
mit dem Thema, also folgen native Formularsteuerelemente und Scrollleisten - niemals gesetzt `color-scheme` woanders.

| Präferenz | `<html>` Attribute                    |
| --------- | ------------------------------------- |
| System    | keine (die Medienabfrage entscheidet) |
| Hell      | `data-theme="light"`                  |
| Dunkel    | `data-theme="dark"`                   |

`applyThemePreference(preference)` von `@opennavo/design-tokens/theme` (wiederausgeführt von) `@opennavo/design-vue`) Sätze
oder entfernt das Attribut. `data-theme-switching` für einen Rahmen; `base.css` schaltet Übergänge aus unter
Es ändert sich also alle Farben im selben Frame, anstatt dass jedes Steuerelement separat verblasst.

<a id="subtrees"></a>

### Unterbäume

`data-theme` Funktioniert auf jedem Element. `base.css` Wiederbeantragung `color: var(--on-text-primary)` am `[data-theme]`, weil
Eine geerbte Textfarbe wird im übergeordneten Thema berechnet.
Zweck: die Screenshot-Lightbox und die Beschriftungschips ()`component.lightboxScrim` und `component.captionBg` sind dunkel in
beide Themen, so dass der Text darauf hell bleiben muss), Screenshots des Produkts im anderen Thema, Terminalvorschau.
Verwenden Sie niemals eine, um eine Komponente zu "beheben", die in einem Thema fehlschlägt.

<a id="web-nuxt-vite"></a>

## WebNuxt, Vite)

Seiten werden auf dem server gerendert und für alle zwischengespeichert, so dass die. HTML kann niemals die Wahl eines Besuchers enthalten.

1. Die `<head>` deklariert beide Schemata und führt ein winziges Blockierskript vor jedem Stylesheet aus:

   ```ts
   import { themeBootScript } from '@opennavo/design-tokens/theme';

   app: {
     head: {
       meta: [{ name: 'color-scheme', content: 'dark light' }],
       script: [{ innerHTML: themeBootScript('onv:theme'), tagPosition: 'head', tagPriority: 'critical' }]
     }
   }
   ```

   Das Drehbuch liest sich `localStorage`, gilt `data-theme` für eine gerettete `light` oder `dark`, und tut nichts anderes.
   mit JavaScript off the page folgt immer noch dem system durch die medienabfrage.

2. Der Theme Switch speichert die Auswahl ()`localStorage`, Schlüssel pro App - OpenNavo Verwendungen `onv:theme`Entfernen Sie den Schlüssel für
   System) und Anrufe `applyThemePreference`.
3. Rendern Sie den Switch im Zustand "System" auf dem Server und lesen Sie die gespeicherte Option nach der Hydratation oder das Markup
   wird nicht passen.
4. Hören Sie sich die `storage` Event, so dass andere offene Tabs folgen.

Niemals `data-theme` in `app.head.htmlAttrs`. Nuxt Putz `app.head` Auch beim Kunden und bei der Hydratation
Endet der Chefmanager setzt das Attribut zurück, über die Auswahl das angewendete Skript.
theme statt System schreibt diesen Standard nur im Serverrender (ein Nitro) `render:html` Haken und Schuh
Das Skript muss dann das Attribut für eine gespeicherte Systemauswahl entfernen.

Der CSP muss das Inline-Skript zulassen ()`script-src 'self' 'unsafe-inline'`Oder eine Nonce/Hash dafür.

<a id="macos-desktop-tauri"></a>

## macOS DesktopTauri)

Speichern Sie die Präferenz mit den Einstellungen der App ()`appearance: "system" | "light" | "dark"`) und nativ anwenden:

```rust
app.set_theme(match appearance {
    Appearance::System => None,
    Appearance::Light => Some(tauri::Theme::Light),
    Appearance::Dark => Some(tauri::Theme::Dark),
});
```

`set_theme` Sätze `NSApp.appearance`WKWebView-Berichte `prefers-color-scheme` aus dem wirksamen Erscheinungsbild und
Updates live, so **Jedes Fenster folgt ohne JavaScript**: das Hauptfenster, Menüleiste Popovers, Overlays und
Das Hauptfenster spiegelt zusätzlich die Einstellung mit `applyThemePreference` So wechselt er im selben Frame,
und so kann das Browser-Mock der App (kein natives Erscheinungsbild) thematisiert werden.

Auch:

- Tragen Sie das gespeicherte Erscheinungsbild während der Einrichtung an, bevor ein Fenster angezeigt werden kann, oder ein erzwungenes Thema blinkt das andere.
- Der Fensterhintergrund ist sichtbar, bevor die Seite malt und während der Live-Größenänderung: Stellen Sie es auf `surface.base` von
  effektives Thema ()`#131313` / `#F8F8F8`) und aktualisieren Sie es auf `WindowEvent::ThemeChanged`.
- Transparente Popover Fenster halten `html { background: transparent; color-scheme: normal }` auf eigenem Papier;
  ihre Panel-Ziehen `surface.card`.
- Native Menüs, Alerts und offene Panels folgen `NSApp.appearance` Menüleistensymbole sind Vorlagenbilder.
  macOS färbt sie für die Menüleiste, unabhängig vom App-Thema.

<a id="swiftui"></a>

## SwiftUI

`OnColor.*` Werte sind dynamische Farben, die sich mit dem Aussehen der Zeichnung auflösen:

```swift
Text("Installed").foregroundStyle(OnColor.statusSuccess)
    .padding(OnSpace.s2)
    .background(OnColor.statusSuccessSubtle, in: .rect(cornerRadius: OnRadius.small))

ContentView().preferredColorScheme(preference == .system ? nil : (preference == .light ? .light : .dark))
```

am macOS Setz `NSApp.appearance` für app-weite Steuerung, genau wie in Tauri.

<a id="flutter"></a>

## Flutter

`OnColors` und `OnShadows` sind `ThemeExtension`s mit `dark` und `light` Konstanten; `onThemeData(brightness)` baut a
Material Thema, das sie trägt:

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

## Re-Branding einer weiteren App

Die Markenebene ist die Menge an Token, die eine Geschwister-App ändern kann; alles andere bleibt identisch, so dass sich die Apps wie
eine Familie ()[Marke](brand.md)Schreiben Sie eine Override-Datei mit nur diesen Token und erzeugen Sie:

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

`--out` Schreibe die gleichen Dateien ()CSS, presets, Dart, Swift, DTCG) unter dem Ordner der App anstelle dieses Repository.

oder Anruf `mergeTokens(base, overrides)` und `buildArtifacts()` von `@opennavo/design-tokens/build` In der App selbst
Objekte verschmelzen, also `{ "light": "…" }` Es wird nur der Lichtwert geändert.
Token vor dem Versand.

<a id="checklist-for-a-new-screen"></a>

## Checkliste für einen neuen Bildschirm

- [ Verwendet nur Tokens; `rg '#[0-9a-fA-F]{3,8}\b|rgba?\('` findet nichts in der Komponente.
- [ ] Sieht rechts in dunkel, hell und hell mit einem dunklen Unterbaum aus, wenn er Vorschauen einbettet.
- [ ] Verwendung von schwimmenden Platten `surface.popover`ausgewählte Segmente `component.segmentActive`.
- [ ] Leuchten, die aus einer Akzentfarbe aufgebaut sind, werden multipliziert mit `effect.accentGlowOpacity`.
- [ Keine Layoutverschiebung oder Farbverblassen, wenn sich das Thema ändert.
