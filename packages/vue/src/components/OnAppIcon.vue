<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { cliAbbreviation, darken, iconColor, iconInitials } from '../utils/appIcon';
import { imageSrcset } from '../utils/image';
import type { OnImageRendition } from '../utils/image';

export type OnAppIconSize = 20 | 24 | 26 | 28 | 30 | 32 | 40 | 44 | 46 | 54 | 64 | 96 | 118;

/** app: the image or a letter tile; terminal: a dark command-line tile with a monospace abbreviation. */
export type OnAppIconVariant = 'app' | 'terminal';

export interface OnAppIconProps {
  /** Display name: the letter tile's initials; also the default seed. */
  name: string;
  /** Fallback tile when there is no image or it fails to load. */
  variant?: OnAppIconVariant;
  /** Stable identifier hashed to pick the tile color and, for terminal tiles, the abbreviation; defaults to name. */
  seed?: string;
  /** Tile text instead of the derived initials or abbreviation, e.g. a conventional short form of a command. */
  initials?: string;
  /** Remote or local icon image, falling back to the tile on load failure. */
  src?: string | null;
  /** Stored renditions of `src` (e.g. 64/128/256 px WebP); the browser picks one for the size and pixel density. */
  renditions?: readonly OnImageRendition[] | null;
  size?: OnAppIconSize;
  /** Six-digit accent color for the letter-tile background; otherwise a palette color from the seed. */
  accent?: string | null;
  /** Provide for standalone icons without adjacent names; read as an image, otherwise decorative. */
  label?: string;
  /** Critical first-screen icon (detail header, hero): eager loading and higher fetch priority. */
  priority?: boolean;
}

const props = withDefaults(defineProps<OnAppIconProps>(), { variant: 'app', size: 44 });

const failed = ref(false);
const image = ref<HTMLImageElement>();

// SSR images may fail before hydration attaches error handlers; recheck on mount.
onMounted(() => {
  const element = image.value;
  if (element?.complete && element.naturalWidth === 0) failed.value = true;
});

watch(
  () => props.src,
  () => {
    failed.value = false;
  }
);

const showImage = computed(() => Boolean(props.src) && !failed.value);
const srcset = computed(() => imageSrcset(props.renditions));
const box = computed(() => ({ width: `${props.size}px`, height: `${props.size}px` }));
const seed = computed(() => props.seed ?? props.name);

// Letter tile: accent or seed hash, 160° gradient darkened 18%, text 42% of the side.
const letterColor = computed(() => iconColor(seed.value, props.accent));
const letterStyle = computed(() => ({
  '--on-tile-from': letterColor.value,
  '--on-tile-to': darken(letterColor.value),
  fontSize: `${Math.round(props.size * 0.42)}px`
}));

// Terminal tile: monospace abbreviation at 30% of the side, bottom bar colored only by the seed hash.
const cliStyle = computed(() => ({ fontSize: `${Math.round(props.size * 0.3)}px` }));
const barColor = computed(() => iconColor(seed.value));
</script>

<template>
  <span
    class="relative box-border inline-grid shrink-0 place-items-center"
    :class="{ 'overflow-hidden rounded-app-icon shadow-app-icon': !showImage }"
    :style="box"
    :role="label ? 'img' : undefined"
    :aria-label="label"
    :aria-hidden="label ? undefined : 'true'"
  >
    <img
      v-if="showImage"
      ref="image"
      :src="src ?? undefined"
      :srcset="srcset"
      :sizes="srcset ? `${size}px` : undefined"
      alt=""
      :loading="priority ? 'eager' : 'lazy'"
      :fetchpriority="priority ? 'high' : undefined"
      decoding="async"
      class="h-full w-full object-contain"
      @error="failed = true"
    />
    <span
      v-else-if="variant !== 'terminal'"
      class="on-letter-tile grid h-full w-full place-items-center font-600 leading-none text-component-letter-icon-text"
      :style="letterStyle"
    >
      {{ initials ?? iconInitials(name) }}
    </span>
    <span v-else class="on-cli-tile relative grid h-full w-full place-items-center" :style="cliStyle">
      <span class="font-mono font-600 leading-none text-component-cli-icon-text">{{
        initials ?? cliAbbreviation(seed)
      }}</span>
      <span class="on-cli-bar absolute h-2px rounded-full" :style="{ backgroundColor: barColor }"></span>
    </span>
  </span>
</template>

<style>
.on-letter-tile {
  background: linear-gradient(160deg, var(--on-tile-from), var(--on-tile-to));
  text-shadow: var(--on-shadow-icon-text);
}

.on-cli-tile {
  background: linear-gradient(160deg, var(--on-component-cli-icon-from), var(--on-component-cli-icon-to));
  letter-spacing: -0.04em;
}

.on-cli-bar {
  left: 18%;
  right: 18%;
  bottom: 16%;
}
</style>
