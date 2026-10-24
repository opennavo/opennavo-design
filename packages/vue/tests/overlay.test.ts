import { config as testConfig } from '@vue/test-utils';
import { ref as localeRef } from 'vue';
import { ON_UI_LOCALE as fixtureLocaleKey } from '../src/composables/locale';
import { mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { nextTick } from 'vue';
import OnCommandPalette from '../src/components/OnCommandPalette.vue';
import type { OnCommandGroup } from '../src/components/OnCommandPalette.vue';
import OnConfirm from '../src/components/OnConfirm.vue';
import OnMenu from '../src/components/OnMenu.vue';
import OnModal from '../src/components/OnModal.vue';
import OnSheet from '../src/components/OnSheet.vue';
import OnToastRegion from '../src/components/OnToastRegion.vue';
import { moveFocus, usingKeyboard } from '../src/composables/overlay';
import { createToastQueue } from '../src/composables/toast';
import { withLocale } from './helpers';

const mounted: VueWrapper[] = [];

function track<T extends VueWrapper>(wrapper: T): T {
  mounted.push(wrapper);
  return wrapper;
}

afterEach(() => {
  for (const wrapper of mounted.splice(0)) wrapper.unmount();
  document.body.innerHTML = '';
});

/** Wait for overlay mounting/focus transfer, which occurs after nextTick. */
async function settle() {
  await nextTick();
  await nextTick();
}

const dialog = () => document.body.querySelector<HTMLElement>('[role="dialog"], [role="alertdialog"]');
const key = (target: EventTarget | null | undefined, init: KeyboardEventInit) =>
  target?.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, cancelable: true, ...init }));

describe('OnModal', () => {
  it('Renders only when open, moves focus inside, labels the title and description, and locks scrolling', async () => {
    const opener = document.createElement('button');
    document.body.append(opener);
    opener.focus();
    const wrapper = track(
      mount(OnModal, {
        props: { open: false, title: '反馈问题', description: '我们会在 3 个工作日内回复。' },
        slots: { default: '<input id="field" />' },
        attachTo: document.body
      })
    );
    expect(dialog()).toBeNull();

    await wrapper.setProps({ open: true });
    await settle();
    const panel = dialog();
    expect(panel?.getAttribute('aria-modal')).toBe('true');
    const title = document.getElementById(panel?.getAttribute('aria-labelledby') ?? '');
    expect(title?.textContent).toBe('反馈问题');
    expect(document.getElementById(panel?.getAttribute('aria-describedby') ?? '')?.textContent?.trim()).toBe(
      '我们会在 3 个工作日内回复。'
    );
    expect(panel?.className).toContain('max-w-560px');
    // First focusable element is the top-right Close button.
    expect(document.activeElement?.getAttribute('aria-label')).toBe('关闭');
    expect(document.documentElement.style.overflow).toBe('hidden');

    await wrapper.setProps({ open: false });
    await settle();
    expect(dialog()).toBeNull();
    expect(document.activeElement).toBe(opener);
    expect(document.documentElement.style.overflow).toBe('');
  });

  it('Closes with Escape, the close button, or a press and release on the backdrop', async () => {
    const wrapper = track(mount(OnModal, { props: { open: true, title: '设置' }, attachTo: document.body }));
    await settle();
    key(dialog(), { key: 'Escape' });
    expect(wrapper.emitted('update:open')?.[0]).toEqual([false]);
    expect(wrapper.emitted('close')).toHaveLength(1);

    (document.body.querySelector('[aria-label="关闭"]') as HTMLElement).click();
    expect(wrapper.emitted('close')).toHaveLength(2);

    const backdrop = dialog()?.parentElement as HTMLElement;
    backdrop.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(wrapper.emitted('close')).toHaveLength(3);
    // Pressing inside and releasing on the backdrop, as when selecting text, must not close.
    dialog()?.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(wrapper.emitted('close')).toHaveLength(3);
  });

  it('Ignores Escape and backdrop clicks when not dismissible and traps Tab inside the panel', async () => {
    const wrapper = track(
      mount(OnModal, {
        props: { open: true, title: '导入', dismissible: false, initialFocus: '#first' },
        slots: { default: '<input id="first" /><button id="last">好</button>' },
        attachTo: document.body
      })
    );
    await settle();
    expect(document.activeElement?.id).toBe('first');
    key(dialog(), { key: 'Escape' });
    const backdrop = dialog()?.parentElement as HTMLElement;
    backdrop.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
    backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(wrapper.emitted('close')).toBeUndefined();

    const last = document.getElementById('last') as HTMLElement;
    last.focus();
    key(last, { key: 'Tab' });
    expect(document.activeElement?.getAttribute('aria-label')).toBe('关闭');
    key(document.activeElement, { key: 'Tab', shiftKey: true });
    expect(document.activeElement).toBe(last);
  });
});

