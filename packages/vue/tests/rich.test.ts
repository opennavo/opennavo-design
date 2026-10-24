import { config as testConfig } from '@vue/test-utils';
import { ref as localeRef } from 'vue';
import { ON_UI_LOCALE as fixtureLocaleKey } from '../src/composables/locale';
import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, it } from 'vitest';
import { h, nextTick } from 'vue';
import OnFeatureHero from '../src/components/OnFeatureHero.vue';
import OnMarkdownView from '../src/components/OnMarkdownView.vue';
import OnTopNav from '../src/components/OnTopNav.vue';
import { heroGlowGradient } from '../src/utils/glow';
import { RouterLinkStub, withLocale } from './helpers';

describe('heroGlowGradient', () => {
  it('Derives color stops from the default glow proportions and returns undefined for invalid colors', () => {
    expect(heroGlowGradient('#5B5BD6')).toBe(
      'radial-gradient(circle, rgba(206, 206, 243, 0.95) 0%, rgba(135, 135, 225, 0.78) 14%, rgba(91, 91, 214, 0.5) 32%, rgba(68, 68, 161, 0.2) 52%, transparent 70%)'
    );
    expect(heroGlowGradient('red')).toBeUndefined();
    expect(heroGlowGradient(null)).toBeUndefined();
    expect(heroGlowGradient(undefined)).toBeUndefined();
  });
});

describe('OnMarkdownView', () => {
  it('Displays only supplied sanitized HTML and changes font size with size', () => {
    const wrapper = mount(OnMarkdownView, {
      props: { html: '<h2 class="on-md-heading-1">简介</h2><p>正文</p>', size: 'md' }
    });
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['on-markdown', 'text-14px']));
    expect(wrapper.get('h2').text()).toBe('简介');
    expect(wrapper.get('p').text()).toBe('正文');
    const small = mount(OnMarkdownView, { props: { html: '<p>x</p>' } });
    expect(small.classes()).toEqual(expect.arrayContaining(['max-w-[72ch]', 'text-body-sm']));
  });

  it('Reads article bodies across their column', () => {
    const wrapper = mount(OnMarkdownView, { props: { html: '<h2 id="pick">怎么选</h2>', size: 'article' } });
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['on-markdown', 'on-markdown-article']));
    expect(wrapper.classes()).not.toContain('max-w-[72ch]');
  });

  it('Styles slot content instead of an HTML string', () => {
    const wrapper = mount(OnMarkdownView, {
      props: { html: '<p class="ignored">x</p>' },
      slots: { default: () => [h('h3', '更新内容'), h('ul', [h('li', '更快的同步')])] }
    });
    expect(wrapper.classes()).toContain('on-markdown');
    expect(wrapper.get('h3').text()).toBe('更新内容');
    expect(wrapper.find('.ignored').exists()).toBe(false);
    expect(mount(OnMarkdownView).text()).toBe('');
  });
});

const floats = [
  { name: 'Orbit', src: '/orbit.svg' },
  { name: 'Prism', src: '/prism.svg' },
  { name: 'Wave', src: '/wave.svg' },
  { name: 'Grid', src: '/grid.svg' }
];

