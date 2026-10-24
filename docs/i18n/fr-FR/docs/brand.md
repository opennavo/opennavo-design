[English](../../../brand.md) · [简体中文](../../zh-CN/docs/brand.md) · [繁體中文](../../zh-Hant/docs/brand.md) · [日本語](../../ja-JP/docs/brand.md) · [Español](../../es-ES/docs/brand.md) · [Português (Brasil)](../../pt-BR/docs/brand.md) · [Русский](../../ru-RU/docs/brand.md) · [Deutsch](../../de-DE/docs/brand.md) · **Français** · [Italiano](../../it-IT/docs/brand.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="brand"></a>

# Marque

OpenNavo Le design est partagé par une famille d'applications. Ils partagent tout sauf une mince couche de marque, donc une personne qui sait
une application connaît déjà les autres.

<a id="the-brand-layer"></a>

## La couche de la marque

Une application ne peut changer que ces jetons (avec les deux valeurs du thème) :

| Token de design                                                                      | Ce qu'il porte                                                                                                       |
| ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| `brand.coral`                                                                        | Le remplissage de l'accent: boutons d'accent, toggles sur, progrès, couleur de bague de mise au point, petits points |
| `text.accent`                                                                        | Texte et liens de couleur Accent                                                                                     |
| `accent.coralSubtle`                                                                 | Teintes Accent derrière les puces et les pistes de progrès                                                           |
| `button.accentBg`, `button.accentHover`, `button.accentPressed`, `button.accentText` | Le bouton accent                                                                                                     |
| `shadow.focusRing`                                                                   | L'anneau de mise au point (maintenir l'écart de 2 px + la forme de l'anneau de 2 px)                                 |
| `component.runningBorder`                                                            | La frontière d'une tâche en cours                                                                                    |
| `brand.salmon`, `accent.salmonSubtle`                                                | Texte et badges d'accent chaud                                                                                       |
| `brand.violet`, `effect.heroGlow`, `effect.coverGlow`                                | Héros brillants                                                                                                      |
| `brand.logoGradient`, `brand.logoCoreGradient`                                       | La marque de l'application                                                                                           |

Les noms des jetons restent les mêmes (`brand.coral` garde son nom même quand l'accent d'une application est bleu) donc composants et docs
jamais de fourchette. Générer des jetons d'une application avec un fichier de redéfinition ([Theming › Re-marquage](theming.md#re-branding-another-app))
et garder les tests de contraste vert: le texte de l'accent doit encore atteindre 4.5:1 dans les deux thèmes et l'accent remplir 3:1.

Tout le reste — neutres, couleurs d'état, type, espacement, rayons, mouvement, composants et motifs — est identique dans
chaque application.

<a id="names-and-marks"></a>

## Noms et marques

- Chaque application a son nom et sa marque. `brand` slot; le système de conception ne délivre pas
  logo.
- Les OpenNavo nom et logo sont des marques de commerce de la OpenNavo les auteurs et sont **pas** couvert par ce dépôt MIT
  licence ([MARQUES MARQUES](../TRADEMARKS.md)). Les applications construites sur le système ne doivent pas les utiliser comme leur propre nom ou icône.
- Le préfixe du composant `On` et les CSS préfixe `--on-` appartiennent au système, pas à un produit; les garder.

<a id="using-the-mark-well-for-opennavo-itself"></a>

## Bien utiliser la marque (pour OpenNavo elle-même)

- Le mot-symbole se trouve à côté de la marque à 15 px, poids 600, en `brand.coral`; la marque mesure 22 px à côté.
- En dessous de 32 px, la marque utilise sa géométrie simplifiée. Gardez un espace clair d'au moins la moitié de la hauteur de la marque.
- Sur la lumière, l'étoile dans la marque passe au gradient du noyau ambre; ne jamais placer la marque sur une image occupée.
