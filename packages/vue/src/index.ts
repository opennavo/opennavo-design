// Actions and inputs
export { default as OnBadge } from './components/OnBadge.vue';
export { default as OnButton } from './components/OnButton.vue';
export { default as OnCheckbox } from './components/OnCheckbox.vue';
export { default as OnChip } from './components/OnChip.vue';
export { default as OnIcon } from './components/OnIcon.vue';
export { default as OnMenu } from './components/OnMenu.vue';
export { default as OnSearchField } from './components/OnSearchField.vue';
export { default as OnSegmented } from './components/OnSegmented.vue';
export { default as OnTabs } from './components/OnTabs.vue';
export { default as OnToggle } from './components/OnToggle.vue';
export { default as OnTooltip } from './components/OnTooltip.vue';

// Containers and data
export { default as OnBreadcrumb } from './components/OnBreadcrumb.vue';
export { default as OnCard } from './components/OnCard.vue';
export { default as OnCodeText } from './components/OnCodeText.vue';
export { default as OnHBarChart } from './components/OnHBarChart.vue';
export { default as OnHighlightText } from './components/OnHighlightText.vue';
export { default as OnKeyValueList } from './components/OnKeyValueList.vue';
export { default as OnLogViewer } from './components/OnLogViewer.vue';
export { default as OnMarkdownView } from './components/OnMarkdownView.vue';
export { default as OnPageHeader } from './components/OnPageHeader.vue';
export { default as OnPagination } from './components/OnPagination.vue';
export { default as OnProgressMeter } from './components/OnProgressMeter.vue';
export { default as OnSectionHeader } from './components/OnSectionHeader.vue';
export { default as OnSkeleton } from './components/OnSkeleton.vue';
export { default as OnStackBar } from './components/OnStackBar.vue';
export { default as OnStatTile } from './components/OnStatTile.vue';
export { default as OnTable } from './components/OnTable.vue';

// States
export { default as OnEmpty } from './components/OnEmpty.vue';
export { default as OnErrorState } from './components/OnErrorState.vue';
export { default as OnOffline } from './components/OnOffline.vue';

// Overlays
export { default as OnCommandPalette } from './components/OnCommandPalette.vue';
export { default as OnConfirm } from './components/OnConfirm.vue';
export { default as OnDialogShell } from './components/OnDialogShell.vue';
export { default as OnModal } from './components/OnModal.vue';
export { default as OnSheet } from './components/OnSheet.vue';
export { default as OnToast } from './components/OnToast.vue';
export { default as OnToastRegion } from './components/OnToastRegion.vue';

// Layout and navigation
export { default as OnAppShell } from './components/OnAppShell.vue';
export { default as OnNavItem } from './components/OnNavItem.vue';
export { default as OnRailPanel } from './components/OnRailPanel.vue';
export { default as OnRailSection } from './components/OnRailSection.vue';
export { default as OnSidebar } from './components/OnSidebar.vue';
export { default as OnToolbar } from './components/OnToolbar.vue';
export { default as OnTopNav } from './components/OnTopNav.vue';

// Showcase
export { default as OnAppIcon } from './components/OnAppIcon.vue';
export { default as OnFeatureHero } from './components/OnFeatureHero.vue';

