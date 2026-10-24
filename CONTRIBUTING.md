**English** · [简体中文](docs/i18n/zh-CN/CONTRIBUTING.md) · [繁體中文](docs/i18n/zh-Hant/CONTRIBUTING.md) · [日本語](docs/i18n/ja-JP/CONTRIBUTING.md) · [Español](docs/i18n/es-ES/CONTRIBUTING.md) · [Português (Brasil)](docs/i18n/pt-BR/CONTRIBUTING.md) · [Русский](docs/i18n/ru-RU/CONTRIBUTING.md) · [Deutsch](docs/i18n/de-DE/CONTRIBUTING.md) · [Français](docs/i18n/fr-FR/CONTRIBUTING.md) · [Italiano](docs/i18n/it-IT/CONTRIBUTING.md)

# Contributing

Thanks for helping. OpenNavo Design is extracted from the OpenNavo apps and is maintained alongside them; changes
should keep every app in the family working.

## Ground rules

- **Tokens first.** Change `tokens/tokens.json`, run `pnpm gen`, commit the generated files with the change. Never
  edit a file marked _generated_.
- **Both themes.** Every new color token has a dark `value` and, when it differs, a `light` value. Add or update a
  contrast test for any new text/background pair (`packages/tokens/tests`).
- **Roles, not looks.** If an existing token has the right color but the wrong job, add a token for the job
  ([docs/principles.md](docs/principles.md#rules-that-settle-arguments)).
- **Components stay generic.** No product names, product data shapes or network calls in `packages/vue`; apps pass
  content in through props and slots.
- **Docs move with code.** A new token, component prop or behavior updates the matching page in `docs/`.
- **English first.** Documentation, source comments, errors and developer tooling default to English. English (`en-US`) is the source language for component strings; preserve explicitly localized content.
- **Ten languages.** New component strings go into all ten message files in `packages/vue/src/messages`, with matching keys and placeholders. English remains the default; do not infer a language from browser settings.

## Checks

```sh
pnpm install
pnpm gen && pnpm check
pnpm test && pnpm typecheck
pnpm format:check
swift test
(cd packages/flutter && flutter analyze && flutter test)
```

CI runs the same commands.

## Commits and pull requests

Small, focused pull requests with a short description of the user-visible change and screenshots in both themes for
anything visual. By contributing you agree that your contribution is licensed under the MIT License of this
repository.

## Security review before commits

Run `pnpm secrets:worktree` while preparing changes, then stage the intended files and run `pnpm secrets:staged`.
Run `pnpm secrets:history` before publishing reachable history. These commands require Go 1.23+ and network access
for the first download of the pinned Gitleaks scanner. A scanner failure blocks the check; do not bypass it.

Review every staged file and the complete staged diff, including existing changes, generated files and assets.
Do not commit credentials, private keys, real environment configuration, private service addresses or personal data.
Use placeholders and fictional fixtures. Ignoring a file does not protect it once it is tracked or staged.
Confirm that binary attachments can be made public. Scan results only show paths, line numbers and rule IDs;
a clean scan does not replace manual review. Recheck after any staged content changes.

Report vulnerabilities privately using [SECURITY.md](SECURITY.md). Never include secrets in public issues or logs.

Use English Conventional Commit messages and English GitHub release titles and notes. Describe what changed,
why, and which checks actually ran. Do not describe local tests as passing remote CI. API stability is not
promised before 1.0; document breaking changes in the changelog.

## Translations and previews

English is the source for all ten languages: `en-US`, `zh-CN`, `zh-Hant`, `ja-JP`, `es-ES`, `pt-BR`, `ru-RU`,
`de-DE`, `fr-FR` and `it-IT`. Component messages live in `packages/vue/src/messages`; gallery messages live in
`packages/vue/gallery/src/messages`. Translate visible story copy as well as navigation and accessible labels.
Keep component names, enum values, URLs, code samples and license originals unchanged.

The complete documentation mirrors live in `docs/i18n/<locale>/`, following the English repository paths.
New translations start as offline machine-assisted drafts and need language review, especially technical and legal
prose. English remains authoritative. Review the Brazilian Portuguese vocabulary separately from generic Portuguese.
When English changes, update the corresponding files in every language and then record its SHA-256 in
`docs/i18n/manifest.json`. Run `pnpm check:i18n` to verify coverage, source freshness, links and code examples.
Do not update the manifest merely to silence a failure without updating the translations.

README screenshots in `docs/previews` show fictional sample data from the real gallery. Capture them with
browser-use at the documented theme and language, without browser chrome or personal information.
