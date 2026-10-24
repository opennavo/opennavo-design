[English](../../../motion.md) · [简体中文](../../zh-CN/docs/motion.md) · [繁體中文](../../zh-Hant/docs/motion.md) · [日本語](../../ja-JP/docs/motion.md) · [Español](../../es-ES/docs/motion.md) · [Português (Brasil)](../../pt-BR/docs/motion.md) · [Русский](../../ru-RU/docs/motion.md) · [Deutsch](../../de-DE/docs/motion.md) · **Français** · [Italiano](../../it-IT/docs/motion.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="motion"></a>

# Motion

Motion explique un changement, il ne décore jamais. La plupart de l'interface n'anime pas du tout.

<a id="tokens"></a>

## Tokens de design

| Token de design   | Valeur                           | Utilisation                                                                     |
| ----------------- | -------------------------------- | ------------------------------------------------------------------------------- |
| `duration-fast`   | 120 ms                           | Changements de couleur sur hover, presse et focus; toggles; chaque sortie       |
| `duration-base`   | 200 ms                           | Boîtes de dialogue, feuilles, palette de commandes et toasts entrant            |
| `duration-slow`   | 320 ms                           | Remplissage de progrès, compteurs de balayage, entrées de héros et de marketing |
| `ease-standard`   | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Par défaut pour les changements d'état et les petits mouvements                 |
| `ease-emphasized` | `cubic-bezier(0.3, 0, 0, 1)`     | Les superpositions arrivent                                                     |
| `ease-exit`       | `cubic-bezier(0.4, 0, 1, 1)`     | Tout ce qui part, toujours avec `duration-fast`                                 |

<a id="what-moves"></a>

## Ce qui bouge

- **Changements d'état** les couleurs s'estompent avec `duration-fast` (`transition-colors duration-fast ease-standard` sur chaque
  contrôle interactif).
- **Superpositions** entrer dans 200 ms avec la courbe soulignée et laisser dans 120 ms avec la courbe de sortie : dialogues centrés
  s'estompent et s'écaillént de 0.96, feuilles glissent de leur bord, la palette de commande tombe de 8 px du haut, les toasts s'élèvent
  8 px. Le schrim s'estompe avec son panneau. Les menus et les tooltips apparaissent sans animation.
- **Progrès accomplis** anime sa valeur, ne saute jamais à l'envers, et ne montre un état indéterminé que jusqu'au premier réel
  Le numéro arrive.
- **Pages marketing** peut utiliser le mouvement ambiant lent (une lueur de respiration, des anneaux volants, des icônes flottantes) sur le
  Compositeur (transforme, opacité) seulement.

<a id="what-never-moves"></a>

## Ce qui ne bouge jamais

- Mise en page. Le contenu ne glisse pas, ne s'effondre pas ou ne se reflowe pas pendant que l'utilisateur lit ou tape; voir
  [Principes › Stable sous le pointeur](principles.md#4-stable-under-the-pointer).
- Interrupteurs thématiques : changement de couleurs dans un seul cadre (`applyThemePreference` désactive les transitions pour ce cadre).
- Les numéros qui mettent à jour en place (moniteurs, compteurs) changent sans tisser.

<a id="reduced-motion"></a>

## Mouvement réduit

`base.css` pince chaque animation et transition à 0,01 ms sous `prefers-reduced-motion: reduce`, et retire lisse
ne pas se fier à une animation pour transmettre l'information; l'état final doit avoir un sens par lui-même.