describe('OnFeatureHero', () => {
  it('Renders badges, titles, secondary lines, highlighted text, and at most three floating items', () => {
    const wrapper = mount(OnFeatureHero, {
      props: {
        badge: '本周精选',
        title: 'Quillwisp 2.0',
        subtitle: '笔记，本该这么快。',
        description: '原生界面。**近 30 天下载 14,326 次。**',
        floats
      },
      slots: {
        // mount() does not infer the generic item type from props, so the slot receives unknown items.
        float: ({ item, size, index }: { item: unknown; size: number; index: number }) =>
          h('img', {
            class: 'float-icon',
            src: (item as (typeof floats)[number]).src,
            width: size,
            height: size,
            'data-index': index
          })
      }
    });
    expect(wrapper.text()).toContain('本周精选');
    const heading = wrapper.get('h2');
    expect(heading.text()).toContain('Quillwisp 2.0');
    expect(heading.get('span').text()).toBe('笔记，本该这么快。');
    expect(wrapper.get('p span.font-500').text()).toBe('近 30 天下载 14,326 次。');
    const items = wrapper.findAll('.on-hero-float');
    expect(items).toHaveLength(3);
    expect(items.map(item => item.get('img').attributes('width'))).toEqual(['118', '54', '46']);
    expect(items.map(item => item.get('img').attributes('src'))).toEqual(['/orbit.svg', '/prism.svg', '/wave.svg']);
    expect(items[0]?.attributes('style')).toContain('rotate(-8deg)');
    // Hide the entire decorative layer from screen readers.
    expect(wrapper.get('.on-hero-stage').attributes('aria-hidden')).toBe('true');
  });

  it('Uses compact sizes for floating items and shows the badge decoration slot', () => {
    const wrapper = mount(OnFeatureHero, {
      props: { badge: '精选', title: 'Quillwisp', compact: true, floats },
      slots: {
        float: ({ size }: { size: number }) => h('span', { class: 'float', 'data-size': size }),
        'badge-decoration': () => h('svg', { class: 'star', viewBox: '0 0 10 10' })
      }
    });
    expect(wrapper.findAll('.float').map(item => item.attributes('data-size'))).toEqual(['64', '40', '32']);
    expect(wrapper.get('.star').element.parentElement?.getAttribute('aria-hidden')).toBe('true');
    expect(
      mount(OnFeatureHero, { props: { badge: '精选', title: 'x' } })
        .find('[aria-hidden="true"] svg.star')
        .exists()
    ).toBe(false);
  });

  it('Overrides the glow with glowColor, softened by the theme, and otherwise uses tokens', () => {
    const tinted = mount(OnFeatureHero, { props: { title: 'Tidelark', glowColor: '#3C96F5' } });
    const style = tinted.get('.on-hero-glow').attributes('style');
    expect(style).toContain('radial-gradient');
    expect(style).toContain('opacity(var(--on-effect-accent-glow-opacity))');
    const plain = mount(OnFeatureHero, { props: { title: 'Tidelark', glowColor: 'not-a-color' } });
    expect(plain.get('.on-hero-glow').attributes('style')).toBeUndefined();
  });

  it('Emits action from the primary button and renders detail links with linkAs', async () => {
    const wrapper = mount(OnFeatureHero, {
      props: { title: 'Quillwisp', detailHref: '/apps/quillwisp', linkAs: RouterLinkStub, responsive: true }
    });
    expect(wrapper.classes()).toContain('lg:h-360px');
    await wrapper.get('button').trigger('click');
    expect(wrapper.emitted('action')).toHaveLength(1);
    const detail = wrapper.get('a');
    expect(detail.attributes('href')).toBe('#/apps/quillwisp');
    expect(detail.text()).toBe('查看详情');

    const bare = mount(OnFeatureHero, { props: { title: 'Quillwisp', headingLevel: 3 }, global: withLocale('en-US') });
    expect(bare.find('a').exists()).toBe(false);
    expect(bare.get('h3').text()).toBe('Quillwisp');
    expect(bare.get('button').text()).toBe('Get started');
    expect(bare.get('button').find('svg').exists()).toBe(false);
    const withIcon = mount(OnFeatureHero, { props: { title: 'Quillwisp', actionIcon: 'download' } });
    expect(withIcon.get('button').find('svg').exists()).toBe(true);
    expect(bare.findAll('.on-hero-float')).toHaveLength(0);
  });
});

