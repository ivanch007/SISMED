import { where, Op } from "sequelize";
import UsuarioModel from "../models/UsuarioModel.js";
import bcrypt from "bcryptjs"

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
        // Verificar si el usuario ya existe
        const existingUser = await UsuarioModel.findOne({
            where: {
                [Op.or]: [
                    { email: req.body.email },
                    { numDocumento: req.body.numDocumento }
                ]
            }
        });
        
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(req.body.contraseña, 10);

        // Crear un nuevo usuario con la contraseña encriptada
        const newUser = await UsuarioModel.create({
            ...req.body,
            contraseña: hashedPassword // Asignar la contraseña encriptada al usuario
        });

        res.status(201).json({ message: 'Usuario creado satisfactoriamente', user: newUser });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ message: 'Error al crear usuario' });
    }
};


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