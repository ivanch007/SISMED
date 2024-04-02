import { useState, useEffect } from "react";
import axios from "axios";

export const useSelect = () => {
    const [opcionesAreaMedica, setOpcionesAreaMedica] = useState([]);

    useEffect(() => {
        const obtenerAreaMedica = async () => {
            try {
                const response = await axios.get('http://localhost:8000/departamento_medico');
                const areaMedica = response.data.map(area => ({
                    value: area.id_departamento,
                    label: `${area.departamento_medico}`,
                    departamento_medico: area.departamento_medico
                }));
                setOpcionesAreaMedica(areaMedica);
            } catch (error) {
                console.error('Error al obtener las áreas médicas:', error);
            }
        };
        obtenerAreaMedica();
    }, []);

    const [opcionesProfesionales, setOpcionesProfesionales] = useState([]);

    useEffect(() => {
        const obtenerProfesionales = async () => {
            try {
                const response = await axios.get('http://localhost:8000/profesionals');
                const profesionales = response.data.map(profesional => ({
                    value: profesional.profesional_id,
                    label: `${profesional.Nombre} ${profesional.Apellido}`,
                    Nombre: profesional.Nombre,
                    Apellido: profesional.Apellido,
                    departamento_medico: profesional.id_departamento
                }));
                setOpcionesProfesionales(profesionales);
            } catch (error) {
                console.error('Error al obtener los profesionales:', error);
            }
        };
        obtenerProfesionales();
    }, []);

    const [value, setValue] = useState(null);

    const manejoOnChange = async (value) => {
        if (value === null) {
            return;
        }
        setValue(value);
        try {
            const response = await axios.get(`http://localhost:8000/profesionals?departamento_medico=${value.value}`);
            const profesionalesFiltrados = response.data.filter(profesional => {
                return profesional.id_departamento === value.value;
            }).map(profesional => ({
                value: profesional.profesional_id,
                label: `${profesional.Nombre} ${profesional.Apellido}`,
                Nombre: profesional.Nombre,
                Apellido: profesional.Apellido
            }));
            setOpcionesProfesionales(profesionalesFiltrados);
        } catch (error) {
            console.error('Error al obtener los profesionales:', error);
        }
    };
    
    
    
    const [profesional, setProfesional] = useState(null);

    const profesionalOnChange = (value) => {
        setProfesional(value);
    };

    return {
        value,
        manejoOnChange,
        opcionesProfesionales,
        profesional,
        profesionalOnChange,
        opcionesAreaMedica
    };
};
