import Scaffold from "../components/layout/Scaffold";
import { useEffect } from "react";
import { obtenerSesion } from "../utils/Utils";
import { WrapItem,Wrap,Stack,Button,Textarea,Text,Stat, StatLabel, StatNumber,StatHelpText, StatArrow,
  StatGroup, Center } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'


function Dashboard() {
  useEffect(() => {
    let user = obtenerSesion("user");
    console.log(user);
  });

  let rutas = [
    {
      url: "/dashboard",
      nombre: "Dashboard",
      isCurrentPage: true,
    },
  ];
  

  return (
    <>
      <Scaffold titulo="Inicio"  rutas={rutas}>
        <Wrap spacing='5rem' m={10}  textAlign='center'   >
            <WrapItem>
              <Center w='140px' h='100px' bg='core.850' borderRadius='10px'>
            <Stat>
                    <StatLabel>
                    <Text  color='white' fontSize='20px' >
                      Solicitud en Espera
                      </Text>
                      </StatLabel>
                    <StatNumber>
                      <Text  color='white' fontSize='20px' >
                          2
                        </Text>
                      </StatNumber>
                  </Stat>
                  </Center>
            </WrapItem>
            <WrapItem>
            <Center w='140px' h='100px' bg='core.850' borderRadius='10px'>
            <Stat >
                      <StatLabel >
                        <Text  color='white' fontSize='20px'>
                            Aprobados      
                          </Text>
                      </StatLabel>
                        <StatNumber>
                          <Text  color='white' fontSize='20px'>
                             5
                          </Text>
                        </StatNumber>
                  </Stat>
                  </Center>
            </WrapItem>
            <WrapItem >
            <Center w='140px' h='100px' bg='core.850' borderRadius='10px'>
            <Stat>
                    <StatLabel>
                      <Text  color='white' fontSize='20px'>
                          Entregados Hoy
                        </Text>
                      </StatLabel>
                    <StatNumber>
                      <Text  color='white' fontSize='20px'>
                         5
                        </Text>
                      </StatNumber>
                  </Stat>
                  </Center>
             </WrapItem>
             <WrapItem >
             <Center w='140px' h='100px' bg='core.850' borderRadius='10px'>
                  <Stat>
                    <StatLabel>
                    <Text  color='white' fontSize='20px'>
                      Borradores
                      </Text>
                      </StatLabel>
                    <StatNumber>
                    <Text  color='white' fontSize='20px' >
                        2
                      </Text>
                      </StatNumber>
                  </Stat>
                  </Center>
             </WrapItem>
             <WrapItem>
                   <Button rightIcon={<AddIcon color='white' />}  colorScheme='white' variant='ghost' size='lg'  
                    background='teal' borderRadius='50px' w='180px' h='100px' >
                   <Text  color='white' fontSize='20px' >
                     Nueva Solicitud
                     </Text>
                    </Button>
             </WrapItem>
  
        </Wrap>  
        <Textarea placeholder='Notas'  backgroundColor='core.850' color='white' fontSize='20px'/>
      </Scaffold>
    </>
  );
}

export default Dashboard;
