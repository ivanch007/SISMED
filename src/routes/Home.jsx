import logo from "../logo.png"

export const Home = () => {
  return (
    <div className="inicio">

      <div className="logo-inicio" >
        <img src={logo} className="tamaño-logo-inicio" />

      </div>
      <div className="contenido">
        <h1>SISMED</h1>

        <p> El Sistema de Gestión de Citas Medicas (SISMED) es la herramienta para seleccionar las citas médicas para la IPS Centro Médico Tuluá.

          Acá podrás seleccionar tu cita médica según la disposición de la fechas, el médico tratante y el departamento médico en donde se encuentre la especialidad.</p>
      </div>


    </div>
  )
}
