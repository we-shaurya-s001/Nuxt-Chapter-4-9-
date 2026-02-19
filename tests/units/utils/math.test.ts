import { add, multiply, subtract } from "../../../utils/math"
import { describe, it, expect } from 'vitest'

describe('Math Utils', () => {
  it('adds numbers correctly', () => {
    expect(add(2, 3)).toBe(5)
  })

  it('multiplies numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6)
  })

  it('Subtracts number correctly'), () => {
    expect(subtract(9,3)).toBe(6)
  }

})
