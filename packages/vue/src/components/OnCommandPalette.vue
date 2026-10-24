<script setup lang="ts">
import { computed, nextTick, ref, useId, watch } from 'vue';
import OnChip from './OnChip.vue';
import type { OnChipTone } from './OnChip.vue';
import OnDialogShell from './OnDialogShell.vue';
import OnIcon from './OnIcon.vue';
import { useUiMessages } from '../composables/locale';

export interface OnCommandItem {
  key: string;
  label: string;
  /** Description after the label, e.g. App · Version 4.2. */
  description?: string;
  /** Leading 18 px icon name for actions and navigation. */
  icon?: string;
  /** Leading 26 px image URL, e.g. an app icon or avatar; shown instead of the icon, which stays as its fallback. */
  image?: string | null;
  /** accent uses salmon, e.g. for update actions. */
  iconTone?: 'default' | 'accent';
  /** Right badge, e.g. Update available. */
  badge?: string;
  badgeTone?: OnChipTone;
  /** Right shortcut hint, e.g. ↵ Open or ⌘↵ Install. */
  hint?: string;
}

export interface OnCommandGroup {
  key: string;
  label: string;
  items: readonly OnCommandItem[];
}

export interface OnCommandPaletteProps {
  open: boolean;
  query: string;
  /** The host searches and groups results by query, e.g. into apps, actions and navigation. */
  groups: readonly OnCommandGroup[];
  placeholder?: string;
  loading?: boolean;
  emptyText?: string;
  /** Footer hints; defaults to select and open. Add hints for the meta and copy shortcuts when the host handles them. */
  hints?: readonly string[];
}

const props = defineProps<OnCommandPaletteProps>();

const emit = defineEmits<{
  'update:open': [open: boolean];
  'update:query': [query: string];
  /** Enter or click; meta is true for Command/Ctrl-Enter or Command/Ctrl-click, e.g. for a secondary action. */
  select: [item: OnCommandItem, options: { meta: boolean }];
  /** Command/Ctrl-C on the active item while no input text is selected; the host decides what to copy. */
  copy: [item: OnCommandItem];
}>();

const messages = useUiMessages();
const listId = useId();

const flat = computed(() => props.groups.flatMap(group => group.items));
const activeIndex = ref(0);
const active = computed(() => flat.value[activeIndex.value]);

const optionId = (index: number) => `${listId}-option-${index}`;
// Each group's first flat-list index for numbering options.
const offsets = computed(() => {
  let total = 0;
  return props.groups.map(group => {
    const start = total;
    total += group.items.length;
    return start;
  });
});

const footer = computed(() => props.hints ?? [messages.value.palette.hintSelect, messages.value.palette.hintOpen]);

// Images that failed to load fall back to the item icon (or an empty slot of the same width).
const brokenImages = ref(new Set<string>());
const showImage = (item: OnCommandItem) => Boolean(item.image) && !brokenImages.value.has(item.image as string);

function onImageError(url: string) {
  brokenImages.value = new Set([...brokenImages.value, url]);
}

// Reset to first item when results change.
watch(
  () => flat.value.map(item => item.key).join('\n'),
  () => {
    activeIndex.value = 0;
  }
);

watch(
  () => props.open,
  open => {
    if (open) activeIndex.value = 0;
  }
);

async function move(delta: number) {
  const total = flat.value.length;
  if (!total) return;
  activeIndex.value = (activeIndex.value + delta + total) % total;
  await nextTick();
  document.getElementById(optionId(activeIndex.value))?.scrollIntoView?.({ block: 'nearest' });
}

function close() {
  emit('update:open', false);
}

function onInput(event: Event) {
  emit('update:query', (event.target as HTMLInputElement).value);
}

function choose(item: OnCommandItem | undefined, meta: boolean) {
  if (item) emit('select', item, { meta });
}

function onKeydown(event: KeyboardEvent) {
  if (event.isComposing) return;
  const meta = event.metaKey || event.ctrlKey;
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    void move(event.key === 'ArrowDown' ? 1 : -1);
  } else if (event.key === 'Enter') {
    event.preventDefault();
    choose(active.value, meta);
  } else if (meta && event.key.toLowerCase() === 'c') {
    // Preserve system copy when input text is selected.
    const input = event.target as HTMLInputElement;
    if (input.selectionStart !== input.selectionEnd || !active.value) return;
    event.preventDefault();
    emit('copy', active.value);
  }
}
</script>

