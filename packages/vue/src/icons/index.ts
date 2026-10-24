import { lucideSubset } from './lucide';
import type { OnIconSet } from './set';

export interface IconData {
  /** Inner SVG content from the bundled Lucide subset (scripts/icons.ts) or a registered set. */
  body: string;
  width: number;
  height: number;
}

// Looked up last to first: registered sets override earlier ones and the bundled subset.
const sets: OnIconSet[] = [lucideSubset];

/**
 * Make more icons available to OnIcon and every component icon prop. Call before the app mounts (also in the
 * server entry for SSR); icons already rendered do not update. Registering the same object again does nothing.
 */
export function registerIcons(set: OnIconSet): void {
  if (!sets.includes(set)) sets.push(set);
}

/** Get an icon by name (lucide:search, search, or prefix:name for a registered set); undefined when unknown. */
export function getIcon(name: string): IconData | undefined {
  const [prefix, id] = name.includes(':') ? name.split(':', 2) : [lucideSubset.prefix, name];
  if (!prefix || !id) return undefined;
  for (let index = sets.length - 1; index >= 0; index -= 1) {
    const set = sets[index] as OnIconSet;
    if (set.prefix !== prefix) continue;
    const icon = set.icons[set.aliases?.[id]?.parent ?? id];
    if (icon) return { body: icon.body, width: icon.width ?? set.width ?? 16, height: icon.height ?? set.height ?? 16 };
  }
  return undefined;
}

export { BUNDLED_ICONS, UI_ICONS } from './names';
export type { OnIconSet } from './set';
