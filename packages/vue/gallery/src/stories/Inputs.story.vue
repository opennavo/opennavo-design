<script setup lang="ts">
import { t, localize } from '../i18n';
import { computed, ref } from 'vue';
import { OnCheckbox, OnSearchField, OnSegmented, OnToggle } from '../../../src';
import type { OnSegmentedOption } from '../../../src';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';

type View = 'all' | 'app' | 'cli';
const view = ref<View>('app');
const options: OnSegmentedOption<View>[] = [
  { value: 'all', label: 'All', count: 218 },
  { value: 'app', label: 'App', count: 38 },
  { value: 'cli', label: 'Command line', count: 180 }
];

type Period = '30d' | '90d' | '365d';
const period = ref<Period>('30d');
const periods: OnSegmentedOption<Period>[] = [
  { value: '30d', label: '30 days', dots: ['chart-emphasis'] },
  { value: '90d', label: '90 days', dots: ['chart-series1', 'chart-series2'] },
  { value: '365d', label: '365 days', dots: ['chart-series1', 'chart-series2', 'chart-series3'] }
];

const autoUpdate = ref(true);
const background = ref(false);

const files = ref(['cache']);
const fileOptions = [
  { key: 'cache', label: 'Caches · 1.2 GB' },
  { key: 'logs', label: 'Logs · 84 MB' },
  { key: 'support', label: 'Support files · 312 MB' }
];
const allFiles = computed(() => files.value.length === fileOptions.length);

function toggleFile(key: string, value: boolean) {
  files.value = value ? [...files.value, key] : files.value.filter(item => item !== key);
}

function toggleAll(value: boolean) {
  files.value = value ? fileOptions.map(option => option.key) : [];
}

const empty = ref('');
const filled = ref('quill');
const submitted = ref('');
</script>

<template>
  <StorySection
    :title="t('Inputs')"
    components="OnSegmented · OnToggle · OnCheckbox · OnSearchField"
    :description="
      t(
        'Segmented controls are radio groups (arrow keys, Home, End). Switches sit right of their label. Enter submits a search field and Escape clears it.'
      )
    "
  >
    <StoryRow :label="t('Segmented md')">
      <OnSegmented v-model="view" :options="localize(options)" :aria-label="t('Type filter')" />
      <span class="text-caption text-ink-tertiary">{{ t('Current:') }} {{ localize(view) }}</span>
    </StoryRow>
    <StoryRow :label="t('Segmented sm')">
      <OnSegmented v-model="period" :options="localize(periods)" size="sm" :aria-label="t('Time range')" />
    </StoryRow>
    <StoryRow :label="t('Switch states')">
      <OnToggle :model-value="false" :aria-label="t('Off')" />
      <OnToggle :model-value="true" :aria-label="t('On')" />
      <OnToggle :model-value="false" disabled :aria-label="t('Disabled (off)')" />
      <OnToggle :model-value="true" disabled :aria-label="t('Disabled (on)')" />
    </StoryRow>
    <StoryRow :label="t('Settings rows')">
      <div
        class="flex w-420px max-w-full flex-col divide-y divide-line-subtle rounded-big border border-solid border-line-subtle bg-surface-card"
      >
        <div class="flex items-center justify-between gap-16px px-16px py-12px">
          <span id="toggle-auto" class="text-body text-ink-primary">{{ t('Update apps automatically') }}</span>
          <OnToggle v-model="autoUpdate" aria-labelledby="toggle-auto" />
        </div>
        <div class="flex items-center justify-between gap-16px px-16px py-12px">
          <span id="toggle-background" class="text-body text-ink-primary">{{ t('Check in the background') }}</span>
          <OnToggle v-model="background" aria-labelledby="toggle-background" />
        </div>
      </div>
    </StoryRow>
    <StoryRow :label="t('Checkboxes')">
      <div class="flex flex-col gap-10px">
        <OnCheckbox
          :model-value="allFiles"
          :indeterminate="files.length > 0 && files.length < fileOptions.length"
          @update:model-value="toggleAll"
        >
          <span class="text-13px font-500 text-ink-primary">{{ t('All support data') }}</span>
        </OnCheckbox>
        <div class="flex flex-col gap-8px pl-24px">
          <OnCheckbox
            v-for="option in fileOptions"
            :key="option.key"
            :model-value="files.includes(option.key)"
            @update:model-value="value => toggleFile(option.key, value)"
          >
            <span class="text-13px text-ink-secondary">{{ localize(option.label) }}</span>
          </OnCheckbox>
          <OnCheckbox :model-value="true" locked :title="t('Always removed with the app')">
            <span class="text-13px text-ink-secondary">{{ t('Application · 652 MB') }}</span>
          </OnCheckbox>
          <OnCheckbox :model-value="false" disabled :title="t('Not available on this device')">
            <span class="text-13px text-ink-secondary">{{ t('Shared containers') }}</span>
          </OnCheckbox>
        </div>
      </div>
    </StoryRow>
    <StoryRow :label="t('Search, empty')">
      <div class="w-340px max-w-full">
        <OnSearchField
          v-model="empty"
          :placeholder="t('Search 16,413 apps and tools')"
          shortcut="⌘K"
          @submit="submitted = $event"
        />
      </div>
    </StoryRow>
    <StoryRow :label="t('Search, filled')">
      <div class="w-340px max-w-full">
        <OnSearchField v-model="filled" :placeholder="t('Search')" shortcut="⌘K" @submit="submitted = $event" />
      </div>
      <span class="text-caption text-ink-tertiary"
        >{{ t('Last submission:') }} {{ localize(submitted || 'none') }}</span
      >
    </StoryRow>
    <StoryRow :label="t('Search, disabled')">
      <div class="w-220px">
        <OnSearchField model-value="" :placeholder="t('Filter the library')" disabled />
      </div>
    </StoryRow>
  </StorySection>
</template>