describe('OnConfirm', () => {
  it('For ordinary confirmation, focuses confirm, delegates confirmation, and closes on cancel', async () => {
    const wrapper = track(
      mount(OnConfirm, {
        props: { open: true, title: '安装 Quillwisp？', description: '来自网页的安装请求。' },
        attachTo: document.body
      })
    );
    await settle();
    expect(dialog()?.getAttribute('role')).toBe('alertdialog');
    expect(document.activeElement?.textContent?.trim()).toBe('确认');
    (document.activeElement as HTMLElement).click();
    expect(wrapper.emitted('confirm')).toHaveLength(1);
    expect(wrapper.emitted('update:open')).toBeUndefined();

    (document.body.querySelector('[data-on-cancel]') as HTMLElement).click();
    expect(wrapper.emitted('update:open')?.[0]).toEqual([false]);
    expect(wrapper.emitted('cancel')).toHaveLength(1);
    key(dialog(), { key: 'Escape' });
    expect(wrapper.emitted('cancel')).toHaveLength(2);
  });

  it('For destructive confirmation, uses a red button, focuses cancel, ignores Escape, and disables cancel while running', async () => {
    const wrapper = track(
      mount(OnConfirm, {
        props: { open: true, title: '删除 Fernlight Studio？', tone: 'danger', confirmLabel: '删除' },
        attachTo: document.body,
        global: withLocale('en-US')
      })
    );
    await settle();
    expect(document.activeElement?.textContent?.trim()).toBe('Cancel');
    const confirm = document.body.querySelector('[data-on-confirm]') as HTMLElement;
    expect(confirm.className).toContain('text-status-danger');
    expect(confirm.textContent?.trim()).toBe('删除');
    key(dialog(), { key: 'Escape' });
    expect(wrapper.emitted('cancel')).toBeUndefined();

    await wrapper.setProps({ loading: true });
    expect(confirm.getAttribute('aria-busy')).toBe('true');
    expect((document.body.querySelector('[data-on-cancel]') as HTMLButtonElement).disabled).toBe(true);
  });
});

describe('OnSheet', () => {
  it('Slides in from the right at width 420 and retains the scroll lock until the last stacked dialog closes', async () => {
    const sheet = track(
      mount(OnSheet, {
        props: { open: true, title: '任务日志' },
        slots: { default: '日志全文' },
        attachTo: document.body
      })
    );
    await settle();
    const panel = dialog();
    expect(panel?.className).toContain('w-420px');
    expect(panel?.textContent).toContain('日志全文');

    const confirm = track(mount(OnConfirm, { props: { open: true, title: '取消任务？' }, attachTo: document.body }));
    await settle();
    expect(document.body.querySelectorAll('[aria-modal="true"]')).toHaveLength(2);
    await confirm.setProps({ open: false });
    await settle();
    expect(document.documentElement.style.overflow).toBe('hidden');

    (document.body.querySelector('[aria-label="关闭"]') as HTMLElement).click();
    expect(sheet.emitted('update:open')?.[0]).toEqual([false]);
    await sheet.setProps({ open: false });
    await settle();
    expect(document.documentElement.style.overflow).toBe('');
  });
});

