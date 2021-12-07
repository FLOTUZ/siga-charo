import Head from "next/head";
import {
  FormControl,
  FormLabel,
  Text,
  Button,
  Flex,
  Box,
  Spacer,
  Select,
} from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import Scaffold from "../../components/layout/Scaffold";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useEffect } from "react";

function nueva_Solicitud_Paso_2() {

  const router = useRouter();
  useEffect(()=>{
    console.log(router.query);
  },[])
  
  
  let rutas = [
    {
      url: "/nueva_solicitud_paso_2",
      nombre: "Nueva Solicitud",
      isCurrentPage: true,
    },
  ];

  return (
    <Scaffold
      rutas={rutas}
      titulo="Nueva Solicitud"
      descripcion="Lugar de Origen del Solicitante"
    >
      <div>
        <Head>
          <title>Nueva Solicitud</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Box bg="white" w="100%" p={5} color="white"></Box>
          <Box>
            <Progress m={5} value={50} />
            <Flex w="170vh" alignItems="center" justifyContent="center">
              <Flex alignItems="center" justifyContent="center" w="100vh">
                <Box p="4" bg="green.400" rounded={40}>
                  1
                </Box>
                <Spacer />
                <Box p="4" bg="green.400" rounded={40}>
                  2
                </Box>
                <Spacer />
                <Box p="4" bg="gray.400" rounded={40}>
                  3
                </Box>
                <Spacer />
                <Box p="4" bg="gray.400" rounded={40}>
                  4
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Box bg="white" w="100%" p={5} color="white"></Box>
          <Box>
            <Flex w="170vh" justifyContent="center">
              <Flex
                direction="column"
                w="110vh"
                borderStyle="solid"
                borderColor="gray.200"
                borderWidth="2px"
                p={2}
                rounded={6}
              >
                <Text m={1}>Lugar de Origen</Text>
                <Select m={1} placeholder="Lugar...">
                  <option>Ejemplo 1</option>
                  <option>Ejemplo 2</option>
                  <option>Ejemplo 3</option>
                </Select>
                <Button m={1} colorScheme="teal" variant="solid">
                  Agregar Nuevo Lugar de Origen
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box m={20} bg="white" w="100%" p={5} color="white"></Box>
          <Flex w="170vh" alignItems="center" justifyContent="center">
            <Box p="2"></Box>
            <Spacer />
            <Box>
              <Link href="/solicitudes/nueva_Solicitud_Paso_3">
                <a>
                  <Button colorScheme="teal" variant="solid" mr="4">
                    Siguiente
                  </Button>
                </a>
              </Link>
              <Link href="/dashboard">
                <a>
                  <Button colorScheme="teal" variant="outline">
                    Descartar
                  </Button>
                </a>
              </Link>
            </Box>
          </Flex>
        </main>
      </div>
    </Scaffold>
  );
}

export default nueva_Solicitud_Paso_2;
