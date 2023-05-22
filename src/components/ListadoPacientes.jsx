import "../css/ListadoPacientes.css";
import Paciente from "./Paciente";


const ListadoPacientes = ({ pacientes,setPaciente,eliminarPaciente }) => {
  // console.log(pacientes);
    
  return (
    <div className="contenList">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="tituloListadoPacientes">Listado Pacientes</h2>

          <p className="pListadoPacientes">
            Administra tus {""}
            <span className="spanPacientes">Pacientes y citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente 
            key={paciente.id} 
            paciente={paciente}
            setPaciente={setPaciente} 
            eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="tituloListadoPacientes">No Hay Pacientes</h2>

          <p className="pListadoPacientes">
            Comienza agregando pacientes {""}
            <span className="spanPacientes">y Apareceran en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
