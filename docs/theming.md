# Theming

Every OpenNavo app offers three appearance choices: **System** (the default), **Light** and **Dark**. This page is
the contract each platform implements.

## The rule

- Dark is the default value of every token.
- The light theme applies when the operating system prefers light **and** the page has not forced dark, or when the
  page forces light.
- The choice can also apply to a subtree, for example an always-dark terminal preview inside a light page.

`@opennavo/design-tokens/tokens.css` encodes exactly that:

```css
:root {
  color-scheme: dark;
  --on-surface-card: #1a1a1a; /* every token, dark values */
}

@media (prefers-color-scheme: light) {
  :root:not([data-theme='dark']) {
    color-scheme: light;
    --on-surface-card: #ffffff; /* themed tokens only */
  }
}
[data-theme='light'] {
  color-scheme: light;
  --on-surface-card: #ffffff;
}
[data-theme='dark'] {
  color-scheme: dark;
  --on-surface-card: #1a1a1a;
}
```

Only tokens that differ between themes are repeated; spacing, type, radii and motion are shared. `color-scheme` comes
with the theme, so native form controls and scrollbars follow it — never set `color-scheme` anywhere else.

| Preference | `<html>` attribute             |
| ---------- | ------------------------------ |
| System     | none (the media query decides) |
| Light      | `data-theme="light"`           |
| Dark       | `data-theme="dark"`            |

`applyThemePreference(preference)` from `@opennavo/design-tokens/theme` (re-exported by `@opennavo/design-vue`) sets
or removes the attribute. It also sets `data-theme-switching` for one frame; `base.css` turns transitions off under
it, so all colors change in the same frame instead of each control fading separately.

### Subtrees

`data-theme` works on any element. `base.css` re-applies `color: var(--on-text-primary)` on `[data-theme]`, because
an inherited text color is computed in the parent's theme. Use subtrees sparingly, for surfaces that keep one theme on
purpose: the screenshot lightbox and caption chips (`component.lightboxScrim` and `component.captionBg` are dark in
both themes, so the text on them must stay light), screenshots of the product in the other theme, terminal previews.
Never use one to "fix" a component that fails in one theme.

## Web (Nuxt, Vite)

Pages are rendered on the server and cached for everyone, so the HTML can never contain a visitor's choice. Instead:

1. The `<head>` declares both schemes and runs a tiny blocking script before any stylesheet:

   ```ts
   import { themeBootScript } from '@opennavo/design-tokens/theme';

   app: {
     head: {
       meta: [{ name: 'color-scheme', content: 'dark light' }],
       script: [{ innerHTML: themeBootScript('onv:theme'), tagPosition: 'head', tagPriority: 'critical' }]
     }
   }
   ```

   The script reads `localStorage`, applies `data-theme` for a saved `light` or `dark`, and does nothing otherwise.
   With JavaScript off the page still follows the system through the media query.

2. The theme switch stores the choice (`localStorage`, key per app — OpenNavo uses `onv:theme`; remove the key for
   System) and calls `applyThemePreference`.
3. Render the switch in its "System" state on the server and read the saved choice after hydration, or the markup
   will not match.
4. Listen to the `storage` event so other open tabs follow.

Never put `data-theme` in `app.head.htmlAttrs`. Nuxt renders `app.head` on the client as well, and when hydration
ends its head manager sets the attribute back, over the choice the script applied. An app whose default is a forced
theme instead of System writes that default in the server render only (a Nitro `render:html` hook), and its boot
script must then remove the attribute for a saved System choice.

The CSP must allow the inline script (`script-src 'self' 'unsafe-inline'`, or a nonce/hash for it).

## macOS desktop (Tauri)

Store the preference with the app's settings (`appearance: "system" | "light" | "dark"`) and apply it natively:

```rust
app.set_theme(match appearance {
    Appearance::System => None,
    Appearance::Light => Some(tauri::Theme::Light),
    Appearance::Dark => Some(tauri::Theme::Dark),
});
```

`set_theme` sets `NSApp.appearance`. WKWebView reports `prefers-color-scheme` from the effective appearance and
updates it live, so **every window follows without any JavaScript**: the main window, menu bar popovers, overlays and
alerts. The main window additionally mirrors the setting with `applyThemePreference` so it switches in the same frame,
and so the browser mock of the app (no native appearance) can be themed.

Also:

- Apply the saved appearance during setup, before any window can show, or a forced theme flashes the other one.
- The window background is visible before the page paints and during live resize: set it to `surface.base` of the
  effective theme (`#131313` / `#F8F8F8`) and update it on `WindowEvent::ThemeChanged`.
- Transparent popover windows keep `html { background: transparent; color-scheme: normal }` on their own document;
  their panel draws `surface.card`.
- Native menus, alerts and open panels follow `NSApp.appearance` automatically. Menu bar icons are template images;
  macOS colors them for the menu bar, whatever the app theme.

## SwiftUI

`OnColor.*` values are dynamic colors that resolve with the appearance of the view drawing them:

```swift
Text("Installed").foregroundStyle(OnColor.statusSuccess)
    .padding(OnSpace.s2)
    .background(OnColor.statusSuccessSubtle, in: .rect(cornerRadius: OnRadius.small))

ContentView().preferredColorScheme(preference == .system ? nil : (preference == .light ? .light : .dark))
```

On macOS set `NSApp.appearance` for app-wide control, exactly as in Tauri.

## Flutter

`OnColors` and `OnShadows` are `ThemeExtension`s with `dark` and `light` constants; `onThemeData(brightness)` builds a
Material theme that carries them:

```dart
MaterialApp(
  theme: onThemeData(Brightness.light),
  darkTheme: onThemeData(Brightness.dark),
  themeMode: switch (preference) { 'light' => ThemeMode.light, 'dark' => ThemeMode.dark, _ => ThemeMode.system },
);

final colors = OnColors.of(context);
Container(color: colors.surfaceCard);
```

## Re-branding another app

The brand layer is the set of tokens a sibling app may change; everything else stays identical so the apps feel like
one family ([Brand](brand.md)). Write an override file with only those tokens and generate:

```json
{
  "color": {
    "brand": { "coral": { "value": "#3C7BFF", "light": "#2457D6" } },
    "text": { "accent": { "value": "#7AA2FF", "light": "#1F4FC2" } }
  }
}
```

```sh
node packages/tokens/scripts/generate.ts --overrides ../my-app/design/brand.json --out ../my-app/design/generated
```

`--out` writes the same files (CSS, presets, Dart, Swift, DTCG) under the app's folder instead of this repository.

or call `mergeTokens(base, overrides)` and `buildArtifacts()` from `@opennavo/design-tokens/build` in the app's own
build. Objects merge, so `{ "light": "…" }` changes only the light value. Re-run the contrast tests against the merged
tokens before shipping.

## Checklist for a new screen

- [ ] Uses tokens only; `rg '#[0-9a-fA-F]{3,8}\b|rgba?\('` finds nothing in the component.
- [ ] Looks right in dark, light, and light with a dark subtree if it embeds previews.
- [ ] Floating panels use `surface.popover`, selected segments `component.segmentActive`.
- [ ] Glows built from an accent color are multiplied by `effect.accentGlowOpacity`.
- [ ] No layout shift or color fade when the theme changes.
