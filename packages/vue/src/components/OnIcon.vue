<script setup lang="ts">
import { computed } from 'vue';
import { getIcon } from '../icons';

export interface OnIconProps {
  /** Lucide name such as search or lucide:search, or prefix:name; only bundled (src/icons/names.ts) or registered icons. */
  name: string;
  /** Pixel size: 12 in badges, 14 in buttons, 16 default, 17 sidebar, 18 palette. */
  size?: number;
  /** If supplied, read as an image; otherwise decorative and hidden from screen readers. */
  label?: string;
}

const props = withDefaults(defineProps<OnIconProps>(), { size: 16 });

// Render bundled SVG directly rather than @iconify/vue, which defaults to browser-only rendering with empty SSR SVG until hydration,
// and adds about 18 KB at runtime.
const icon = computed(() => getIcon(props.name));
// Stroke 1.6, or 2 below 16 px.
const stroke = computed(() => (props.size < 16 ? 2 : 1.6));

// Optional chaining keeps bundlers without import.meta.env working; Vite still replaces it.
if (import.meta.env?.DEV && !icon.value) console.warn(`[OnIcon] Icon not bundled or registered: ${props.name}`);

// A template disable comment would make the root a fragment; place it here through end-of-file.
/* eslint-disable vue/no-v-html -- Bundled Lucide data (scripts/icons.ts) or icon sets the app registers, never user input. */
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    :viewBox="`0 0 ${icon?.width ?? 24} ${icon?.height ?? 24}`"
    class="on-icon"
    :style="{ '--on-icon-stroke': stroke }"
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="label ? undefined : 'true'"
    v-html="icon?.body ?? ''"
  ></svg>
</template>

<style>
.on-icon {
  flex: none;
}

/* CSS properties override SVG stroke-width presentation attributes. */
.on-icon [stroke-width] {
  stroke-width: var(--on-icon-stroke, 1.6);
}
</style>
