# Components

Reference for every component in [`@opennavo/design-vue`](../packages/vue): what it is for, its props, events and
slots (as declared in the source), variants, when to use it, and how it behaves for keyboard and assistive technology.
How the components combine into screens is in [Patterns](patterns.md); the gallery (`pnpm gallery`) shows every
variant in both themes and all ten languages. Apps that do not use Vue follow the same anatomy, sizes and states
with the tokens directly ([Platforms](platforms.md)).

Conventions:

- **Default** `—` means the prop is optional and unset; boolean props without a listed default are `false`.
- Built-in strings ("Close", "Pagination", "Search" …) come from the package's message catalog in the locale
  given to `createOnUi({ locale })` (English otherwise). Props named `label`, `placeholder`, `title`,
  `description`, `…Label` override them.
- **Icons** are Lucide names (`search`, `lucide:search`) or `prefix:name` of a set added with `registerIcons`.
- **Links:** components that render links take `linkAs` (`'a'` by default, or `RouterLink` / `NuxtLink`). With a
  router component the URL is passed as `to`; components never read the current route — pass `active`,
  `modelValue` or `page` yourself.
- **Focus ring:** every interactive part shows `shadow-focus-ring` on `:focus-visible`. Overlays move focus with
  `moveFocus`, which rings script focus only after keyboard navigation (WebKit would otherwise ring it on any
  programmatic focus).
- Colors, radii and type come from `@opennavo/design-tokens`; nothing here hard-codes a color, so both themes and a
  re-branded accent apply automatically.