<template>
  <OnDialogShell
    :open="open"
    placement="top"
    backdrop="clear"
    :aria-label="messages.palette.label"
    initial-focus="input"
    panel-class="on-palette box-border flex max-h-[70vh] w-560px max-w-full flex-col overflow-hidden rounded-big border border-solid border-line-default shadow-modal"
    @close="close"
  >
    <div class="flex h-52px shrink-0 items-center gap-10px border-b border-b-solid border-line-subtle px-16px">
      <OnIcon name="search" :size="18" class="shrink-0 text-ink-tertiary" />
      <input
        :value="query"
        type="text"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded="true"
        :aria-controls="listId"
        :aria-activedescendant="active ? optionId(activeIndex) : undefined"
        :aria-label="placeholder ?? messages.palette.placeholder"
        :placeholder="placeholder ?? messages.palette.placeholder"
        class="m-0 box-border h-full min-w-0 flex-1 border-none bg-transparent p-0 font-sans text-16px text-ink-primary caret-brand-coral outline-none placeholder:text-ink-tertiary"
        autocomplete="off"
        spellcheck="false"
        @input="onInput"
        @keydown="onKeydown"
      />
    </div>

    <div
      :id="listId"
      role="listbox"
      :aria-label="messages.palette.results"
      class="min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-contain"
    >
      <template v-if="flat.length">
        <div
          v-for="(group, groupIndex) in groups"
          v-show="group.items.length"
          :key="group.key"
          role="group"
          :aria-labelledby="`${listId}-group-${groupIndex}`"
          class="p-8px"
          :class="groupIndex > 0 ? 'pt-0' : ''"
        >
          <div
            :id="`${listId}-group-${groupIndex}`"
            class="px-10px pb-4px pt-6px text-11px font-600 uppercase tracking-[0.06em] text-ink-tertiary"
          >
            {{ group.label }}
          </div>
          <div
            v-for="(item, itemIndex) in group.items"
            :id="optionId((offsets[groupIndex] ?? 0) + itemIndex)"
            :key="item.key"
            role="option"
            :aria-selected="(offsets[groupIndex] ?? 0) + itemIndex === activeIndex ? 'true' : 'false'"
            class="flex h-42px cursor-pointer items-center gap-10px rounded-default px-10px text-13px"
            :class="(offsets[groupIndex] ?? 0) + itemIndex === activeIndex ? 'bg-component-item-active' : ''"
            @mousemove="activeIndex = (offsets[groupIndex] ?? 0) + itemIndex"
            @click="choose(item, $event.metaKey || $event.ctrlKey)"
          >
            <img
              v-if="showImage(item)"
              :src="item.image ?? undefined"
              alt=""
              loading="lazy"
              decoding="async"
              class="h-26px w-26px shrink-0 object-contain"
              @error="onImageError(item.image as string)"
            />
            <span v-else-if="item.icon || item.image" class="inline-flex w-26px shrink-0 justify-center">
              <OnIcon
                v-if="item.icon"
                :name="item.icon"
                :size="18"
                :class="item.iconTone === 'accent' ? 'text-brand-salmon' : 'text-ink-secondary'"
              />
            </span>
            <span class="min-w-0 truncate font-600 text-ink-primary" :title="item.label">{{ item.label }}</span>
            <span v-if="item.description" class="min-w-0 truncate text-12px text-ink-tertiary">{{
              item.description
            }}</span>
            <span class="flex-1"></span>
            <OnChip v-if="item.badge" class="shrink-0" :tone="item.badgeTone ?? 'accent'">{{ item.badge }}</OnChip>
            <kbd
              v-if="item.hint"
              class="shrink-0 rounded-tiny bg-surface-chip px-6px py-2px font-sans text-11px text-ink-tertiary"
            >
              {{ item.hint }}
            </kbd>
          </div>
        </div>
      </template>
      <p v-else class="m-0 px-16px py-28px text-center text-13px text-ink-tertiary" role="status">
        {{ loading ? messages.palette.loading : (emptyText ?? messages.palette.empty) }}
      </p>
    </div>

    <div
      class="flex shrink-0 flex-wrap gap-x-16px gap-y-4px border-t border-t-solid border-line-subtle px-16px py-10px text-11px text-ink-tertiary"
      aria-hidden="true"
    >
      <span v-for="hint in footer" :key="hint">{{ hint }}</span>
    </div>
  </OnDialogShell>
</template>

<style>
.on-palette {
  background: var(--on-surface-overlay);
  backdrop-filter: blur(var(--on-effect-backdrop-blur));
  -webkit-backdrop-filter: blur(var(--on-effect-backdrop-blur));
}
</style>
