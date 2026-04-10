import { describe, test, expect, beforeEach } from 'vitest'
import { usePacienteStore } from '../store/store'

describe('agregarPaciente', () => {

  beforeEach(() => {
    usePacienteStore.setState({ pacientes: [] })
  })

  test('agrega un paciente al store', () => {
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