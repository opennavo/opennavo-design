[English](../../../layout.md) · [简体中文](../../zh-CN/docs/layout.md) · [繁體中文](../../zh-Hant/docs/layout.md) · [日本語](../../ja-JP/docs/layout.md) · [Español](../../es-ES/docs/layout.md) · [Português (Brasil)](../../pt-BR/docs/layout.md) · [Русский](../../ru-RU/docs/layout.md) · [Deutsch](../../de-DE/docs/layout.md) · **Français** · [Italiano](../../it-IT/docs/layout.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="layout"></a>

# Mise en page

<a id="spacing"></a>

## Espacement

Une échelle de 4 px (`space.*`, ainsi que les UnoCSS/Tailwind espacement utilisé dans les composants:

| Étape | 0   | 0.5 | 1   | 1.5 | 2   | 2.5 | 3   | 3.5 | 4   | 5   | 6   | 7   | 8   | 10  | 12  | 16  | 20  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Px    | 0   | 2   | 4   | 6   | 8   | 10  | 12  | 14  | 16  | 20  | 24  | 28  | 32  | 40  | 48  | 64  | 80  |

Rythme typique:

- 4–8 entre une icône et son étiquette, jetons de suite, un titre et son sous-titre.
- 10–14 à l'intérieur de rangées denses et entre les commandes dans une barre d'outils (les éléments de barre d'outils sont à 14 endroits).
- Rembourrage 16-20 cartes (20 dans le rail), 22 entre les sections de rail.
- 24–28 entre les sections de page; 28 est le gouttière de contenu de bureau.
- 40–80 entre les sections du site.

<a id="radius"></a>

## Rayon

| Classe             | Px  | Utilisation                                                                 |
| ------------------ | --- | --------------------------------------------------------------------------- |
| `rounded-tiny`     | 4   | Conseils de clavier, petites étiquettes, code inline                        |
| `rounded-small`    | 7   | Chips, entrées en lignes denses, segments, éléments de menu                 |
| `rounded-default`  | 10  | Boutons, entrées, notices, petites cartes                                   |
| `rounded-panel`    | 12  | Menus, popovers, captures d'écran, conteneurs de liste                      |
| `rounded-big`      | 14  | Cartes                                                                      |
| `rounded-huge`     | 20  | Boîtes de dialogue, feuilles, héros de fonctionnalités, en-têtes de détails |
| `rounded-xl`       | 28  | Grands panneaux de marketing                                                |
| `rounded-full`     | —   | Pills, avatars, toggles, points                                             |
| `rounded-app-icon` | 23% | App icône carrelage (approxime le macOS écureuil)                           |

Coins imbriqués : un élément à l'intérieur d'un contenant rembourré utilise le prochain rayon plus petit.

<a id="elevation"></a>

## Élévation

L'élévation est couleur plus ombre, jamais ombre seule:

| Niveau | Surface                                                  | Ombre            | Exemples                                                                   |
| ------ | -------------------------------------------------------- | ---------------- | -------------------------------------------------------------------------- |
| 0      | `surface.base`                                           | —                | Contenu de la fenêtre                                                      |
| 1      | `surface.card` + `border.subtle`                         | —                | Cartes, listes, groupes de paramètres                                      |
| 2      | `surface.popover` / `surface.overlay` + `border.default` | `shadow.popover` | Menus, tooltips, avis flottants, palette de commandes                      |
| 3      | `component.modalBg` + `border.default`                   | `shadow.modal`   | Boîtes de dialogue, feuilles                                               |
| —      | `component.toastBg`                                      | `shadow.toast`   | Toasts                                                                     |
| —      | —                                                        | `shadow.window`  | Cadres de fenêtres dans les captures d'écran et les maquettes de marketing |

Les ombres sont lourdes et noires en mode sombre, douces en mode lumière; les jetons portent les deux.
est derrière eux (`effect.backdropBlur`, 20 px).

<a id="layers"></a>

## Calque

| `z-*`      | Valeur | Utilisation                                                    |
| ---------- | ------ | -------------------------------------------------------------- |
| `base`     | 0      | Contenu                                                        |
| `sticky`   | 10     | Barres d'outils collantes, barres latérales, en-têtes de table |
| `dropdown` | 100    | Menus, recouvrement de rails                                   |
| `overlay`  | 200    | Racines                                                        |
| `modal`    | 300    | Boîtes de dialogue, feuilles, lightbox                         |
| `popover`  | 400    | Popovers au-dessus des dialogues                               |
| `toast`    | 500    | Toasts                                                         |
| `tooltip`  | 600    | Outils                                                         |

<a id="the-app-shell"></a>

## Le shell de l'application

Fenêtre de bureau (Tauri) — `OnAppShell` en mode réservoir:

```
┌──────────┬──────────────────────────────────────────────┬──────────┐
│ ● ● ●    │ toolbar · 52 px · back/forward · ⌘K search    │          │
│          ├──────────────────────────────────────────────┤  rail    │
│ sidebar  │ main · scrolls · 28 px gutters                │  288 px  │
│ 224 px   │                                              │ optional │
│          │                                              │          │
└──────────┴──────────────────────────────────────────────┴──────────┘
```

- Fenêtre par défaut 1280 × 820, minimum 1100 × 700. Feux de circulation placés 18 × 22 au-dessus de la barre latérale (barre de titre superposée);
  la barre d'outils et le haut de la barre latérale vide sont des régions de glisser-fenêtre.
- Sidebar: marque, navigation groupée (`text-label` titres de groupe, 13.5 px items), paramètres épinglés au bas.
  Les étiquettes ont environ 152 px; les traductions doivent s'adapter ([Contenu](content.md)).
- Rail : seulement sur les pages qui en ont une, accostée à 1240 px et plus large, autrement ouvert à partir de la barre d'outils comme une superposition.
- Contenu principal: `px-28px pb-28px`, sections 24 à 28 à part, en-tête de page (`text-title1` + une ligne de `text-body-sm`
  texte secondaire) en haut.

Site web — `OnAppShell` en mode document pour les pages de stockage, une mise en page d'atterrissage complète pour les pages de marketing:

- Largeur de la page 1240 max avec gouttières 24 px; navigation supérieure 64 px; points d'arrêt `sm` 640, `md` 768, `lg` 1024, `xl` 1280,
  `2xl` 1440.
- Les pages de stockage réutiliser le shell de bureau: sidebar et toolbar sont collants de `md`; ci-dessous `md` une barre compacte avec un menu
  remplace les deux; le rail est à côté du contenu de `xl` et en dessous, autrement.
- Pages marketing : saigné `surface.page`, sections centrées, fenêtres d'application simulées utilisant les mêmes jetons que l'application.

<a id="grids"></a>

## Grilles

- Les grilles de cartes remplissent des colonnes d'au moins 260 px avec 12 px (`grid-cols-[repeat(auto-fill,minmax(260px,1fr))]`): trois
  dans une fenêtre de bureau complète, moins comme il rétrécit. Denser app grilles à l'intérieur d'une page avec un rail utilisent 220 px.
- Carreaux statistiques: 2 colonnes dans le rail, jusqu'à 5 sur une page de détail.
- Paramètres : une colonne de 720 px `OnCard` groupes avec des lignes (étiquette + pointe gauche, contrôle à droite); navigation de section sur le
  gauche à 180 px.
- Formulaires sur le web: une seule colonne de 720 px; étiquettes au-dessus des champs.

<a id="density"></a>

## Densité

L'interface utilisateur de bureau est dense, mais pas exigu : 32–40 lignes px dans les listes, 28–34 commandes px, 13–13.5 px texte. Toucher les cibles sur le
web sont au moins 32 px (44 px pour les actions mobiles primaires).
