import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Navbar } from "../componentes/Navbar";
import { useSelect } from "../hooks/useSelect";
import { useFecha } from "../hooks/useFecha";
import Swal from 'sweetalert2';

export const GestionCita = () => {
  const { value, manejoOnChange, opcionesAreaMedica, opcionesProfesionales, profesionalOnChange, profesional } = useSelect();
  const { fecha, setFecha, manejoColor } = useFecha(); 

  const manejoSubmit = async (e) => {
    e.preventDefault();

    if (value === null || profesional === null || fecha === null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debe seleccionar todas las opciones',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: 'Cita asignada',
      text: `Su cita con ${value.label} con el profesional ${profesional.Nombre} ${profesional.Apellido} en la fecha y hora ${fecha.toLocaleString()} ha sido asignada`,
    });
  }

  return (
    <>
      <Navbar />
      <div className='select-form'>
        <h2 className="subtitulo-formulario"><strong>Selección área médica</strong></h2>
        <form className='container'>
          <label htmlFor="areamedica">Selecciona el area médica: </label>
          <Select
            value={value}
            options={opcionesAreaMedica}
            onChange={manejoOnChange}
          />
          <p>Has seleccionado: {value ? value.label : 'Ninguna opción seleccionada'}</p>
        </form>
      </div>
      <div className='select-form'>
        <h2> <strong>Selección profesional</strong></h2>
        <div className="profesional">
          <form className='container'>
            <label htmlFor="selecprofesional" className="etiquetas-formulario">Selecciona el profesional</label>
            <Select
              value={profesional}
              options={opcionesProfesionales}
              onChange={profesionalOnChange}
              getOptionLabel={(option) => `${option.Nombre} ${option.Apellido}`} // Mostrar nombre y apellido del profesional
            />
            <p>Has seleccionado: {profesional ? `${profesional.Nombre} ${profesional.Apellido}` : 'Ninguna opción seleccionada'}</p>
          </form>
        </div>
      </div>
      <div className='select-form'>
        <h2><strong>Seleccione una fecha</strong></h2>
        <form className='container'>
          <DatePicker
            showTimeSelect
            selected={fecha}
            onChange={setFecha}
            timeClassName={manejoColor}
          />
          <p>La fecha y hora seleccionada es: {fecha ? fecha.toLocaleString() : 'Ninguna fecha seleccionada'}</p>
        </form>
      </div>
      <div>
        <form onSubmit={manejoSubmit}>
          <button type='submit' className="boton-cita">Seleccionar cita</button>
        </form>
      </div>
    </>
  );
};
