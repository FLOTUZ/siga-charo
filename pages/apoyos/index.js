import Scaffold from "../../components/layout/Scaffold";
import IBMDataTable from "../../components/Tabla/IBMDataTable";

function Apoyos() {
  return (
    <Scaffold titulo="Apoyos" descripcion="Catalogo de apoyos">
      <div style={{ margin: "2rem" }}>
        <IBMDataTable/>
      </div>
    </Scaffold>
  );
}

export default Apoyos;
