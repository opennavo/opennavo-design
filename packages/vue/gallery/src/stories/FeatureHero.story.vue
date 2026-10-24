<script setup lang="ts">
import { t, localize } from '../i18n';
import { ref } from 'vue';
import { OnAppIcon, OnFeatureHero, OnIcon } from '../../../src';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';

const floats = [
  { name: 'Orbitfold', src: '/sample-orbit.svg' },
  { name: 'Prismark', src: '/sample-prism.svg' },
  { name: 'Tidelane', src: '/sample-wave.svg' }
];

const actions = ref(0);
</script>

<template>
  <StorySection
    :title="t('Feature hero')"
    components="OnFeatureHero"
    :description="
      t(
        'Glow and dashed rings with up to three floating items drawn through the #float slot. 712 wide matches a desktop content column; responsive web mode grows to 360 tall at 1024 and above; glowColor tints the glow.'
      )
    "
  >
    <StoryRow :label="t('Desktop (712)')">
      <div class="w-712px max-w-full">
        <OnFeatureHero
          :badge="t('Featured this week')"
          :title="t('Orbitfold 4')"
          :subtitle="t('Plans that keep up with you.')"
          :description="
            t('An endless canvas for projects, notes and timelines. **14,326 downloads in the last 30 days.**')
          "
          :floats="floats"
          detail-href="#FeatureHero"
          @action="actions++"
        >
          <template #badge-decoration><OnIcon name="sparkles" :size="13" /></template>
          <template #float="{ item, size, index }">
            <OnAppIcon :name="item.name" :src="item.src" :size="size" :priority="index === 0" />
          </template>
        </OnFeatureHero>
      </div>
    </StoryRow>
    <StoryRow :label="t('Accent glow')">
      <div class="w-712px max-w-full">
        <OnFeatureHero
          :badge="t('Editor’s pick')"
          :title="t('Tidelane')"
          :subtitle="t('Your folders, everywhere.')"
          :description="t('Peer-to-peer sync that **never stores your files on a server**.')"
          :floats="floats.slice(2)"
          glow-color="#1E9E72"
          detail-href="#FeatureHero"
        >
          <template #float="{ item, size }">
            <OnAppIcon :name="item.name" :src="item.src" :size="size" />
          </template>
        </OnFeatureHero>
      </div>
    </StoryRow>
    <StoryRow :label="t('Compact')">
      <div class="w-560px max-w-full">
        <OnFeatureHero
          compact
          :title="t('Prismark')"
          :subtitle="t('Color that composes itself.')"
          :description="t('Vector sketching with **live color harmonies** and a calm, focused canvas.')"
          :floats="floats"
          :heading-level="3"
        >
          <template #float="{ item, size }">
            <OnAppIcon :name="item.name" :src="item.src" :size="size" />
          </template>
        </OnFeatureHero>
      </div>
    </StoryRow>
    <StoryRow :label="t('Web (responsive)')">
      <div class="w-full">
        <OnFeatureHero
          responsive
          :badge="t('Featured this week')"
          :title="t('Orbitfold 4')"
          :subtitle="t('Plans that keep up with you.')"
          :description="
            t('An endless canvas for projects, notes and timelines. **14,326 downloads in the last 30 days.**')
          "
          :floats="floats"
          detail-href="#FeatureHero"
        >
          <template #float="{ item, size, index }">
            <OnAppIcon :name="item.name" :src="item.src" :size="size" :priority="index === 0" />
          </template>
        </OnFeatureHero>
      </div>
    </StoryRow>
    <p class="m-0 text-caption text-ink-tertiary">{{ t('Primary action clicks:') }} {{ localize(actions) }}</p>
  </StorySection>
</template>
