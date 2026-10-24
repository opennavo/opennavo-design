<script setup lang="ts">
import { t, localize } from '../i18n';
import { OnCard, OnStatTile } from '../../../src';
import StoryRow from '../StoryRow.vue';
import StorySection from '../StorySection.vue';
</script>

<template>
  <StorySection
    :title="t('Cards and statistics')"
    components="OnCard · OnStatTile"
    :description="
      t(
        'Cards use borders and fills, not shadows; interactive cards brighten the border on hover. Stat tiles come in a standalone sm tile and an md cell for strips.'
      )
    "
  >
    <StoryRow :label="t('Padding')">
      <OnCard padding="sm" class="w-200px"
        ><span class="text-body-sm text-ink-secondary">{{ t('sm · 14') }}</span></OnCard
      >
      <OnCard class="w-200px"
        ><span class="text-body-sm text-ink-secondary">{{ t('md · 16 (default)') }}</span></OnCard
      >
      <OnCard padding="lg" class="w-200px"
        ><span class="text-body-sm text-ink-secondary">{{ t('lg · 18') }}</span></OnCard
      >
    </StoryRow>
    <StoryRow :label="t('Interactive')">
      <OnCard href="#Cards" interactive class="w-280px max-w-full">
        <span class="block text-headline text-ink-primary">{{ t('12 essentials for a new computer') }}</span>
        <span class="mt-4px block text-body-sm text-ink-secondary">
          {{ t('Notes, sync, sketching, a reader and a few handy command-line tools.') }}
        </span>
      </OnCard>
    </StoryRow>
    <StoryRow :label="t('Stat tiles (sm)')">
      <div class="grid w-360px max-w-full grid-cols-[repeat(2,minmax(0,1fr))] gap-8px">
        <OnStatTile :label="t('In library')" value="218" :hint="t('Includes 38 apps')" />
        <OnStatTile :label="t('Updates')" value="6" :hint="t('About 1.1 GB to download')" />
        <OnStatTile :label="t('Disk usage')" value="18.6" :unit="t('GB')" :hint="t('Includes 2.3 GB of cache')" />
        <OnStatTile :label="t('Last checked')" value="5" :unit="t('min ago')" :hint="t('Every day at 09:00')" />
      </div>
    </StoryRow>
    <StoryRow :label="t('Stat strip (md)')">
      <div
        class="flex w-760px max-w-full flex-wrap divide-x divide-line-subtle rounded-big border border-solid border-line-subtle bg-surface-card py-14px"
      >
        <OnStatTile
          size="md"
          :label="t('Downloads, 30 days')"
          value="17,394"
          :delta="{ value: '12%', direction: 'up', good: true }"
        />
        <OnStatTile size="md" :label="t('Rank')" value="#9" :hint="t('Productivity')" />
        <OnStatTile size="md" :label="t('Version')" value="1.140.0" />
        <OnStatTile size="md" :label="t('Size')" value="318" :unit="t('MB')" />
        <OnStatTile
          size="md"
          :label="t('Failure rate')"
          value="0.4%"
          :delta="{ value: '0.1%', direction: 'up', good: false }"
        />
      </div>
    </StoryRow>
  </StorySection>
</template>
