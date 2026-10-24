[English](../../../README.md) · [简体中文](../../zh-CN/docs/README.md) · [繁體中文](../../zh-Hant/docs/README.md) · [日本語](../../ja-JP/docs/README.md) · [Español](../../es-ES/docs/README.md) · [Português (Brasil)](../../pt-BR/docs/README.md) · [Русский](../../ru-RU/docs/README.md) · [Deutsch](../../de-DE/docs/README.md) · **Français** · [Italiano](../../it-IT/docs/README.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="opennavo-design--specification"></a>

# OpenNavo Conception — spécification

OpenNavo La conception est le système de conception de la OpenNavo apps : le macOS client (Tauri + Vue), le site Internet (Nuxt) et les
apps qui les suivent. Ce dossier est le standard écrit. Les paquets de code l'implémentent, et la référence symbolique est
généré à partir de la même source, de sorte que les nombres ici correspondent toujours à ce qui expédie.

Lisez dans cet ordre la première fois:

1. [Principes](principles.md) — ce pour quoi le système optimise, et les règles qui règlent les arguments.
2. [Couleur](color.md) — les surfaces, le texte, les bordures, la marque, le statut, les thèmes sombres et clairs et leurs règles de contraste.
3. [Thèmes](theming.md) — comment sombre, lumière et "suivre le système" fonctionnent sur le web, en Tauri, Flutter et SwiftUI,
   et comment une autre application re-marque le système.
4. [Typographie](typography.md), [Mise en page](layout.md) (rayonnement, hauteur, enveloppe de l'application), [Motion](motion.md),
   [Iconographie](iconography.md).
5. [Composantes](components.md) — les Vue ensemble de composants et quand utiliser chaque partie.
6. [Modèles](patterns.md) — la navigation, les listes, les formulaires, les retours, les actions destructrices, le chargement et les états vides,
   les permissions, les popovers du menu bar.
7. [Contenu](content.md) — la voix, les règles de rédaction, les numéros et les dates, les dix langages d'interface.
8. [Accessibilité](accessibility.md) et [Plateformes](platforms.md) (macOS bureau, web, Flutter, SwiftUI).
9. [Marque](brand.md) — la couche, les noms et les logos de la marque.
10. [Adoption](adoption.md) — lancer une nouvelle application sur le système, et déplacer une application qui a copié OpenNavoLes paquets.

Référence: [tous les jetons](reference/tokens.md) (générée à partir de `tokens/tokens.json`; ne pas modifier à la main).

<a id="conventions-in-this-spec"></a>

## Conventions dans ce domaine

- **Doit** et **jamais** sont des règles; un examen devrait les bloquer. **Devraient** est le défaut qui a besoin d'une raison pour
  Tout le reste, c'est des conseils.
- Les noms des jetons sont écrits comme leurs JSON chemin (`surface.card`), avec CSS variable (`--on-surface-card`) ou les
  classe utilitaire (`bg-surface-card`) où le contexte est le code.
- Les mesures sont CSS pixels (points sur les plates-formes Apple, pixels logiques dans Flutter).
- Des exemples proviennent de OpenNavo. Une application soeur maintient la structure et échange la couche de marque ([Marque](brand.md)).