describe('Focus ring after script focus', () => {
  const pointer = () => document.body.dispatchEvent(new Event('pointerdown', { bubbles: true }));

  it('Rings the first control only when the user opened the sheet by keyboard, not when the app or a pointer did', async () => {
    const calls: [string | null, FocusOptions | undefined][] = [];
    const original = HTMLElement.prototype.focus;
    const spy = vi.spyOn(HTMLElement.prototype, 'focus').mockImplementation(function (this: HTMLElement, options) {
      calls.push([this.getAttribute('aria-label'), options]);
      original.call(this, options);
    });
    const sheet = track(mount(OnSheet, { props: { open: false, title: '传感器' }, attachTo: document.body }));
    // WebKit rings script focus that no click in this document preceded, e.g. a sheet opened from the menu bar popover.
    pointer();
    await sheet.setProps({ open: true });
    await settle();
    expect(calls.at(-1)).toEqual(['关闭', { focusVisible: false }]);

    key(document.activeElement, { key: 'Escape' });
    await sheet.setProps({ open: false });
    await settle();
    await sheet.setProps({ open: true });
    await settle();
    expect(calls.at(-1)).toEqual(['关闭', undefined]);
    spy.mockRestore();
  });

  it('Leaves text fields showing focus however it arrives', () => {
    pointer();
    const input = document.createElement('input');
    const button = document.createElement('button');
    document.body.append(input, button);
    const inputFocus = vi.spyOn(input, 'focus');
    const buttonFocus = vi.spyOn(button, 'focus');
    moveFocus(input);
    moveFocus(button);
    expect(inputFocus).toHaveBeenCalledWith();
    expect(buttonFocus).toHaveBeenCalledWith({ focusVisible: false });
  });

  it('Treats shortcuts and bare modifiers as not navigating by keyboard', () => {
    pointer();
    key(document.body, { key: 'k', metaKey: true });
    key(document.body, { key: 'Shift', shiftKey: true });
    expect(usingKeyboard()).toBe(false);
    key(document.body, { key: 'Tab', shiftKey: true });
    expect(usingKeyboard()).toBe(true);
  });
});

describe('OnToastRegion', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  // Use real TransitionGroup instead of the default test stub to assert the rendered ol.
  const global = { stubs: { 'transition-group': false } };

  const items = [
    { id: 'a', tone: 'success' as const, title: '已安装 Quillwisp' },
    {
      id: 'b',
      tone: 'danger' as const,
      title: '更新失败',
      description: 'Fernlight Studio 需要管理员权限。',
      actionLabel: '查看'
    },
    { id: 'c', title: '已复制', duration: 0 },
    { id: 'd', title: '已加入收藏' }
  ];

  it('Shows at most three notifications, hides older ones first, and announces failures immediately', () => {
    const wrapper = track(mount(OnToastRegion, { props: { items }, global }));
    expect(wrapper.get('ol').attributes('aria-live')).toBe('polite');
    expect(wrapper.findAll('li').map(item => item.text())).toEqual([
      expect.stringContaining('更新失败'),
      expect.stringContaining('已复制'),
      expect.stringContaining('已加入收藏')
    ]);
    expect(wrapper.get('[role="alert"]').text()).toContain('需要管理员权限');
  });

  it('Dismisses after four seconds by default, pauses on hover, resumes the remaining time, and persists with duration zero', async () => {
    const wrapper = track(mount(OnToastRegion, { props: { items: items.slice(2) }, global }));
    vi.advanceTimersByTime(3000);
    await wrapper.get('ol').trigger('mouseenter');
    vi.advanceTimersByTime(5000);
    expect(wrapper.emitted('dismiss')).toBeUndefined();
    await wrapper.get('ol').trigger('mouseleave');
    vi.advanceTimersByTime(999);
    expect(wrapper.emitted('dismiss')).toBeUndefined();
    vi.advanceTimersByTime(1);
    expect(wrapper.emitted('dismiss')).toEqual([['d']]);
    vi.advanceTimersByTime(60_000);
    expect(wrapper.emitted('dismiss')).toHaveLength(1);
  });

  it('Supports action and close buttons', async () => {
    const wrapper = track(mount(OnToastRegion, { props: { items: [items[1] as (typeof items)[1]] }, global }));
    await wrapper.get('[role="alert"] button').trigger('click');
    expect(wrapper.emitted('action')).toEqual([['b']]);
    expect(wrapper.emitted('dismiss')).toEqual([['b']]);
    await wrapper.get('button[aria-label="关闭通知"]').trigger('click');
    expect(wrapper.emitted('dismiss')).toHaveLength(2);
  });

  it('Replaces notifications with the same ID in createToastQueue', () => {
    const queue = createToastQueue();
    const first = queue.push({ title: '正在更新 Fernlight Studio', id: 'job-1' });
    queue.push({ title: '已复制' });
    queue.push({ title: '已更新 Fernlight Studio', id: 'job-1', tone: 'success' });
    expect(first).toBe('job-1');
    expect(queue.items.value.map(item => item.title)).toEqual(['已复制', '已更新 Fernlight Studio']);
    queue.dismiss('job-1');
    expect(queue.items.value).toHaveLength(1);
    queue.clear();
    expect(queue.items.value).toEqual([]);
  });
});

