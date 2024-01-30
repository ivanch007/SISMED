import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./componentes/Navbar"
import { Home } from "./routes/Home"
import { GestionCita } from "./routes/GestionCita"
import { CancelarCita } from "./routes/CancelarCita"
import { HistoriaClinica } from "./routes/HistoriaClinica"


export const RouterApp = () => {
  return (
    <>
      <Navbar></Navbar>
      <Routes>/
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/GestionCitas" element={<GestionCita></GestionCita>}></Route>
        <Route path="/CancelarCita" element={<CancelarCita></CancelarCita>}></Route>
        <Route path="/HistoriaClinica" element={<HistoriaClinica></HistoriaClinica>}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>

      </Routes>
    </>
  )
}
