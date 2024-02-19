import logo from "../logo.png";
import axios from 'axios';
import { useState } from 'react';

export const SignUp = () => {

  const url = 'http://localhost:8000/register/';

  const [numDocumento, setNumDocumento] = useState(Number);
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [contraseña, setContraseña] = useState('');

  // useEffect(() => {
  //   createRegistro();
  // }, []);

  // Procedimiento para guardar el registro.
  const createRegistro = async (e) => {

    e.preventDefault()

    try {
      const response = await axios.post(url, {
        numDocumento: numDocumento,
        nombre: nombre,
        apellido: apellido,
        email: email,
        contraseña: contraseña
      })
      console.log(`Registro creado exitosamente en ${response}`)
    } catch (error) {
      console.error(`Error al crear registro: ${error}`)
    }
    
  }
  
  return (
    <div>
      <img src={logo} className="tamaño-logo-inicio" alt="Logo" />
      <h2>Sistema de gestión de citas médicas</h2>

      <form onSubmit={createRegistro}>
        <div className="form-group container">
          <label>Número de documento</label>
          <input
            type="number"
            className="form-control"
            placeholder="Ingresa tu número de documento"
            name="numDocumento"
            value={numDocumento}
            onChange={(e) => setNumDocumento(e.target.value)}
          />
        </div>

        <div className="form-group container">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group container">
          <label>Nombres</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tus nombres"
            name="nombres"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-group container">
          <label>Apellidos</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tus apellidos"
            name="apellidos"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="form-group container">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            name="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
};
