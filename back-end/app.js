import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import registerRoutes from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/register', registerRoutes)

try {
   await db.authenticate()
   console.log('Conexion exitosa a la base de datos')
} catch (error) {
    console.log(`El error de conexión es: ${error}` )
}

app.get('/',(req, res) =>{
    res.send('HOLA MUNDO')
})

app.listen(8000, () =>{
    console.log('Server up running in http://localhost:8000/')
})