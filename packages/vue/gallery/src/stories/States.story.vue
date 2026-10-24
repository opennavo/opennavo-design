<script setup lang="ts">
import { t, localize } from '../i18n';
import { OnButton, OnCard, OnEmpty, OnErrorState, OnOffline, OnSkeleton } from '../../../src';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';
</script>

<template>
  <StorySection
    :title="t('Empty, error, offline and loading')"
    components="OnEmpty · OnErrorState · OnOffline · OnSkeleton"
    :description="
      t(
        'The error and offline states default to the current language; while refetching, keep old content dimmed instead of flashing skeletons.'
      )
    "
  >
    <div class="grid grid-cols-[repeat(3,minmax(0,1fr))] gap-12px max-lg:grid-cols-1">
      <OnCard padding="none">
        <OnEmpty
          icon="search"
          :title="t('No results for “quilwisp”')"
          :description="t('Check the spelling or try another word.')"
        >
          <template #actions
            ><OnButton variant="secondary" size="sm">{{ t('Clear search') }}</OnButton></template
          >
        </OnEmpty>
      </OnCard>
      <OnCard padding="none"><OnErrorState request-id="req-01JTQ8" /></OnCard>
      <OnCard padding="none"><OnOffline /></OnCard>
    </div>
    <StoryRow :label="t('Skeletons')">
      <OnCard class="w-360px max-w-full">
        <div class="flex items-start gap-12px">
          <OnSkeleton width="44px" height="44px" radius="app-icon" />
          <div class="flex-1"><OnSkeleton :lines="localize(2)" height="12px" /></div>
        </div>
      </OnCard>
      <OnCard class="w-360px max-w-full"><OnSkeleton :lines="localize(4)" height="10px" radius="tiny" /></OnCard>
    </StoryRow>
  </StorySection>
</template>
