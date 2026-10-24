[English](../../../typography.md) · [简体中文](../../zh-CN/docs/typography.md) · [繁體中文](../../zh-Hant/docs/typography.md) · [日本語](../../ja-JP/docs/typography.md) · [Español](../../es-ES/docs/typography.md) · [Português (Brasil)](../../pt-BR/docs/typography.md) · [Русский](../../ru-RU/docs/typography.md) · [Deutsch](../../de-DE/docs/typography.md) · **Français** · [Italiano](../../it-IT/docs/typography.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="typography"></a>

# Typographie

<a id="typeface"></a>

## Taille de type

Les applications utilisent les **police système UI** — SF Pro sur les plateformes Apple, l'interface utilisateur Segoe sous Windows — via
`@opennavo/design-vue/system-fonts.css`, avec les visages CJK de la plateforme pour les Chinois et Japonais:

| Langue                                                    | Pioche (système-fonts.css)                                                        |
| --------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Latin, cyrillique                                         | `-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`                       |
| Chinois simplifié (`:lang(zh)`)                           | `-apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', sans-serif` |
| Chinois traditionnel (`:lang(zh-Hant)`, `zh-TW`, `zh-HK`) | `… 'PingFang TC', 'Microsoft JhengHei', sans-serif`                               |
| Japonais (`:lang(ja)`)                                    | `… 'Hiragino Sans', 'Yu Gothic', sans-serif`                                      |
| Code, versions, chemins                                   | `ui-monospace, 'SFMono-Regular', Menlo, Consolas, 'Liberation Mono', monospace`   |

La police système correspond au système d'exploitation, ne coûte aucun téléchargement et rend CJK le meilleur.
(`font.family.*`, qui commencent par Inter) sont les **pile de marque** pour les endroits où la police système n'est pas disponible
ou non souhaités: généré partage d'images, marketing d'œuvres d'art, et la galerie de composants. `lang` le `<html>` (et
tout élément dans une autre langue) donc la pile droite s'applique.

Inter, lorsqu'il est utilisé, fonctionne avec `font-feature-settings: "cv11", "ss01"` (un étage a, chiffres alternés) et
`font-optical-sizing: auto`; `base.css` les deux.

<a id="scale"></a>

## Échelle

`text-{name}` set size, line height, poids and tracking agether. Utilisez l'échelle; ne définissez pas les tailles de police à la main
sauf pour les tailles denses énumérées sous Petit texte .

| Classe          | Taille / hauteur de la ligne | Poids | Suivi             | Utilisation                                         |
| --------------- | ---------------------------- | ----- | ----------------- | --------------------------------------------------- |
| `text-hero`     | 76 / 78                      | 600   | −0,035em          | Site web home héro seulement                        |
| `text-section`  | 46 / 50                      | 600   | −0,03em           | Titres des sections du site Web                     |
| `text-display`  | 40 / 44                      | 600   | −0,03em           | Titres des héros                                    |
| `text-title1`   | 28 / 34                      | 600   | −0,02em           | Titres des pages                                    |
| `text-title2`   | 22 / 28                      | 600   | −0,02em           | Titres des dialogues, en-têtes compacts de détails  |
| `text-headline` | 16 / 24                      | 600   | −0,01em           | Titres des sections, titres des cartes              |
| `text-stat`     | 20 / 26                      | 600   | −0,015em          | Valeurs statistiques                                |
| `text-body`     | 14 / 22                      | 400   | 0                 | Texte du corps                                      |
| `text-body-sm`  | 13 / 20                      | 400   | 0                 | Listes, tables, lignes de paramètres                |
| `text-caption`  | 12 / 18                      | 400   | 0                 | Informations secondaires                            |
| `text-label`    | 11 / 16                      | 600   | 0,08em, majuscule | Étiquettes de groupe (sections latérales, sourcils) |
| `text-mono`     | 12 / 18                      | 400   | 0                 | Commandes, versions, journaux                       |

Sur les écrans étroits, les rubriques descendent l'échelle plutôt que de se rétrécir librement : le héros de la maison est `text-display` ci-dessous
768 px, `text-section` de 768 px et `text-hero` de 1024 px; les titres caractéristiques-héros tombent à 36 px en dessous de 768 px.
windows ne vont jamais en dessous de leur largeur minimale, donc le texte de l'application ne s'échelle pas.

<a id="small-text"></a>

### Petit texte

L'interface utilisateur de bureau dense utilise quelques tailles entre les deux, toujours avec des jetons pour la couleur: 12,5 px pour les commandes compactes et la table
cellules, 11,5 px pour les métadonnées sous une ligne, 10,5 px pour les badges minuscules. Rien de plus petit que 10,5 px, et rien en dessous
12 px contient des informations essentielles.

<a id="rules"></a>

## Règles

- **Numéros:** Utilisation `tabular-nums` où les chiffres s'alignent ou changent en place (statistiques, tableaux, progrès,
  les compteurs, les moniteurs). Les numéros de format, les tailles et les dates pour le local ([Contenu](content.md)).
- **Poids:** 400 pour le texte, 500 pour les commandes et les étiquettes segmentées, 600 pour les en-têtes, les étiquettes de boutons et l'accent.
  700+ dans l'interface.
- **Mettre l'accent sur:** bold (600) à l'intérieur d'une phrase, jamais seule couleur. `**…**` et
  rendu comme `text-ink-primary` poids 600 dans le texte secondaire.
- **Haut de page** seulement par `text-label`, et seulement pour le latin et le cyrillique ; les étiquettes CJK ne sont pas transformées.
- **Longueur de la ligne:** garder le texte du corps sous environ 72 caractères (ou 40 caractères CJK) par ligne; descriptions en héros
  sont plafonnés autour de 430 px.
- **Rubriques** équilibrer leurs lignes (`text-wrap: balance`) sur les pages de commercialisation; les rubriques CJK se cassent à la ponctuation, non
  mi-mot, où le navigateur permet.
- **Truncation:** tronquer les étiquettes monolignes avec une ellipse et exposer le texte complet dans un tooltip ou `title`;
  ne jamais tronquer les nombres ou l'état.
- **Espacement des CJK:** copie place un espace de moitié de la largeur entre CJK et lettres ou chiffres latins (« , 30 ,
  """" 768 Mo") et aucun à côté de la ponctuation de la largeur totale. `text-autospace: normal` en `base.css` ne remplit qu'une lacune
  copie manquée; il ne remplace jamais l'espace dans le texte source.
