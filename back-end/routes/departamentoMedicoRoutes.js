import express from 'express';
import { getAllDepartamentosMedicos, getDepartamentoMedicoById, createDepartamentoMedico, updateDepartamentoMedico, deleteDepartamentoMedico } from '../controllers/controladorDepartamentoMedico.js'; 

const departamentoMed = express.Router();

// Rutas CRUD para usuarios
departamentoMed.get('/', getAllDepartamentosMedicos);
departamentoMed.get('/:id', getDepartamentoMedicoById);
departamentoMed.post('/', createDepartamentoMedico);
departamentoMed.put('/:id', updateDepartamentoMedico);
departamentoMed.delete('/:id', deleteDepartamentoMedico );

export default departamentoMed;