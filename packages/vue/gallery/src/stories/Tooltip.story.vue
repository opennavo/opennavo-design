<script setup lang="ts">
import { t, localize } from '../i18n';
import { OnButton, OnTooltip } from '../../../src';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';
</script>

<template>
  <StorySection
    :title="t('Tooltips')"
    components="OnTooltip"
    :description="
      t(
        'Appears after 400 ms of hover and on keyboard focus; Escape closes it. It flips to the other side when there is no room.'
      )
    "
  >
    <StoryRow :label="t('Four directions')">
      <OnTooltip :content="t('Copy link')" placement="top">
        <OnButton icon="copy" icon-only :aria-label="t('Copy')" />
      </OnTooltip>
      <OnTooltip :content="t('Show in folder')" placement="bottom">
        <OnButton icon="folder" icon-only :aria-label="t('Folder')" />
      </OnTooltip>
      <OnTooltip :content="t('More actions')" placement="left">
        <OnButton icon="ellipsis" icon-only :aria-label="t('More')" />
      </OnTooltip>
      <OnTooltip :content="t('Check for updates (⌘R)')" placement="right">
        <OnButton icon="refresh-cw" icon-only :aria-label="t('Check for updates')" />
      </OnTooltip>
    </StoryRow>
    <StoryRow :label="t('Static appearance')">
      <span
        class="inline-flex w-max rounded-small border border-solid border-line-default bg-surface-control px-9px py-6px text-11.5px leading-16px text-ink-primary shadow-popover"
      >
        {{ t('orbitfold export --format pdf') }}
      </span>
    </StoryRow>
  </StorySection>
</template>
