<script setup lang="ts">
import { computed } from 'vue';

export interface OnBadgeProps {
  /** Provided value makes a count badge, e.g. Updates 6; otherwise a text badge, e.g. Featured this week. */
  count?: number;
  /** Above the limit show 99+. */
  max?: number;
  /** Accessible count label, e.g. six available updates. */
  label?: string;
}

const props = withDefaults(defineProps<OnBadgeProps>(), { max: 99 });

defineSlots<{
  default?: () => unknown;
  /** Text badges: a small decorative mark after the text (about 13 px, currentColor), hidden from screen readers. */
  decoration?: () => unknown;
}>();

const countText = computed(() => {
  if (props.count === undefined) return '';
  return props.count > props.max ? `${props.max}+` : String(Math.max(0, props.count));
});
</script>

<template>
  <span
    v-if="count !== undefined"
    class="box-border inline-flex h-18px min-w-20px items-center justify-center rounded-full bg-brand-coral px-6px text-11px font-700 leading-none text-ink-on-accent tabular-nums"
    :aria-label="label"
  >
    {{ countText }}
  </span>
  <span
    v-else
    class="box-border inline-flex h-26px items-center gap-6px whitespace-nowrap rounded-small bg-accent-salmon-subtle px-10px text-12.5px font-500 text-brand-salmon"
  >
    <slot />
    <span v-if="$slots.decoration" class="inline-flex shrink-0 items-center" aria-hidden="true">
      <slot name="decoration" />
    </span>
  </span>
</template>
