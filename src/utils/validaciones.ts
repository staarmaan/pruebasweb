import type { DraftPatient } from '../types'

export const validarFormulario = (data: Partial<DraftPatient>): boolean => {
  // Verificar que los campos requeridos existan y no estén vacíos
  if (!data.name || !data.caretaker || !data.email) {
    return false
  }

  // Verificar longitud mínima de 8 caracteres para nombre y propietario
  if (data.name.length < 8 || data.caretaker.length < 8) {
    return false
  }

  // Validar formato de email
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  if (!emailRegex.test(data.email)) {
    return false
  }

  return true
}
