import { config as testConfig } from '@vue/test-utils';
import { ref as localeRef } from 'vue';
import { ON_UI_LOCALE as fixtureLocaleKey } from '../src/composables/locale';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import OnBreadcrumb from '../src/components/OnBreadcrumb.vue';
import OnCodeText from '../src/components/OnCodeText.vue';
import OnEmpty from '../src/components/OnEmpty.vue';
import OnErrorState from '../src/components/OnErrorState.vue';
import OnHighlightText from '../src/components/OnHighlightText.vue';
import OnKeyValueList from '../src/components/OnKeyValueList.vue';
import OnOffline from '../src/components/OnOffline.vue';
import OnPageHeader from '../src/components/OnPageHeader.vue';
import OnPagination from '../src/components/OnPagination.vue';
import OnSkeleton from '../src/components/OnSkeleton.vue';
import { codeParts, codeWordsHtml, wordPieces } from '../src/utils/codeText';
import { parseHighlight } from '../src/utils/highlight';
import { paginationRange } from '../src/utils/pagination';
import { RouterLinkStub, withLocale } from './helpers';

describe('Content helpers', () => {
  it('Highlights only double-asterisk emphasis', () => {
    expect(parseHighlight('近 30 天下载 **14,326** 次，**排名第 10**。')).toEqual([
      { text: '近 30 天下载 ', strong: false },
      { text: '14,326', strong: true },
      { text: ' 次，', strong: false },
      { text: '排名第 10', strong: true },
      { text: '。', strong: false }
    ]);
    expect(parseHighlight('没有标记 *斜体* **未闭合')).toEqual([{ text: '没有标记 *斜体* **未闭合', strong: false }]);
    expect(parseHighlight('')).toEqual([]);
  });

  it('Shows at most seven pagination items including first, last, and current', () => {
    const view = (current: number, total: number) =>
      paginationRange(current, total).map(item => (item.type === 'page' ? item.page : '…'));
    expect(view(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(view(1, 20)).toEqual([1, 2, 3, 4, 5, '…', 20]);
    expect(view(5, 20)).toEqual([1, '…', 4, 5, 6, '…', 20]);
    expect(view(17, 20)).toEqual([1, '…', 16, 17, 18, 19, 20]);
    expect(view(99, 20)).toEqual([1, '…', 16, 17, 18, 19, 20]);
    expect(view(0, 0)).toEqual([1]);
  });

  it('Splits code text into words and long words after separators', () => {
    expect(codeParts('pkg upgrade  --all\n  tool')).toEqual(['pkg', ' ', 'upgrade', '  ', '--all', '\n', '  tool']);
    expect(codeParts('  "a",\n\n    "b"\n')).toEqual(['  "a",', '\n\n', '    "b"', '\n']);
    expect(wordPieces('my-long-project-name')).toEqual(['my-long-project-name']);
    expect(wordPieces('~/Library/com.example.plist')).toEqual(['~/', 'Library/', 'com.', 'example.', 'plist']);
    expect(wordPieces('--filter=a.b')).toEqual(['--filter=', 'a.', 'b']);
  });

  it('Builds inline-code HTML with escaped word pieces for Markdown renderers', () => {
    const escape = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
    expect(codeWordsHtml('run <a>/b', escape)).toBe(
      '<span class="on-code-word">run</span> <span class="on-code-word">&lt;a&gt;/<wbr>b</span>'
    );
  });
});

describe('OnHighlightText', () => {
  it('Uses primary emphasis', () => {
    const wrapper = mount(OnHighlightText, { props: { text: '原生界面，**GPU 加速渲染**。', as: 'p' } });
    expect(wrapper.element.tagName).toBe('P');
    expect(wrapper.get('.text-ink-primary').text()).toBe('GPU 加速渲染');
    expect(wrapper.text()).toBe('原生界面，GPU 加速渲染。');
  });
});

describe('OnKeyValueList', () => {
  it('Uses monospace definition values and external links', () => {
    const wrapper = mount(OnKeyValueList, {
      props: {
        items: [
          { key: 'id', label: 'ID', value: 'org.example.quillwisp', mono: true },
          { key: 'homepage', label: '主页', value: 'quillwisp.example', href: 'https://quillwisp.example/' },
          { key: 'auto', label: '自动更新', value: '应用自带' }
        ]
      }
    });
    expect(wrapper.findAll('dt').map(dt => dt.text())).toEqual(['ID', '主页', '自动更新']);
    expect(wrapper.findAll('dd')[0]?.classes()).toContain('font-mono');
    const link = wrapper.get('a');
    expect(link.attributes('target')).toBe('_blank');
    expect(link.attributes('rel')).toBe('noopener noreferrer');
  });
});

describe('OnCodeText', () => {
  it('Keeps words whole and the text unchanged', () => {
    const text = 'pkg upgrade --all --dry-run my-long-project-name';
    const wrapper = mount({
      components: { OnCodeText },
      template: `<code><OnCodeText :text="text" /></code>`,
      data: () => ({ text })
    });
    expect(wrapper.findAll('.on-code-word').map(word => word.text())).toEqual(text.split(' '));
    expect(wrapper.element.textContent).toBe(text);
    const path = mount({
      components: { OnCodeText },
      template: `<pre><OnCodeText text="~/Library/a b.plist\n  x" /></pre>`
    });
    expect(path.element.textContent).toBe('~/Library/a b.plist\n  x');
    expect(path.findAll('wbr')).toHaveLength(3);
  });
});

describe('OnBreadcrumb', () => {
  it('Marks the last breadcrumb as current', () => {
    const wrapper = mount(OnBreadcrumb, {
      props: { items: [{ label: '发现', href: '/' }, { label: '开发' }, { label: 'Vector Sketch' }] }
    });
    expect(wrapper.get('nav').attributes('aria-label')).toBe('面包屑');
    expect(wrapper.get('a').attributes('href')).toBe('/');
    expect(wrapper.get('[aria-current="page"]').text()).toBe('Vector Sketch');
    expect(wrapper.findAll('svg')).toHaveLength(2);
    const routed = mount(OnBreadcrumb, {
      props: { items: [{ label: '发现', href: '/discover' }, { label: '详情' }], linkAs: RouterLinkStub }
    });
    expect(routed.get('a').attributes('href')).toBe('#/discover');
  });
});

describe('OnPagination', () => {
  it('Hides pagination for a single page', () => {
    expect(
      mount(OnPagination, { props: { page: 1, pageCount: 1 } })
        .find('nav')
        .exists()
    ).toBe(false);
  });

  it('Disables page buttons at boundaries', async () => {
    const wrapper = mount(OnPagination, { props: { page: 1, pageCount: 20 } });
    expect(wrapper.text()).toContain('…');
    expect(wrapper.get('[aria-current="page"]').text()).toBe('1');
    expect(wrapper.get('[aria-label="第 5 页"]').text()).toBe('5');
    await wrapper.get('[aria-current="page"]').trigger('click');
    await wrapper.get('[aria-disabled="true"]').trigger('click');
    expect(wrapper.emitted('update:page')).toBeUndefined();
    await wrapper.get('[aria-label="第 3 页"]').trigger('click');
    expect(wrapper.emitted('update:page')?.[0]).toEqual([3]);
    const next = wrapper.findAll('button').at(-1);
    await next?.trigger('click');
    expect(wrapper.emitted('update:page')?.[1]).toEqual([2]);
  });

  it('Builds page query links', async () => {
    const wrapper = mount(OnPagination, {
      props: { page: 20, pageCount: 20, hrefFor: (page: number) => `/apps?page=${page}` }
    });
    expect(wrapper.get('[aria-label="第 19 页"]').attributes('href')).toBe('/apps?page=19');
    expect(wrapper.findAll('[aria-disabled="true"]')).toHaveLength(1);
    const routed = mount(OnPagination, {
      props: { page: 2, pageCount: 3, hrefFor: (page: number) => `/apps?page=${page}`, linkAs: RouterLinkStub },
      global: withLocale('en-US')
    });
    expect(routed.get('[aria-label="Page 3"]').attributes('href')).toBe('#/apps?page=3');
    await routed.get('[aria-label="Page 1"]').trigger('click');
    expect(routed.emitted('update:page')?.[0]).toEqual([1]);
  });
});

describe('Empty states', () => {
  it('Renders OnEmpty parts', () => {
    const wrapper = mount(OnEmpty, {
      props: { title: '没有找到「quilwisp」', description: '换个关键词试试。' },
      slots: { actions: '<button type="button">反馈</button>' }
    });
    expect(wrapper.get('h3').text()).toBe('没有找到「quilwisp」');
    expect(wrapper.find('svg').exists()).toBe(true);
    expect(wrapper.get('button').text()).toBe('反馈');
    expect(
      mount(OnEmpty, { props: { title: 'x' } })
        .find('p')
        .exists()
    ).toBe(false);
  });

  it('Provides default retry behavior and request IDs in OnError', async () => {
    const wrapper = mount(OnErrorState, { props: { requestId: 'req-42' } });
    expect(wrapper.attributes('role')).toBe('alert');
    expect(wrapper.text()).toContain('加载失败');
    expect(wrapper.text()).toContain('req-42');
    await wrapper.get('button').trigger('click');
    expect(wrapper.emitted('retry')).toHaveLength(1);
    const plain = mount(OnErrorState, { props: { retryable: false, title: '无法连接', description: '稍后重试' } });
    expect(plain.find('button').exists()).toBe(false);
    expect(plain.text()).toContain('无法连接');
  });

  it('Provides OnOffline defaults', () => {
    const wrapper = mount(OnOffline, {
      global: withLocale('en-US'),
      slots: { actions: '<button type="button">Retry</button>' }
    });
    expect(wrapper.attributes('role')).toBe('status');
    expect(wrapper.text()).toContain('Offline');
    expect(wrapper.find('button').exists()).toBe(true);
  });
});

describe('OnPageHeader', () => {
  it('Renders the h1, subtitle and an actions area only when actions are passed', () => {
    const wrapper = mount(OnPageHeader, {
      props: { title: '资料库', subtitle: '共 218 项' },
      slots: { actions: '<button type="button">导入</button>' }
    });
    expect(wrapper.get('h1').text()).toBe('资料库');
    expect(wrapper.get('p').text()).toBe('共 218 项');
    expect(wrapper.get('button').text()).toBe('导入');
    expect(mount(OnPageHeader, { props: { title: 'x' } }).findAll('header > div')).toHaveLength(1);
  });
});

describe('OnSkeleton', () => {
  it('Renders multiline skeletons with a 60-percent final line and radius', () => {
    const wrapper = mount(OnSkeleton, { props: { lines: 3, radius: 'tiny', height: '12px' } });
    const rows = wrapper.findAll('.on-skeleton');
    expect(rows).toHaveLength(3);
    expect(rows[2]?.attributes('style')).toContain('width: 60%');
    expect(rows[0]?.classes()).toContain('rounded-tiny');
    expect(wrapper.attributes('aria-hidden')).toBe('true');
    expect(
      mount(OnSkeleton, { props: { radius: 'app-icon', width: '44px', height: '44px' } })
        .find('.rounded-app-icon')
        .exists()
    ).toBe(true);
  });
});

// These interaction fixtures explicitly exercise the Chinese UI.
testConfig.global.provide = { ...testConfig.global.provide, [fixtureLocaleKey as symbol]: localeRef('zh-CN') };
