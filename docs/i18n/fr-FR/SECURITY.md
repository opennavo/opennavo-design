[English](../../../SECURITY.md) · [简体中文](../zh-CN/SECURITY.md) · [繁體中文](../zh-Hant/SECURITY.md) · [日本語](../ja-JP/SECURITY.md) · [Español](../es-ES/SECURITY.md) · [Português (Brasil)](../pt-BR/SECURITY.md) · [Русский](../ru-RU/SECURITY.md) · [Deutsch](../de-DE/SECURITY.md) · **Français** · [Italiano](../it-IT/SECURITY.md)

> La version anglaise fait référence. Les traductions sont des brouillons produits localement par traduction automatique et nécessitent une relecture humaine. Le code et les textes des licences restent inchangés.

# Politique de sécurité

## Signaler une vulnérabilité

Ne divulguez pas de vulnérabilités dans les issues ou pull requests publics. Envoyez à **admin@opennavo.com** le paquet concerné, sa version ou son commit, les étapes de reproduction et l’impact attendu. Retirez les identifiants et les données personnelles des pièces jointes.

Les signalements concernant le traitement non sécurisé du HTML et des URL, les dépendances vulnérables et les divulgations accidentelles de données sont les bienvenus. Utilisez des données fictives et testez uniquement les applications et appareils que vous contrôlez. Nous enquêterons et coordonnerons la divulgation, sans garantir de délai de réponse.

## Versions prises en charge

Pendant la phase d’aperçu, les correctifs ciblent `main` et la dernière version publiée, lorsqu’elle existe. Les anciens aperçus et les forks ne sont pas maintenus séparément.

## Responsabilités d’intégration

`OnMarkdownView` affiche le HTML fourni par l’application hôte. Nettoyez le HTML non fiable avant de le transmettre et n’enregistrez que des données SVG fiables. L’application reste responsable de l’accès aux données, de l’authentification et des règles de contenu. Les préférences de langue et de thème de la galerie sont conservées localement.
