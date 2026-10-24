<script setup lang="ts" generic="T">
import { computed } from 'vue';
import type { Component } from 'vue';
import type { OnAppIconSize } from './OnAppIcon.vue';
import OnButton from './OnButton.vue';
import OnHighlightText from './OnHighlightText.vue';
import OnIcon from './OnIcon.vue';
import { useUiMessages } from '../composables/locale';
import { heroGlowGradient } from '../utils/glow';

export interface OnFeatureHeroProps<Item = unknown> {
  /** Badge text such as Featured this week; #badge-decoration adds a mark after it. */
  badge?: string;
  title: string;
  /** Second line, salmon. */
  subtitle?: string;
  /** Body, with **…** emphasized using primary text. */
  description?: string;
  /** Decorative items floating on the glow, each drawn by the #float slot: the first large, up to two others small. */
  floats?: readonly Item[];
  /** Six-digit glow accent with unchanged opacity stops; violet by default. */
  glowColor?: string | null;
  /** Primary button text, default Get. */
  actionLabel?: string;
  /** Optional lucide icon before the action label, e.g. download. */
  actionIcon?: string;
  /** Detail URL; omit View details if absent. */
  detailHref?: string;
  detailLabel?: string;
  /** Link component (NuxtLink/RouterLink), native a by default. */
  linkAs?: string | Component;
  /** Web at ≥1024 width: increase height to 360. */
  responsive?: boolean;
  /** Compact variant, e.g. a pick inside a grid; the full-size hero stays the default. */
  compact?: boolean;
  headingLevel?: 2 | 3;
}

const props = withDefaults(defineProps<OnFeatureHeroProps<T>>(), {
  floats: () => [],
  linkAs: 'a',
  headingLevel: 2
});

const emit = defineEmits<{
  /** Primary/Get button click. */
  action: [];
}>();

defineSlots<{
  /** Replace the two default buttons. */
  actions?: () => unknown;
  /** A small decorative mark after the badge text (about 13 px, currentColor), hidden from screen readers. */
  'badge-decoration'?: () => unknown;
  /** One floating item, e.g. an OnAppIcon at `size`; the first (index 0) is the large, high-priority one. */
  float?: (props: { item: T; index: number; size: OnAppIconSize }) => unknown;
}>();

const messages = useUiMessages();

interface FloatSlot {
  item: T;
  size: OnAppIconSize;
  style: Record<string, string>;
}

// Positions relative to a 520×520 glow stage anchored bottom-right.
const SLOTS: { size: OnAppIconSize; left: number; top: number; rotate: number; opacity: number }[] = [
  { size: 118, left: 70, top: -6, rotate: -8, opacity: 1 },
  { size: 54, left: 8, top: 106, rotate: 9, opacity: 0.85 },
  { size: 46, left: 206, top: -30, rotate: 12, opacity: 0.75 }
];
const COMPACT_SIZES: readonly OnAppIconSize[] = [64, 40, 32];

const floating = computed<FloatSlot[]>(() =>
  props.floats.slice(0, SLOTS.length).map((item, index) => {
    const slot = SLOTS[index] as (typeof SLOTS)[number];
    return {
      item,
      size: props.compact ? (COMPACT_SIZES[index] as OnAppIconSize) : slot.size,
      style: {
        left: `${slot.left}px`,
        top: `${slot.top}px`,
        transform: `rotate(${slot.rotate}deg)`,
        opacity: String(slot.opacity)
      }
    };
  })
);

// A custom accent glow is softened in light mode; filter composes with the breathing opacity animation.
const glowStyle = computed(() => {
  const gradient = heroGlowGradient(props.glowColor);
  return gradient ? { background: gradient, filter: 'opacity(var(--on-effect-accent-glow-opacity))' } : undefined;
});

const heading = computed(() => `h${props.headingLevel}`);

// At ≥768 use height 276 matching desktop/wide web; narrow mobile grows with wrapped text without clipping buttons.
</script>

