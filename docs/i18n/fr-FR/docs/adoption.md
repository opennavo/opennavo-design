[English](../../../adoption.md) · [简体中文](../../zh-CN/docs/adoption.md) · [繁體中文](../../zh-Hant/docs/adoption.md) · [日本語](../../ja-JP/docs/adoption.md) · [Español](../../es-ES/docs/adoption.md) · [Português (Brasil)](../../pt-BR/docs/adoption.md) · [Русский](../../ru-RU/docs/adoption.md) · [Deutsch](../../de-DE/docs/adoption.md) · **Français** · [Italiano](../../it-IT/docs/adoption.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="adopting-the-system-in-an-app"></a>

# Adopter le système dans une application

Comment une nouvelle application démarre OpenNavo Conception, et comment une application qui a copié OpenNavoLes paquets plus tôt se déplacent sur elle.

<a id="a-new-tauri--vue-app"></a>

## Un nouveau Tauri + Vue app

1. **Dépendances** (jusqu'à ce que les paquets soient publiés, utilisez les dépendances des sous-répertoires git ou un lien d'espace de travail) :

   ```json
   {
     "dependencies": {
       "@opennavo/design-tokens": "github:opennavo/opennavo-design#path:packages/tokens",
       "@opennavo/design-vue": "github:opennavo/opennavo-design#path:packages/vue"
     }
   }
   ```

2. **Styles et plugins** en `main.ts`, dans cet ordre:

   ```ts
   import '@unocss/reset/tailwind.css';
   import '@opennavo/design-tokens/tokens.css';
   import '@opennavo/design-vue/base.css';
   import '@opennavo/design-vue/system-fonts.css';
   import 'virtual:uno.css';
   import { createOnUi } from '@opennavo/design-vue';

   app.use(createOnUi({ locale })); // a ref holding one of the ten locales
   ```

3. **UnoCSS** avec le préréglage, scanner le paquet de composants aussi afin que ses utilitaires soient générés:

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

   Dans `vite.config.ts` ajouter `optimizeDeps: { exclude: ['@opennavo/design-vue'] }`: les sources du paquet, et
   le prégroupement ferait une deuxième copie de ses registres locaux et d'icônes, donc `createOnUi` et `registerIcons` serait
   ne pas atteindre les composants.

4. **Réglage de l'apparence**: ajouter `appearance: system | light | dark` aux paramètres de l'application, appliquez-le avec
   `app.set_theme()` dans Rust avant l'affichage des fenêtres, synchronisez l'arrière-plan de la fenêtre principale, et le miroir dans la fenêtre principale
   avec `applyThemePreference()` ([Thèmes › macOS bureau](theming.md#macos-desktop-tauri)). Offrez le choix en
   Paramètres › Général en tant que commande segmentée: Système / Lumière / Noir.
5. **Couche de marque**: écrire l'application `brand.json` avec son accent ([Marque](brand.md)), générer avec
   `--overrides brand.json --out <app>/design`, et importer le produit `tokens.css` au lieu du paquet un.
6. **Structure de l’app**: `OnAppShell` avec `OnSidebar` (la marque de l'application dans le `brand` la fente), `OnToolbar`, et l'anatomie de page
   en [Modèles](patterns.md#page-anatomy).
7. **Langues**: expédiez les dix locales pour les propres chaînes de l'application ; les composants apportent les leurs.

Une application web (Nuxt) ajouts `@unocss/nuxt`, la même CSS ordre en `css: [...]`, et le script de démarrage de la tête
([Thèmes › Web](theming.md#web-nuxt-vite)). A React Utilisations de l'application `tailwind.css` et `base.css` du paquet de jetons
([Plateformes › React](platforms.md#react--tailwind-css)).

<a id="moving-an-app-that-copied-opennavos-packages"></a>

## Déplacement d'une application copiée OpenNavoLes colis

Pour une application qui a copié `packages/tokens` et `packages/ui`, cet exemple utilise la fiction `example-app`,
avec `@example-app/tokens`, `--ex-` variables et `Ex*` composants. Les classes d'utilité sont les mêmes
(`bg-surface-card`, `text-ink-secondary` ...), donc la plupart du mouvement est des importations et des noms:

| Avant (copie)                                           | Après (système)                                                                              |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `@example-app/tokens/tokens.css`                        | `@opennavo/design-tokens/tokens.css` (ou copie de marque générée par l'application)          |
| `@example-app/tokens/uno-preset` → `presetExampleApp()` | `@opennavo/design-tokens/uno-preset` → `presetOpenNavo()`                                    |
| `@example-app/ui` → `ExButton`, `createExUi()`          | `@opennavo/design-vue` → `OnButton`, `createOnUi()`                                          |
| `var(--ex-…)` dans les styles d'applications            | `var(--on-…)`                                                                                |
| `ExLogo` à l'intérieur de la barre latérale             | le propre composant logo de l'application dans `OnSidebar`'s `brand` emplacement             |
| Valeurs de jeton local qui diffèrent                    | a `brand.json` remplacer s'ils sont des jetons de marque; sinon adopter la valeur du système |

Étapes :

1. Énumérez les différences de jeton de l'application (`diff` dont `tokens.json` contre `tokens/tokens.json`). Marques de jetons entrer dans
   `brand.json`; toute autre différence est soit un bug à déposer, soit une proposition pour le système.
2. Remplacer les importations et les préfixes (codemod ou recherche-replacer: `Ex` → `On`, `--ex-` → `--on-`, les noms des colis).
3. Déplacez les composants spécifiques à l'application (ceux qui connaissent les données de l'application) dans l'application; gardez ceux génériques du système.
4. Exécutez l'application dans les deux thèmes et comparez avec la galerie; exécutez les tests de contraste contre les jetons fusionnés.
5. Supprimer la copie `packages/tokens` et `packages/ui`.

Une application peut ne pas fourcher les neutres, l'espacement, le type ou les composants. Si elle a besoin de quelque chose que le système manque, l'ajouter à
le système d'abord ([CONTRIBUTION.md](../CONTRIBUTING.md)).

<a id="checklist"></a>

## Liste de contrôle

- [ ] Des jetons de `@opennavo/design-tokens` (ou une copie de marque générée à partir de celle-ci); pas de couleurs codées en dur.
- [ ] Réglage de l'apparence avec System / Light / Dark; aucun flash au démarrage; chaque fenêtre suit.
- [ ] Composants de `@opennavo/design-vue`; la marque de l'application `brand` les fentes.
- [ ] Dix langages d'interface.
- [ ] Les deux thèmes ont été vérifiés ; le contraste est vert pour la marque.
