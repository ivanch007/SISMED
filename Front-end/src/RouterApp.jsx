import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { GestionCita } from "./routes/GestionCita";
import { CancelarCita } from "./routes/CancelarCita";
import { Login } from "./routes/Login";
import { SignUp } from "./routes/SignUp";

export const RouterApp = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* Utiliza la ruta /home para la página de inicio */}
        <Route path="/home" element={<Home />}></Route>
        <Route path="/GestionCitas" element={<GestionCita />}></Route>
        <Route path="/CancelarCita" element={<CancelarCita />}></Route>
        {/* Si la ruta no coincide con ninguna de las anteriores, redirige al usuario a la página de inicio */}
        <Route path="/*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
