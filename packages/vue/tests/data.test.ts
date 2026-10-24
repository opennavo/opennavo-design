import { config as testConfig } from '@vue/test-utils';
import { ref as localeRef } from 'vue';
import { ON_UI_LOCALE as fixtureLocaleKey } from '../src/composables/locale';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { h } from 'vue';
import OnHBarChart from '../src/components/OnHBarChart.vue';
import OnLogViewer from '../src/components/OnLogViewer.vue';
import OnProgressMeter from '../src/components/OnProgressMeter.vue';
import OnStackBar from '../src/components/OnStackBar.vue';
import OnTable from '../src/components/OnTable.vue';
import { formatPercent } from '../src/utils/format';
import { classifyLogLine } from '../src/utils/log';
import { withLocale } from './helpers';

const taskLog = [
  'fernlight-studio 4.92.1 -> 4.93.0',
  '==> Upgrading fernlight-studio',
  '==> Downloading https://downloads.example.com/fernlight/4.93.0/Fernlight.dmg',
  '############################################               62.4%'
];

describe('classifyLogLine', () => {
  it('Classifies log lines', () => {
    expect(classifyLogLine('==> Upgrading fernlight-studio')).toBe('heading');
    expect(classifyLogLine('######################################## 100.0%')).toBe('progress');
    expect(classifyLogLine('#=#=#')).toBe('plain');
    expect(classifyLogLine('🍺  fernlight-studio was successfully upgraded!')).toBe('success');
    expect(classifyLogLine('quillwisp was successfully installed!')).toBe('success');
    expect(classifyLogLine('Error: fernlight-studio requires macOS >= 14')).toBe('error');
    expect(classifyLogLine('curl: (22) The requested URL returned error: 404')).toBe('error');
    expect(classifyLogLine('fernlight-studio 4.92.1 -> 4.93.0')).toBe('plain');
    expect(classifyLogLine('')).toBe('plain');
  });
});

describe('OnLogViewer', () => {
  it('Colors logs, preserves blank-line height, and follows the tail', () => {
    const wrapper = mount(OnLogViewer, {
      props: { lines: ['', ...taskLog, '🍺  done was successfully upgraded!'], tail: 5 }
    });
    const pre = wrapper.get('pre');
    expect(pre.attributes('role')).toBe('log');
    expect(pre.attributes('aria-label')).toBe('日志');
    const spans = wrapper.findAll('pre > span');
    expect(spans).toHaveLength(5);
    expect(spans.map(span => span.classes().find(name => name.startsWith('text-')) ?? '')).toEqual([
      '',
      'text-component-log-heading',
      'text-component-log-heading',
      'text-brand-salmon',
      'text-component-log-success'
    ]);
    const blank = mount(OnLogViewer, { props: { lines: ['a', '', 'b'] } });
    expect(blank.findAll('pre > span')[1]?.text()).toBe('​');
  });

  it('Uses a 200-pixel virtual viewport and caps logs at 2000 lines', async () => {
    const lines = Array.from({ length: 2500 }, (_, index) => `line ${index}`);
    const wrapper = mount(OnLogViewer, { props: { lines, height: 187 } });
    const spans = () => wrapper.findAll('pre > span');
    // About ten visible rows, twenty pre-rendered below, and two spacers.
    expect(spans().length).toBeLessThan(40);
    expect(spans()[1]?.text()).toBe('line 500');
    const bottom = spans().at(-1)?.attributes('style') ?? '';
    const rendered = spans().length - 2;
    expect(bottom).toContain(`height: ${((2000 - rendered) * 18.7).toFixed(1).replace(/\.0$/, '')}`);

    const pre = wrapper.get('pre').element;
    pre.scrollTop = 18.7 * 1000;
    await wrapper.get('pre').trigger('scroll');
    expect(spans().some(span => span.text() === 'line 1500')).toBe(true);
    expect(spans()[0]?.attributes('style')).toContain('height:');
  });
});

