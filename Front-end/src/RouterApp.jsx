import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./routes/Home"
import { GestionCita } from "./routes/GestionCita"
import { CancelarCita } from "./routes/CancelarCita"
//import { ProtectRouter } from "./routes/ProtectRouter"
import { Login } from "./routes/Login"
import { SignUp} from "./routes/SignUp"


export const RouterApp = () => {
  return (
    <>

      <Routes>
      <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/GestionCitas" element={<GestionCita></GestionCita>}></Route>
        <Route path="/CancelarCita" element={<CancelarCita></CancelarCita>}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>

      </Routes>
    </>
  )
}
