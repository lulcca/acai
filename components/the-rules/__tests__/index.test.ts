import { beforeEach, describe, expect, it, vi } from 'vitest';
import TheRules from '@/components/the-rules/index.vue';
import { mount } from '@vue/test-utils';

describe('Components > TheRules', () => {
  vi.mock('assets/json/rules.json', () => ({
    default: ['Regra 1', 'Regra 2', 'Regra 3'],
  }));

  let wrapper: ReturnType<typeof mount>;

  beforeEach(() => wrapper = mount(TheRules));

  it('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render the title "Regras"', () => {
    expect(wrapper.find('h2').text()).toBe('Regras');
  });

  it('should render the rules list correctly', () => {
    const listItems = wrapper.findAll('li');
    expect(listItems).toHaveLength(3);
    expect(listItems[0].text()).toBe('Regra 1');
    expect(listItems[1].text()).toBe('Regra 2');
    expect(listItems[2].text()).toBe('Regra 3');
  });
});
