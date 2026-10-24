[English](../../../color.md) · [简体中文](../../zh-CN/docs/color.md) · [繁體中文](../../zh-Hant/docs/color.md) · [日本語](../../ja-JP/docs/color.md) · [Español](../../es-ES/docs/color.md) · [Português (Brasil)](../../pt-BR/docs/color.md) · [Русский](../../ru-RU/docs/color.md) · [Deutsch](../../de-DE/docs/color.md) · **Français** · [Italiano](../../it-IT/docs/color.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="color"></a>

# Couleur

Toutes les couleurs proviennent de jetons. Chaque jeton de couleur a une valeur sombre (la valeur par défaut) et, lorsqu'il diffère, une valeur lumineuse;
des [référence symbolique](reference/tokens.md) Cette page explique les rôles, qui est ce que vous avez besoin pour
choisir le jeton droit. La mécanique des thèmes sont en [Thèmes](theming.md).

<a id="how-the-two-themes-differ"></a>

## Les différences entre les deux thèmes

- **Sombre** les étapes de surface vers le haut dans la légèreté: page `#0B0B0B` → de base `#131313` → carte `#1A1A1A` → élevé `#262626`.
  L'élévation se lit comme "plus légère".
- **Clair** garde le même ordre mais ne peut pas aller plus blanc que blanc: page `#F2F2F2` → de base `#F8F8F8` → carte `#FFFFFF`.
  Les panneaux surélevés sont blancs avec une bordure et une ombre douce; remplit à l'intérieur des cartes blanches (`cardAlt`, `raised`, `chip`)
  sont gris, donc ils lisent comme encastrés.
- Les bordures sont blanches translucides en mode foncé et noires translucides en mode clair, à la même force.
- Les couleurs de marque et d'état sont plus profondes en mode lumière, donc le texte garde 4.5:1 sur blanc.

Ne choisissez jamais une couleur par oeil à partir d'une capture d'écran d'un thème. Choisissez le rôle; le jeton porte les deux valeurs.

<a id="surfaces"></a>

## Surfaces

| Token de design   | Rôle                           | Utilisation pour                                                                                                             | Ne pas utiliser pour                                      |
| ----------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `surface.page`    | Fond extérieur le plus large   | Corps du site Web, barre de navigation supérieure, zone derrière les fenêtres flottantes                                     | Zones de contenu à l'intérieur du shell de l'application  |
| `surface.base`    | Contexte général               | La colonne de contenu de l'application shell, fond de fenêtre                                                                | Cartes                                                    |
| `surface.sidebar` | Barre latérale                 | La colonne de navigation de gauche                                                                                           | Autre chose                                               |
| `surface.rail`    | Chemin de fer droit            | Les statistiques optionnelles rail sur les grandes fenêtres                                                                  | —                                                         |
| `surface.card`    | Cartes et panneaux             | Cartes, conteneurs de liste, groupes de paramètres, popovers de la barre de menus                                            | Panneaux flottants sur le contenu (utilisation `popover`) |
| `surface.cardAlt` | Dans une carte                 | Entrées, blocs secondaires, mise en valeur de la ligne de table, notices à l'intérieur d'une carte                           | Historiques au niveau de la page                          |
| `surface.raised`  | Plongée et petits remplissages | Hover fonds, page actuelle dans la pagination, carreaux d'icônes, `⌘K` des indices                                           | Panneaux flottants; segments sélectionnés                 |
| `surface.chip`    | Insignes neutres               | Jetons neutres, conseils clavier, petites étiquettes                                                                         | Boutons (utiliser `button.secondary*`)                    |
| `surface.control` | Contrôles                      | Entrées de texte et sélections dans les paramètres, tooltips                                                                 | Grandes zones                                             |
| `surface.inset`   | Les puits                      | Blocs de code, journaux, pistes de contrôle segmenté, pistes de progression                                                  | Boutons                                                   |
| `surface.overlay` | Superposition translucide      | Menus et palette de commandes, avec un flou de fond de 20 px                                                                 | Panneaux opaques                                          |
| `surface.popover` | Panneau flottant               | Cartes de consentement et de suggestion, popovers de démonstration — tout ce qui flotte sur le contenu avec `shadow.popover` | Contenu en ligne                                          |

Surfaces spécifiques aux composants `component.*`: `modalBg` (dialogues et feuilles), `searchBg` (champs de recherche et forme)
entrées sur les pages), `navActive` (point latéral sélectionné), `segmentActive` (selecté par segment), `heroBg` (héros de la nature),
`detailHeaderBg`, `toastBg`, `scrim` (de retour dans les dialogues), `lightboxScrim` (spectateur d'images, sombre dans les deux thèmes, donc le
Le spectateur rend dans le thème sombre: [Theming › Sous-arbres](theming.md#subtrees)), `menuBarBg` / `menuBarText` (une
aperçu de la macOS barre de menus).

<a id="text"></a>

## Texte

| Token de design  | Utilisation                                                              | Sombre              | Clair               |
| ---------------- | ------------------------------------------------------------------------ | ------------------- | ------------------- |
| `text.primary`   | Rubriques, corps souligné, nombres                                       | 14.9:1 sur carte    | 17.4:1 sur carte    |
| `text.secondary` | Texte du corps, descriptions                                             | 7.3:1               | 7.2:1               |
| `text.tertiary`  | Étiquettes, métadonnées, horodatages, conseils                           | 5.4:1               | 5.3:1               |
| `text.disabled`  | Texte uniquement désactivé et purement décoratif                         | —                   | —                   |
| `text.accent`    | Texte corallien : liens, puces coralliennes, actions en ligne soulignées | 6.5:1               | 5.7:1               |
| `text.inverse`   | Texte et icônes sur les remplissages forts (statut, corail, saumon)      | sombre              | blanc               |
| `text.onAccent`  | Texte sur les boutons coralliens et les badges coralliens                | 7.2:1 sur le corail | 5.5:1 sur le corail |

Règles:

- Utilisez au maximum trois niveaux de texte dans un composant. Tertiaire est le plancher pour tout ce qu'un utilisateur doit lire.
- `text.disabled` ne transporte jamais d'informations: un contrôle handicapé doit encore dire pourquoi il est désactivé à proximité.
- **`brand.coral` est un remplissage, pas une couleur de texte.** Sur le blanc, il est 3.5:1. `text.accent`.
- Jamais mis `text.tertiary` le `surface.chip` ou `surface.raised` pour le texte long; utiliser `text.secondary` Voilà.

<a id="borders"></a>

## Frontières

`border.subtle` pour les bords et les diviseurs de cartes, `border.default` pour les entrées, boutons fantômes et fenêtres,
`border.strong` pour vol stationnaire. `border.sidebar` Sépare la barre latérale. Les panneaux d'état utilisent la correspondance
`status.*Border` avec leurs `status.*Subtle` Remplir.

<a id="brand"></a>

## Marque

| Token de design                                | Utilisation                                                                                                                                                   |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `brand.coral`                                  | L'accent de la marque en tant que remplissage ou graphique: le bouton d'accent, le progrès, les toggles qui sont sur, anneau de mise au point, petits points. |
| `brand.salmon`                                 | Texte d'accent chaud: sourcils de section, la deuxième ligne d'un héros, badges "mise à jour disponible".                                                     |
| `brand.violet`                                 | La lueur du héros. Aussi mélangé dans des fonds d'icône teintés sur les pages de marketing.                                                                   |
| `brand.logoGradient`, `brand.logoCoreGradient` | Le logo marque uniquement. Le gradient de noyau passe à l'ambre sur les fonds de lumière.                                                                     |

Teintes apparentes: `accent.coralSubtle` (progrès, copeaux de corail) et `accent.salmonSubtle` Texte sur
qu'ils utilisent `text.accent` et `brand.salmon`.

Utilisez le corail avec parcimonie: un bouton d'accent par vue, et jamais de corail pour les erreurs (c'est-à-dire `status.danger`).

