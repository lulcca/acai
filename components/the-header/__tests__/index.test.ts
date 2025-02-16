import { beforeEach, describe, expect, it } from 'vitest';
import TheHeader from '@/components/the-header/index.vue';
import { mount } from '@vue/test-utils';

describe('Components > TheHeader', () => {
  let wrapper: ReturnType<typeof mount>;

  beforeEach(() => {
    wrapper = mount(TheHeader);
  });

  it('should match the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render title correctly', () => {
    expect(wrapper.find('h1').text()).toMatch(/Controle de açaí/i);
  });

  it('should render paragraph correctly', () => {
    expect(wrapper.find('p').text()).toMatch(/teste sua sorte e faça o atrasado pagar/i);
  });
});
