import { locale } from './state';
import enUS from './messages/en-US.json';
import type { Locale } from '../../src';

// Locale files are bundled locally; switching languages makes no network request.
const modules = import.meta.glob<{ default: Record<string, string> }>('./messages/*.json', { eager: true });
const catalogs = Object.fromEntries(
  Object.entries(modules).map(([path, module]) => [path.split('/').pop()!.replace('.json', ''), module.default])
) as Record<Locale, Record<string, string>>;

export function t(source: string, params: Record<string, string | number> = {}): string {
  const value = catalogs[locale.value]?.[source] ?? source;
  return value.replace(/\{(\w+)\}/g, (placeholder, key: string) => (key in params ? String(params[key]) : placeholder));
}

const copyKeys = new Set([
  'label',
  'title',
  'description',
  'summary',
  'subtitle',
  'placeholder',
  'hint',
  'text',
  'caption',
  'emptyText',
  'badgeLabel',
  'ariaLabel',
  'actionLabel'
]);

/** Translate presentation copy while preserving IDs, URLs, component names and enum values. */
export function localize<T>(value: T): T {
  if (typeof value === 'string') return t(value) as T;
  if (Array.isArray(value)) return value.map(item => localize(item)) as T;
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [
        key,
        copyKeys.has(key) && typeof child === 'string'
          ? t(child)
          : child !== null && typeof child === 'object'
            ? localize(child)
            : child
      ])
    ) as T;
  }
  return value;
}

export const gallerySourceMessages = enUS;
