import Head from 'next/head';
import { 
    FormControl,
    FormLabel,
    Text,
    Button,
    Flex,
    Box,
    Input,
    Spacer
} from '@chakra-ui/react';
import Scaffold from "../../components/layout/Scaffold";

function nueva_Solicitud_Paso_1() {

    let rutas = [
        {
          url: "/nueva_solicitud_paso_1",
          nombre: "Nueva Solicitud",
          isCurrentPage: true,
        },
      ];

    return (
        <Scaffold
      rutas={rutas}
      titulo="Nueva Solicitud"
      descripcion="Agregar usuario"
    >
        <div>
            <Head>
                <title>Nueva Solicitud</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Box bg='white' w='100%' p={5} color='white'></Box>
                <Box>
                    <Flex w='170vh' alignItems="center" justifyContent="center">
                        <Flex alignItems="center" justifyContent="center"  w='100vh'>
                            <Box p='4' bg='green.400' rounded={40}>
                                1
                            </Box>
                            <Spacer />
                            <Box p='4' bg='gray.400' rounded={40}>
                                2
                            </Box>
                            <Spacer />
                            <Box p='4' bg='gray.400' rounded={40}>
                                3
                            </Box>
                            <Spacer />
                            <Box p='4' bg='gray.400' rounded={40}>
                                4
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
                <Box bg='white' w='100%' p={5} color='white'></Box>
                <Box>
                    <Flex height='50vh' w='170vh' justifyContent="center">
                        <Flex direction="column" alignItems="center" justifyContent="center"  w='100vh' background="gray.100" p={12} rounded={6}>
                            <Text>Nombre(s)</Text>
                            <Spacer/>
                            <Input placeholder='Nombre(s)' required={true}/>
                            <Text>Apellido Paterno</Text>
                            <Spacer/>
                            <Input placeholder='Apellido' required={true}/>
                            <Text>Apellido Materno</Text>
                            <Spacer/>
                            <Input placeholder='Apellido Materno' required={true}/>
                            <Text>Telefono Celular</Text>
                            <Spacer/>
                            <Input placeholder='Celular' required={true}/>
                            <Text>Telefono</Text>
                            <Spacer/>
                            <Input placeholder='Telefono' required={true}/>
                        </Flex>
                    </Flex>
                </Box>
                <Box bg='white' w='100%' p={5} color='white'></Box>
                <Flex w='170vh' alignItems="center" justifyContent="center">
                    <Box p='2'>
                    </Box>
                    <Spacer />
                    <Box>
                        <Button colorScheme='teal' variant='solid' mr='4'>
                        Siguiente
                        </Button>
                        <Button colorScheme='red' variant='solid'>Descartar</Button>
                    </Box>
                </Flex>
            </main>
        </div>
        </Scaffold>
    );
}

export default nueva_Solicitud_Paso_1;
