import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./routes/Home"
import { GestionCita } from "./routes/GestionCita"
import { CancelarCita } from "./routes/CancelarCita"
import { HistoriaClinica } from "./routes/HistoriaClinica"
import { ProtectRouter } from "./routes/ProtectRouter"
import { Login } from "./routes/Login"


export const RouterApp = () => {
  return (
    <>

      <Routes>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/" element={<ProtectRouter></ProtectRouter>}><Route path="/Home" element={<Home></Home>}></Route></Route>
        <Route path="/GestionCitas" element={<GestionCita></GestionCita>}></Route>
        <Route path="/CancelarCita" element={<CancelarCita></CancelarCita>}></Route>
        <Route path="/HistoriaClinica" element={<HistoriaClinica></HistoriaClinica>}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>

      </Routes>
    </>
  )
}
