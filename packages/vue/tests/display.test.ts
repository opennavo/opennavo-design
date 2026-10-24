import { mount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import OnAppIcon from '../src/components/OnAppIcon.vue';
import OnBadge from '../src/components/OnBadge.vue';
import OnCard from '../src/components/OnCard.vue';
import OnChip from '../src/components/OnChip.vue';
import OnIcon from '../src/components/OnIcon.vue';
import OnStatTile from '../src/components/OnStatTile.vue';
import { getIcon, registerIcons } from '../src/icons';
import { ICON_PALETTE, cliAbbreviation, darken, fnv1a32, iconColor, iconInitials } from '../src/utils/appIcon';

describe('OnIcon', () => {
  it('Renders built-in SVG icons synchronously and hides them from screen readers by default', () => {
    const wrapper = mount(OnIcon, { props: { name: 'search' } });
    const svg = wrapper.get('svg');
    expect(svg.attributes('aria-hidden')).toBe('true');
    expect(svg.attributes('width')).toBe('16');
    expect(svg.attributes('style')).toContain('--on-icon-stroke: 1.6');
  });

  it('Reads labeled icons as images and thickens strokes at small sizes', () => {
    const wrapper = mount(OnIcon, { props: { name: 'lucide:info', label: '说明', size: 12 } });
    const svg = wrapper.get('svg');
    expect(svg.attributes('role')).toBe('img');
    expect(svg.attributes('aria-label')).toBe('说明');
    expect(svg.attributes('style')).toContain('--on-icon-stroke: 2');
  });

  it('Renders server-compatible SVG using bundled data and a 24-unit viewport', () => {
    const svg = mount(OnIcon, { props: { name: 'lucide:search' } }).get('svg');
    expect(svg.attributes('viewBox')).toBe('0 0 24 24');
    expect(svg.element.innerHTML).toContain('stroke="currentColor"');
    expect(svg.element.childElementCount).toBeGreaterThan(0);
  });

  it('Renders empty SVG and warns in development for missing bundled icons', () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
    const svg = mount(OnIcon, { props: { name: 'lucide:definitely-missing' } }).get('svg');
    expect(svg.element.childElementCount).toBe(0);
    expect(warn).toHaveBeenCalledWith(expect.stringContaining('definitely-missing'));
    warn.mockRestore();
  });

  it('Ships the theme-switch icons', () => {
    expect(['sun', 'moon', 'sun-moon'].every(name => getIcon(name))).toBe(true);
  });

  it('Renders registered icon sets, by prefix or by Lucide name, with later sets winning', () => {
    const shapes = {
      prefix: 'shapes',
      width: 20,
      height: 20,
      icons: { dot: { body: '<circle cx="10" cy="10" r="4" fill="currentColor"/>' } },
      aliases: { point: { parent: 'dot' } }
    };
    registerIcons(shapes);
    registerIcons(shapes);
    const svg = mount(OnIcon, { props: { name: 'shapes:point' } }).get('svg');
    expect(svg.attributes('viewBox')).toBe('0 0 20 20');
    expect(svg.find('circle').exists()).toBe(true);

    expect(getIcon('lucide:compass')).toBeUndefined();
    registerIcons({ prefix: 'lucide', icons: { compass: { body: '<path d="M0 0h24"/>', width: 24, height: 24 } } });
    expect(getIcon('compass')?.body).toBe('<path d="M0 0h24"/>');
    // Bundled icons stay available next to a registered set with the same prefix.
    expect(getIcon('search')?.body).toContain('circle');
    expect(getIcon('nope:dot')).toBeUndefined();
  });
});