<a id="status"></a>

## État

| Famille   | Moyens                                                                              | Utilisation typique                                                                    |
| --------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `success` | Fait, installé, sain, actuel                                                        | Badges installés, bannières "Tout est normal", lignes de log des succès                |
| `warning` | Besoin d'attention, besoin d'une autorisation de l'administrateur, résultat partiel | Éléments supprimés, instructions d'administration, puces de "confirmation des besoins" |
| `danger`  | Échec, déprécié, destructeur                                                        | États de défaillance, boutons de danger, menaces trouvées                              |
| `info`    | Informations neutres, applications auto-mise à jour, liens dans les docs            | Info avis, puces "auto-mise à jour"                                                    |

Chaque famille a la couleur solide (texte, icônes, points), `*Subtle` (10 % de fonds de teinte) et `*Border` (peintre teinté
La couleur de la paire avec une icône ou un mot — l'état n'est jamais communiqué par la couleur seule.

<a id="buttons"></a>

## Boutons

| Variante              | Tokens de design                                                    | Utilisation                                                                                            |
| --------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Enseignement primaire | `button.primary*` — presque blanc sur foncé, presque noir sur clair | L'action principale d'une vue. Une par région.                                                         |
| Secondaire            | `button.secondary*`                                                 | Autres actions. La variante par défaut.                                                                |
| Accent                | `button.accent*` (couleur, texte sombre)                            | Un moment de marque : le héros appelle à l'action, "Mettre à jour tout". Rarement plus d'un par écran. |
| Fantôme               | transparente, `border.default`                                      | Actions tertiaires dans les barres d'outils et les rangées denses.                                     |
| Danger                | `status.dangerSubtle` + `status.danger`                             | Actions destructives. Jamais le bouton par défaut d'une boîte de dialogue.                             |
| Handicapés            | `button.disabled*`                                                  | Contrôles inactifs de toute variante.                                                                  |

<a id="charts"></a>

## Graphiques

`chart.series1` (violet), `chart.series2` (cœur), `chart.series3` (vert) sont les couleurs catégoriques, choisis pour rester
se distingue pour les déficiences communes de vision de couleur; les utiliser dans cet ordre et les étiquettes série directement quand il
sont plus de deux. Les graphiques de série unique utilisent `chart.emphasis` pour la valeur actuelle et `chart.deemphasis` pour l'histoire.
`chart.grid` et `chart.axis` sont des lignes de cheveux. Les vues de surveillance peuvent également utiliser l'état et les couleurs d'information pour le sens
(avertissement de température, mise en panne/mise en place du réseau).

<a id="contrast"></a>

## Contraste

Mesuré avec le WCAG 2.2 formule; `packages/tokens/tests` échoue la compilation si une paire tombe sous sa cible.

| Paire                         | Objectif | Dark (base / carte / relevé) | Lumière (base / carte / levée) |
| ----------------------------- | -------- | ---------------------------- | ------------------------------ |
| `text.primary`                | 4.5      | 15.9 / 14.9 / 12.9           | 16.4 / 17.4 / 14.9             |
| `text.secondary`              | 4.5      | 7.8 / 7.3 / 6.4              | 6.8 / 7.2 / 6.2                |
| `text.tertiary`               | 4.5      | 5.7 / 5.4 / 4.7              | 5.0 / 5.3 / 4.6                |
| `text.accent`                 | 4.5      | 6.9 / 6.5 / 5.6              | 5.4 / 5.7 / 4.9                |
| `brand.salmon`                | 4.5      | 9.0 / 8.4 / 7.3              | 5.4 / 5.7 / 4.9                |
| `status.success`              | 4.5      | 9.2 / 8.6 / 7.5              | 5.3 / 5.6 / 4.8                |
| `status.warning`              | 4.5      | 10.1 / 9.5 / 8.2             | 5.3 / 5.6 / 4.8                |
| `status.danger`               | 4.5      | 6.1 / 5.7 / 5.0              | 5.4 / 5.7 / 4.9                |
| `status.info`                 | 4.5      | 7.3 / 6.8 / 5.9              | 5.3 / 5.6 / 4.8                |
| `brand.coral` comme graphique | 3.0      | 6.9 / 6.5 / 5.6              | 3.3 / 3.5 / 3.0                |

Les tests couvrent également le statut et le texte d'accent sur leurs fonds teintés (sur base, carte et carteAlt), chaque bouton
État, texte sur le corail, le carrelage terminal et le texte monospace dans les puits.

<a id="do-and-dont"></a>

## Faites et ne faites pas

- Ne pas utiliser `bg-surface-popover shadow-popover border border-line-default` pour une carte flottante; ne pas réutiliser
  `surface.raised` — en mode lumière, il est gris.
- Mélanger les teintes translucides des jetons (`color-mix(in srgb, var(--on-status-success) 14%, transparent)`) lorsqu'une
  La commercialisation de l'éclat a besoin d'une teinte; ne pas écrire des valeurs hexagonales ou rgba dans les composants.
- Vérifiez les deux thèmes avant de fusionner l'interface utilisateur ; la galerie et l'application basculent tous les deux avec un seul réglage.
