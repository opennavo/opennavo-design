import { mount, type VueWrapper } from '@vue/test-utils';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { defineComponent, h, nextTick, reactive } from 'vue';
import OnButton from '../src/components/OnButton.vue';
import OnConfirm from '../src/components/OnConfirm.vue';
import OnDialogShell from '../src/components/OnDialogShell.vue';
import OnLogViewer from '../src/components/OnLogViewer.vue';
import { focusableIn } from '../src/composables/overlay';
import OnMenu from '../src/components/OnMenu.vue';
import OnTable from '../src/components/OnTable.vue';
import OnToastRegion from '../src/components/OnToastRegion.vue';

const mounted: VueWrapper[] = [];
function track<T extends VueWrapper>(wrapper: T): T {
  mounted.push(wrapper);
  return wrapper;
}
async function settle() {
  await nextTick();
  await nextTick();
}
afterEach(() => {
  for (const wrapper of mounted.splice(0)) wrapper.unmount();
  document.body.innerHTML = '';
  vi.useRealTimers();
});

describe('Interaction regressions', () => {
  it.each(['disabled', 'loading'] as const)(
    'Removes router navigation while %s and restores it afterward',
    async state => {
      const navigate = vi.fn((event: MouseEvent) => event.preventDefault());
      const RouterLink = defineComponent({
        props: ['to'],
        setup:
          (props, { slots }) =>
          () =>
            h('a', { href: props.to, onClick: navigate }, slots.default?.())
      });
      const wrapper = track(mount(OnButton, { props: { href: '/next', linkAs: RouterLink } }));
      await wrapper.setProps({ [state]: true });
      expect(wrapper.findComponent(RouterLink).exists()).toBe(false);
      expect(wrapper.get('a').attributes('href')).toBeUndefined();
      await wrapper.get('a').trigger('click');
      expect(navigate).not.toHaveBeenCalled();
      expect(wrapper.emitted('click')).toBeUndefined();
      await wrapper.setProps({ [state]: false });
      await wrapper.get('a').trigger('click');
      expect(navigate).toHaveBeenCalledOnce();
    }
  );

  it('Places a teleported menu above its owning dialog and selects items', async () => {
    const select = vi.fn();
    track(
      mount(OnDialogShell, {
        props: { open: true },
        slots: { default: () => h(OnMenu, { items: [{ key: 'copy', label: 'Copy' }], onSelect: select }) },
        attachTo: document.body
      })
    );
    await settle();
    const dialog = document.querySelector<HTMLElement>('.on-dialog')!;
    dialog.style.zIndex = '450';
    document.querySelector<HTMLButtonElement>('[aria-haspopup="menu"]')!.click();
    await settle();
    const menu = document.querySelector<HTMLElement>('[role="menu"]')!;
    expect(menu.style.zIndex).toBe('451');
    menu.querySelector<HTMLButtonElement>('[role="menuitem"]')!.click();
    expect(select).toHaveBeenCalledWith('copy');
  });

  it('Clamps the scroller and renders rows immediately after filtering and resizing', async () => {
    const rows = Array.from({ length: 10000 }, (_, id) => ({ id: String(id) }));
    const wrapper = track(
      mount(OnTable<{ id: string }>, {
        props: { rows, columns: [{ key: 'id', label: 'ID' }], rowKey: row => row.id, height: 440 }
      })
    );
    const scroller = wrapper.get('.overflow-auto');
    scroller.element.scrollTop = 44 * 9000;
    await scroller.trigger('scroll');
    await wrapper.setProps({ rows: rows.slice(0, 300) });
    expect(scroller.element.scrollTop).toBeLessThanOrEqual(300 * 44 + 38 - 440);
    expect(wrapper.findAll('tbody tr:not([aria-hidden])').length).toBeGreaterThan(0);
    expect(wrapper.text()).toContain('299');
    await wrapper.setProps({ height: 880 });
    expect(scroller.element.scrollTop).toBeLessThanOrEqual(300 * 44 + 38 - 880);
    await wrapper.setProps({ rows: [] });
    expect(scroller.element.scrollTop).toBe(0);
    await wrapper.setProps({ rows: rows.slice(0, 10) });
    expect(wrapper.findAll('tbody tr:not([aria-hidden])')).toHaveLength(10);
  });

  it.each([false, true])('Falls back from disabled confirm to a control or panel (loading=%s)', async loading => {
    const opener = document.createElement('button');
    document.body.append(opener);
    opener.focus();
    const wrapper = track(
      mount(OnConfirm, {
        props: { open: true, title: 'Confirm', confirmDisabled: true, loading },
        attachTo: document.body
      })
    );
    await settle();
    const panel = document.querySelector('[role="alertdialog"]')!;
    expect(document.activeElement).toBe(loading ? panel : panel.querySelector('[data-on-cancel]'));
    document.activeElement!.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(wrapper.emitted('update:open')).toEqual([[false]]);
  });

  it('Cancels a same-ID timer on in-place duration changes and rebuilds it while paused', async () => {
    vi.useFakeTimers();
    const items = reactive([{ id: 'job', title: 'Working', duration: 4000 }]);
    const wrapper = track(mount(OnToastRegion, { props: { items }, global: { stubs: { 'transition-group': false } } }));
    vi.advanceTimersByTime(3000);
    items[0]!.duration = 0;
    await nextTick();
    vi.advanceTimersByTime(10000);
    expect(wrapper.emitted('dismiss')).toBeUndefined();
    await wrapper.get('ol').trigger('mouseenter');
    items[0]!.duration = 2000;
    await nextTick();
    vi.advanceTimersByTime(10000);
    await wrapper.get('ol').trigger('mouseleave');
    vi.advanceTimersByTime(1000);
    items[0]!.duration = 3000;
    await nextTick();
    vi.advanceTimersByTime(2999);
    expect(wrapper.emitted('dismiss')).toBeUndefined();
    vi.advanceTimersByTime(1);
    expect(wrapper.emitted('dismiss')).toEqual([['job']]);
  });
});

