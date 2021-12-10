import Head from "next/head";
import Scaffold from "../../components/layout/Scaffold";
import {
  Text,
  Button,
  Flex,
  Box,
  Input,
  Spacer,
  Select,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Editar_Solicitudes() {


  const [apoyo, setApoyo] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [fecha, setFecha] = useState("");
  const [descuento, setdescuento] = useState("");
  const [total, setTotal] = useState("");

  let rutas = [
    {
      url: "/solicitudes/editar_solicitudes",
      nombre: "Editar Solicitudes",
      isCurrentPage: true,
    },
  ];

  return (
    <Scaffold
      rutas={rutas}
      titulo="Editar Solicitudes"
      descripcion="Detalles de Solicitud"
    >
      <Head>
        <title>Editar Solicitud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box bg="white" w="100%" p={5} color="white"></Box>
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
              <Text m={1}>Elegir Apoyo</Text>
              <Select
                m={1}
                id="apoyo"
                value={apoyo}
                onChange={(e) => {
                  setApoyo(e.currentTarget.value);
                }}
                placeholder="Apoyo..."
                required={true}
              >
                <option>Calentador Solar</option>
                <option>Arena</option>
              </Select>
              <Flex m={1}>
                <Box p="4">
                  <Text>Cantidad</Text>
                  <Input
                    type="number"
                    id="cantidad"
                    value={cantidad}
                    onChange={(e) => {
                      setCantidad(e.currentTarget.value);
                    }}
                    required={true}
                  />
                </Box>
                <Box p="4">
                  <Text>Fecha</Text>
                  <Input
                    type="date"
                    id="fecha"
                    value={fecha}
                    onChange={(e) => {
                      setFecha(e.currentTarget.value);
                    }}
                    required={true}
                  />
                </Box>
              </Flex>
              <Flex m={1}>
                <Box p="4">
                  <Text>Descuento</Text>
                  <Input
                    type="number"
                    id="descuento"
                    value={descuento}
                    onChange={(e) => {
                      setdescuento(e.currentTarget.value);
                    }}
                    required={true}
                  />
                </Box>
                <Box p="4">
                  <Text>Total</Text>
                  <Input
                    type="number"
                    background="gray"
                    id="total"
                    value={total}
                    onChange={(e) => {
                      setTotal(e.currentTarget.value);
                    }}
                    required={true}
                  />
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </Box>
        <Box bg="white" w="100%" p={5} color="white"></Box>
        <Flex w="170vh" alignItems="center" justifyContent="center">
          <Box p="2"></Box>
          <Spacer />
          <Box>
            <Button
              colorScheme="teal"
              variant="solid"
              mr="4"
              //onClick={() => ejecutar()}
            >
              Guardar
            </Button>
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
    </Scaffold>
  );
}

export default Editar_Solicitudes;
