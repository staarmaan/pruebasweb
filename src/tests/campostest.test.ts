import { describe, test, expect, beforeEach } from 'vitest'
import { validarFormulario } from '../utils/validaciones'
import { usePacienteStore } from '../store/store'
import { isClickInsideRectangle } from '../components/DialgoModal'
import type { DraftPatient } from '../types'

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