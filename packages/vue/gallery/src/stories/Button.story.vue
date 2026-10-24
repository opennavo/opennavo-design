<script setup lang="ts">
import { OnButton } from '../../../src';
import type { OnButtonSize, OnButtonVariant } from '../../../src';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';

const variants: OnButtonVariant[] = ['primary', 'secondary', 'accent', 'ghost', 'danger'];
const sizes: OnButtonSize[] = ['xs', 'sm', 'md', 'lg'];
const labels: Record<OnButtonVariant, string> = {
  primary: 'Update all (6)',
  secondary: 'View details',
  accent: 'Start sync',
  ghost: 'Check for updates',
  danger: 'Delete'
};
</script>

<template>
  <StorySection
    title="Buttons"
    components="OnButton"
    description="Five variants in four sizes, with pill, icon, icon-only, loading and disabled states. Links render as anchors or through linkAs."
  >
    <StoryRow v-for="variant in variants" :key="variant" :label="variant">
      <OnButton :variant="variant">{{ labels[variant] }}</OnButton>
      <OnButton :variant="variant" icon="download">{{ labels[variant] }}</OnButton>
      <OnButton :variant="variant" shape="round">{{ labels[variant] }}</OnButton>
      <OnButton :variant="variant" icon="copy" icon-only aria-label="Copy" />
      <OnButton :variant="variant" loading>{{ labels[variant] }}</OnButton>
      <OnButton :variant="variant" disabled>{{ labels[variant] }}</OnButton>
    </StoryRow>
    <StoryRow label="Sizes xs–lg">
      <OnButton v-for="size in sizes" :key="size" variant="primary" :size="size" icon="download">
        Get {{ size }}
      </OnButton>
    </StoryRow>
    <StoryRow label="Links and full width">
      <OnButton href="#Button" shape="round" icon="arrow-up-right">View details</OnButton>
      <div class="w-240px"><OnButton variant="secondary" block>Add all to library</OnButton></div>
    </StoryRow>
  </StorySection>
</template>
