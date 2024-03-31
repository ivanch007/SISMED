import DepartamentoMedicoModel from '../models/DepartamentoMedicoModel.js'

// Obtener todos los departamentos médicos
export const getAllDepartamentosMedicos = async (req, res) => {
    try {
        const departamentos = await DepartamentoMedicoModel.findAll();
        res.json(departamentos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un departamento médico por su ID
export const getDepartamentoMedicoById = async (req, res) => {
    try {
        const departamento = await DepartamentoMedicoModel.findByPk(req.params.id);
        if (!departamento) {
            return res.status(404).json({ message: 'Departamento médico no encontrado' });
        }
        res.json(departamento);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo departamento médico
export const createDepartamentoMedico = async (req, res) => {
    try {
        const nuevoDepartamento = await DepartamentoMedicoModel.create(req.body);
        res.status(201).json(nuevoDepartamento);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar un departamento médico
export const updateDepartamentoMedico = async (req, res) => {
    try {
        const departamento = await DepartamentoMedicoModel.findByPk(req.params.id);
        if (!departamento) {
            return res.status(404).json({ message: 'Departamento médico no encontrado' });
        }
        await departamento.update(req.body);
        res.json({ message: 'Departamento médico actualizado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar un departamento médico
export const deleteDepartamentoMedico = async (req, res) => {
    try {
        const departamento = await DepartamentoMedicoModel.findByPk(req.params.id);
        if (!departamento) {
            return res.status(404).json({ message: 'Departamento médico no encontrado' });
        }
        await departamento.destroy();
        res.json({ message: 'Departamento médico eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
