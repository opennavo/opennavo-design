[English](../../../README.md) · [简体中文](../zh-CN/README.md) · [繁體中文](../zh-Hant/README.md) · [日本語](../ja-JP/README.md) · [Español](../es-ES/README.md) · [Português (Brasil)](../pt-BR/README.md) · [Русский](../ru-RU/README.md) · **Deutsch** · [Français](../fr-FR/README.md) · [Italiano](../it-IT/README.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="opennavo-design"></a>

# OpenNavo Design

Das Designsystem hinter [OpenNavo](https://opennavo.com), dem kostenlosen Open-Source-App-Store für Homebrew auf dem Mac, und den zugehörigen Apps. Gemeinsame Design-Tokens, eine dokumentierte Spezifikation und wiederverwendbare Komponenten sorgen für einheitliche Gestaltung, Texte und Bedienung im hellen und dunklen Design.

<a id="language-and-release-status"></a>

## Vorschau

### Dunkles Design

![Dunkles Design](../../previews/shell-dark.png)

### Helles Design

![Helles Design](../../previews/shell-light.png)

### Komponenten

![Komponenten](../../previews/components-dark.png)

## Sprache und Versionsstatus

Englisch (`en-US`) ist die Standard-Komponentensprache und die Quelle für Übersetzungen. Die Galerie beginnt in Englisch, es sei denn, eine Sprache wurde explizit über die URL oder die gespeicherten Einstellungen ausgewählt; die Browsersprache überschreibt sie nicht. Komponenten unterstützen auch vereinfachtes Chinesisch, Traditionelles Chinesisch, Japanisch, Spanisch, Brasilianisches Portugiesisch, Russisch, Deutsch, Französisch und Italienisch.

Dokumentation, Codekommentare, Entwicklungswerkzeuge und GitHub-Versionshinweise sind standardmäßig auf Englisch. Übersetzungen richten sich nach dem englischen Original.

Version 0.1.0 ist eine frühe Vorschau: APIs können sich vor 1.0 ändern, und Pakete werden noch nicht in Registern veröffentlicht. [SICHERHEIT.md](SECURITY.md).

<a id="whats-inside"></a>

## Inhalt des Repositorys

| Wegstrecke                                                                              | Paket                     | für                                                                                                                                                  |
| --------------------------------------------------------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`tokens/tokens.json`](../../../tokens/tokens.json)                                     | —                         | Die einzelne Quelle: Farben (dunkel + hell), Typ, Abstand, Radien, Schatten, Bewegung, Layout                                                        |
| [`packages/tokens`](../../../packages/tokens)                                           | `@opennavo/design-tokens` | CSS Variablen für beide Themen, UnoCSS voreingestellt, Tailwind CSS v4 Thema und v3 voreingestellte, typisierte Werte, DTCG Dateien für Design-Tools |
| [`packages/vue`](../../../packages/vue)                                                 | `@opennavo/design-vue`    | Vue 3 Komponenten (Tasten, Menüs, Dialoge, Tabellen, App-Shell ...), Themenhelfer, Basisstile, Komponentengalerie                                    |
| [`packages/swift`](../../../packages/swift) + [`Package.swift`](../../../Package.swift) | `OpenNavoDesign`          | SwiftUI Token: dynamische Farben, Abstand, Typ, Bewegung                                                                                             |
| [`packages/flutter`](../../../packages/flutter)                                         | `opennavo_design`         | Flutter Tokens als `ThemeExtension`s und a `ThemeData` Bauherrn                                                                                      |
| [`docs`](docs/README.md)                                                                | —                         | Die Spezifikation: Prinzipien, Farbe, Themen, Komponenten, Muster, Inhalt, Zugänglichkeit                                                            |

Alles unter `packages/*/` Das sagt generated ist gerendert von `tokens/tokens.json` durch `pnpm gen`; CI scheitert, wenn
Eine generierte Datei wird von Hand bearbeitet oder veraltet.

<a id="quick-start"></a>

## Schnellstart

Die Pakete befinden sich noch nicht in einer Registrierung; hängen Sie direkt von diesem Repository ab ()pnpm git-Unterverzeichnis-Abhängigkeiten,
SwiftPModer ein Pub `git` Abhängigkeit oder Kopie `packages/tokens/dist` In Ihre App.

<a id="vue-3--unocss-vite-tauri"></a>

### Vue 3 + UnoCSS (Vite, Tauri)

```ts
// main.ts — order matters: reset, tokens, base styles, system fonts, then UnoCSS
import '@unocss/reset/tailwind.css';
import '@opennavo/design-tokens/tokens.css';
import '@opennavo/design-vue/base.css';
import '@opennavo/design-vue/system-fonts.css';
import 'virtual:uno.css';
import { createOnUi } from '@opennavo/design-vue';

app.use(createOnUi({ locale })); // a ref with one of the ten locales
```

```ts
// uno.config.ts
import { defineConfig, presetWind3 } from 'unocss';
import { presetOpenNavo } from '@opennavo/design-tokens/uno-preset';

export default defineConfig({ presets: [presetWind3(), presetOpenNavo()] });
```

```vue
<OnButton variant="primary" icon="download">Install</OnButton>
<OnCard><p class="text-body text-ink-secondary">Only on this Mac; nothing is uploaded.</p></OnCard>
```

Siehe [`packages/vue/README.md`](packages/vue/README.md) für NuxtInhaltsscanning und die Komponentenliste.

<a id="react--tailwind-css-v4"></a>

### React + Tailwind CSS v4

```css
@import 'tailwindcss';
@import '@opennavo/design-tokens/tailwind.css';
```

```tsx
<button className="h-[34px] rounded-default bg-button-primary-bg px-4 text-[13px] font-semibold text-button-primary-text">
  Install
</button>
```

Ein vollständiges Beispiel lebt in [`examples/react-tailwind`](../../../examples/react-tailwind) (Themenwechsel inklusive).

<a id="swiftui"></a>

### SwiftUI

```swift
.package(url: "https://github.com/opennavo/opennavo-design.git", branch: "main")

Text("Installed").onTextStyle(OnTypography.bodySm).foregroundStyle(OnColor.statusSuccess)
```

<a id="flutter"></a>

### Flutter

```yaml
opennavo_design:
  git: { url: https://github.com/opennavo/opennavo-design.git, path: packages/flutter }
```

```dart
MaterialApp(theme: onThemeData(Brightness.light), darkTheme: onThemeData(Brightness.dark));
```

<a id="dark-light-and-system"></a>

## Dunkles, helles und Systemdesign

Dark ist die Standardeinstellung; light folgt dem Betriebssystem, es sei denn, die App erzwingt ein Thema.
`data-theme` Attribut am `<html>` (`applyThemePreference()`, plus ein winziges Head-Skript, so dass eine gespeicherte Option niemals blinkt;
in Tauri Apps das native Aussehen wird einmal eingestellt und jede Fenster- und Webansicht folgt; SwiftUI und Flutter Auflösen
Farben je Aussehen. [docs/theming.md](docs/theming.md).

<a id="the-specification"></a>

## Designspezifikation

Beginnen Sie mit [docs/README.md](docs/README.md)Die kurze Version der Grundsätze: Inhalt zuerst, sagen, was wird
geschehen, lokal zuerst, stabil unter dem Zeiger, die Plattform respektieren, standardmäßig ruhig, ein System für jede App,
Durch die Konstruktion zugänglich, jede Sprache passt.

<a id="development"></a>

## Entwicklung

Anforderungen: Node 24, pnpm 10; Swift 5.9+ (mehr)Xcode) Flutter 3.24+ für die nativen Pakete.

```sh
pnpm install
pnpm gen          # render every generated file from tokens/tokens.json (and the icon subset)
pnpm check        # fail if any generated file is stale
pnpm test         # token contrast and output tests, Vue component tests
pnpm typecheck
pnpm gallery      # component gallery at http://127.0.0.1:6106 with a theme and language switch
swift test        # SwiftUI package
(cd packages/flutter && flutter test)
```

Wechsel-Tokens in `tokens/tokens.json` nur, dann laufen `pnpm gen` und die generierten Dateien damit zu begehen.
[BEITRAG.md](CONTRIBUTING.md).

<a id="license"></a>

## Lizenz

Code und Dokumentation sind lizenziert unter dem [MIT Lizenz](../../../LICENSE). OpenNavo Name und Logo sind nicht lizenziert;
siehe [TRADEMARKS.md](TRADEMARKS.md)Das gebündelte Material von Drittanbietern behält seine eigene Lizenz: Lucide Icon Subset ist ISC
([packages/vue/THIRD PARTY NOTICES.md](packages/vue/THIRD_PARTY_NOTICES.md)).

Quelle und getrennt MIT Genehmigung: [PROVENZ.md](PROVENANCE.md).
