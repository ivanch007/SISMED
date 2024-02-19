import { where, Op } from "sequelize";
import UsuarioModel from "../models/UsuarioModel.js";

//Metodos para el CRUD

//Mostrar todos los registros.
export const getAllRegister = async (req, res) => {
    try {
        const registers = await UsuarioModel.findAll()
        res.json(registers)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Mostrar solo un registro.

export const getRegister = async (req, res) => {
    try {
        const register = await UsuarioModel.findAll({
            where: { id: req.params.id }
        })
        res.json(register)
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Crear un registro.
export const createRegister = async (req, res) => {
    try {

        const user = await UsuarioModel.findAll({
            where: {
                [Op.or]: [{ email: req.body.email },
                    {numDocumento : req.body.numDocumento}]
            } 
        })

        if(user == null){
            return res.json({
                "message": "Usuario ya existe"
            })        
        }

        await UsuarioModel.create(req.body)
        res.json({ message: "Usuario creado satifactoriamente" })

        
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Actualizar un registro.
export const updateRegister = async (req, res) => {
    try {
        await UsuarioModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({ "message": "registro actualizado correctamente" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Eliminar un registro. 
export const deleteRegister = async(req,res) =>{
    try {
        await UsuarioModel.destroy({
            where: {id: req.params.id}
        })
        res.json({ "message": "registro eliminado correctamente"}) 
    } catch (error) {
        res.json({ message: error.message })
    }
}