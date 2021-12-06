import Head from "next/head";
import {
  FormControl,
  FormLabel,
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

function NuevoBeneficiarioMoralPaso1() {
  let rutas = [
    {
      url: "/nuevo_beneficiario_moral_paso_1",
      nombre: "Nuevo Beneficiario",
      isCurrentPage: true,
    },
  ];

  return (
    <Scaffold
      rutas={rutas}
      titulo="Nuevo Beneficiario"
      descripcion="Informacion de la Institución"
    >
      <div>
        <Head>
          <title>Nuevo Beneficiario</title>
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
              </Flex>
            </Flex>
          </Box>
          <Box bg="white" w="100%" p={5} color="white"></Box>
          <Box>
            <Flex  w="170vh" justifyContent="center">
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
                <Input m={1} id="name" placeholder="Nombre(s)" required={true} />
                <Text m={1}>Direccion</Text>
                <Input m={1} id="Direccion" placeholder="Direccion" required={true} />
                <Text m={1}>Comunidad</Text>
                <Input m={1} id="Comunidad" placeholder="Comunidad" required={true} />
                <Text m={1}>Telefono Celular</Text>
                <Input m={1} id="celular" placeholder="Celular" required={true} />
                <Text m={1}>Telefono</Text>
                <Input m={1} id="telefono" placeholder="Telefono" required={true} />
                <Text m={1}>correo</Text>
                <Input m={1} id="correo" placeholder="correo" required={true} />
                <Text m={1}>rfc</Text>
                <Input m={1} id="rfc" placeholder="rfc" required={true} />
              </Flex>
            </Flex>
          </Box>
          <Box bg="white" w="100%" p={5} color="white"></Box>
          <Flex w="170vh" alignItems="center" justifyContent="center">
            <Box p="2"></Box>
            <Spacer />
            <Box>
              <Link href="/gestion-beneficiario/nuevo_beneficiario_moral_paso_2">
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

export default NuevoBeneficiarioMoralPaso1;
