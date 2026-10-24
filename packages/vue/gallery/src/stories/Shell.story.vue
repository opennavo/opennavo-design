<script setup lang="ts">
import { t, localize } from '../i18n';
import { computed, ref } from 'vue';
import {
  OnAppIcon,
  OnAppShell,
  OnButton,
  OnPageHeader,
  OnRailPanel,
  OnRailSection,
  OnSectionHeader,
  OnSegmented,
  OnSidebar,
  OnStatTile,
  OnToolbar
} from '../../../src';
import type { OnSidebarGroup } from '../../../src';
import { sampleApps } from '../data';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';

type Env = 'desktop' | 'web';
const env = ref<Env>('desktop');
const view = ref<'discover' | 'library'>('discover');

const groups = computed<OnSidebarGroup[]>(() => [
  {
    key: 'browse',
    label: 'Browse',
    items: [
      { key: 'discover', label: 'Discover', icon: 'compass', href: '#Shell', active: view.value === 'discover' },
      { key: 'categories', label: 'Categories', icon: 'layout-grid', href: '#Shell' }
    ]
  },
  {
    key: 'mine',
    label: 'Library',
    items: [
      {
        key: 'library',
        label: 'All items',
        icon: 'library',
        href: '#Shell',
        count: 218,
        active: view.value === 'library'
      },
      { key: 'updates', label: 'Updates', icon: 'download', href: '#Shell', badge: 4, badgeLabel: '4 updates' },
      { key: 'favorites', label: 'Favorites', icon: 'heart', href: '#Shell' }
    ]
  }
]);
</script>

<template>
  <StorySection
    :title="t('App shell')"
    components="OnAppShell · OnSidebar · OnToolbar · OnRailPanel · OnRailSection"
    :description="
      t(
        'Desktop scrolls inside the window and reserves drag regions; web scrolls the document with a sticky sidebar and toolbar. The sidebar takes the app\'s mark through its brand slot.'
      )
    "
  >
    <StoryRow :label="t('Environment / page')">
      <OnSegmented
        v-model="env"
        size="sm"
        :options="
          localize([
            { value: 'desktop', label: 'Desktop' },
            { value: 'web', label: 'Web' }
          ])
        "
        :aria-label="t('Environment')"
      />
      <OnSegmented
        v-model="view"
        size="sm"
        :options="
          localize([
            { value: 'discover', label: 'Discover' },
            { value: 'library', label: 'Library' }
          ])
        "
        :aria-label="t('Page')"
      />
    </StoryRow>
    <!-- Desktop windows are at least 1100 px wide; keep that layout and scroll on narrow screens. -->
    <div class="overflow-x-auto rounded-big border border-solid border-line-subtle">
      <div class="relative h-680px overflow-hidden" :class="env === 'desktop' ? 'min-w-1024px' : ''">
        <OnAppShell
          :scroll="env === 'desktop' ? 'container' : 'document'"
          :has-rail="view === 'discover'"
          rail-docked
          class="!h-680px !min-h-0"
        >
          <template #sidebar>
            <OnSidebar
              :groups="localize(groups)"
              :footer-items="localize([{ key: 'settings', label: 'Settings', icon: 'settings', href: '#Shell' }])"
              :label="t('Main navigation')"
              :top-label="t('Desktop app')"
              :drag-region="env === 'desktop'"
            >
              <template #brand>
                <span class="flex items-center gap-8px">
                  <img src="/sample-orbit.svg" :alt="t('')" width="22" height="22" />
                  <span class="text-15px font-600 tracking-[-0.01em] text-ink-accent">Orbitfold</span>
                </span>
              </template>
              <template v-if="env === 'web'" #top>
                <div
                  class="mx-2px rounded-default border border-solid border-line-subtle bg-component-search-bg px-9px py-8px"
                >
                  <div class="text-12.5px font-600 text-ink-primary">{{ t('Orbitfold for desktop') }}</div>
                  <div class="text-11px text-ink-tertiary">{{ t('Free · works offline') }}</div>
                </div>
              </template>
            </OnSidebar>
          </template>
          <template #toolbar>
            <OnToolbar
              :search-label="t('Search boards and apps')"
              search-shortcut="⌘K"
              :drag-region="env === 'desktop'"
            >
              <template #end>
                <OnButton size="sm" variant="ghost" icon="bell" icon-only :aria-label="t('Notifications')" />
              </template>
            </OnToolbar>
          </template>

          <template v-if="view === 'discover'">
            <OnPageHeader :title="t('Discover')" :subtitle="t('Hand-picked apps, updated every week')" />
            <OnSectionHeader
              :title="t('Popular')"
              :hint="t('Last 30 days')"
              :more-label="t('View all')"
              more-href="#Shell"
            />
            <div class="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-12px">
              <div
                v-for="app in sampleApps.slice(0, 6)"
                :key="app.id"
                class="flex items-center gap-12px rounded-big border border-solid border-line-subtle bg-surface-card p-14px"
              >
                <OnAppIcon :variant="app.variant" :name="app.name" :src="app.icon" :accent="app.accent" :size="44" />
                <span class="min-w-0">
                  <span class="block truncate text-13.5px font-600 text-ink-primary">{{ localize(app.name) }}</span>
                  <span class="block truncate text-12px text-ink-tertiary">{{ localize(app.summary) }}</span>
                </span>
              </div>
            </div>
          </template>
          <OnPageHeader v-else :title="t('Library')" :subtitle="t('218 items on this device')">
            <template #actions
              ><OnButton variant="primary">{{ t('Update all (4)') }}</OnButton></template
            >
          </OnPageHeader>

          <template #rail>
            <OnRailPanel :responsive="env === 'web'">
              <OnRailSection :title="t('Overview')" :subtitle="t('This device')">
                <div class="grid grid-cols-[repeat(2,minmax(0,1fr))] gap-8px">
                  <OnStatTile :label="t('Items')" value="218" />
                  <OnStatTile :label="t('Updates')" value="4" />
                  <OnStatTile :label="t('Disk')" value="18.6" :unit="t('GB')" />
                  <OnStatTile :label="t('Checked')" value="5" :unit="t('min ago')" />
                </div>
              </OnRailSection>
            </OnRailPanel>
          </template>
        </OnAppShell>
      </div>
    </div>
  </StorySection>
</template>
