import { Op } from 'sequelize'
import CitaModelo from "../models/CitaModelo.js"
import ProfesionalModel from '../models/ProfesionalModel.js'

export const getAllDates = async (req, res) => {
    try {
        const dates = await CitaModelo.findAll()
        res.json(dates)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const getOneDate = async (req, res) => {
    try {
        const date = await CitaModelo.findAll({
            where: { id: req.params.id }
        })
        res.json(date)
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const createDate = async (req, res) => {
    try {
        const profesional = await ProfesionalModel.findByPk(req.body.profesional_id);
        if (!profesional) {
            return res.status(400).json({ message: 'El profesional especificado no existe' });
        }

        const existingDate = await CitaModelo.findOne({
            where: { fecha_hora: req.body.fechaHora, profesional_id: req.body.profesional_id }
        });
        if (existingDate) {
            return res.status(400).json({ message: 'Ya existe una cita programada para esta fecha y hora' });
        }

        const newDate = await CitaModelo.create({
            fecha_hora: new Date(req.body.fechaHora),
            profesional_id: req.body.profesional_id,
        });
        res.status(201).json({ message: 'Cita creada satisfactoriamente', cita: newDate });
    } catch (error) {
        console.error('Error al crear la cita:', error);
        res.status(500).json({ message: 'Error al crear la cita' });
    }
}

export const updateDate = async (req, res) => {
    try {
        await CitaModelo.update({
            where: { id: req.params.id }
        })
        res.json({ message: "Cita actualizada correctamente." })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteDate = async(req, res) =>{
    try {
        await CitaModelo.destroy({
            where: {id: req.params.id}
        })
        res.json({message: 'La cita ha sido retirada de la base de datos'}) 
    } catch (error) {
        res.json({ message: error.message })
    }
}
