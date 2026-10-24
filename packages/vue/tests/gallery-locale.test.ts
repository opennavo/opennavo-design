import { ref } from 'vue';
import { describe, expect, it, vi } from 'vitest';
import type { Locale } from '../src';
import { LOCALES } from '../src/messages';

vi.mock('../gallery/src/state', () => ({ locale: ref<Locale>('en-US') }));
const { locale } = await import('../gallery/src/state');
const { t, localize } = await import('../gallery/src/i18n');

describe('gallery localization', () => {
  it('uses English by default and reacts to all ten language choices', () => {
    expect(t('Vue component gallery')).toBe('Vue component gallery');
    for (const language of LOCALES) {
      locale.value = language;
      const title = t('Vue component gallery');
      expect(title).toBeTruthy();
      if (language !== 'en-US') expect(title).not.toBe('Vue component gallery');
    }
    locale.value = 'en-US';
  });

  it('translates nested presentation copy without changing selection keys, routes or callbacks', () => {
    locale.value = 'zh-CN';
    const action = vi.fn();
    const source = [{ key: 'Light', href: '#Light', label: 'Light', action, items: [{ key: 'Dark', label: 'Dark' }] }];
    const result = localize(source);
    expect(result[0]!.key).toBe('Light');
    expect(result[0]!.href).toBe('#Light');
    expect(result[0]!.action).toBe(action);
    expect(result[0]!.label).toBe('浅色');
    expect(result[0]!.items[0]).toEqual({ key: 'Dark', label: '深色' });
    expect(source[0]!.label).toBe('Light');
    locale.value = 'en-US';
  });
});