describe('OnProgressMeter', () => {
  it('Clamps progress and transitions width', () => {
    const wrapper = mount(OnProgressMeter, { props: { value: 62.4, label: '下载 Fernlight Studio' } });
    const bar = wrapper.get('[role="progressbar"]');
    expect(bar.attributes('aria-valuenow')).toBe('62');
    expect(bar.attributes('aria-label')).toBe('下载 Fernlight Studio');
    expect(wrapper.get('.on-meter-fill').attributes('style')).toContain('width: 62.4%');
    expect(
      mount(OnProgressMeter, { props: { value: 150 } })
        .get('[role="progressbar"]')
        .attributes('aria-valuenow')
    ).toBe('100');
    expect(
      mount(OnProgressMeter, { props: { value: -5 } })
        .get('.on-meter-fill')
        .attributes('style')
    ).toContain('width: 0%');
    expect(
      mount(OnProgressMeter, { props: { value: 50, size: 'sm' } })
        .get('[role="progressbar"]')
        .classes()
    ).toContain('h-4px');
  });

  it('Provides indeterminate animation, accessible state, and reduced-motion text', () => {
    const wrapper = mount(OnProgressMeter, { global: withLocale('en-US') });
    const bar = wrapper.get('[role="progressbar"]');
    expect(bar.attributes('aria-valuenow')).toBeUndefined();
    expect(bar.attributes('aria-valuetext')).toBe('In progress');
    expect(wrapper.find('.on-meter-indeterminate').exists()).toBe(true);
    expect(wrapper.get('.on-meter-busy').text()).toBe('In progress');
  });
});

describe('OnHBarChart', () => {
  const items = [
    { key: '30d', label: '近 30 天', value: 17394, display: '1.7万', full: '17,394', emphasis: true },
    { key: '90d', label: '近 90 天月均', value: 34000, display: '3.4万' },
    { key: '365d', label: '近一年月均', value: 40000, display: '4.0万' }
  ];

  it('Scales bars to the maximum and emphasizes labels', () => {
    const wrapper = mount(OnHBarChart, { props: { items, caption: '月均下载量' } });
    const bars = wrapper.findAll('.rounded-r-tiny');
    expect(bars.map(bar => bar.classes().find(name => name.startsWith('bg-chart')))).toEqual([
      'bg-chart-emphasis',
      'bg-chart-deemphasis',
      'bg-chart-deemphasis'
    ]);
    const widths = wrapper.findAll('[style*="width"]').map(element => element.attributes('style'));
    expect(widths[0]).toContain('width: 43.485%');
    expect(widths[2]).toContain('width: 100%');
    expect(wrapper.text()).toContain('1.7万');
  });

  it('Leaves no tooltip text in the page until a bar is hovered', () => {
    const wrapper = mount(OnHBarChart, { props: { items, caption: '月均下载量' }, attachTo: document.body });
    expect(document.body.querySelector('[role="tooltip"]')).toBeNull();
    wrapper.unmount();
    const stack = mount(OnStackBar, {
      props: { caption: '存储', items: [{ key: 'app', label: 'App', value: 1 }] },
      attachTo: document.body
    });
    expect(document.body.querySelector('[role="tooltip"]')).toBeNull();
    stack.unmount();
  });

  it('Provides a hidden table with complete values and the maximum', () => {
    const wrapper = mount(OnHBarChart, { props: { items, caption: '月均下载量', max: 80000 } });
    const table = wrapper.get('table');
    expect(table.classes()).toContain('sr-only');
    expect(table.get('caption').text()).toBe('月均下载量');
    expect(table.findAll('tbody tr').map(row => row.text())).toEqual([
      '近 30 天17,394',
      '近 90 天月均3.4万',
      '近一年月均4.0万'
    ]);
    expect(wrapper.findAll('[style*="width"]')[2]?.attributes('style')).toContain('width: 50%');
  });
});

