import '../css/ListadoPacientes.css'

const Paciente = ({paciente,setPaciente,eliminarPaciente}) => {

  const {nombre,propietario,email,fecha,sintomas,id}=paciente;

  const handleEliminar = () =>{
    const respuesta = confirm('Deseas eliminar este paciente');

    if(respuesta){
      eliminarPaciente(id)
    }
  }
  return (
    <div className='pacientes'> 

    <p className='pPacientes'>Nombre:{' '}
      <span className='spanPaciente'>{nombre}</span>
    </p>

    <p className='pPacientes'>Propietario:{' '}
      <span className='spanPaciente'>{propietario}</span>
    </p>

    <p className='pPacientes'>Email:{' '}
      <span className='spanPaciente'>{email}</span>
    </p>

    <p className='pPacientes'>Fecha Alta:{' '}
      <span className='spanPaciente'>{fecha}</span>
    </p>

    <p className='pPacientes'>sintomas:{' '}
      <span className='spanPaciente'>{sintomas}</span>
    </p>

    <div className='buttonBox'>
      <button 
        className='editButton' 
        type='button'
        onClick={()=>setPaciente(paciente)}>
        Editar
      </button>
      <button 
      className='deleteButton' 
      type='button'
      onClick={handleEliminar}>
        Eliminar
      </button>
    </div>
  </div>
  )
}

export default Paciente