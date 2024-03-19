import express from 'express';
import { getAllDates, getOneDate, createDate, updateDate, deleteDate } from '../controllers/controladorCita.js'; 

const citasRoutes = express.Router();

// Rutas CRUD para citas
citasRoutes.get('/', getAllDates);
citasRoutes.get('/:id', getOneDate);
citasRoutes.post('/', createDate);
citasRoutes.put('/:id', updateDate);
citasRoutes.delete('/:id', deleteDate);

export default citasRoutes;
