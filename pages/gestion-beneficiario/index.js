import { Button, ButtonGroup } from '@chakra-ui/react'
import Scaffold from "../../components/layout/Scaffold"


function Beneficiarios() {

    let rutas = [
        {
          url: "/gestion-beneficiario",
          nombre: "beneficiario",
          isCurrentPage: true,
        },
      ];

    return (
        <Scaffold titulo="Beneficiarios" rutas={rutas} descripcion="Gestion de Beneficiarios">
            <div>
                Enter
                <Button colorScheme='blue' margin="2rem" >Button</Button>
            </div>
        </Scaffold>
    );
}


export default Beneficiarios;