describe('Focus and shrinking log regressions', () => {
  it('Ignores hidden and disabled descendants when trapping Tab in either direction', async () => {
    const wrapper = track(
      mount(OnDialogShell, {
        props: { open: true },
        attachTo: document.body,
        slots: {
          default: `<button id="first">First</button><button id="last">Last</button>
        <input type="hidden" tabindex="0"><button tabindex="-1">Skip</button>
        <div hidden><button>Hidden</button></div><div inert><button>Inert</button></div>
        <div style="display:none"><button>Display</button></div>
        <button style="visibility:hidden">Invisible</button>
        <fieldset disabled><input tabindex="0"></fieldset>
        <details><summary tabindex="-1">Summary</summary><button>Closed</button></details>`
        }
      })
    );
    await settle();
    const panel = document.querySelector<HTMLElement>('[role="dialog"]')!;
    expect(focusableIn(panel).map(element => element.id)).toEqual(['first', 'last']);
    const first = panel.querySelector<HTMLButtonElement>('#first')!;
    const last = panel.querySelector<HTMLButtonElement>('#last')!;
    last.focus();
    const tab = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
    last.dispatchEvent(tab);
    expect(tab.defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(first);
    first.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true }));
    expect(document.activeElement).toBe(last);
    last.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(wrapper.emitted('close')).toHaveLength(1);
  });

  it.each(['hover', 'focus'] as const)('Keeps timers paused when %s leaves first', async leavesFirst => {
    vi.useFakeTimers();
    const wrapper = track(
      mount(OnToastRegion, {
        props: { items: [{ id: 'job', title: 'Ready', actionLabel: 'Open', duration: 4000 }] },
        attachTo: document.body,
        global: { stubs: { 'transition-group': false } }
      })
    );
    const region = wrapper.get('ol');
    vi.advanceTimersByTime(1000);
    await region.trigger('mouseenter');
    const buttons = wrapper.findAll('button');
    (buttons[0]!.element as HTMLElement).focus();
    (buttons[1]!.element as HTMLElement).focus();
    if (leavesFirst === 'hover') await region.trigger('mouseleave');
    else (buttons[1]!.element as HTMLElement).blur();
    vi.advanceTimersByTime(10000);
    expect(wrapper.emitted('dismiss')).toBeUndefined();
    if (leavesFirst === 'hover') {
      expect(document.activeElement).toBe(buttons[1]!.element);
      (buttons[1]!.element as HTMLElement).blur();
    } else await region.trigger('mouseleave');
    vi.advanceTimersByTime(2999);
    expect(wrapper.emitted('dismiss')).toBeUndefined();
    vi.advanceTimersByTime(1);
    expect(wrapper.emitted('dismiss')).toEqual([['job']]);
  });

  it('Clamps logs after replacement, tail reduction, resizing, and clearing', async () => {
    const lines = Array.from({ length: 2000 }, (_, index) => `line ${index}`);
    const wrapper = track(mount(OnLogViewer, { props: { lines, height: 187 } }));
    const pre = wrapper.get('pre');
    pre.element.scrollTop = 18.7 * 1800;
    await pre.trigger('scroll');
    await wrapper.setProps({ lines: lines.slice(0, 300) });
    expect(pre.element.scrollTop).toBeLessThanOrEqual(300 * 18.7 + 22 - 187);
    expect(wrapper.text()).toContain('line 299');
    await wrapper.setProps({ tail: 250, height: 374 });
    expect(pre.element.scrollTop).toBeLessThanOrEqual(250 * 18.7 + 22 - 374);
    expect(wrapper.text()).toContain('line 299');
    await wrapper.setProps({ lines: [] });
    expect(pre.element.scrollTop).toBe(0);
    await wrapper.setProps({ lines: ['restored'] });
    expect(wrapper.text()).toBe('restored');
  });
});

