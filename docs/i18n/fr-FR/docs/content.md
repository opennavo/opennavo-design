[English](../../../content.md) · [简体中文](../../zh-CN/docs/content.md) · [繁體中文](../../zh-Hant/docs/content.md) · [日本語](../../ja-JP/docs/content.md) · [Español](../../es-ES/docs/content.md) · [Português (Brasil)](../../pt-BR/docs/content.md) · [Русский](../../ru-RU/docs/content.md) · [Deutsch](../../de-DE/docs/content.md) · **Français** · [Italiano](../../it-IT/docs/content.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="content"></a>

# Contenu

Les mêmes règles s'appliquent dans toutes les langues; l'anglais et le chinois simplifié sont écrits d'abord, le
huit autres langues sont traduites et examinées.

<a id="voice"></a>

## Voix

Un ami capable qui explique ce qui se passe, pas un vendeur et pas un fichier journal.

- **Dis ce qui se passe.** "Déplacez 14 objets dans la corbeille. Vous pouvez les restaurer à partir de là." pas "Vous êtes sûr?"
- **Dis où vont les données.** "Seul sur ce Mac; rien n'est téléchargé." "La recherche va directement de ce Mac à Apple."
- **Les propres échecs, offrez la prochaine étape.** "Certains contenus n'ont pas pu être chargés. Le contenu précédemment chargé a été conservé."
  "La vérification de mise à jour n'a pas pu être terminée. Essayez encore, ou vérifiez le réseau."
- **Pas de hype, pas de remplissage.** Pas de "Oups!", pas de marques d'exclamation, pas de "simplement", "juste", "sans couture", "puissant".
- **Du béton sur l'abstrait.** Nommez l'application, le nombre, la taille, l'heure. "Docker Desktop a besoin d'administrateur
  permission" bat "Permission requise".

<a id="wording-rules"></a>

## Règles de rédaction

- **Boutons** sont des verbes qui nomment l'action: Installer, Mettre à jour tous (4), Déplacer vers la corbeille, Retourner, Ouvrir OpenNavo.
  Les étiquettes de boutons et les éléments de menu en anglais utilisent la case titre; tout le reste utilise la case phrase.
- **Titres** sont de courtes phrases ou des états nominaux: "Votre liste est vide", "Pas de résultats pour --vscode.
- **Désignation des marchandises** Deux au plus, mettez l'action après l'explication.
- **Conseils** sous les paramètres disent ce que l'option fait quand elle est allumée, pas ce que l'étiquette dit déjà.
- **Boîtes de dialogue de confirmation**: le titre pose la question spécifique ("Supprimer le travail de ce Mac?"), le corps déclare
  conséquence, confirmer bouton répète le verbe.
- **Erreurs**: ce qui s'est mal passé, selon les termes de l'utilisateur, plus quoi faire. Les codes d'erreur vont dans les détails ou les journaux, pas les titres.
- **Lignes de confidentialité** Commencez par une icône de verrouillage et restez une ligne.
- Utiliser les citations bouclées (-), les apostrophes réels, le caractère ellipse (...), le signe de multiplication (×) et le
  flèche (→) pour les modifications de version: `1.2.9 → 1.3.0`.
- Les noms des produits et des plateformes conservent leur orthographe : macOS, iPhone, App Store, GitHub, Homebrew. Les noms d'applications sont affichés comme suit :
  le développeur les écrit.

<a id="chinese-简体--繁體"></a>

## Chinoise (--)

- 用自然、具体的口语书面语，不写套话和模板句（“一站式”“全方位”“赋能”“轻松实现”之类）。
- 按钮用动词短语：“安装”“全部更新（4）”“移到废纸篓”。不要“确定”“好的”。
- 中文 中文 中文 , 中文 OpenNavo 中打开”；与全角标点相邻时不加。
- 全角标点：，。；：？！“”（）——……；引号用“”，嵌套用‘’。
- 数量用“个”“款”“项”等合适的量词，大数用“万”“亿”（由格式化函数处理）。
- 繁体中文是独立的语言版本：用台湾、香港用户熟悉的词（“軟體”“資料夾”“設定”），不是简体的字形转换。

<a id="numbers-sizes-and-dates"></a>

## Nombres, tailles et dates

Toujours formater à travers les aides partagées (`Intl`-based), jamais par concaténation de cordes:

| Genre            | Règle                                                                           | Exemples                   |
| ---------------- | ------------------------------------------------------------------------------- | -------------------------- |
| Nombres          | Groupes locaux; forme compacte dans des espaces restreints                      | 17,392 · 1.7 万 · 1,7 тыс. |
| Tailles          | Unités décimales (1 KB = 1000 B), une décimale moins de 10                      | 768 Mo · 2,3 Go            |
| Régimes          | Taille par seconde                                                              | 560.6 KB/s                 |
| Pourcentage      | Nombres entiers à moins qu'une décimale ne change de sens                       | 62% · 0.8%                 |
| Dates            | Ordre local, mois court; omettre l'année en cours                               | 23 octobre · 10:23日 · 23. |
| Durées relatives | Juste maintenant → minutes → heures → hier → jours (moins d'une semaine) → date | Il y a 2 heures · --       |
| Heures           | 24 heures sur 24 dans toutes les langues                                        | 09:00 · 21:41              |
| Durées           | Secondes sous une minute, puis minutes et secondes                              | 38 s · 2 mn 5 s · 2 mn 5 s |
| Versions         | Tel que publié; flèches entre                                                   | 4.49.9 → 4.50.0            |

Les pluralismes utilisent les catégories plurielles de la localité (anglaise/autre; russee/feux/nombreux/autre; chinois et japonaise)
— jamais `item(s)`.

<a id="interface-languages"></a>

## Langues d'interface

| Code      | Langue                  | Remarques                                                    |
| --------- | ----------------------- | ------------------------------------------------------------ |
| `en-US`   | changements climatiques | Langue de rédaction; cas de phrase                           |
| `zh-CN`   | 简体中文                | Source de la vérité pour le sens dans OpenNavo               |
| `zh-Hant` | 繁體中文                | Vocabulaire taïwanais/hongkongais; les dates suivent `zh-TW` |
| `ja-JP`   | 日本語                  | Polite, concis; aucune transformation en majuscules          |
| `es-ES`   | Espagne                 | Souvent de 25 à 35 % de plus que l'anglais                   |
| `pt-BR`   | Português (Brasil)      | Souvent de 25 à 35 % plus longtemps                          |
| `ru-RU`   | Русский                 | Souvent de 30 à 60 % de plus; quatre formes plurielles       |
| `de-DE`   | Belgique                | Composés longs; permettre l'emballage                        |
| `fr-FR`   | Français                | Espace non révolutionnaire avant : ; ? !                     |
| `it-IT`   | Italiano                | Souvent 20 à 30% plus longtemps                              |

Règles:

- **Design pour la langue la plus longue.** Une étiquette latérale a environ 152 px à 13,5 px; mesurer le russe, l'espagnol et
  L'allemand contre elle et raccourcir la traduction plutôt que de tronquer. Boutons peuvent croître; ne jamais fixer leur largeur.
- **Pas de concaténation.** Des phrases complètes avec des détenteurs de places nommés (`{count}`, `{name}`); les traducteurs les déplacent.
- **Chaque local a toutes les clés.** Une traduction manquante revient à l'anglais, et CI vérifie les clés et les placeholders.
- **Marques et dénominations de produits** ne sont pas traduits; le nom de l'application reste OpenNavo dans toutes les langues.
- **Traduction automatique** est marqué comme tel lorsque le contenu (pas l'interface) est traduit automatiquement, avec un lien vers
  l'original.
