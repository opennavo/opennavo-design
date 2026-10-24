// Number formats used by the components, shared with apps so their own numbers read the same.
import type { Locale } from '../messages';

export interface FormatOptions {
  locale?: Locale;
}

export interface DecimalFormatOptions extends FormatOptions {
  /** Maximum fraction digits. */
  digits?: number;
}

/** Percent input is a ratio (0.008 → 0.8%); at most digits decimals without trailing zeroes. */
export function formatPercent(value: number, { locale = 'en-US', digits = 0 }: DecimalFormatOptions = {}): string {
  return new Intl.NumberFormat(locale, {
    style: 'percent',
    maximumFractionDigits: digits,
    useGrouping: locale !== 'en-US' && locale !== 'zh-CN'
  }).format(value);
}