describe('Dialog reopening, radio groups, and log limits', () => {
  it('Keeps a reopened dialog mounted when an earlier leave callback runs', async () => {
    let afterLeave: (() => void) | undefined;
    const TransitionStub = defineComponent({
      inheritAttrs: false,
      setup(_, { attrs, slots }) {
        afterLeave = attrs.onAfterLeave as () => void;
        return () => slots.default?.();
      }
    });
    const previousOverflow = document.documentElement.style.overflow;
    const wrapper = track(
      mount(OnDialogShell, {
        props: { open: true },
        attachTo: document.body,
        slots: { default: '<button>Inside</button>' },
        global: { stubs: { transition: TransitionStub } }
      })
    );
    await settle();
    const oldAfterLeave = afterLeave!;
    expect(oldAfterLeave).toBeTypeOf('function');
    await wrapper.setProps({ open: false });
    await wrapper.setProps({ open: true });
    oldAfterLeave();
    await settle();
    expect(document.querySelector('[role="dialog"]')).not.toBeNull();
    expect(document.documentElement.style.overflow).toBe('hidden');
    expect(document.querySelector('[role="dialog"]')!.contains(document.activeElement)).toBe(true);
    await wrapper.setProps({ open: false });
    oldAfterLeave();
    await settle();
    expect(document.querySelector('[role="dialog"]')).toBeNull();
    expect(document.documentElement.style.overflow).toBe(previousOverflow);
  });

  it.each([0, 1])('Traps Tab at the selected radio (index %s) and retains Escape', async checked => {
    const wrapper = track(
      mount(OnDialogShell, {
        props: { open: true },
        attachTo: document.body,
        slots: { default: '<button>First</button><input type="radio" name="choice"><input type="radio" name="choice">' }
      })
    );
    await settle();
    const panel = document.querySelector<HTMLElement>('[role="dialog"]')!;
    const radios = panel.querySelectorAll<HTMLInputElement>('input');
    const selected = radios[checked]!;
    selected.checked = true;
    selected.focus();
    expect(focusableIn(panel)).toEqual([panel.querySelector('button'), selected]);
    const tab = new KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
    selected.dispatchEvent(tab);
    expect(tab.defaultPrevented).toBe(true);
    expect(document.activeElement).toBe(panel.querySelector('button'));
    document.activeElement!.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true }));
    expect(document.activeElement).toBe(selected);
    selected.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    expect(wrapper.emitted('close')).toHaveLength(1);
  });

  it('Keeps same-name radios in distinct forms independent and handles an unselected group', () => {
    const container = document.createElement('div');
    container.innerHTML = `<form><input type="radio" name="choice" checked><input type="radio" name="choice"></form>
      <form><input type="radio" name="choice" checked></form>
      <input type="radio" name="empty"><input type="radio" name="empty">
      <input type="radio"><input type="radio">`;
    document.body.append(container);
    const radios = container.querySelectorAll<HTMLInputElement>('input');
    expect(focusableIn(container)).toEqual([radios[0], radios[2], radios[3], radios[5], radios[6]]);
    radios[4]!.focus();
    expect(focusableIn(container)).toEqual([radios[0], radios[2], radios[4], radios[5], radios[6]]);
  });

  it.each([0, -1, 0.5, 10, 5000])('Honors the log limit for tail=%s without virtualization', tail => {
    const lines = Array.from({ length: 5000 }, (_, index) => `line ${index}`);
    const wrapper = track(mount(OnLogViewer, { props: { lines, tail } }));
    const count = Math.max(0, Math.min(Math.floor(tail), 2000));
    expect(wrapper.findAll('pre > span')).toHaveLength(count);
    if (count) expect(wrapper.findAll('pre > span').at(-1)!.text()).toBe('line 4999');
  });
});
