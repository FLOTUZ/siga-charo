import { Button } from "@chakra-ui/button";
import Solicitud from "../../components/reportes/Solicitud/Solicitud";


function Reportes() {

    const imprimir = () => {
        
    }

    return (
       <>
        <Solicitud solicitante="Josue Joyarib"/>

        <Button onClick={imprimir}></Button>
       </>
    );
}



export default Reportes;