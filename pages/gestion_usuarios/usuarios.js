import Scaffold from "../../components/layout/Scaffold";
import IBMDataTable from "../../components/Tabla/IBMDataTable";
import Table  from "../../components/Tabla/IBMDataTable";
function usuarios() {
    let rutas = [
        {
          url: "/gestion_de_usuarios/usuarios",
          nombre: "Usuarios",
          isCurrentPage: true,
        },
      ];

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
        }
      ];
 



    return (
        <Scaffold  
        rutas={rutas}
        titulo="Gestion de Usuarios"
        descripcion="Usuarios">
  
        <IBMDataTable m={2}  headers={headers} rows={rows} ></IBMDataTable>
        </Scaffold>
    );
}

export default usuarios;