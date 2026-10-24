import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import { defineComponent, h } from 'vue';
import OnAppShell from '../src/components/OnAppShell.vue';
import OnNavItem from '../src/components/OnNavItem.vue';
import OnRailPanel from '../src/components/OnRailPanel.vue';
import OnRailSection from '../src/components/OnRailSection.vue';
import OnSectionHeader from '../src/components/OnSectionHeader.vue';
import OnSidebar from '../src/components/OnSidebar.vue';
import OnToolbar from '../src/components/OnToolbar.vue';
import { RouterLinkStub } from './helpers';

// App shells and navigation: presentation only; the host chooses link behavior through linkAs.

describe('OnNavItem', () => {
  it('Marks the selected item with aria-current and a selected background', () => {
    const wrapper = mount(OnNavItem, {
      props: { icon: 'inbox', active: true, href: '#/inbox' },
      slots: { default: '收件箱' }
    });
    expect(wrapper.element.tagName).toBe('A');
    expect(wrapper.attributes('aria-current')).toBe('page');
    expect(wrapper.classes()).toContain('bg-component-nav-active');
    expect(wrapper.find('svg').exists()).toBe(true);
  });

  it('Displays counts and badges and renders a button without a link', () => {
    const counted = mount(OnNavItem, { props: { count: 218 }, slots: { default: '资料库' } });
    expect(counted.element.tagName).toBe('BUTTON');
    expect(counted.text()).toBe('资料库218');
    expect(counted.attributes('aria-current')).toBeUndefined();
    const badged = mount(OnNavItem, {
      props: { count: 3, badge: 6, badgeLabel: '6 个可用更新' },
      slots: { default: '更新' }
    });
    expect(badged.get('[aria-label="6 个可用更新"]').text()).toBe('6');
    const zero = mount(OnNavItem, { props: { badge: 0 }, slots: { default: '更新' } });
    expect(zero.find('[aria-label]').exists()).toBe(false);
  });

  it('Shows an attention dot named by badgeLabel, in place of count and meta', () => {
    const item = mount(OnNavItem, {
      props: { dot: true, meta: '34 GB', badgeLabel: '后台扫描仍在进行' },
      slots: { default: '存储' }
    });
    expect(item.text()).toBe('存储');
    expect(item.get('[role="img"]').attributes('aria-label')).toBe('后台扫描仍在进行');
    const unnamed = mount(OnNavItem, { props: { dot: true }, slots: { default: '存储' } });
    expect(unnamed.find('[role="img"]').exists()).toBe(false);
    expect(unnamed.find('[aria-hidden="true"]').exists()).toBe(true);
  });

  it('Shows meta text only when there is no count or badge', () => {
    expect(mount(OnNavItem, { props: { meta: '34 GB' }, slots: { default: '存储' } }).text()).toBe('存储34 GB');
    expect(mount(OnNavItem, { props: { count: 2, meta: '34 GB' }, slots: { default: '存储' } }).text()).toBe('存储2');
  });

  it('Accepts a router link component', () => {
    // Like RouterLink, the root creates href itself; undefined fallthrough attributes would overwrite it.
    const Link = defineComponent({
      props: { to: { type: String, required: true } },
      setup:
        (props, { slots }) =>
        () =>
          h('a', { href: `#${props.to}` }, slots.default?.())
    });
    const wrapper = mount(OnNavItem, { props: { as: Link, to: '/updates' }, slots: { default: '更新' } });
    expect(wrapper.get('a').attributes('href')).toBe('#/updates');
  });
});

describe('OnAppShell', () => {
  it('In container mode, scrolls the main area independently and keeps the right panel persistent or opens it as an overlay', () => {
    const docked = mount(OnAppShell, {
      props: { hasRail: true, railDocked: true },
      slots: { default: () => h('p', '内容'), rail: () => h('aside', { class: 'rail' }, '右栏') }
    });
    expect(docked.get('main').classes()).toContain('overflow-y-auto');
    expect(docked.get('.rail').element.parentElement?.className).toContain('w-288px');

    const overlay = mount(OnAppShell, {
      props: { hasRail: true, railDocked: false, railOpen: true },
      slots: { rail: () => h('aside', { class: 'rail' }) }
    });
    expect(overlay.get('.rail').element.parentElement?.className).toContain('shadow-popover');
    const closed = mount(OnAppShell, {
      props: { hasRail: true, railDocked: false, railOpen: false },
      slots: { rail: () => h('aside', { class: 'rail' }) }
    });
    expect(closed.find('.rail').exists()).toBe(false);
  });

  it('In document mode, places the mobile menu and footer after the main area and right panel and renders the panel once', () => {
    const wrapper = mount(OnAppShell, {
      props: { scroll: 'document', hasRail: true },
      slots: {
        compactBar: () => h('nav', { class: 'compact' }),
        default: () => h('p', { class: 'page' }),
        rail: () => h('aside', { class: 'rail' }),
        footer: () => h('footer', { class: 'site-footer' })
      }
    });
    expect(wrapper.get('.compact').element.parentElement?.className).toContain('md:hidden');
    expect(wrapper.findAll('.rail')).toHaveLength(1);
    expect(wrapper.get('.rail').element.parentElement?.className).toContain('xl:sticky');
    const html = wrapper.html();
    expect(html.indexOf('page')).toBeLessThan(html.indexOf('rail'));
    expect(html.indexOf('rail')).toBeLessThan(html.indexOf('site-footer'));
  });
});

