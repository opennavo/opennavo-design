<script setup lang="ts">
import { OnCard, OnStatTile } from '../../../src';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';
</script>

<template>
  <StorySection
    title="Cards and statistics"
    components="OnCard · OnStatTile"
    description="Cards use borders and fills, not shadows; interactive cards brighten the border on hover. Stat tiles come in a standalone sm tile and an md cell for strips."
  >
    <StoryRow label="Padding">
      <OnCard padding="sm" class="w-200px"><span class="text-body-sm text-ink-secondary">sm · 14</span></OnCard>
      <OnCard class="w-200px"><span class="text-body-sm text-ink-secondary">md · 16 (default)</span></OnCard>
      <OnCard padding="lg" class="w-200px"><span class="text-body-sm text-ink-secondary">lg · 18</span></OnCard>
    </StoryRow>
    <StoryRow label="Interactive">
      <OnCard href="#Cards" interactive class="w-280px max-w-full">
        <span class="block text-headline text-ink-primary">12 essentials for a new computer</span>
        <span class="mt-4px block text-body-sm text-ink-secondary">
          Notes, sync, sketching, a reader and a few handy command-line tools.
        </span>
      </OnCard>
    </StoryRow>
    <StoryRow label="Stat tiles (sm)">
      <div class="grid w-360px max-w-full grid-cols-[repeat(2,minmax(0,1fr))] gap-8px">
        <OnStatTile label="In library" value="218" hint="Includes 38 apps" />
        <OnStatTile label="Updates" value="6" hint="About 1.1 GB to download" />
        <OnStatTile label="Disk usage" value="18.6" unit="GB" hint="Includes 2.3 GB of cache" />
        <OnStatTile label="Last checked" value="5" unit="min ago" hint="Every day at 09:00" />
      </div>
    </StoryRow>
    <StoryRow label="Stat strip (md)">
      <div
        class="flex w-760px max-w-full flex-wrap divide-x divide-line-subtle rounded-big border border-solid border-line-subtle bg-surface-card py-14px"
      >
        <OnStatTile
          size="md"
          label="Downloads, 30 days"
          value="17,394"
          :delta="{ value: '12%', direction: 'up', good: true }"
        />
        <OnStatTile size="md" label="Rank" value="#9" hint="Productivity" />
        <OnStatTile size="md" label="Version" value="1.140.0" />
        <OnStatTile size="md" label="Size" value="318" unit="MB" />
        <OnStatTile
          size="md"
          label="Failure rate"
          value="0.4%"
          :delta="{ value: '0.1%', direction: 'up', good: false }"
        />
      </div>
    </StoryRow>
  </StorySection>
</template>