export type { OnAppIconProps, OnAppIconSize, OnAppIconVariant } from './components/OnAppIcon.vue';
export type { OnAppShellProps } from './components/OnAppShell.vue';
export type { OnBadgeProps } from './components/OnBadge.vue';
export type { OnBreadcrumbItem, OnBreadcrumbProps } from './components/OnBreadcrumb.vue';
export type { OnButtonProps, OnButtonSize, OnButtonVariant } from './components/OnButton.vue';
export type { OnCardProps } from './components/OnCard.vue';
export type { OnCheckboxProps } from './components/OnCheckbox.vue';
export type { OnChipProps, OnChipTone } from './components/OnChip.vue';
export type { OnCommandGroup, OnCommandItem, OnCommandPaletteProps } from './components/OnCommandPalette.vue';
export type { OnConfirmProps } from './components/OnConfirm.vue';
export type { OnDialogPlacement, OnDialogShellProps } from './components/OnDialogShell.vue';
export type { OnEmptyProps } from './components/OnEmpty.vue';
export type { OnErrorStateProps } from './components/OnErrorState.vue';
export type { OnFeatureHeroProps } from './components/OnFeatureHero.vue';
export type { OnHBarChartProps, OnHBarItem } from './components/OnHBarChart.vue';
export type { OnHighlightTextProps } from './components/OnHighlightText.vue';
export type { OnIconProps } from './components/OnIcon.vue';
export type { OnKeyValueItem, OnKeyValueListProps } from './components/OnKeyValueList.vue';
export type { OnLogViewerProps } from './components/OnLogViewer.vue';
export type { OnMarkdownViewProps } from './components/OnMarkdownView.vue';
export type { OnMenuItem, OnMenuProps } from './components/OnMenu.vue';
export type { OnModalProps, OnModalSize } from './components/OnModal.vue';
export type { OnNavItemProps } from './components/OnNavItem.vue';
export type { OnOfflineProps } from './components/OnOffline.vue';
export type { OnPageHeaderProps } from './components/OnPageHeader.vue';
export type { OnPaginationProps } from './components/OnPagination.vue';
export type { OnProgressMeterProps } from './components/OnProgressMeter.vue';
export type { OnRailPanelProps } from './components/OnRailPanel.vue';
export type { OnRailSectionProps } from './components/OnRailSection.vue';
export type { OnSearchFieldProps } from './components/OnSearchField.vue';
export type { OnSectionHeaderProps } from './components/OnSectionHeader.vue';
export type { OnSegmentedProps } from './components/OnSegmented.vue';
export type { OnSheetProps } from './components/OnSheet.vue';
export type { OnSidebarGroup, OnSidebarItem, OnSidebarProps } from './components/OnSidebar.vue';
export type { OnSkeletonProps, OnSkeletonRadius } from './components/OnSkeleton.vue';
export type { OnStackBarProps, OnStackItem } from './components/OnStackBar.vue';
export type { OnStatDelta, OnStatTileProps } from './components/OnStatTile.vue';
export type { OnTableColumn, OnTableProps, OnTableSort, OnTableSortOrder } from './components/OnTable.vue';
export type { OnTabsProps } from './components/OnTabs.vue';
export type { OnToastProps, OnToastTone } from './components/OnToast.vue';
export type { OnToastItem, OnToastRegionProps } from './components/OnToastRegion.vue';
export type { OnToggleProps } from './components/OnToggle.vue';
export type { OnToolbarProps } from './components/OnToolbar.vue';
export type { OnTooltipProps } from './components/OnTooltip.vue';
export type { OnTopNavItem, OnTopNavProps } from './components/OnTopNav.vue';
export type { OnSegmentedOption, OnTabItem } from './types';

export { ON_UI_LOCALE, createOnUi, useUiLocale, useUiMessages } from './composables/locale';
export { LOCALES, interpolate, isLocale, uiMessages } from './messages';
export type { Locale, UiMessages } from './messages';
export { createToastQueue } from './composables/toast';
export type { OnToastInput, ToastQueue } from './composables/toast';
export { focusableIn, lockScroll, moveFocus, trapTab, unlockScroll, usingKeyboard } from './composables/overlay';
export { isRovingKey, nextRovingIndex } from './composables/roving';
export type { RovingKey } from './composables/roving';
export { BUNDLED_ICONS, UI_ICONS, getIcon, registerIcons } from './icons';
export type { IconData, OnIconSet } from './icons';

export {
  THEME_PREFERENCES,
  applyThemePreference,
  isThemePreference,
  resolveTheme,
  themeBootScript
} from './utils/theme';
export type { ThemePreference } from './utils/theme';
export { ICON_PALETTE, cliAbbreviation, darken, fnv1a32, iconColor, iconInitials } from './utils/appIcon';
export { codeParts, codeWordsHtml, wordPieces } from './utils/codeText';
export { formatPercent } from './utils/format';
export type { DecimalFormatOptions, FormatOptions } from './utils/format';
export { heroGlowGradient } from './utils/glow';
export { parseHighlight } from './utils/highlight';
export type { HighlightPart } from './utils/highlight';
export { imageSrcset } from './utils/image';
export type { OnImageRendition } from './utils/image';
export { classifyLogLine } from './utils/log';
export type { LogLineKind } from './utils/log';
export { paginationRange } from './utils/pagination';
export type { PaginationItem } from './utils/pagination';
