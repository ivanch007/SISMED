import express from 'express';
import cors from 'cors';
import db from './database/db.js';
import registerRoutes from './routes/routes.js';
import loginRoutes from './routes/loginRoute.js';
import profesionalRoutes from './routes/profesionalRoutes.js';
import citasRoutes from './routes/citasRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Monta las rutas de registro en el prefijo /register
app.use('/register', registerRoutes);

// Monta las rutas de inicio de sesión en el prefijo /login
app.use('/login', loginRoutes);

//ruta para profesionales
app.use('/profesionals', profesionalRoutes)

//ruta para citas || fechas
app.use('/citas', citasRoutes)

try {
   await db.authenticate();
   console.log('Conexión exitosa a la base de datos');
} catch (error) {
    console.log(`El error de conexión es: ${error}`);
}

app.get('/', (req, res) => {
    res.send('¡HOLA MUNDO!');
});

app.listen(8000, () => {
    console.log('Servidor en ejecución en http://localhost:8000/');
});