import { DataTypes } from "sequelize";
import db from "../database/db.js";

const DepartamentoMedicoModel = db.define('departamento_medicos', {
    id_departamento: { type: DataTypes.NUMBER, primaryKey: true },
    departamento_medico: { type: DataTypes.STRING }
});

export default DepartamentoMedicoModel;