**Groups:** [Actions and inputs](#actions-and-inputs) · [Containers and data](#containers-and-data) ·
[States](#states) · [Overlays](#overlays) · [Layout and navigation](#layout-and-navigation) ·
[Showcase](#showcase)

---

## Actions and inputs

### OnButton

The standard button, or a link that looks like one.

| Prop            | Type                                                          | Default       | Description                                                                                  |
| --------------- | ------------------------------------------------------------- | ------------- | -------------------------------------------------------------------------------------------- |
| `variant`       | `'primary' \| 'secondary' \| 'accent' \| 'ghost' \| 'danger'` | `'secondary'` | Visual weight; see Variants.                                                                 |
| `size`          | `'xs' \| 'sm' \| 'md' \| 'lg'`                                | `'md'`        | Heights 26 / 28 / 34 / 40.                                                                   |
| `shape`         | `'default' \| 'round'`                                        | `'default'`   | `round` gives a pill shape.                                                                  |
| `icon`          | `string`                                                      | —             | Icon before the text (14 px in xs/sm, 15 px in md/lg).                                       |
| `iconOnly`      | `boolean`                                                     | —             | Square button showing only the icon; the default slot is not rendered. Requires `ariaLabel`. |
| `ariaLabel`     | `string`                                                      | —             | Accessible name; required for icon-only buttons.                                             |
| `loading`       | `boolean`                                                     | —             | Shows a spinner instead of the icon, sets `aria-busy`, and disables the button.              |
| `disabled`      | `boolean`                                                     | —             | Disabled look; clicks are ignored.                                                           |
| `block`         | `boolean`                                                     | —             | Fill the available width.                                                                    |
| `type`          | `'button' \| 'submit' \| 'reset'`                             | `'button'`    | Native button type (buttons only).                                                           |
| `href`          | `string`                                                      | —             | Render a link instead of a button.                                                           |
| `target`, `rel` | `string`                                                      | —             | Passed to the link.                                                                          |
| `linkAs`        | `string \| Component`                                         | `'a'`         | Link component; `href` is passed as `to` for router components.                              |

| Event   | Payload               | Description                            |
| ------- | --------------------- | -------------------------------------- |
| `click` | `[event: MouseEvent]` | Not emitted while disabled or loading. |

| Slot      | Description |
| --------- | ----------- |
| `default` | The label.  |

**Variants.** `primary` (inverted, one per area), `secondary` (default), `accent` (brand color, for the one action
that should stand out), `ghost` (outlined, for low-emphasis actions and toolbars), `danger` (red tint, destructive).
Disabled and loading buttons of every variant share one muted style.

**Use** for actions. For navigation styled as a button pass `href`. Do not use a button for on/off settings
(`OnToggle`) or to pick one of a few options (`OnSegmented`).

**Accessibility.** A native `<button>` (keyboard and form behavior included) or a link. Disabled buttons are natively
disabled; a disabled link loses its `href` (or, with a router component, keeps `to`, gets `aria-disabled="true"` and
its click is prevented). Icon-only buttons must have `ariaLabel`; add an `OnTooltip` for sighted users.

### OnIcon

An inline SVG icon from the bundled or registered sets.

| Prop    | Type     | Default  | Description                                                                       |
| ------- | -------- | -------- | --------------------------------------------------------------------------------- |
| `name`  | `string` | required | Lucide name (`search`, `lucide:search`) or `prefix:name` of a registered set.     |
| `size`  | `number` | `16`     | Pixel size: 12 in badges, 14 in buttons, 16 default, 17 sidebar, 18 palette.      |
| `label` | `string` | —        | Makes the icon an image (`role="img"`, `aria-label`); otherwise it is decorative. |

Stroke width is 2 below 16 px and 1.6 otherwise. Icons take `currentColor`. Unknown names render an empty SVG and
warn in development. Rendering is synchronous, so icons appear in server-rendered HTML.

**Accessibility.** Decorative by default (`aria-hidden="true"`). Give `label` only to icons that carry meaning on their
own; next to text, leave it out.

### OnChip

A short label for a type or state ("App", "Update available", "Deprecated").

| Prop      | Type                                                                                            | Default     | Description                                                                                                   |
| --------- | ----------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------- |
| `tone`    | `'neutral' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'accent' \| 'coral' \| 'outline'` | `'neutral'` | `accent` (salmon) for updates, `coral` for progress, `outline` for neutral notes such as machine translation. |
| `outline` | `boolean`                                                                                       | —           | Outlined instead of filled; combines with any tone (e.g. disabled = `danger` + outline).                      |
| `dot`     | `boolean`                                                                                       | —           | Leading 6 px dot in the text color.                                                                           |
| `icon`    | `string`                                                                                        | —           | Leading 12 px icon.                                                                                           |
| `size`    | `'sm' \| 'md'`                                                                                  | `'sm'`      | Heights 20 / 24.                                                                                              |

| Slot      | Description |
| --------- | ----------- |
| `default` | The text.   |

**Use** for status and metadata. Always say the state in words; color only supports it. Not interactive — for a
choice use `OnSegmented`; for a count on navigation use `OnBadge`.

**Accessibility.** Plain inline text; the dot and icon are decorative.

### OnBadge

A coral count ("6", "99+") or a small highlighted text label ("Featured this week").

| Prop    | Type     | Default | Description                                                                               |
| ------- | -------- | ------- | ----------------------------------------------------------------------------------------- |
| `count` | `number` | —       | Makes a count badge; without it the badge shows its slot as text. Negative counts show 0. |
| `max`   | `number` | `99`    | Counts above it show `max+`.                                                              |
| `label` | `string` | —       | Accessible name of a count badge, e.g. "6 updates available".                             |

| Slot         | Description                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------ |
| `default`    | Text of a text badge.                                                                                              |
| `decoration` | A small mark after the text (about 13 px, `currentColor`), e.g. a star or an app mark. Hidden from screen readers. |

**Use** count badges for things that need attention (updates); `OnNavItem` and `OnSidebar` use them through
their `badge` prop. Use text badges for editorial highlights. For status use `OnChip`.

**Accessibility.** A bare number means little to a screen reader; pass `label` for count badges.

### OnToggle

An on/off switch for settings that apply immediately.

| Prop             | Type      | Default  | Description                                          |
| ---------------- | --------- | -------- | ---------------------------------------------------- |
| `modelValue`     | `boolean` | required | On or off (`v-model`).                               |
| `disabled`       | `boolean` | —        | Not changeable; dimmed.                              |
| `ariaLabel`      | `string`  | —        | Accessible name when there is no visible label.      |
| `ariaLabelledby` | `string`  | —        | ID of the visible label, e.g. the settings row text. |

| Event               | Payload            | Description    |
| ------------------- | ------------------ | -------------- |
| `update:modelValue` | `[value: boolean]` | The new state. |

**Use** in settings rows with the label on the left and the switch on the right. For choices that only apply after
"Save", or in a list of items to act on, use `OnCheckbox`.

**Accessibility.** A `<button role="switch">` with `aria-checked`; Space and Enter toggle it. Name it with
`ariaLabelledby` (preferred, points at the visible label) or `ariaLabel`.

### OnCheckbox

A checkbox with optional label, mixed and locked states.

| Prop            | Type      | Default  | Description                                                                                            |
| --------------- | --------- | -------- | ------------------------------------------------------------------------------------------------------ |
| `modelValue`    | `boolean` | required | Checked (`v-model`).                                                                                   |
| `indeterminate` | `boolean` | —        | Some children selected (table or group header); clicking selects all. Ignored while checked or locked. |
| `disabled`      | `boolean` | —        | Not changeable; dimmed.                                                                                |
| `locked`        | `boolean` | —        | Always included and unchangeable, e.g. a required item of a removal plan: shown checked and greyed.    |
| `ariaLabel`     | `string`  | —        | Accessible name when the default slot has no visible label.                                            |
| `title`         | `string`  | —        | Hover hint, e.g. why the box is disabled.                                                              |

| Event               | Payload            | Description            |
| ------------------- | ------------------ | ---------------------- |
| `update:modelValue` | `[value: boolean]` | The new checked state. |

| Slot      | Description                              |
| --------- | ---------------------------------------- |
| `default` | The visible label, inside the `<label>`. |

**Use** to select items for a later action (lists, tables, removal plans) and for options confirmed by a button.
For instant settings use `OnToggle`.

**Accessibility.** A native checkbox inside a `<label>`, so the label text is its name and clicking it toggles.
The mixed state is set as the DOM `indeterminate` property and `aria-checked="mixed"`. Locked boxes are disabled
and checked. Clicks stop at the label so a surrounding table row or group header does not also react.

### OnSegmented

A segmented control: pick one of two to five options, such as a view filter or a time range.

| Prop         | Type                              | Default  | Description                                                                                                                           |
| ------------ | --------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `modelValue` | `T extends string`                | required | Selected option value (`v-model`).                                                                                                    |
| `options`    | `readonly OnSegmentedOption<T>[]` | required | `{ value, label, count?, dots? }`; `dots` are token variable names (e.g. `chart-series1`) drawn as small color dots before the label. |
| `size`       | `'sm' \| 'md'`                    | `'md'`   | Option heights 24 / 28.                                                                                                               |
| `ariaLabel`  | `string`                          | —        | Accessible name of the group.                                                                                                         |

| Event               | Payload      | Description                          |
| ------------------- | ------------ | ------------------------------------ |
| `update:modelValue` | `[value: T]` | Emitted only when the value changes. |

**Use** for mutually exclusive views of the same content. For navigation between pages use `OnTabs`; for many
options use a menu.

**Accessibility.** `role="radiogroup"` with `role="radio"` buttons and `aria-checked`. Only the selected option is
in the Tab order; arrow keys move and select (wrapping), Home and End jump to the ends.

### OnTabs

Tabs, either switching panels on the same page or linking to separate pages.

| Prop         | Type                      | Default  | Description                                              |
| ------------ | ------------------------- | -------- | -------------------------------------------------------- |
| `modelValue` | `T extends string`        | required | Current tab value.                                       |
| `items`      | `readonly OnTabItem<T>[]` | required | `{ value, label, count?, disabled?, href?, controls? }`. |
| `ariaLabel`  | `string`                  | —        | Accessible name of the tab list or navigation.           |
| `linkAs`     | `string \| Component`     | `'a'`    | Link component in link mode.                             |

| Event               | Payload      | Description                                                  |
| ------------------- | ------------ | ------------------------------------------------------------ |
| `update:modelValue` | `[value: T]` | Click (or arrow key in tablist mode) on another enabled tab. |

**Variants.** _Tablist mode_ (no item has `href`): same-page panels. _Link mode_ (any item has `href`): each tab is a
link to its own URL, e.g. so search engines index every tab. The active tab has an underline indicator; `count`
shows a small number after the label.

**Use** for sibling views of one subject. For filters of one list use `OnSegmented`.

**Accessibility.** Tablist mode: `role="tablist"` / `role="tab"` with `aria-selected`, roving Tab focus, arrow keys
(skipping disabled tabs), Home and End; set `controls` to the panel ID for `aria-controls` and give the panel
`role="tabpanel"`. Link mode: a `<nav>` of links with `aria-current="page"` on the active one; disabled items are
non-link `<span aria-disabled="true">`.

### OnSearchField

A text field for search and filtering, with clear button and shortcut hint.

| Prop          | Type      | Default  | Description                                                                     |
| ------------- | --------- | -------- | ------------------------------------------------------------------------------- |
| `modelValue`  | `string`  | required | The query (`v-model`).                                                          |
| `placeholder` | `string`  | —        | Placeholder text.                                                               |
| `ariaLabel`   | `string`  | —        | Accessible name; defaults to the placeholder.                                   |
| `shortcut`    | `string`  | —        | Hint on the right, e.g. `⌘K`; replaced by the clear button while there is text. |
| `clearable`   | `boolean` | `true`   | Show a clear button when there is text.                                         |
| `disabled`    | `boolean` | —        | Not editable; dimmed.                                                           |

| Event               | Payload           | Description                                     |
| ------------------- | ----------------- | ----------------------------------------------- |
| `update:modelValue` | `[value: string]` | Every input.                                    |
| `submit`            | `[value: string]` | Enter (not while an input method is composing). |
| `clear`             | `[]`              | Clear button or Escape with text.               |

Exposed: `focus()`, `blur()`.

**Use** for in-page filtering and search inputs. To open a command palette from a toolbar, use the search button
of `OnToolbar` / `OnTopNav` instead.

**Accessibility.** A native `type="search"` input named by `ariaLabel` or the placeholder. Escape clears a non-empty
field and stops there; on an empty field it bubbles (so it can close a surrounding dialog). The clear button is
labeled "Clear" in the current language and returns focus to the input.

### OnTooltip

A short description that appears on hover and keyboard focus.

| Prop        | Type                                     | Default  | Description                                                                                                                                                                                                                     |
| ----------- | ---------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `content`   | `string`                                 | required | The text; empty content disables the tooltip.                                                                                                                                                                                   |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'`  | Preferred side; flips when there is no room and stays inside the viewport.                                                                                                                                                      |
| `delay`     | `number`                                 | `400`    | Show delay in milliseconds.                                                                                                                                                                                                     |
| `disabled`  | `boolean`                                | —        | Never show.                                                                                                                                                                                                                     |
| `lazy`      | `boolean`                                | —        | Render the tooltip only once the trigger is first used, and without `aria-describedby`. For decorative triggers whose information is on the page anyway (chart bars with a hidden table); keeps it out of server-rendered HTML. |

| Slot      | Description                                             |
| --------- | ------------------------------------------------------- |
| `default` | The trigger; its first element gets `aria-describedby`. |

Attributes (`class`, `style`) go to the wrapping `<span>`. The tooltip is teleported to `<body>` and positioned
`fixed`, so scrolling containers never clip it; it hides on scroll and resize.

**Use** for icon-only buttons and truncated text. Never put essential information or interactive content in a tooltip.

**Accessibility.** `role="tooltip"`, linked from the trigger with `aria-describedby` (unless `lazy`, disabled or empty).
It opens on focus as well as hover, and Escape closes it (WCAG 1.4.13).

### OnMenu

An action menu behind a button, such as "More actions" or a sort/choice menu.

| Prop      | Type                    | Default       | Description                                                                   |
| --------- | ----------------------- | ------------- | ----------------------------------------------------------------------------- |
| `items`   | `readonly OnMenuItem[]` | required      | `{ key, label, icon?, shortcut?, danger?, disabled?, separator?, checked? }`. |
| `label`   | `string`                | —             | Accessible name of trigger and menu; defaults to "More actions".              |
| `icon`    | `string`                | `'ellipsis'`  | Icon of the default trigger.                                                  |
| `variant` | `OnButtonVariant`       | `'secondary'` | Variant of the default trigger.                                               |
| `size`    | `OnButtonSize`          | `'md'`        | Size of the default trigger.                                                  |
| `align`   | `'start' \| 'end'`      | `'end'`       | Which side of the trigger the menu aligns with.                               |

| Event    | Payload         | Description                                                                   |
| -------- | --------------- | ----------------------------------------------------------------------------- |
| `select` | `[key: string]` | An enabled item was chosen; the menu closes and focus returns to the trigger. |

| Slot      | Signature                                                               | Description                                                                     |
| --------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `trigger` | `(props: { open: boolean; attrs: Record<string, unknown> }) => unknown` | A custom trigger; bind `attrs` (ARIA, click and key handlers) onto your button. |

Items: `danger` draws red text, `separator` adds a divider before the item, `shortcut` shows a hint on the right,
`checked` (any defined value) turns the item into a choice: `true` shows a check mark.

**Use** for secondary actions of a row or page and for choosing one option (sort order, language). Put the main
action on a visible button.

**Accessibility.** Trigger: `aria-haspopup="menu"`, `aria-expanded`, `aria-controls`; ArrowDown or ArrowUp opens on
the first or last item. A pointer opens the menu without preselecting an item; a keyboard open focuses the first.
Menu: `role="menu"` with `menuitem` or `menuitemradio` (`aria-checked`) items outside the Tab order; arrow keys
cycle (skipping disabled), Home and End jump, Escape and Tab close it and return focus to the trigger. Clicking outside,
resizing or scrolling closes it. The menu is teleported to `<body>`, opens upward when there is no room below.

---

## Containers and data

### OnCard

A bordered surface that groups related content; optionally a link or button.

| Prop          | Type                                                         | Default | Description                                                                   |
| ------------- | ------------------------------------------------------------ | ------- | ----------------------------------------------------------------------------- |
| `as`          | `'div' \| 'section' \| 'article' \| 'li' \| 'a' \| 'button'` | `'div'` | Rendered element (ignored when `href` is set). `button` gets `type="button"`. |
| `href`        | `string`                                                     | —       | Render the card as a link (through `linkAs`).                                 |
| `interactive` | `boolean`                                                    | —       | Hover border/background, pointer cursor and focus ring.                       |
| `padding`     | `'none' \| 'sm' \| 'md' \| 'lg'`                             | `'md'`  | 0 / 14 / 16 / 18 px.                                                          |
| `linkAs`      | `string \| Component`                                        | `'a'`   | Link component.                                                               |

| Slot      | Description   |
| --------- | ------------- |
| `default` | Card content. |

**Use** for grouping and for whole-card links. Cards use a border and a fill, no shadow. Don't nest interactive
cards or put several links inside a card that is itself a link.

**Accessibility.** A clickable card must be a real link (`href`) or button (`as="button"`); its text becomes the
accessible name, so keep it short.

### OnStatTile

A labeled number with unit, hint and change.

| Prop    | Type           | Default  | Description                                                                                                      |
| ------- | -------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `label` | `string`       | required | Sentence case without a colon, e.g. "Disk usage".                                                                |
| `value` | `string`       | required | The formatted value.                                                                                             |
| `unit`  | `string`       | —        | e.g. "GB", "min ago".                                                                                            |
| `hint`  | `string`       | —        | Third line.                                                                                                      |
| `delta` | `OnStatDelta`  | —        | `{ value, direction: 'up' \| 'down', good }`: the arrow shows the direction, `good` picks green or red.          |
| `size`  | `'sm' \| 'md'` | `'sm'`   | `sm`: a standalone tile (e.g. a 2×2 rail grid); `md`: a cell of a stat strip whose container draws the dividers. |

**Use** for dashboards and summary rails. For label/value lists use `OnKeyValueList`.

**Accessibility.** Plain text in reading order (label, value, unit, change, hint). The change is shown with an
arrow character and a color; make sure `delta.value` makes sense read aloud.

### OnKeyValueList

A two-column list of labeled values, e.g. details of an item.

| Prop    | Type                        | Default  | Description                                                                                                                 |
| ------- | --------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| `items` | `readonly OnKeyValueItem[]` | required | `{ key, label, value, mono?, href? }`; `mono` for identifiers, commands and paths; `href` makes the value an external link. |

Values truncate with an ellipsis on one line.

**Accessibility.** A `<dl>` of `<dt>`/`<dd>` pairs. External links open in a new tab with
`rel="noopener noreferrer"` and an arrow icon.

### OnTable

A data table with sorting display, selection, custom cells and virtual scrolling.

| Prop             | Type                                 | Default  | Description                                                                                           |
| ---------------- | ------------------------------------ | -------- | ----------------------------------------------------------------------------------------------------- |
| `columns`        | `readonly OnTableColumn[]`           | required | `{ key, label, numeric?, mono?, sortable?, width?, hideLabel? }`.                                     |
| `rows`           | `readonly Row[]`                     | required | Rows, already sorted by the host.                                                                     |
| `rowKey`         | `(row: Row) => string`               | required | Stable key per row.                                                                                   |
| `cellValue`      | `(row: Row, key: string) => unknown` | —        | Default cell content; otherwise `row[column.key]`.                                                    |
| `sort`           | `OnTableSort \| null`                | —        | `{ key, order: 'asc' \| 'desc' }` to display; the component does not sort.                            |
| `selectedKey`    | `string \| null`                     | —        | Highlighted (current) row.                                                                            |
| `dimmed`         | `(row: Row) => boolean`              | —        | De-emphasized rows (e.g. dependencies) at 55% opacity.                                                |
| `caption`        | `string`                             | —        | Visually hidden table caption.                                                                        |
| `height`         | `number`                             | —        | Fixed height in px with a sticky header; above 200 rows only visible rows render (44 px each).        |
| `layout`         | `'auto' \| 'fixed'`                  | —        | `fixed` honors column widths and truncates the flexible column, so wide tables never scroll sideways. |
| `selectable`     | `boolean`                            | —        | Leading checkbox column; use `v-model:selected`.                                                      |
| `selected`       | `readonly string[]`                  | —        | Selected row keys; keys of rows filtered out of `rows` are kept.                                      |
| `canSelect`      | `(row: Row) => boolean`              | —        | Rows that cannot be selected (e.g. protected items); all by default.                                  |
| `selectAllLabel` | `string`                             | —        | Accessible name of the header checkbox.                                                               |
| `selectRowLabel` | `(row: Row) => string`               | —        | Accessible name of each row checkbox.                                                                 |

| Event             | Payload                   | Description                                                                                                                   |
| ----------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `update:sort`     | `[sort: OnTableSort]`     | A sortable header was clicked: the same column reverses, a new column starts descending when numeric and ascending otherwise. |
| `update:selected` | `[keys: string[]]`        | Checkbox changes; the header box selects or clears every selectable row.                                                      |
| `rowClick`        | `[key: string, row: Row]` | A row was clicked (checkbox clicks excluded).                                                                                 |

| Slot         | Signature                                          | Description                                                   |
| ------------ | -------------------------------------------------- | ------------------------------------------------------------- |
| `cell-{key}` | `(props: { row: Row; value: unknown }) => unknown` | Custom content for column `key`, e.g. `#cell-name="{ row }"`. |

**Use** for comparable records with several attributes. For a handful of label/value pairs use `OnKeyValueList`;
for rich, uneven content use a list of cards.

**Accessibility.** A real `<table>` with `scope="col"` headers. Sortable headers are buttons named "Sort by
{label}" and the header cell carries `aria-sort`. `hideLabel` keeps a visually hidden header (e.g. "Actions").
Selectable rows expose `aria-selected`; the header checkbox shows the mixed state. With `height`, the scroll
container is focusable so keyboard users can scroll it.

### OnPagination

Previous/next and page numbers with ellipses; buttons, or links when every page has a URL.

| Prop        | Type                       | Default  | Description                                                                                                                |
| ----------- | -------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| `page`      | `number`                   | required | Current page, one-based.                                                                                                   |
| `pageCount` | `number`                   | required | Total pages; nothing renders for one page.                                                                                 |
| `max`       | `number`                   | `7`      | Slots including ellipses (minimum 5); first, last and current page always show.                                            |
| `hrefFor`   | `(page: number) => string` | —        | Render links: each page has its own URL (e.g. `?page=3`).                                                                  |
| `linkAs`    | `string \| Component`      | `'a'`    | Link component for `hrefFor`.                                                                                              |
| `jumps`     | `readonly number[]`        | —        | Extra pages this many steps before and after the current one; defaults to `[10, 100]` with `hrefFor` and none for buttons. |

| Event         | Payload          | Description                                                       |
| ------------- | ---------------- | ----------------------------------------------------------------- |
| `update:page` | `[page: number]` | Another page was chosen (also fired for links before navigation). |

**Use** for long, addressable lists (search results, catalogs). For feeds prefer "load more" or infinite scroll.

**Accessibility.** `<nav aria-label="Pagination">`; page buttons are named "Page N", the current one has
`aria-current="page"`; previous/next at the ends become non-interactive with `aria-disabled="true"`; ellipses are
hidden from screen readers.

### OnProgressMeter

A progress bar, determinate or indeterminate.

| Prop    | Type             | Default | Description                                              |
| ------- | ---------------- | ------- | -------------------------------------------------------- |
| `value` | `number \| null` | —       | 0–100 (clamped); unset or `null` means indeterminate.    |
| `size`  | `'md' \| 'sm'`   | `'md'`  | Bar height 6 / 4 px (`sm` for menu bars and dense rows). |
| `label` | `string`         | —       | Accessible name, e.g. "Downloading update".              |

**Use** for tasks with measurable progress, or ongoing work without it (indeterminate). Show a percentage or
remaining time next to it when you have one.

**Accessibility.** `role="progressbar"` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow` (rounded) or
`aria-valuetext="In progress"` when indeterminate. With reduced motion the indeterminate bar stops moving and shows
"In progress" as text.

### OnStackBar

A single stacked bar with legend: how a total splits into parts (e.g. storage by type).

| Prop      | Type                        | Default  | Description                                                               |
| --------- | --------------------------- | -------- | ------------------------------------------------------------------------- |
| `items`   | `readonly OnStackItem[]`    | required | `{ key, label, value, display? }`; zero and negative values are left out. |
| `caption` | `string`                    | required | Chart name; caption of the hidden table.                                  |
| `format`  | `(value: number) => string` | —        | Formats values without `display`, including the merged "Other".           |

Up to three series colors (`chart.series1–3`) are used in order; with more than three items the third and later
merge into "Other". Percentages follow the current locale. Hovering a segment shows a lazy tooltip.

**Accessibility.** The bar and legend are hidden from screen readers; a visually hidden table (Item, Value, Share)
with the caption carries the data.

### OnHBarChart

Horizontal bars comparing a few values, e.g. downloads per period.

| Prop      | Type                    | Default  | Description                                                                                                                                                                    |
| --------- | ----------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `items`   | `readonly OnHBarItem[]` | required | `{ key, label, value, display?, full?, emphasis? }`: `display` at the bar end (e.g. "17K"), `full` in tooltip and table (e.g. "17,394"), `emphasis` colors the current period. |
| `caption` | `string`                | required | Chart name; caption of the hidden table.                                                                                                                                       |
| `max`     | `number`                | —        | Scale maximum; defaults to the largest value.                                                                                                                                  |

**Accessibility.** Bars are hidden from screen readers; a visually hidden table (Item, Value) carries the full values.
Tooltips are lazy, so they never become stray page text.

### OnSkeleton

A shimmering placeholder while content loads.

| Prop     | Type                                                                        | Default   | Description                              |
| -------- | --------------------------------------------------------------------------- | --------- | ---------------------------------------- |
| `width`  | `string`                                                                    | `'100%'`  | CSS length.                              |
| `height` | `string`                                                                    | `'14px'`  | CSS length of each line.                 |
| `radius` | `'tiny' \| 'small' \| 'default' \| 'big' \| 'huge' \| 'full' \| 'app-icon'` | `'small'` | Match the radius of what loads.          |
| `lines`  | `number`                                                                    | —         | Several lines; the last one is 60% wide. |

**Use** only for the first load, shaped like the content. While refetching, keep the old content (dimmed) instead
of flashing skeletons.

**Accessibility.** `aria-hidden="true"`. Announce loading elsewhere if it matters (e.g. `aria-busy` on the region).
The shimmer stops with reduced motion.

### OnCodeText

Inline code text that wraps between words, never inside one.

| Prop   | Type     | Default  | Description                |
| ------ | -------- | -------- | -------------------------- |
| `text` | `string` | required | The command, path or code. |

Every run of non-space characters is an inline block, so a hyphenated name or `--flag` never splits; a word wider
than the line breaks preferably after `/`, `.` or `=`. Whitespace is kept as text, so copying returns the original
and `white-space: pre-wrap` containers keep indentation. Put it inside your own `<code>` or `<pre>`.

`codeParts`, `wordPieces` and `codeWordsHtml` expose the same splitting for Markdown renderers (wrap inline code
words in `.on-code-word`; `OnMarkdownView` styles them).

### OnLogViewer

A monospace log with colored line types, tail limit and virtual scrolling.

| Prop     | Type                | Default  | Description                                                                |
| -------- | ------------------- | -------- | -------------------------------------------------------------------------- |
| `lines`  | `readonly string[]` | required | Log lines, oldest first.                                                   |
| `tail`   | `number`            | `2000`   | Show only the last lines (capped at 2,000), e.g. 5 in a compact task card. |
| `height` | `number`            | —        | Scroll within this height; above 200 lines only visible lines render.      |
| `label`  | `string`            | —        | Accessible name; defaults to "Log".                                        |

Line colors (`classifyLogLine`): `==>` headings, `###… 62.4%` progress bars, `Error:` / `fatal:` / curl errors, and
success markers. Empty lines keep their height.

**Accessibility.** A `<pre role="log">` with an accessible name and `tabindex="0"`, so keyboard users can scroll it.
Updates are not announced automatically beyond what `role="log"` implies; summarize important results elsewhere.

### OnHighlightText

Text where `**…**` phrases are emphasized; nothing else is parsed.

| Prop   | Type                     | Default  | Description                                                                                |
| ------ | ------------------------ | -------- | ------------------------------------------------------------------------------------------ |
| `text` | `string`                 | required | Text with optional `**…**` emphasis; other characters stay literal (no Markdown, no HTML). |
| `as`   | `'span' \| 'p' \| 'div'` | `'span'` | Rendered element.                                                                          |

Emphasized parts use the primary text color at weight 500 (`parseHighlight` exposes the parsing).

**Use** for short editorial copy from data (hero descriptions, summaries). For full Markdown use `OnMarkdownView`.

### OnSectionHeader

A section title with an optional muted hint and a trailing "View all"-style link.

| Prop        | Type                  | Default  | Description                                       |
| ----------- | --------------------- | -------- | ------------------------------------------------- |
| `title`     | `string`              | required | The `<h2>` text.                                  |
| `hint`      | `string`              | —        | Muted text beside the title.                      |
| `moreLabel` | `string`              | —        | Link text; the link renders only with `moreHref`. |
| `moreHref`  | `string`              | —        | Link target.                                      |
| `linkAs`    | `string \| Component` | `'a'`    | Link component.                                   |

**Accessibility.** The `<h2>` holds only the title; the hint is a separate paragraph, so it never becomes heading
text. The link has an arrow icon (decorative).

### OnPageHeader

The top of a page: a large `<h1>`, a subtitle and actions on the right.

| Prop       | Type     | Default  | Description                          |
| ---------- | -------- | -------- | ------------------------------------ |
| `title`    | `string` | required | The `<h1>` text (30 px, weight 600). |
| `subtitle` | `string` | —        | Line under the title.                |

| Slot      | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| `default` | Extra content under the title (chips, filters).                    |
| `actions` | Buttons on the right; on narrow screens they wrap below the title. |

**Use** once per page. Section titles inside the page use `OnSectionHeader`.

### OnBreadcrumb

The path from a top-level page to the current one.

| Prop     | Type                          | Default  | Description                                                                |
| -------- | ----------------------------- | -------- | -------------------------------------------------------------------------- |
| `items`  | `readonly OnBreadcrumbItem[]` | required | `{ label, href? }`; the last item is the current page and needs no `href`. |
| `linkAs` | `string \| Component`         | `'a'`    | Link component.                                                            |

**Accessibility.** `<nav aria-label="Breadcrumb">` with an ordered list; the last item has `aria-current="page"`.
Separators are decorative icons. Items without `href` (before the last) render as plain text.

### OnMarkdownView

Typography for rendered Markdown (release notes, descriptions, articles).

| Prop   | Type                        | Default | Description                                                                                                                           |
| ------ | --------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `html` | `string`                    | —       | **Sanitized** HTML, inserted as is. Ignored when the default slot is used.                                                            |
| `size` | `'sm' \| 'md' \| 'article'` | `'sm'`  | `sm` 13/20 for release notes, `md` 14/1.75 for descriptions (both max 72ch), `article` 15/1.8 across the column with larger headings. |

| Slot      | Description                                                                             |
| --------- | --------------------------------------------------------------------------------------- |
| `default` | Rendered elements instead of an HTML string (e.g. from a renderer that outputs VNodes). |

This package ships **no Markdown renderer and no sanitizer**. Render and sanitize in your app — for example
markdown-it with raw HTML disabled, then an allowlist sanitizer such as DOMPurify — and never pass user-controlled
HTML unsanitized. Classes your renderer may add: `on-md-heading-1…3` (visual heading size by order, independent of
the semantic level), `on-md-center` / `on-md-right` (table alignment), `on-code-word` (inline code words).

**Accessibility.** Semantics come from your HTML: use heading levels that fit the page outline (e.g. start at `h3`
under a section `h2`) and add `alt` text to images. Links get a focus ring.

---

## States

### OnEmpty

An empty state: icon, title, description and actions.

| Prop          | Type     | Default          | Description                                     |
| ------------- | -------- | ---------------- | ----------------------------------------------- |
| `title`       | `string` | required         | The `<h3>` text, e.g. "No results for “x”".     |
| `description` | `string` | —                | One or two sentences on what to do next.        |
| `icon`        | `string` | `'lucide:inbox'` | Icon drawn at 48 px in the disabled text color. |

| Slot      | Description             |
| --------- | ----------------------- |
| `actions` | Buttons under the text. |

**Use** when a list or search has nothing to show. Say why and offer the next step. For failures use
`OnErrorState`; for no connection `OnOffline`.

**Accessibility.** The title is an `<h3>`; the icon is decorative. If the empty state appears after a user action
(a search), announce it through your own live region when needed.

### OnErrorState

A load failure with retry and an optional request ID for reports.

| Prop          | Type             | Default | Description                                                                       |
| ------------- | ---------------- | ------- | --------------------------------------------------------------------------------- |
| `title`       | `string`         | —       | Defaults to "Couldn’t load".                                                      |
| `description` | `string`         | —       | Defaults to "The network or service is temporarily unavailable. Try again later." |
| `requestId`   | `string \| null` | —       | Shown in monospace for issue reports.                                             |
| `retryable`   | `boolean`        | `true`  | Show the Retry button.                                                            |

| Event   | Payload | Description                   |
| ------- | ------- | ----------------------------- |
| `retry` | `[]`    | The Retry button was clicked. |

**Accessibility.** The wrapper has `role="alert"`, so the message is announced when it appears.

### OnOffline

A no-connection state.

| Prop          | Type     | Default | Description                                                                                                                               |
| ------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | `string` | —       | Defaults to "Offline".                                                                                                                    |
| `description` | `string` | —       | Defaults to "Showing saved content. It updates automatically when you’re back online." — override it when your app can say what it shows. |

| Slot      | Description          |
| --------- | -------------------- |
| `actions` | Buttons, e.g. Retry. |

**Accessibility.** The wrapper has `role="status"` (announced politely).

---

## Overlays

All overlays render into `<body>` (teleport), move focus inside when they open, keep Tab inside, lock page
scrolling (nested overlays are reference-counted) and return focus to the element that opened them. They animate
in 200 ms and out 120 ms, without motion when reduced motion is on.

### OnDialogShell

The low-level modal layer under `OnModal`, `OnSheet` and `OnCommandPalette`: backdrop, transitions, Escape, focus
and scroll lock. Use it directly only for custom panels.

| Prop           | Type                           | Default    | Description                                                                                        |
| -------------- | ------------------------------ | ---------- | -------------------------------------------------------------------------------------------------- |
| `open`         | `boolean`                      | required   | Shown when true; nothing renders while closed (also on the server).                                |
| `placement`    | `'center' \| 'right' \| 'top'` | `'center'` | Centered dialog, right-hand sheet, or top (15vh) palette.                                          |
| `dismissible`  | `boolean`                      | `true`     | `false` ignores Escape and backdrop clicks (destructive confirmations).                            |
| `role`         | `'dialog' \| 'alertdialog'`    | `'dialog'` | Panel role.                                                                                        |
| `labelledby`   | `string`                       | —          | ID of the title (`aria-labelledby`).                                                               |
| `describedby`  | `string`                       | —          | ID of the description (`aria-describedby`).                                                        |
| `ariaLabel`    | `string`                       | —          | Accessible name when there is no visible title.                                                    |
| `initialFocus` | `string`                       | —          | Selector inside the panel to focus first; defaults to the first focusable element, then the panel. |
| `backdrop`     | `'dim' \| 'clear'`             | `'dim'`    | Dimmed scrim, or a transparent click-catcher (palette).                                            |
| `panelClass`   | `string`                       | —          | Classes for the panel element (size, surface, radius).                                             |

| Event   | Payload | Description                                                                                          |
| ------- | ------- | ---------------------------------------------------------------------------------------------------- |
| `close` | `[]`    | Escape or a press and release on the backdrop (selecting text and releasing outside does not close). |

| Slot      | Description    |
| --------- | -------------- |
| `default` | Panel content. |

**Accessibility.** The panel has the given `role`, `aria-modal="true"` and its name; Tab and Shift-Tab cycle through
its focusable elements. Always provide `labelledby` or `ariaLabel`.

### OnModal

A centered dialog with title, optional description, body and footer actions.

| Prop           | Type                        | Default    | Description                                                                                |
| -------------- | --------------------------- | ---------- | ------------------------------------------------------------------------------------------ |
| `open`         | `boolean`                   | required   | Use `v-model:open`.                                                                        |
| `title`        | `string`                    | required   | The `<h2>` and the dialog's accessible name.                                               |
| `description`  | `string`                    | —          | Under the title; becomes `aria-describedby`.                                               |
| `size`         | `'sm' \| 'md' \| 'lg'`      | `'md'`     | Max widths 480 / 560 / 720.                                                                |
| `dismissible`  | `boolean`                   | `true`     | `false` ignores Escape and backdrop clicks.                                                |
| `closable`     | `boolean`                   | `true`     | Close button in the top-right corner.                                                      |
| `role`         | `'dialog' \| 'alertdialog'` | `'dialog'` | Use `alertdialog` for confirmations that need a response.                                  |
| `initialFocus` | `string`                    | —          | Selector to focus first; defaults to the first focusable element (often the Close button). |

| Event         | Payload           | Description                           |
| ------------- | ----------------- | ------------------------------------- |
| `update:open` | `[open: boolean]` | `false` on any dismissal.             |
| `close`       | `[]`              | Escape, backdrop or the Close button. |

| Slot       | Description                                                                      |
| ---------- | -------------------------------------------------------------------------------- |
| `default`  | Body; scrolls when tall.                                                         |
| `footer`   | Right-aligned actions (secondary first, primary last).                           |
| `leading`  | Before the title, e.g. an app icon.                                              |
| `subtitle` | A rich line under the title (chips, code); `description` still renders below it. |

Exposed: `close()`.

**Use** for focused tasks that block the page (a short form, a decision). For long or reference content use
`OnSheet`; for a yes/no question use `OnConfirm`.

### OnSheet

A panel sliding in from the right (420 px), e.g. for logs or details.

| Prop           | Type      | Default  | Description                                                       |
| -------------- | --------- | -------- | ----------------------------------------------------------------- |
| `open`         | `boolean` | required | Use `v-model:open`.                                               |
| `title`        | `string`  | required | The `<h2>` and accessible name.                                   |
| `initialFocus` | `string`  | —        | Selector to focus first; defaults to the first focusable element. |

| Event         | Payload           | Description                |
| ------------- | ----------------- | -------------------------- |
| `update:open` | `[open: boolean]` | `false` when dismissed.    |
| `close`       | `[]`              | Escape, backdrop or Close. |

| Slot      | Description                                                  |
| --------- | ------------------------------------------------------------ |
| `default` | Scrolling body.                                              |
| `actions` | Header buttons between the title and Close, e.g. "Copy all". |
| `footer`  | Bottom bar with right-aligned actions.                       |

Exposed: `close()`.

### OnConfirm

A confirmation dialog with Cancel and Confirm.

| Prop              | Type                    | Default     | Description                                                                       |
| ----------------- | ----------------------- | ----------- | --------------------------------------------------------------------------------- |
| `open`            | `boolean`               | required    | Use `v-model:open`.                                                               |
| `title`           | `string`                | required    | The question, e.g. "Delete Orbitfold?".                                           |
| `description`     | `string`                | —           | What will happen.                                                                 |
| `confirmLabel`    | `string`                | —           | Defaults to "Confirm"; prefer the verb ("Delete").                                |
| `cancelLabel`     | `string`                | —           | Defaults to "Cancel".                                                             |
| `tone`            | `'primary' \| 'danger'` | `'primary'` | `danger`: red confirm button, no Escape/backdrop dismissal, Cancel focused first. |
| `loading`         | `boolean`               | —           | Spinner on Confirm while the action runs; Cancel is disabled meanwhile.           |
| `confirmDisabled` | `boolean`               | —           | Disable Confirm until prerequisites (e.g. a permission) are met.                  |

| Event         | Payload           | Description                                                      |
| ------------- | ----------------- | ---------------------------------------------------------------- |
| `confirm`     | `[]`              | Confirm clicked; the host runs the action and closes the dialog. |
| `cancel`      | `[]`              | Cancel, Escape or backdrop (not for `danger`).                   |
| `update:open` | `[open: boolean]` | `false` on cancel.                                               |

| Slot      | Description                                              |
| --------- | -------------------------------------------------------- |
| `default` | Extra body content, e.g. a list of what will be removed. |

**Accessibility.** `role="alertdialog"`, named by the title and described by the description. Primary
confirmations focus Confirm; destructive ones focus Cancel so Enter never destroys by accident.

### OnToast

A single notification card. Usually rendered by `OnToastRegion`; use it directly for static previews.

| Prop          | Type                                           | Default  | Description                                    |
| ------------- | ---------------------------------------------- | -------- | ---------------------------------------------- |
| `tone`        | `'info' \| 'success' \| 'warning' \| 'danger'` | `'info'` | Icon and color: info, check, triangle, cross.  |
| `title`       | `string`                                       | required | One line, e.g. "Updated Prismark".             |
| `description` | `string`                                       | —        | Detail line.                                   |
| `actionLabel` | `string`                                       | —        | A small ghost action button, e.g. "View".      |
| `time`        | `string`                                       | —        | Time text in the top-right corner, e.g. "Now". |

| Event    | Payload | Description                    |
| -------- | ------- | ------------------------------ |
| `action` | `[]`    | The action button was clicked. |
| `close`  | `[]`    | The close button was clicked.  |

**Accessibility.** `danger` toasts have `role="alert"` (announced immediately); others rely on the region's polite
live region. The close button is named "Dismiss notification".

### OnToastRegion and createToastQueue

The fixed bottom-right stack of notifications, with timing handled for you.

| Prop    | Type                     | Default  | Description                                                           |
| ------- | ------------------------ | -------- | --------------------------------------------------------------------- |
| `items` | `readonly OnToastItem[]` | required | `{ id, tone?, title, description?, actionLabel?, time?, duration? }`. |
| `max`   | `number`                 | `3`      | Visible toasts; older ones hide first.                                |

| Event     | Payload        | Description                                                                                                   |
| --------- | -------------- | ------------------------------------------------------------------------------------------------------------- |
| `dismiss` | `[id: string]` | Remove the item: emitted after its `duration` (default 4000 ms; `0` keeps it), on Close, and after an action. |
| `action`  | `[id: string]` | The item's action button was clicked (followed by `dismiss`).                                                 |

Timers pause while the pointer or focus is inside the region and resume with the remaining time.

```ts
const toasts = createToastQueue(); // one per app (or per request in SSR), never a shared module singleton
toasts.push({ tone: 'success', title: 'Copied' }); // returns the id
toasts.push({ id: 'sync', title: 'Syncing…', duration: 0 }); // same id replaces, e.g. progress updates
```

```vue
<OnToastRegion :items="toasts.items.value" @dismiss="toasts.dismiss" @action="openDetails" />
```

`createToastQueue()` returns `{ items, push, dismiss, clear }` (`items` is a readonly ref).

**Use** for brief, non-blocking feedback about something that happened. Never for information the user must act on
(use a dialog or an inline message).

**Accessibility.** A `<section aria-label="Notifications">` with an `aria-live="polite"` list; failures announce
immediately through their own `role="alert"`.

### OnCommandPalette

A search-driven command palette (⌘K): grouped results with keyboard selection.

| Prop          | Type                        | Default  | Description                                                                                       |
| ------------- | --------------------------- | -------- | ------------------------------------------------------------------------------------------------- |
| `open`        | `boolean`                   | required | Use `v-model:open`.                                                                               |
| `query`       | `string`                    | required | Use `v-model:query`; the host filters.                                                            |
| `groups`      | `readonly OnCommandGroup[]` | required | `{ key, label, items: OnCommandItem[] }`; empty groups are hidden.                                |
| `placeholder` | `string`                    | —        | Input placeholder and name; defaults to "Search or run a command".                                |
| `loading`     | `boolean`                   | —        | With no results, shows "Searching…" instead of the empty text.                                    |
| `emptyText`   | `string`                    | —        | Defaults to "No matching results".                                                                |
| `hints`       | `readonly string[]`         | —        | Footer hints; defaults to "↑↓ Select" and "↵ Open". Add your own for the meta and copy shortcuts. |

`OnCommandItem`: `{ key, label, description?, icon?, image?, iconTone?, badge?, badgeTone?, hint? }` — `icon` is an
18 px icon (for actions and navigation), `image` a 26 px image URL (an app icon, an avatar) that falls back to the
icon if it fails to load; `iconTone: 'accent'` colors the icon; `badge` is an `OnChip` (accent by default); `hint`
shows a key hint on the right.

| Event          | Payload                                             | Description                                                                                                  |
| -------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `update:open`  | `[open: boolean]`                                   | `false` on Escape or a click outside.                                                                        |
| `update:query` | `[query: string]`                                   | Every input.                                                                                                 |
| `select`       | `[item: OnCommandItem, options: { meta: boolean }]` | Enter or click on the active item; `meta` with Command/Ctrl (a secondary action, e.g. open in a new window). |
| `copy`         | `[item: OnCommandItem]`                             | Command/Ctrl-C while no input text is selected; the host decides what to copy (a link, an ID).               |

The active item resets to the first result whenever results change or the palette opens.

**Accessibility.** A top-placed dialog named "Command palette". The input is a `combobox` (`aria-autocomplete="list"`,
`aria-controls`, `aria-activedescendant`) over a `listbox` of `role="group"` sections with `option`s and
`aria-selected`. ArrowUp/ArrowDown move through all groups (wrapping, scrolling the item into view), Enter selects,
Escape closes; keys are ignored while an input method is composing. Footer hints are hidden from screen readers.

---

## Layout and navigation

### OnAppShell

The page frame: sidebar, toolbar, main column and optional right rail. Layout only; you fill every region.

| Prop         | Type                        | Default       | Description                                                                                                                                                                                                                        |
| ------------ | --------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `hasRail`    | `boolean`                   | `false`       | The page has a right rail.                                                                                                                                                                                                         |
| `railDocked` | `boolean`                   | `true`        | Container mode: the rail stays beside the main column (decide from the window width, e.g. ≥ 1240 px).                                                                                                                              |
| `railOpen`   | `boolean`                   | `false`       | Container mode, undocked: show the rail as an overlay.                                                                                                                                                                             |
| `scroll`     | `'container' \| 'document'` | `'container'` | `container` (desktop app): fixed window height, the main column scrolls on its own. `document` (web): the page scrolls; sidebar and toolbar are sticky from `md`, the rail sticks at `xl` and moves below the content before that. |

| Slot         | Description                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------- |
| `sidebar`    | Usually `OnSidebar` (224 px column).                                                         |
| `toolbar`    | Usually `OnToolbar`.                                                                         |
| `compactBar` | Document mode below `md`: replaces sidebar and toolbar (e.g. a compact top bar with a menu). |
| `default`    | The main content.                                                                            |
| `rail`       | Usually `OnRailPanel` (288 px).                                                              |
| `footer`     | Document mode: after the content and rail.                                                   |
| `overlay`    | Overlays that belong to the shell (toast region, palette).                                   |

Exposed: `scrollToTop()` — scrolls the main column (container mode) or the window (document mode), e.g. after
navigation.

**Accessibility.** The content is a `<main>` landmark; give the sidebar navigation a `label` (see `OnSidebar`).
Keep one shell per page.

### OnSidebar

Brand, an optional top card, grouped navigation and footer links.

| Prop          | Type                        | Default  | Description                                                                                      |
| ------------- | --------------------------- | -------- | ------------------------------------------------------------------------------------------------ |
| `groups`      | `readonly OnSidebarGroup[]` | required | `{ key, label, items: OnSidebarItem[] }`.                                                        |
| `footerItems` | `readonly OnSidebarItem[]`  | `[]`     | Items pinned to the bottom (Settings, About).                                                    |
| `label`       | `string`                    | required | Accessible name of the navigation.                                                               |
| `topLabel`    | `string`                    | —        | Eyebrow above the `top` slot.                                                                    |
| `brandName`   | `string`                    | —        | Plain-text brand when the `brand` slot is empty.                                                 |
| `dragRegion`  | `boolean`                   | `false`  | Desktop windows: a 52 px draggable area for the macOS traffic lights (`data-tauri-drag-region`). |
| `linkAs`      | `string \| Component`       | `'a'`    | Link component for the items.                                                                    |

`OnSidebarItem`: `{ key, label, href, icon?, active?, count?, meta?, badge?, dot?, badgeLabel? }` — passed to
`OnNavItem`.

| Slot     | Description                                                                                                                                  |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `brand`  | The app's mark and name (logo plus wordmark); the design system ships no logo. Without it and without `brandName` the brand row is left out. |
| `top`    | A card under the brand, e.g. "Get the desktop app".                                                                                          |
| `footer` | Extra content after the footer items.                                                                                                        |

**Accessibility.** An `<aside>` with a `<nav aria-label>`; group labels are visual headings above their items; the
current item has `aria-current="page"`. If the brand slot is only an image, give it an `alt` text or a visible name.

### OnNavItem

One navigation row: icon, label and a count, badge, dot or meta text on the right.

| Prop         | Type                  | Default | Description                                                                       |
| ------------ | --------------------- | ------- | --------------------------------------------------------------------------------- |
| `icon`       | `string`              | —       | Icon at 17 px.                                                                    |
| `active`     | `boolean`             | —       | The current page: highlighted, `aria-current="page"`.                             |
| `count`      | `number`              | —       | Muted count on the right.                                                         |
| `meta`       | `string`              | —       | Muted text on the right when there is no count, e.g. "34 GB".                     |
| `badge`      | `number`              | —       | Coral count badge (only when > 0); takes priority over `dot`, `count` and `meta`. |
| `dot`        | `boolean`             | —       | An attention dot without a number; takes priority over `count` and `meta`.        |
| `badgeLabel` | `string`              | —       | Accessible text of the badge or dot, e.g. "4 updates".                            |
| `as`         | `string \| Component` | `'a'`   | Element or link component; a plain `a` without `href` becomes a `<button>`.       |
| `href`       | `string`              | —       | Link URL (native `a`).                                                            |
| `to`         | `string`              | —       | Router destination when `as` is a router link.                                    |

| Slot      | Description            |
| --------- | ---------------------- |
| `default` | The label (truncates). |

**Accessibility.** The badge is named by `badgeLabel`; a dot with `badgeLabel` is `role="img"`, without it it is
hidden. Prefer giving every badge and dot a label.

### OnToolbar

The bar above the main column: start slot, a draggable spacer, a search button and an end slot.

| Prop             | Type      | Default  | Description                                                                           |
| ---------------- | --------- | -------- | ------------------------------------------------------------------------------------- |
| `searchLabel`    | `string`  | required | Text and accessible name of the search button, e.g. "Search apps" or "Search files".  |
| `searchShortcut` | `string`  | —        | Key hint on the button, e.g. `⌘K`; also sets `aria-keyshortcuts="Meta+K"`.            |
| `dragRegion`     | `boolean` | `false`  | Desktop windows: the bar and the spacer are drag regions; its buttons stay clickable. |

| Event    | Payload | Description                                               |
| -------- | ------- | --------------------------------------------------------- |
| `search` | `[]`    | The search button was clicked; open your command palette. |

| Slot    | Description                                      |
| ------- | ------------------------------------------------ |
| `start` | Leading controls, e.g. back/forward buttons.     |
| `end`   | Trailing controls, e.g. notifications, language. |

### OnTopNav

The website header: home link with the app's mark, centered links, search, an optional call to action and a mobile
menu.

| Prop             | Type                      | Default  | Description                                                                                                             |
| ---------------- | ------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| `items`          | `readonly OnTopNavItem[]` | required | `{ label, href, active? }`.                                                                                             |
| `homeHref`       | `string`                  | `'/'`    | Target of the home link.                                                                                                |
| `brandName`      | `string`                  | —        | Plain-text brand in the home link when the `brand` slot is empty; also names the link ("{brandName} home", translated). |
| `homeLabel`      | `string`                  | —        | Accessible name of the home link, overriding the one from `brandName`.                                                  |
| `downloadHref`   | `string`                  | —        | Call-to-action button on the right (e.g. a download page); hidden without it.                                           |
| `downloadLabel`  | `string`                  | —        | Its text; defaults to "Download".                                                                                       |
| `searchable`     | `boolean`                 | `true`   | Show the search field and button.                                                                                       |
| `searchLabel`    | `string`                  | —        | Search text and name; defaults to "Search".                                                                             |
| `searchShortcut` | `string`                  | —        | Key hint in the search field, e.g. `⌘K`.                                                                                |
| `label`          | `string`                  | —        | Accessible name of the navigation; defaults to "Main".                                                                  |
| `linkAs`         | `string \| Component`     | `'a'`    | Link component.                                                                                                         |

| Event    | Payload | Description                                                      |
| -------- | ------- | ---------------------------------------------------------------- |
| `search` | `[]`    | The search field or icon was clicked; open your command palette. |

| Slot    | Description                                                                                |
| ------- | ------------------------------------------------------------------------------------------ |
| `brand` | The app's mark inside the home link (logo plus wordmark). The design system ships no logo. |
| `extra` | Between search and the call to action, e.g. a language menu.                               |

Behavior: links show from 1024 px; below, a menu button opens a panel with the links (and the call to action under
640 px). Search is a full field at 768–1023 px and from 1280 px, an icon button otherwise. After scrolling, the
background turns translucent with a blur.

**Accessibility.** A sticky `<header>` with `<nav>` landmarks named by `label`. Active links have
`aria-current="page"`. Name the home link: pass `brandName` (it also satisfies "label in name" when the wordmark
shows the same name) or `homeLabel`; with neither, the `brand` slot must carry the name itself (e.g. an `img alt`).
The menu button has `aria-expanded`/`aria-controls` and an "Open menu"/"Close menu" name; Escape closes the panel
and returns focus to the button. The search field has `aria-haspopup="dialog"`.

### OnRailPanel

The right-hand rail frame (288 px) for summaries and secondary content.

| Prop         | Type      | Default | Description                                                                                                                                                          |
| ------------ | --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `responsive` | `boolean` | `false` | Web: below `xl` the rail sits under the main content with a top border and scrolls with the page; from `xl` it is a column with a left border and its own scrolling. |

| Slot      | Description                       |
| --------- | --------------------------------- |
| `default` | Usually several `OnRailSection`s. |

**Accessibility.** An `<aside>` landmark; it is complementary content, so the page must make sense without it.

### OnRailSection

A titled section inside the rail.

| Prop       | Type     | Default  | Description                 |
| ---------- | -------- | -------- | --------------------------- |
| `title`    | `string` | required | The `<h2>`.                 |
| `subtitle` | `string` | —        | Muted line under the title. |

| Slot      | Description                                |
| --------- | ------------------------------------------ |
| `default` | Section content (stat tiles, short lists). |

---

## Showcase

### OnFeatureHero

A large feature card with a glowing, ringed stage and floating decorative items.

| Prop           | Type                  | Default  | Description                                                                                           |
| -------------- | --------------------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `title`        | `string`              | required | The heading.                                                                                          |
| `subtitle`     | `string`              | —        | A second line in salmon, inside the heading.                                                          |
| `badge`        | `string`              | —        | Small highlighted text above the title, e.g. "Featured this week".                                    |
| `description`  | `string`              | —        | Body with `**…**` emphasis (`OnHighlightText`).                                                       |
| `floats`       | `readonly T[]`        | `[]`     | Up to three decorative items placed on the stage, each drawn by the `float` slot.                     |
| `glowColor`    | `string \| null`      | —        | Six-digit hex tint of the glow (softened in light mode); the token glow otherwise.                    |
| `actionLabel`  | `string`              | —        | Primary button text; defaults to "Get started".                                                       |
| `actionIcon`   | `string`              | —        | Optional lucide icon before the primary button text, e.g. `download`.                                 |
| `detailHref`   | `string`              | —        | Adds a "View Details" link button.                                                                    |
| `detailLabel`  | `string`              | —        | Its text.                                                                                             |
| `linkAs`       | `string \| Component` | `'a'`    | Link component for the detail link.                                                                   |
| `responsive`   | `boolean`             | —        | Web: 360 px tall from 1024 px (276 px otherwise), stage scaled up.                                    |
| `compact`      | `boolean`             | —        | Smaller card for grids; the stage shows only when the card is at least 460 px wide (container query). |
| `headingLevel` | `2 \| 3`              | `2`      | Heading element.                                                                                      |

| Event    | Payload | Description                     |
| -------- | ------- | ------------------------------- |
| `action` | `[]`    | The primary button was clicked. |

| Slot               | Signature                                                             | Description                                                                                                                        |
| ------------------ | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `float`            | `(props: { item: T; index: number; size: OnAppIconSize }) => unknown` | One floating item, typically `<OnAppIcon :size="size" :priority="index === 0" …>`. Sizes are 118 / 54 / 46 (compact 64 / 40 / 32). |
| `badge-decoration` | `() => unknown`                                                       | A small mark after the badge text (about 13 px, `currentColor`).                                                                   |
| `actions`          | `() => unknown`                                                       | Replaces the primary button and the detail link.                                                                                   |

```vue
<OnFeatureHero title="Orbitfold 4" subtitle="Plans that keep up with you." :floats="apps" detail-href="/apps/orbitfold">
  <template #float="{ item, size, index }">
    <OnAppIcon :name="item.name" :src="item.icon" :size="size" :priority="index === 0" />
  </template>
</OnFeatureHero>
```

**Use** once per page for the main highlight. Floating items are hidden below 768 px, where they would cover the text.

**Accessibility.** The whole stage (glow, rings, floats) is `aria-hidden`; put any information they carry in the
text. The subtitle is part of the heading. The glow breathes slowly and stops with reduced motion.

### OnAppIcon

An app tile: the app's image, or a generated letter tile; `variant="terminal"` draws a command-line tile.

| Prop         | Type                                                                          | Default  | Description                                                                                                               |
| ------------ | ----------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| `name`       | `string`                                                                      | required | Display name; the letter tile shows its initials (first CJK character, or the first letters of up to two words).          |
| `variant`    | `'app' \| 'terminal'`                                                         | `'app'`  | Fallback when there is no image: letter tile or terminal tile (dark in both themes, monospace abbreviation, colored bar). |
| `seed`       | `string`                                                                      | —        | Stable identifier hashed (FNV-1a) to pick the tile color and, for terminal tiles, the abbreviation; defaults to `name`.   |
| `initials`   | `string`                                                                      | —        | Tile text instead of the derived one, e.g. a conventional short form of a command.                                        |
| `src`        | `string \| null`                                                              | —        | Image URL; on load failure (also one that failed before hydration) the tile shows instead.                                |
| `renditions` | `readonly OnImageRendition[] \| null`                                         | —        | `{ width, url }` renditions of `src` for `srcset`; the browser picks one for the rendered size.                           |
| `size`       | `20 \| 24 \| 26 \| 28 \| 30 \| 32 \| 40 \| 44 \| 46 \| 54 \| 64 \| 96 \| 118` | `44`     | Side in px.                                                                                                               |
| `accent`     | `string \| null`                                                              | —        | Six-digit hex accent for the letter tile; otherwise a palette color from the seed.                                        |
| `label`      | `string`                                                                      | —        | Makes the icon an image with this name; otherwise it is decorative.                                                       |
| `priority`   | `boolean`                                                                     | —        | Eager loading and high fetch priority for the first visible icon (hero, detail header).                                   |

Images are shown as delivered (`object-contain`, no mask, lazy-loaded); tiles get the app-icon radius and shadow.
Helpers: `iconColor(seed, accent)`, `darken(hex)`, `iconInitials(name)`, `cliAbbreviation(command)`, `ICON_PALETTE`.

**Accessibility.** Decorative (`aria-hidden`) unless `label` is set; next to a visible name leave `label` out.
