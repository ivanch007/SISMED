import express from 'express';
import { getAllProfesionals, getOneProfesional, createProfesional, updateProfesional, deleteProfesional } from '../controllers/controladorProfesionales.js'; 

const profesionalRoutes = express.Router();

// Rutas CRUD para usuarios
profesionalRoutes.get('/', getAllProfesionals);
profesionalRoutes.get('/:id', getOneProfesional);
profesionalRoutes.post('/', createProfesional);
profesionalRoutes.put('/:id', updateProfesional);
profesionalRoutes.delete('/:id', deleteProfesional );

export default profesionalRoutes;
