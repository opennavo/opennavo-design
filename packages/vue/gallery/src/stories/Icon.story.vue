<script setup lang="ts">
import { t, localize } from '../i18n';
import { BUNDLED_ICONS, OnIcon } from '../../../src';
import { GALLERY_ICONS } from '../settings';
import StorySection from '../StorySection.vue';

const groups = [
  { label: 'Bundled with the package', names: BUNDLED_ICONS },
  { label: 'Registered by this gallery (registerIcons)', names: GALLERY_ICONS }
];
</script>

<template>
  <StorySection
    :title="t('Icons')"
    components="OnIcon"
    :description="
      t(
        'The components\' own Lucide icons ship as inline SVG; apps register more with registerIcons. Stroke width is 2 below 16 px and 1.6 otherwise.'
      )
    "
  >
    <div v-for="group in groups" :key="group.label" class="flex flex-col gap-8px">
      <span class="text-label text-ink-tertiary">{{ localize(group.label) }}</span>
      <div class="grid grid-cols-[repeat(auto-fill,minmax(112px,1fr))] gap-8px">
        <div
          v-for="name in group.names"
          :key="name"
          class="flex flex-col items-center gap-6px rounded-default bg-surface-card px-6px py-10px text-ink-secondary"
        >
          <OnIcon :name="name" :size="18" />
          <span class="max-w-full truncate text-11px text-ink-tertiary">{{ localize(name) }}</span>
        </div>
      </div>
    </div>
  </StorySection>
</template>
