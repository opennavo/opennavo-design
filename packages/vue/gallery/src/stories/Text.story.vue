<script setup lang="ts">
import { OnCard, OnCodeText, OnHighlightText, OnMarkdownView } from '../../../src';
import { articleHtml } from '../data';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';
</script>

<template>
  <StorySection
    title="Text"
    components="OnHighlightText · OnCodeText · OnMarkdownView"
    description="Highlighted text recognizes only **…**. Code text wraps between words, never inside one. OnMarkdownView styles HTML the app has rendered and sanitized; it parses nothing itself."
  >
    <StoryRow label="Highlighted text">
      <OnHighlightText
        as="p"
        class="m-0 max-w-640px text-15px leading-[1.65] text-ink-secondary"
        text="A **calm, endless canvas** for projects and notes. Boards **sync in seconds** and keep their place when you switch spaces."
      />
    </StoryRow>
    <StoryRow label="Code text">
      <code class="block w-280px rounded-default bg-surface-inset px-12px py-10px font-mono text-12px text-ink-primary">
        <OnCodeText text="orbitfold export --format pdf --output ~/Documents/Boards/quarterly-planning.pdf" />
      </code>
    </StoryRow>
    <StoryRow label="Rendered Markdown">
      <OnCard class="w-640px max-w-full">
        <OnMarkdownView :html="articleHtml" />
      </OnCard>
    </StoryRow>
    <StoryRow label="Article size">
      <div class="w-640px max-w-full">
        <OnMarkdownView size="article">
          <h2>Picking a sync folder</h2>
          <p>
            Choose a folder you already use. <strong>Nothing leaves your devices</strong>; every copy stays in sync.
          </p>
          <img
            src="/sample-screen.svg"
            alt="Abstract window with a sidebar, a bar chart and a list"
            width="1600"
            height="1000"
          />
        </OnMarkdownView>
      </div>
    </StoryRow>
  </StorySection>
</template>
