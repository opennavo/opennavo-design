[English](../../../theming.md) · [简体中文](../../zh-CN/docs/theming.md) · [繁體中文](../../zh-Hant/docs/theming.md) · [日本語](../../ja-JP/docs/theming.md) · [Español](../../es-ES/docs/theming.md) · [Português (Brasil)](../../pt-BR/docs/theming.md) · [Русский](../../ru-RU/docs/theming.md) · [Deutsch](../../de-DE/docs/theming.md) · **Français** · [Italiano](../../it-IT/docs/theming.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="theming"></a>

# Thèmes

Chaque OpenNavo app offre trois choix d'apparence: **Système** (par défaut), **Clair** et **Sombre**. Cette page est
le contrat que chaque plate-forme met en œuvre.

<a id="the-rule"></a>

## La règle

- Dark est la valeur par défaut de chaque jeton.
- Le thème lumière s'applique lorsque le système d'exploitation préfère la lumière **et** la page n'a pas forcé sombre, ou lorsque la
  page force la lumière.
- Le choix peut également s'appliquer à un sous-arbre, par exemple un aperçu de terminal toujours sombre à l'intérieur d'une page de lumière.

`@opennavo/design-tokens/tokens.css` encode exactement ce qui suit:

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

Seuls les signes qui diffèrent entre les thèmes sont répétés; l'espacement, le type, les rayons et le mouvement sont partagés. `color-scheme` vient
avec le thème, de sorte que les commandes de forme native et les barres de défilement le suivent — jamais défini `color-scheme` N'importe où.

| Préférence | `<html>` attribut                     |
| ---------- | ------------------------------------- |
| Système    | aucune (la requête des médias décide) |
| Clair      | `data-theme="light"`                  |
| Sombre     | `data-theme="dark"`                   |

`applyThemePreference(preference)` de `@opennavo/design-tokens/theme` (réexporté par `@opennavo/design-vue`) ensembles
ou supprime l'attribut. Il définit également `data-theme-switching` pour un cadre; `base.css` éteint les transitions sous
Il, donc toutes les couleurs changent dans le même cadre au lieu de chaque contrôle s'effaçant séparément.

<a id="subtrees"></a>

### Sous-arbres

`data-theme` fonctionne sur n'importe quel élément. `base.css` ré-applique `color: var(--on-text-primary)` le `[data-theme]`Parce que
une couleur de texte héritée est calculée dans le thème du parent. Utilisez les sous-arbres parcimonieusement, pour les surfaces qui gardent un thème sur
but: la lightbox screenshot et les puces de légende (`component.lightboxScrim` et `component.captionBg` sont sombres dans
les deux thèmes, de sorte que le texte sur eux doit rester léger), des captures d'écran du produit dans l'autre thème, des prévisualisations de terminal.
N'utilisez jamais un seul composant pour "fixer" un composant qui échoue dans un thème.

<a id="web-nuxt-vite"></a>

## Site Web (Nuxt, Vite)

Les pages sont rendues sur le serveur et mises en cache pour tout le monde, de sorte que le HTML ne peut jamais contenir le choix d'un visiteur.

1. Les `<head>` déclare les deux schémas et exécute un petit script de blocage avant n'importe quelle feuille de style:

   ```ts
   import { themeBootScript } from '@opennavo/design-tokens/theme';

   app: {
     head: {
       meta: [{ name: 'color-scheme', content: 'dark light' }],
       script: [{ innerHTML: themeBootScript('onv:theme'), tagPosition: 'head', tagPriority: 'critical' }]
     }
   }
   ```

   Le script lit `localStorage`, s'applique `data-theme` pour un sauvé `light` ou `dark`, et ne fait rien d'autre.
   Avec JavaScript sur la page suit toujours le système à travers la requête des médias.

2. Le changement de thème stocke le choix (`localStorage`, clé par application — OpenNavo Utilisations `onv:theme`; supprimer la clé pour
   Système) et appels `applyThemePreference`.
3. Renvoyez le commutateur dans son état "Système" sur le serveur et lisez le choix enregistré après hydratation, ou le balisage
   ne correspondra pas.
4. Écoutez les `storage` événement ainsi d'autres onglets ouverts suivent.

Jamais mis `data-theme` en `app.head.htmlAttrs`. Nuxt rendus `app.head` sur le client aussi, et lors de l'hydratation
termine son gestionnaire de tête replace l'attribut, au-delà du choix du script appliqué. Une application dont la valeur par défaut est une application forcée
le thème au lieu de System écrit que par défaut dans le rendu du serveur seulement (un Nitro `render:html` crochet), et sa botte
script doit ensuite supprimer l'attribut pour un choix de système enregistré.

Le CSP doit autoriser le script en ligne (`script-src 'self' 'unsafe-inline'`, ou un nonce/hash pour elle).

<a id="macos-desktop-tauri"></a>

## macOS bureau (Tauri)

Conservez la préférence avec les paramètres de l'application (`appearance: "system" | "light" | "dark"`) et l'appliquer nativement:

```rust
app.set_theme(match appearance {
    Appearance::System => None,
    Appearance::Light => Some(tauri::Theme::Light),
    Appearance::Dark => Some(tauri::Theme::Dark),
});
```

`set_theme` ensembles `NSApp.appearance`. Rapports WKWebView `prefers-color-scheme` de l ' apparence effective et
met à jour en direct, donc **chaque fenêtre suit sans aucune JavaScript**: la fenêtre principale, les popovers du menu bar, les superpositions et
alertes. La fenêtre principale reflète en outre le réglage avec `applyThemePreference` donc il change dans le même cadre,
et ainsi le navigateur de la maquette de l'application (pas d'apparence native) peut être thématique.

