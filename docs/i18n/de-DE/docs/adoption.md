[English](../../../adoption.md) · [简体中文](../../zh-CN/docs/adoption.md) · [繁體中文](../../zh-Hant/docs/adoption.md) · [日本語](../../ja-JP/docs/adoption.md) · [Español](../../es-ES/docs/adoption.md) · [Português (Brasil)](../../pt-BR/docs/adoption.md) · [Русский](../../ru-RU/docs/adoption.md) · **Deutsch** · [Français](../../fr-FR/docs/adoption.md) · [Italiano](../../it-IT/docs/adoption.md)

> Englisch ist die Ausgangssprache. Die Übersetzungen wurden lokal maschinell erstellt und müssen sprachlich geprüft werden. Code und Lizenztexte bleiben unverändert.

<a id="adopting-the-system-in-an-app"></a>

# Das System in einer App übernehmen

Wie eine neue App beginnt OpenNavo Design und wie eine App kopiert wurde OpenNavo's Pakete früher bewegt sich auf sie.

<a id="a-new-tauri--vue-app"></a>

## Eine neue Tauri + Vue App-App

1. **Abhängigkeiten** (Bis die Pakete veröffentlicht sind, verwenden Sie git-Unterverzeichnis-Abhängigkeiten oder einen Workspace-Link):

   ```json
   {
     "dependencies": {
       "@opennavo/design-tokens": "github:opennavo/opennavo-design#path:packages/tokens",
       "@opennavo/design-vue": "github:opennavo/opennavo-design#path:packages/vue"
     }
   }
   ```

2. **Styles und Plugin** in `main.ts`in dieser Reihenfolge:

   ```ts
   import '@unocss/reset/tailwind.css';
   import '@opennavo/design-tokens/tokens.css';
   import '@opennavo/design-vue/base.css';
   import '@opennavo/design-vue/system-fonts.css';
   import 'virtual:uno.css';
   import { createOnUi } from '@opennavo/design-vue';

   app.use(createOnUi({ locale })); // a ref holding one of the ten locales
   ```

3. **UnoCSS** mit der Voreinstellung auch das Scannen des Komponentenpakets, so dass seine Dienstprogramme generiert werden:

   ```ts
   import { defineConfig, presetWind3 } from 'unocss';
   import { presetOpenNavo } from '@opennavo/design-tokens/uno-preset';

   export default defineConfig({
     presets: [presetWind3(), presetOpenNavo()],
     content: {
       pipeline: { include: [/\.(vue|ts)($|\?)/, /@opennavo\/design-vue\/src\/.*\.(vue|ts)$/] },
       filesystem: ['node_modules/@opennavo/design-vue/src/**/*.{vue,ts}']
     }
   });
   ```

   In `vite.config.ts` Addition `optimizeDeps: { exclude: ['@opennavo/design-vue'] }`: das Paket Schiffe Quellen und
   Pre-Bundling würde eine zweite Kopie seiner Locale- und Icon-Register machen, also `createOnUi` und `registerIcons` würde
   die Komponenten nicht erreichen.

4. **Einstellung des Aussehens**: addieren `appearance: system | light | dark` auf die Einstellungen der App, wenden Sie es mit
   `app.set_theme()` in Rust, bevor Fenster angezeigt werden, synchronisieren Sie den Hintergrund des Hauptfensters und spiegeln Sie ihn im Hauptfenster
   mit `applyThemePreference()` ([Theming › macOS Desktop](theming.md#macos-desktop-tauri)Bieten Sie die Wahl in
   Einstellungen › Allgemein als segmentierte Steuerung: System / Licht / Dunkel.
5. **Markenschicht**: Schreibe die App `brand.json` Mit seinem Akzent ()[Marke](brand.md)), erzeugen mit
   `--overrides brand.json --out <app>/design`, und importieren Sie die generierte `tokens.css` Statt Paket eins.
6. **App-Layout**: `OnAppShell` mit `OnSidebar` (Die App-Marke in der `brand` Schlitz, `OnToolbar`und die Seite Anatomie
   in [Muster](patterns.md#page-anatomy).
7. **Sprachen**: Versenden Sie alle zehn Locales für die eigenen Strings der App; die Komponenten bringen ihre.

Eine Web-App ()Nuxt) addiert `@unocss/nuxt`, das gleiche CSS Reihenfolge `css: [...]`, und das Head-Boot-Script
([Theming › Web](theming.md#web-nuxt-vite). React App nutzt `tailwind.css` und `base.css` aus dem Token-Paket
([Plattformen › React](platforms.md#react--tailwind-css)).

<a id="moving-an-app-that-copied-opennavos-packages"></a>

## Verschieben einer App, die kopiert wurde OpenNavoPackungen

Für eine App, die kopiert wurde `packages/tokens` und `packages/ui`Dieses Beispiel verwendet die fiktive `example-app`,
mit `@example-app/tokens`, `--ex-` Variablen und `Ex*` Die Gebrauchsklassen sind gleich.
(`bg-surface-card`, `text-ink-secondary` ...), so dass der größte Teil des Umzugs Importe und Namen sind:

| Vorher (Kopie)                                          | Nachher (System)                                                                                      |
| ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `@example-app/tokens/tokens.css`                        | `@opennavo/design-tokens/tokens.css` (oder die generierte Markenkopie der App)                        |
| `@example-app/tokens/uno-preset` → `presetExampleApp()` | `@opennavo/design-tokens/uno-preset` → `presetOpenNavo()`                                             |
| `@example-app/ui` → `ExButton`, `createExUi()`          | `@opennavo/design-vue` → `OnButton`, `createOnUi()`                                                   |
| `var(--ex-…)` in App-Styles                             | `var(--on-…)`                                                                                         |
| `ExLogo` innerhalb der Seitenleiste                     | die App-eigene Logo-Komponente in `OnSidebar`'s `brand` Schlitz                                       |
| Lokale Token-Werte, die sich unterscheiden              | a `brand.json` Überschreiben, wenn es sich um Marken-Token handelt; ansonsten den Systemwert annehmen |

Stufen:

1. Listen Sie die Token-Unterschiede der App auf ()`diff` als `tokens.json` gegen `tokens/tokens.json`Marken-Token gehen hinein
   `brand.json`; jeder andere Unterschied ist entweder ein Bug zum Drop oder ein Vorschlag für das System.
2. Importe und Präfixe ersetzen (ein Codemod oder Search-and-Replace): `Ex` → `On`, `--ex-` → `--on-`, Paketnamen.
3. Verschieben Sie app-spezifische Komponenten (diejenigen, die die Daten der App kennen) in die App; Halten Sie generische Komponenten aus dem System.
4. Führen Sie die App in beiden Themen aus und vergleichen Sie sie mit der Galerie; Führen Sie die Kontrasttests mit den zusammengeführten Tokens durch.
5. Löschen Sie die kopierte `packages/tokens` und `packages/ui`.

Eine App kann die Neutralen, den Abstand, den Typ oder die Komponenten nicht abzweigen.
Das System zuerst ()[BEITRAG.md](../CONTRIBUTING.md)).

<a id="checklist"></a>

## Checkliste

- [ ] Token von `@opennavo/design-tokens` (oder eine daraus generierte Markenkopie); keine fest codierten Farben.
- [ ] Einstellung des Aussehens mit System / Licht / Dunkel; kein Blitz beim Start; jedes Fenster folgt.
- [ ] Komponenten aus `@opennavo/design-vue`; Die App markiert sich durch `brand` Schlitze.
- [ ] Zehn Schnittstellensprachen.
- [ ] Beide Themen geprüft; Kontrasttests grün für die Marke überschreiben.
