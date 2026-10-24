# OpenNavo Design

The design system behind [OpenNavo](https://opennavo.com) — the free, open-source Homebrew app store for Mac — and the
apps that follow it. One set of tokens, a written specification and ready-made components, so every app in the family
looks, reads and behaves the same, in dark and light.

[简体中文](README.zh-CN.md)

## Language and release status

English (`en-US`) is the default component language and the source for translations. The gallery starts in English unless a language was explicitly selected through its URL or saved settings; browser language does not override it. Components also support Simplified Chinese, Traditional Chinese, Japanese, Spanish, Brazilian Portuguese, Russian, German, French and Italian.

Documentation, source comments, developer tooling and GitHub release notes default to English. Chinese documentation is a translation of the English source.

Version 0.1.0 is an early preview: APIs may change before 1.0, and packages are not published to registries yet. Report vulnerabilities privately as described in [SECURITY.md](SECURITY.md).

## What's inside

| Path                                                                  | Package                   | For                                                                                                                          |
| --------------------------------------------------------------------- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [`tokens/tokens.json`](tokens/tokens.json)                            | —                         | The single source: colors (dark + light), type, spacing, radii, shadows, motion, layout                                      |
| [`packages/tokens`](packages/tokens)                                  | `@opennavo/design-tokens` | CSS variables for both themes, UnoCSS preset, Tailwind CSS v4 theme and v3 preset, typed values, DTCG files for design tools |
| [`packages/vue`](packages/vue)                                        | `@opennavo/design-vue`    | Vue 3 components (buttons, menus, dialogs, tables, app shell …), theme helpers, base styles, component gallery               |
| [`packages/swift`](packages/swift) + [`Package.swift`](Package.swift) | `OpenNavoDesign`          | SwiftUI tokens: dynamic colors, spacing, type, motion                                                                        |
| [`packages/flutter`](packages/flutter)                                | `opennavo_design`         | Flutter tokens as `ThemeExtension`s and a `ThemeData` builder                                                                |
| [`docs`](docs/README.md)                                              | —                         | The specification: principles, color, theming, components, patterns, content, accessibility                                  |

Everything under `packages/*/` that says _generated_ is rendered from `tokens/tokens.json` by `pnpm gen`; CI fails if
a generated file is edited by hand or out of date.

## Quick start

The packages are not on a registry yet; depend on this repository directly (pnpm git subdirectory dependencies,
SwiftPM, or a pub `git` dependency), or copy `packages/tokens/dist` into your app.

### Vue 3 + UnoCSS (Vite, Tauri)

```ts
// main.ts — order matters: reset, tokens, base styles, system fonts, then UnoCSS
import '@unocss/reset/tailwind.css';
import '@opennavo/design-tokens/tokens.css';
import '@opennavo/design-vue/base.css';
import '@opennavo/design-vue/system-fonts.css';
import 'virtual:uno.css';
import { createOnUi } from '@opennavo/design-vue';

app.use(createOnUi({ locale })); // a ref with one of the ten locales
```

```ts
// uno.config.ts
import { defineConfig, presetWind3 } from 'unocss';
import { presetOpenNavo } from '@opennavo/design-tokens/uno-preset';

export default defineConfig({ presets: [presetWind3(), presetOpenNavo()] });
```

```vue
<OnButton variant="primary" icon="download">Install</OnButton>
<OnCard><p class="text-body text-ink-secondary">Only on this Mac; nothing is uploaded.</p></OnCard>
```

See [`packages/vue/README.md`](packages/vue/README.md) for Nuxt, content scanning and the component list.

### React + Tailwind CSS v4

```css
@import 'tailwindcss';
@import '@opennavo/design-tokens/tailwind.css';
```

```tsx
<button className="h-[34px] rounded-default bg-button-primary-bg px-4 text-[13px] font-semibold text-button-primary-text">
  Install
</button>
```

A complete example lives in [`examples/react-tailwind`](examples/react-tailwind) (theme switch included).

### SwiftUI

```swift
.package(url: "https://github.com/opennavo/opennavo-design.git", branch: "main")

Text("Installed").onTextStyle(OnTypography.bodySm).foregroundStyle(OnColor.statusSuccess)
```

### Flutter

```yaml
opennavo_design:
  git: { url: https://github.com/opennavo/opennavo-design.git, path: packages/flutter }
```

```dart
MaterialApp(theme: onThemeData(Brightness.light), darkTheme: onThemeData(Brightness.dark));
```

## Dark, light and system

Dark is the default; light follows the operating system unless the app forces a theme. On the web the choice is a
`data-theme` attribute on `<html>` (`applyThemePreference()`, plus a tiny head script so a saved choice never flashes);
in Tauri apps the native appearance is set once and every window and web view follows; SwiftUI and Flutter resolve
colors per appearance. Details: [docs/theming.md](docs/theming.md).

## The specification

Start with [docs/README.md](docs/README.md). The short version of the principles: content first, say what will
happen, local first, stable under the pointer, respect the platform, quiet by default, one system for every app,
accessible by construction, every language fits.

## Development

Requirements: Node 24, pnpm 10; Swift 5.9+ (Xcode) and Flutter 3.24+ for the native packages.

```sh
pnpm install
pnpm gen          # render every generated file from tokens/tokens.json (and the icon subset)
pnpm check        # fail if any generated file is stale
pnpm test         # token contrast and output tests, Vue component tests
pnpm typecheck
pnpm gallery      # component gallery at http://127.0.0.1:6106 with a theme and language switch
swift test        # SwiftUI package
(cd packages/flutter && flutter test)
```

Change tokens in `tokens/tokens.json` only, then run `pnpm gen` and commit the generated files with it. See
[CONTRIBUTING.md](CONTRIBUTING.md).

## License

Code and documentation are licensed under the [MIT License](LICENSE). The OpenNavo name and logo are not licensed;
see [TRADEMARKS.md](TRADEMARKS.md). Bundled third-party material keeps its own license: the Lucide icon subset is ISC
([packages/vue/THIRD_PARTY_NOTICES.md](packages/vue/THIRD_PARTY_NOTICES.md)).

Source and separate MIT authorization: [PROVENANCE.md](PROVENANCE.md).
