# OpenNavo Design — specification

OpenNavo Design is the design system of the OpenNavo apps: the macOS client (Tauri + Vue), the website (Nuxt) and the
apps that follow them. This folder is the written standard. The code packages implement it, and the token reference is
generated from the same source, so the numbers here always match what ships.

Read in this order the first time:

1. [Principles](principles.md) — what the system optimizes for, and the rules that settle arguments.
2. [Color](color.md) — surfaces, text, borders, brand, status; the dark and light themes and their contrast rules.
3. [Theming](theming.md) — how dark, light and "follow the system" work on the web, in Tauri, Flutter and SwiftUI,
   and how another app re-brands the system.
4. [Typography](typography.md), [Layout](layout.md) (spacing, radius, elevation, app shell), [Motion](motion.md),
   [Iconography](iconography.md).
5. [Components](components.md) — the Vue component set and when to use each part.
6. [Patterns](patterns.md) — navigation, lists, forms, feedback, destructive actions, loading and empty states,
   permissions, menu bar popovers.
7. [Content](content.md) — voice, wording rules, numbers and dates, the ten interface languages.
8. [Accessibility](accessibility.md) and [Platforms](platforms.md) (macOS desktop, web, Flutter, SwiftUI).
9. [Brand](brand.md) — the brand layer, names and logos.
10. [Adoption](adoption.md) — starting a new app on the system, and moving an app that copied OpenNavo's packages.

Reference: [all tokens](reference/tokens.md) (generated from `tokens/tokens.json`; do not edit by hand).

## Conventions in this spec

- **Must** and **never** are rules; a review should block on them. **Should** is the default that needs a reason to
  break. Everything else is guidance.
- Token names are written as their JSON path (`surface.card`), with the CSS variable (`--on-surface-card`) or the
  utility class (`bg-surface-card`) where the context is code.
- Measurements are CSS pixels (points on Apple platforms, logical pixels in Flutter).
- Examples come from OpenNavo. A sibling app keeps the structure and swaps the brand layer ([Brand](brand.md)).
