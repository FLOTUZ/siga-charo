import Scaffold from "../../components/layout/Scaffold";
import { Button } from "@chakra-ui/button";
import Solicitud from "../../components/reportes/Solicitud/Solicitud";

let rutas = [
    {
      url: "/Reporte",
      nombre: "Generar Reporte",
      isCurrentPage: true,
    },
  ];

function Reportes() {

    const imprimir = () => {
        
    }

    return (
        <Scaffold
            titulo="Reportes"
            descripcion="Generación de Reporte"
            rutas={rutas}>

        
            <>
        
            <Solicitud solicitante="Nombre del usuario"/>
           

            <Button onClick={imprimir}></Button>
            
            </>
        </Scaffold>
    );
}

export default Reportes;