describe('OnSidebar and OnToolbar', () => {
  const groups = [
    {
      key: 'browse',
      label: '浏览',
      items: [
        { key: 'discover', label: '发现', href: '/discover', active: true },
        { key: 'updates', label: '更新', href: '/updates', badge: 4, badgeLabel: '4 个更新' }
      ]
    }
  ];

  it('Renders grouped navigation with linkAs, aria-current, counts, and badges', () => {
    const wrapper = mount(OnSidebar, {
      props: {
        label: '主导航',
        linkAs: RouterLinkStub,
        groups,
        footerItems: [{ key: 'settings', label: '设置', href: '/settings' }]
      },
      slots: { top: () => h('div', { class: 'top-card' }) }
    });
    const links = wrapper.findAll('a');
    expect(links.map(link => link.attributes('href'))).toEqual(['#/discover', '#/updates', '#/settings']);
    expect(links[0]?.attributes('aria-current')).toBe('page');
    expect(wrapper.text()).toContain('4');
    expect(wrapper.find('.top-card').exists()).toBe(true);
    expect(wrapper.find('[data-tauri-drag-region]').exists()).toBe(false);
  });

  it('Takes the brand from its slot or a plain-text brandName, and ships no logo of its own', () => {
    const slotted = mount(OnSidebar, {
      props: { label: '主导航', groups, brandName: 'Ignored' },
      slots: { brand: () => h('span', { class: 'app-mark' }, 'Acme') }
    });
    expect(slotted.get('.app-mark').text()).toBe('Acme');
    expect(slotted.text()).not.toContain('Ignored');

    const named = mount(OnSidebar, { props: { label: '主导航', groups, brandName: 'Acme Notes' } });
    expect(named.text()).toContain('Acme Notes');
    expect(named.find('svg').exists()).toBe(false);

    // Without either, the brand row is left out instead of reserving empty space.
    const bare = mount(OnSidebar, { props: { label: '主导航', groups, dragRegion: true } });
    expect(bare.find('.pb-18px').exists()).toBe(false);
    expect(bare.find('[data-tauri-drag-region]').exists()).toBe(true);
  });

  it('Emits search from the toolbar search box and makes the entire desktop toolbar draggable', async () => {
    const wrapper = mount(OnToolbar, { props: { searchLabel: '搜索', searchShortcut: '⌘K', dragRegion: true } });
    expect(wrapper.attributes('data-tauri-drag-region')).toBe('');
    expect(wrapper.get('button').attributes('aria-keyshortcuts')).toBe('Meta+K');
    await wrapper.get('button').trigger('click');
    expect(wrapper.emitted('search')).toHaveLength(1);
    expect(wrapper.get('kbd').text()).toBe('⌘K');
  });

  it('Uses a top border on narrow web rails and a left border at xl and above', () => {
    const wrapper = mount(OnRailPanel, { props: { responsive: true } });
    expect(wrapper.classes()).toContain('border-t');
    expect(wrapper.classes()).toContain('xl:border-l');
    expect(mount(OnRailPanel).classes()).toContain('border-l');
  });

  it('Gives rail sections a heading and optional subtitle', () => {
    const wrapper = mount(OnRailSection, { props: { title: '概览', subtitle: '本周' }, slots: { default: '内容' } });
    expect(wrapper.get('h2').text()).toBe('概览');
    expect(wrapper.get('p').text()).toBe('本周');
    expect(wrapper.text()).toContain('内容');
  });
});

describe('Headings hold only their titles', () => {
  it('Puts a section header’s hint beside its h2, not inside it, and links the optional trailing action', () => {
    const wrapper = mount(OnSectionHeader, {
      props: { title: '热门', hint: '近 30 天', moreLabel: '查看全部', moreHref: '/popular', linkAs: RouterLinkStub }
    });
    expect(wrapper.get('h2').text()).toBe('热门');
    expect(wrapper.get('p').text()).toBe('近 30 天');
    expect(wrapper.get('a').attributes('href')).toBe('#/popular');
    expect(
      mount(OnSectionHeader, { props: { title: '热门', moreLabel: '查看全部' } })
        .find('a')
        .exists()
    ).toBe(false);
  });
});
