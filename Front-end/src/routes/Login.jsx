import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

export const Login = () => {
    const url = 'http://localhost:8000/login'; 
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(url, {
                email: email,
                contraseña: password
            });

            const { token } = response.data;
            localStorage.setItem('token', token);

            // Redirige al usuario a la página deseada después de iniciar sesión
            navigate('/home'); // Redirige a la página de inicio
        } catch (error) {
            setError('Credenciales inválidas');
        }
    };

    return (
        <div>
            <h1>SISMED</h1>
            <h2>Sistema de gestión de citas médicas</h2>
            <form onSubmit={handleSubmit} className="container">
                <div className="container">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input 
                        type="email" 
                        id="exampleInputEmail1" 
                        placeholder="Ingresa tu email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div className="container">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                        type="password" 
                        id="exampleInputPassword1" 
                        placeholder="Ingresa tu contraseña" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Ingresar</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}
