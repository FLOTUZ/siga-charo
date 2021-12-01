import Head from "next/head";
import {
  Heading,
  Text,
  Button,
  HStack,
  Flex,
  Box,
  Tag,
  Input,
  Spacer,
} from "@chakra-ui/react";

function nueva_Solicitud_Paso_1() {
  return (
    <div>
      <Head>
        <title>Nueva Solicitud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h1" size="3xl">
        Nueva Solicitud
      </Heading>
      <Heading size="md">Datos del Solicitante</Heading>
      <main>
        <Box bg="white" w="100%" p={5} color="white"></Box>
        <Box>
          <Flex height="50vh" w="200vh" justifyContent="center">
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              w="100vh"
              background="gray.100"
              p={12}
              rounded={6}
            >
              <Text>Nombre(s)</Text>
              <Spacer />
              <Input placeholder="Nombre(s)" />
              <Text>Apellido Paterno</Text>
              <Spacer />
              <Input placeholder="Apellido" />
              <Text>Apellido Materno</Text>
              <Spacer />
              <Input placeholder="Apellido Materno" />
              <Text>Telefono Celular</Text>
              <Spacer />
              <Input placeholder="Celular" />
              <Text>Telefono</Text>
              <Spacer />
              <Input placeholder="Telefono" />
            </Flex>
          </Flex>
        </Box>
      </main>
    </div>
  );
}

export default nueva_Solicitud_Paso_1;
