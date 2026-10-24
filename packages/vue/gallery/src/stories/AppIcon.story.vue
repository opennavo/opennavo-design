<script setup lang="ts">
import { OnAppIcon } from '../../../src';
import type { OnAppIconSize } from '../../../src';
import { letterTiles, terminalTools } from '../data';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';

const sizes: OnAppIconSize[] = [20, 24, 26, 28, 30, 32, 40, 44, 64, 96, 118];
</script>

<template>
  <StorySection
    title="App icons"
    components="OnAppIcon"
    description='Shows the app&apos;s image when it loads, otherwise a letter tile in the accent color (or a color hashed from the seed). variant="terminal" draws the command-line tile.'
  >
    <StoryRow label="Sizes">
      <OnAppIcon v-for="size in sizes" :key="size" name="Orbitfold" src="/sample-orbit.svg" :size="size" />
    </StoryRow>
    <StoryRow label="Letter tiles">
      <OnAppIcon v-for="tile in letterTiles" :key="tile.name" :name="tile.name" :accent="tile.accent" :size="64" />
    </StoryRow>
    <StoryRow label="Terminal tiles">
      <OnAppIcon v-for="tool in terminalTools" :key="tool" variant="terminal" :name="tool" :size="64" />
      <OnAppIcon variant="terminal" name="Hex Walk" seed="hexwalk" initials="hw" :size="64" />
    </StoryRow>
    <StoryRow label="Images and failure fallback">
      <OnAppIcon name="Prismark" src="/sample-prism.svg" :size="64" />
      <OnAppIcon name="Tidelane" src="/sample-wave.svg" :size="64" />
      <OnAppIcon name="Gridline" src="/sample-grid.svg" :size="64" />
      <OnAppIcon name="Broken Image" src="/not-found.png" :size="64" />
      <span class="text-caption text-ink-tertiary">The last image is missing and falls back to a letter tile.</span>
    </StoryRow>
  </StorySection>
</template>
