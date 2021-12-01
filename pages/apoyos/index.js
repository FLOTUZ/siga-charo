import Scaffold from "../../components/layout/Scaffold";
import IBMDataTable from "../../components/Tabla/IBMDataTable";

function Apoyos() {
  const rows = [
    {
      id: "a",
      name: "Load balancer 1",
      status: "Disabled",
    },
    {
      id: "b",
      name: "Load balancer 2",
      status: "Starting",
    },
    {
      id: "c",
      name: "Load balancer 3",
      status: "Active",
    },
  ];

  const headers = [
    {
      key: "name",
      header: "Name",
    },
    {
      key: "status",
      header: "Status",
    },
  ];
  let rutas = [
    {
      url: "/Apoyos",
      nombre: "Apoyo",
      isCurrentPage: true,
    },
  ];

  return (
    <Scaffold titulo="Apoyos" descripcion="Catalogo de apoyos" rutas={rutas} >
      <div style={{ margin: "2rem" }}>
        <IBMDataTable headers={headers} rows={rows} />
      </div>
    </Scaffold>
  );
}

export default Apoyos;
