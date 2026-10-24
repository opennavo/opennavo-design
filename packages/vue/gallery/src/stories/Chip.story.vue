<script setup lang="ts">
import { t, localize } from '../i18n';
import { OnChip } from '../../../src';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';
</script>

<template>
  <StorySection
    :title="t('Chips')"
    components="OnChip"
    :description="t('Short status and type labels. Always state the meaning in text; color only supports it.')"
  >
    <StoryRow :label="t('Type')">
      <OnChip>{{ t('App') }}</OnChip>
      <OnChip>{{ t('Command line') }}</OnChip>
      <OnChip icon="pin">{{ t('Pinned') }}</OnChip>
    </StoryRow>
    <StoryRow :label="t('State')">
      <OnChip tone="success" dot>{{ t('Installed 1.140.0') }}</OnChip>
      <OnChip tone="success" dot>{{ t('Latest') }}</OnChip>
      <OnChip tone="accent" dot>{{ t('Update available') }}</OnChip>
      <OnChip tone="coral" dot>{{ t('Updating 62%') }}</OnChip>
      <OnChip tone="info">{{ t('Updates itself') }}</OnChip>
      <OnChip tone="warning">{{ t('Needs administrator rights') }}</OnChip>
      <OnChip tone="danger">{{ t('Deprecated') }}</OnChip>
      <OnChip tone="danger" outline>{{ t('Disabled') }}</OnChip>
    </StoryRow>
    <StoryRow :label="t('Outline')">
      <OnChip tone="outline">{{ t('Machine translation') }}</OnChip>
      <OnChip tone="outline">{{ t('Patch') }}</OnChip>
    </StoryRow>
    <StoryRow :label="t('Medium size')">
      <OnChip size="md">{{ t('App') }}</OnChip>
      <OnChip size="md" tone="success" dot>{{ t('Installed') }}</OnChip>
      <OnChip size="md" tone="accent" dot>{{ t('Update available') }}</OnChip>
      <OnChip size="md" tone="info" icon="refresh-cw">{{ t('Updates itself') }}</OnChip>
    </StoryRow>
  </StorySection>
</template>
