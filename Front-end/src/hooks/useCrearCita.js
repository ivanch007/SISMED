import { useState } from 'react';
import axios from 'axios';

export const useCrearCita = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const crearCita = async (profesionalId, fechaHora) => { // Recibe el ID del profesional
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:8000/citas', {
        profesional_id: profesionalId, // Utiliza el ID del profesional
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

