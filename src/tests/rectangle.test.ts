import { describe, test, expect } from 'vitest'
import { isClickInsideRectangle } from '../components/DialgoModal'

describe('isClickInsideRectangle', () => {

  test('retorna true si el click está dentro', () => {
    const element = {
      getBoundingClientRect: () => ({
        left: 0,
        right: 100,
        top: 0,
        bottom: 100
      })
    } as any

    const event = {
      clientX: 50,
      clientY: 50
    } as any

    expect(isClickInsideRectangle(event, element)).toBe(true)
  })

  test('retorna false si el click está fuera', () => {
    const element = {
      getBoundingClientRect: () => ({
        left: 0,
        right: 100,
        top: 0,
        bottom: 100
      })
    } as any

    const event = {
      clientX: 150,
      clientY: 150
    } as any

    expect(isClickInsideRectangle(event, element)).toBe(false)
  })

})