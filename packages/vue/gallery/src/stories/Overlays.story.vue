<script setup lang="ts">
import { computed, ref } from 'vue';
import {
  OnButton,
  OnCommandPalette,
  OnConfirm,
  OnLogViewer,
  OnMenu,
  OnModal,
  OnSheet,
  OnToast,
  OnToastRegion,
  createToastQueue
} from '../../../src';
import type { OnCommandGroup, OnCommandItem, OnMenuItem } from '../../../src';
import { sampleLog } from '../data';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';

const modalOpen = ref(false);
const confirmOpen = ref(false);
const dangerOpen = ref(false);
const sheetOpen = ref(false);
const paletteOpen = ref(false);
const query = ref('');
const last = ref('—');

const toasts = createToastQueue();

const menuItems: OnMenuItem[] = [
  { key: 'reveal', label: 'Show in folder', icon: 'folder' },
  { key: 'copy', label: 'Copy link', icon: 'copy', shortcut: '⌘C' },
  { key: 'share', label: 'Share…', icon: 'share-2' },
  { key: 'pin', label: 'Pin version', icon: 'pin' },
  { key: 'ignore', label: 'Skip this version', icon: 'x', disabled: true },
  { key: 'delete', label: 'Delete', icon: 'trash-2', danger: true, separator: true }
];

const sortBy = ref('name');
const sortItems = computed<OnMenuItem[]>(() =>
  [
    { key: 'name', label: 'Name' },
    { key: 'size', label: 'Size' },
    { key: 'added', label: 'Date added' }
  ].map(item => ({ ...item, checked: item.key === sortBy.value }))
);

const apps: OnCommandItem[] = [
  {
    key: 'orbitfold',
    label: 'Orbitfold',
    description: 'App · Version 4.92.1',
    image: '/sample-orbit.svg',
    badge: 'Update available',
    hint: '↵ Open'
  },
  { key: 'prismark', label: 'Prismark', description: 'App · Vector sketching', image: '/sample-prism.svg' },
  { key: 'tidelane', label: 'Tidelane', description: 'App · Folder sync', image: '/sample-wave.svg', hint: '⌘↵ Update' }
];
const actions: OnCommandItem[] = [
  { key: 'update', label: 'Update Orbitfold', description: '4.92.1 → 4.93.0', icon: 'refresh-cw', iconTone: 'accent' },
  { key: 'reveal', label: 'Show Orbitfold in folder', icon: 'folder' },
  { key: 'settings', label: 'Open settings', icon: 'settings', hint: '⌘,' }
];

const groups = computed<OnCommandGroup[]>(() => {
  const q = query.value.trim().toLowerCase();
  const match = (item: OnCommandItem) => !q || item.label.toLowerCase().includes(q);
  return [
    { key: 'apps', label: 'Apps', items: apps.filter(match) },
    { key: 'actions', label: 'Actions', items: actions.filter(match) }
  ];
});

function onSelect(item: OnCommandItem, { meta }: { meta: boolean }) {
  last.value = `${meta ? '⌘↵' : '↵'} ${item.label}`;
  paletteOpen.value = false;
}

function pushToast(kind: 'success' | 'danger' | 'info') {
  if (kind === 'success') toasts.push({ tone: 'success', title: 'Updated Prismark', description: '1.139.1 → 1.140.0' });
  else if (kind === 'danger')
    toasts.push({
      tone: 'danger',
      title: 'Couldn’t update Orbitfold',
      description: 'The update needs administrator rights and was cancelled.',
      actionLabel: 'View',
      duration: 0
    });
  else toasts.push({ tone: 'info', title: 'Copied', description: 'https://orbitfold.example/boards/q3' });
}
</script>

<template>
  <StorySection
    title="Overlays"
    components="OnModal · OnConfirm · OnSheet · OnToast · OnToastRegion · OnMenu · OnCommandPalette"
    description="Overlays mount on body, move focus inside when they open, trap Tab and restore focus on close. Escape closes everything except destructive confirmations."
  >
    <StoryRow label="Dialogs">
      <OnButton @click="modalOpen = true">Open dialog</OnButton>
      <OnButton @click="confirmOpen = true">Confirmation</OnButton>
      <OnButton variant="danger" @click="dangerOpen = true">Destructive confirmation</OnButton>
      <OnButton @click="sheetOpen = true">Log sheet</OnButton>
    </StoryRow>
    <StoryRow label="Menus">
      <OnMenu :items="menuItems" @select="last = $event" />
      <OnMenu
        :items="menuItems"
        align="start"
        variant="ghost"
        size="sm"
        label="More (start aligned)"
        @select="last = $event"
      />
      <OnMenu :items="sortItems" label="Sort by" icon="layout-grid" @select="sortBy = $event" />
      <span class="text-caption text-ink-tertiary">Last action: {{ last }} · sorted by {{ sortBy }}</span>
    </StoryRow>
    <StoryRow label="Command palette">
      <OnButton icon="search" @click="paletteOpen = true">Open command palette</OnButton>
    </StoryRow>
    <StoryRow label="Toasts">
      <div class="flex flex-col gap-10px">
        <OnToast tone="success" title="Updated Prismark" description="1.139.1 → 1.140.0" time="Now" />
        <OnToast
          tone="danger"
          title="Couldn’t update Orbitfold"
          description="The update needs administrator rights and was cancelled."
          action-label="View"
        />
        <OnToast tone="warning" title="Low disk space" description="Free up 2 GB to finish the download." />
        <OnToast tone="info" title="Copied" />
      </div>
      <div class="flex gap-8px">
        <OnButton size="sm" @click="pushToast('success')">Success</OnButton>
        <OnButton size="sm" @click="pushToast('danger')">Failure</OnButton>
        <OnButton size="sm" @click="pushToast('info')">Copy</OnButton>
      </div>
    </StoryRow>

    <OnModal
      v-model:open="modalOpen"
      title="Report a problem"
      description="Describe what happened and we will reply within three working days."
    >
      <p class="m-0">Item: Orbitfold (org.example.orbitfold)</p>
      <template #footer>
        <OnButton variant="ghost" @click="modalOpen = false">Cancel</OnButton>
        <OnButton variant="primary" @click="modalOpen = false">Send</OnButton>
      </template>
    </OnModal>
    <OnConfirm
      v-model:open="confirmOpen"
      title="Add Tidelane to your library?"
      description="A link on the web asked to add this app."
      @confirm="confirmOpen = false"
    />
    <OnConfirm
      v-model:open="dangerOpen"
      tone="danger"
      title="Delete Orbitfold?"
      description="Quits the app and moves it to the Trash. Your boards stay in place."
      confirm-label="Delete"
      @confirm="dangerOpen = false"
    />
    <OnSheet v-model:open="sheetOpen" title="Update Orbitfold · Log">
      <OnLogViewer :lines="sampleLog" />
      <template #footer>
        <OnButton variant="ghost" icon="copy">Copy all</OnButton>
      </template>
    </OnSheet>
    <OnCommandPalette
      v-model:open="paletteOpen"
      v-model:query="query"
      :groups="groups"
      @select="onSelect"
      @copy="last = `⌘C ${$event.label}`"
    />
    <OnToastRegion :items="toasts.items.value" @dismiss="toasts.dismiss" @action="last = `View ${$event}`" />
  </StorySection>
</template>
