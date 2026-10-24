<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { classifyLogLine } from '../utils/log';
import type { LogLineKind } from '../utils/log';
import { useUiMessages } from '../composables/locale';

export interface OnLogViewerProps {
  lines: readonly string[];
  /** Show only the last lines, e.g. five in a compact task card; default and maximum 2,000; zero shows no lines. */
  tail?: number;
  /** Scroll within this height; virtualize above 200 lines. */
  height?: number;
  label?: string;
}

const props = withDefaults(defineProps<OnLogViewerProps>(), { tail: 2000 });

const messages = useUiMessages();

// 11 px × 1.7
const LINE_HEIGHT = 18.7;
const OVERSCAN = 20;
const VIRTUAL_FROM = 200;

const visibleLines = computed(() => {
  const count = Math.max(0, Math.min(Math.floor(props.tail), 2000));
  return count > 0 ? props.lines.slice(-count) : [];
});
const scroller = ref<HTMLElement>();
const scrollTop = ref(0);
// Include the viewport's vertical padding and borders in its content height.
const maxScrollTop = computed(() =>
  props.height === undefined ? 0 : Math.max(0, visibleLines.value.length * LINE_HEIGHT + 22 - props.height)
);
const boundedScrollTop = computed(() => Math.max(0, Math.min(scrollTop.value, maxScrollTop.value)));

watch([() => visibleLines.value.length, () => props.height], () => {
  scrollTop.value = boundedScrollTop.value;
  if (scroller.value) scroller.value.scrollTop = scrollTop.value;
});

const virtual = computed(() => props.height !== undefined && visibleLines.value.length > VIRTUAL_FROM);
const range = computed(() => {
  if (!virtual.value || props.height === undefined) return { start: 0, end: visibleLines.value.length };
  const start = Math.max(0, Math.floor(boundedScrollTop.value / LINE_HEIGHT) - OVERSCAN);
  const end = Math.min(
    visibleLines.value.length,
    Math.ceil((boundedScrollTop.value + props.height) / LINE_HEIGHT) + OVERSCAN
  );
  return { start, end };
});

const rendered = computed(() =>
  visibleLines.value.slice(range.value.start, range.value.end).map((text, index) => ({
    index: range.value.start + index,
    // Preserve empty-line height.
    text: text || '​',
    kind: classifyLogLine(text)
  }))
);

const KIND: Record<LogLineKind, string> = {
  heading: 'text-component-log-heading',
  success: 'text-component-log-success',
  progress: 'text-brand-salmon',
  error: 'text-status-danger',
  plain: ''
};

function onScroll(event: Event) {
  scrollTop.value = (event.target as HTMLElement).scrollTop;
}
</script>

<template>
  <pre
    ref="scroller"
    class="m-0 box-border overflow-auto whitespace-pre rounded-default border border-solid border-line-subtle bg-surface-inset px-12px py-10px font-mono text-11px leading-[1.7] text-ink-secondary"
    :style="height === undefined ? undefined : { maxHeight: `${height}px` }"
    role="log"
    :aria-label="label ?? messages.log.label"
    tabindex="0"
    @scroll="onScroll"
  ><span
      v-if="virtual"
      class="block"
      :style="{ height: `${range.start * LINE_HEIGHT}px` }"
      aria-hidden="true"
    ></span><span
      v-for="line in rendered"
      :key="line.index"
      class="block"
      :class="KIND[line.kind]"
    >{{ line.text }}</span><span
      v-if="virtual"
      class="block"
      :style="{ height: `${(visibleLines.length - range.end) * LINE_HEIGHT}px` }"
      aria-hidden="true"
    ></span></pre>
</template>
