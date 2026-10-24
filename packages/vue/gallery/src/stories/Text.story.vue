<script setup lang="ts">
import { t, localize } from '../i18n';
import { OnCard, OnCodeText, OnHighlightText, OnMarkdownView } from '../../../src';
import { articleHtml } from '../data';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';
</script>

<template>
  <StorySection
    :title="t('Text')"
    components="OnHighlightText · OnCodeText · OnMarkdownView"
    :description="
      t(
        'Highlighted text recognizes only **…**. Code text wraps between words, never inside one. OnMarkdownView styles HTML the app has rendered and sanitized; it parses nothing itself.'
      )
    "
  >
    <StoryRow :label="t('Highlighted text')">
      <OnHighlightText
        as="p"
        class="m-0 max-w-640px text-15px leading-[1.65] text-ink-secondary"
        :text="
          t(
            'A **calm, endless canvas** for projects and notes. Boards **sync in seconds** and keep their place when you switch spaces.'
          )
        "
      />
    </StoryRow>
    <StoryRow :label="t('Code text')">
      <code class="block w-280px rounded-default bg-surface-inset px-12px py-10px font-mono text-12px text-ink-primary">
        <OnCodeText text="orbitfold export --format pdf --output ~/Documents/Boards/quarterly-planning.pdf" />
      </code>
    </StoryRow>
    <StoryRow :label="t('Rendered Markdown')">
      <OnCard class="w-640px max-w-full">
        <OnMarkdownView :html="localize(articleHtml)" />
      </OnCard>
    </StoryRow>
    <StoryRow :label="t('Article size')">
      <div class="w-640px max-w-full">
        <OnMarkdownView size="article">
          <h2>{{ t('Picking a sync folder') }}</h2>
          <p>
            {{ t('Choose a folder you already use.') }} <strong>{{ t('Nothing leaves your devices') }}</strong
            >{{ t('; every copy stays in sync.') }}
          </p>
          <img
            src="/sample-screen.svg"
            :alt="t('Abstract window with a sidebar, a bar chart and a list')"
            width="1600"
            height="1000"
          />
        </OnMarkdownView>
      </div>
    </StoryRow>
  </StorySection>
</template>
