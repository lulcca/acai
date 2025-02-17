import { beforeEach, describe, expect, it } from 'vitest';
import TheMenu from '@/components/the-menu/index.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime';

describe('Components > TheMenu', () => {
  let wrapper: ReturnType<typeof mountSuspended>;

  beforeEach(async () => wrapper = await mountSuspended(TheMenu));

  it('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render all buttons correctly', () => {
    const anchors = wrapper.findAll('a');
    expect(anchors.length).toBe(3);
    expect(anchors[0].text()).toMatch(/roleta/i);
    expect(anchors[1].text()).toMatch(/regras/i);
  });

  it('should contain the correct repository link', () => {
    const link = wrapper.find('[aria-label="repositorio"]');
    expect(link.exists()).toBe(true);
    expect(link.attributes('href')).toBe('https://github.com/lulcca/acai');
    expect(link.attributes('target')).toBe('_blank');
  });
});