describe('OnStackBar', () => {
  it('Renders series colors and legends and hides zero values', () => {
    const wrapper = mount(OnStackBar, {
      props: {
        caption: '存储',
        items: [
          { key: 'app', label: 'App', value: 12.1, display: '12.1 GB' },
          { key: 'cli', label: '命令行', value: 4.2, display: '4.2 GB' },
          { key: 'cache', label: '下载缓存', value: 2.3, display: '2.3 GB' },
          { key: 'empty', label: '空', value: 0 }
        ]
      }
    });
    const colors = wrapper
      .findAll('.h-12px.w-full')
      .map(segment => segment.classes().find(name => name.startsWith('bg-')));
    expect(colors).toEqual(['bg-chart-series1', 'bg-chart-series2', 'bg-chart-series3']);
    expect(wrapper.findAll('li').map(item => item.text())).toEqual([
      'App12.1 GB65%',
      '命令行4.2 GB23%',
      '下载缓存2.3 GB12%'
    ]);
    expect(wrapper.get('table caption').text()).toBe('存储');
  });

  it('Preserves Russian percentage spacing', () => {
    const wrapper = mount(OnStackBar, {
      props: { caption: 'Storage', items: [{ key: 'app', label: 'App', value: 1 }] },
      global: withLocale('ru-RU')
    });
    expect(wrapper.get('li').text()).toContain('100\u00A0%');
    expect(wrapper.findAll('tbody td')[1]?.text()).toBe('100\u00A0%');
  });

  it('Merges the third and subsequent entries into Other', () => {
    const wrapper = mount(OnStackBar, {
      props: {
        caption: '分类',
        format: (value: number) => `${value} 个`,
        items: [
          { key: 'a', label: '开发', value: 50 },
          { key: 'b', label: '效率', value: 30 },
          { key: 'c', label: '设计', value: 15 },
          { key: 'd', label: '影音', value: 5 }
        ]
      },
      global: withLocale('en-US')
    });
    expect(wrapper.findAll('li').map(item => item.text())).toEqual(['开发50 个50%', '效率30 个30%', 'Other20 个20%']);
  });
});

describe('formatPercent', () => {
  it('Formats ratios per locale without grouping in English and Simplified Chinese', () => {
    expect(formatPercent(0.008, { digits: 1 })).toBe('0.8%');
    expect(formatPercent(12.5)).toBe('1250%');
    expect(formatPercent(12.5, { locale: 'de-DE' })).toBe('1.250\u00A0%');
    expect(formatPercent(0.5, { locale: 'zh-CN' })).toBe('50%');
  });
});

