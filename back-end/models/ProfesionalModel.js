//Se importa sequelize
import { DataTypes } from "sequelize";
//Se importa la conexion a la base de datos.
import db from "../database/db.js";

const ProfesionalModel = db.define('profesionales', {
    profesional_id: {type: DataTypes.NUMBER, primaryKey: true},
    Nombre: {type: DataTypes.STRING},
    Apellido:{type: DataTypes.STRING},
    Departamento_medico:{type: DataTypes.STRING},
    Consultorio: {type: DataTypes.NUMBER},
    Documento: {type: DataTypes.NUMBER}
})

export default ProfesionalModel;
