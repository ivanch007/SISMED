
import { DataTypes } from "sequelize";
import db from "../database/db.js";
import DepartamentoMedicoModel from './DepartamentoMedicoModel.js'

const ProfesionalModel = db.define('profesionales', {
    profesional_id: { type: DataTypes.NUMBER, primaryKey: true },
    Tipo_documento: { type: DataTypes.STRING },
    Documento: { type: DataTypes.INTEGER },
    Nombre: { type: DataTypes.STRING },
    Apellido: { type: DataTypes.STRING },
    Email: { type: DataTypes.STRING },
    Telefono: { type: DataTypes.STRING },
    Dir_residencia: { type: DataTypes.TEXT },
    Consultorio: { type: DataTypes.INTEGER },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
    id_departamento: { type: DataTypes.INTEGER, allowNull: false } 
});

ProfesionalModel.belongsTo(DepartamentoMedicoModel, { foreignKey: 'id_departamento', as: 'asociacionDepartamentoMedico' });

export default ProfesionalModel;
