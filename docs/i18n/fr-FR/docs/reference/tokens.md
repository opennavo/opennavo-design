[English](../../../../reference/tokens.md) · [简体中文](../../../zh-CN/docs/reference/tokens.md) · [繁體中文](../../../zh-Hant/docs/reference/tokens.md) · [日本語](../../../ja-JP/docs/reference/tokens.md) · [Español](../../../es-ES/docs/reference/tokens.md) · [Português (Brasil)](../../../pt-BR/docs/reference/tokens.md) · [Русский](../../../ru-RU/docs/reference/tokens.md) · [Deutsch](../../../de-DE/docs/reference/tokens.md) · **Français** · [Italiano](../../../it-IT/docs/reference/tokens.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="token-reference"></a>

# Référence symbolique

<!-- Generated from tokens/tokens.json by packages/tokens/scripts/generate.ts; do not edit. After changing tokens.json, run `pnpm gen`. -->

Chaque valeur ci-dessous provient de `tokens/tokens.json`. Dark est le thème par défaut; la colonne Lumière affiche la valeur
le thème de lumière utilise (un tiret em signifie que le jeton est le même dans les deux thèmes). CSS variables sont ce que le web
les paquets émettent; la colonne utilitaire est la UnoCSS / Tailwind tige de classe (`bg-`, `text-`, `border-` ... + tige).
Flutter (`OnColors`) et SwiftUI (`OnColor`) utiliser le chemin chameau cas, par exemple. `surface.cardAlt` → `surfaceCardAlt`.

<a id="color"></a>

## Couleur

<a id="surfaces"></a>

### Surfaces

| Token de design   | CSS variable            | Utilitaire         | Sombre                   | Clair                       | Utilisation                                                                                                                             |
| ----------------- | ----------------------- | ------------------ | ------------------------ | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `surface.page`    | `--on-surface-page`     | `surface-page`     | `#0B0B0B`                | `#F2F2F2`                   | Toile extérieure et fond de fenêtre.                                                                                                    |
| `surface.base`    | `--on-surface-base`     | `surface-base`     | `#131313`                | `#F8F8F8`                   | Contexte du contenu principal.                                                                                                          |
| `surface.sidebar` | `--on-surface-sidebar`  | `surface-sidebar`  | `#161616`                | `#F1F1F1`                   | Barre latérale de bureau.                                                                                                               |
| `surface.rail`    | `--on-surface-rail`     | `surface-rail`     | `#141414`                | `#F5F5F5`                   | Rail droit avec résumés et actions secondaires.                                                                                         |
| `surface.card`    | `--on-surface-card`     | `surface-card`     | `#1A1A1A`                | `#FFFFFF`                   | Cartes.                                                                                                                                 |
| `surface.cardAlt` | `--on-surface-card-alt` | `surface-card-alt` | `#1F1F1F`                | `#F5F5F5`                   | Entrées et blocs secondaires dans les cartes.                                                                                           |
| `surface.raised`  | `--on-surface-raised`   | `surface-raised`   | `#262626`                | `#EDEDED`                   | Plongez, sélectionnez, icônes carrelage; plus sombres que les cartes en mode lumière, donc les panneaux flottants utilisent le popover. |
| `surface.chip`    | `--on-surface-chip`     | `surface-chip`     | `#2A2A2A`                | `#EBEBEB`                   | Un arrière-plan neutre.                                                                                                                 |
| `surface.control` | `--on-surface-control`  | `surface-control`  | `#2B2B2B`                | `#FFFFFF`                   | Entrées, bouts d'outils et contrôles secondaires.                                                                                       |
| `surface.inset`   | `--on-surface-inset`    | `surface-inset`    | `#111111`                | `#F0F0F0`                   | Blocs de codes, journaux, pistes de contrôle segmentées.                                                                                |
| `surface.overlay` | `--on-surface-overlay`  | `surface-overlay`  | `rgba(28, 28, 28, 0.92)` | `rgba(255, 255, 255, 0.94)` | Superpositions avec filtre de fond : flou(20px).                                                                                        |
| `surface.popover` | `--on-surface-popover`  | `surface-popover`  | `#262626`                | `#FFFFFF`                   | Panneaux flottants et avis sur le contenu, comme les cartes de consentement et de suggestion.                                           |

<a id="borders-utility-prefix-line"></a>

### Frontières (préfixe de l'utilité) `line`)

| Token de design  | CSS variable          | Utilitaire     | Sombre                      | Clair                 | Utilisation                                    |
| ---------------- | --------------------- | -------------- | --------------------------- | --------------------- | ---------------------------------------------- |
| `border.subtle`  | `--on-border-subtle`  | `line-subtle`  | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.08)` | Frontières et diviseurs de cartes.             |
| `border.default` | `--on-border-default` | `line-default` | `rgba(255, 255, 255, 0.12)` | `rgba(0, 0, 0, 0.13)` | Entrée, bouton fantôme et bordures de fenêtre. |
| `border.strong`  | `--on-border-strong`  | `line-strong`  | `rgba(255, 255, 255, 0.20)` | `rgba(0, 0, 0, 0.22)` | Déplacer les frontières.                       |
| `border.sidebar` | `--on-border-sidebar` | `line-sidebar` | `#1D1D1D`                   | `#E5E5E5`             | Frontière droite.                              |

