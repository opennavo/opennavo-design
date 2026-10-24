[English](../../../CONTRIBUTING.md) · [简体中文](../zh-CN/CONTRIBUTING.md) · [繁體中文](../zh-Hant/CONTRIBUTING.md) · [日本語](../ja-JP/CONTRIBUTING.md) · [Español](../es-ES/CONTRIBUTING.md) · [Português (Brasil)](../pt-BR/CONTRIBUTING.md) · [Русский](../ru-RU/CONTRIBUTING.md) · [Deutsch](../de-DE/CONTRIBUTING.md) · **Français** · [Italiano](../it-IT/CONTRIBUTING.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

<a id="contributing"></a>

# Contribution

Merci d'avoir aidé. OpenNavo La conception est extraite de la OpenNavo applications et est maintenu à leurs côtés; changements
devrait garder chaque application dans la famille travailler.

<a id="ground-rules"></a>

## Règles de base

- **Les jetons d'abord.** Changement `tokens/tokens.json`, cours `pnpm gen`, commit les fichiers générés avec le changement. Jamais
  modifier un fichier marqué généré .
- **Les deux thèmes.** Chaque nouveau jeton de couleur a un sombre `value` et, lorsqu'il diffère, `light` valeur. Ajouter ou mettre à jour une
  test de contraste pour toute nouvelle paire texte/arrière-plan (`packages/tokens/tests`).
- **Les rôles, pas les regards.** Si un jeton existant a la bonne couleur mais le mauvais travail, ajouter un jeton pour le travail
  ([docs/principes.md](docs/principles.md#rules-that-settle-arguments)).
- **Les composants restent génériques.** Aucun nom de produit, forme de données de produit ou appels réseau dans `packages/vue`; les applications passent
  contenu à travers des accessoires et des fentes.
- **Les docteurs bougent avec le code.** Un nouveau jeton, composant prop ou comportement met à jour la page correspondante dans `docs/`.
- **Anglais d'abord.** Documentation, commentaires sources, erreurs et outillage développeur par défaut à l'anglais.`en-US`) est le langage source pour les chaînes de composants ; conservez explicitement le contenu localisé.
- **Dix langues.** Les nouvelles chaînes de composants entrent dans les dix fichiers de messages `packages/vue/src/messages`, avec les touches correspondantes et les placeholders. L'anglais reste la valeur par défaut ; ne pas déduire une langue des paramètres du navigateur.

<a id="checks"></a>

## Contrôles

```sh
pnpm install
pnpm gen && pnpm check
pnpm test && pnpm typecheck
pnpm format:check
swift test
(cd packages/flutter && flutter analyze && flutter test)
```

CI exécute les mêmes commandes.

<a id="commits-and-pull-requests"></a>

## Commits et demandes de tirage

Petites demandes de tirage ciblées avec une brève description du changement visible par l'utilisateur et des captures d'écran dans les deux thèmes pour
En contribuant, vous acceptez que votre contribution est autorisée en vertu de la MIT Licence de ce
dépôt.

<a id="security-review-before-commits"></a>

## Examen de la sécurité avant les engagements

Exécuter `pnpm secrets:worktree` lors de la préparation des modifications, puis mettre en place les fichiers prévus et exécuter `pnpm secrets:staged`.
Exécuter `pnpm secrets:history` avant la publication de l'historique accessible. Ces commandes nécessitent Go 1.23+ et accès réseau
pour le premier téléchargement du Gitleaks scanner. Une panne de scanner bloque la vérification; ne la contournez pas.

Examinez chaque fichier et la diff étape complète, y compris les changements existants, les fichiers et les actifs générés.
Ne pas commettre d'identifications, de clés privées, de configuration d'environnement réel, d'adresses de service privé ou de données personnelles.
Utilisez des supports de place et des accessoires fictifs. Ignorer un fichier ne le protège pas une fois qu'il est suivi ou mis en scène.
Confirmer que les pièces jointes binaires peuvent être rendues publiques. Les résultats de l'analyse n'affichent que les chemins, les numéros de ligne et les identifiants de règles;
un scan propre ne remplace pas l'examen manuel. Revérifier après tout changement de contenu par étapes.

Signaler les vulnérabilités en privé [SÉCURITÉ md](SECURITY.md). N'incluez jamais de secrets dans les dossiers publics ou les journaux.

Utiliser les messages de Commit et l'anglais GitHub Décrivez ce qui a changé,
ne pas décrire les tests locaux comme passant à distance CI. API stabilité n'est pas
promis avant 1.0; document brisant les changements dans le journal de changement.

<a id="translations-and-previews"></a>

## Traductions et aperçus

L'anglais est la source des dix langues: `en-US`, `zh-CN`, `zh-Hant`, `ja-JP`, `es-ES`, `pt-BR`, `ru-RU`,
`de-DE`, `fr-FR` et `it-IT`. Les messages des composants vivent dans `packages/vue/src/messages`; messages de galerie en direct dans
`packages/vue/gallery/src/messages`. Traduire la copie d'histoire visible ainsi que la navigation et les étiquettes accessibles.
Conserver les noms de composants, les valeurs enum, les URL, les échantillons de code et les originaux de licence inchangés.

La documentation complète miroirs live in `docs/i18n/<locale>/`, suivant les chemins de dépôt anglais.
Les nouvelles traductions commencent par des projets hors ligne assistés par machine et nécessitent un examen linguistique, en particulier technique et juridique
prose. L'anglais reste faisant autorité. Passez en revue le vocabulaire portugais brésilien séparément du portugais générique.
Lorsque l'anglais change, mettez à jour les fichiers correspondants dans chaque langue et enregistrez son SHA-256 dans
`docs/i18n/manifest.json`. Courez `pnpm check:i18n` vérifier la couverture, la fraîcheur de la source, les liens et les exemples de code.
Ne mettez pas à jour le manifeste simplement pour faire taire un échec sans mettre à jour les traductions.

README captures d'écran dans `docs/previews` montrer des exemples fictifs de données de la galerie réelle.
utilisation du navigateur au thème documenté et la langue, sans navigateur chrome ou renseignements personnels.
