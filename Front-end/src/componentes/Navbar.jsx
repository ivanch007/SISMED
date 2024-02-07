import { NavLink } from "react-router-dom"
import logo from "../logo.png"

export const Navbar = () => {
  return (
    <>
      <div className="navegador">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <img src={logo} className="logo" />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-enlace" to="/home">Inicio<span className="sr-only"></span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-enlace" to="/GestionCitas" >Gestionar Cita</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-enlace" to="/CancelarCita" >Cancelar Cita</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-enlace" to="/HistoriaClinica" >Historia Clinica</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}
