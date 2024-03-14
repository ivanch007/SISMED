import express from 'express';
import { login } from '../controllers/controladorAuth.js'; 

const routerLogin = express.Router();

// Ruta para iniciar sesión
routerLogin.post('/', login);

export default routerLogin;