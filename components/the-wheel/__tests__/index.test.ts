import { beforeEach, describe, expect, it, test } from 'vitest';
import TheWheel from '@/components/the-wheel/index.vue';
import { mountSuspended } from '@nuxt/test-utils/runtime';

describe('Components > TheWheel', () => {
  let wrapper: ReturnType<typeof mountSuspended>;

  beforeEach(async () => wrapper = await mountSuspended(TheWheel));

  it('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render the participants input correctly', () => {
    const textarea = wrapper.find('textarea');
    expect(textarea.exists()).toBe(true);
    expect(textarea.attributes('placeholder')).toBe('Ex.: Nome, Nome, Nome, ...');
  });

  it('should render the clear and spin buttons', () => {
    const buttons = wrapper.findAll('button');
    expect(buttons.length).toBe(2);
    expect(buttons[0].text()).toMatch(/Limpar/i);
    expect(buttons[1].text()).toMatch(/Girar/i);
  });

  it('should update name_array correctly when names input is changed', async () => {
    const namesInput = wrapper.find('textarea');
    await namesInput.setValue('João, Maria, João');
    const nameArray = wrapper.vm.name_array;
    expect(nameArray.length).toBe(2);
    expect(nameArray[0].content).toBe('João');
    expect(nameArray[1].content).toBe('Maria');
    expect(nameArray[0].size).toBe(2);
  });

  test('should clear the participants list when "Limpar" is clicked', async () => {
    const namesInput = wrapper.find('textarea');
    await namesInput.setValue('Lucca, Victor');
    const clearButton = wrapper.find('button', { name: 'Limpar' });
    await clearButton.trigger('click');
    const nameArray = wrapper.vm.name_array;
    expect(nameArray.length).toBe(0);
  });
});
