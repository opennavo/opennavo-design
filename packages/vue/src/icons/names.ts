// Bundled Lucide icons: offline, rendered as inline SVG (also during SSR). Add a name here, then run
// `pnpm --filter @opennavo/design-vue gen`. Apps add their own icons at runtime with registerIcons (./index.ts);
// names that are neither bundled nor registered render nothing and warn in development.

/** Icons the components draw themselves, plus sun, moon and sun-moon for theme switches. */
export const UI_ICONS = [
  // OnSectionHeader link, OnKeyValueList external link, OnFeatureHero detail link
  'arrow-right',
  'arrow-up-right',
  // OnCheckbox, OnMenu choice items, OnToast success
  'check',
  'minus',
  // OnPagination, OnBreadcrumb
  'chevron-left',
  'chevron-right',
  // OnErrorState
  'circle-alert',
  'refresh-cw',
  // OnFeatureHero primary action
  'download',
  // OnMenu default trigger
  'ellipsis',
  // OnEmpty default
  'inbox',
  // OnToast tones
  'info',
  'triangle-alert',
  // OnTopNav mobile menu
  'menu',
  // OnSearchField, OnToolbar, OnTopNav, OnCommandPalette
  'search',
  // OnOffline
  'wifi-off',
  // Close and clear buttons
  'x',
  // Theme preference controls
  'sun',
  'moon',
  'sun-moon'
] as const;

export const BUNDLED_ICONS: readonly string[] = [...new Set(UI_ICONS)];