describe('OnChip', () => {
  it.each([
    ['neutral', 'bg-surface-chip'],
    ['success', 'bg-status-success-subtle'],
    ['warning', 'bg-status-warning-subtle'],
    ['danger', 'bg-status-danger-subtle'],
    ['info', 'bg-status-info-subtle'],
    ['accent', 'bg-accent-salmon-subtle'],
    ['coral', 'bg-accent-coral-subtle']
  ] as const)('%s', (tone, expected) => {
    expect(mount(OnChip, { props: { tone }, slots: { default: 'x' } }).classes()).toContain(expected);
  });

  it('Uses accent text tokens for coral chips so they read in both themes', () => {
    expect(mount(OnChip, { props: { tone: 'coral' }, slots: { default: '62%' } }).classes()).toContain(
      'text-ink-accent'
    );
  });

  it('Supports stroke styles, dots, icons, and sizes', () => {
    const outline = mount(OnChip, { props: { tone: 'outline' }, slots: { default: '机器翻译' } });
    expect(outline.classes()).toEqual(expect.arrayContaining(['bg-transparent', 'border-line-default']));
    const dangerOutline = mount(OnChip, {
      props: { tone: 'danger', outline: true, size: 'md' },
      slots: { default: '已停用' }
    });
    expect(dangerOutline.classes()).toEqual(
      expect.arrayContaining(['on-chip-tinted-border', 'text-status-danger', 'h-24px'])
    );
    const withDot = mount(OnChip, { props: { tone: 'success', dot: true, icon: 'check' }, slots: { default: '最新' } });
    expect(withDot.find('.rounded-full').exists()).toBe(true);
    expect(withDot.find('svg').exists()).toBe(true);
    expect(withDot.text()).toBe('最新');
  });
});

describe('OnBadge', () => {
  it('Caps count badges at 99+', () => {
    expect(mount(OnBadge, { props: { count: 6, label: '6 个可用更新' } }).attributes('aria-label')).toBe(
      '6 个可用更新'
    );
    expect(mount(OnBadge, { props: { count: 6 } }).text()).toBe('6');
    expect(mount(OnBadge, { props: { count: 120 } }).text()).toBe('99+');
    expect(mount(OnBadge, { props: { count: 12, max: 9 } }).text()).toBe('9+');
    expect(mount(OnBadge, { props: { count: -3 } }).text()).toBe('0');
  });

  it('Draws a decoration slot after text badges, hidden from screen readers, and no mark by default', () => {
    const wrapper = mount(OnBadge, {
      slots: { default: '本周精选', decoration: '<svg class="mark" viewBox="0 0 10 10"><circle r="4" /></svg>' }
    });
    expect(wrapper.classes()).toContain('bg-accent-salmon-subtle');
    expect(wrapper.text()).toBe('本周精选');
    expect(wrapper.get('.mark').element.parentElement?.getAttribute('aria-hidden')).toBe('true');
    const plain = mount(OnBadge, { slots: { default: '新版本' } });
    expect(plain.find('svg').exists()).toBe(false);
    expect(plain.find('[aria-hidden]').exists()).toBe(false);
  });
});

describe('OnCard', () => {
  it('Defaults to a noninteractive div', () => {
    const wrapper = mount(OnCard, { slots: { default: '内容' } });
    expect(wrapper.element.tagName).toBe('DIV');
    expect(wrapper.classes()).toEqual(expect.arrayContaining(['bg-surface-card', 'rounded-big', 'p-16px']));
    expect(wrapper.classes()).not.toContain('cursor-pointer');
  });

  it('Renders href as a link and supplies button type', () => {
    const link = mount(OnCard, { props: { href: '/collections/starter', interactive: true, padding: 'lg' } });
    expect(link.element.tagName).toBe('A');
    expect(link.attributes('href')).toBe('/collections/starter');
    expect(link.classes()).toEqual(expect.arrayContaining(['cursor-pointer', 'p-18px']));
    const button = mount(OnCard, { props: { as: 'button', padding: 'none' } });
    expect(button.attributes('type')).toBe('button');
    expect(button.classes()).toContain('p-0');
    expect(mount(OnCard, { props: { as: 'section', padding: 'sm' } }).classes()).toContain('p-14px');
  });
});

