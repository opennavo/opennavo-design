[English](../../../iconography.md) · [简体中文](../../zh-CN/docs/iconography.md) · [繁體中文](../../zh-Hant/docs/iconography.md) · [日本語](../../ja-JP/docs/iconography.md) · [Español](../../es-ES/docs/iconography.md) · [Português (Brasil)](../../pt-BR/docs/iconography.md) · [Русский](../../ru-RU/docs/iconography.md) · [Deutsch](../../de-DE/docs/iconography.md) · **Français** · [Italiano](../../it-IT/docs/iconography.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="iconography"></a>

# Iconographie

<a id="interface-icons"></a>

## icônes d'interface

- **Réglage & #160;:** [Lucide](https://lucide.dev) (ISC licence), groupée en sous-ensemble hors ligne — seules les icônes listées dans
  `packages/vue/src/icons/names.ts` ship, rendu comme en ligne SVG pour qu'ils travaillent dans SSR et sans réseau.
- **Tailles:** 16 px dans les menus et la navigation, 15 px dans `md`/`lg` boutons, 14 px dans `xs`/`sm` boutons et puces, 12–13 px
  en ligne avec les métadonnées. Icônes à l'intérieur d'un rendu 26–32 px à 14–16 px.
- **Atteinte et couleur :** Lucide's 2 px course à 24 px, à l'échelle; les icônes prennent `currentColor`, donc ils suivent le texte
  Jeton de leur contexte. Ne pas color icônes indépendamment à moins qu'ils portent statut.
- **Signification:** une icône par concept dans l'application (par exemple `circle-arrow-down` pour les mises à jour, `shield-check` pour
  sécurité, `eraser` pour le nettoyage). Les boutons Icon-only ont toujours un `aria-label` et un bout d'outil.
- **Ajout d'icônes & #160;:** le paquet ne regroupe que les icônes de ses composants dessin. Une application ajoute sa propre avec
  `registerIcons(getIcons(lucide, ['compass', 'settings']))` (`@iconify/utils` + `@iconify-json/lucide`, ou tout ensemble
  Iconifier JSON forme, adressée comme `prefix:name`) une fois au démarrage, donc son paquet porte exactement ce qu'il utilise.
  les composants eux-mêmes doivent entrer dans `packages/vue/src/icons/names.ts`, alors `pnpm gen`. Noms inconnus rendus
  rien et mettre en garde dans le développement.

<a id="icon-tiles"></a>

## Tuiles d'icônes

Les petites tuiles carrées tiennent une icône dans les listes de fonctionnalités, les paramètres et les avis: 26–40 px, `rounded-[7–9px]` (ou
`rounded-app-icon` à 40 px et plus), `bg-surface-raised` avec `text-ink-secondary`, ou un statut subtil remplir avec le
couleur d'état pour les éléments de l'état.

<a id="app-icons"></a>

## Icônes de l'application

- App artwork est montré comme livré, `object-contain`, pas de masque ajouté: macOS Les icônes incluent déjà leur forme.
- L'œuvre manquante revient à une **carrelage de lettres**: un gradient de 160° de l'accent de l'application (ou une couleur dérivée de
  identificateur) obscurci 18 %, initiales blanches à 42 % du côté, `rounded-app-icon`, `shadow-app-icon`.
- Les outils de ligne de commande utilisent la **Tuiles terminales**: une tuile sombre dégradée dans les deux thèmes avec une abréviation monospace à
  30% du côté et une barre colorée.
- Tailles utilisées: 20, 24, 26, 28, 30, 32, 40, 44, 46, 54, 64, 96, 118 px.

<a id="brand-mark"></a>

## Marque

Chaque application porte sa propre marque ; les composants du système la prennent à travers une `brand` slot. Marques de marque ne font pas partie de ce
licence du dépôt ([Marque](brand.md)).
