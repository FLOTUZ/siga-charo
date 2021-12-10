import Head from "next/head";
import {
  Text,
  Button,
  Flex,
  Box,
  Input,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Link,
  useToast,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Scaffold from "../../components/layout/Scaffold";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Actualizar, Consultar } from "../../services/API";

function Editar_Solicitudes() {

  const toast = useToast();

  const [cargandoApoyos, setCargandoApoyos] = useState(true);
  const [Apoyo, setApoyo] = useState({ idPrograma: 0, nombre: "" });
  const [listaDeApoyos, setListaDeApoyos] = useState([]);
  const [cantidad, setCantidad] = useState("");
  const [fecha, setFecha] = useState("");
  const [descuento, setdescuento] = useState("");
  const [total, setTotal] = useState("");
  const [idSolicitud, setIdSolicitud] = useState("");

  let rutas = [
    {
      url: "/solicitudes/editar_solicitudes",
      nombre: "Editar Solicitudes",
      isCurrentPage: true,
    },
  ];

  const consultarApoyos = async () => {
    let respuesta = await Consultar("/programas", {
      fields: {
        idPrograma: true,
        nombre: true,
      },
    });

    if (respuesta.status == 200) {
      setListaDeApoyos(respuesta.data);
      setCargandoApoyos(false);
    } else {
      toast({
        title: "Oops.. Algo sucedió",
        description: respuesta.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const ejecutar = async () => {
    let solicitud = {
      fechaSolicitud: new Date(fecha).toISOString(),
      fechaAutorizacion: new Date(Date.now()).toISOString(),
      estatus: "pendiente",
      cantidad: Number(cantidad),
      descuento: Number(descuento),
      costoTotal: Number(total),
      motivoRechazo: "NA",
      fechaEntrega: new Date(Date.now()).toISOString(),
      notas: "NA",
      usuarioAutorizadorId: 1,
      usuarioEntregaId: 1,
      programaId: Apoyo.idPrograma,
      beneficiarioId: 1,
    };

    let respuestaS = await Actualizar(`/solicitudes/${idSolicitud}`, solicitud);

    if (respuestaS.status == 204) {
      toast({
        title: "Solicitud Actualizada",
        description: "Se ha Actualizado Solicitud",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Oops.. Algo sucedió",
        description: respuestaS.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

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
          <Flex height="60vh" w="170vh" justifyContent="center">
            <Flex
              direction="column"
              w="110vh"
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="2px"
              p={2}
              rounded={6}
            >
              <Box p="4">
                  <Text>Id Solicitud</Text>
                  <Input
                    type="number"
                    id="idSolicitud"
                    value={idSolicitud}
                    onChange={(e) => {
                      setIdSolicitud(e.currentTarget.value);
                    }}
                    required={true}
                  />
                </Box>
              <Text m={1}>Elegir Apoyo</Text>
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      isActive={isOpen}
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      onClick={() => {
                        setCargandoApoyos(true);
                        consultarApoyos();
                      }}
                    >
                      {isOpen
                        ? Apoyo.nombre
                        : Apoyo.nombre != ""
                        ? Apoyo.nombre
                        : "Seleccione"}
                    </MenuButton>
                    <MenuList>
                      {cargandoApoyos ? (
                        <Stack p="0.5rem">
                          <Skeleton height="1.5rem" />
                          <Skeleton height="1.5rem" />
                          <Skeleton height="1.5rem" />
                        </Stack>
                      ) : listaDeApoyos.length == 0 ? (
                        <MenuItem>No hay apoyos</MenuItem>
                      ) : (
                        listaDeApoyos.map((u, index) => {
                          return (
                            <MenuItem key={index} onClick={() => setApoyo(u)}>
                              {u.nombre}
                            </MenuItem>
                          );
                        })
                      )}
                      <MenuDivider />
                    </MenuList>
                  </>
                )}
              </Menu>
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
              onClick={() => ejecutar()}
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
