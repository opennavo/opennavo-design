# Adopting the system in an app

How a new app starts on OpenNavo Design, and how an app that copied OpenNavo's packages earlier moves onto it.

## A new Tauri + Vue app

1. **Dependencies** (until the packages are published, use git subdirectory dependencies or a workspace link):

   ```json
   {
     "dependencies": {
       "@opennavo/design-tokens": "github:opennavo/opennavo-design#path:packages/tokens",
       "@opennavo/design-vue": "github:opennavo/opennavo-design#path:packages/vue"
     }
   }
   ```

2. **Styles and plugin** in `main.ts`, in this order:

   ```ts
   import '@unocss/reset/tailwind.css';
   import '@opennavo/design-tokens/tokens.css';
   import '@opennavo/design-vue/base.css';
   import '@opennavo/design-vue/system-fonts.css';
   import 'virtual:uno.css';
   import { createOnUi } from '@opennavo/design-vue';

   app.use(createOnUi({ locale })); // a ref holding one of the ten locales
   ```

3. **UnoCSS** with the preset, scanning the component package too so its utilities are generated:

   ```ts
   import { defineConfig, presetWind3 } from 'unocss';
   import { presetOpenNavo } from '@opennavo/design-tokens/uno-preset';

   export default defineConfig({
     presets: [presetWind3(), presetOpenNavo()],
     content: {
       pipeline: { include: [/\.(vue|ts)($|\?)/, /@opennavo\/design-vue\/src\/.*\.(vue|ts)$/] },
       filesystem: ['node_modules/@opennavo/design-vue/src/**/*.{vue,ts}']
     }
   });
   ```

   In `vite.config.ts` add `optimizeDeps: { exclude: ['@opennavo/design-vue'] }`: the package ships sources, and
   pre-bundling would make a second copy of its locale and icon registries, so `createOnUi` and `registerIcons` would
   not reach the components.

4. **Appearance setting**: add `appearance: system | light | dark` to the app's settings, apply it with
   `app.set_theme()` in Rust before windows show, sync the main window background, and mirror it in the main window
   with `applyThemePreference()` ([Theming › macOS desktop](theming.md#macos-desktop-tauri)). Offer the choice in
   Settings › General as a segmented control: System / Light / Dark.
5. **Brand layer**: write the app's `brand.json` with its accent ([Brand](brand.md)), generate with
   `--overrides brand.json --out <app>/design`, and import the generated `tokens.css` instead of the package one.
6. **Shell**: `OnAppShell` with `OnSidebar` (the app's mark in the `brand` slot), `OnToolbar`, and the page anatomy
   in [Patterns](patterns.md#page-anatomy).
7. **Languages**: ship all ten locales for the app's own strings; the components bring theirs.

A web app (Nuxt) adds `@unocss/nuxt`, the same CSS order in `css: [...]`, and the head boot script
([Theming › Web](theming.md#web-nuxt-vite)). A React app uses `tailwind.css` and `base.css` from the tokens package
([Platforms › React](platforms.md#react--tailwind-css)).

## Moving an app that copied OpenNavo's packages

For an app that copied `packages/tokens` and `packages/ui`, this example uses the fictional `example-app`,
with `@example-app/tokens`, `--ex-` variables and `Ex*` components. The utility classes are the same
(`bg-surface-card`, `text-ink-secondary` …), so most of the move is imports and names:

| Before (copy)                                           | After (system)                                                                     |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `@example-app/tokens/tokens.css`                        | `@opennavo/design-tokens/tokens.css` (or the app's generated brand copy)           |
| `@example-app/tokens/uno-preset` → `presetExampleApp()` | `@opennavo/design-tokens/uno-preset` → `presetOpenNavo()`                          |
| `@example-app/ui` → `ExButton`, `createExUi()`          | `@opennavo/design-vue` → `OnButton`, `createOnUi()`                                |
| `var(--ex-…)` in app styles                             | `var(--on-…)`                                                                      |
| `ExLogo` inside the sidebar                             | the app's own logo component in `OnSidebar`'s `brand` slot                         |
| Local token values that differ                          | a `brand.json` override if they are brand tokens; otherwise adopt the system value |

Steps:

1. List the app's token differences (`diff` its `tokens.json` against `tokens/tokens.json`). Brand tokens go into
   `brand.json`; any other difference is either a bug to drop or a proposal for the system.
2. Replace imports and prefixes (a codemod or search-and-replace: `Ex` → `On`, `--ex-` → `--on-`, package names).
3. Move app-specific components (those that know the app's data) into the app; keep generic ones from the system.
4. Run the app in both themes and compare with the gallery; run the contrast tests against the merged tokens.
5. Delete the copied `packages/tokens` and `packages/ui`.

An app may not fork the neutrals, spacing, type or components. If it needs something the system lacks, add it to
the system first ([CONTRIBUTING.md](../CONTRIBUTING.md)).

## Checklist

- [ ] Tokens from `@opennavo/design-tokens` (or a brand copy generated from it); no hard-coded colors.
- [ ] Appearance setting with System / Light / Dark; no flash on start; every window follows.
- [ ] Components from `@opennavo/design-vue`; the app's mark through `brand` slots.
- [ ] Ten interface languages.
- [ ] Both themes checked; contrast tests green for the brand overrides.
