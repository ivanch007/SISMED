import logo from "../logo.png"
import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'

export const SignUp = () => {

  const url = 'http://localhost:8000/register/'

  const [numDocumento, setNumDocumento] = useState('')
  const [email, setEmail] = useState('')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [contraseña, setContraseña] = useState('')

  const createRegistro = async (e) => {
    e.preventDefault()
    
    if (!numDocumento || !nombre || !apellido || !email || !contraseña) {
      // Mostrar SweetAlert de campos requeridos faltantes
      Swal.fire({
        icon: 'error',
        title: 'Campos requeridos',
        text: 'Por favor, completa todos los campos antes de continuar'
      })
      return
    }

    try {
      const response = await axios.post(url, {
        numDocumento: numDocumento,
        nombre: nombre,
        apellido: apellido,
        email: email,
        contraseña: contraseña
      })

      // Mostrar SweetAlert de registro exitoso
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: 'El usuario ha sido registrado correctamente'
      })

      // Reiniciar los valores de los campos del formulario
      setNumDocumento('')
      setEmail('')
      setNombre('')
      setApellido('')
      setContraseña('')
      
    } catch (error) {
      // Mostrar SweetAlert de error al crear el registro
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al crear el registro. Verifica los datos ingresados'
      })
    }
  }
  
  return (
    <div>
      <img src={logo} className="tamaño-logo-inicio" alt="Logo" />
      <h2>Sistema de gestión de citas médicas</h2>

      <form onSubmit={createRegistro}>
        
          <label>Número de documento</label>
          <input
            type="number"
            className="form-control"
            placeholder="Ingresa tu número de documento"
            name="numDocumento"
            value={numDocumento}
            onChange={(e) => setNumDocumento(e.target.value)}
          />
       

        
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
       

        
          <label>Nombres</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tus nombres"
            name="nombres"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)}
          />
       

        
          <label>Apellidos</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingresa tus apellidos"
            name="apellidos"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
       

        
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
            name="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
       

        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
   </div>
  )
}