Aussi:

- Appliquer l'apparence sauvegardée pendant la configuration, avant que n'importe quelle fenêtre puisse apparaître, ou un thème forcé clignote l'autre.
- L'arrière-plan de la fenêtre est visible avant la peinture de la page et pendant la redimension en direct : définissez-la à `surface.base` des
  thème efficace (`#131313` / `#F8F8F8`) et le mettre à jour sur `WindowEvent::ThemeChanged`.
- Les fenêtres popover transparentes gardent `html { background: transparent; color-scheme: normal }` sur leur propre document;
  leurs dessins de panneau `surface.card`.
- Les menus, alertes et panneaux ouverts autochtones suivent `NSApp.appearance` automatiquement. Les icônes de la barre de menu sont des images de gabarit;
  macOS les colore pour la barre de menu, quel que soit le thème de l'application.

<a id="swiftui"></a>

## SwiftUI

`OnColor.*` les valeurs sont des couleurs dynamiques qui se résolvent avec l'apparence de la vue les dessiner:

```swift
Text("Installed").foregroundStyle(OnColor.statusSuccess)
    .padding(OnSpace.s2)
    .background(OnColor.statusSuccessSubtle, in: .rect(cornerRadius: OnRadius.small))

ContentView().preferredColorScheme(preference == .system ? nil : (preference == .light ? .light : .dark))
```

À macOS ensemble `NSApp.appearance` pour le contrôle à l'échelle de l'application, exactement comme dans Tauri.

<a id="flutter"></a>

## Flutter

`OnColors` et `OnShadows` sont `ThemeExtension`s avec `dark` et `light` constantes; `onThemeData(brightness)` construit une
Thème matériel qui les porte:

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

## Remarquer une autre application

La couche de marque est l'ensemble de jetons une application de frère et de soeur peut changer; tout le reste reste identique pour que les applications se sentent comme
une famille ([Marque](brand.md)). Ecrivez un fichier de redéfinition avec seulement ces jetons et générer:

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

`--out` écrit les mêmes fichiers (CSS, presets, Dart, Swift, DTCG) sous le dossier de l'application au lieu de ce dépôt.

ou appeler `mergeTokens(base, overrides)` et `buildArtifacts()` de `@opennavo/design-tokens/build` dans la propre application
construire. Objets fusionner, donc `{ "light": "…" }` change seulement la valeur de la lumière. Ré-exécuter les tests de contraste contre la fusion
Jetons avant l'expédition.

<a id="checklist-for-a-new-screen"></a>

## Liste de contrôle pour un nouvel écran

- [ ] Utilise uniquement des jetons; `rg '#[0-9a-fA-F]{3,8}\b|rgba?\('` ne trouve rien dans le composant.
- [ ] L'air droit dans l'obscurité, la lumière, et la lumière avec un sous-arbre sombre s'il intègre des aperçus.
- [ ] Utilisation de panneaux flottants `surface.popover`, segments sélectionnés `component.segmentActive`.
- [ ] Glows construits à partir d'une couleur d'accent sont multipliés par `effect.accentGlowOpacity`.
- [ ] Aucun changement de disposition ou de couleur ne s'estompe lorsque le thème change.
