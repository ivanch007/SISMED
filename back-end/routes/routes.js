import express from 'express'
import { createRegister, deleteRegister, getAllRegister, getRegister, updateRegister } from '../controllers/ControladorUsuario.js'
const router = express.Router()

//Se crean las rutas para acceder a los registros.

router.get('/', getAllRegister)
router.get('/:id', getRegister)
router.post('/', createRegister)
router.put('/:id', updateRegister)
router.delete('/:id', deleteRegister)

export default router