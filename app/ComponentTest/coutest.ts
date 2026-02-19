import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Counterbutton from './Counterbutton.vue'

describe('CounterButton.vue', () => {
  it('renders initial count', () => {
    const wrapper = mount(CounterButton)
    expect(wrapper.get('[data-test="count"]').text())
      .toContain('Count: 0')
  })

  it('increments when button is clicked', async () => {
    const wrapper = mount(CounterButton)

    await wrapper.get('[data-test="btn"]').trigger('click')

    expect(wrapper.get('[data-test="count"]').text())
      .toContain('Count: 1')
  })
})