<a id="text-utility-prefix-ink"></a>

### Texte (préfixe d'utilité) `ink`)

| Token de design  | CSS variable          | Utilitaire      | Sombre    | Clair     | Utilisation                                                                                                                                               |
| ---------------- | --------------------- | --------------- | --------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text.primary`   | `--on-text-primary`   | `ink-primary`   | `#EDEDED` | `#1A1A1A` | En-têtes, texte du corps souligné, nombres (14.9:1 sur les cartes noires, 17.4:1 sur les cartes lumineuses).                                              |
| `text.secondary` | `--on-text-secondary` | `ink-secondary` | `#A8A8A8` | `#575757` | Texte et descriptions du corps (7.3.1 sur les cartes noires, 7.2:1 sur les cartes lumineuses).                                                            |
| `text.tertiary`  | `--on-text-tertiary`  | `ink-tertiary`  | `#8F8F8F` | `#6B6B6B` | Informations secondaires, étiquettes, temps (5.4.1 sur les cartes noires, 4.7:1 sur les cartes surélevées; 5.3:1 et 4.6:1 en mode lumière).               |
| `text.disabled`  | `--on-text-disabled`  | `ink-disabled`  | `#5C5C5C` | `#A6A6A6` | Handicapés/décoratifs seulement; ne jamais transmettre d'informations essentielles.                                                                       |
| `text.inverse`   | `--on-text-inverse`   | `ink-inverse`   | `#141414` | `#FFFFFF` | Texte et icônes sur les remplissages solides (status, corail, saumon); sombre en mode sombre, blanc en mode clair.                                        |
| `text.onAccent`  | `--on-text-on-accent` | `ink-on-accent` | `#1B0A05` | —         | Texte sur les boutons/mauvaises coralliens (7.2:1).                                                                                                       |
| `text.accent`    | `--on-text-accent`    | `ink-accent`    | `#FF7356` | `#B83A15` | Texte corallien, liens et icônes; brand.coral est pour les remplissages et les graphiques (le mode lumière a besoin d'une teinte plus foncée pour 4.5:1). |

<a id="brand"></a>

### Marque

| Token de design                 | CSS variable                             | Utilitaire        | Sombre                            | Clair                 | Utilisation                                                                                                                                                       |
| ------------------------------- | ---------------------------------------- | ----------------- | --------------------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `brand.coral`                   | `--on-brand-coral`                       | `brand-coral`     | `#FF7356`                         | `#EE5533`             | Couleur de marque principale pour les remplissages et les graphiques: logo, progression, badges, boutons soulignés. Pour le texte de corail utiliser text.accent. |
| `brand.salmon`                  | `--on-brand-salmon`                      | `brand-salmon`    | `#F99E70`                         | `#A74C1B`             | Texte emphasized: héro deuxième ligne, badges, mises à jour disponibles.                                                                                          |
| `brand.violet`                  | `--on-brand-violet`                      | `brand-violet`    | `#5B5BD6`                         | —                     | Couleur de l'éclat du héros primaire.                                                                                                                             |
| `brand.glowCore`                | `--on-brand-glow-core`                   | `brand-glow-core` | `#CDCDFF`                         | —                     | C'est le point culminant du centre de Glow.                                                                                                                       |
| `brand.logoGradient`            | `--on-brand-logo-gradient`               | —                 | `#FFB347` → `#FF7356` → `#FF4E3A` | —                     | gradient de Logo N, de haut à gauche vers le bas à droite.                                                                                                        |
| `brand.logoCoreGradient`        | `--on-brand-logo-core-gradient`          | —                 | `#FFF6D6` → `#FFC861`             | `#FFB347` → `#FF8F3F` | Logo Polaris dégradé sur fond sombre.                                                                                                                             |
| `brand.logoCoreGradientOnLight` | `--on-brand-logo-core-gradient-on-light` | —                 | `#FFB347` → `#FF8F3F`             | —                     | Logo Polaris dégradé sur des milieux légers; blanc chaud disparaîtrait.                                                                                           |

<a id="accent-tints"></a>

### Teintes apparentes

| Token de design       | CSS variable                | Utilitaire             | Sombre                      | Clair                     | Utilisation                           |
| --------------------- | --------------------------- | ---------------------- | --------------------------- | ------------------------- | ------------------------------------- |
| `accent.coralSubtle`  | `--on-accent-coral-subtle`  | `accent-coral-subtle`  | `rgba(255, 115, 86, 0.12)`  | `rgba(238, 85, 51, 0.10)` | Progrès et mise à jour des badges.    |
| `accent.salmonSubtle` | `--on-accent-salmon-subtle` | `accent-salmon-subtle` | `rgba(249, 158, 112, 0.10)` | `rgba(167, 76, 27, 0.10)` | Insigne et arrière-plans disponibles. |

<a id="status"></a>

### État

| Token de design        | CSS variable                 | Utilitaire              | Sombre                      | Clair                      | Utilisation                                                |
| ---------------------- | ---------------------------- | ----------------------- | --------------------------- | -------------------------- | ---------------------------------------------------------- |
| `status.success`       | `--on-status-success`        | `status-success`        | `#3FCF6C`                   | `#187733`                  | Installé, réussi, actuel.                                  |
| `status.successSubtle` | `--on-status-success-subtle` | `status-success-subtle` | `rgba(63, 207, 108, 0.10)`  | `rgba(24, 119, 51, 0.10)`  |                                                            |
| `status.warning`       | `--on-status-warning`        | `status-warning`        | `#FAB219`                   | `#965A00`                  | Avertissements et autorisation de l'administrateur requis. |
| `status.warningSubtle` | `--on-status-warning-subtle` | `status-warning-subtle` | `rgba(250, 178, 25, 0.10)`  | `rgba(150, 90, 0, 0.10)`   |                                                            |
| `status.danger`        | `--on-status-danger`         | `status-danger`         | `#FF5D51`                   | `#C22B21`                  | Défaut, déprécié, supprimé.                                |
| `status.dangerSubtle`  | `--on-status-danger-subtle`  | `status-danger-subtle`  | `rgba(255, 93, 81, 0.10)`   | `rgba(194, 43, 33, 0.10)`  |                                                            |
| `status.info`          | `--on-status-info`           | `status-info`           | `#66A4FA`                   | `#1564CD`                  | Auto-mise à jour, liens, informations.                     |
| `status.infoSubtle`    | `--on-status-info-subtle`    | `status-info-subtle`    | `rgba(102, 164, 250, 0.10)` | `rgba(21, 100, 205, 0.10)` |                                                            |
| `status.successBorder` | `--on-status-success-border` | `status-success-border` | `rgba(63, 207, 108, 0.20)`  | `rgba(24, 119, 51, 0.24)`  | Bord de panneaux teintés avec succèsSubtil.                |
| `status.warningBorder` | `--on-status-warning-border` | `status-warning-border` | `rgba(250, 178, 25, 0.25)`  | `rgba(150, 90, 0, 0.24)`   | Bord des panneaux teintés d'avertissementSouthle.          |
| `status.dangerBorder`  | `--on-status-danger-border`  | `status-danger-border`  | `rgba(255, 93, 81, 0.25)`   | `rgba(194, 43, 33, 0.24)`  | Bord des panneaux teintés de dangerSubtil.                 |
| `status.infoBorder`    | `--on-status-info-border`    | `status-info-border`    | `rgba(102, 164, 250, 0.25)` | `rgba(21, 100, 205, 0.24)` | Bord de panneaux teintés d'infoSubtle.                     |

<a id="buttons"></a>

### Boutons

| Token de design           | CSS variable                    | Utilitaire                 | Sombre    | Clair     | Utilisation |
| ------------------------- | ------------------------------- | -------------------------- | --------- | --------- | ----------- |
| `button.primaryBg`        | `--on-button-primary-bg`        | `button-primary-bg`        | `#EBEBEB` | `#1F1F1F` |             |
| `button.primaryHover`     | `--on-button-primary-hover`     | `button-primary-hover`     | `#FFFFFF` | `#333333` |             |
| `button.primaryPressed`   | `--on-button-primary-pressed`   | `button-primary-pressed`   | `#D6D6D6` | `#0A0A0A` |             |
| `button.primaryText`      | `--on-button-primary-text`      | `button-primary-text`      | `#141414` | `#FFFFFF` |             |
| `button.secondaryBg`      | `--on-button-secondary-bg`      | `button-secondary-bg`      | `#2B2B2B` | `#EBEBEB` |             |
| `button.secondaryHover`   | `--on-button-secondary-hover`   | `button-secondary-hover`   | `#333333` | `#E0E0E0` |             |
| `button.secondaryPressed` | `--on-button-secondary-pressed` | `button-secondary-pressed` | `#242424` | `#D6D6D6` |             |
| `button.secondaryText`    | `--on-button-secondary-text`    | `button-secondary-text`    | `#EDEDED` | `#1A1A1A` |             |
| `button.accentBg`         | `--on-button-accent-bg`         | `button-accent-bg`         | `#FF7356` | `#EE5533` |             |
| `button.accentHover`      | `--on-button-accent-hover`      | `button-accent-hover`      | `#FF8468` | `#F46546` |             |
| `button.accentPressed`    | `--on-button-accent-pressed`    | `button-accent-pressed`    | `#F0603F` | `#E24A28` |             |
| `button.accentText`       | `--on-button-accent-text`       | `button-accent-text`       | `#1B0A05` | —         |             |
| `button.disabledBg`       | `--on-button-disabled-bg`       | `button-disabled-bg`       | `#171717` | `#F0F0F0` |             |
| `button.disabledText`     | `--on-button-disabled-text`     | `button-disabled-text`     | `#5C5C5C` | `#A6A6A6` |             |

<a id="charts"></a>

### Graphiques

| Token de design    | CSS variable            | Utilitaire         | Sombre    | Clair     | Utilisation                                                                                             |
| ------------------ | ----------------------- | ------------------ | --------- | --------- | ------------------------------------------------------------------------------------------------------- |
| `chart.series1`    | `--on-chart-series1`    | `chart-series1`    | `#7B72EE` | `#6A61E8` | Catégorie couleur 1, violet.                                                                            |
| `chart.series2`    | `--on-chart-series2`    | `chart-series2`    | `#E0663F` | `#D9572E` | Catégorie couleur 2, corail.                                                                            |
| `chart.series3`    | `--on-chart-series3`    | `chart-series3`    | `#1E9E72` | `#168A62` | Catégorie couleur 3, cyan; tous les trois ont vérifié l'accessibilité/contraste en aveugle sur #1A1A1A. |
| `chart.emphasis`   | `--on-chart-emphasis`   | `chart-emphasis`   | `#F99E70` | `#D0602A` | L'accent mis sur la série unique, période actuelle.                                                     |
| `chart.deemphasis` | `--on-chart-deemphasis` | `chart-deemphasis` | `#4A4A4A` | `#CFCFCF` | Dé-accentuation de la série unique, période historique.                                                 |
| `chart.grid`       | `--on-chart-grid`       | `chart-grid`       | `#2C2C2A` | `#EBEBEB` |                                                                                                         |
| `chart.axis`       | `--on-chart-axis`       | `chart-axis`       | `#383838` | `#D6D6D6` |                                                                                                         |

<a id="component-colors"></a>

### Couleurs des composants

| Token de design            | CSS variable                      | Utilitaire                   | Sombre                      | Clair                       | Utilisation                                                                                                                                          |
| -------------------------- | --------------------------------- | ---------------------------- | --------------------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `component.searchBg`       | `--on-component-search-bg`        | `component-search-bg`        | `#1C1C1C`                   | `#FFFFFF`                   | Champ de recherche et fond d'entrée de formulaire.                                                                                                   |
| `component.cardHover`      | `--on-component-card-hover`       | `component-card-hover`       | `#1D1D1D`                   | `#FAFAFA`                   | Carte interactive plan de fond.                                                                                                                      |
| `component.toggleTrack`    | `--on-component-toggle-track`     | `component-toggle-track`     | `#333333`                   | `#D9D9D9`                   | Hors piste.                                                                                                                                          |
| `component.toggleKnob`     | `--on-component-toggle-knob`      | `component-toggle-knob`      | `#BDBDBD`                   | `#FFFFFF`                   | Enlevez le pouce.                                                                                                                                    |
| `component.toggleKnobOn`   | `--on-component-toggle-knob-on`   | `component-toggle-knob-on`   | `#FFFFFF`                   | —                           | Sur le pouce.                                                                                                                                        |
| `component.tabIndicator`   | `--on-component-tab-indicator`    | `component-tab-indicator`    | `#FFFFFF`                   | `#1A1A1A`                   | Indicateur de tab sélectionné.                                                                                                                       |
| `component.navActive`      | `--on-component-nav-active`       | `component-nav-active`       | `#202020`                   | `#E3E3E3`                   | arrière-plan de navigation de la barre latérale sélectionnée.                                                                                        |
| `component.heroBg`         | `--on-component-hero-bg`          | `component-hero-bg`          | `#0E0E10`                   | `#F4F3FD`                   | Fond de la carte héros.                                                                                                                              |
| `component.captionBg`      | `--on-component-caption-bg`       | `component-caption-bg`       | `rgba(0, 0, 0, 0.55)`       | —                           | Capture d'écran fond de légende en bas à gauche; sombre dans les deux thèmes, de sorte que la légende rend dans le thème sombre (data-theme='dark'). |
| `component.topNavScrolled` | `--on-component-top-nav-scrolled` | `component-top-nav-scrolled` | `rgba(11, 11, 11, 0.85)`    | `rgba(242, 242, 242, 0.85)` | Fond de navigation en bande laminée : surface.page à 85% avec filtre de fond : flou(20px).                                                           |
| `component.scrim`          | `--on-component-scrim`            | `component-scrim`            | `rgba(0, 0, 0, 0.50)`       | `rgba(0, 0, 0, 0.30)`       | Boîte de dialogue/fiche de fond.                                                                                                                     |
| `component.lightboxScrim`  | `--on-component-lightbox-scrim`   | `component-lightbox-scrim`   | `rgba(0, 0, 0, 0.88)`       | —                           | Image de fond de la lightbox; sombre dans les deux thèmes, donc la lightbox rend dans le thème sombre (data-theme='dark').                           |
| `component.modalBg`        | `--on-component-modal-bg`         | `component-modal-bg`         | `#171717`                   | `#FFFFFF`                   | Boîte de dialogue/fiche arrière-plan du panneau.                                                                                                     |
| `component.toastBg`        | `--on-component-toast-bg`         | `component-toast-bg`         | `rgba(44, 44, 44, 0.92)`    | `rgba(255, 255, 255, 0.94)` | Fond de grille avec filtre de fond : flou(20px).                                                                                                     |
| `component.itemActive`     | `--on-component-item-active`      | `component-item-active`      | `rgba(255, 255, 255, 0.07)` | `rgba(0, 0, 0, 0.06)`       | Menu actuel/palette de commande arrière-plan.                                                                                                        |
| `component.runningBorder`  | `--on-component-running-border`   | `component-running-border`   | `rgba(255, 115, 86, 0.25)`  | `rgba(238, 85, 51, 0.40)`   | Bordure de la carte active-tâche, corail à 25%.                                                                                                      |
| `component.logHeading`     | `--on-component-log-heading`      | `component-log-heading`      | `#E8E8E8`                   | `#1A1A1A`                   | Enregistrez les lignes d'étape commençant par ==>.                                                                                                   |
| `component.logSuccess`     | `--on-component-log-success`      | `component-log-success`      | `#7FD88F`                   | `#187733`                   | Des lignes de journal de bord réussies.                                                                                                              |
| `component.monoText`       | `--on-component-mono-text`        | `component-mono-text`        | `#D0D0D0`                   | `#333333`                   | Texte de table monospace, comme les versions.                                                                                                        |
| `component.timelineLine`   | `--on-component-timeline-line`    | `component-timeline-line`    | `#333333`                   | `#D6D6D6`                   | Début de la ligne de temps, décoloration à travers surface.haussé à transparent.                                                                     |
| `component.timelineDot`    | `--on-component-timeline-dot`     | `component-timeline-dot`     | `#3A3A3A`                   | `#C4C4C4`                   | Points d'entrée de la chronologie normale.                                                                                                           |
| `component.sourceMeta`     | `--on-component-source-meta`      | `component-source-meta`      | `#555555`                   | `#B0B0B0`                   | Les points auxiliaires, tels que GitHub métadonnées dans les sources de diffusion.                                                                   |
| `component.collectionFrom` | `--on-component-collection-from`  | `component-collection-from`  | `#1D1A26`                   | `#F1EEFB`                   | Début du dégradé de la carte de collecte, 160°.                                                                                                      |
| `component.collectionTo`   | `--on-component-collection-to`    | `component-collection-to`    | `#161616`                   | `#FFFFFF`                   | Fin du dégradé de la carte de collecte à 70%.                                                                                                        |
| `component.collectionRing` | `--on-component-collection-ring`  | `component-collection-ring`  | `#1B1922`                   | `#F8F7FD`                   | Collection empilée-con bordure.                                                                                                                      |
| `component.detailHeaderBg` | `--on-component-detail-header-bg` | `component-detail-header-bg` | `#171717`                   | `#FFFFFF`                   | Détails fond de carte en-tête sous l'éclat.                                                                                                          |
| `component.cliIconFrom`    | `--on-component-cli-icon-from`    | `component-cli-icon-from`    | `#2A2A2A`                   | —                           | Démarrage du dégradé de tuiles en ligne de commande.                                                                                                 |
| `component.cliIconTo`      | `--on-component-cli-icon-to`      | `component-cli-icon-to`      | `#1B1B1B`                   | —                           | Fin du dégradé de tuiles en ligne de commande.                                                                                                       |
| `component.cliIconText`    | `--on-component-cli-icon-text`    | `component-cli-icon-text`    | `#E2E2E2`                   | —                           | Texte en ligne de commande.                                                                                                                          |
| `component.letterIconText` | `--on-component-letter-icon-text` | `component-letter-icon-text` | `#FFFFFF`                   | —                           | Texte en lettre-tile, décoratif parce que les noms apparaissent toujours à côté.                                                                     |
| `component.segmentActive`  | `--on-component-segment-active`   | `component-segment-active`   | `#262626`                   | `#FFFFFF`                   | Segment sélectionné d'une commande segmentée.                                                                                                        |
| `component.menuBarBg`      | `--on-component-menu-bar-bg`      | `component-menu-bar-bg`      | `rgba(38, 38, 40, 0.96)`    | `rgba(246, 246, 246, 0.96)` | Prévisualisation de l'application macOS barre de menu bande.                                                                                         |
| `component.menuBarText`    | `--on-component-menu-bar-text`    | `component-menu-bar-text`    | `#E6E6E6`                   | `#1F1F1F`                   | Les éléments de prévisualisation de la barre de menu, dessinés comme des images de modèles AppKit.                                                   |

<a id="macos-window-controls"></a>

### macOS commandes de fenêtre

| Token de design  | CSS variable          | Utilitaire       | Sombre    | Clair | Utilisation |
| ---------------- | --------------------- | ---------------- | --------- | ----- | ----------- |
| `macos.close`    | `--on-macos-close`    | `macos-close`    | `#FF5F57` | —     |             |
| `macos.minimize` | `--on-macos-minimize` | `macos-minimize` | `#FEBC2E` | —     |             |
| `macos.zoom`     | `--on-macos-zoom`     | `macos-zoom`     | `#28C840` | —     |             |

<a id="typography"></a>

## Typographie

Classe `text-{name}` ensemble, taille, taille de la ligne, poids et suivi.

| Dénomination | Classe          | Taille / hauteur de la ligne | Poids | Suivi             | Utilisation                                                         |
| ------------ | --------------- | ---------------------------- | ----- | ----------------- | ------------------------------------------------------------------- |
| `hero`       | `text-hero`     | 8 / 7 / 8                    | 600   | -0.035em          | Page d'accueil du site Web en tête du héros                         |
| `section`    | `text-section`  | ŒUVRES DE L'ÉCHELLE          | 600   | -0,03em           | Rubrique de la section Web                                          |
| `display`    | `text-display`  | C'est une bonne idée.        | 600   | -0,03em           | En vedette héro cap                                                 |
| `title1`     | `text-title1`   | ŒUVRES DE LONGUE DURÉE       | 600   | -0,02em           | Rubrique                                                            |
| `title2`     | `text-title2`   | 22 / 28 px                   | 600   | -0,02em           | Titre de la boîte de dialogue et en-tête de détail compact          |
| `headline`   | `text-headline` | 22 / 12 px                   | 600   | -0.01em           | Rubrique                                                            |
| `statValue`  | `text-stat`     | " 20 / 26 px                 | 600   | -0,015em          | Valeurs statistiques avec chiffres proportionnels                   |
| `body`       | `text-body`     | " 14 / 22 px                 | 400   | 0                 | Texte du corps                                                      |
| `bodySm`     | `text-body-sm`  | " 13 / 20 px                 | 400   | 0                 | Texte de la liste et du tableau                                     |
| `caption`    | `text-caption`  | " 12 / 18 px                 | 400   | 0                 | Informations secondaires                                            |
| `label`      | `text-label`    | " 11 / 16 px                 | 600   | 0,08em, majuscule | Les étiquettes de groupe, telles que les titres de section latérale |
| `mono`       | `text-mono`     | " 12 / 18 px                 | 400   | 0                 | Commandes, versions et journaux                                     |

| Famille de polices | Stack                                                                                                                                                       |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `sans`             | Inter Variable, Inter, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif          |
| `sansZh`           | Inter Variable, Inter, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans SC, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif          |
| `sansJa`           | Inter Variable, Inter, Hiragino Sans, Hiragino Kaku Gothique ProN, Yu Gothique, Noto Sans JP, -apple-system, BlinkMacSystemFont, Helvetica Neue, sans-serif |
| `mono`             | SF Mono, JetBrains Mono, ui-monospace, Menlo, Consolas, Mono de libération, monospace                                                                       |

<a id="spacing"></a>

## Espacement

| Dénomination | CSS variable     | Valeur | Utilisation |
| ------------ | ---------------- | ------ | ----------- |
| `0`          | `--on-space-0`   | 0px    |             |
| `1`          | `--on-space-1`   | 4px    |             |
| `2`          | `--on-space-2`   | 8px    |             |
| `3`          | `--on-space-3`   | 12px   |             |
| `4`          | `--on-space-4`   | 16px   |             |
| `5`          | `--on-space-5`   | 20px   |             |
| `6`          | `--on-space-6`   | 24px   |             |
| `7`          | `--on-space-7`   | 28px   |             |
| `8`          | `--on-space-8`   | 32px   |             |
| `10`         | `--on-space-10`  | 40px   |             |
| `12`         | `--on-space-12`  | 48px   |             |
| `16`         | `--on-space-16`  | 64px   |             |
| `20`         | `--on-space-20`  | 80px   |             |
| `0-5`        | `--on-space-0-5` | 2px    |             |
| `1-5`        | `--on-space-1-5` | 6px    |             |
| `2-5`        | `--on-space-2-5` | 10px   |             |
| `3-5`        | `--on-space-3-5` | 14px   |             |

<a id="radius"></a>

## Rayon

| Dénomination       | CSS variable           | Valeur | Utilisation                                                                                             |
| ------------------ | ---------------------- | ------ | ------------------------------------------------------------------------------------------------------- |
| `rounded-tiny`     | `--on-radius-tiny`     | 4px    |                                                                                                         |
| `rounded-small`    | `--on-radius-small`    | 7px    |                                                                                                         |
| `rounded-default`  | `--on-radius-default`  | 10px   |                                                                                                         |
| `rounded-panel`    | `--on-radius-panel`    | 12px   | Cartes de capture d'écran, menus, superpositions.                                                       |
| `rounded-big`      | `--on-radius-big`      | 14px   |                                                                                                         |
| `rounded-huge`     | `--on-radius-huge`     | 20px   |                                                                                                         |
| `rounded-xl`       | `--on-radius-xl`       | 28px   |                                                                                                         |
| `rounded-full`     | `--on-radius-full`     | 9999px |                                                                                                         |
| `rounded-app-icon` | `--on-radius-app-icon` | 23%    | Rayon de l'icône de l'application: 23% de la longueur latérale, approximation macOS Des super-ellipses. |

<a id="shadows"></a>

## Ombres

| Dénomination        | Sombre                                                                       | Clair                                                                  | Utilisation                                                                                           |
| ------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `shadow-window`     | `0 50px 140px rgba(0, 0, 0, 0.65), 0 0 0 0.5px #000000`                      | `0 40px 100px rgba(0, 0, 0, 0.16), 0 0 0 0.5px rgba(0, 0, 0, 0.16)`    |                                                                                                       |
| `shadow-popover`    | `0 24px 60px rgba(0, 0, 0, 0.60)`                                            | `0 12px 40px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04)`       |                                                                                                       |
| `shadow-modal`      | `0 30px 80px rgba(0, 0, 0, 0.60)`                                            | `0 24px 64px rgba(0, 0, 0, 0.16)`                                      |                                                                                                       |
| `shadow-toast`      | `0 18px 40px rgba(0, 0, 0, 0.50)`                                            | `0 10px 30px rgba(0, 0, 0, 0.12)`                                      |                                                                                                       |
| `shadow-float-icon` | `0 18px 30px rgba(0, 0, 0, 0.55)`                                            | `0 14px 28px rgba(0, 0, 0, 0.16)`                                      |                                                                                                       |
| `shadow-app-icon`   | `inset 0 0 0 0.5px rgba(255, 255, 255, 0.14), 0 1px 2px rgba(0, 0, 0, 0.40)` | `inset 0 0 0 0.5px rgba(0, 0, 0, 0.10), 0 1px 2px rgba(0, 0, 0, 0.12)` |                                                                                                       |
| `shadow-icon-text`  | `0 1px 2px rgba(0, 0, 0, 0.30)`                                              | —                                                                      | L'ombre en lettres-tiles préserve la lisibilité sur les fonds de lumière.                             |
| `shadow-focus-ring` | `0 0 0 2px #131313, 0 0 0 4px #FF7356`                                       | `0 0 0 2px #FFFFFF, 0 0 0 4px #EE5533`                                 | Bague de mise au point du clavier: 2 px gap plus 2 px corallien (3,5:1 contre blanc en mode lumière). |
| `shadow-segment`    | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.10), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | Lifting de segment sélectionné; aucun (ombre transparente) en mode sombre.                            |
| `shadow-knob`       | `0 0 #0000`                                                                  | `0 1px 2px rgba(0, 0, 0, 0.22), 0 0 0 0.5px rgba(0, 0, 0, 0.08)`       | Remontez le bouton; le bouton blanc en a besoin sur la piste lumineuse.                               |

