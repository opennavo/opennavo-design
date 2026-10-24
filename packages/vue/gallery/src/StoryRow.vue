<script setup lang="ts">
import { t, localize } from './i18n';
// stacked puts the label above full-width content, for components that size themselves by the viewport.
defineProps<{ label: string; stacked?: boolean }>();
defineSlots<{ default?: () => unknown }>();
</script>

<template>
  <div
    class="grid items-center"
    :class="
      stacked ? 'grid-cols-1 gap-8px' : 'grid-cols-[140px_minmax(0,1fr)] gap-16px max-md:grid-cols-1 max-md:gap-8px'
    "
  >
    <span class="text-label text-ink-tertiary">{{ localize(label) }}</span>
    <div class="flex min-w-0 flex-wrap items-center gap-12px">
      <slot />
    </div>
  </div>
</template>