describe('OnMenu', () => {
  const items = [
    { key: 'reveal', label: '在访达中显示', icon: 'search' },
    { key: 'copy', label: '复制链接', icon: 'arrow-up-right', shortcut: '⌘C' },
    { key: 'pin', label: '固定版本', icon: 'check', disabled: true },
    { key: 'delete', label: '删除', icon: 'x', danger: true, separator: true }
  ];

  const menu = () => document.body.querySelector<HTMLElement>('[role="menu"]');

  it('Renders choice items as radio items with the current one checked, still reachable by keyboard', async () => {
    const choices = [
      { key: 'system', label: '跟随系统', checked: true },
      { key: 'light', label: '浅色', checked: false },
      { key: 'dark', label: '深色', checked: false }
    ];
    const wrapper = track(mount(OnMenu, { props: { items: choices, label: '外观' }, attachTo: document.body }));
    await wrapper.get('button').trigger('pointerdown');
    await wrapper.get('button').trigger('click');
    await nextTick();
    const radios = Array.from(menu()?.querySelectorAll<HTMLElement>('[role="menuitemradio"]') ?? []);
    expect(radios.map(item => item.getAttribute('aria-checked'))).toEqual(['true', 'false', 'false']);
    expect(radios[0]?.querySelector('svg, .on-icon, [aria-hidden]')).not.toBeNull();
    key(document.activeElement, { key: 'ArrowDown' });
    key(document.activeElement, { key: 'ArrowDown' });
    expect(document.activeElement?.textContent).toContain('浅色');
    (document.activeElement as HTMLElement).click();
    await nextTick();
    expect(wrapper.emitted('select')).toEqual([['light']]);
  });

  it('Opens on click without preselecting an item, cycles past disabled items, then closes and restores focus after selection', async () => {
    const wrapper = track(mount(OnMenu, { props: { items }, attachTo: document.body }));
    const trigger = wrapper.get('button');
    expect(trigger.attributes('aria-label')).toBe('更多操作');
    await trigger.trigger('pointerdown');
    await trigger.trigger('click');
    await nextTick();
    expect(trigger.attributes('aria-expanded')).toBe('true');
    expect(menu()?.querySelectorAll('[role="separator"]')).toHaveLength(1);
    // Like native menus, a pointer open highlights nothing until hover or arrows.
    expect(document.activeElement).toBe(menu());

    key(document.activeElement, { key: 'ArrowDown' });
    expect(document.activeElement?.textContent).toContain('在访达中显示');
    key(document.activeElement, { key: 'ArrowDown' });
    expect(document.activeElement?.textContent).toContain('复制链接');
    key(document.activeElement, { key: 'ArrowDown' });
    expect(document.activeElement?.textContent).toContain('删除');
    expect((document.activeElement as HTMLElement).className).toContain('text-status-danger');
    key(document.activeElement, { key: 'ArrowDown' });
    expect(document.activeElement?.textContent).toContain('在访达中显示');
    key(document.activeElement, { key: 'End' });
    expect(document.activeElement?.textContent).toContain('删除');

    (document.activeElement as HTMLElement).click();
    await nextTick();
    expect(wrapper.emitted('select')).toEqual([['delete']]);
    expect(menu()).toBeNull();
    expect(document.activeElement).toBe(trigger.element);
  });

  it('Keyboard opens select the first item', async () => {
    const wrapper = track(mount(OnMenu, { props: { items }, attachTo: document.body }));
    const trigger = wrapper.get('button');
    await trigger.trigger('keydown', { key: 'Enter' });
    await trigger.trigger('click');
    await nextTick();
    expect(document.activeElement?.textContent).toContain('在访达中显示');
  });

  it('Focuses menu items only after positioning makes the menu visible, since browsers cannot focus visibility-hidden elements', async () => {
    const states: string[] = [];
    const original = HTMLElement.prototype.focus;
    const spy = vi.spyOn(HTMLElement.prototype, 'focus').mockImplementation(function (this: HTMLElement, options) {
      if (this.getAttribute('role') === 'menuitem')
        states.push(this.closest<HTMLElement>('[role="menu"]')?.style.visibility ?? '');
      original.call(this, options);
    });
    const wrapper = track(mount(OnMenu, { props: { items }, attachTo: document.body }));
    await wrapper.get('button').trigger('keydown', { key: 'ArrowDown' });
    await settle();
    spy.mockRestore();
    expect(states).toEqual(['']);
  });

  it('Opens on ArrowUp at the last item and closes on Escape or outside clicks', async () => {
    const wrapper = track(mount(OnMenu, { props: { items, label: 'More' }, attachTo: document.body }));
    const trigger = wrapper.get('button');
    await trigger.trigger('keydown', { key: 'ArrowUp' });
    await nextTick();
    expect(document.activeElement?.textContent).toContain('删除');
    key(document.activeElement, { key: 'Escape' });
    await nextTick();
    expect(menu()).toBeNull();
    expect(document.activeElement).toBe(trigger.element);

    await trigger.trigger('click');
    await nextTick();
    expect(menu()).not.toBeNull();
    document.body.dispatchEvent(new Event('pointerdown', { bubbles: true }));
    await nextTick();
    expect(menu()).toBeNull();
    expect(wrapper.emitted('select')).toBeUndefined();
  });
});

