<script setup lang="ts">
import StorySection from '../StorySection.vue';

// Foundations: the same swatches rendered twice through data-theme subtrees, so both themes sit side by side.
// Class names are written out in full so UnoCSS can extract them.
const themes = ['dark', 'light'] as const;
const surfaces = [
  'page',
  'base',
  'sidebar',
  'rail',
  'card',
  'card-alt',
  'raised',
  'chip',
  'control',
  'inset',
  'popover'
];
const texts = [
  ['primary', 'text-ink-primary'],
  ['secondary', 'text-ink-secondary'],
  ['tertiary', 'text-ink-tertiary'],
  ['disabled', 'text-ink-disabled'],
  ['accent', 'text-ink-accent']
] as const;
const badges = [
  ['success', 'bg-status-success-subtle text-status-success border-status-success-border'],
  ['warning', 'bg-status-warning-subtle text-status-warning border-status-warning-border'],
  ['danger', 'bg-status-danger-subtle text-status-danger border-status-danger-border'],
  ['info', 'bg-status-info-subtle text-status-info border-status-info-border'],
  ['accent', 'bg-accent-coral-subtle text-ink-accent border-transparent'],
  ['salmon', 'bg-accent-salmon-subtle text-brand-salmon border-transparent']
] as const;
const swatches = ['brand-coral', 'brand-salmon', 'brand-violet', 'chart-series1', 'chart-series2', 'chart-series3'];
const buttons = [
  ['Primary', 'bg-button-primary-bg text-button-primary-text hover:bg-button-primary-hover'],
  ['Secondary', 'bg-button-secondary-bg text-button-secondary-text hover:bg-button-secondary-hover'],
  ['Accent', 'bg-button-accent-bg text-button-accent-text hover:bg-button-accent-hover']
] as const;
const type = [
  'text-display',
  'text-title1',
  'text-title2',
  'text-headline',
  'text-body',
  'text-body-sm',
  'text-caption',
  'text-label',
  'text-mono'
];
</script>

<template>
  <StorySection
    title="Foundations"
    components="@opennavo/design-tokens"
    description="Surfaces, text, status, brand and chart colors, buttons and the type scale, drawn in both themes side by side through data-theme subtrees, whatever the page theme is."
  >
    <div class="grid gap-16px lg:grid-cols-2">
      <section
        v-for="theme in themes"
        :key="theme"
        :data-theme="theme"
        class="flex min-w-0 flex-col gap-18px rounded-huge border border-solid border-line-default bg-surface-base p-20px"
      >
        <header class="flex items-center justify-between">
          <h3 class="m-0 text-headline">{{ theme === 'dark' ? 'Dark' : 'Light' }}</h3>
          <code class="text-caption text-ink-tertiary">data-theme="{{ theme }}"</code>
        </header>

        <div>
          <div class="mb-8px text-label text-ink-tertiary">Surfaces</div>
          <div class="grid grid-cols-4 gap-8px">
            <div v-for="name in surfaces" :key="name" class="flex min-w-0 flex-col gap-4px">
              <span
                class="h-40px rounded-default border border-solid border-line-subtle"
                :style="{ background: `var(--on-surface-${name})` }"
              ></span>
              <span class="truncate text-11px text-ink-tertiary">{{ name }}</span>
            </div>
          </div>
        </div>

        <div class="rounded-big border border-solid border-line-subtle bg-surface-card p-14px">
          <div class="mb-8px text-label text-ink-tertiary">Text on card</div>
          <p v-for="[name, cls] in texts" :key="name" class="m-0 text-body-sm" :class="cls">
            text.{{ name }} — The quick brown fox · 敏捷的狐狸
          </p>
        </div>

        <div class="flex flex-wrap gap-8px">
          <span
            v-for="[name, cls] in badges"
            :key="name"
            class="inline-flex h-24px items-center rounded-small border border-solid px-8px text-12px font-500"
            :class="cls"
            >{{ name }}</span
          >
        </div>

        <div class="flex flex-wrap items-center gap-8px">
          <span
            v-for="name in swatches"
            :key="name"
            class="h-28px w-28px rounded-full"
            :style="{ background: `var(--on-${name})` }"
            :title="name"
          ></span>
        </div>

        <div class="flex flex-wrap gap-10px">
          <button
            v-for="[label, cls] in buttons"
            :key="label"
            type="button"
            class="h-34px rounded-default border-none px-16px font-sans text-13px font-600 transition-colors duration-fast ease-standard focus-visible:shadow-focus-ring"
            :class="cls"
          >
            {{ label }}
          </button>
        </div>

        <div class="flex flex-col gap-6px border-t border-t-solid border-line-subtle pt-14px">
          <div class="mb-2px text-label text-ink-tertiary">Type</div>
          <span v-for="cls in type" :key="cls" class="truncate" :class="cls">{{ cls }}</span>
        </div>
      </section>
    </div>
  </StorySection>
</template>
