<script setup lang="ts">
import { t, localize } from '../i18n';
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
    :title="t('Buttons')"
    components="OnButton"
    :description="
      t(
        'Five variants in four sizes, with pill, icon, icon-only, loading and disabled states. Links render as anchors or through linkAs.'
      )
    "
  >
    <StoryRow v-for="variant in variants" :key="variant" :label="localize(variant)">
      <OnButton :variant="variant">{{ localize(labels[variant]) }}</OnButton>
      <OnButton :variant="variant" icon="download">{{ localize(labels[variant]) }}</OnButton>
      <OnButton :variant="variant" shape="round">{{ localize(labels[variant]) }}</OnButton>
      <OnButton :variant="variant" icon="copy" icon-only :aria-label="t('Copy')" />
      <OnButton :variant="variant" loading>{{ localize(labels[variant]) }}</OnButton>
      <OnButton :variant="variant" disabled>{{ localize(labels[variant]) }}</OnButton>
    </StoryRow>
    <StoryRow :label="t('Sizes xs–lg')">
      <OnButton v-for="size in sizes" :key="size" variant="primary" :size="size" icon="download">
        {{ t('Get') }} {{ size }}
      </OnButton>
    </StoryRow>
    <StoryRow :label="t('Links and full width')">
      <OnButton href="#Button" shape="round" icon="arrow-up-right">{{ t('View details') }}</OnButton>
      <div class="w-240px">
        <OnButton variant="secondary" block>{{ t('Add all to library') }}</OnButton>
      </div>
    </StoryRow>
  </StorySection>
</template>
