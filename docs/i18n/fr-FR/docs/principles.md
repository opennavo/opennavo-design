[English](../../../principles.md) · [简体中文](../../zh-CN/docs/principles.md) · [繁體中文](../../zh-Hant/docs/principles.md) · [日本語](../../ja-JP/docs/principles.md) · [Español](../../es-ES/docs/principles.md) · [Português (Brasil)](../../pt-BR/docs/principles.md) · [Русский](../../ru-RU/docs/principles.md) · [Deutsch](../../de-DE/docs/principles.md) · **Français** · [Italiano](../../it-IT/docs/principles.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="principles"></a>

# Principes

OpenNavo les applications gèrent les choses dont les gens se soucient sur leur propre ordinateur: ce qui est installé, ce qui fonctionne à la connexion, ce qui
L'interface doit se sentir calme et digne de confiance avant qu'elle ne se sente intelligente.
Ces principes déterminent les compromis; le reste des spécifications les applique.

<a id="1-content-first-chrome-recedes"></a>

## 1. Le contenu d'abord, les reculs de chrome

Les surfaces sont presque neutres et marchent de petites quantités; les bordures sont des lignes de cheveux.
accent de marque pour la seule chose à faire ensuite, couleurs de statut pour l'état — jamais pour la décoration.
fond coloré à regarder fini, la hiérarchie est fausse.

- Deux thèmes, tous deux de première classe. Dark est l'aspect par défaut de la marque; la lumière n'est pas un filtre sur elle.
  token porte une valeur pour chaque thème, et les deux sont vérifiés pour le contraste dans IC ([Couleur](color.md)).
- Les glows et les dégradés sont autorisés en deux endroits exactement : les héros et la marque. Ils sont plus doux dans la lumière
  mode.

<a id="2-say-what-will-happen-then-do-exactly-that"></a>

## 2. Dis ce qui va se passer, alors fais exactement ça

Avant que quelque chose ne change la machine de l'utilisateur, l'interface indique l'effet en mots simples et, là où il aide, montre
la commande réelle ou la liste des fichiers. Les boutons nomment l'action ("Désinstaller", "Déplacer vers la corbeille"), pas "OK".
"Rien ne se passe tant que vous n'avez pas confirmé" est une promesse que le code tient.

- Les actions destructives confirment, et par défaut à la variante réversible (Trash avant de supprimer, désactiver avant de supprimer).
- Après l'action, le résultat apparaît là où l'utilisateur l'a commencé, à la fois ([Patterns › Les résultats se règlent à la fois](patterns.md#loading-progress-and-results)).

<a id="3-local-first-and-say-so"></a>

## 3. Local d'abord, et dire ainsi

Les données lues sur la machine de l'utilisateur restent là à moins qu'elles n'en décident autrement.
sensible (utilisation du disque, éléments de démarrage, connexions réseau), une note en une seule ligne indique où les données vont — généralement
« Seulement sur ce Mac ; rien n'est téléchargé ». Quand quelque chose va sur un serveur, la copie nomme le serveur.

<a id="4-stable-under-the-pointer"></a>

## 4. Stable sous le pointeur

La mise en page ne se vide jamais et se recharge pendant que l'utilisateur interagit avec elle.
trier, chercher ou rafraîchir l'arrière-plan conserve le contenu précédent jusqu'à ce que le nouveau contenu soit prêt, et les lignes optionnelles
réserver leur espace. Les squelettes sont pour la première charge d'une vue seulement. Un rafraîchissement échoué conserve le dernier bon contenu
et le dit dans une bannière. Les gens lisent flicker comme "l'application est cassée".

<a id="5-respect-the-platform"></a>

## 5. Respecter la plateforme

- **macOS:** les feux de circulation natifs et le comportement de la barre de titre, les paramètres système liens profonds pour les permissions, les éléments de la barre de menu
  qui se comportent comme le système (images templates, ne jamais activer l'application ou voler le focus), raccourcis clavier
  qui correspondent à la Mac (la recherche de K, les paramètres, Escape se ferme).
- **Site Web :** des pages rapides rendues par le serveur qui peuvent être mises en cache et partagées, donc rien dans le HTML dépend du visiteur;
  Les choix par visiteur (thème, suggestion linguistique, consentement) s'appliquent dans le navigateur.
- **Boîtes à outils autochtones** (SwiftUI, Flutter) utiliser les mêmes jetons avec les propres contrôles et police système de la plate-forme.

<a id="6-quiet-by-default"></a>

## 6. Calme par défaut

Utilisez la rétroaction la plus légère qui fait le travail: état en ligne pour les choses qui persistent, un toast pour une action terminée, un
bannière pour une vue dégradée, une boîte de dialogue seulement lorsque l'utilisateur doit décider. Ne jamais interrompre pour des informations. Notifications
à l'extérieur de la fenêtre sont opt-in et dire pourquoi ils sont venus.

<a id="7-one-system-for-every-app"></a>

## 7. Un système pour chaque application

Jetons, pas de valeurs: pas de couleurs codées en dur, de rayons ou de durées dans le code de l'application.
est la seule partie qu'une application de frères et sœurs change ([Marque](brand.md)). Lorsqu'une conception a besoin de quelque chose que le système manque, l'ajouter à
le système d'abord.

<a id="8-accessible-by-construction"></a>

## 8. Accessible par la construction

Le texte se réunit WCAG 2.2 AA (4.5:1) dans les deux thèmes, graphiques et indicateurs de focalisation 3:1. Tout fonctionne à partir du clavier
avec un anneau de mise au point visible. Motion respecte "réduire le mouvement". Les composants portent leurs rôles ARIA afin que les applications ne doivent pas
se souvenir d'eux ([Accessibilité](accessibility.md)).

<a id="9-every-language-fits"></a>

## 9. Chaque langue correspond

L'interface est disponible en dix langues. Les mises en page sont conçues pour le plus long label (russe et allemand tourner 30 à 60%
plus long que l'anglais; le chinois et le japonais sont plus courts mais plus grands), les nombres et les dates sont formatés par localité, et
rien n'est concaténé à partir de fragments ([Contenu](content.md)).

<a id="rules-that-settle-arguments"></a>

## Règles qui règlent les arguments

1. **Jeton, pas valeur.** Si une valeur est manquante, ajoutez un jeton avec les deux valeurs du thème.
2. **Même valeur sombre, travail différent → Jetons différents.** Remplissage de Hover, panneau flottant et segment sélectionné tout look
   `#262626` en mode sombre mais nécessitant des valeurs de lumière différentes (`surface.raised`, `surface.popover`,
   `component.segmentActive`). Diviser les rôles tôt.
3. **Une action primaire par région.** Les actions secondaires sont des boutons secondaires ou fantômes; les actions destructrices sont
   boutons de danger et ne sont jamais la mise au point par défaut.
4. **Les contrôles d'icônes seulement ont besoin d'une étiquette** (`aria-label` et un tooltip) et doit être reconnaissable icônes.
5. **Une charge échouée ne vide jamais l'écran** C'était content.
6. **Si elle change la machine, elle le confirme ou peut être annulée** — de préférence les deux.
