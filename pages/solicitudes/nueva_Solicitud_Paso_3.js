import Head from 'next/head';
import { 
    FormControl,
    FormLabel,
    Text,
    Button,
    Flex,
    Box,
    Input,
    Spacer,
    Select
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
      descripcion="Detalles del Apoyo Solicitado"
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
                            <Box p='4' bg='green.400' rounded={40}>
                                2
                            </Box>
                            <Spacer />
                            <Box p='4' bg='green.400' rounded={40}>
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
                        <Flex 
                            direction="column"
                            w='110vh'
                            borderStyle="solid" 
                            borderColor="gray.200" 
                            borderWidth="2px" 
                            p ={2}  rounded={6}
                        >
                            <Text m={1}>Elegir Apoyo</Text>
                            <Select m={1} placeholder="Apoyo...">
                                <option>Ejemplo 1</option>
                                <option>Ejemplo 2</option>
                                <option>Ejemplo 3</option>
                            </Select>
                            <Flex m={1}>
                                <Box p='4'>
                                    <Text>Cantidad</Text>
                                    <Input/>
                                </Box>
                                <Box p='4'>
                                    <Text>Fecha</Text>
                                    <Input type='date'/>
                                </Box>
                            </Flex>
                            <Flex m={1}>
                                <Box p='4'>
                                    <Text>Descuento</Text>
                                    <Input/>
                                </Box>
                                <Box p='4'>
                                    <Text>Total</Text>
                                    <Input background='gray'/>
                                </Box>
                            </Flex>
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
                        <Button colorScheme='teal' variant='outline'>Descartar</Button>
                    </Box>
                </Flex>
            </main>
        </div>
        </Scaffold>
    );
}

export default nueva_Solicitud_Paso_1;
