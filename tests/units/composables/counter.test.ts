import { describe, it, expect } from 'vitest'
 import { useCounter } from './countercomposable.vue'

 
describe('useCounter', () => {
  it('increments count', () => {
    const { count, increment } = useCounter()
    increment()
    expect(count.value).toBe(1)
  })
}) 