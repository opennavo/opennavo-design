<script setup lang="ts">
import { OnBadge, OnIcon } from '../../../src';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';
</script>

<template>
  <StorySection
    title="Badges"
    components="OnBadge"
    description="Count badges cap at 99+; text badges take an optional decoration after the text through a slot."
  >
    <StoryRow label="Count badges">
      <OnBadge :count="6" label="6 updates available" />
      <OnBadge :count="42" />
      <OnBadge :count="128" />
    </StoryRow>
    <StoryRow label="Text badges">
      <OnBadge>
        Featured this week
        <template #decoration><OnIcon name="sparkles" :size="13" /></template>
      </OnBadge>
      <OnBadge>New version</OnBadge>
    </StoryRow>
  </StorySection>
</template>
