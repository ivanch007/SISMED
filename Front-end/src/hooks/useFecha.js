import { useState } from 'react';

export const useFecha = () => {
  const [fecha, setFecha] = useState(new Date());

  const manejoColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  return { fecha, setFecha, manejoColor };
};
