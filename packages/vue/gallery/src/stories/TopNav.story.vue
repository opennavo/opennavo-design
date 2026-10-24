<script setup lang="ts">
import { ref } from 'vue';
import { OnTopNav } from '../../../src';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';

const items = [
  { label: 'Discover', href: '#TopNav', active: true },
  { label: 'Categories', href: '#categories' },
  { label: 'Rankings', href: '#rankings' },
  { label: 'Collections', href: '#collections' },
  { label: 'Command line', href: '#cli' }
];

const searches = ref(0);
</script>

<template>
  <StorySection
    title="Top navigation"
    components="OnTopNav"
    description="Web header: the app's mark goes in the brand slot (or brandName as text). Scrolling blurs the background; below 1024 px the links move into a menu."
  >
    <StoryRow label="Brand slot" stacked>
      <div class="w-full overflow-hidden rounded-big border border-solid border-line-subtle">
        <OnTopNav
          :items="items"
          brand-name="Orbitfold"
          download-href="#download"
          search-shortcut="⌘K"
          @search="searches++"
        >
          <template #brand>
            <span class="inline-flex items-center gap-8px">
              <img src="/sample-orbit.svg" alt="" width="26" height="26" />
              <span class="text-15px font-600 tracking-[-0.01em] text-ink-accent">Orbitfold</span>
            </span>
          </template>
        </OnTopNav>
      </div>
    </StoryRow>
    <StoryRow label="brandName only, no search" stacked>
      <div class="w-full overflow-hidden rounded-big border border-solid border-line-subtle">
        <OnTopNav :items="items.slice(0, 3)" brand-name="Tidelane" :searchable="false" />
      </div>
    </StoryRow>
    <StoryRow label="Narrow screens" stacked>
      <p class="m-0 text-caption text-ink-tertiary">
        The menu button follows the viewport width; resize the window to preview it. Search clicks: {{ searches }}
      </p>
    </StoryRow>
  </StorySection>
</template>
