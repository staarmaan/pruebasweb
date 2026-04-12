import { describe, test, expect, beforeEach } from 'vitest'
import { usePacienteStore } from '../store/store'

describe('eliminarPaciente', () => {

  beforeEach(() => {
    usePacienteStore.setState({ pacientes: [] })
  })

  test('elimina un paciente del store', () => {
    const data = {
      name: 'Paciente Test',
      caretaker: 'Dueño Test',
      email: 'test@test.com',
      date: '2024-01-01',
      symptoms: 'Ninguno'
    }

    usePacienteStore.getState().agregarPaciente(data)
    const paciente = usePacienteStore.getState().pacientes[0]
    expect(paciente).toBeDefined()
    usePacienteStore.getState().eliminarPaciente(paciente.id)
    expect(usePacienteStore.getState().pacientes.length).toBe(0)
  })

})