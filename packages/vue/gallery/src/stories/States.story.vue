<script setup lang="ts">
import { OnButton, OnCard, OnEmpty, OnErrorState, OnOffline, OnSkeleton } from '../../../src';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';
</script>

<template>
  <StorySection
    title="Empty, error, offline and loading"
    components="OnEmpty · OnErrorState · OnOffline · OnSkeleton"
    description="The error and offline states default to the current language; while refetching, keep old content dimmed instead of flashing skeletons."
  >
    <div class="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-12px max-lg:grid-cols-1">
      <OnCard padding="none">
        <OnEmpty icon="search" title="No results for “quilwisp”" description="Check the spelling or try another word.">
          <template #actions><OnButton variant="secondary" size="sm">Clear search</OnButton></template>
        </OnEmpty>
      </OnCard>
      <OnCard padding="none"><OnErrorState request-id="req-01JTQ8" /></OnCard>
      <OnCard padding="none"><OnOffline /></OnCard>
    </div>
    <StoryRow label="Skeletons">
      <OnCard class="w-360px max-w-full">
        <div class="flex items-start gap-12px">
          <OnSkeleton width="44px" height="44px" radius="app-icon" />
          <div class="flex-1"><OnSkeleton :lines="2" height="12px" /></div>
        </div>
      </OnCard>
      <OnCard class="w-360px max-w-full"><OnSkeleton :lines="4" height="10px" radius="tiny" /></OnCard>
    </StoryRow>
  </StorySection>
</template>
