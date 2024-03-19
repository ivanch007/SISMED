import { Op } from 'sequelize'
import CitaModelo from "../models/CitaModelo.js"
import ProfesionalModel from '../models/ProfesionalModel.js'

//Mostrar todas las citas || CRUD PARA CITAS

export const getAllDates = async (req, res) => {
    try {
        const dates = await CitaModelo.findAll()
        res.json(dates)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Mostrar una sola cita o fecha

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

//Crear una cita.

export const createDate = async (req, res) => {
    try {
        // Verificar si el profesional existe
        const profesional = await ProfesionalModel.findByPk(req.body.profesional_id);
        if (!profesional) {
            return res.status(400).json({ message: 'El profesional especificado no existe' });
        }

        // Verificar si la fecha y hora ya están ocupadas por otra cita
        const existingDate = await CitaModelo.findOne({
            where: { fecha_hora: req.body.fecha_hora, profesional_id: req.body.profesional_id }
        });
        if (existingDate) {
            return res.status(400).json({ message: 'Ya existe una cita programada para esta fecha y hora' });
        }

        // Crear la cita
        const newDate = await CitaModelo.create({
            ...req.body
        });
        res.status(201).json({ message: 'Cita creada satisfactoriamente', cita: newDate });
    } catch (error) {
        console.error('Error al crear la cita:', error);
        res.status(500).json({ message: 'Error al crear la cita' });
    }
}

//Actualizar cita

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

//Eliminar una cita.

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