<template>
  <section
    class="relative box-border overflow-hidden border border-solid border-line-subtle bg-component-hero-bg font-sans"
    :class="
      compact
        ? 'on-hero-compact rounded-big'
        : ['min-h-276px rounded-huge md:h-276px', responsive ? 'on-hero-responsive lg:h-360px' : '']
    "
  >
    <div class="on-hero-stage pointer-events-none absolute h-520px w-520px" aria-hidden="true">
      <div class="on-hero-glow absolute inset-0 rounded-full" :style="glowStyle"></div>
      <svg class="absolute inset-0" width="520" height="520" viewBox="0 0 520 520" fill="none">
        <g class="on-hero-rings">
          <circle cx="260" cy="260" r="110" />
          <circle cx="260" cy="260" r="170" />
          <circle cx="260" cy="260" r="235" />
        </g>
      </svg>
      <!-- Below 768, floating items overlap text; retain only glow. -->
      <span
        v-for="(float, index) in floating"
        :key="index"
        class="on-hero-float absolute hidden md:block"
        :style="float.style"
      >
        <slot name="float" :item="float.item" :index="index" :size="float.size" />
      </span>
    </div>

    <!-- At full width the copy has no right padding (body width 398); narrow screens add some so text never touches the edge. -->
    <div
      class="on-hero-copy relative box-border"
      :class="compact ? 'p-24px' : 'max-w-430px pb-28px pl-32px pr-24px pt-20px sm:pr-0 md:pb-0'"
    >
      <span
        v-if="badge"
        class="inline-flex h-26px items-center gap-6px rounded-small bg-accent-salmon-subtle px-10px text-12.5px font-500 text-brand-salmon"
      >
        {{ badge }}
        <span v-if="$slots['badge-decoration']" class="inline-flex" aria-hidden="true">
          <slot name="badge-decoration" />
        </span>
      </span>
      <component
        :is="heading"
        class="m-0 text-ink-primary"
        :class="
          compact ? 'text-26px font-600 leading-[1.2] tracking-[-0.02em]' : 'mt-16px text-display max-md:text-36px'
        "
      >
        {{ title }}
        <span
          v-if="subtitle"
          class="mt-4px block tracking-[-0.02em] text-brand-salmon"
          :class="compact ? 'text-20px leading-[1.3]' : 'text-32px leading-[1.08] max-md:text-26px'"
          >{{ subtitle }}</span
        >
      </component>
      <OnHighlightText
        v-if="description"
        as="p"
        :text="description"
        class="m-0 mt-14px text-14px leading-[1.65] text-ink-secondary"
        :class="{ 'on-hero-description-compact': compact }"
      />
      <div class="mt-20px flex flex-wrap gap-10px">
        <slot name="actions">
          <OnButton variant="primary" shape="round" :icon="actionIcon" @click="emit('action')">
            {{ actionLabel ?? messages.hero.action }}
          </OnButton>
          <OnButton v-if="detailHref" variant="secondary" shape="round" :href="detailHref" :link-as="linkAs">
            {{ detailLabel ?? messages.hero.viewDetails }}
            <OnIcon name="arrow-up-right" :size="15" />
          </OnButton>
        </slot>
      </div>
    </div>
  </section>
</template>

<style>
/* The stage center sits near the card's bottom-right corner: on a 712×276 card it is at 470,70. */
.on-hero-stage {
  right: -278px;
  bottom: -314px;
}

.on-hero-glow {
  background: var(--on-effect-hero-glow);
  animation: on-hero-breathe 8s ease-in-out infinite;
}

.on-hero-rings {
  stroke: var(--on-effect-ring-stroke);
  stroke-dasharray: var(--on-effect-ring-dasharray);
}

.on-hero-float {
  filter: drop-shadow(var(--on-shadow-float-icon));
}

.on-hero-compact {
  container: on-feature-hero / inline-size;
  min-width: 0;
  min-height: 242px;
}

.on-hero-compact .on-hero-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 242px;
  overflow-wrap: anywhere;
}

.on-hero-description-compact {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.on-hero-compact .on-hero-stage {
  display: none;
  right: -326px;
  bottom: -358px;
}

/* Decoration only appears when it can sit beside the copy without reducing readability. */
@container on-feature-hero (min-width: 460px) {
  .on-hero-compact .on-hero-stage {
    display: block;
  }

  .on-hero-compact .on-hero-copy {
    padding-right: 152px;
  }
}

/* Wide web card (≥1024, 1192×360): scale stage around center by 1.3 to preserve desktop-like glow/icon proportions. */
@media (min-width: 1024px) {
  .on-hero-responsive .on-hero-stage {
    transform: scale(1.3);
  }
}

/* Slow breathing glow; base.css stops it with reduced motion. */
@keyframes on-hero-breathe {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.9;
  }
}
</style>
