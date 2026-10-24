**English** · [简体中文](docs/i18n/zh-CN/SECURITY.md) · [繁體中文](docs/i18n/zh-Hant/SECURITY.md) · [日本語](docs/i18n/ja-JP/SECURITY.md) · [Español](docs/i18n/es-ES/SECURITY.md) · [Português (Brasil)](docs/i18n/pt-BR/SECURITY.md) · [Русский](docs/i18n/ru-RU/SECURITY.md) · [Deutsch](docs/i18n/de-DE/SECURITY.md) · [Français](docs/i18n/fr-FR/SECURITY.md) · [Italiano](docs/i18n/it-IT/SECURITY.md)

# Security policy

## Reporting a vulnerability

Do not disclose vulnerabilities through public issues or pull requests. Email
**admin@opennavo.com** with the affected package and version or commit, reproduction
steps and expected impact. Remove credentials and personal data from attachments.

Reports about unsafe HTML handling, URL handling, dependency vulnerabilities and
unintended disclosure of application data are welcome. Use synthetic data and test
only applications and devices you control. We will investigate and coordinate
disclosure with the reporter; no response-time guarantee is offered.

## Supported versions

During the early preview, fixes target `main` and the latest release, when one
exists. Older previews and forks are not maintained separately.

## Integration boundaries

`OnMarkdownView` renders HTML supplied by the host application. Sanitize untrusted
HTML before passing it to the component. Only register trusted icon SVG data.
Applications remain responsible for their data access, authentication and content
policies. Language and theme preferences in the gallery are stored locally.