<a id="motion"></a>

## Motion

| Dénomination      | Valeur                           |
| ----------------- | -------------------------------- |
| `duration-fast`   | 120 ms                           |
| `duration-base`   | 200 ms                           |
| `duration-slow`   | 320 ms                           |
| `ease-standard`   | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)`     |
| `ease-exit`       | `cubic-bezier(0.4, 0, 1, 1)`     |

<a id="z-index"></a>

## Indice Z

| Dénomination | Valeur |
| ------------ | ------ |
| `z-base`     | 0      |
| `z-sticky`   | 10     |
| `z-dropdown` | 100    |
| `z-overlay`  | 200    |
| `z-modal`    | 300    |
| `z-popover`  | 400    |
| `z-toast`    | 500    |
| `z-tooltip`  | 600    |

<a id="layout"></a>

## Mise en page

| Token de design                      | Valeur                                            |
| ------------------------------------ | ------------------------------------------------- |
| `layout.desktop.windowDefaultWidth`  | 1280px                                            |
| `layout.desktop.windowDefaultHeight` | 820px                                             |
| `layout.desktop.windowMinWidth`      | 1100px                                            |
| `layout.desktop.windowMinHeight`     | 700px                                             |
| `layout.desktop.sidebarWidth`        | 224px                                             |
| `layout.desktop.toolbarHeight`       | 52px                                              |
| `layout.desktop.railWidth`           | 288px                                             |
| `layout.desktop.contentPaddingX`     | 28px                                              |
| `layout.desktop.railPadding`         | 20px                                              |
| `layout.desktop.trafficLightInset`   | x 18 pixels, y 22 pixels                          |
| `layout.web.pageMaxWidth`            | 1240px                                            |
| `layout.web.pageGutter`              | 24px                                              |
| `layout.web.navHeight`               | 64px                                              |
| `layout.web.breakpoints`             | 640px, md 768px, lg 1024px, xl 1280px, 2xl 1440px |

<a id="effects"></a>

## Effets

| Token de design     | Sombre                                                                                                                                                            | Clair                 | Utilisation                                                                                                                                                                                      |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `heroGlow`          | `radial-gradient(circle, rgba(205, 205, 255, 0.95) 0%, rgba(135, 135, 245, 0.78) 14%, rgba(92, 92, 220, 0.50) 32%, rgba(64, 64, 190, 0.20) 52%, transparent 70%)` | —                     | Héros vedette violet éclat.                                                                                                                                                                      |
| `coverGlow`         | `radial-gradient(circle, rgba(170, 170, 255, 0.55) 0%, rgba(110, 110, 235, 0.35) 16%, rgba(80, 80, 214, 0.18) 34%, rgba(60, 60, 180, 0.06) 52%, transparent 66%)` | —                     | Plus doux grand éclat de web-héros.                                                                                                                                                              |
| `ring.stroke`       | `rgba(255, 255, 255, 0.13)`                                                                                                                                       | `rgba(0, 0, 0, 0.10)` |                                                                                                                                                                                                  |
| `ring.dasharray`    | `2 6`                                                                                                                                                             | —                     |                                                                                                                                                                                                  |
| `detailGlow`        | `radial-gradient(closest-side, {accent}73, {accent}2E 55%, transparent)`                                                                                          | —                     | Lumière en tête de détail supérieure droite; {accent} est accent de paquetColor (par défaut #3C96F5); 73/2E sont des valeurs alpha hexadécimales.                                                |
| `backdropBlur`      | `20`                                                                                                                                                              | —                     |                                                                                                                                                                                                  |
| `accentGlowOpacity` | `1`                                                                                                                                                               | `0.5`                 | Opacité des lueurs construites à partir d'une couleur d'accent de paquet (en-tête de détail, lueur de héros personnalisée); accents saturés ont besoin d'adoucissement sur les fonds de lumière. |
