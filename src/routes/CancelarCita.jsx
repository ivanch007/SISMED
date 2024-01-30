import Select from 'react-select'
import { useSelect } from "../hooks/useSelect"

export const CancelarCita = () => {

  const { motivo, opcionesCancelar, motivoOnChange } = useSelect()

  return (
    <>
      <form className='select-form'> 
        <Select
          value={motivo}
          options={opcionesCancelar}
          onChange={motivoOnChange} />
      </form>

    </>
  )
}
