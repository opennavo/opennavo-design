import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { getIcons } from '@iconify/utils';
import type { IconifyJSON } from '@iconify/types';
import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import type { Plugin } from 'vite';
import { themeBootScript } from '../src/utils/theme';
import { GALLERY_ICONS, THEME_STORAGE_KEY } from './src/settings';

// Component gallery: every included component in both themes and all ten languages, for development and review.

/** `virtual:gallery-icons`: the extra Lucide icons the stories use, cut from the full set at build time. */
function galleryIcons(): Plugin {
  const id = 'virtual:gallery-icons';
  return {
    name: 'gallery-icons',
    resolveId: source => (source === id ? `\0${id}` : undefined),
    load(resolved) {
      if (resolved !== `\0${id}`) return undefined;
      const require = createRequire(import.meta.url);
      const lucide = JSON.parse(
        readFileSync(require.resolve('@iconify-json/lucide/icons.json'), 'utf8')
      ) as IconifyJSON;
      const subset = getIcons(lucide, [...GALLERY_ICONS], true);
      if (!subset) throw new Error('Cannot extract the gallery icons from Lucide');
      const { prefix, icons, aliases, width, height } = subset;
      return `export default ${JSON.stringify({ prefix, icons, aliases, width, height })};`;
    }
  };
}

/** Apply the saved theme before first paint, as an app's head script would. */
function themeBoot(): Plugin {
  return {
    name: 'gallery-theme-boot',
    transformIndexHtml: () => [
      { tag: 'script', children: themeBootScript(THEME_STORAGE_KEY), injectTo: 'head-prepend' }
    ]
  };
}

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  plugins: [
    vue(),
    UnoCSS({ configFile: fileURLToPath(new URL('./uno.config.ts', import.meta.url)) }),
    galleryIcons(),
    themeBoot()
  ],
  server: { host: '127.0.0.1', port: 6106, strictPort: true },
  build: { outDir: 'dist', emptyOutDir: true }
});
