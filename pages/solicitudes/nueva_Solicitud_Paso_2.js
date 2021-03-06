import Head from "next/head";
import {
  useToast,
  Input,
  useDisclosure,
  Text,
  Button,
  Flex,
  Box,
  Spacer,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Consultar, Crear } from "../../services/API";
import { Progress } from "@chakra-ui/react";
import Scaffold from "../../components/layout/Scaffold";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { sesion } from "../../utils/Utils";

function Nueva_Solicitud_Paso_2() {
  const { query } = useRouter();
  const router = useRouter();

  const [cargandoLocalidades, setCargandoLocalidades] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const toast = useToast();

  const [localidadSelecionada, setLocalidadSeleccionada] = useState("");
  const [localidad, setLocalidad] = useState({ idComunidad: 0, nombre: "" });
  const [listaDeLocalidades, setListaDeLocalidades] = useState([]);
  const [nuevaLocalidad, setNuevaLocalidad] = useState("");

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

  const altaLocalidad = async () => {                                     
    let respuesta = await Crear("/comunidades", { nombre: nuevaLocalidad });
    if (respuesta.status == 200) {
      consultarLocalidades();
      toast({
        title: "Nueva localidad Creada",
        description: `La localidad ${nuevaLocalidad} se ha creado`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });                                                             
    } else {
      toast({
        title: "Oops.. Algo salio mal",
        description: respuesta.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };  
  //---------------------------------------
  const consultarLocalidades = async () => {    
    let respuesta = await Consultar("/comunidades");

    if (respuesta.status == 200) {
      setListaDeLocalidades(respuesta.data);
      setCargandoLocalidades(false);
    } else {
      toast({
        title: "Oops.. Algo sucedi??",
        description: respuesta.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const ejecutar = async () => {
    let tipo = query.tipo;

    if(tipo == "fisica"){
      let tipo = query.tipo;
      let name = query.name;
      let apellidoP = query.apellidoP;
      let apellidoM = query.apellidoM;
      let direccion = query.direccion;
      let rfc = query.rfc;
      let nacimiento = query.nacimiento;
      let curp = query.curp;
      let celular = query.celular;
      let telefono = query.telefono;
      let correo = query.correo;
      let localidadS = localidad.idComunidad;

      router.push({
        pathname: "/solicitudes/nueva_Solicitud_Paso_3",
        query: {
          tipo,
          name,
          apellidoP,
          apellidoM,
          direccion,
          rfc,
          nacimiento,
          curp,
          celular,
          telefono,
          correo,
          localidadS,
        },
      });
    }else if(tipo=="moral"){
      let tipo = query.tipo;
      let nameI = query.nameI;
      let celularI = query.celularI;
      let telefonoI = query.telefonoI;
      let correoI = query.correoI;
      let name = query.name;
      let apellidoP = query.apellidoP;
      let apellidoM = query.apellidoM;
      let direccion = query.direccion;
      let rfc = query.rfc;
      let celular = query.celular;
      let telefono = query.telefono;
      let correo = query.correo;
      let localidadS = localidad.idComunidad;
      
      router.push({
        pathname: "/solicitudes/nueva_Solicitud_Paso_3",
        query: {
          tipo,
          nameI,
          celularI,
          telefonoI,
          correoI,
          name,
          apellidoP,
          apellidoM,
          direccion,
          rfc,
          celular,
          telefono,
          correo,
          localidadS,
        },
      });
    }
  };

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
            <Flex  alignItems="center" justifyContent="center">
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
              </Flex>
            </Flex>
          </Box>
          <Box bg="white" w="100%" p={5} color="white"></Box>
          <Box>
            <Flex justifyContent="center">
              <Flex
                direction="column"
                w="110vh"
                borderStyle="solid"
                borderColor="gray.200"
                borderWidth="2px"
                p={2}
                rounded={6}
              >
                <Text m={1}>Localidad</Text>
                <Menu>
                  {({ isOpen }) => (
                    <>
                      <MenuButton
                        isActive={isOpen}
                        as={Button}
                        rightIcon={<ChevronDownIcon />}
                        onClick={() => {
                          setCargandoLocalidades(true);
                          consultarLocalidades();
                        }}
                      >
                        {isOpen
                          ? localidad.nombre
                          : localidad.nombre != ""
                          ? localidad.nombre
                          : "Seleccione"}
                      </MenuButton>
                      <MenuList>
                        {cargandoLocalidades ? (
                          <Stack p="0.5rem">
                            <Skeleton height="1.5rem" />
                            <Skeleton height="1.5rem" />
                            <Skeleton height="1.5rem" />
                          </Stack>
                        ) : listaDeLocalidades.length == 0 ? (
                          <MenuItem>No hay localidades</MenuItem>
                        ) : (
                          listaDeLocalidades.map((u, index) => {
                            return (
                              <MenuItem
                                key={index}
                                onClick={() => setLocalidad(u)}
                                onChange={(index) => setNuevaLocalidad(index.target.value)}
                              >
                                {u.nombre}
                              </MenuItem>
                            );
                          })
                        )}
                        <MenuDivider />
                        <MenuItem ref={btnRef} onClick={onOpen}>
                          Crear nueva Localidad
                        </MenuItem>
                      </MenuList>
                    </>
                  )}
                </Menu>
              </Flex>
            </Flex>
          </Box>
          
          <Flex alignItems="center" justifyContent="center" pt={10}>
            <Box p="2"></Box>
            <Spacer />
            <Box>
              <Button
                colorScheme="teal"
                variant="solid"
                mr="4"
                onClick={() => ejecutar()}
              >
                Siguiente
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
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Crear nueva Localidad</DrawerHeader>

              <DrawerBody>
                <Input
                  placeholder="Nombre de la localidad"
                  onChange={(e) => setNuevaLocalidad(e.target.value)}
                />
              </DrawerBody>

              <DrawerFooter>
                <Box>
                  <Button onClick={onClose}>Cancelar</Button>
                  <Button colorScheme="blue" onClick={() => altaLocalidad()}>
                    Guardar
                  </Button>
                </Box>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </main>
      </div>
    </Scaffold>
  );
}

export default Nueva_Solicitud_Paso_2;
