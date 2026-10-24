import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import OnButton from '../src/components/OnButton.vue';
import { RouterLinkStub } from './helpers';

describe('OnButton', () => {
  it('Defaults to secondary and medium and emits clicks', async () => {
    const wrapper = mount(OnButton, { slots: { default: '打开' } });
    const button = wrapper.get('button');
    expect(button.attributes('type')).toBe('button');
    expect(button.classes()).toEqual(expect.arrayContaining(['bg-button-secondary-bg', 'h-34px', 'rounded-default']));
    await button.trigger('click');
    expect(wrapper.emitted('click')).toHaveLength(1);
  });

  it.each([
    ['primary', 'bg-button-primary-bg'],
    ['accent', 'bg-button-accent-bg'],
    ['ghost', 'border-line-default'],
    ['danger', 'bg-status-danger-subtle']
  ] as const)('Variant %s', (variant, expected) => {
    const wrapper = mount(OnButton, { props: { variant }, slots: { default: 'x' } });
    expect(wrapper.get('button').classes()).toContain(expected);
  });

  it('Supports sizes, pill shape, and block layout', () => {
    const wrapper = mount(OnButton, { props: { size: 'xs', shape: 'round', block: true }, slots: { default: 'x' } });
    expect(wrapper.get('button').classes()).toEqual(expect.arrayContaining(['h-26px', 'rounded-full', 'w-full']));
  });

  it('Renders square icon buttons with accessible labels', () => {
    const wrapper = mount(OnButton, {
      props: { icon: 'lucide:check', iconOnly: true, ariaLabel: '完成', size: 'sm' },
      slots: { default: '不显示' }
    });
    const button = wrapper.get('button');
    expect(button.attributes('aria-label')).toBe('完成');
    expect(button.classes()).toEqual(expect.arrayContaining(['h-28px', 'w-28px']));
    expect(button.text()).toBe('');
    expect(wrapper.find('svg').exists()).toBe(true);
  });

  it('Disables buttons while loading', async () => {
    const loading = mount(OnButton, { props: { loading: true, variant: 'primary' }, slots: { default: '更新' } });
    expect(loading.get('button').attributes('disabled')).toBeDefined();
    expect(loading.get('button').attributes('aria-busy')).toBe('true');
    expect(loading.find('.on-spinner').exists()).toBe(true);
    expect(loading.get('button').classes()).toContain('bg-button-disabled-bg');
    expect(loading.get('button').classes()).not.toContain('bg-button-primary-bg');

    const disabled = mount(OnButton, { props: { disabled: true }, slots: { default: '删除' } });
    await disabled.get('button').trigger('click');
    expect(disabled.emitted('click')).toBeUndefined();
  });

  it('Renders href links and removes navigation when disabled', async () => {
    const link = mount(OnButton, {
      props: { href: '/apps/quillwisp', target: '_blank', rel: 'noopener' },
      slots: { default: '查看详情' }
    });
    const anchor = link.get('a');
    expect(anchor.attributes('href')).toBe('/apps/quillwisp');
    expect(anchor.attributes('target')).toBe('_blank');
    await anchor.trigger('click');
    expect(link.emitted('click')).toHaveLength(1);

    const disabled = mount(OnButton, { props: { href: '/x', disabled: true }, slots: { default: 'x' } });
    expect(disabled.get('a').attributes('href')).toBeUndefined();
    expect(disabled.get('a').attributes('aria-disabled')).toBe('true');
    await disabled.get('a').trigger('click');
    expect(disabled.emitted('click')).toBeUndefined();
  });

  it('Supports router destinations', () => {
    const routed = mount(OnButton, {
      props: { href: '/apps/quillwisp', linkAs: RouterLinkStub, variant: 'primary' },
      slots: { default: '查看详情' }
    });
    const anchor = routed.get('a');
    expect(anchor.attributes('href')).toBe('#/apps/quillwisp');
    expect(anchor.classes()).toContain('bg-button-primary-bg');
    expect(anchor.text()).toBe('查看详情');
  });
});
