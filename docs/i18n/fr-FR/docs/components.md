[English](../../../components.md) · [简体中文](../../zh-CN/docs/components.md) · [繁體中文](../../zh-Hant/docs/components.md) · [日本語](../../ja-JP/docs/components.md) · [Español](../../es-ES/docs/components.md) · [Português (Brasil)](../../pt-BR/docs/components.md) · [Русский](../../ru-RU/docs/components.md) · [Deutsch](../../de-DE/docs/components.md) · **Français** · [Italiano](../../it-IT/docs/components.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="components"></a>

# Composantes

Référence pour chaque composant dans [`@opennavo/design-vue`](../../../../packages/vue): ce qu'il est pour, ses accessoires, événements et
slots (tel que déclaré dans la source), variantes, quand l'utiliser, et comment il se comporte pour le clavier et la technologie d'assistance.
Comment les composants se combinent en écrans est dans [Modèles](patterns.md); la galerie (`pnpm gallery`) montre chaque
variante dans les deux thèmes et les dix langues. Apps qui n'utilisent pas Vue suivre les mêmes anatomies, tailles et états
avec les jetons directement ([Plateformes](platforms.md)).

Conventions:

- **Par défaut** `—` signifie que le prop est optionnel et non défini; les prop booléen sans valeur par défaut sont `false`.
- Les chaînes intégrées ("Fermer", "Pagination", "Rechercher"...) proviennent du catalogue des messages du paquet dans la localité
  données à `createOnUi({ locale })` (anglais sinon). Props nommés `label`, `placeholder`, `title`,
  `description`, `…Label` les remplacer.
- **Icônes** sont Lucide noms (`search`, `lucide:search`) ou `prefix:name` d'un ensemble ajouté avec `registerIcons`.
- **Liens:** composants qui rendent les liens prendre `linkAs` (`'a'` par défaut, ou `RouterLink` / `NuxtLink`) . Avec un
  le composant routeur l'URL est passé comme `to`; composants ne lisent jamais l'itinéraire actuel — passer `active`,
  `modelValue` ou `page` toi-même.
- **Bague de mise au point:** chaque partie interactive montre `shadow-focus-ring` le `:focus-visible`. Les superpositions déplacent la concentration avec
  `moveFocus`, qui sonne la mise au point du script seulement après la navigation du clavier (WebKit serait autrement sonner sur
  l ' accent sur les programmes).
- Les couleurs, les rayons et le type proviennent `@opennavo/design-tokens`; rien ici ne code une couleur, donc les deux thèmes et un
  L'accent rebaptisé s'applique automatiquement.

**Groupes:** [Actions et apports](#actions-and-inputs) · [Conteneurs et données](#containers-and-data) ·
[États](#states) · [Superpositions](#overlays) · [Mise en page et navigation](#layout-and-navigation) ·
[Afficher](#showcase)

---

<a id="actions-and-inputs"></a>

## Actions et apports

<a id="onbutton"></a>

### OnButton

Le bouton standard, ou un lien qui ressemble à un.

| Prop            | Type                                                          | Par défaut    | Désignation des marchandises                                                                          |
| --------------- | ------------------------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------- |
| `variant`       | `'primary' \| 'secondary' \| 'accent' \| 'ghost' \| 'danger'` | `'secondary'` | Poids visuel; voir Variantes.                                                                         |
| `size`          | `'xs' \| 'sm' \| 'md' \| 'lg'`                                | `'md'`        | Hauteurs 26 / 28 / 34 / 40.                                                                           |
| `shape`         | `'default' \| 'round'`                                        | `'default'`   | `round` donne une forme de pilule.                                                                    |
| `icon`          | `string`                                                      | —             | Icône avant le texte (14 px en xs/sm, 15 px en md/lg).                                                |
| `iconOnly`      | `boolean`                                                     | —             | bouton carré montrant seulement l'icône; la fente par défaut n'est pas rendue. Nécessite `ariaLabel`. |
| `ariaLabel`     | `string`                                                      | —             | Nom accessible; obligatoire pour les boutons iconiques.                                               |
| `loading`       | `boolean`                                                     | —             | Affiche un spinner au lieu de l'icône, set `aria-busy`, et désactive le bouton.                       |
| `disabled`      | `boolean`                                                     | —             | Look désactivé; les clics sont ignorés.                                                               |
| `block`         | `boolean`                                                     | —             | Remplissez la largeur disponible.                                                                     |
| `type`          | `'button' \| 'submit' \| 'reset'`                             | `'button'`    | Type de bouton natif (boutons seulement).                                                             |
| `href`          | `string`                                                      | —             | Rendre un lien au lieu d'un bouton.                                                                   |
| `target`, `rel` | `string`                                                      | —             | Passé au lien.                                                                                        |
| `linkAs`        | `string \| Component`                                         | `'a'`         | Composant de liaison; `href` est passé comme `to` pour les composants du routeur.                     |

| Événement | Charge utile          | Désignation des marchandises               |
| --------- | --------------------- | ------------------------------------------ |
| `click`   | `[event: MouseEvent]` | Non émis en cas de panne ou de chargement. |

| Fente     | Désignation des marchandises |
| --------- | ---------------------------- |
| `default` | L'étiquette.                 |

**Variantes.** `primary` (inversé, un par zone), `secondary` (par défaut), `accent` (couleur de la marque, pour la seule action
qui devrait se démarquer), `ghost` (souligné, pour les actions à faible accentuation et les barres d'outils), `danger` (coloration rouge, destructive).
Les boutons désactivés et de chargement de chaque variante partagent un style muet.

**Utilisation** pour les actions. Pour la navigation sous forme de passe-bouton `href`. N'utilisez pas de bouton pour les paramètres d'activation/arrêt
(`OnToggle`) ou pour choisir une des quelques options (`OnSegmented`).

**Accessibilité.** Un natif `<button>` (comportement du clavier et de la forme inclus) ou un lien.
handicapés; un lien handicapé perd `href` (ou, avec un composant de routeur, conserve `to`, obtient `aria-disabled="true"` et
son clic est empêché). Les boutons Icon-only doivent avoir `ariaLabel`; ajouter un `OnTooltip` pour les utilisateurs repérés.

<a id="onicon"></a>

### OnIcon

Une icône SVG en ligne à partir des ensembles groupés ou enregistrés.

| Prop    | Type     | Par défaut | Désignation des marchandises                                                      |
| ------- | -------- | ---------- | --------------------------------------------------------------------------------- |
| `name`  | `string` | requis     | Lucide nom (`search`, `lucide:search`) ou `prefix:name` d'un ensemble enregistré. |
| `size`  | `number` | `16`       | Taille du pixel : 12 badges, 14 boutons, 16 par défaut, 17 sidebar, 18 palettes.  |
| `label` | `string` | —          | Fait de l'icône une image (`role="img"`, `aria-label`); sinon il est décoratif.   |

La largeur de l'appareil est de 2 sous 16 px et 1,6 sinon. `currentColor`. Les noms inconnus rendent un SVG vide et
avertissement dans le développement. Rendu est synchrone, donc des icônes apparaissent dans le serveur rendu HTML.

**Accessibilité.** Décoratif par défaut (`aria-hidden="true"`). Donner `label` seulement aux icônes qui portent un sens sur leur
propre; à côté du texte, laissez-le dehors.

<a id="onchip"></a>

### OnChip

Une étiquette courte pour un type ou un état ("App", "Mise à jour disponible", "Déprécié").

| Prop      | Type                                                                                            | Par défaut  | Désignation des marchandises                                                                                                          |
| --------- | ----------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `tone`    | `'neutral' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'accent' \| 'coral' \| 'outline'` | `'neutral'` | `accent` (salmon) pour les mises à jour, `coral` pour progrès, `outline` pour les notes neutres telles que la traduction automatique. |
| `outline` | `boolean`                                                                                       | —           | Grandeur au lieu de remplir; combinaison avec n'importe quelle tonalité (p. ex. désactivé = `danger` + esquisse).                     |
| `dot`     | `boolean`                                                                                       | —           | Diriger 6 points px dans la couleur du texte.                                                                                         |
| `icon`    | `string`                                                                                        | —           | En tête de l'icône de 12 px.                                                                                                          |
| `size`    | `'sm' \| 'md'`                                                                                  | `'sm'`      | Hauteurs 20 / 24.                                                                                                                     |

| Fente     | Désignation des marchandises |
| --------- | ---------------------------- |
| `default` | Le texte.                    |

**Utilisation** pour le statut et les métadonnées. Toujours dire l'état en mots; la couleur ne prend en charge que celui-ci.
Utilisation de choix `OnSegmented`; pour compter sur l'utilisation de la navigation `OnBadge`.

**Accessibilité.** Texte simple en ligne; le point et l'icône sont décoratifs.

<a id="onbadge"></a>

### OnBadge

Un nombre de coraux ("6", "99+") ou une petite étiquette en surbrillance ("Fait cette semaine").

| Prop    | Type     | Par défaut | Désignation des marchandises                                               |
| ------- | -------- | ---------- | -------------------------------------------------------------------------- |
| `count` | `number` | —          | Fait un badge de compte; sans lui, le badge affiche sa fente comme texte.  |
| `max`   | `number` | `99`       | Les chiffres au-dessus montrent `max+`.                                    |
| `label` | `string` | —          | Nom accessible d'un badge de comptage, p.ex. «6 mises à jour disponibles». |

| Fente        | Désignation des marchandises                                                                                          |
| ------------ | --------------------------------------------------------------------------------------------------------------------- |
| `default`    | Texte d'un badge texte.                                                                                               |
| `decoration` | Une petite marque après le texte (environ 13 px, `currentColor`), par exemple une étoile ou une marque d'application. |

**Utilisation** compter les badges pour les choses qui nécessitent une attention particulière (mises à jour); `OnNavItem` et `OnSidebar` les utiliser à travers
leurs `badge` prop. Utilisez des badges texte pour les moments forts de la rédaction. `OnChip`.

**Accessibilité.** Un nombre nu signifie peu pour un lecteur d'écran; passer `label` pour les badges de compte.

<a id="ontoggle"></a>

### OnToggle

Un interrupteur marche/arrêt pour les réglages qui s'appliquent immédiatement.

| Prop             | Type      | Par défaut | Désignation des marchandises                                               |
| ---------------- | --------- | ---------- | -------------------------------------------------------------------------- |
| `modelValue`     | `boolean` | requis     | En marche ou en arrêt (`v-model`).                                         |
| `disabled`       | `boolean` | —          | Non modifiable; diminué.                                                   |
| `ariaLabel`      | `string`  | —          | Nom accessible lorsqu'il n'y a pas d'étiquette visible.                    |
| `ariaLabelledby` | `string`  | —          | ID de l'étiquette visible, par exemple le texte de la ligne de paramètres. |

| Événement           | Charge utile       | Désignation des marchandises |
| ------------------- | ------------------ | ---------------------------- |
| `update:modelValue` | `[value: boolean]` | Le nouvel État.              |

**Utilisation** dans les rangées de réglages avec l'étiquette à gauche et l'interrupteur à droite. Pour les choix qui s'appliquent seulement après
"Enregistrer", ou dans une liste d'éléments à utiliser `OnCheckbox`.

**Accessibilité.** A `<button role="switch">` avec `aria-checked`; Espace et Entrée pour le basculer. Nommer avec
`ariaLabelledby` (préféré, points sur l'étiquette visible) ou `ariaLabel`.

<a id="oncheckbox"></a>

### OnCheckbox

Cochez une case avec une étiquette en option, des états mélangés et verrouillés.

| Prop            | Type      | Par défaut | Désignation des marchandises                                                                                                              |
| --------------- | --------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `modelValue`    | `boolean` | requis     | Coché (`v-model`).                                                                                                                        |
| `indeterminate` | `boolean` | —          | Certains enfants sélectionnés (en-tête de table ou de groupe); en cliquant sur sélectionner tout. Ignoré pendant que coché ou verrouillé. |
| `disabled`      | `boolean` | —          | Non modifiable; diminué.                                                                                                                  |
| `locked`        | `boolean` | —          | Toujours inclus et inchangable, p. ex. un élément requis d'un plan de retrait: montré vérifié et grisé.                                   |
| `ariaLabel`     | `string`  | —          | Nom accessible lorsque la fente par défaut n'a pas d'étiquette visible.                                                                   |
| `title`         | `string`  | —          | Un indice de vol stationnaire, par exemple pourquoi la boîte est désactivée.                                                              |

| Événement           | Charge utile       | Désignation des marchandises |
| ------------------- | ------------------ | ---------------------------- |
| `update:modelValue` | `[value: boolean]` | Le nouvel état vérifié.      |

| Fente     | Désignation des marchandises                     |
| --------- | ------------------------------------------------ |
| `default` | L'étiquette visible, à l'intérieur de `<label>`. |

**Utilisation** pour sélectionner des éléments pour une action ultérieure (listes, tableaux, plans de suppression) et pour les options confirmées par un bouton.
Pour les paramètres instantanés `OnToggle`.

**Accessibilité.** Une case à cocher native dans une `<label>`, donc le texte de l'étiquette est son nom et en cliquant sur lui bascule.
L'état mixte est défini comme le DOM `indeterminate` biens et `aria-checked="mixed"`. Les boîtes verrouillées sont désactivées
et coché. Cliquer sur s'arrêter à l'étiquette pour qu'une ligne de table ou un en-tête de groupe environnant ne réagit pas non plus.

<a id="onsegmented"></a>

### OnSegmented

Un contrôle segmenté : choisissez l'une des deux à cinq options, comme un filtre de vue ou une plage de temps.

| Prop         | Type                              | Par défaut | Désignation des marchandises                                                                                                                                             |
| ------------ | --------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `modelValue` | `T extends string`                | requis     | Valeur de l'option sélectionnée (`v-model`).                                                                                                                             |
| `options`    | `readonly OnSegmentedOption<T>[]` | requis     | `{ value, label, count?, dots? }`; `dots` sont des noms de variables symboliques (p. ex. `chart-series1`) dessinés comme des petits points de couleur avant l'étiquette. |
| `size`       | `'sm' \| 'md'`                    | `'md'`     | Hauteurs de l'option 24 / 28.                                                                                                                                            |
| `ariaLabel`  | `string`                          | —          | Nom accessible du groupe.                                                                                                                                                |

| Événement           | Charge utile | Désignation des marchandises             |
| ------------------- | ------------ | ---------------------------------------- |
| `update:modelValue` | `[value: T]` | Émis seulement lorsque la valeur change. |

**Utilisation** pour des vues mutuellement exclusives du même contenu. Pour la navigation entre les pages utiliser `OnTabs`; pour beaucoup
Les options utilisent un menu.

**Accessibilité.** `role="radiogroup"` avec `role="radio"` boutons et `aria-checked`. Seule l'option sélectionnée est
dans l'ordre de l'onglet; les touches fléchées se déplacent et selectionnent (enveloppage), Accueil et Fin sautent aux extrémités.

<a id="ontabs"></a>

### OnTabs

Onglet, soit en changeant de panneau sur la même page, soit en se reliant à des pages séparées.

| Prop         | Type                      | Par défaut | Désignation des marchandises                                |
| ------------ | ------------------------- | ---------- | ----------------------------------------------------------- |
| `modelValue` | `T extends string`        | requis     | Valeur de l'onglet actuel.                                  |
| `items`      | `readonly OnTabItem<T>[]` | requis     | `{ value, label, count?, disabled?, href?, controls? }`.    |
| `ariaLabel`  | `string`                  | —          | Nom accessible de la liste des onglets ou de la navigation. |
| `linkAs`     | `string \| Component`     | `'a'`      | Composant de liaison en mode lien.                          |

| Événement           | Charge utile | Désignation des marchandises                                           |
| ------------------- | ------------ | ---------------------------------------------------------------------- |
| `update:modelValue` | `[value: T]` | Cliquez (ou touche flèche en mode tablist) sur un autre onglet activé. |

**Variantes.** Mode de liste (aucun élément n'a `href`): panneaux de même page. Lien mode (tout élément a `href`) : chaque onglet est un
link to its own URL, p.ex. les moteurs de recherche indexent chaque onglet. L'onglet actif a un indicateur de soulignement; `count`
montre un petit nombre après l'étiquette.

**Utilisation** pour les vues de frères et sœurs d'un sujet. Pour les filtres d'une liste d'utilisation `OnSegmented`.

**Accessibilité.** Mode de l'onglet & #160;: `role="tablist"` / `role="tab"` avec `aria-selected`, mise au point de l'onglet itinérant, touches fléchées
(décrochage des onglets désactivés), Accueil et fin; ensemble `controls` à l'identifiant du panneau pour `aria-controls` et donner le panneau
`role="tabpanel"`. Mode de liaison : a `<nav>` des liens avec `aria-current="page"` sur le actif; les articles handicapés sont
non lié `<span aria-disabled="true">`.

<a id="onsearchfield"></a>

### OnSearchField

Un champ texte pour la recherche et le filtrage, avec bouton clair et indice de raccourci.

| Prop          | Type      | Par défaut | Désignation des marchandises                                                                 |
| ------------- | --------- | ---------- | -------------------------------------------------------------------------------------------- |
| `modelValue`  | `string`  | requis     | La requête (`v-model`).                                                                      |
| `placeholder` | `string`  | —          | Texte du titulaire de place.                                                                 |
| `ariaLabel`   | `string`  | —          | Nom accessible; par défaut au détenteur du lieu.                                             |
| `shortcut`    | `string`  | —          | Conseil sur la droite, p. ex. `⌘K`; remplacé par le bouton clair pendant qu'il y a du texte. |
| `clearable`   | `boolean` | `true`     | Afficher un bouton clair quand il y a du texte.                                              |
| `disabled`    | `boolean` | —          | Non modifiable; diminué.                                                                     |

| Événement           | Charge utile      | Désignation des marchandises                                           |
| ------------------- | ----------------- | ---------------------------------------------------------------------- |
| `update:modelValue` | `[value: string]` | Chaque entrée.                                                         |
| `submit`            | `[value: string]` | Entrez (pas pendant qu'une méthode d'entrée est en train de composer). |
| `clear`             | `[]`              | Effacer le bouton ou Échapper avec du texte.                           |

Exposé : `focus()`, `blur()`.

**Utilisation** Pour ouvrir une palette de commandes depuis une barre d'outils, utilisez le bouton de recherche
des `OnToolbar` / `OnTopNav` plutôt.

**Accessibilité.** Un natif `type="search"` entrée nommée par `ariaLabel` ou le détenteur de place. Échapper efface un non-vide
champ et s'arrête là ; sur un champ vide il bulle (pour qu'il puisse fermer une boîte de dialogue environnante).
étiqueté « Effacer » dans la langue courante et renvoie le focus à l'entrée.

<a id="ontooltip"></a>

### OnTooltip

Une courte description qui apparaît sur le vol stationnaire et le clavier focus.

| Prop        | Type                                     | Par défaut | Désignation des marchandises                                                                                                                                                                                                                                              |
| ----------- | ---------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content`   | `string`                                 | requis     | Le texte ; le contenu vide désactive l'infobulle.                                                                                                                                                                                                                         |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`    | Côté préféré; retourne quand il n'y a pas de place et reste à l'intérieur du port de vue.                                                                                                                                                                                 |
| `delay`     | `number`                                 | `400`      | Afficher le retard en millisecondes.                                                                                                                                                                                                                                      |
| `disabled`  | `boolean`                                | —          | Ne jamais montrer.                                                                                                                                                                                                                                                        |
| `lazy`      | `boolean`                                | —          | Renvoyez l'infobulle seulement une fois que le déclencheur est utilisé, et sans `aria-describedby`. Pour les déclencheurs décoratifs dont l'information est de toute façon sur la page (barres de cartes avec une table cachée); le maintient hors de serveur rendu HTML. |

| Fente     | Désignation des marchandises                                     |
| --------- | ---------------------------------------------------------------- |
| `default` | Le déclencheur ; son premier élément obtient `aria-describedby`. |

Attributs (`class`, `style`) aller à l'emballage `<span>`. Le bout d'outils est téléporté à `<body>` et positionnés
`fixed`, donc les conteneurs défilement ne le clip; il se cache sur défilement et redimensionner.

**Utilisation** pour les boutons icon-only et le texte tronqué. Ne jamais mettre les informations essentielles ou le contenu interactif dans un tooltip.

**Accessibilité.** `role="tooltip"`, lié à partir du déclencheur avec `aria-describedby` (à moins `lazy`, désactivé ou vide).
Il s'ouvre sur le focus ainsi que sur le vol stationnaire, et Escape le ferme (WCAG 1.4.13).

<a id="onmenu"></a>

### OnMenu

Un menu d'action derrière un bouton, comme « Plus d'actions » ou un menu tri/choix.

| Prop      | Type                    | Par défaut    | Désignation des marchandises                                                  |
| --------- | ----------------------- | ------------- | ----------------------------------------------------------------------------- |
| `items`   | `readonly OnMenuItem[]` | requis        | `{ key, label, icon?, shortcut?, danger?, disabled?, separator?, checked? }`. |
| `label`   | `string`                | —             | Nom accessible du déclencheur et du menu; par défaut, "Plus d'actions".       |
| `icon`    | `string`                | `'ellipsis'`  | Icône du déclencheur par défaut.                                              |
| `variant` | `OnButtonVariant`       | `'secondary'` | Variante du déclencheur par défaut.                                           |
| `size`    | `OnButtonSize`          | `'md'`        | Taille du déclencheur par défaut.                                             |
| `align`   | `'start' \| 'end'`      | `'end'`       | De quel côté du déclencheur le menu s'aligne.                                 |

| Événement | Charge utile    | Désignation des marchandises                                                          |
| --------- | --------------- | ------------------------------------------------------------------------------------- |
| `select`  | `[key: string]` | Un élément activé a été choisi; le menu se ferme et le focus retourne au déclencheur. |

| Fente     | Signature                                                               | Désignation des marchandises                                                                             |
| --------- | ----------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `trigger` | `(props: { open: boolean; attrs: Record<string, unknown> }) => unknown` | Un déclencheur personnalisé; lier `attrs` (ARIA, cliquez et les gestionnaires de clés) sur votre bouton. |

Points : `danger` dessine le texte rouge, `separator` ajoute un diviseur avant le point, `shortcut` montre un indice sur la droite,
`checked` (toute valeur définie) transforme l'élément en un choix : `true` montre une marque de contrôle.

**Utilisation** pour les actions secondaires d'une ligne ou d'une page et pour le choix d'une option (ordre de tri, langue).
action sur un bouton visible.

**Accessibilité.** Déclencheur : `aria-haspopup="menu"`, `aria-expanded`, `aria-controls`; ArrowDown ou ArrowUp s'ouvre
le premier ou dernier élément. Un pointeur ouvre le menu sans présélectionner un élément ; un clavier ouvert focalise le premier.
Menu & #160;: `role="menu"` avec `menuitem` ou `menuitemradio` (`aria-checked`) éléments en dehors de l'ordre de l'onglet; touches fléchées
cycle (détection de l'encastrement), saut à domicile et à l'extrémité, évasion et onglet fermez-le et retournez la mise au point au déclencheur.
redimensionnement ou défilement ferme le. Le menu est téléporté à `<body>`, s'ouvre vers le haut quand il n'y a pas de place en dessous.

---

<a id="containers-and-data"></a>

## Conteneurs et données

<a id="oncard"></a>

### OnCard

Une surface bordée qui regroupe le contenu connexe; optionnellement un lien ou un bouton.

| Prop          | Type                                                         | Par défaut | Désignation des marchandises                                                       |
| ------------- | ------------------------------------------------------------ | ---------- | ---------------------------------------------------------------------------------- |
| `as`          | `'div' \| 'section' \| 'article' \| 'li' \| 'a' \| 'button'` | `'div'`    | Élément rendu (ignoré lorsque `href` est réglé). `button` obtient `type="button"`. |
| `href`        | `string`                                                     | —          | Rendre la carte comme un lien (par `linkAs`).                                      |
| `interactive` | `boolean`                                                    | —          | Déplacez la bordure/le fond, le curseur et l'anneau de mise au point.              |
| `padding`     | `'none' \| 'sm' \| 'md' \| 'lg'`                             | `'md'`     | " 0 / 14 / 16 / 18 px                                                              |
| `linkAs`      | `string \| Component`                                        | `'a'`      | Composant de liaison.                                                              |

| Fente     | Désignation des marchandises |
| --------- | ---------------------------- |
| `default` | Contenu de la carte.         |

**Utilisation** pour le regroupement et pour les liens de carte entière. Les cartes utilisent une bordure et un remplissage, pas d'ombre.
cartes ou mettre plusieurs liens dans une carte qui est lui-même un lien.

**Accessibilité.** Une carte cliquable doit être un véritable lien (`href`) ou bouton (`as="button"`); son texte devient le
nom accessible, donc gardez-le court.

<a id="onstattile"></a>

### OnStatTile

Un numéro marqué avec unité, indice et changement.

| Prop    | Type           | Par défaut | Désignation des marchandises                                                                                                                |
| ------- | -------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `label` | `string`       | requis     | Cas de condamnation sans côlon, par exemple "utilisation du disque".                                                                        |
| `value` | `string`       | requis     | La valeur formatée.                                                                                                                         |
| `unit`  | `string`       | —          | Par exemple, "GB", "il y a dix ans".                                                                                                        |
| `hint`  | `string`       | —          | Troisième ligne.                                                                                                                            |
| `delta` | `OnStatDelta`  | —          | `{ value, direction: 'up' \| 'down', good }`: la flèche indique la direction, `good` cueille vert ou rouge.                                 |
| `size`  | `'sm' \| 'md'` | `'sm'`     | `sm`: une tuile autonome (par exemple une grille de rail 2×2); `md`: une cellule d'une bande de stats dont le conteneur tire les diviseurs. |

**Utilisation** Pour les tableaux de bord et les rails de synthèse. `OnKeyValueList`.

**Accessibilité.** Texte simple dans l'ordre de lecture (étiquette, valeur, unité, changement, indice).
caractère de flèche et une couleur; assurez-vous `delta.value` est logique de lire à haute voix.

<a id="onkeyvaluelist"></a>

### OnKeyValueList

Une liste de deux colonnes de valeurs marquées, p.ex. les détails d'un élément.

| Prop    | Type                        | Par défaut | Désignation des marchandises                                                                                                         |
| ------- | --------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `items` | `readonly OnKeyValueItem[]` | requis     | `{ key, label, value, mono?, href? }`; `mono` pour les identifiants, commandes et chemins; `href` fait de la valeur un lien externe. |

Valeurs tronquées avec une ellipse sur une ligne.

**Accessibilité.** A `<dl>` des `<dt>`/`<dd>` paires. Liens externes ouverts dans un nouvel onglet avec
`rel="noopener noreferrer"` et une icône de flèche.

<a id="ontable"></a>

### OnTable

Une table de données avec affichage de tri, sélection, cellules personnalisées et défilement virtuel.

| Prop             | Type                                 | Par défaut | Désignation des marchandises                                                                                                             |
| ---------------- | ------------------------------------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `columns`        | `readonly OnTableColumn[]`           | requis     | `{ key, label, numeric?, mono?, sortable?, width?, hideLabel? }`.                                                                        |
| `rows`           | `readonly Row[]`                     | requis     | Des lignes, déjà triées par l'hôte.                                                                                                      |
| `rowKey`         | `(row: Row) => string`               | requis     | Clé stable par rangée.                                                                                                                   |
| `cellValue`      | `(row: Row, key: string) => unknown` | —          | Contenu par défaut de la cellule; sinon `row[column.key]`.                                                                               |
| `sort`           | `OnTableSort \| null`                | —          | `{ key, order: 'asc' \| 'desc' }` à afficher; le composant ne trie pas.                                                                  |
| `selectedKey`    | `string \| null`                     | —          | Ligne en évidence (courante).                                                                                                            |
| `dimmed`         | `(row: Row) => boolean`              | —          | Les lignes sont dépouillées (p. ex. dépendances) à 55 % d'opacité.                                                                       |
| `caption`        | `string`                             | —          | Légende de table cachée visuellement.                                                                                                    |
| `height`         | `number`                             | —          | Hauteur fixe en px avec un en-tête collant; au-dessus de 200 lignes seulement les lignes visibles rendent (44 px chacune).               |
| `layout`         | `'auto' \| 'fixed'`                  | —          | `fixed` Honore les largeurs des colonnes et tronque la colonne flexible, de sorte que les tables larges ne défilent jamais latéralement. |
| `selectable`     | `boolean`                            | —          | Colonne principale de la case à cocher; utilisation `v-model:selected`.                                                                  |
| `selected`       | `readonly string[]`                  | —          | Clés de rangée sélectionnées; clés de lignes filtrées `rows` sont gardés.                                                                |
| `canSelect`      | `(row: Row) => boolean`              | —          | Les lignes qui ne peuvent pas être sélectionnées (p. ex., les éléments protégés); toutes par défaut.                                     |
| `selectAllLabel` | `string`                             | —          | Nom accessible de la case en-tête.                                                                                                       |
| `selectRowLabel` | `(row: Row) => string`               | —          | Nom accessible de chaque case à cocher de ligne.                                                                                         |

| Événement         | Charge utile              | Désignation des marchandises                                                                                                                        |
| ----------------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `update:sort`     | `[sort: OnTableSort]`     | Un en-tête triable a été cliqué : la même colonne s'inverse, une nouvelle colonne commence à descendre quand elle est numérique et monte autrement. |
| `update:selected` | `[keys: string[]]`        | La case à cocher change; la case d'en-tête sélectionne ou efface chaque ligne sélectionnable.                                                       |
| `rowClick`        | `[key: string, row: Row]` | Une ligne a été cliqué (clics de case exclus).                                                                                                      |

| Fente        | Signature                                          | Désignation des marchandises                                              |
| ------------ | -------------------------------------------------- | ------------------------------------------------------------------------- |
| `cell-{key}` | `(props: { row: Row; value: unknown }) => unknown` | Contenu personnalisé pour la colonne `key`, p.ex. `#cell-name="{ row }"`. |

**Utilisation** pour des enregistrements comparables avec plusieurs attributs. Pour une poignée de paires d'étiquettes/valeurs utiliser `OnKeyValueList`;
pour un contenu riche et inégal, utilisez une liste de cartes.

**Accessibilité.** Un vrai `<table>` avec `scope="col"` en-têtes. Les en-têtes triables sont des boutons nommés "Trier par
{label}" et la cellule d'en-tête porte `aria-sort`. `hideLabel` garde un en-tête visuellement caché (par exemple « Actions »).
Afficher les lignes sélectionnables `aria-selected`; la case en-tête affiche l'état mixte. `height`, le rouleau
conteneur est focalisé pour que les utilisateurs de clavier puissent faire défiler.

<a id="onpagination"></a>

### OnPagination

Numéros précédents/suivants et pages avec ellipses; boutons, ou liens lorsque chaque page a une URL.

| Prop        | Type                       | Par défaut | Désignation des marchandises                                                                                                            |
| ----------- | -------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `page`      | `number`                   | requis     | Page actuelle, une seule base.                                                                                                          |
| `pageCount` | `number`                   | requis     | Total des pages; rien ne rend pour une page.                                                                                            |
| `max`       | `number`                   | `7`        | Les fentes incluant les ellipses (minimum 5); la première, la dernière et la page actuelle toujours afficher.                           |
| `hrefFor`   | `(page: number) => string` | —          | Render links : chaque page a sa propre URL (p. ex. `?page=3`).                                                                          |
| `linkAs`    | `string \| Component`      | `'a'`      | Composant de liaison pour `hrefFor`.                                                                                                    |
| `jumps`     | `readonly number[]`        | —          | Pages supplémentaires ce nombre d'étapes avant et après la dernière; par défaut à `[10, 100]` avec `hrefFor` et aucun pour les boutons. |

| Événement     | Charge utile     | Désignation des marchandises                                                          |
| ------------- | ---------------- | ------------------------------------------------------------------------------------- |
| `update:page` | `[page: number]` | Une autre page a été choisie (également utilisée pour les liens avant la navigation). |

**Utilisation** pour les listes adressables longues (résultats de la recherche, catalogues). Pour les flux préfèrent " charger plus" ou défilement infini.

**Accessibilité.** `<nav aria-label="Pagination">`; les boutons de page sont appelés "Page N", le courant a
`aria-current="page"`; avant/après aux fins deviennent non-interactifs avec `aria-disabled="true"`; les ellipses sont
caché aux lecteurs d'écran.

<a id="onprogressmeter"></a>

### OnProgressMeter

Une barre de progression, déterminée ou indéterminée.

| Prop    | Type             | Par défaut | Désignation des marchandises                                                       |
| ------- | ---------------- | ---------- | ---------------------------------------------------------------------------------- |
| `value` | `number \| null` | —          | 0–100 (clampé); non réglé ou `null` signifie indéterminée.                         |
| `size`  | `'md' \| 'sm'`   | `'md'`     | Hauteur de la barre 6 / 4 px (`sm` pour les barres de menu et les rangées denses). |
| `label` | `string`         | —          | Nom accessible, p.ex. "Téléchargement de la mise à jour".                          |

**Utilisation** pour les tâches dont le progrès est mesurable, ou pour les travaux en cours sans cela (indéterminé).
le temps restant à côté quand vous en avez un.

**Accessibilité.** `role="progressbar"` avec `aria-valuemin`, `aria-valuemax`, `aria-valuenow` (arrondi) ou
`aria-valuetext="In progress"` lorsque le mouvement est réduit, la barre indéterminée cesse de bouger et montre
"En cours" comme texte.

<a id="onstackbar"></a>

### OnStackBar

Une seule barre empilée avec légende : comment un total se divise en parties (par exemple, stockage par type).

| Prop      | Type                        | Par défaut | Désignation des marchandises                                                           |
| --------- | --------------------------- | ---------- | -------------------------------------------------------------------------------------- |
| `items`   | `readonly OnStackItem[]`    | requis     | `{ key, label, value, display? }`; les valeurs zéro et négative sont laissées de côté. |
| `caption` | `string`                    | requis     | Nom du graphique; légende de la table cachée.                                          |
| `format`  | `(value: number) => string` | —          | Valeurs de format sans `display`, y compris la fusion "Autre".                         |

Jusqu'à trois couleurs de série (`chart.series1–3`) sont utilisés dans l'ordre; avec plus de trois éléments, le troisième et plus tard
Les pourcentages suivent la localité actuelle. L'affichage d'un segment montre une pointe d'outil paresseuse.

**Accessibilité.** La barre et la légende sont cachées des lecteurs d'écran; une table visuellement cachée (Item, Valeur, Share)
avec la légende porte les données.

<a id="onhbarchart"></a>

### OnHBarChart

Barres horizontales comparant quelques valeurs, par exemple téléchargements par période.

| Prop      | Type                    | Par défaut | Désignation des marchandises                                                                                                                                                                                                |
| --------- | ----------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`   | `readonly OnHBarItem[]` | requis     | `{ key, label, value, display?, full?, emphasis? }`: `display` à l'extrémité de la barre (par exemple « 17K »), `full` dans la pointe d'outils et la table (p. ex. « 17 394 »), `emphasis` couleurs de la période actuelle. |
| `caption` | `string`                | requis     | Nom du graphique; légende de la table cachée.                                                                                                                                                                               |
| `max`     | `number`                | —          | Échelle maximale; par défaut, la valeur la plus élevée.                                                                                                                                                                     |

**Accessibilité.** Les barres sont cachées des lecteurs d'écran ; une table visuellement cachée (Item, Valeur) porte les valeurs complètes.
Les bouts d'outils sont paresseux, de sorte qu'ils ne deviennent jamais du texte de page errante.

<a id="onskeleton"></a>

### OnSkeleton

Un porte-places chatoyant pendant que le contenu se charge.

| Prop     | Type                                                                        | Par défaut | Désignation des marchandises                          |
| -------- | --------------------------------------------------------------------------- | ---------- | ----------------------------------------------------- |
| `width`  | `string`                                                                    | `'100%'`   | CSS longueur.                                         |
| `height` | `string`                                                                    | `'14px'`   | CSS longueur de chaque ligne.                         |
| `radius` | `'tiny' \| 'small' \| 'default' \| 'big' \| 'huge' \| 'full' \| 'app-icon'` | `'small'`  | Correspond au rayon de ce qui se charge.              |
| `lines`  | `number`                                                                    | —          | Plusieurs lignes; la dernière mesure 60 % de largeur. |

**Utilisation** seulement pour la première charge, en forme de contenu. Pendant la réfetching, gardez l'ancien contenu (dimmé) à la place
de squelettes clignotants.

**Accessibilité.** `aria-hidden="true"`. Annoncez le chargement ailleurs si cela compte (p. ex. `aria-busy` sur la région).
Le frisson s'arrête avec un mouvement réduit.

<a id="oncodetext"></a>

### OnCodeText

Un texte de code en ligne qui enveloppe entre les mots, jamais à l'intérieur d'un.

| Prop   | Type     | Par défaut | Désignation des marchandises |
| ------ | -------- | ---------- | ---------------------------- |
| `text` | `string` | requis     | La commande, chemin ou code. |

Chaque série de caractères non spatiaux est un bloc en ligne, donc un nom hypnénique ou `--flag` ne se sépare jamais; un mot plus large
que la ligne se brise de préférence après `/`, `.` ou `=`. Whitespace est conservé comme texte, donc copier renvoie l'original
et `white-space: pre-wrap` les conteneurs gardent l'indentation. `<code>` ou `<pre>`.

`codeParts`, `wordPieces` et `codeWordsHtml` exposer la même division pour les rendus Markdown (wrap inline code
mots en `.on-code-word`; `OnMarkdownView` les styles).

<a id="onlogviewer"></a>

### OnLogViewer

Un journal monospace avec des types de lignes colorées, une limite de queue et un défilement virtuel.

| Prop     | Type                | Par défaut | Désignation des marchandises                                                                                            |
| -------- | ------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| `lines`  | `readonly string[]` | requis     | Les lignes de bûcherons, les plus anciennes d'abord.                                                                    |
| `tail`   | `number`            | `2000`     | Ne montrer que les dernières lignes (avec un maximum de 2 000 lignes), par exemple 5 dans une carte de tâches compacte. |
| `height` | `number`            | —          | Faites défiler à l'intérieur de cette hauteur; au-dessus de 200 lignes seulement les lignes visibles rendent.           |
| `label`  | `string`            | —          | Nom accessible; par défaut, "Log".                                                                                      |

Couleurs de la ligne (`classifyLogLine`): `==>` rubriques, `###… 62.4%` des barres de progression, `Error:` / `fatal:` / erreurs de boucle, et
Les lignes vides gardent leur hauteur.

**Accessibilité.** A `<pre role="log">` avec un nom accessible et `tabindex="0"`, donc les utilisateurs de clavier peuvent faire défiler.
Les mises à jour ne sont pas annoncées automatiquement au-delà de ce que `role="log"` implique; résume les résultats importants ailleurs.

<a id="onhighlighttext"></a>

### OnHighlightText

Texte où `**…**` les phrases sont soulignées; rien d'autre n'est analysé.

| Prop   | Type                     | Par défaut | Désignation des marchandises                                                                                      |
| ------ | ------------------------ | ---------- | ----------------------------------------------------------------------------------------------------------------- |
| `text` | `string`                 | requis     | Texte avec option `**…**` mise en évidence; d'autres caractères restent littéraux (pas de Markdown, pas de HTML). |
| `as`   | `'span' \| 'p' \| 'div'` | `'span'`   | Élément rendu.                                                                                                    |

Les parties empirées utilisent la couleur primaire du texte au poids 500 (`parseHighlight` expose l'analyse).

**Utilisation** pour une courte copie éditoriale à partir de données ( descriptions héro, résumés). `OnMarkdownView`.

<a id="onsectionheader"></a>

### OnSectionHeader

Un titre de section avec un indice en option et un lien de style "Voir tout ".

| Prop        | Type                  | Par défaut | Désignation des marchandises                        |
| ----------- | --------------------- | ---------- | --------------------------------------------------- |
| `title`     | `string`              | requis     | Les `<h2>` texto.                                   |
| `hint`      | `string`              | —          | Texte coupé à côté du titre.                        |
| `moreLabel` | `string`              | —          | Lien texte; le lien rend seulement avec `moreHref`. |
| `moreHref`  | `string`              | —          | Lien vers la cible.                                 |
| `linkAs`    | `string \| Component` | `'a'`      | Composant de liaison.                               |

**Accessibilité.** Les `<h2>` ne tient que le titre ; l'indice est un paragraphe séparé, donc il ne devient jamais en tête
texte. Le lien a une icône de flèche (décorative).

<a id="onpageheader"></a>

### OnPageHeader

Le haut d'une page: un grand `<h1>`, un sous-titre et des actions à droite.

| Prop       | Type     | Par défaut | Désignation des marchandises         |
| ---------- | -------- | ---------- | ------------------------------------ |
| `title`    | `string` | requis     | Les `<h1>` texte (30 px, poids 600). |
| `subtitle` | `string` | —          | Ligne sous le titre.                 |

| Fente     | Désignation des marchandises                                                  |
| --------- | ----------------------------------------------------------------------------- |
| `default` | Contenu supplémentaire sous le titre (chips, filtres).                        |
| `actions` | Boutons sur la droite; sur des écrans étroits, ils enveloppent sous le titre. |

**Utilisation** une fois par page. Titres de section dans l'utilisation de page `OnSectionHeader`.

<a id="onbreadcrumb"></a>

### OnBreadcrumb

Le chemin d'une page de haut niveau vers la page actuelle.

| Prop     | Type                          | Par défaut | Désignation des marchandises                                                             |
| -------- | ----------------------------- | ---------- | ---------------------------------------------------------------------------------------- |
| `items`  | `readonly OnBreadcrumbItem[]` | requis     | `{ label, href? }`; le dernier élément est la page actuelle et n'a pas besoin de `href`. |
| `linkAs` | `string \| Component`         | `'a'`      | Composant de liaison.                                                                    |

**Accessibilité.** `<nav aria-label="Breadcrumb">` avec une liste ordonnée; le dernier élément a `aria-current="page"`.
Les séparateurs sont des icônes décoratives. `href` (avant le dernier) rendre en texte simple.

<a id="onmarkdownview"></a>

### OnMarkdownView

Typographie pour Markdown rendu (notes de sortie, descriptions, articles).

| Prop   | Type                        | Par défaut | Désignation des marchandises                                                                                                                                        |
| ------ | --------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `html` | `string`                    | —          | **Hygiène** HTML, inséré tel quel. Ignoré lorsque la fente par défaut est utilisée.                                                                                 |
| `size` | `'sm' \| 'md' \| 'article'` | `'sm'`     | `sm` 13/20 pour les notes de sortie, `md` 14/1.75 pour les descriptions (les deux max 72ch), `article` 15/1.8 à travers la colonne avec des rubriques plus grandes. |

| Fente     | Désignation des marchandises                                                                   |
| --------- | ---------------------------------------------------------------------------------------------- |
| `default` | Éléments rendus au lieu d'un HTML chaîne de caractères (p. ex. d'un rendu qui produit VNodes). |

Ce paquet est livré **pas de rendu Markdown et pas de sanitisant**. Rendu et désinfecter dans votre application — par exemple
balisage-il avec brut HTML désactivé, puis un sanitizer licenciallist tel que DOMPurify — et ne passe jamais sous contrôle utilisateur
HTML Les classes que votre rendeur peut ajouter: `on-md-heading-1…3` (taille de la position visuelle par ordre de grandeur, indépendante de
le niveau sémantique), `on-md-center` / `on-md-right` (alignement du tableau), `on-code-word` (mots de code en ligne).

**Accessibilité.** La sémantique vient de votre HTML: utiliser des niveaux de cap qui correspondent au contour de la page (par exemple, commencer à `h3`
sous une rubrique `h2`) et ajouter `alt` Les liens obtiennent un anneau de mise au point.

---

<a id="states"></a>

## États

<a id="onempty"></a>

### OnEmpty

Un état vide : icône, titre, description et actions.

| Prop          | Type     | Par défaut       | Désignation des marchandises                               |
| ------------- | -------- | ---------------- | ---------------------------------------------------------- |
| `title`       | `string` | requis           | Les `<h3>` texte, par exemple "Pas de résultats pour "x"". |
| `description` | `string` | —                | Une ou deux phrases sur ce qu'il faut faire ensuite.       |
| `icon`        | `string` | `'lucide:inbox'` | Icône dessinée à 48 px dans la couleur du texte désactivé. |

| Fente     | Désignation des marchandises |
| --------- | ---------------------------- |
| `actions` | Boutons sous le texte.       |

**Utilisation** quand une liste ou une recherche n'a rien à montrer. Dites pourquoi et offrez la prochaine étape.
`OnErrorState`; pour aucune connexion `OnOffline`.

**Accessibilité.** Le titre est : `<h3>`; l'icône est décorative. Si l'état vide apparaît après une action utilisateur
(une recherche), annoncez-la par votre propre région en direct au besoin.

<a id="onerrorstate"></a>

### OnErrorState

Une panne de charge avec réessayer et un ID de requête optionnel pour les rapports.

| Prop          | Type             | Par défaut | Désignation des marchandises                                                                |
| ------------- | ---------------- | ---------- | ------------------------------------------------------------------------------------------- |
| `title`       | `string`         | —          | Défaut de "Charger" par défaut                                                              |
| `description` | `string`         | —          | Par défaut, "Le réseau ou le service est temporairement indisponible. Réessayez plus tard." |
| `requestId`   | `string \| null` | —          | Montré dans le monospace pour les rapports de diffusion.                                    |
| `retryable`   | `boolean`        | `true`     | Afficher le bouton Reessayer.                                                               |

| Événement | Charge utile | Désignation des marchandises  |
| --------- | ------------ | ----------------------------- |
| `retry`   | `[]`         | Le bouton Retry a été cliqué. |

**Accessibilité.** L'emballage a `role="alert"`, donc le message est annoncé quand il apparaît.

<a id="onoffline"></a>

### OnOffline

Un état sans connexion.

| Prop          | Type     | Par défaut | Désignation des marchandises                                                                                                                                                              |
| ------------- | -------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | `string` | —          | Par défaut, "Offline".                                                                                                                                                                    |
| `description` | `string` | —          | Par défaut, "Afficher le contenu sauvegardé. Il se met à jour automatiquement lorsque vous êtes de retour en ligne." — le surcharger lorsque votre application peut dire ce qu'il montre. |

| Fente     | Désignation des marchandises |
| --------- | ---------------------------- |
| `actions` | Boutons, p. ex. réessayez.   |

**Accessibilité.** L'emballage a `role="status"` (annonce poliment).

---

<a id="overlays"></a>

## Superpositions

Toutes les superpositions rendent dans `<body>` (téléport), déplacer la mise au point à l'intérieur quand ils ouvrent, garder Tab à l'intérieur, verrouiller la page
défilement (les superpositions nestées sont comptées par référence) et retour de la focalisation à l'élément qui les a ouverts.
dans 200 ms et 120 ms, sans mouvement lorsque le mouvement réduit est activé.

<a id="ondialogshell"></a>

### OnDialogShell

La couche modale de bas niveau `OnModal`, `OnSheet` et `OnCommandPalette`: fond, transitions, Escape, focus
et la serrure de défilement. Utilisez-le directement pour les panneaux personnalisés.

| Prop           | Type                           | Par défaut | Désignation des marchandises                                                                                                    |
| -------------- | ------------------------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `open`         | `boolean`                      | requis     | Montré lorsque true; rien ne rend pendant la fermeture (également sur le serveur).                                              |
| `placement`    | `'center' \| 'right' \| 'top'` | `'center'` | Boîte de dialogue centrée, feuille de droite ou palette supérieure (15vh).                                                      |
| `dismissible`  | `boolean`                      | `true`     | `false` ignore les clics d'évasion et de fond (confirmations destructives).                                                     |
| `role`         | `'dialog' \| 'alertdialog'`    | `'dialog'` | Rôle du groupe.                                                                                                                 |
| `labelledby`   | `string`                       | —          | ID du titre (`aria-labelledby`).                                                                                                |
| `describedby`  | `string`                       | —          | Numéro d'identification de la description (`aria-describedby`).                                                                 |
| `ariaLabel`    | `string`                       | —          | Nom accessible lorsqu'il n'y a pas de titre visible.                                                                            |
| `initialFocus` | `string`                       | —          | Sélecteur à l'intérieur du panneau pour se concentrer d'abord; par défaut vers le premier élément focalisable, puis le panneau. |
| `backdrop`     | `'dim' \| 'clear'`             | `'dim'`    | Crayons enduits, ou un click-catcher transparent (palette).                                                                     |
| `panelClass`   | `string`                       | —          | Classes pour l'élément de panneau (taille, surface, rayon).                                                                     |

| Événement | Charge utile | Désignation des marchandises                                                                                             |
| --------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `close`   | `[]`         | Échapper ou une presse et un communiqué en arrière-plan (sélectionner du texte et sortir à l'extérieur ne se ferme pas). |

| Fente     | Désignation des marchandises |
| --------- | ---------------------------- |
| `default` | Contenu du panneau.          |

**Accessibilité.** Le panneau a les données `role`, `aria-modal="true"` et son nom; Tab et Maj-Tab cycle par
ses éléments focalisables. `labelledby` ou `ariaLabel`.

<a id="onmodal"></a>

### OnModal

Un dialogue centré avec le titre, la description optionnelle, les actions du corps et du pied de page.

| Prop           | Type                        | Par défaut | Désignation des marchandises                                                                                                           |
| -------------- | --------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `open`         | `boolean`                   | requis     | Utilisation `v-model:open`.                                                                                                            |
| `title`        | `string`                    | requis     | Les `<h2>` et le nom accessible du dialogue.                                                                                           |
| `description`  | `string`                    | —          | Sous le titre; devient `aria-describedby`.                                                                                             |
| `size`         | `'sm' \| 'md' \| 'lg'`      | `'md'`     | Largeurs maximales 480 / 560 / 720.                                                                                                    |
| `dismissible`  | `boolean`                   | `true`     | `false` ignore les clics d'évasion et de fond.                                                                                         |
| `closable`     | `boolean`                   | `true`     | Fermez le bouton dans le coin supérieur droit.                                                                                         |
| `role`         | `'dialog' \| 'alertdialog'` | `'dialog'` | Utilisation `alertdialog` pour les confirmations qui nécessitent une réponse.                                                          |
| `initialFocus` | `string`                    | —          | Le sélecteur doit d'abord se focaliser; il se positionne par défaut sur le premier élément focalisable (souvent sur le bouton Fermer). |

| Événement     | Charge utile      | Désignation des marchandises             |
| ------------- | ----------------- | ---------------------------------------- |
| `update:open` | `[open: boolean]` | `false` sur tout licenciement.           |
| `close`       | `[]`              | Échapper, arrière-plan ou bouton Fermer. |

| Fente      | Désignation des marchandises                                                           |
| ---------- | -------------------------------------------------------------------------------------- |
| `default`  | Corps; défile quand il est grand.                                                      |
| `footer`   | Actions alignées sur le droit (premier niveau secondaire, dernier niveau primaire).    |
| `leading`  | Avant le titre, par exemple une icône d'application.                                   |
| `subtitle` | Une ligne riche sous le titre (chips, code); `description` Il est toujours en dessous. |

Exposé : `close()`.

**Utilisation** pour les tâches ciblées qui bloquent la page (un court formulaire, une décision).
`OnSheet`; pour une utilisation par oui/non question `OnConfirm`.

<a id="onsheet"></a>

### OnSheet

Un panneau qui glisse de la droite (420 px), p.ex. pour les journaux ou les détails.

| Prop           | Type      | Par défaut | Désignation des marchandises                                                          |
| -------------- | --------- | ---------- | ------------------------------------------------------------------------------------- |
| `open`         | `boolean` | requis     | Utilisation `v-model:open`.                                                           |
| `title`        | `string`  | requis     | Les `<h2>` et le nom accessible.                                                      |
| `initialFocus` | `string`  | —          | Sélecteur pour se concentrer d'abord; par défaut vers le premier élément focalisable. |

| Événement     | Charge utile      | Désignation des marchandises      |
| ------------- | ----------------- | --------------------------------- |
| `update:open` | `[open: boolean]` | `false` lorsqu'ils sont renvoyés. |
| `close`       | `[]`              | Évasion, toile de fond ou Fermer. |

| Fente     | Désignation des marchandises                                          |
| --------- | --------------------------------------------------------------------- |
| `default` | Faire défiler le corps.                                               |
| `actions` | Boutons d'en-tête entre le titre et Close, par exemple "Copier tous". |
| `footer`  | Barre inférieure avec des actions alignées à droite.                  |

Exposé : `close()`.

<a id="onconfirm"></a>

### OnConfirm

Une boîte de dialogue de confirmation avec Annuler et Confirmer.

| Prop              | Type                    | Par défaut  | Désignation des marchandises                                                                             |
| ----------------- | ----------------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `open`            | `boolean`               | requis      | Utilisation `v-model:open`.                                                                              |
| `title`           | `string`                | requis      | La question, par exemple : Orbitfold?".                                                                  |
| `description`     | `string`                | —           | Qu'est-ce qui va se passer ?                                                                             |
| `confirmLabel`    | `string`                | —           | Par défaut à "Confirmer"; préférez le verbe ("Supprimer").                                               |
| `cancelLabel`     | `string`                | —           | Par défaut à "Annuler".                                                                                  |
| `tone`            | `'primary' \| 'danger'` | `'primary'` | `danger`: bouton de confirmation rouge, aucun rejet Escape/backdrop, Annuler d'abord focalisé.           |
| `loading`         | `boolean`               | —           | Spinner on Confirme pendant que l'action tourne; Annuler est désactivé pendant ce temps.                 |
| `confirmDisabled` | `boolean`               | —           | Désactiver Confirmer jusqu'à ce que les conditions préalables (p. ex. une autorisation) soient remplies. |

| Événement     | Charge utile      | Désignation des marchandises                                             |
| ------------- | ----------------- | ------------------------------------------------------------------------ |
| `confirm`     | `[]`              | Confirmer cliqué; l'hôte exécute l'action et ferme la boîte de dialogue. |
| `cancel`      | `[]`              | Annuler, Échapper ou arrière-plan (pas pour `danger`).                   |
| `update:open` | `[open: boolean]` | `false` à annuler.                                                       |

| Fente     | Désignation des marchandises                                                    |
| --------- | ------------------------------------------------------------------------------- |
| `default` | Contenu corporel supplémentaire, par exemple une liste de ce qui sera supprimé. |

**Accessibilité.** `role="alertdialog"`, nommé par le titre et décrit par la description.
confirmations focus Confirmer; destructive focus Annuler ainsi Enter ne détruit jamais par accident.

<a id="ontoast"></a>

### OnToast

Une seule carte de notification. `OnToastRegion`; l'utiliser directement pour les aperçus statiques.

| Prop          | Type                                           | Par défaut | Désignation des marchandises                                  |
| ------------- | ---------------------------------------------- | ---------- | ------------------------------------------------------------- |
| `tone`        | `'info' \| 'success' \| 'warning' \| 'danger'` | `'info'`   | Icône et couleur: info, check, triangle, croix.               |
| `title`       | `string`                                       | requis     | Une ligne, par exemple "Mise à jour" Prismark".               |
| `description` | `string`                                       | —          | Une ligne de détail.                                          |
| `actionLabel` | `string`                                       | —          | Un petit bouton d'action fantôme, par exemple "Afficher".     |
| `time`        | `string`                                       | —          | Texte dans le coin supérieur droit, par exemple "Maintenant". |

| Événement | Charge utile | Désignation des marchandises         |
| --------- | ------------ | ------------------------------------ |
| `action`  | `[]`         | Le bouton d'action a été cliqué.     |
| `close`   | `[]`         | Le bouton de fermeture a été cliqué. |

**Accessibilité.** `danger` Les toasts ont `role="alert"` (annoncé immédiatement); d'autres s'appuient sur la politesse de la région
région en direct. Le bouton de fermeture s'appelle "Avis de rejet".

<a id="ontoastregion-and-createtoastqueue"></a>

### OnToastRegion et créer ToastQueue

La pile fixe de notifications en bas à droite, avec le timing géré pour vous.

| Prop    | Type                     | Par défaut | Désignation des marchandises                                          |
| ------- | ------------------------ | ---------- | --------------------------------------------------------------------- |
| `items` | `readonly OnToastItem[]` | requis     | `{ id, tone?, title, description?, actionLabel?, time?, duration? }`. |
| `max`   | `number`                 | `3`        | Des toasts visibles; les plus âgés se cachent en premier.             |

| Événement | Charge utile   | Désignation des marchandises                                                                                   |
| --------- | -------------- | -------------------------------------------------------------------------------------------------------------- |
| `dismiss` | `[id: string]` | Supprimer l'élément: émis après `duration` (par défaut 4000 ms; `0` le garde), sur Close, et après une action. |
| `action`  | `[id: string]` | Le bouton d'action de l'élément a été cliqué (suivi par `dismiss`).                                            |

Les minuteries s'arrêtent pendant que le pointeur ou le focus se trouve dans la région et reprennent avec le temps restant.

```ts
const toasts = createToastQueue(); // one per app (or per request in SSR), never a shared module singleton
toasts.push({ tone: 'success', title: 'Copied' }); // returns the id
toasts.push({ id: 'sync', title: 'Syncing…', duration: 0 }); // same id replaces, e.g. progress updates
```

```vue
<OnToastRegion :items="toasts.items.value" @dismiss="toasts.dismiss" @action="openDetails" />
```

`createToastQueue()` retours `{ items, push, dismiss, clear }` (`items` est une référence en lecture seule).

**Utilisation** pour une rétroaction brève et non-bloquante sur quelque chose qui s'est passé. Jamais pour information l'utilisateur doit agir sur
(utilisez une boîte de dialogue ou un message en ligne).

**Accessibilité.** A `<section aria-label="Notifications">` avec une `aria-live="polite"` liste; les échecs annoncent
immédiatement par le biais de leurs propres `role="alert"`.

<a id="oncommandpalette"></a>

### OnCommandPalette

Une palette de commandes pilotée par la recherche : résultats groupés avec sélection du clavier.

| Prop          | Type                        | Par défaut | Désignation des marchandises                                                                                                    |
| ------------- | --------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `open`        | `boolean`                   | requis     | Utilisation `v-model:open`.                                                                                                     |
| `query`       | `string`                    | requis     | Utilisation `v-model:query`; les filtres hôtes.                                                                                 |
| `groups`      | `readonly OnCommandGroup[]` | requis     | `{ key, label, items: OnCommandItem[] }`; les groupes vides sont cachés.                                                        |
| `placeholder` | `string`                    | —          | Placeholder d'entrée et nom; par défaut, "Rechercher ou exécuter une commande".                                                 |
| `loading`     | `boolean`                   | —          | Sans résultats, montre "Rechercher..." au lieu du texte vide.                                                                   |
| `emptyText`   | `string`                    | —          | Par défaut, "Pas de résultats correspondants".                                                                                  |
| `hints`       | `readonly string[]`         | —          | Les conseils de pied de page; par défaut dans "↑ю Select" et " 简 Open". Ajoutez les vôtres pour les raccourcis méta et copiez. |

`OnCommandItem`: `{ key, label, description?, icon?, image?, iconTone?, badge?, badgeTone?, hint? }` — `icon` est un
icône de 18 px (pour les actions et la navigation), `image` une URL d'image de 26 px (une icône d'application, un avatar) qui revient à la
icône si elle ne se charge pas; `iconTone: 'accent'` couleurs de l'icône; `badge` est un `OnChip` (accent par défaut); `hint`
montre un indice clé sur la droite.

| Événement      | Charge utile                                        | Désignation des marchandises                                                                                                     |
| -------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `update:open`  | `[open: boolean]`                                   | `false` sur Escape ou un clic à l'extérieur.                                                                                     |
| `update:query` | `[query: string]`                                   | Chaque entrée.                                                                                                                   |
| `select`       | `[item: OnCommandItem, options: { meta: boolean }]` | Entrez ou cliquez sur l'élément actif; `meta` avec Command/Ctrl (une action secondaire, p.ex. ouvrir dans une nouvelle fenêtre). |
| `copy`         | `[item: OnCommandItem]`                             | Commande/Ctrl-C alors qu'aucun texte d'entrée n'est sélectionné; l'hôte décide de la copie (un lien, un ID).                     |

L'élément actif se réinitialise au premier résultat chaque fois que les résultats changent ou que la palette s'ouvre.

**Accessibilité.** Une boîte de dialogue top-placed nommée "Place de commande". L'entrée est un `combobox` (`aria-autocomplete="list"`,
`aria-controls`, `aria-activedescendant`) plus de `listbox` des `role="group"` les sections avec `option`s et
`aria-selected`. ArrowUp/ArrowDown se déplace dans tous les groupes (enroulement, défilement de l'élément en vue), Entrer sélectionne,
Escape se ferme; les clés sont ignorées pendant qu'une méthode d'entrée est en train de composer.

---

<a id="layout-and-navigation"></a>

## Mise en page et navigation

<a id="onappshell"></a>

### OnAppShell

Le cadre de la page : barre latérale, barre d'outils, colonne principale et rail droit optionnel.

| Prop         | Type                        | Par défaut    | Désignation des marchandises                                                                                                                                                                                                                                                           |
| ------------ | --------------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hasRail`    | `boolean`                   | `false`       | La page a un rail droit.                                                                                                                                                                                                                                                               |
| `railDocked` | `boolean`                   | `true`        | Mode conteneur: le rail reste à côté de la colonne principale (décide de la largeur de la fenêtre, par exemple ≥ 1240 px).                                                                                                                                                             |
| `railOpen`   | `boolean`                   | `false`       | Mode Conteneur, non enclenché: affichez le rail comme une superposition.                                                                                                                                                                                                               |
| `scroll`     | `'container' \| 'document'` | `'container'` | `container` (application de bureau) : hauteur fixe de la fenêtre, la colonne principale défile seule. `document` (web) : les rouleaux de page; la barre latérale et la barre d'outils sont collants de `md`, les bâtons de rail à `xl` et se déplace en dessous du contenu avant cela. |

| Fente        | Désignation des marchandises                                                                                                              |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `sidebar`    | Habituellement `OnSidebar` (224 px colonne).                                                                                              |
| `toolbar`    | Habituellement `OnToolbar`.                                                                                                               |
| `compactBar` | Mode document ci-dessous `md`: remplace la barre latérale et la barre d'outils (par exemple, une barre supérieure compacte avec un menu). |
| `default`    | Le contenu principal.                                                                                                                     |
| `rail`       | Habituellement `OnRailPanel` (288 px).                                                                                                    |
| `footer`     | Mode document : après le contenu et le rail.                                                                                              |
| `overlay`    | Superpositions qui appartiennent à la coquille (région de pointe, palette).                                                               |

Exposé : `scrollToTop()` — défile la colonne principale (mode conteneur) ou la fenêtre (mode document), par exemple après
la navigation.

**Accessibilité.** Le contenu est un `<main>` point de repère; donner la navigation latérale a `label` (voir `OnSidebar`).
Gardez une coquille par page.

<a id="onsidebar"></a>

### OnSidebar

Marque, une carte supérieure en option, une navigation groupée et des liens de pied de page.

| Prop          | Type                        | Par défaut | Désignation des marchandises                                                                                   |
| ------------- | --------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| `groups`      | `readonly OnSidebarGroup[]` | requis     | `{ key, label, items: OnSidebarItem[] }`.                                                                      |
| `footerItems` | `readonly OnSidebarItem[]`  | `[]`       | Les éléments sont fixés au bas (Paramètres, About).                                                            |
| `label`       | `string`                    | requis     | Nom accessible de la navigation.                                                                               |
| `topLabel`    | `string`                    | —          | Sourcils au-dessus de la `top` La fente.                                                                       |
| `brandName`   | `string`                    | —          | Marque en texte clair lorsque la `brand` la fente est vide.                                                    |
| `dragRegion`  | `boolean`                   | `false`    | Fenêtres de bureau : une zone draggable de 52 px pour le macOS feux de circulation (`data-tauri-drag-region`). |
| `linkAs`      | `string \| Component`       | `'a'`      | Composant de lien pour les éléments.                                                                           |

`OnSidebarItem`: `{ key, label, href, icon?, active?, count?, meta?, badge?, dot?, badgeLabel? }` — passé à
`OnNavItem`.

| Fente    | Désignation des marchandises                                                                                                                                                              |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `brand`  | La marque et le nom de l'application (logo plus mot-symbole); le système de conception ne délivre aucun logo. Sans elle et sans `brandName` la rangée de la marque est laissée en dehors. |
| `top`    | Une carte sous la marque, par exemple "Obtenez l'application de bureau".                                                                                                                  |
| `footer` | Contenu supplémentaire après les éléments de pied de page.                                                                                                                                |

**Accessibilité.** Une `<aside>` avec une `<nav aria-label>`; les étiquettes de groupe sont des rubriques visuelles au-dessus de leurs éléments;
l'élément actuel a `aria-current="page"`. Si la fente de la marque n'est qu'une image, donnez-lui une `alt` texte ou un nom visible.

<a id="onnavitem"></a>

### OnNavItem

Une ligne de navigation : icône, étiquette et un compte, badge, point ou méta texte à droite.

| Prop         | Type                  | Par défaut | Désignation des marchandises                                                                  |
| ------------ | --------------------- | ---------- | --------------------------------------------------------------------------------------------- |
| `icon`       | `string`              | —          | Icône à 17 px.                                                                                |
| `active`     | `boolean`             | —          | La page actuelle : mise en évidence, `aria-current="page"`.                                   |
| `count`      | `number`              | —          | Muted compte sur la droite.                                                                   |
| `meta`       | `string`              | —          | Texte modifié à droite lorsqu'il n'y a pas de nombre, par exemple "34 Go".                    |
| `badge`      | `number`              | —          | Badge de comptage des coraux (uniquement lorsque > 0); priorité sur `dot`, `count` et `meta`. |
| `dot`        | `boolean`             | —          | Un point d'attention sans nombre; prend la priorité sur `count` et `meta`.                    |
| `badgeLabel` | `string`              | —          | Texte accessible du badge ou du point, par exemple «4 mises à jour».                          |
| `as`         | `string \| Component` | `'a'`      | Élément ou élément de liaison; un élément simple `a` sans `href` devient un `<button>`.       |
| `href`       | `string`              | —          | Lien URL (natif) `a`).                                                                        |
| `to`         | `string`              | —          | Destination du routeur lorsque `as` est un lien de routeur.                                   |

| Fente     | Désignation des marchandises |
| --------- | ---------------------------- |
| `default` | L'étiquette (trunchate).     |

**Accessibilité.** Le badge est nommé par `badgeLabel`; un point avec `badgeLabel` est `role="img"`, sans elle c'est
Préférez donner chaque badge et pointer une étiquette.

<a id="ontoolbar"></a>

### OnToolbar

La barre au-dessus de la colonne principale : la fente de démarrage, un espaceur draggable, un bouton de recherche et une fente de fin.

| Prop             | Type      | Par défaut | Désignation des marchandises                                                                                      |
| ---------------- | --------- | ---------- | ----------------------------------------------------------------------------------------------------------------- |
| `searchLabel`    | `string`  | requis     | Texte et nom accessible du bouton de recherche, p.ex. "Rechercher des applications" ou "Rechercher des fichiers". |
| `searchShortcut` | `string`  | —          | Clef sur le bouton, p. ex. `⌘K`; sert également à `aria-keyshortcuts="Meta+K"`.                                   |
| `dragRegion`     | `boolean` | `false`    | Fenêtres de bureau: la barre et l'espaceur sont des régions de glisser; ses boutons restent cliquables.           |

| Événement | Charge utile | Désignation des marchandises                                            |
| --------- | ------------ | ----------------------------------------------------------------------- |
| `search`  | `[]`         | Le bouton de recherche a été cliqué; ouvrez votre palette de commandes. |

| Fente   | Désignation des marchandises                       |
| ------- | -------------------------------------------------- |
| `start` | Commandes de tête, p.ex. boutons arrière/avant.    |
| `end`   | Contrôles de suivi, p. ex. notifications, langage. |

<a id="ontopnav"></a>

### OnTopNav

L'en-tête du site: lien d'accueil avec la marque de l'application, liens centrés, recherche, appel à l'action optionnel et mobile
menu.

| Prop             | Type                      | Par défaut | Désignation des marchandises                                                                                                          |
| ---------------- | ------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `items`          | `readonly OnTopNavItem[]` | requis     | `{ label, href, active? }`.                                                                                                           |
| `homeHref`       | `string`                  | `'/'`      | Cible de la liaison domiciliaire.                                                                                                     |
| `brandName`      | `string`                  | —          | Marque en texte simple dans le lien d'accueil lorsque le `brand` slot est vide; aussi le nom du lien ("{brandName} maison", traduit). |
| `homeLabel`      | `string`                  | —          | Nom accessible du lien d'origine, qui dépasse celui de `brandName`.                                                                   |
| `downloadHref`   | `string`                  | —          | Bouton d'appel à l'action à droite (p. ex. page de téléchargement); caché sans elle.                                                  |
| `downloadLabel`  | `string`                  | —          | Son texte; par défaut, "Télécharger".                                                                                                 |
| `searchable`     | `boolean`                 | `true`     | Afficher le champ et le bouton de recherche.                                                                                          |
| `searchLabel`    | `string`                  | —          | Recherche de texte et de nom; par défaut, "Rechercher".                                                                               |
| `searchShortcut` | `string`                  | —          | Conseil clé dans le champ de recherche, p.ex. `⌘K`.                                                                                   |
| `label`          | `string`                  | —          | Nom accessible de la navigation; par défaut, "Main".                                                                                  |
| `linkAs`         | `string \| Component`     | `'a'`      | Composant de liaison.                                                                                                                 |

| Événement | Charge utile | Désignation des marchandises                                                      |
| --------- | ------------ | --------------------------------------------------------------------------------- |
| `search`  | `[]`         | Le champ de recherche ou l'icône a été cliqué; ouvrez votre palette de commandes. |

| Fente   | Désignation des marchandises                                                                                                        |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `brand` | La marque de l'application à l'intérieur du lien d'origine (logo plus mot-symbole). Le système de conception ne délivre aucun logo. |
| `extra` | Entre la recherche et l'appel à l'action, par exemple un menu de langue.                                                            |

Comportement : les liens s'affichent à partir de 1024 px; ci-dessous, un bouton de menu ouvre un panneau avec les liens (et l'appel à l'action sous
640 px). La recherche est un champ complet à 768-1023 px et à partir de 1280 px, un bouton d'icône sinon.
fond devient translucide avec un flou.

**Accessibilité.** Un collant `<header>` avec `<nav>` les points de repère nommés par `label`. Les liens actifs ont
`aria-current="page"`. Nommez le lien d'accueil: pass `brandName` (elle satisfait également à l'"étiquette de nom" lorsque le mot-symbole
indique le même nom) ou `homeLabel`; avec ni l'un ni l'autre, `brand` Le nom doit être porté (par exemple, `img alt`).
Le bouton de menu a `aria-expanded`/`aria-controls` et un nom "Ouvrir le menu"/"Fermer le menu" ; Escape ferme le panneau
et retourne le focus au bouton. Le champ de recherche a `aria-haspopup="dialog"`.

<a id="onrailpanel"></a>

### OnRailPanel

Le cadre droit (288 px) pour les résumés et le contenu secondaire.

| Prop         | Type      | Par défaut | Désignation des marchandises                                                                                                                                                                        |
| ------------ | --------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `responsive` | `boolean` | `false`    | Web: ci-dessous `xl` le rail se trouve sous le contenu principal avec une bordure supérieure et des rouleaux avec la page; `xl` c'est une colonne avec une bordure gauche et son propre défilement. |

| Fente     | Désignation des marchandises               |
| --------- | ------------------------------------------ |
| `default` | Généralement plusieurs `OnRailSection`Par. |

**Accessibilité.** Une `<aside>` point de repère; il s'agit d'un contenu complémentaire, donc la page doit avoir un sens sans elle.

<a id="onrailsection"></a>

### OnRailSection

Une section intitulée à l'intérieur du rail.

| Prop       | Type     | Par défaut | Désignation des marchandises |
| ---------- | -------- | ---------- | ---------------------------- |
| `title`    | `string` | requis     | Les `<h2>`.                  |
| `subtitle` | `string` | —          | Ligne coupée sous le titre.  |

| Fente     | Désignation des marchandises                                |
| --------- | ----------------------------------------------------------- |
| `default` | Contenu de la section (tableaux de statut, listes courtes). |

---

<a id="showcase"></a>

## Afficher

<a id="onfeaturehero"></a>

### OnFeatureHero

Une grande carte de caractéristiques avec une scène brillante, sonnée et des objets décoratifs flottants.

| Prop           | Type                  | Par défaut | Désignation des marchandises                                                                                                              |
| -------------- | --------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `title`        | `string`              | requis     | Le cap.                                                                                                                                   |
| `subtitle`     | `string`              | —          | Une deuxième ligne en saumon, à l'intérieur du cap.                                                                                       |
| `badge`        | `string`              | —          | Petit texte surligné au-dessus du titre, par exemple "Fait cette semaine".                                                                |
| `description`  | `string`              | —          | Corps avec `**…**` l'accent mis sur la`OnHighlightText`).                                                                                 |
| `floats`       | `readonly T[]`        | `[]`       | Jusqu'à trois objets décoratifs placés sur la scène, chacun dessiné par la `float` La fente.                                              |
| `glowColor`    | `string \| null`      | —          | Teinte à six chiffres de l'hex de la lueur (assouplie en mode lumière); la lueur symbolique sinon.                                        |
| `actionLabel`  | `string`              | —          | Texte du bouton principal; par défaut, "Démarrer".                                                                                        |
| `actionIcon`   | `string`              | —          | Icône de lucidité optionnelle avant le texte du bouton primaire, p.ex. `download`.                                                        |
| `detailHref`   | `string`              | —          | Ajoute un bouton de lien "Voir les détails".                                                                                              |
| `detailLabel`  | `string`              | —          | Son texte.                                                                                                                                |
| `linkAs`       | `string \| Component` | `'a'`      | Composant de lien pour le lien de détail.                                                                                                 |
| `responsive`   | `boolean`             | —          | Web: 360 px de 1024 px (276 px sinon), étape mise à l'échelle.                                                                            |
| `compact`      | `boolean`             | —          | Une carte plus petite pour les grilles; l'étape ne s'affiche que lorsque la carte mesure au moins 460 px de large (demande de conteneur). |
| `headingLevel` | `2 \| 3`              | `2`        | Élément de cap.                                                                                                                           |

| Événement | Charge utile | Désignation des marchandises     |
| --------- | ------------ | -------------------------------- |
| `action`  | `[]`         | Le bouton primaire a été cliqué. |

| Fente              | Signature                                                             | Désignation des marchandises                                                                                                                     |
| ------------------ | --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `float`            | `(props: { item: T; index: number; size: OnAppIconSize }) => unknown` | Un objet flottant, généralement `<OnAppIcon :size="size" :priority="index === 0" …>`. Les dimensions sont 118 / 54 / 46 (compacte 64 / 40 / 32). |
| `badge-decoration` | `() => unknown`                                                       | Une petite marque après le texte du badge (environ 13 px, `currentColor`).                                                                       |
| `actions`          | `() => unknown`                                                       | Remplace le bouton primaire et le lien de détail.                                                                                                |

```vue
<OnFeatureHero title="Orbitfold 4" subtitle="Plans that keep up with you." :floats="apps" detail-href="/apps/orbitfold">
  <template #float="{ item, size, index }">
    <OnAppIcon :name="item.name" :src="item.icon" :size="size" :priority="index === 0" />
  </template>
</OnFeatureHero>
```

**Utilisation** Une fois par page pour le point culminant principal. Les éléments flottants sont cachés sous 768 px, où ils couvriraient le texte.

**Accessibilité.** Toute l'étape (glow, anneaux, flotteurs) est `aria-hidden`; mettre toutes les informations qu'ils transportent dans
texte. Le sous-titre fait partie du titre. La lueur respire lentement et s'arrête avec un mouvement réduit.

<a id="onappicon"></a>

### OnAppIcon

Une tuile d'application : l'image de l'application, ou une tuile de lettre générée; `variant="terminal"` dessine une tuile en ligne de commande.

| Prop         | Type                                                                          | Par défaut | Désignation des marchandises                                                                                                                    |
| ------------ | ----------------------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`       | `string`                                                                      | requis     | Afficher le nom; la tuile de la lettre indique ses initiales (premier caractère CJK, ou les premières lettres de deux mots maximum).            |
| `variant`    | `'app' \| 'terminal'`                                                         | `'app'`    | Fallback quand il n'y a pas d'image : carrelage de lettres ou de bornes (obscurité dans les deux thèmes, abréviation monospace, barre colorée). |
| `seed`       | `string`                                                                      | —          | Stable identificateur hashed (FNV-1a) pour choisir la couleur de la tuile et, pour les tuiles terminales, l'abréviation; par défaut à `name`.   |
| `initials`   | `string`                                                                      | —          | Texte carrelé au lieu de celui dérivé, par exemple une forme courte conventionnelle d'une commande.                                             |
| `src`        | `string \| null`                                                              | —          | URL de l'image; sur la panne de charge (également celle qui a échoué avant l'hydratation) la tuile affiche à la place.                          |
| `renditions` | `readonly OnImageRendition[] \| null`                                         | —          | `{ width, url }` des `src` pour `srcset`; le navigateur en choisit un pour la taille rendue.                                                    |
| `size`       | `20 \| 24 \| 26 \| 28 \| 30 \| 32 \| 40 \| 44 \| 46 \| 54 \| 64 \| 96 \| 118` | `44`       | Côté en px.                                                                                                                                     |
| `accent`     | `string \| null`                                                              | —          | Accent hexagonal à six chiffres pour la tuile de lettres; sinon, une couleur de palette de la graine.                                           |
| `label`      | `string`                                                                      | —          | Fait de l'icône une image avec ce nom; sinon il est décoratif.                                                                                  |
| `priority`   | `boolean`                                                                     | —          | Charger et récupérer la priorité pour la première icône visible (héros, en-tête de détail).                                                     |

Les images sont montrées comme livrées (`object-contain`, pas de masque, paresseux-chargés); tuiles obtenir le rayon d'application-icône et l'ombre.
Aides : `iconColor(seed, accent)`, `darken(hex)`, `iconInitials(name)`, `cliAbbreviation(command)`, `ICON_PALETTE`.

**Accessibilité.** Décoratif (`aria-hidden`) sauf `label` est défini; à côté d'un nom visible `label` Dehors.
