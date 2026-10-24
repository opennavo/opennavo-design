<script setup lang="ts">
import { ref } from 'vue';
import { OnBreadcrumb, OnButton, OnNavItem, OnPageHeader, OnPagination, OnSectionHeader } from '../../../src';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';

const page = ref(5);
const linkedPage = ref(48);
</script>

<template>
  <StorySection
    title="Navigation and headers"
    components="OnBreadcrumb · OnPagination · OnNavItem · OnPageHeader · OnSectionHeader"
  >
    <StoryRow label="Breadcrumbs">
      <OnBreadcrumb
        :items="[
          { label: 'Discover', href: '#Navigation' },
          { label: 'Productivity', href: '#Navigation' },
          { label: 'Orbitfold' }
        ]"
      />
    </StoryRow>
    <StoryRow label="Pagination">
      <OnPagination v-model:page="page" :page-count="20" />
    </StoryRow>
    <StoryRow label="First and last pages">
      <OnPagination :page="1" :page-count="20" />
      <OnPagination :page="3" :page-count="4" />
    </StoryRow>
    <StoryRow label="Link pagination with jumps">
      <OnPagination
        :page="linkedPage"
        :page-count="211"
        :href-for="target => `#page-${target}`"
        @update:page="linkedPage = $event"
      />
    </StoryRow>
    <StoryRow label="Nav items">
      <div class="flex w-224px flex-col gap-2px rounded-big bg-surface-sidebar p-8px">
        <span class="px-8px pb-6px pt-2px text-label text-ink-tertiary">Browse</span>
        <OnNavItem icon="compass" active href="#Navigation">Discover</OnNavItem>
        <OnNavItem icon="layout-grid" href="#Navigation">Categories</OnNavItem>
        <span class="px-8px pb-6px pt-10px text-label text-ink-tertiary">Library</span>
        <OnNavItem icon="library" :count="218" href="#Navigation">All items</OnNavItem>
        <OnNavItem icon="download" :badge="6" badge-label="6 updates available" href="#Navigation">Updates</OnNavItem>
        <OnNavItem icon="cloud" meta="34 GB" href="#Navigation">Storage</OnNavItem>
        <OnNavItem icon="bell" dot badge-label="New activity" href="#Navigation">Activity</OnNavItem>
      </div>
    </StoryRow>
    <StoryRow label="Page header">
      <div class="w-full">
        <OnPageHeader title="Library" subtitle="218 items on this device">
          <template #actions>
            <OnButton variant="secondary" icon="refresh-cw">Check for updates</OnButton>
            <OnButton variant="primary">Update all (6)</OnButton>
          </template>
        </OnPageHeader>
      </div>
    </StoryRow>
    <StoryRow label="Section header">
      <div class="w-full">
        <OnSectionHeader
          title="Popular"
          hint="Downloads in the last 30 days"
          more-label="View all"
          more-href="#Navigation"
        />
      </div>
    </StoryRow>
  </StorySection>
</template>
