<script setup lang="ts">
import { t, localize } from '../i18n';
import { ref } from 'vue';
import { OnBreadcrumb, OnButton, OnNavItem, OnPageHeader, OnPagination, OnSectionHeader } from '../../../src';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';

const page = ref(5);
const linkedPage = ref(48);
</script>

<template>
  <StorySection
    :title="t('Navigation and headers')"
    components="OnBreadcrumb · OnPagination · OnNavItem · OnPageHeader · OnSectionHeader"
  >
    <StoryRow :label="t('Breadcrumbs')">
      <OnBreadcrumb
        :items="
          localize([
            { label: 'Discover', href: '#Navigation' },
            { label: 'Productivity', href: '#Navigation' },
            { label: 'Orbitfold' }
          ])
        "
      />
    </StoryRow>
    <StoryRow :label="t('Pagination')">
      <OnPagination v-model:page="page" :page-count="20" />
    </StoryRow>
    <StoryRow :label="t('First and last pages')">
      <OnPagination :page="1" :page-count="20" />
      <OnPagination :page="3" :page-count="4" />
    </StoryRow>
    <StoryRow :label="t('Link pagination with jumps')">
      <OnPagination
        :page="linkedPage"
        :page-count="211"
        :href-for="target => `#page-${target}`"
        @update:page="linkedPage = $event"
      />
    </StoryRow>
    <StoryRow :label="t('Nav items')">
      <div class="flex w-224px flex-col gap-2px rounded-big bg-surface-sidebar p-8px">
        <span class="px-8px pb-6px pt-2px text-label text-ink-tertiary">{{ t('Browse') }}</span>
        <OnNavItem icon="compass" active href="#Navigation">{{ t('Discover') }}</OnNavItem>
        <OnNavItem icon="layout-grid" href="#Navigation">{{ t('Categories') }}</OnNavItem>
        <span class="px-8px pb-6px pt-10px text-label text-ink-tertiary">{{ t('Library') }}</span>
        <OnNavItem icon="library" :count="218" href="#Navigation">{{ t('All items') }}</OnNavItem>
        <OnNavItem icon="download" :badge="6" :badge-label="t('6 updates available')" href="#Navigation">{{
          t('Updates')
        }}</OnNavItem>
        <OnNavItem icon="cloud" :meta="t('34 GB')" href="#Navigation">{{ t('Storage') }}</OnNavItem>
        <OnNavItem icon="bell" dot :badge-label="t('New activity')" href="#Navigation">{{ t('Activity') }}</OnNavItem>
      </div>
    </StoryRow>
    <StoryRow :label="t('Page header')">
      <div class="w-full">
        <OnPageHeader :title="t('Library')" :subtitle="t('218 items on this device')">
          <template #actions>
            <OnButton variant="secondary" icon="refresh-cw">{{ t('Check for updates') }}</OnButton>
            <OnButton variant="primary">{{ t('Update all (6)') }}</OnButton>
          </template>
        </OnPageHeader>
      </div>
    </StoryRow>
    <StoryRow :label="t('Section header')">
      <div class="w-full">
        <OnSectionHeader
          :title="t('Popular')"
          :hint="t('Downloads in the last 30 days')"
          :more-label="t('View all')"
          more-href="#Navigation"
        />
      </div>
    </StoryRow>
  </StorySection>
</template>
