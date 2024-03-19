import { DataTypes } from "sequelize";
import db from "../database/db.js";
import ProfesionalModelo from "./ProfesionalModel.js";

const CitaModelo = db.define('cita', {
    id: { type: DataTypes.NUMBER, primaryKey: true },
    fecha_hora: { type: DataTypes.DATE },
    profesional_id: { type: DataTypes.NUMBER, allowNull: false } 
});

// Establecer la relación entre citas y profesionales
CitaModelo.belongsTo(ProfesionalModelo, { foreignKey: 'profesional_id' });

export default CitaModelo;
