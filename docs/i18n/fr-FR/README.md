[English](../../../README.md) · [简体中文](../zh-CN/README.md) · [繁體中文](../zh-Hant/README.md) · [日本語](../ja-JP/README.md) · [Español](../es-ES/README.md) · [Português (Brasil)](../pt-BR/README.md) · [Русский](../ru-RU/README.md) · [Deutsch](../de-DE/README.md) · **Français** · [Italiano](../it-IT/README.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="opennavo-design"></a>

# OpenNavo Design

Le système de design de [OpenNavo](https://opennavo.com), la boutique d’applications Homebrew gratuite et open source pour Mac, et des applications de la même famille. Des tokens de design, une spécification écrite et des composants réutilisables assurent une apparence, des textes et des interactions cohérents dans les thèmes clair et sombre.

<a id="language-and-release-status"></a>

## Aperçu

### Thème sombre

![Thème sombre](../../previews/shell-dark.png)

### Thème clair

![Thème clair](../../previews/shell-light.png)

### Composants

![Composants](../../previews/components-dark.png)

## Langue et état de la version

Français (`en-US`) est la langue par défaut du composant et la source pour les traductions. La galerie commence en anglais à moins qu'une langue n'ait été explicitement sélectionnée par son URL ou les paramètres enregistrés; la langue du navigateur ne la remplace pas.

La documentation, les commentaires du code, les outils de développement et les notes de version GitHub sont en anglais par défaut. Les traductions suivent la version anglaise.

La version 0.1.0 est un prévisualisation précoce : les API peuvent changer avant 1.0, et les paquets ne sont pas encore publiés dans les registres. [SÉCURITÉ md](SECURITY.md).

<a id="whats-inside"></a>

## Contenu du dépôt

| Voie                                                                                    | Paquet                    | Pour                                                                                                                                                    |
| --------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`tokens/tokens.json`](../../../tokens/tokens.json)                                     | —                         | La source unique: couleurs (dark + lumière), type, espacement, rayons, ombres, mouvement, mise en page                                                  |
| [`packages/tokens`](../../../packages/tokens)                                           | `@opennavo/design-tokens` | CSS variables pour les deux thèmes, UnoCSS préréglé, Tailwind CSS v4 thème et v3, valeurs dactylographiées, DTCG fichiers pour les outils de conception |
| [`packages/vue`](../../../packages/vue)                                                 | `@opennavo/design-vue`    | Vue 3 composants (boutons, menus, dialogues, tables, shell d'application...), helpers thématiques, styles de base, galerie de composants                |
| [`packages/swift`](../../../packages/swift) + [`Package.swift`](../../../Package.swift) | `OpenNavoDesign`          | SwiftUI jetons: couleurs dynamiques, espacement, type, mouvement                                                                                        |
| [`packages/flutter`](../../../packages/flutter)                                         | `opennavo_design`         | Flutter jetons comme `ThemeExtension`s et a `ThemeData` constructeur                                                                                    |
| [`docs`](docs/README.md)                                                                | —                         | La spécification: principes, couleur, thème, composants, modèles, contenu, accessibilité                                                                |

Tout sous `packages/*/` qui dit que généré est rendu à partir `tokens/tokens.json` par `pnpm gen`; IC échoue si
un fichier généré est édité à la main ou hors date.

<a id="quick-start"></a>

## Démarrage rapide

Les paquets ne sont pas encore sur un registre ; dépendent directement de ce dépôt (pnpm les dépendances des sous-répertoires git,
SwiftPM, ou un pub `git` dépendance), ou copie `packages/tokens/dist` dans votre application.

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

Voir [`packages/vue/README.md`](packages/vue/README.md) pour Nuxt, la numérisation du contenu et la liste des composants.

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

Un exemple complet vit dans [`examples/react-tailwind`](../../../examples/react-tailwind) (sélecteur de thème inclus).

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

## Thèmes sombre, clair et système

Dark est la valeur par défaut ; la lumière suit le système d'exploitation à moins que l'application ne force un thème.
`data-theme` attribut sur `<html>` (`applyThemePreference()`, en plus d'un minuscule script de tête de sorte qu'un choix sauvegardé ne clignote jamais);
en Tauri apps l'apparence native est définie une fois et chaque fenêtre et vue web suit; SwiftUI et Flutter résoudre
couleurs par aspect. Détails: [docs/theming.md](docs/theming.md).

<a id="the-specification"></a>

## Spécification du design

Commencez par [docs/README.md](docs/README.md). La version courte des principes: le contenu d'abord, dire ce qui sera
d'abord local, stable sous le pointeur, respect de la plate-forme, calme par défaut, un système pour chaque application,
accessible par la construction, chaque langue convient.

<a id="development"></a>

## Développement

Exigences: Node 24, pnpm 10; Swift 5,9+ (Xcode) et Flutter 3.24+ pour les paquets natifs.

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

Changer les jetons en `tokens/tokens.json` seulement, puis courir `pnpm gen` et de commit les fichiers générés avec elle. Voir
[CONTRIBUTION.md](CONTRIBUTING.md).

<a id="license"></a>

## Licence

Le code et la documentation sont autorisés en vertu de la [MIT Licence](../../../LICENSE). Les OpenNavo le nom et le logo ne sont pas autorisés;
voir [MARQUES MARQUES](TRADEMARKS.md). Le matériel de tiers groupé conserve sa propre licence: Lucide sous-ensemble d'icônes est ISC
([paquets/vue/THIRD PARTY NOTICES.md](packages/vue/THIRD_PARTY_NOTICES.md)).

Source et séparément MIT autorisation: [PROVENANCE.md](PROVENANCE.md).
