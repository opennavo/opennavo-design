import { ref, watch } from 'vue';
import { applyThemePreference, isLocale, isThemePreference } from '../../src';
import type { Locale, ThemePreference } from '../../src';
import { LOCALE_STORAGE_KEY, THEME_STORAGE_KEY } from './settings';

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    // Storage can be unavailable (private windows, sandboxed frames).
    return null;
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Keep working without persistence.
  }
}

const params = new URLSearchParams(location.search);

/** ?locale= wins over the saved choice; English otherwise. */
const requestedLocale = params.get('locale');
const savedLocale = read(LOCALE_STORAGE_KEY);
export const locale = ref<Locale>(
  isLocale(requestedLocale) ? requestedLocale : isLocale(savedLocale) ? savedLocale : 'en-US'
);

/** System follows prefers-color-scheme; the head script already applied a saved light or dark choice. */
const savedTheme = read(THEME_STORAGE_KEY);
export const theme = ref<ThemePreference>(isThemePreference(savedTheme) ? savedTheme : 'system');

watch(
  locale,
  value => {
    document.documentElement.lang = value;
    write(LOCALE_STORAGE_KEY, value);
  },
  { immediate: true }
);

watch(
  theme,
  value => {
    applyThemePreference(value);
    write(THEME_STORAGE_KEY, value);
  },
  { immediate: true }
);

/** ?story=Name shows one story for isolated review and screenshots. */
export const selectedStory = params.get('story');
