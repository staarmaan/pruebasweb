import { describe, test, expect, beforeEach } from 'vitest'
import { validarFormulario } from '../src/utils/validaciones'
import { usePacienteStore } from '../src/store/store'
import { isClickInsideRectangle } from '../src/components/DialgoModal'
import type { DraftPatient } from '../src/types'

describe('Validación de Formulario', () => {
    test('retorna true si el nombre está vacío', () => {
      const data = {
        name: '',
        caretaker: 'Juan Garcia',
        email: 'test@test.com',
        date: '2024-01-01',
        symptoms: 'síntomas'
      }
      expect(validarFormulario(data)).toBe(false)
    })

    test('retorna true si el email no contiene @', () => {
      const data = {
        name: 'Firulais',
        caretaker: 'Juan Garcia',
        email: 'testemail.com',
        date: '2024-01-01',
        symptoms: 'síntomas'
      }
      expect(validarFormulario(data)).toBe(false)
    })
})

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

describe('agregarPaciente', () => {
  beforeEach(() => {
    usePacienteStore.setState({ pacientes: [] })
  })

  test('retorna true si agrega un paciente al store', () => {
    const data = {
      name: 'Paciente Test',
      caretaker: 'Dueño Test',
      email: 'test@test.com',
      date: '2024-01-01',
      symptoms: 'Ninguno'
    }

    usePacienteStore.getState().agregarPaciente(data)
    const pacientes = usePacienteStore.getState().pacientes
    expect(pacientes.length).toBe(1)
  })

})