describe('OnCommandPalette', () => {
  const groups: OnCommandGroup[] = [
    {
      key: 'apps',
      label: '应用',
      items: [
        {
          key: 'fernlight-studio',
          label: 'Fernlight Studio',
          description: 'App · 版本 4.92.1',
          image: '/icons/fernlight.svg',
          badge: '可更新',
          hint: '↵ 打开'
        },
        { key: 'fernlight-cli', label: 'fernlight', icon: 'search', hint: '⌘↵ 安装' }
      ]
    },
    {
      key: 'actions',
      label: '操作',
      items: [{ key: 'update', label: '更新 Fernlight Studio', icon: 'refresh-cw', iconTone: 'accent' }]
    }
  ];

  const input = () => document.body.querySelector<HTMLInputElement>('input[role="combobox"]');
  const selected = () => document.body.querySelector('[role="option"][aria-selected="true"]')?.textContent ?? '';
  const options = () => Array.from(document.body.querySelectorAll<HTMLElement>('[role="option"]'));

  it('Focuses the input on open, cycles across groups with arrows, and emits update:query on input', async () => {
    const wrapper = track(
      mount(OnCommandPalette, { props: { open: true, query: 'fern', groups }, attachTo: document.body })
    );
    await settle();
    expect(document.activeElement).toBe(input());
    expect(dialog()?.getAttribute('aria-label')).toBe('命令面板');
    expect(document.body.textContent).toContain('应用');
    expect(selected()).toContain('Fernlight Studio');
    expect(input()?.getAttribute('aria-activedescendant')).toBe(
      document.body.querySelector('[role="option"][aria-selected="true"]')?.id
    );

    key(input(), { key: 'ArrowDown' });
    key(input(), { key: 'ArrowDown' });
    await nextTick();
    expect(selected()).toContain('更新 Fernlight Studio');
    key(input(), { key: 'ArrowDown' });
    await nextTick();
    expect(selected()).toContain('Fernlight Studio');
    key(input(), { key: 'ArrowUp' });
    await nextTick();
    expect(selected()).toContain('更新 Fernlight Studio');

    const field = input() as HTMLInputElement;
    field.value = 'fern c';
    field.dispatchEvent(new Event('input'));
    expect(wrapper.emitted('update:query')?.[0]).toEqual(['fern c']);
  });

  it('Selects with Enter, adds meta with Command-Enter, copies with Command-C when no text is selected, and closes with Escape', async () => {
    const wrapper = track(
      mount(OnCommandPalette, { props: { open: true, query: '', groups }, attachTo: document.body })
    );
    await settle();
    key(input(), { key: 'Enter' });
    key(input(), { key: 'Enter', metaKey: true });
    key(input(), { key: 'Enter', ctrlKey: true, isComposing: true });
    const selects = wrapper.emitted('select') ?? [];
    expect(selects.map(([item, options]) => [(item as { key: string }).key, options])).toEqual([
      ['fernlight-studio', { meta: false }],
      ['fernlight-studio', { meta: true }]
    ]);

    key(input(), { key: 'c', metaKey: true });
    expect(wrapper.emitted('copy')).toHaveLength(1);
    const field = input() as HTMLInputElement;
    field.value = 'fern';
    field.setSelectionRange(0, 4);
    key(field, { key: 'c', metaKey: true });
    expect(wrapper.emitted('copy')).toHaveLength(1);

    key(input(), { key: 'Escape' });
    expect(wrapper.emitted('update:open')?.[0]).toEqual([false]);
  });

  it('Activates on mouse movement, selects on click, and shows empty or searching state without results', async () => {
    const wrapper = track(
      mount(OnCommandPalette, { props: { open: true, query: 'x', groups }, attachTo: document.body })
    );
    await settle();
    options()[1]?.dispatchEvent(new MouseEvent('mousemove', { bubbles: true }));
    await nextTick();
    expect(selected()).toContain('fernlight');
    options()[1]?.click();
    expect(wrapper.emitted('select')?.[0]?.[0]).toMatchObject({ key: 'fernlight-cli' });

    await wrapper.setProps({ groups: [] });
    expect(document.body.querySelector('[role="listbox"] [role="status"]')?.textContent?.trim()).toBe('没有匹配的结果');
    await wrapper.setProps({ loading: true });
    expect(document.body.querySelector('[role="listbox"] [role="status"]')?.textContent?.trim()).toBe('正在搜索…');
  });

  it('Shows image items with a decorative image that falls back to the icon, and icon items in an aligned slot', async () => {
    const withFallback: OnCommandGroup[] = [
      {
        key: 'mixed',
        label: '结果',
        items: [
          { key: 'image', label: 'Quillwisp', image: '/icons/quillwisp.svg', icon: 'inbox' },
          { key: 'icon', label: '设置', icon: 'search', iconTone: 'accent' },
          { key: 'broken', label: 'Tidelark', image: '/icons/missing.svg' },
          { key: 'plain', label: '纯文本' }
        ]
      }
    ];
    track(mount(OnCommandPalette, { props: { open: true, query: '', groups: withFallback }, attachTo: document.body }));
    await settle();
    const [image, icon, broken, plain] = options();
    const img = image?.querySelector('img');
    expect(img?.getAttribute('src')).toBe('/icons/quillwisp.svg');
    expect(img?.getAttribute('alt')).toBe('');
    expect(image?.querySelector('svg')).toBeNull();
    expect(icon?.querySelector('img')).toBeNull();
    expect(icon?.querySelector('.w-26px svg')?.getAttribute('class')).toContain('text-brand-salmon');
    expect(plain?.querySelector('img, svg, .w-26px')).toBeNull();

    // A failed image falls back to the icon, or keeps the column empty without one.
    img?.dispatchEvent(new Event('error'));
    broken?.querySelector('img')?.dispatchEvent(new Event('error'));
    await nextTick();
    const [imageAfter, , brokenAfter] = options();
    expect(imageAfter?.querySelector('img')).toBeNull();
    expect(imageAfter?.querySelector('.w-26px svg')).not.toBeNull();
    expect(brokenAfter?.querySelector('img')).toBeNull();
    expect(brokenAfter?.querySelector('.w-26px')?.childElementCount).toBe(0);
  });

  it('Shows select and open hints by default and the host hints when given', async () => {
    const wrapper = track(
      mount(OnCommandPalette, {
        props: { open: true, query: '', groups },
        attachTo: document.body,
        global: withLocale('en-US')
      })
    );
    await settle();
    const footer = () =>
      Array.from(dialog()?.lastElementChild?.querySelectorAll('span') ?? []).map(hint => hint.textContent);
    expect(footer()).toEqual(['↑↓ Select', '↵ Open']);
    await wrapper.setProps({ hints: ['↑↓ Select', '↵ Open', '⌘↵ Install', '⌘C Copy link'] });
    expect(footer()).toEqual(['↑↓ Select', '↵ Open', '⌘↵ Install', '⌘C Copy link']);
  });
});

