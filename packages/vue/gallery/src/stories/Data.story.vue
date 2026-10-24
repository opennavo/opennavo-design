<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  OnAppIcon,
  OnCard,
  OnChip,
  OnHBarChart,
  OnKeyValueList,
  OnLogViewer,
  OnMenu,
  OnProgressMeter,
  OnStackBar,
  OnTable
} from '../../../src';
import type { OnChipTone, OnMenuItem, OnTableColumn, OnTableSort } from '../../../src';
import { longLog, sampleApps, sampleLog } from '../data';
import type { SampleApp } from '../data';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';

const columns: OnTableColumn[] = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'variant', label: 'Type', width: '120px' },
  { key: 'version', label: 'Version', mono: true },
  { key: 'size', label: 'Size', numeric: true, sortable: true },
  { key: 'addedAt', label: 'Added', sortable: true },
  { key: 'status', label: 'State' },
  { key: 'more', label: 'Actions', hideLabel: true, width: '44px' }
];

const sort = ref<OnTableSort>({ key: 'size', order: 'desc' });
const selectedKey = ref<string | null>('tidelane');
const selected = ref<string[]>(['prismark']);

const sorted = computed(() => {
  const { key, order } = sort.value;
  const direction = order === 'asc' ? 1 : -1;
  return [...sampleApps].sort((a, b) => {
    const left = a[key as keyof SampleApp] ?? '';
    const right = b[key as keyof SampleApp] ?? '';
    return (left > right ? 1 : left < right ? -1 : 0) * direction;
  });
});

function formatSize(megabytes: number) {
  return megabytes >= 1000 ? `${(megabytes / 1000).toFixed(1)} GB` : `${megabytes} MB`;
}

const STATUS: Record<SampleApp['status'], { label: string; tone: OnChipTone }> = {
  updating: { label: 'Updating 62%', tone: 'coral' },
  outdated: { label: 'Update available', tone: 'accent' },
  latest: { label: 'Latest', tone: 'success' },
  pinned: { label: 'Pinned', tone: 'neutral' }
};

const menu: OnMenuItem[] = [
  { key: 'reveal', label: 'Show in folder', icon: 'folder' },
  { key: 'delete', label: 'Delete', icon: 'trash-2', danger: true, separator: true }
];

const details = [
  { key: 'id', label: 'Identifier', value: 'org.example.orbitfold', mono: true },
  { key: 'homepage', label: 'Homepage', value: 'orbitfold.example', href: 'https://orbitfold.example/' },
  { key: 'command', label: 'Command', value: 'orbitfold', mono: true },
  { key: 'auto', label: 'Automatic updates', value: 'Updates itself' },
  { key: 'remove', label: 'On removal', value: 'Quits the app and removes its background helper' }
];
</script>

<template>
  <StorySection
    title="Data display"
    components="OnProgressMeter · OnLogViewer · OnHBarChart · OnStackBar · OnTable · OnKeyValueList"
    description="Charts carry a visually hidden table for screen readers; tables and logs virtualize above 200 rows when given a height."
  >
    <StoryRow label="Progress">
      <div class="flex w-320px max-w-full flex-col gap-12px">
        <OnProgressMeter :value="62" label="Download" />
        <OnProgressMeter label="Extract" />
        <OnProgressMeter :value="30" size="sm" label="Menu bar" />
      </div>
    </StoryRow>
    <StoryRow label="Log tail">
      <OnLogViewer class="w-640px max-w-full" :lines="sampleLog" :tail="5" />
    </StoryRow>
    <StoryRow label="Full log">
      <OnLogViewer class="w-640px max-w-full" :lines="longLog" :height="180" />
    </StoryRow>
    <StoryRow label="Charts">
      <OnCard class="w-316px max-w-full">
        <p class="m-0 text-headline text-ink-primary">Average monthly downloads</p>
        <p class="m-0 mt-2px text-12px text-ink-tertiary">Fewer new downloads; most people update in the app.</p>
        <OnHBarChart
          class="mt-12px"
          caption="Average monthly downloads"
          :items="[
            { key: '30d', label: 'Last 30 days', value: 17394, display: '17.4K', full: '17,394', emphasis: true },
            { key: '90d', label: '90-day average', value: 34210, display: '34.2K', full: '34,210' },
            { key: '365d', label: 'Yearly average', value: 40012, display: '40.0K', full: '40,012' }
          ]"
        />
      </OnCard>
      <OnCard class="w-316px max-w-full">
        <p class="m-0 text-stat text-ink-primary">18.6 <span class="text-13px text-ink-tertiary">GB</span></p>
        <OnStackBar
          class="mt-12px"
          caption="Storage"
          :items="[
            { key: 'app', label: 'Apps', value: 12.1, display: '12.1 GB' },
            { key: 'cli', label: 'Command line', value: 4.2, display: '4.2 GB' },
            { key: 'cache', label: 'Download cache', value: 2.3, display: '2.3 GB' }
          ]"
        />
      </OnCard>
    </StoryRow>
    <StoryRow label="Table">
      <OnTable
        v-model:sort="sort"
        v-model:selected="selected"
        class="w-full"
        caption="Library"
        :columns="columns"
        :rows="sorted"
        :row-key="row => row.id"
        :selected-key="selectedKey"
        :dimmed="row => Boolean(row.dependency)"
        selectable
        :can-select="row => !row.dependency"
        select-all-label="Select all"
        :select-row-label="row => `Select ${row.name}`"
        @row-click="selectedKey = $event"
      >
        <template #cell-name="{ row }">
          <span class="flex items-center gap-10px">
            <OnAppIcon :variant="row.variant" :name="row.name" :src="row.icon" :accent="row.accent" :size="28" />
            <span class="min-w-0">
              <span class="block font-600 text-ink-primary">{{ row.name }}</span>
              <span class="block text-11px text-ink-tertiary">{{ row.summary }}</span>
            </span>
          </span>
        </template>
        <template #cell-variant="{ row }">
          <OnChip size="md">{{ row.variant === 'app' ? 'App' : 'Command line' }}</OnChip>
        </template>
        <template #cell-size="{ row }">{{ formatSize(row.size) }}</template>
        <template #cell-status="{ row }">
          <OnChip :tone="STATUS[row.status].tone" dot size="md">{{ STATUS[row.status].label }}</OnChip>
        </template>
        <template #cell-more>
          <OnMenu :items="menu" variant="ghost" size="sm" />
        </template>
      </OnTable>
    </StoryRow>
    <StoryRow label="Key-value list">
      <OnCard class="w-380px max-w-full">
        <OnKeyValueList :items="details" />
      </OnCard>
    </StoryRow>
  </StorySection>
</template>
