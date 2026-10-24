import type { TokenVariable } from '@opennavo/design-tokens';

export interface OnSegmentedOption<T extends string> {
  value: T;
  label: string;
  count?: number;
  /** Leading option dot color as a token variable name, e.g. chart-series1. */
  dots?: readonly TokenVariable[];
}

export interface OnTabItem<T extends string> {
  value: T;
  label: string;
  count?: number;
  disabled?: boolean;
  /** Link tabs: each tab has its own URL (e.g. for search engines); any href switches the tabs to link navigation. */
  href?: string;
  /** ID of the panel a same-page tab controls (aria-controls). */
  controls?: string;
}
