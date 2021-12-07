import Head from "next/head";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Text,
  Button,
  Flex,
  Box,
  Input,
  Spacer,
  Switch,
} from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import Scaffold from "../../components/layout/Scaffold";
import Link from "next/link";
import { useState } from "react";

function nueva_Solicitud_Paso_1() {

  const [name, setName] = useState("");
  const [apellidoP, setApellidoP] = useState("");
  const [apellidoM, setApellidoM] = useState("");
  const [celular, setCelular] = useState("");
  const [telefono, setTelefono] = useState("");

  const ejecutar = async (name, apellidoP, apellidoM, celular, telefono) =>{
    let datos = [name, apellidoP, apellidoM, celular, telefono];
    console.log(datos);
  };

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
      descripcion="Informacion del Solicitante"
    >
      <div>
        <Head>
          <title>Nueva Solicitud</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Box bg="white" w="100%" p={5} color="white"></Box>
          <Box>
            <Progress m={5} value={30} />
            <Flex w="170vh" alignItems="center" justifyContent="center">
              <Flex alignItems="center" justifyContent="center" w="100vh">
                <Box p="4" bg="green.400" rounded={40}>
                  1
                </Box>

                <Spacer />
                <Box p="4" bg="gray.400" rounded={40}>
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
            <Flex height="50vh" w="170vh" justifyContent="center">
              <Flex
                direction="column"
                w="110vh"
                borderStyle="solid"
                borderColor="gray.200"
                borderWidth="2px"
                p={2}
                rounded={6}
              >
                <Text m={1}>Nombre(s)</Text>
                <Input m={1} id="name" value={name} onChange={(e) => { setName(e.currentTarget.value); }} placeholder="Nombre(s)" required={true} />
                <Text m={1}>Apellido Paterno</Text>
                <Input m={1} id="apellidoP" value={apellidoP} onChange={(e) => { setApellidoP(e.currentTarget.value); }} placeholder="Apellido" required={true} />
                <Text m={1}>Apellido Materno</Text>
                <Input m={1} id="apellidoM" value={apellidoM} onChange={(e) => { setApellidoM(e.currentTarget.value); }} placeholder="Apellido Materno" required={true} />
                <Text m={1}>Telefono Celular</Text>
                <Input m={1} id="celular" value={celular} onChange={(e) => { setCelular(e.currentTarget.value); }} type="tel" placeholder="Celular" required={true} />
                <Text m={1}>Telefono</Text>
                <Input m={1} id="telefono" value={telefono} onChange={(e) => { setTelefono(e.currentTarget.value); }} type="tel" placeholder="Telefono" required={true} />
              </Flex>
            </Flex>
          </Box>

          <Button colorScheme="teal" variant="solid" mr="4" onClick={(event) => ejecutar(name, apellidoP, apellidoM, celular, telefono)}>
                    test
          </Button>

          <Box bg="white" w="100%" p={5} color="white"></Box>
          <Flex w="170vh" alignItems="center" justifyContent="center">
            <Box p="2"></Box>
            <Spacer />
            <Box>
              <Link href="/solicitudes/nueva_Solicitud_Paso_2">
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

export default nueva_Solicitud_Paso_1;
