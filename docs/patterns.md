# Patterns

How the components combine into screens. Each pattern names the components it uses; their details are in
[Components](components.md).

## Navigation

- **Sidebar** (`OnSidebar`, `OnNavItem`): the brand mark, then groups with a `text-label` title (Browse, Lists, Tools,
  Mine …), then settings pinned at the bottom. The current item uses `component.navActive` and `aria-current="page"`.
  Counts sit right-aligned in `text-ink-tertiary`; a count that needs attention becomes a coral badge; a dot marks
  "something new" without a number.
- **Toolbar** (`OnToolbar`): back/forward and reload on the left in desktop apps (the browser provides them on the
  web), the search trigger with its `⌘K` hint on the right, then global switches (theme, language on the web).
- **Command palette** (`OnCommandPalette`, `⌘K` / `Ctrl K`): actions and destinations first, with
  "See all results for “q”" as the first row (Enter opens the full results page); items below. Arrow keys move, Enter
  opens, Escape closes and returns focus.
- **Tabs** (`OnTabs`) switch views of one object (an app's Overview, Versions, Dependencies, Details) and are links
  when each view has its own URL. **Segmented controls** (`OnSegmented`) filter or switch modes inside a view (period,
  sort, "All / Success / Failed").
- **Breadcrumbs** (`OnBreadcrumb`) appear on detail pages reached from a list.
- Every view has a URL (desktop routes included) so deep links, back/forward and restore work.

## Page anatomy

1. Page header (`OnPageHeader`): `text-title1` title, one line of secondary text with the key fact (counts, last
   check), page actions right-aligned (primary last).
2. Optional banner for degraded state (offline, partial failure) directly under the header.
3. Sections (`OnSectionHeader`): `text-headline` title, a short tertiary subtitle, "View all →" on the right.
4. The rail (`OnRailPanel`, `OnRailSection`) carries summaries and secondary actions; nothing in the rail is required
   to finish a task in the main column.

## Lists, cards and tables

- **Cards** for browsing (icon, name, one-line summary, two or three stats, one action). The whole card is the link;
  the action button inside stops propagation.
- **Rows** for dense lists you act on (updates, history, installed apps): icon, name and meta on the left, state chips
  in the middle, actions right; destructive actions live in the row's ⋯ menu.
- **Tables** (`OnTable`) when columns are compared or sorted; numeric columns right-aligned with `tabular-nums`;
  selection checkboxes in the first column; a sticky header in long tables.
- Paginate long lists (`OnPagination`) rather than infinite scroll, so position is linkable and stable.
- **Refining keeps content:** while a query, sort, filter or page changes, keep showing the previous results (dimmed
  if needed) until the new ones arrive; reserve space for optional count lines so nothing shifts.

## Search

- The toolbar trigger opens the palette; a search page shows full results with filters as segmented controls or
  chips.
- Results update as the user types without clearing in between; "No results for “q”" comes with one concrete hint
  (another spelling, the English name, a different source).

## Settings and forms

- Settings are grouped in cards of rows (`SettingRow` pattern): label and optional one-line hint on the left, the
  control on the right, rows separated by `border.subtle`.
- **Changes apply immediately** — toggles, segmented controls, menus. There is no Save button in settings; a change
  that fails reverts and says why in a toast.
- Choose the control by the number of options: a toggle for on/off, a segmented control for two to four exclusive
  options, a menu for longer lists (language) with the current choice checked.
- Text inputs validate on blur or submit, never on every keystroke; errors appear under the field in
  `text-status-danger` with the fix ("Use a full https:// address"), and the field keeps its value.
- Forms on the web are one column with labels above fields; the submit button is disabled until required fields are
  valid, with a hint that says what is missing.

## Feedback

| Situation                                      | Use                                                                                               |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| An action finished (copied, added, installed)  | Toast, success or neutral, dismisses after 4 s, pauses on hover                                   |
| An action failed                               | Toast with the reason and, when possible, an action (Retry, View log)                             |
| A view is degraded (offline, partial data)     | Banner under the header that says what still works                                                |
| A decision is required                         | Dialog (`OnConfirm`, `OnModal`)                                                                   |
| A long task is running                         | Progress in place (row, card or task panel) and in the menu bar if it continues in the background |
| Something happened while the window was closed | A system notification, only if the user enabled them                                              |

At most three toasts are visible; failures are announced immediately to screen readers (`role="alert"`), others
politely.

## Destructive and system-changing actions

1. Say what will happen, with the list of what will be removed or changed and its size.
2. Default to the reversible option: move to Trash, disable a login item rather than delete it, keep a rollback.
3. The confirm button names the action ("Uninstall", "Move 14 items to Trash") and uses the danger variant; Cancel is
   the default focus.
4. After the action: the result in place at once, a toast with Undo when undo is possible, and an entry in the
   history.
5. Actions that need administrator rights say so before they start; the password prompt names what it is for.

## Loading, progress and results

- First load of a view: skeletons (`OnSkeleton`) shaped like the content, no spinners on whole pages.
- Refresh, refinement, background reloads: keep the current content; a small progress hint at most.
- Long tasks show determinate progress as soon as a number exists (bytes, items), with the current step in words,
  and can be cancelled when cancelling is safe. Logs are available but collapsed.
- **Results settle at once:** when a task finishes, every place that shows the object (row, detail page, sidebar
  count, menu bar) updates immediately from the task's own result, not after the next periodic refresh.

## Empty, error and offline states

- **Empty** (`OnEmpty`): an icon, a short title ("Your list is empty"), one sentence that says how to fill it, and
  the action when there is one.
- **Error** (`OnErrorState`): what failed in plain words, Retry, and no stack traces; a failed refresh of a view that
  had content shows a banner instead and keeps the content.
- **Offline** (`OnOffline`): the cached content stays usable; features that need the network say so where they would
  appear.

## Permissions

- Ask at the moment of need, with one sentence of why and what stays private.
- "Enable" opens the exact System Settings pane; a small floating guide shows what to drag or switch, without taking
  focus from System Settings.
- When the user returns, the view re-checks and continues by itself; if macOS requires a relaunch, the view says so
  and offers it.
- Never nag: a declined permission leaves a quiet row with Enable, not repeated dialogs.

## Menu bar items and popovers (macOS)

- Menu bar items are template images drawn like system items; text and graphs follow the system's menu bar style.
- Clicking an item opens its popover under it; clicking again or anywhere else closes it. Popovers never activate the
  main window or steal focus from the app the user is in.
- Popovers are compact cards (`surface.card`, `rounded-panel`) with the most useful three to five rows, one primary
  action and a link that opens the full view in the main window.

## Onboarding

A single checklist screen: each requirement is a row with a status icon, what it is and a fix action; the primary
"Get started" button enables when the required rows pass, with a sentence saying what is still missing. Optional
steps are skippable and reachable later in Settings.

## Website specifics

- The site never asks for an account. Per-visitor choices (theme, consent, language suggestion, saved lists) live in
  the browser.
- "Open in app" links ask the desktop app to show what it would do; the app always asks for confirmation before
  running anything a web page requested.
- A language suggestion appears once, dismissible, and never redirects on its own.
