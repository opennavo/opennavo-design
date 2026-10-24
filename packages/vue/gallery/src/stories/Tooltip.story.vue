<script setup lang="ts">
import { OnButton, OnTooltip } from '../../../src';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';
</script>

<template>
  <StorySection
    title="Tooltips"
    components="OnTooltip"
    description="Appears after 400 ms of hover and on keyboard focus; Escape closes it. It flips to the other side when there is no room."
  >
    <StoryRow label="Four directions">
      <OnTooltip content="Copy link" placement="top">
        <OnButton icon="copy" icon-only aria-label="Copy" />
      </OnTooltip>
      <OnTooltip content="Show in folder" placement="bottom">
        <OnButton icon="folder" icon-only aria-label="Folder" />
      </OnTooltip>
      <OnTooltip content="More actions" placement="left">
        <OnButton icon="ellipsis" icon-only aria-label="More" />
      </OnTooltip>
      <OnTooltip content="Check for updates (⌘R)" placement="right">
        <OnButton icon="refresh-cw" icon-only aria-label="Check for updates" />
      </OnTooltip>
    </StoryRow>
    <StoryRow label="Static appearance">
      <span
        class="inline-flex w-max rounded-small border border-solid border-line-default bg-surface-control px-9px py-6px text-11.5px leading-16px text-ink-primary shadow-popover"
      >
        orbitfold export --format pdf
      </span>
    </StoryRow>
  </StorySection>
</template>
