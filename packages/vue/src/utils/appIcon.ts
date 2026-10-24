// App tile fallbacks: letter and terminal tile colors and text. The FNV-1a 32-bit hash is simple to reproduce on
// other platforms, so a native client can pick the same color for the same identifier.
import { color } from '@opennavo/design-tokens';

/** Ordered tile palette, without synthesizing new colors: chart.series1/2/3, status.info, brand.salmon, status.success. */
export const ICON_PALETTE: readonly string[] = [
  color.chart.series1,
  color.chart.series2,
  color.chart.series3,
  color.status.info,
  color.brand.salmon,
  color.status.success
];

/** FNV-1a 32-bit hash over UTF-8 bytes, returning an unsigned integer. */
export function fnv1a32(input: string): number {
  let hash = 0x811c9dc5;
  for (const byte of new TextEncoder().encode(input)) {
    hash ^= byte;
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

const HEX_COLOR = /^#[0-9a-f]{6}$/i;

/** Tile accent: a valid six-digit accent color, otherwise a palette color picked by hashing the seed. */
export function iconColor(seed: string, accent?: string | null): string {
  if (accent && HEX_COLOR.test(accent)) return accent.toUpperCase();
  return ICON_PALETTE[fnv1a32(seed) % ICON_PALETTE.length] as string;
}

/** Darken by blending with black, used at 18% for letter-tile gradient endpoints. */
export function darken(hex: string, amount = 0.18): string {
  if (!HEX_COLOR.test(hex)) throw new Error(`Only six-digit hexadecimal colors are supported: ${hex}`);
  const value = Number.parseInt(hex.slice(1), 16);
  const channels = [(value >> 16) & 0xff, (value >> 8) & 0xff, value & 0xff];
  return `#${channels
    .map(channel =>
      Math.round(channel * (1 - amount))
        .toString(16)
        .padStart(2, '0')
    )
    .join('')
    .toUpperCase()}`;
}

const CJK = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/u;

/** Letter tiles: the first CJK character; the uppercase first initial of one word, the first two initials of more. */
export function iconInitials(name: string): string {
  const text = name.trim();
  const first = Array.from(text)[0] ?? '';
  if (CJK.test(first)) return first;
  const words = text.split(/[\s\-_.·]+/).filter(word => /[\p{L}\p{N}]/u.test(word));
  // After filtering, each word contains letters/digits; take the first.
  const initials = words.slice(0, 2).map(word =>
    word
      .replace(/^[^\p{L}\p{N}]+/u, '')
      .charAt(0)
      .toUpperCase()
  );
  return initials.join('') || '?';
}

/**
 * Terminal tile text: drop an @version suffix, then take the first two letters or digits (python@3.12 → py).
 * Pass OnAppIcon `initials` for conventional abbreviations that are not the first two letters.
 */
export function cliAbbreviation(command: string): string {
  const letters = command
    .replace(/@.*$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
  return letters.slice(0, 2) || '?';
}
