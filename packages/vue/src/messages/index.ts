// Component strings in the ten interface languages. English is the source; every file has the same keys and the same
// {placeholders} (tests/locale.test.ts). A new string goes into all ten files.
import deDE from './de-DE.json';
import enUS from './en-US.json';
import esES from './es-ES.json';
import frFR from './fr-FR.json';
import itIT from './it-IT.json';
import jaJP from './ja-JP.json';
import ptBR from './pt-BR.json';
import ruRU from './ru-RU.json';
import zhCN from './zh-CN.json';
import zhHant from './zh-Hant.json';

/** The ten interface languages, English first. */
export const LOCALES = [
  'en-US',
  'zh-CN',
  'ja-JP',
  'es-ES',
  'pt-BR',
  'ru-RU',
  'de-DE',
  'fr-FR',
  'it-IT',
  'zh-Hant'
] as const;

export type Locale = (typeof LOCALES)[number];

export type UiMessages = typeof enUS;

export const uiMessages: Record<Locale, UiMessages> = {
  'en-US': enUS,
  'zh-CN': zhCN,
  'ja-JP': jaJP,
  'es-ES': esES,
  'pt-BR': ptBR,
  'ru-RU': ruRU,
  'de-DE': deDE,
  'fr-FR': frFR,
  'it-IT': itIT,
  'zh-Hant': zhHant
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value);
}

/** Replace {name} placeholders; missing parameters stay verbatim so omissions are visible. */
export function interpolate(template: string, params: Record<string, string | number> = {}): string {
  return template.replace(/\{(\w+)\}/g, (placeholder, key: string) =>
    key in params ? String(params[key]) : placeholder
  );
}
