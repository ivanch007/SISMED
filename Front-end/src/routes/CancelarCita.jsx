import Select from 'react-select'
import { useSelect } from "../hooks/useSelect"
import { Navbar } from "../componentes/Navbar"

export const CancelarCita = () => {

  const { motivo, opcionesCancelar, motivoOnChange } = useSelect()

  return (
    <>
    <Navbar></Navbar>
      <form className='select-form'> 
        <Select
          value={motivo}
          options={opcionesCancelar}
          onChange={motivoOnChange} />
      </form>

    </>
  )
}
