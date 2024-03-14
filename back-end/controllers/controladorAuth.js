import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UsuarioModel from "../models/UsuarioModel.js";

export const login = async (req, res) => {
    const { email, contraseña } = req.body;

    try {
        // Buscar usuario por correo electrónico
        const user = await UsuarioModel.findOne({ where: { email } });

        // Verificar si el usuario existe
        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Verificar si la contraseña es correcta
        const isPasswordValid = await bcrypt.compare(contraseña, user.contraseña);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Generar token JWT con el ID del usuario
        const token = jwt.sign({ userId: user.id }, 'secreto', { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};
