[English](../../../accessibility.md) · [简体中文](../../zh-CN/docs/accessibility.md) · [繁體中文](../../zh-Hant/docs/accessibility.md) · [日本語](../../ja-JP/docs/accessibility.md) · [Español](../../es-ES/docs/accessibility.md) · [Português (Brasil)](../../pt-BR/docs/accessibility.md) · [Русский](../../ru-RU/docs/accessibility.md) · [Deutsch](../../de-DE/docs/accessibility.md) · **Français** · [Italiano](../../it-IT/docs/accessibility.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="accessibility"></a>

# Accessibilité

La cible est WCAG 2.2 AA dans les deux thèmes. La plupart d'entre eux sont intégrés dans les jetons et les composants; cette page liste ce qui
Les applications ne doivent pas se défaire.

<a id="contrast"></a>

## Contraste

- Texte 4.5:1 en regard de son arrière-plan réel, y compris les badges teintés et les remblais; grand texte d'affichage (24 px+, ou
  19 px+ à 600) 3:1. Les tests de jeton imposent les paires dans [Couleur › Contraste](color.md#contrast).
- Icônes qui portent le sens, les marques de graphique, les bordures d'entrée et l'anneau de mise au point: 3:1.
- Texte décoratif (`text.disabled`, filigranes) ne contient aucune information.

<a id="keyboard"></a>

## Clavier

- Tout est accessible avec Tab dans l'ordre visuel ; rien de focalisable n'est invisible.
- **Bague de mise au point:** `shadow-focus-ring` le `:focus-visible` — un écart de 2 px dans la couleur de la surface et un anneau corallien de 2 px.
  Ne le retirez jamais sans équivalent.
- **Widgets composites** utiliser un focus roving (un arrêt Tab, flèches à l'intérieur): contrôles segmentés (`radiogroup`), onglets
  (`tablist`), barres de puces, menus (`menu` avec `menuitem` / `menuitemradio`), la palette de commandes (`combobox` +
  `listbox`).
- **Superpositions** Déplacez-vous vers l'intérieur sur l'onglet ouvert, piégez, fermez sur Escape et retournez vers l'élément qui les a ouverts.
  La mise au point Script-déplaced ne montre pas un anneau lorsque l'utilisateur a ouvert la superposition avec le pointeur.
- **Raccourcis** suivre la plate-forme (la recherche, les paramètres, la recherche, la recherche dans une vue, l'évasion) et sont montrés dans
  menus et conseils, jamais requis.

<a id="screen-readers"></a>

## Lecteurs d'écran

- Utiliser l'élément sémantique d'abord (`button`, `a`, `nav`, `main`, `h1`–`h3`, `table`); les éléments ajoutent des rôles uniquement lorsque
  HTML n'en a pas.
- Les contrôles Icon seulement ont `aria-label`; icônes décoratives et icônes de l'application à côté de leurs noms sont `aria-hidden`.
- Page actuelle `aria-current="page"`; toggles `role="switch"` avec `aria-checked`; boutons occupés `aria-busy`.
- Toasts: défaillances `role="alert"`, d'autres une région polie en direct. Le progrès a un équivalent texte ("1,2 de 3,4 Go").
- Les graphiques ont un résumé de texte ou un équivalent de tableau; les lignes lumineuses sont étiquetées avec leur valeur actuelle.

<a id="motion-and-timing"></a>

## Motion et calendrier

- Respecter la « motion de réduction » (`base.css` poignées CSS; JavaScript l'animation doit vérifier `matchMedia`).
- Les Toasts s'arrêtent en plantant; rien d'important ne disparaît sur un minuteur sans un moyen de le retrouver (histoire,
  liste des tâches).

<a id="pointer-and-touch"></a>

## Pointeur et toucher

- Cible au moins 24 × 24 px dans l'interface utilisateur de bureau dense, 32 px pour les commandes primaires, 44 px pour les actions web mobiles primaires.
- Hover ne révèle rien que le clavier et les utilisateurs de toucher ne peuvent pas atteindre.

<a id="language"></a>

## Langue

Jeu `lang` le `<html>` et sur n'importe quel passage dans une autre langue, ainsi les lecteurs d'écran et les polices changent. Ne jamais transmettre
signifie par couleur, position ou forme seule: statut pair couleur avec une icône et un mot.
