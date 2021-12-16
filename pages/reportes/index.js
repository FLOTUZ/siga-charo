import Scaffold from "../../components/layout/Scaffold";
import { Button } from "@chakra-ui/button";

let rutas = [
  {
    url: "/Reporte",
    nombre: "Generar Reporte",
    isCurrentPage: true,
  },
];

function Reportes() {
  const imprimir = () => {};

  return (
    <Scaffold
      titulo="Reportes"
      descripcion="Generación de Reporte"
      rutas={rutas}
    >
      <>
        <Button onClick={imprimir}></Button>
      </>
    </Scaffold>
  );
}

export default Reportes;
