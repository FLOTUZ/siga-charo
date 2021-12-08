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
  Select,
  Link,
} from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import Scaffold from "../../components/layout/Scaffold";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function nueva_Solicitud_Paso_1() {

  const { query } = useRouter();
  const router = useRouter();

  const [apoyo, setApoyo] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [fecha, setFecha] = useState("");
  const [descuento, setdescuento] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    console.log(router.query);
  }, []);

  const ejecutar = async () => {
    let name = query.name;
    let apellidoP = query.apellidoP;
    let apellidoM = query.apellidoM;
    let celular = query.celular;
    let telefono = query.telefono;
    let localidad = query.localidad;

    console.log({name, apellidoP, apellidoM, celular, telefono, localidad, apoyo, cantidad, fecha, descuento, total });
  };

  let rutas = [
    {
      url: "/nueva_solicitud_paso_3",
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
          <Box bg="white" w="100%" p={5} color="white"></Box>
          <Box>
            <Progress m={5} value={65} />
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
                <Box p="4" bg="green.400" rounded={40}>
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
                  <option>Ejemplo 1</option>
                  <option>Ejemplo 2</option>
                  <option>Ejemplo 3</option>
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
              <Button colorScheme="teal" variant="solid" mr="4" onClick={()=>ejecutar()}>
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
      </div>
    </Scaffold>
  );
}
export default nueva_Solicitud_Paso_1;
