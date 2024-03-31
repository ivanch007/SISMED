import { where } from "sequelize"
import ProfesionalModel from "../models/ProfesionalModel.js"

//Mostrar todos los profesionales.

export const getAllProfesionals = async (req, res) => {
    try {
        const departamentoMedico = req.query.id_departamento;
        let profesionales;

        if (departamentoMedico) {
            // Filtrar por id_departamento si se proporciona en la consulta
            profesionales = await ProfesionalModel.findAll({ where: { id_departamento: departamentoMedico } });
        } else {
            // Obtener todos los profesionales si no se proporciona el id_departamento
            profesionales = await ProfesionalModel.findAll();
        }

        res.json(profesionales);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

//Mostrar solo un profesional

export const getOneProfesional = async(req,res) =>{
    try {
        const oneProfesional = await ProfesionalModel.findAll({
            where: {id: req.params.id}
        })
        res.json(oneProfesional)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Crear un profesional

export const createProfesional = async(req, res)=>{
    try {
        const existingProfesional = await ProfesionalModel.findOne({
            where: {Documento: req.body.Documento}
        })
        if (existingProfesional) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }  

        const newProfesional = await ProfesionalModel.create({
            ...req.body
        });
        res.status(201).json({ message: 'Usuario creado satisfactoriamente', user: newUser });
    } catch (error) {
        console.error('Error al crear el profesional:', error);
        res.status(500).json({ message: 'Error al crear profesional' });
    }
}

//Actualizar el profesional.
export const updateProfesional = async (req,res)=>{
    try {
        await ProfesionalModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({ "message": "registro actualizado correctamente" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Eliminar un profesional
export const deleteProfesional = async(req,res) =>{
    try {
        await ProfesionalModel.destroy({
            where: {id: req.params.id}
        })
        res.json({message: 'El profesional ha sido retirado de la base de datos'}) 
    } catch (error) {
        res.json({ message: error.message })
    }
}