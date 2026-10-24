<script setup lang="ts">
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
    title="Feature hero"
    components="OnFeatureHero"
    description="Glow and dashed rings with up to three floating items drawn through the #float slot. 712 wide matches a desktop content column; responsive web mode grows to 360 tall at 1024 and above; glowColor tints the glow."
  >
    <StoryRow label="Desktop (712)">
      <div class="w-712px max-w-full">
        <OnFeatureHero
          badge="Featured this week"
          title="Orbitfold 4"
          subtitle="Plans that keep up with you."
          description="An endless canvas for projects, notes and timelines. **14,326 downloads in the last 30 days.**"
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
    <StoryRow label="Accent glow">
      <div class="w-712px max-w-full">
        <OnFeatureHero
          badge="Editor’s pick"
          title="Tidelane"
          subtitle="Your folders, everywhere."
          description="Peer-to-peer sync that **never stores your files on a server**."
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
    <StoryRow label="Compact">
      <div class="w-560px max-w-full">
        <OnFeatureHero
          compact
          title="Prismark"
          subtitle="Color that composes itself."
          description="Vector sketching with **live color harmonies** and a calm, focused canvas."
          :floats="floats"
          :heading-level="3"
        >
          <template #float="{ item, size }">
            <OnAppIcon :name="item.name" :src="item.src" :size="size" />
          </template>
        </OnFeatureHero>
      </div>
    </StoryRow>
    <StoryRow label="Web (responsive)">
      <div class="w-full">
        <OnFeatureHero
          responsive
          badge="Featured this week"
          title="Orbitfold 4"
          subtitle="Plans that keep up with you."
          description="An endless canvas for projects, notes and timelines. **14,326 downloads in the last 30 days.**"
          :floats="floats"
          detail-href="#FeatureHero"
        >
          <template #float="{ item, size, index }">
            <OnAppIcon :name="item.name" :src="item.src" :size="size" :priority="index === 0" />
          </template>
        </OnFeatureHero>
      </div>
    </StoryRow>
    <p class="m-0 text-caption text-ink-tertiary">Primary action clicks: {{ actions }}</p>
  </StorySection>
</template>
