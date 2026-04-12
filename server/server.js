import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Base de datos en memoria
let pacientes = [];

// GET - Listar todos los pacientes
app.get('/api/pacientes', (req, res) => {
  res.json(pacientes);
});

// GET - Obtener un paciente por ID
app.get('/api/pacientes/:id', (req, res) => {
  const { id } = req.params;
  const paciente = pacientes.find(p => p.id === id);
  
  if (!paciente) {
    return res.status(404).json({ error: 'Paciente no encontrado' });
  }
  
  res.json(paciente);
});

// POST - Crear un nuevo paciente
app.post('/api/pacientes', (req, res) => {
  const { name, caretaker, email, date, symptoms } = req.body;
  
  if (!name || !caretaker || !email || !date || !symptoms) {
    return res.status(400).json({ error: 'Faltan campos requeridos' });
  }
  
  const nuevoPaciente = {
    id: uuidv4(),
    name,
    caretaker,
    email,
    date,
    symptoms
  };
  
  pacientes.push(nuevoPaciente);
  res.status(201).json(nuevoPaciente);
});

// PUT - Actualizar un paciente
app.put('/api/pacientes/:id', (req, res) => {
  const { id } = req.params;
  const pacienteIndex = pacientes.findIndex(p => p.id === id);
  
  if (pacienteIndex === -1) {
    return res.status(404).json({ error: 'Paciente no encontrado' });
  }
  
  const pacienteActualizado = {
    ...pacientes[pacienteIndex],
    ...req.body,
    id // Asegura que el ID no cambie
  };
  
  pacientes[pacienteIndex] = pacienteActualizado;
  res.json(pacienteActualizado);
});

// DELETE - Eliminar un paciente
app.delete('/api/pacientes/:id', (req, res) => {
  const { id } = req.params;
  const pacienteIndex = pacientes.findIndex(p => p.id === id);
  
  if (pacienteIndex === -1) {
    return res.status(404).json({ error: 'Paciente no encontrado' });
  }
  
  const pacienteEliminado = pacientes.splice(pacienteIndex, 1);
  res.json(pacienteEliminado[0]);
});

// Levanta el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});