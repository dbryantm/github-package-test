import { describe, it, expect } from 'vitest'
import { add, subtract, multiply, divide } from '@/index.js'

describe('math tests', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5)
  })

  it('subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2)
  })

  it('multiplies two numbers', () => {
    expect(multiply(2, 3)).toBe(6)
  })

  it('divides two numbers', () => {
    expect(divide(6, 3)).toBe(2)
  })
})
