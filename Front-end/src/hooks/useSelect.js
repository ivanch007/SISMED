import { useState, useEffect } from "react";
import axios from "axios";

export const useSelect = () => {
    const opcionesAreaMedica = [
        { value: 'Medicina general', label: 'Medicina general' },
        { value: 'Pediatria', label: 'Pediatria' },
        { value: 'Ortopedia', label: 'Ortopedia' },
        { value: 'Psicologia', label: 'Psicologia' }
    ];

    const [opcionesProfesionales, setOpcionesProfesionales] = useState([]);

    useEffect(() => {
        const obtenerProfesionales = async () => {
            try {
                const response = await axios.get('http://localhost:8000/profesionals');
                const profesionales = response.data.map(profesional => ({
                    value: profesional.profesional_id,
                    label: `${profesional.Nombre} ${profesional.Apellido}` // Nombre y Apellido del profesional
                }));
                setOpcionesProfesionales(profesionales);
                console.log(profesionales)
            } catch (error) {
                console.error('Error al obtener los profesionales:', error);
            }
        };

        obtenerProfesionales();
    }, []);

    const opcionesCancelar = [
        { motivo: 'Estoy fuera de la ciudad', label: 'Estoy fuera de la ciudad' },
        { motivo: 'Ya no necesito la cita', label: 'Ya no necesito la cita' },
        { motivo: 'Disponibilidad de tiempo', label: 'Disponibilidad de tiempo' },
        { motivo: 'Me equivoque al asignar mi cita', label: 'Me equivoque al asignar mi cita' }
    ];

    const opcionesDocumento = [
        { documento: 'Cedula', label: 'Cedula' },
        { documento: 'Pasaporte', label: 'Pasaporte' },
        { documento: 'Cedula extranjeria', label: 'Cedula extranjeria' }
    ];

    const [value, setValue] = useState(null);
    const manejoOnChange = (value) => {
        setValue(value);
    };

    const [profesional, setProfesional] = useState(null);
    const profesionalOnChange = (value) => {
        setProfesional(value);
    };

    const [motivo, setMotivo] = useState(null);
    const motivoOnChange = (value) => {
        setMotivo(value);
    };

    const [documento, setDocumento] = useState(null);
    const documentoOnChange = (value) => {
        setDocumento(value);
    };

    return {
        value,
        manejoOnChange,
        opcionesAreaMedica,
        opcionesProfesionales,
        profesional,
        profesionalOnChange,
        motivo,
        opcionesCancelar,
        motivoOnChange,
        opcionesDocumento,
        documento,
        documentoOnChange
    };
};
