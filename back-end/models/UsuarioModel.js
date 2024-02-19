//Se importa sequelize
import { DataTypes } from "sequelize";
//Se importa la conexion a la base de datos.
import db from "../database/db.js";

const UsuarioModel = db.define('usuarios', {
    id: {type: DataTypes.NUMBER, primaryKey: true},
    numDocumento: {type: DataTypes.NUMBER},
    nombre: {type: DataTypes.STRING},
    apellido:{type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    contraseña: {type: DataTypes.STRING}  
})

export default UsuarioModel

