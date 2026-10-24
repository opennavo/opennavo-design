<script setup lang="ts">
import { ref } from 'vue';
import { OnTabs } from '../../../src';
import type { OnTabItem } from '../../../src';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';

type Tab = 'overview' | 'releases' | 'deps' | 'details';
const tab = ref<Tab>('releases');
const items: OnTabItem<Tab>[] = [
  { value: 'overview', label: 'Overview' },
  { value: 'releases', label: 'Release history', count: 42 },
  { value: 'deps', label: 'Dependencies', disabled: true },
  { value: 'details', label: 'Details' }
];
const linkItems = items.map(item => ({ ...item, href: `#tabs-${item.value}` }));
</script>

<template>
  <StorySection
    title="Tabs"
    components="OnTabs"
    description="Same-page tabs are a tablist with arrow-key selection; tabs with an href are link navigation with aria-current."
  >
    <StoryRow label="tablist">
      <div class="w-560px max-w-full"><OnTabs v-model="tab" :items="items" aria-label="Detail tabs" /></div>
    </StoryRow>
    <StoryRow label="Link mode">
      <div class="w-560px max-w-full">
        <OnTabs model-value="overview" :items="linkItems" aria-label="Detail pages" />
      </div>
    </StoryRow>
  </StorySection>
</template>
