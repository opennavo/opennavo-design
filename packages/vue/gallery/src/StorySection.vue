<script setup lang="ts">
defineProps<{ title: string; components: string; description?: string }>();
defineSlots<{ default?: () => unknown }>();
</script>

<template>
  <section
    class="flex min-w-0 flex-col gap-16px rounded-big border border-solid border-line-subtle bg-surface-base p-24px max-md:p-16px"
  >
    <header class="flex flex-wrap items-baseline justify-between gap-x-12px gap-y-4px">
      <h2 class="m-0 text-title2 text-ink-primary">{{ title }}</h2>
      <span class="font-mono text-caption text-ink-tertiary">{{ components }}</span>
    </header>
    <p v-if="description" class="m-0 max-w-760px text-body-sm text-ink-secondary">{{ description }}</p>
    <slot />
  </section>
</template>
