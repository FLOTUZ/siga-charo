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
import { Progress } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Scaffold from "../../components/layout/Scaffold";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { sesion } from "../../utils/Utils";
import { Crear, Consultar } from "../../services/API";

function Nueva_Solicitud_Paso_3() {
  const { query } = useRouter();
  const router = useRouter();
  const toast = useToast();

  const [cargandoApoyos, setCargandoApoyos] = useState(true);
  const [Apoyo, setApoyo] = useState({ idPrograma: 0, nombre: "" });
  const [listaDeApoyos, setListaDeApoyos] = useState([]);
  const [cantidad, setCantidad] = useState("");
  const [fecha, setFecha] = useState("");
  const [descuento, setdescuento] = useState("");
  const [total, setTotal] = useState("");

  //------------------ Usuario Logueado  ---------------
  const [usuarioLogueado, setUsuarioLogueado] = useState({
    idUsuario: 0,
    nombreUsuario: "",
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    email: "",
    puesto: "",
    haceSolicitudes: false,
    altaDeApoyos: false,
    autorizaApoyos: false,
    haceReportes: false,
    administraSistema: false,
    activo: false,
  });

  useEffect(() => {
    let usuario = sesion();
    setUsuarioLogueado(usuario);
    let tipo = query.tipo;
  }, []);

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
    let tipo = query.tipo;

    if(tipo=="fisica"){
      let beneficiario = {
        nombre: query.name,
        direccion: query.direccion,
        rfc: query.rfc,
        telefonoLocal: query.telefono,
        telefonoCelular: query.celular,
        correo: query.correo,
        fechaRegistro: new Date(Date.now()).toISOString(),
        fechaBaja: new Date(Date.now()).toISOString(),
        usuarioCargaId: usuarioLogueado.idUsuario,
        comunidadId: Number(query.localidadS),
      };
  
      let respuestaB = await Crear("/beneficiarios", beneficiario);
  
      let personaFisica = {
        apellidoPaterno: query.apellidoP,
        apellidoMaterno: query.apellidoM,
        estadoSocioEconomico: "NA",
        fechaNacimiento: new Date(query.nacimiento).toISOString(),
        curp: query.curp,
        beneficiarioId: respuestaB.data.idBeneficiario,
      };
  
      let respuestaP = await Crear("/personas-fisicas", personaFisica);

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
        usuarioEntregaId: usuarioLogueado.idUsuario,
        programaId: Apoyo.idPrograma,
        beneficiarioId: respuestaB.data.idBeneficiario,
      };
  
      let respuestaS = await Crear("/solicitudes", solicitud);
  
      if (respuestaB.status == 200 && respuestaP.status == 200 && respuestaS.status == 200) {
        toast({
          title: "Solicitud Creada",
          description: "Se ha creado Solicitud",
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
    }else if(tipo=="moral"){
      let beneficiario = {
        nombre: query.nameI,
        direccion: query.direccion,
        rfc: query.rfc,
        telefonoLocal: query.telefonoI,
        telefonoCelular: query.celularI,
        correo: query.correoI,
        fechaRegistro: new Date(Date.now()).toISOString(),
        fechaBaja: new Date(Date.now()).toISOString(),
        usuarioCargaId: usuarioLogueado.idUsuario,
        comunidadId: Number(query.localidadS),
      };
  
      let respuestaB = await Crear("/beneficiarios", beneficiario);
  
      let personaMoral = {
        nombreRepresentante: query.name,
        apellidoPaternoRepresentante: query.apellidoP,
        apellidoMaternoRepresentante: query.apellidoM,
        telefonoLocalRep: query.telefono,
        telefonoCelularRep: query.celular,
        correoRep: query.correo,
        beneficiarioId: respuestaB.data.idBeneficiario,
      };
  
      let respuestaP = await Crear("/personas-morales", personaMoral);

      let solicitud = {
        fechaSolicitud: new Date(fecha).toISOString(),
        fechaAutorizacion: new Date(Date.now()).toISOString(),
        estatus: "PENDIENTE",
        cantidad: Number(cantidad),
        descuento: Number(descuento),
        costoTotal: Number(total),
        motivoRechazo: "NA",
        fechaEntrega: new Date(Date.now()).toISOString(),
        notas: "NA",
        usuarioAutorizadorId: 1,
        usuarioEntregaId: usuarioLogueado.idUsuario,
        programaId: Apoyo.idPrograma,
        beneficiarioId: respuestaB.data.idBeneficiario,
      };
  
      let respuestaS = await Crear("/solicitudes", solicitud);
  
      if (respuestaB.status == 200 && respuestaP.status == 200 && respuestaS.status == 200) {
        toast({
          title: "Solicitud Creada",
          description: "Se ha creado Solicitud",
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
    }
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
                              <MenuItem
                                key={index}
                                onClick={() => setApoyo(u)}
                              >
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
      </div>
    </Scaffold>
  );
}
export default Nueva_Solicitud_Paso_3;