describe('OnTable', () => {
  interface Item {
    id: string;
    name: string;
    version: string;
    size: number;
    dependency?: boolean;
  }

  const rows: Item[] = [
    { id: 'fernlight-studio', name: 'Fernlight Studio', version: '4.92.1', size: 2100 },
    { id: 'hexwalk', name: 'hexwalk', version: '26.9.0', size: 98 },
    { id: 'libtide', name: 'libtide', version: '10.49', size: 4.2, dependency: true }
  ];

  const columns = [
    { key: 'name', label: '名称', sortable: true },
    { key: 'version', label: '版本', mono: true },
    { key: 'size', label: '大小', numeric: true, sortable: true },
    { key: 'more', label: '操作', hideLabel: true, width: '44px' }
  ];

  it('Renders table headers and sorting', async () => {
    const wrapper = mount(OnTable<Item>, {
      props: { columns, rows, rowKey: (row: Item) => row.id, sort: { key: 'size', order: 'desc' }, caption: '资料库' }
    });
    const headers = wrapper.findAll('th');
    expect(headers.map(header => header.attributes('aria-sort'))).toEqual(['none', undefined, 'descending', undefined]);
    expect(headers[2]?.text()).toContain('▾');
    expect(headers[2]?.classes()).toContain('text-right');
    expect(headers[3]?.get('.sr-only').text()).toBe('操作');
    expect(headers[3]?.attributes('style')).toContain('width: 44px');
    expect(wrapper.get('caption').text()).toBe('资料库');

    await headers[2]?.get('button').trigger('click');
    await headers[0]?.get('button').trigger('click');
    await wrapper.setProps({ sort: { key: 'size', order: 'asc' } });
    expect(wrapper.findAll('th')[2]?.text()).toContain('▴');
    await wrapper.findAll('th')[2]?.get('button').trigger('click');
    expect(wrapper.emitted('update:sort')).toEqual([
      [{ key: 'size', order: 'asc' }],
      [{ key: 'name', order: 'asc' }],
      [{ key: 'size', order: 'desc' }]
    ]);
    expect(headers[0]?.get('button').attributes('aria-label')).toBe('按名称排序');
  });

  it('Renders values, monospace numbers, selection, deemphasis, slots, and row clicks', async () => {
    const wrapper = mount(OnTable<Item>, {
      props: {
        columns,
        rows,
        rowKey: (row: Item) => row.id,
        selectedKey: 'hexwalk',
        dimmed: (row: Item) => Boolean(row.dependency),
        cellValue: (row: Item, key: string) =>
          key === 'size' ? `${row.size} MB` : (row as unknown as Record<string, unknown>)[key]
      },
      slots: { 'cell-more': ({ row }: { row: Item }) => h('button', { type: 'button' }, `更多 ${row.name}`) }
    });
    const bodyRows = wrapper.findAll('tbody tr');
    expect(bodyRows).toHaveLength(3);
    const cells = bodyRows[0]?.findAll('td') ?? [];
    expect(cells.map(cell => cell.text())).toEqual(['Fernlight Studio', '4.92.1', '2100 MB', '更多 Fernlight Studio']);
    expect(cells[0]?.classes()).not.toContain('border-t');
    expect(cells[1]?.classes()).toContain('font-mono');
    expect(cells[2]?.classes()).toContain('tabular-nums');
    expect(bodyRows[1]?.findAll('td')[0]?.classes()).toContain('bg-surface-card-alt');
    expect(bodyRows[1]?.findAll('td')[0]?.classes()).toContain('border-t');
    expect(bodyRows[2]?.findAll('td')[0]?.classes()).toContain('opacity-55');
    await bodyRows[1]?.trigger('click');
    expect(wrapper.emitted('rowClick')?.[0]).toEqual(['hexwalk', rows[1]]);
  });

  it('Renders only visible rows above 200 rows when height is set and keeps the header sticky', async () => {
    const many = Array.from({ length: 500 }, (_, index) => ({
      id: `item-${index}`,
      name: `item ${index}`,
      version: '1.0',
      size: index
    }));
    const wrapper = mount(OnTable<Item>, {
      props: { columns, rows: many, rowKey: (row: Item) => row.id, height: 440 }
    });
    expect(wrapper.get('th').classes()).toContain('sticky');
    const dataRows = () => wrapper.findAll('tbody tr').filter(row => row.attributes('aria-hidden') === undefined);
    expect(dataRows().length).toBeLessThan(40);
    const scroller = wrapper.get('table').element.parentElement as HTMLElement;
    scroller.scrollTop = 44 * 300;
    await wrapper.get('table').element.parentElement?.dispatchEvent(new Event('scroll'));
    await wrapper.vm.$nextTick();
    expect(dataRows().some(row => row.text().includes('item 300'))).toBe(true);
    const spacer = wrapper.findAll('tbody tr[aria-hidden="true"] td')[0];
    expect(spacer?.attributes('style')).toContain(`height: ${(300 - 10) * 44}px`);
  });
});

// These interaction fixtures explicitly exercise the Chinese UI.
testConfig.global.provide = { ...testConfig.global.provide, [fixtureLocaleKey as symbol]: localeRef('zh-CN') };
