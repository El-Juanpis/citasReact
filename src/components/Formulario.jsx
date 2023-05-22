// rfce, rafce
import {useState,useEffect} from 'react';
import '../css/Formulario.css';
import Error from './Error';

const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {

  const[nombre,setNombre] = useState('');
  const[propietario,setPropietario] = useState('');
  const[email,setEmail] = useState('');
  const[fecha,setFecha] = useState('');
  const[sintomas,setSintomas] =useState('');


  const [error,setError] = useState(false);
  
  // si dejaramos el console.log afuera se estarian imprimiendo cambios del objeto continuamente, con useefect lo que pasa es que se ejecuta cuando todo el objeto esta listo, en este caso cuando le demos clic al boton
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
    } 
}, [paciente])
  

  const generarId = () =>{
   const random= Math.random().toString(36).substr(2);
   const fecha =Date.now().toString(36);

   return random +fecha;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    // Validacion del Formulario

    if([nombre,propietario,email,fecha,sintomas].includes('')){
      // console.log('Hay almenos un campo vacio')
      // el estado de error por defecto esta en false, si falla la validacion de arriba y se envia el form, el setError pasa a true
      setError(true);
      return;
    }
    // regresa el estado de nuevo a falso
    setError(false)

  // Objeto de Paciente

    const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas
        }

        if(paciente.id){
          //editando el registrpo
          objetoPaciente.id=paciente.id
          const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente :pacienteState)

          setPacientes(pacientesActualizados);
          setPaciente({});
        }else{
            objetoPaciente.id=generarId();
            setPacientes([...pacientes, objetoPaciente]);

        }
  // console.log(objetoPaciente);

    // esto lo que va a hacer es tomame una copia de pacientes y lo que este en objeto pacientes lo vas colocando en pacientes, toma una copia y agrega el nuevo objeto.
    // setPacientes([...pacientes,objetoPaciente]);

    // reiniciar el form
// VUELVe lo que hay en las variables a lo que tiene el set que es el que modifica la variable
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');
  }
  return (
    <div className="ContenedortituloForm">
      <h2 className='formTitulo'>
        Seguimiento Pacientes
      </h2>

      <p className='formParrafoListadoPacientes'> 
        Añade Pacientes y {' '}
        <span className='FormspanAñadePacientes'>Administralos</span>
      </p>

      <form className='formRealDad' 
      onSubmit={handleSubmit}
      > 
        {error && <Error>Todos los campos son Obligatorios</Error>}
        <div className='boxform'>
           {/* El Htmlfor o en html for es para cuando las personas clickean por ejemplo en el label los lleva al input*/}
          <label className='formLabel' htmlFor="mascota"> 
            Nombre Mascota
          </label>

          <input
            id='mascota'
            className="FormInput" 
            type="text"
            placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            /* onchange es igual a un eventlistener */
            /* imprimirmos el evento .target pa especificar que estamos aqui y value para ver el valor */
            /* caada que el onchange este cambiando set nombre va a ir escribiendo en la variable nombre */
          />
        </div>

        <div>
          <label className='formLabel' htmlFor="propietario"> 
            Nombre Propietario
          </label>

          <input
            id='propietario'
            className="FormInput"
            type="text"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div>
          <label className='formLabel' htmlFor="email"> 
            Email
          </label>

          <input
            id='email'
            className="FormInput"
            type="email"
            placeholder="Email Propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className='formLabel' htmlFor="alta"> 
            Alta
          </label>

          <input
            id='alta'
            className="FormInput"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div>
          <label className='formLabel' htmlFor="sintomas"> 
            Alta
          </label>
            <textarea
              id='sintomas'
              className='FormInput'
              placeholder='Describe Los Sintomas'
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            />
        </div>

        <input 
          type="submit"
          className='ButtonForm'
          // si la ide de paciente se repite es editar, si es distinta se coloca el boton en agregar paciente     
          value={paciente.id ? 'Editar Paciente': 'Agregar Paciente'}
        />
      </form>
       
    </div>
  )
}

export default Formulario