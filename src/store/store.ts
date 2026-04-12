import { create } from 'zustand'
import type { DraftPatient, Patient } from '../types'
import { v4 as uuidv4 } from 'uuid'

type PacientesState = {
    pacientes: Patient[];
    agregarPaciente: (data: DraftPatient) => void;
    eliminarPaciente: (id: Patient['id']) => void;
}

export const crearPaciente = (data: DraftPatient): Patient => {
    return {
        id: uuidv4(),
        ...data
    }
}

export const usePacienteStore = create<PacientesState>((set) => ({
    pacientes: [],
    agregarPaciente: (data) => set((state) => ({pacientes: [...state.pacientes, crearPaciente(data)]})),

    eliminarPaciente: (id) => {
        set((state) => ({
            pacientes: state.pacientes.filter(paciente => paciente.id !== id)

        }))

    }
}))
