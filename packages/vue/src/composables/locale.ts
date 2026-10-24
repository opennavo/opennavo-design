// Component locale: the app provides it (its i18n state or settings); English when nothing is provided.
import { computed, inject, ref } from 'vue';
import type { App, ComputedRef, InjectionKey, Ref } from 'vue';
import { uiMessages } from '../messages';
import type { Locale, UiMessages } from '../messages';

export const ON_UI_LOCALE: InjectionKey<Readonly<Ref<Locale>>> = Symbol('on-ui-locale');

/** Vue plugin: English by default; pass a reactive locale to follow app settings. */
export function createOnUi({ locale = ref<Locale>('en-US') }: { locale?: Readonly<Ref<Locale>> } = {}) {
  return {
    install(app: App) {
      app.provide(ON_UI_LOCALE, locale);
    }
  };
}

export function useUiLocale(): Readonly<Ref<Locale>> {
  return inject(ON_UI_LOCALE, ref<Locale>('en-US'));
}

/** The component strings for the current locale; English for a locale outside the ten. */
export function useUiMessages(): ComputedRef<UiMessages> {
  const locale = useUiLocale();
  return computed(() => uiMessages[locale.value] ?? uiMessages['en-US']);
}