describe('OnStatTile', () => {
  it('Displays labels, values, units, descriptions, and changes', () => {
    const wrapper = mount(OnStatTile, {
      props: {
        label: '磁盘占用',
        value: '18.6',
        unit: 'GB',
        hint: '含缓存 2.3 GB',
        delta: { value: '12%', direction: 'down', good: true }
      }
    });
    expect(wrapper.text()).toContain('磁盘占用');
    expect(wrapper.text()).toContain('18.6GB');
    expect(wrapper.text()).toContain('含缓存 2.3 GB');
    expect(wrapper.text()).toContain('↓ 12%');
    expect(wrapper.find('.text-status-success').exists()).toBe(true);
    expect(wrapper.classes()).toContain('bg-surface-card');
  });

  it('Omits the card background at medium size and uses danger color for deterioration', () => {
    const wrapper = mount(OnStatTile, {
      props: {
        label: '近 30 天下载',
        value: '17,394',
        size: 'md',
        delta: { value: '3%', direction: 'up', good: false }
      }
    });
    expect(wrapper.classes()).not.toContain('bg-surface-card');
    expect(wrapper.find('.text-status-danger').text()).toBe('↑ 3%');
  });
});

describe('App tile helpers', () => {
  it('Hashes seeds into the palette, prefers valid accents, and darkens gradient ends', () => {
    expect(iconColor('quillwisp')).toBe(ICON_PALETTE[fnv1a32('quillwisp') % ICON_PALETTE.length]);
    expect(iconColor('quillwisp', '#3c96f5')).toBe('#3C96F5');
    expect(iconColor('quillwisp', 'blue')).toBe(iconColor('quillwisp'));
    expect(fnv1a32('')).toBe(0x811c9dc5);
    expect(darken('#FFFFFF')).toBe('#D1D1D1');
    expect(() => darken('red')).toThrow();
  });

  it('Derives initials and terminal abbreviations', () => {
    expect(iconInitials('Vector Sketch')).toBe('VS');
    expect(iconInitials('  quillwisp ')).toBe('Q');
    expect(iconInitials('拾光笔记')).toBe('拾');
    expect(iconInitials('—')).toBe('?');
    expect(cliAbbreviation('python@3.12')).toBe('py');
    expect(cliAbbreviation('Hex-Walk')).toBe('he');
    expect(cliAbbreviation('@@')).toBe('?');
  });
});

