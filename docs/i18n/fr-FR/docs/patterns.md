[English](../../../patterns.md) · [简体中文](../../zh-CN/docs/patterns.md) · [繁體中文](../../zh-Hant/docs/patterns.md) · [日本語](../../ja-JP/docs/patterns.md) · [Español](../../es-ES/docs/patterns.md) · [Português (Brasil)](../../pt-BR/docs/patterns.md) · [Русский](../../ru-RU/docs/patterns.md) · [Deutsch](../../de-DE/docs/patterns.md) · **Français** · [Italiano](../../it-IT/docs/patterns.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="patterns"></a>

# Modèles

Comment les composants se combinent en écrans. Chaque modèle nomme les composants qu'il utilise; leurs détails sont dans
[Composantes](components.md).

<a id="navigation"></a>

## Navigation

- **Barre latérale** (`OnSidebar`, `OnNavItem`) : la marque, puis les groupes avec un `text-label` titre (Parcourir, Listes, Outils,
  Mine ...), puis paramètres épinglés au bas. L'élément actuel utilise `component.navActive` et `aria-current="page"`.
  Les comtes s'assoient à droite `text-ink-tertiary`; un compte qui a besoin d'attention devient un insigne de corail ; un point marque
  "quelque chose de nouveau" sans numéro.
- **Barre d'outils** (`OnToolbar`): retour/avant et recharge à gauche dans les applications de bureau (le navigateur les fournit sur le
  web), le déclencheur de recherche avec son `⌘K` conseils à droite, puis commutateurs globaux (thème, langage sur le web).
- **Palette des commandes** (`OnCommandPalette`, `⌘K` / `Ctrl K`): actions et destinations d'abord, avec
  "Voir tous les résultats pour -q-q" comme la première ligne (Enter ouvre la page des résultats complète); éléments ci-dessous.
  s'ouvre, Escape ferme et retourne la concentration.
- **Onglets** (`OnTabs`) Changer de vue d'un objet (un aperçu d'application, versions, dépendances, détails) et sont des liens
  lorsque chaque vue a sa propre URL. **Contrôles segmentés** (`OnSegmented`) les modes de filtre ou de commutation à l'intérieur d'une vue (période,
  trier, "Tout / Succès / Échec").
- **Fil d'Ariane** (`OnBreadcrumb`) apparaissent sur les pages de détail d'une liste.
- Chaque vue a une URL (itinéraires de bureau inclus) donc des liens profonds, back/forward et restaurer le travail.

<a id="page-anatomy"></a>

## Anatomie des pages

1. En-tête de page (`OnPageHeader`): `text-title1` titre, une ligne de texte secondaire avec le fait clé (comptes, dernier
   check), actions de page alignées à droite (dernier primaire).
2. bannière optionnelle pour état dégradé (hors ligne, défaillance partielle) directement sous l'en-tête.
3. Sections (`OnSectionHeader`): `text-headline` titre, un court sous-titre tertiaire, "Voir tous →" sur la droite.
4. Le rail (`OnRailPanel`, `OnRailSection`) comporte des résumés et des actions secondaires; rien dans le rail n'est nécessaire
   pour terminer une tâche dans la colonne principale.

<a id="lists-cards-and-tables"></a>

## Listes, cartes et tableaux

- **Cartes** pour la navigation (icône, nom, résumé d'une ligne, deux ou trois statistiques, une action). La carte entière est le lien;
  le bouton d'action à l'intérieur arrête la propagation.
- **Lignes** pour les listes denses sur lesquelles vous agissez (mises à jour, historique, applications installées): icône, nom et méta à gauche, puces d'état
  au milieu, actions droit; actions destructrices vivent dans le menu de la ligne -.
- **Tableaux** (`OnTable`) lorsque les colonnes sont comparées ou triées; colonnes numériques alignées à droite `tabular-nums`;
  sélection des cases dans la première colonne; un en-tête collant dans les tables longues.
- Paginer les longues listes (`OnPagination`) plutôt que défilement infini, donc la position est linkable et stable.
- **Le affinage conserve le contenu :** pendant qu'une requête, trier, filtrer ou modifier une page, continuer à afficher les résultats précédents (dimm.
  Si nécessaire) jusqu'à ce que les nouveaux arrivent; réservez de l'espace pour les lignes de comptage optionnelles, donc rien ne se déplace.

<a id="search"></a>

## Rechercher

- Le déclencheur de la barre d'outils ouvre la palette; une page de recherche affiche des résultats complets avec des filtres comme des commandes segmentées ou
  Des jetons.
- Mise à jour des résultats en tant que types d'utilisateur sans compensation entre les deux; "Pas de résultats pour --q--" est livré avec un indice concret
  (autre orthographe, le nom anglais, une source différente).

<a id="settings-and-forms"></a>

## Paramètres et formulaires

- Les paramètres sont regroupés en cartes de lignes (`SettingRow` modèle): étiquette et en option une ligne de conseils sur la gauche, la
  contrôle à droite, lignes séparées par `border.subtle`.
- **Les modifications s'appliquent immédiatement** — toggles, commandes segmentées, menus. Il n'y a pas de bouton Enregistrer dans les paramètres; un changement
  qui échoue revient et dit pourquoi dans un toast.
- Choisissez le contrôle par le nombre d'options : un basculement pour on/off, un contrôle segmenté pour deux à quatre exclusivités
  options, un menu pour les listes plus longues (langue) avec le choix actuel vérifié.
- Entrées texte valider sur flou ou soumettre, jamais sur chaque frappe; erreurs apparaissent sous le champ dans
  `text-status-danger` avec la correction ("Utilisez une adresse https:// complète"), et le champ conserve sa valeur.
