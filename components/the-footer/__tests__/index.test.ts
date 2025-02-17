import { beforeEach, describe, expect, it } from 'vitest';
import TheFooter from '@/components/the-footer/index.vue';
import { mount } from '@vue/test-utils';

describe('Components > TheFooter', () => {
  let wrapper: ReturnType<typeof mount>;

  beforeEach(() => wrapper = mount(TheFooter));

  it('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render the copyright text correctly', () => {
    expect(wrapper.find('span').text()).toBe('© 2025 lulcca');
  });
});
