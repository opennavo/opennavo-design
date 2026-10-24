**English** · [简体中文](i18n/zh-CN/docs/principles.md) · [繁體中文](i18n/zh-Hant/docs/principles.md) · [日本語](i18n/ja-JP/docs/principles.md) · [Español](i18n/es-ES/docs/principles.md) · [Português (Brasil)](i18n/pt-BR/docs/principles.md) · [Русский](i18n/ru-RU/docs/principles.md) · [Deutsch](i18n/de-DE/docs/principles.md) · [Français](i18n/fr-FR/docs/principles.md) · [Italiano](i18n/it-IT/docs/principles.md)

# Principles

OpenNavo apps manage things people care about on their own computer: what is installed, what runs at login, what
gets deleted, what talks to the network. The interface has to feel calm and trustworthy before it feels clever.
These principles decide the trade-offs; the rest of the spec applies them.

## 1. Content first, chrome recedes

Surfaces are near-neutral and stepped by small amounts; borders are hairlines. Color is reserved for meaning — the
brand accent for the one thing to do next, status colors for state — never for decoration. If a screen needs a
colored background to look finished, the hierarchy is wrong.

- Two themes, both first-class. Dark is the default look of the brand; light is not a filter over it. Every color
  token carries a value for each theme, and both are checked for contrast in CI ([Color](color.md)).
- Glows and gradients are allowed in exactly two places: feature heroes and the brand mark. They are softer in light
  mode.

## 2. Say what will happen, then do exactly that

Before anything changes the user's machine, the interface states the effect in plain words and, where it helps, shows
the actual command or the list of files. Buttons name the action ("Uninstall", "Move to Trash"), not "OK".
"Nothing happens until you confirm" is a promise the code keeps.

- Destructive actions confirm, and default to the reversible variant (Trash before delete, disable before remove).
- After the action, the result appears where the user started it, at once ([Patterns › Results settle at once](patterns.md#loading-progress-and-results)).

## 3. Local first, and say so

Data read from the user's machine stays there unless they choose otherwise. Where the interface reads something
sensitive (disk usage, startup items, network connections), a one-line note says where the data goes — usually
"Only on this Mac; nothing is uploaded". When something does go to a server, the copy names the server.

## 4. Stable under the pointer

The layout never empties and refills while the user is interacting with it. Typing in a search field, changing a
sort, paging or a background refresh keeps the previous content until the new content is ready, and optional lines
reserve their space. Skeletons are for the first load of a view only. A failed refresh keeps the last good content
and says so in a banner. People read flicker as "the app is broken".

## 5. Respect the platform

- **macOS:** native traffic lights and title bar behavior, System Settings deep links for permissions, menu bar items
  that behave like the system's (template images, never activating the app or stealing focus), keyboard shortcuts
  that match the Mac (⌘K search, ⌘, settings, Escape closes).
- **Web:** fast server-rendered pages that can be cached and shared, so nothing in the HTML depends on the visitor;
  per-visitor choices (theme, language suggestion, consent) apply in the browser.
- **Native toolkits** (SwiftUI, Flutter) use the same tokens with the platform's own controls and system font.

## 6. Quiet by default

Use the lightest feedback that does the job: inline state for things that persist, a toast for a completed action, a
banner for a degraded view, a dialog only when the user must decide. Never interrupt for information. Notifications
outside the window are opt-in and say why they came.

## 7. One system for every app

Tokens, not values: no hard-coded colors, radii or durations in app code. Components, not one-offs. The brand layer
is the only part a sibling app changes ([Brand](brand.md)). When a design needs something the system lacks, add it to
the system first.

## 8. Accessible by construction

Text meets WCAG 2.2 AA (4.5:1) in both themes, graphics and focus indicators 3:1. Everything works from the keyboard
with a visible focus ring. Motion respects "reduce motion". Components carry their ARIA roles so apps do not have to
remember them ([Accessibility](accessibility.md)).

## 9. Every language fits

The interface ships in ten languages. Layouts are designed for the longest label (Russian and German run 30–60%
longer than English; Chinese and Japanese are shorter but taller), numbers and dates are formatted per locale, and
nothing is concatenated from fragments ([Content](content.md)).

## Rules that settle arguments

1. **Token, not value.** If a value is missing, add a token with both theme values.
2. **Same dark value, different job → different token.** Hover fill, floating panel and selected segment all look
   `#262626` in dark mode but need different light values (`surface.raised`, `surface.popover`,
   `component.segmentActive`). Split roles early.
3. **One primary action per region.** Secondary actions are secondary or ghost buttons; destructive actions are
   danger buttons and are never the default focus.
4. **Icon-only controls need a label** (`aria-label` and a tooltip) and must be recognizable icons.
5. **A failed load never blanks the screen** that had content.
6. **If it changes the machine, it confirms or it can be undone** — preferably both.