- Les formulaires sur le web sont une colonne avec des étiquettes au-dessus des champs; le bouton de soumission est désactivé jusqu'à ce que les champs requis soient
  valide, avec un indice qui dit ce qui manque.

<a id="feedback"></a>

## Commentaires

| Situation actuelle                                            | Utilisation                                                                                                        |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Une action terminée (copiée, ajoutée, installée)              | Toast, success ou neutre, rejette après 4 s, s'arrête sur le vol stationnaire                                      |
| Une action a échoué                                           | Toast avec la raison et, lorsque c'est possible, une action (Réessayer, Afficher le journal)                       |
| Une vue est dégradée (données hors ligne, données partielles) | Bannière sous l'en-tête qui dit ce qui fonctionne encore                                                           |
| Une décision est nécessaire                                   | Boîte de dialogue (`OnConfirm`, `OnModal`)                                                                         |
| Une longue tâche est en cours                                 | Progrès en place (ligne, carte ou panneau de tâches) et dans la barre de menus si elle se poursuit en arrière-plan |
| Quelque chose est arrivé pendant que la fenêtre était fermée. | Un système de notification, seulement si l'utilisateur les a activés                                               |

Au plus trois toasts sont visibles; les échecs sont annoncés immédiatement aux lecteurs d'écran (`role="alert"`), autres
poliment.

<a id="destructive-and-system-changing-actions"></a>

## Actions destructives et de changement de système

1. Dites ce qui va se passer, avec la liste de ce qui sera supprimé ou changé et sa taille.
2. Défaut de l'option réversible : passer à la corbeille, désactiver un élément de connexion plutôt que de le supprimer, garder un retour en arrière.
3. Le bouton de confirmation nomme l'action ("Désinstaller", "Déplacer 14 éléments dans la corbeille") et utilise la variante de danger; Annuler est
   la mise au point par défaut.
4. Après l'action: le résultat en place à la fois, un toast avec Undo lorsque l'annulation est possible, et une entrée dans le
   l'histoire.
5. Les actions qui ont besoin des droits d'administrateur le disent avant qu'ils ne commencent; le mot de passe invite à nommer ce qu'il est pour.

<a id="loading-progress-and-results"></a>

## Chargement, progrès et résultats

- Première charge d'une vue: squelettes (`OnSkeleton`) en forme de contenu, pas de spinners sur des pages entières.
- Rafraîchir, affiner, recharger le fond : garder le contenu actuel ; un petit indice de progrès au maximum.
- Les longues tâches montrent une progression déterminée dès qu'un nombre existe (octets, items), avec l'étape actuelle en mots,
  et peut être annulé lors de l'annulation est sûr.
- **Les résultats se règlent à la fois:** quand une tâche se termine, chaque endroit qui affiche l'objet (ligne, page de détail, barre latérale)
  count, menu bar) mises à jour immédiatement à partir du résultat de la tâche, pas après la prochaine mise à jour périodique.

<a id="empty-error-and-offline-states"></a>

## Vide, erreur et états hors ligne

- **Vide** (`OnEmpty`) : une icône, un titre abrégé (« Votre liste est vide »), une phrase qui dit comment la remplir, et
  l'action quand il y en a une.
- **Erreur** (`OnErrorState`): ce qui a échoué en mots clairs, Retry, et aucune trace de pile; un rafraîchissement échoué d'une vue qui
  le contenu a affiché une bannière à la place et conserve le contenu.
- **Hors ligne** (`OnOffline`) : le contenu mis en cache reste utilisable ; les fonctionnalités qui ont besoin du réseau le disent où ils le feraient
  apparaissent.

<a id="permissions"></a>

## Autorisations

- Demandez au moment du besoin, avec une phrase de pourquoi et ce qui reste privé.
- "Activable" ouvre le panneau de configuration du système exact; un petit guide flottant montre ce qu'il faut faire glisser ou basculer, sans prendre
  focus depuis les paramètres du système.
- Lorsque l'utilisateur retourne, la vue re-vérifie et continue par lui-même ; si macOS demande une relance, dit la vue
  et l'offre.
- Ne jamais raccrocher : une permission refusée laisse une rangée tranquille avec Activer, pas de dialogues répétés.

<a id="menu-bar-items-and-popovers-macos"></a>

## Les éléments de la barre de menu et les popovers (macOS)

- Les éléments de la barre de menus sont des images de modèles dessinées comme des éléments système; le texte et les graphiques suivent le style de la barre de menus du système.
- Cliquer sur un élément ouvre son popover sous celui-ci; cliquer à nouveau ou n'importe où d'autre le ferme. Popovers ne jamais activer le
  fenêtre principale ou vol focus de l'application dans laquelle l'utilisateur est.
- Les popovers sont des cartes compactes (`surface.card`, `rounded-panel`) avec les trois à cinq rangées les plus utiles, une primaire
  action et un lien qui ouvre la vue complète dans la fenêtre principale.

<a id="onboarding"></a>

## à bord

Un seul écran de liste de contrôle : chaque exigence est une ligne avec une icône d'état, ce qu'elle est et une action de correction; la principale
Le bouton "Démarrer" permet lorsque les lignes requises passent, avec une phrase indiquant ce qui manque encore. Facultatif
Les étapes sont jackpable et joignable plus tard dans Paramètres.

<a id="website-specifics"></a>

## Spécificités du site

- Le site ne demande jamais de compte. Les choix par visiteur (thème, consentement, suggestion de langue, listes sauvegardées) vivent dans
  le navigateur.
- Les liens "Ouvrir dans l'application" demandent à l'application de bureau de montrer ce qu'elle ferait; l'application demande toujours confirmation avant
  exécuter tout ce qu'une page web demande.
- Une suggestion linguistique apparaît une fois, dédaignable, et ne se redirige jamais seule.
