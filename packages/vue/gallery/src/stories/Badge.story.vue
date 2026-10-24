<script setup lang="ts">
import { t, localize } from '../i18n';
import { OnBadge, OnIcon } from '../../../src';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';
</script>

<template>
  <StorySection
    :title="t('Badges')"
    components="OnBadge"
    :description="t('Count badges cap at 99+; text badges take an optional decoration after the text through a slot.')"
  >
    <StoryRow :label="t('Count badges')">
      <OnBadge :count="6" :label="t('6 updates available')" />
      <OnBadge :count="42" />
      <OnBadge :count="128" />
    </StoryRow>
    <StoryRow :label="t('Text badges')">
      <OnBadge>
        {{ t('Featured this week') }} <template #decoration><OnIcon name="sparkles" :size="13" /></template>
      </OnBadge>
      <OnBadge>{{ t('New version') }}</OnBadge>
    </StoryRow>
  </StorySection>
</template>
