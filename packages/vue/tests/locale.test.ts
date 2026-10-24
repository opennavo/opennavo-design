import { mount } from '@vue/test-utils';
import { computed, defineComponent, h, ref } from 'vue';
import { describe, expect, it } from 'vitest';
import { ON_UI_LOCALE, createOnUi, useUiLocale, useUiMessages } from '../src/composables/locale';
import { LOCALES, interpolate, isLocale, uiMessages } from '../src/messages';
import type { Locale } from '../src/messages';

const LocaleProbe = defineComponent({
  setup() {
    const locale = useUiLocale();
    return () => h('span', locale.value);
  }
});

const MessageProbe = defineComponent({
  setup() {
    const messages = useUiMessages();
    return () => h('span', messages.value.dialog.close);
  }
});

/** Flatten nested messages into dotted keys. */
function flatten(value: object, prefix = ''): Record<string, unknown> {
  return Object.fromEntries(
    Object.entries(value).flatMap(([key, child]) =>
      child !== null && typeof child === 'object'
        ? Object.entries(flatten(child as object, `${prefix}${key}.`))
        : [[`${prefix}${key}`, child]]
    )
  );
}

const placeholders = (text: string) => [...text.matchAll(/\{(\w+)\}/g)].map(match => match[1]).sort();

describe('UI locale defaults', () => {
  it('uses English without an injected locale', () => {
    expect(mount(LocaleProbe).text()).toBe('en-US');
    expect(mount(MessageProbe).text()).toBe('Close');
  });

  it('uses English when the plugin is installed without options', () => {
    expect(mount(LocaleProbe, { global: { plugins: [createOnUi()] } }).text()).toBe('en-US');
    expect(mount(MessageProbe, { global: { plugins: [createOnUi({})] } }).text()).toBe('Close');
  });

  it('preserves an explicitly selected reactive locale', async () => {
    const locale = ref('zh-CN');
    const wrapper = mount(LocaleProbe, { global: { provide: { [ON_UI_LOCALE as symbol]: locale } } });
    expect(wrapper.text()).toBe('zh-CN');
    locale.value = 'ja-JP';
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toBe('ja-JP');
  });

  it('switches every component string with the createOnUi locale and falls back to English for unknown codes', async () => {
    const locale = ref<Locale>('de-DE');
    const wrapper = mount(MessageProbe, { global: { plugins: [createOnUi({ locale })] } });
    expect(wrapper.text()).toBe('Schließen');
    locale.value = 'zh-Hant';
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toBe('關閉');
    locale.value = 'ko-KR' as Locale;
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toBe('Close');
  });

  it('accepts a computed locale mapped from app state', async () => {
    const appLocale = ref('fr-FR');
    const locale = computed<Locale>(() => (isLocale(appLocale.value) ? appLocale.value : 'en-US'));
    const wrapper = mount(MessageProbe, { global: { plugins: [createOnUi({ locale })] } });
    expect(wrapper.text()).toBe('Fermer');
    appLocale.value = 'fr';
    await wrapper.vm.$nextTick();
    expect(wrapper.text()).toBe('Close');
  });
});

describe('Message catalog', () => {
  const english = flatten(uiMessages['en-US']);

  it('covers the ten interface languages', () => {
    expect([...LOCALES].sort()).toEqual(
      ['de-DE', 'en-US', 'es-ES', 'fr-FR', 'it-IT', 'ja-JP', 'pt-BR', 'ru-RU', 'zh-CN', 'zh-Hant'].sort()
    );
    expect(Object.keys(uiMessages).sort()).toEqual([...LOCALES].sort());
    expect(LOCALES.every(isLocale)).toBe(true);
    expect(isLocale('zh-TW')).toBe(false);
    expect(isLocale(undefined)).toBe(false);
  });

  it.each(LOCALES)('%s has the same keys as English, only non-empty strings, and the same placeholders', locale => {
    const messages = flatten(uiMessages[locale]);
    expect(Object.keys(messages).sort()).toEqual(Object.keys(english).sort());
    for (const [key, value] of Object.entries(messages)) {
      expect(typeof value, key).toBe('string');
      expect((value as string).trim(), key).not.toBe('');
      expect(placeholders(value as string), key).toEqual(placeholders(english[key] as string));
    }
  });

  it('names no product: the home link label takes the app name as a placeholder', () => {
    for (const locale of LOCALES) {
      const values = Object.values(flatten(uiMessages[locale])) as string[];
      expect(
        values.some(value => /opennavo|homebrew|\bbrew\b|\bcask/i.test(value)),
        locale
      ).toBe(false);
      expect(uiMessages[locale].topNav.home, locale).toContain('{name}');
    }
  });
});

describe('interpolate', () => {
  it('fills named placeholders and keeps missing ones visible', () => {
    expect(interpolate(uiMessages['en-US'].nav.page, { page: 3 })).toBe('Page 3');
    expect(interpolate(uiMessages['zh-CN'].topNav.home, { name: 'Acme' })).toBe('Acme 首页');
    expect(interpolate('{a} and {b}', { a: 1 })).toBe('1 and {b}');
    expect(interpolate('no placeholders')).toBe('no placeholders');
  });
});
