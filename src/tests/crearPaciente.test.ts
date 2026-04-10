import { describe, test, expect } from 'vitest'
import { crearPaciente } from '../store/store'

describe('crearPaciente', () => {

  test('crea un paciente con id', () => {
    const data = {
      name: 'Paciente Test',
      caretaker: 'Dueño Test',
      email: 'test@test.com',
      date: '2024-01-01',
      symptoms: 'Ninguno'
    }

    const paciente = crearPaciente(data)

    expect(paciente.id).toBeDefined()
    expect(paciente.name).toBe(data.name)
  })

})