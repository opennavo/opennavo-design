<script setup lang="ts">
import { t, localize } from './i18n';
import { computed, watchEffect } from 'vue';
import type { Component } from 'vue';
import { LOCALES, OnButton, OnIcon, OnMenu, OnSegmented } from '../../src';
import type { Locale, OnMenuItem, OnSegmentedOption, ThemePreference } from '../../src';
import { locale, selectedStory, theme } from './state';
import AppIconStory from './stories/AppIcon.story.vue';
import BadgeStory from './stories/Badge.story.vue';
import ButtonStory from './stories/Button.story.vue';
import CardsStory from './stories/Cards.story.vue';
import ChipStory from './stories/Chip.story.vue';
import DataStory from './stories/Data.story.vue';
import FeatureHeroStory from './stories/FeatureHero.story.vue';
import FoundationsStory from './stories/Foundations.story.vue';
import IconStory from './stories/Icon.story.vue';
import InputsStory from './stories/Inputs.story.vue';
import NavigationStory from './stories/Navigation.story.vue';
import OverlaysStory from './stories/Overlays.story.vue';
import ShellStory from './stories/Shell.story.vue';
import StatesStory from './stories/States.story.vue';
import TabsStory from './stories/Tabs.story.vue';
import TextStory from './stories/Text.story.vue';
import TooltipStory from './stories/Tooltip.story.vue';
import TopNavStory from './stories/TopNav.story.vue';

const stories: Array<{ name: string; component: Component }> = [
  { name: 'Foundations', component: FoundationsStory },
  { name: 'Button', component: ButtonStory },
  { name: 'Chip', component: ChipStory },
  { name: 'Badge', component: BadgeStory },
  { name: 'Inputs', component: InputsStory },
  { name: 'Tabs', component: TabsStory },
  { name: 'Tooltip', component: TooltipStory },
  { name: 'Cards', component: CardsStory },
  { name: 'AppIcon', component: AppIconStory },
  { name: 'FeatureHero', component: FeatureHeroStory },
  { name: 'Data', component: DataStory },
  { name: 'Text', component: TextStory },
  { name: 'Navigation', component: NavigationStory },
  { name: 'States', component: StatesStory },
  { name: 'Overlays', component: OverlaysStory },
  { name: 'TopNav', component: TopNavStory },
  { name: 'Shell', component: ShellStory },
  { name: 'Icon', component: IconStory }
];

const visible = computed(() => stories.filter(story => !selectedStory || story.name === selectedStory));

const themes: OnSegmentedOption<ThemePreference>[] = [
  { value: 'system', label: 'System' },
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' }
];

// Native names, so each language is findable whatever the current one is.
const LOCALE_NAMES: Record<Locale, string> = {
  'en-US': 'English',
  'zh-CN': '简体中文',
  'ja-JP': '日本語',
  'es-ES': 'Español',
  'pt-BR': 'Português (Brasil)',
  'ru-RU': 'Русский',
  'de-DE': 'Deutsch',
  'fr-FR': 'Français',
  'it-IT': 'Italiano',
  'zh-Hant': '繁體中文'
};

const localeItems = computed<OnMenuItem[]>(() =>
  LOCALES.map(code => ({ key: code, label: `${LOCALE_NAMES[code]} · ${code}`, checked: code === locale.value }))
);

function selectLocale(key: string) {
  const next = LOCALES.find(code => code === key);
  if (next) locale.value = next;
}

const themeIcon = computed(() => (theme.value === 'system' ? 'sun-moon' : theme.value === 'light' ? 'sun' : 'moon'));

watchEffect(() => {
  document.title = `OpenNavo Design · ${t('Vue component gallery')}`;
});
</script>

<template>
  <div class="min-h-screen bg-surface-page text-ink-primary">
    <header class="sticky top-0 z-sticky border-b border-b-solid border-line-subtle bg-surface-page">
      <div
        class="mx-auto flex max-w-1240px flex-wrap items-center gap-x-16px gap-y-10px px-32px py-12px max-md:px-16px"
      >
        <a href="?" class="flex items-baseline gap-10px no-underline">
          <span class="text-headline text-ink-primary">OpenNavo Design</span>
          <span class="text-body-sm text-ink-tertiary">{{ t('Vue component gallery') }}</span>
        </a>
        <div class="ml-auto flex flex-wrap items-center gap-10px">
          <span class="inline-flex items-center gap-6px text-ink-tertiary">
            <OnIcon :name="themeIcon" :size="15" />
            <OnSegmented v-model="theme" :options="localize(themes)" size="sm" :aria-label="t('Theme')" />
          </span>
          <OnMenu :items="localize(localeItems)" :label="t('Language')" align="end" @select="selectLocale">
            <template #trigger="{ attrs }">
              <OnButton size="sm" variant="ghost" v-bind="attrs">{{ localize(LOCALE_NAMES[locale]) }}</OnButton>
            </template>
          </OnMenu>
        </div>
      </div>
      <nav
        class="mx-auto flex max-w-1240px flex-wrap gap-x-14px gap-y-6px px-32px pb-10px max-md:px-16px"
        :aria-label="t('Stories')"
      >
        <a
          v-for="story in stories"
          :key="story.name"
          :href="`?story=${story.name}`"
          class="rounded-tiny text-12px no-underline outline-none focus-visible:shadow-focus-ring"
          :class="story.name === selectedStory ? 'text-ink-primary' : 'text-ink-tertiary hover:text-ink-primary'"
          :aria-current="story.name === selectedStory ? 'page' : undefined"
        >
          {{ localize(story.name) }}
        </a>
        <a
          href="?"
          class="rounded-tiny text-12px no-underline outline-none focus-visible:shadow-focus-ring"
          :class="selectedStory ? 'text-ink-tertiary hover:text-ink-primary' : 'text-ink-primary'"
          >{{ t('All') }}</a
        >
      </nav>
    </header>
    <main class="mx-auto flex max-w-1240px flex-col gap-20px px-32px py-28px max-md:px-16px">
      <component :is="story.component" v-for="story in visible" :id="story.name" :key="story.name" />
    </main>
  </div>
</template>
