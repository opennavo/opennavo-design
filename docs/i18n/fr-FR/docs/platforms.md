[English](../../../platforms.md) · [简体中文](../../zh-CN/docs/platforms.md) · [繁體中文](../../zh-Hant/docs/platforms.md) · [日本語](../../ja-JP/docs/platforms.md) · [Español](../../es-ES/docs/platforms.md) · [Português (Brasil)](../../pt-BR/docs/platforms.md) · [Русский](../../ru-RU/docs/platforms.md) · [Deutsch](../../de-DE/docs/platforms.md) · **Français** · [Italiano](../../it-IT/docs/platforms.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="platforms"></a>

# Plateformes

Les mêmes jetons et règles sur chaque plateforme ; cette page énumère ce qui diffère.

<a id="macos-desktop-tauri--vue"></a>

## macOS bureau (Tauri + Vue)

- **Fenêtre & #160;:** barre de titre superposée avec titre caché, feux de circulation inset 18 × 22, par défaut 1280 × 820, minimum
  1100 × 700. Marquer la barre d'outils et les zones d'en-tête vides comme des régions de traînée (`data-tauri-drag-region`).
- **Apparence :** magasin `system | light | dark` dans les paramètres; appliquer avec `app.set_theme()` avant l'affichage des fenêtres; synchronisation
  l'arrière-plan de la fenêtre principale vers `surface.base` et le `ThemeChanged` ([Thèmes](theming.md#macos-desktop-tauri)).
- **Popovers et superpositions** sont des fenêtres séparées transparentes et sans bordure (menu-bar popovers, guides d'autorisation,
  alertes): leurs `html` reste transparent avec `color-scheme: normal`, le panneau dessine `surface.card` avec
  `rounded-panel` et sa propre ombre ; les ombres indigènes sont éteintes de sorte que les limites transparentes ne s'affichent jamais.
- **Barre de menu & #160;:** items sont des images de modèles donc macOS les couleurs; en cliquant sur toggles le popover; rien n'active le
  fenêtre principale sauf si l'utilisateur choisit "Ouvrir".
- **Intégration du système:** permissions via les paramètres système liens profonds avec un guide superposition qui ne prend pas
  focus; le menu natif de l'application contient des éléments standard (About, Settings -, Hide, Quit); des dialogues qui nécessitent un mot de passe
  utiliser le système prompt et dire à quoi il sert.
- **Polices & #160;:** la police système via `system-fonts.css`. **Faites défiler :** la colonne principale défile dans la fenêtre
  (`OnAppShell scroll="container"`).
- **Spécificités de WebKit:** test focus et transparence dans WKWebView, pas seulement dans Chrome — `:focus-visible` et
  o l'exclusion se comporte différemment.

<a id="web-nuxt"></a>

## Site Web (Nuxt)

- Serveur rendu et cache-friendly: le HTML est le même pour chaque visiteur; thème, consentement et suggestions sont
  Le script de démarrage thème est le seul script en ligne dont le système de conception a besoin.
- `OnAppShell scroll="document"` avec barre latérale collante et barre d'outils de `md`, une barre compacte ci-dessous.
- Les liens sont des liens réels (`linkAs` = `NuxtLink`), avec préfixe sur l'interaction plutôt que sur la visibilité.
- Méta: `color-scheme: dark light`; ensemble `lang` et hreflang par page.

<a id="react--tailwind-css"></a>

## React + Tailwind CSS

Il n'y a pas React les composants; utilisez les jetons et suivez les spécifications des composants.

```css
/* app.css — Tailwind CSS v4 */
@import 'tailwindcss';
@import '@opennavo/design-tokens/tailwind.css'; /* theme mapping + tokens.css */
@import '@opennavo/design-tokens/base.css'; /* html colors, theme-switch guard, reduced motion */
@import '@opennavo/design-tokens/system-fonts.css';
```

Aides thématiques sans Vue: `applyThemePreference`, `themeBootScript` et `THEME_PREFERENCES` de
`@opennavo/design-tokens/theme`. [`examples/react-tailwind`](../../../../examples/react-tailwind) affiche une carte de paramètres avec une
change de thème, un basculement et des boutons construits à partir de ces classes.

Les classes correspondent à la Vue composants (`bg-surface-card`, `text-ink-secondary`, `border-line-subtle`, `rounded-big`,
`shadow-popover`, `text-title1`, `duration-fast`, `z-modal`). Tailwind CSS v3 utilise le préréglage:
`presets: [openNavoPreset]` de `@opennavo/design-tokens/tailwind-preset`, plus
`import '@opennavo/design-tokens/tokens.css'`. Le changement de thème est le même `data-theme` attribut.

<a id="swiftui-opennavodesign-swift-package"></a>

## SwiftUI (`OpenNavoDesign` Emballage rapide)

- `OnColor.*` couleurs dynamiques, `OnSpace.*`, `OnRadius.*`, `OnTypography.*` avec `.onTextStyle(_:)`, `OnShadow.*` avec
  `.onShadow(_:)`, `OnMotion.*` (durées et `Animation` les courbes), `OnLayout.*`.
- Les commandes système restent les commandes système; appliquer des jetons aux arrière-plans, au texte et à l'espacement autour d'eux.
- Type utilise SF Pro aux tailles de jeton; le suivi est converti d'em en points.

<a id="flutter-opennavo_design-package"></a>

## Flutter (`opennavo_design` (paquet)

- `onThemeData(Brightness)` pour `theme` / `darkTheme`; `OnColors.of(context)` et `OnShadows.of(context)` pour jeton
  couleurs et ombres (`ThemeExtension`s qui animent entre les thèmes).
- `OnSpace`, `OnRadius`, `OnTypography` (`TextStyle`s; en majuscules `label` chaîne toi-même), `OnMotion`
  (`Duration`s et `Cubic` les courbes), `OnLayout`.
- Les calques d'ombre encastrés ne sont pas disponibles dans Flutter et sont omis.