describe('OnAppIcon', () => {
  it('Lazy-loads icons and falls back to tiles after image failures', async () => {
    const wrapper = mount(OnAppIcon, { props: { name: 'Quillwisp', src: 'https://cdn.test/q.png' } });
    const img = wrapper.get('img');
    expect(img.attributes('loading')).toBe('lazy');
    await img.trigger('error');
    expect(wrapper.find('img').exists()).toBe(false);
    expect(wrapper.text()).toBe('Q');
    await wrapper.setProps({ src: 'https://cdn.test/q2.png' });
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('Falls back after mounting for SSR images that failed before hydration and retains successfully loaded images', async () => {
    const proto = HTMLImageElement.prototype;
    const original = {
      complete: Object.getOwnPropertyDescriptor(proto, 'complete'),
      naturalWidth: Object.getOwnPropertyDescriptor(proto, 'naturalWidth')
    };
    const stub = (complete: boolean, naturalWidth: number) => {
      Object.defineProperty(proto, 'complete', { configurable: true, get: () => complete });
      Object.defineProperty(proto, 'naturalWidth', { configurable: true, get: () => naturalWidth });
    };
    try {
      stub(true, 0);
      const broken = mount(OnAppIcon, { props: { name: 'Xylo', src: '/missing.png' } });
      await broken.vm.$nextTick();
      expect(broken.find('img').exists()).toBe(false);
      expect(broken.text()).toBe('X');

      stub(true, 128);
      const loaded = mount(OnAppIcon, { props: { name: 'Xylo', src: '/icon.png', priority: true } });
      await loaded.vm.$nextTick();
      expect(loaded.find('img').exists()).toBe(true);
      expect(loaded.get('img').attributes('loading')).toBe('eager');
      expect(loaded.get('img').attributes('fetchpriority')).toBe('high');
    } finally {
      for (const [key, descriptor] of Object.entries(original)) {
        if (descriptor) Object.defineProperty(proto, key, descriptor);
        else Reflect.deleteProperty(proto, key);
      }
    }
  });

  it('Uses an accent gradient, initials, and text at 42 percent of the side length for letter tiles', () => {
    const wrapper = mount(OnAppIcon, { props: { name: 'Vector Sketch', accent: '#3C96F5', size: 64 } });
    const tile = wrapper.get('.on-letter-tile');
    expect(tile.text()).toBe('VS');
    expect(tile.attributes('style')).toContain('font-size: 27px');
    expect(tile.attributes('style')).toContain('--on-tile-from: #3C96F5');
    expect(tile.attributes('style')).toContain(`--on-tile-to: ${darken('#3C96F5')}`);
    expect(wrapper.attributes('style')).toContain('width: 64px');
    expect(wrapper.attributes('aria-hidden')).toBe('true');
  });

  it('Colors letter tiles from the seed, defaulting to the name, and accepts custom initials', () => {
    const named = mount(OnAppIcon, { props: { name: 'Tidelark' } }).get('.on-letter-tile');
    expect(named.attributes('style')).toContain(`--on-tile-from: ${iconColor('Tidelark')}`);
    const seeded = mount(OnAppIcon, { props: { name: 'Tidelark', seed: 'org.example.tidelark', initials: 'TL' } });
    expect(seeded.get('.on-letter-tile').attributes('style')).toContain(
      `--on-tile-from: ${iconColor('org.example.tidelark')}`
    );
    expect(seeded.text()).toBe('TL');
  });

  it('Draws the terminal variant with an abbreviation and a hash-colored bar', () => {
    const wrapper = mount(OnAppIcon, {
      props: { variant: 'terminal', name: 'hexwalk', size: 40, label: 'hexwalk' }
    });
    expect(wrapper.find('.on-letter-tile').exists()).toBe(false);
    const tile = wrapper.get('.on-cli-tile');
    expect(tile.text()).toBe('he');
    expect(tile.attributes('style')).toContain('font-size: 12px');
    expect(wrapper.attributes('role')).toBe('img');
    expect(wrapper.attributes('aria-label')).toBe('hexwalk');
    const expected = ICON_PALETTE[fnv1a32('hexwalk') % ICON_PALETTE.length] ?? '';
    const [r, g, b] = [1, 3, 5].map(index => Number.parseInt(expected.slice(index, index + 2), 16));
    expect(wrapper.get('.on-cli-bar').attributes('style')).toContain(`rgb(${r}, ${g}, ${b})`);

    const custom = mount(OnAppIcon, {
      props: { variant: 'terminal', name: 'Hex Walk', seed: 'hexwalk@2', initials: 'hw' }
    });
    expect(custom.get('.on-cli-tile').text()).toBe('hw');
    const derived = mount(OnAppIcon, { props: { variant: 'terminal', name: 'Python', seed: 'python@3.12' } });
    expect(derived.get('.on-cli-tile').text()).toBe('py');
  });

  it('Shows a supplied image for terminal tiles too, falling back to the terminal tile', async () => {
    const wrapper = mount(OnAppIcon, { props: { variant: 'terminal', name: 'hexwalk', src: '/hexwalk.png' } });
    expect(wrapper.find('img').exists()).toBe(true);
    await wrapper.get('img').trigger('error');
    expect(wrapper.find('.on-cli-tile').exists()).toBe(true);
  });
});
