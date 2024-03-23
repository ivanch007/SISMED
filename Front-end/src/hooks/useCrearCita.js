import { useState } from 'react';
import axios from 'axios';

const useCrearCita = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const crearCita = async (areaMedica, profesionalId, fechaHora) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:8000/citas', {
        areaMedica,
        profesionalId,
        fechaHora
      });

      return response.data;
    } catch (error) {
      setError(error.response.data.message || 'Error al enviar la solicitud al servidor');
    } finally {
      setLoading(false);
    }
  };

  return { crearCita, loading, error };
};

export default useCrearCita;
