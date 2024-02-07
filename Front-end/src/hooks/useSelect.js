import { useState } from "react"

export const useSelect = () => {

    const opcionesAreaMedica = [
        { value: 'Medicina general', label: 'Medicina general' },
        { value: 'Pediatria', label: 'Pediatria' },
        { value: 'Ortopedia', label: 'Ortopedia' },
        { value: 'Psicologia', label: 'Psicologia' }
    ]

    const opcionesProfesionales = [
        { profesional: 'Juan Martinez', label: 'Juan Martinez' },
        { profesional: 'Karen Arango', label: 'Karen Arango' },
        { profesional: 'Yesenia Zuluaga', label: 'Yesenia Zuluaga' },
        { profesional: 'Miguel Serna', label: 'Miguel Serna' },
        { profesional: 'Rodrigo Castañeda', label: 'Rodrigo Castañeda' }
    ]

    const opcionesCancelar = [
        { motivo: 'Estoy fuera de la ciudad', label: 'Estoy fuera de la ciudad' },
        { motivo: 'Ya no necesito la cita', label: 'Ya no necesito la cita' },
        { motivo: 'Disponibilidad de tiempo', label: 'Disponibilidad de tiempo' },
        { motivo: 'Me equivoque al asignar mi cita', label: 'Me equivoque al asignar mi cita' }

    ]

    //Logica para seleccionar el area medica

    const [value, setValue] = useState(null)

    const manejoOnChange = (value) => {
        console.log(value)
        setValue(value)

    }
    //Logica para seleccionar el profesional

    const [profesional, setProfesional] = useState(null)

    const profesionalOnChange = (value) => {
        console.log(value)
        setProfesional(value)

    }

    //Logica para seleccionar los motivos de cancelación

    const [motivo, setMotivo] = useState(null)

    const motivoOnChange = (value) => {
        console.log(value)
        setMotivo(value)

    }

    return {
        value,
        manejoOnChange,
        opcionesAreaMedica,
        opcionesProfesionales,
        profesional,
        profesionalOnChange,
        motivo,
        opcionesCancelar,
        motivoOnChange
        
    }
}