describe('OnTopNav', () => {
  const items = [
    { label: '发现', href: '/', active: true },
    { label: '分类', href: '/categories' },
    { label: '排行榜', href: '/rankings' }
  ];

  afterEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true });
    document.body.innerHTML = '';
  });

  it('Renders links with linkAs and marks the current page with aria-current', () => {
    const wrapper = mount(OnTopNav, {
      props: { items, brandName: 'Acme', downloadHref: '/download', linkAs: RouterLinkStub }
    });
    const nav = wrapper.get('nav');
    const links = nav.findAll('a');
    expect(links.map(link => link.attributes('href'))).toEqual(['#/', '#/categories', '#/rankings']);
    expect(links[0]?.attributes('aria-current')).toBe('page');
    expect(links[1]?.attributes('aria-current')).toBeUndefined();
    expect(wrapper.get('a[aria-label="Acme 首页"]').attributes('href')).toBe('#/');
    expect(
      wrapper.findAll('a').some(link => link.text() === '下载客户端' && link.attributes('href') === '#/download')
    ).toBe(true);
  });

  it('Puts the brand slot or brandName in the home link, named from brandName or homeLabel', () => {
    const slotted = mount(OnTopNav, {
      props: { items, brandName: 'Acme' },
      slots: { brand: () => h('svg', { class: 'acme-mark', viewBox: '0 0 10 10' }) },
      global: withLocale('en-US')
    });
    const home = slotted.get('a[aria-label="Acme home"]');
    expect(home.find('.acme-mark').exists()).toBe(true);
    expect(home.text()).toBe('');

    const named = mount(OnTopNav, { props: { items, brandName: 'Acme Notes', homeLabel: 'Back to start' } });
    expect(named.get('a[aria-label="Back to start"]').text()).toBe('Acme Notes');

    // With neither, the slot content names the link (for example an img alt); no stray label is invented.
    const unnamed = mount(OnTopNav, {
      props: { items, homeHref: '/start' },
      slots: { brand: () => h('img', { alt: 'Acme', src: '/acme.svg' }) }
    });
    const link = unnamed.findAll('a').find(anchor => anchor.attributes('href') === '/start');
    expect(link?.attributes('aria-label')).toBeUndefined();
    expect(link?.find('img').attributes('alt')).toBe('Acme');
    // The design system draws no mark of its own.
    expect(link?.find('svg').exists()).toBe(false);
    expect(mount(OnTopNav, { props: { items } }).findAll('a')[0]?.find('svg').exists()).toBe(false);
  });

  it('Hides the call to action without downloadHref and the search field when not searchable', () => {
    const wrapper = mount(OnTopNav, { props: { items, searchable: false } });
    expect(wrapper.text()).not.toContain('下载客户端');
    expect(wrapper.find('button[aria-haspopup="dialog"]').exists()).toBe(false);
    expect(wrapper.findAll('button').map(button => button.attributes('aria-controls'))).toHaveLength(1);
  });

  it('Emits search on search-box clicks and displays the shortcut', async () => {
    const wrapper = mount(OnTopNav, {
      props: { items, downloadHref: '/download', searchShortcut: '⌘K' },
      global: withLocale('en-US')
    });
    const trigger = wrapper.get('button[aria-haspopup="dialog"]');
    expect(trigger.text()).toContain('Search');
    expect(trigger.get('kbd').text()).toBe('⌘K');
    await trigger.trigger('click');
    await wrapper.get('button[aria-label="Search"]').trigger('click');
    expect(wrapper.emitted('search')).toHaveLength(2);
  });

  it('Toggles the hamburger menu and closes on link clicks or Escape', async () => {
    const wrapper = mount(OnTopNav, { props: { items, downloadHref: '/download' }, attachTo: document.body });
    const toggle = wrapper.get('button[aria-controls]');
    const panel = wrapper.get(`#${toggle.attributes('aria-controls')}`);
    expect(toggle.attributes('aria-expanded')).toBe('false');
    expect(panel.isVisible()).toBe(false);

    await toggle.trigger('click');
    expect(toggle.attributes('aria-expanded')).toBe('true');
    expect(toggle.attributes('aria-label')).toBe('关闭菜单');
    expect(panel.isVisible()).toBe(true);
    await panel.get('a').trigger('click');
    expect(panel.isVisible()).toBe(false);

    await toggle.trigger('click');
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await nextTick();
    expect(panel.isVisible()).toBe(false);
    expect(document.activeElement).toBe(toggle.element);
    wrapper.unmount();
  });

  it('Switches to a translucent blurred background after scrolling', async () => {
    const wrapper = mount(OnTopNav, { props: { items, downloadHref: '/download' } });
    expect(wrapper.classes()).toContain('bg-surface-page');
    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true });
    window.dispatchEvent(new Event('scroll'));
    await nextTick();
    expect(wrapper.classes()).toContain('on-top-nav-scrolled');
    wrapper.unmount();
  });
});

// These interaction fixtures explicitly exercise the Chinese UI.
testConfig.global.provide = { ...testConfig.global.provide, [fixtureLocaleKey as symbol]: localeRef('zh-CN') };