describe('OnMenu custom triggers', () => {
  it('Provides attrs to the trigger slot with the same behavior as the default button after binding', async () => {
    const wrapper = mount(OnMenu, {
      props: { items: [{ key: 'copy', label: '复制链接' }] },
      slots: {
        trigger: `<template #trigger="{ attrs, open }"><button type="button" class="get" v-bind="attrs">获取{{ open ? '▴' : '▾' }}</button></template>`
      },
      attachTo: document.body
    });
    mounted.push(wrapper);
    const trigger = wrapper.get('button.get');
    expect(trigger.attributes('aria-haspopup')).toBe('menu');
    await trigger.trigger('keydown', { key: 'Enter' });
    await trigger.trigger('click');
    await settle();
    expect(trigger.attributes('aria-expanded')).toBe('true');
    expect(trigger.text()).toBe('获取▴');
    expect(document.activeElement?.textContent).toContain('复制链接');
    (document.activeElement as HTMLElement).click();
    await nextTick();
    expect(wrapper.emitted('select')).toEqual([['copy']]);
    expect(document.activeElement).toBe(trigger.element);
  });
});

// These interaction fixtures explicitly exercise the Chinese UI.
testConfig.global.provide = { ...testConfig.global.provide, [fixtureLocaleKey as symbol]: localeRef('zh-CN') };
