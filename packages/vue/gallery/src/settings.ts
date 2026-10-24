// Shared by the gallery app and its Vite config (theme boot script, icon subset).

export const THEME_STORAGE_KEY = 'ond:gallery-theme';
export const LOCALE_STORAGE_KEY = 'ond:gallery-locale';

/** Lucide icons the stories use beyond the package's bundled set, registered with registerIcons. */
export const GALLERY_ICONS = [
  'bell',
  'cloud',
  'compass',
  'copy',
  'folder',
  'heart',
  'layout-grid',
  'library',
  'pin',
  'settings',
  'share-2',
  'sparkles',
  'star',
  'trash-2'
] as const;
