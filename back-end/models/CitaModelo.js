//Se importa sequelize
import { DataTypes } from "sequelize";
//Se importa la conexion a la base de datos.
import db from "../database/db.js";

const CitaModelo = db.define('profesionales', {
    id: {type: DataTypes.NUMBER, primaryKey: true},
    fecha_hora: {type: DataTypes.DATE}
})

export default CitaModelo;