import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Navbar } from "../componentes/Navbar";
import { useSelect } from "../hooks/useSelect";
import { useFecha } from "../hooks/useFecha";
import { useCrearCita } from "../hooks/useCrearCita";
import Swal from 'sweetalert2';

export const GestionCita = () => {
  const { value, manejoOnChange, opcionesAreaMedica, opcionesProfesionales, profesionalOnChange, profesional } = useSelect();
  const { fecha, setFecha, manejoColor } = useFecha();
  const { crearCita, loading, error: backendError } = useCrearCita();

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

  try {
    const fechaHoraFormateada = fecha.toISOString();
    await crearCita(profesional.value, fechaHoraFormateada); 
    Swal.fire({
      icon: 'success',
      title: 'Cita asignada',
      text: `Su cita con ${value.label} con el profesional ${profesional.Nombre} ${profesional.Apellido} en la fecha y hora ${fecha.toLocaleString()} ha sido asignada`,
    });
    manejoOnChange(null);
    profesionalOnChange(null);
    setFecha(null);
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: backendError || 'Hubo un problema al asignar la cita. Por favor, inténtelo de nuevo más tarde.',
    });
  }
};


  const filterWeekends = (date) => {
    return date.getDay() !== 0 && date.getDay() !== 6;
  };

  const filterTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const totalMinutes = hours * 60 + minutes;
    return totalMinutes >= 7 * 60 + 30 && totalMinutes <= 18 * 60 + 30;
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <>
      <Navbar />
      {loading && <p>Loading...</p>}
      {backendError && <p>Error: {backendError}</p>}
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
              getOptionLabel={(option) => `${option.Nombre} ${option.Apellido}`}
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
            filterDate={date => filterWeekends(date) && date >= today}
            filterTime={filterTime}
            minDate={today}
            dateFormat="yyyy/MM/dd"
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
