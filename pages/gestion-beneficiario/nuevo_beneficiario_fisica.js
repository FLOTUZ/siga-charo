import Scaffold from "../../components/layout/Scaffold";
import Head from "next/head";
import React from "react";
import { sesion } from "../../utils/Utils";
import {
  FormLabel,
  Text,
  Button,
  Flex,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useToast,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Skeleton,
  Stack,
  ChevronDownIcon,
  MenuDivider,
} from "@chakra-ui/react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Crear, Consultar } from "../../services/API";

function NuevoBeneficiarioFisica() {
  //----------Estado de la interfaz--------//
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const toast = useToast();
  //-------DATOS DE Beneficiario Tabla Beneficiario-----------//
  const [nombreBeneficiario, setNombreBeneficiario] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefonoLocal, setTelefonoLocal] = useState("");
  const [telefonoCelular, setTelefonoCelular] = useState("");
  const [correo, setCorreo] = useState("");
  const [rfc, setRfc] = useState("");
//-------DATOS DE Beneficiario Tabla fisica-----------//
const [apellidoPaterno, setApellidoPaterno] =
  useState("");
const [apellidoMaterno, setApellidoMaterno] =
  useState("");
const [estadoSocioEconomico, setEstadoSocioEconomico] = useState("");
const [fechaNacimiento, setFechaNacimiento] = useState("");
const [curp, setCurp] = useState("");
const [beneficiarioId, setBEneficiarioId] = useState("");
  //-------Comunidad-----------//
  const [cargandoComunidad, setCargandoComunidad] = useState(true);
  const [comunidad, setComunidad] = useState({ idComunidad: 0, nombre: "" });
  const [listaComunidades, setListaComunidades] = useState([]);
  const [nuevaComunidad, setNuevaComunidad] = useState("");
  //------------------ Usuario Logueado  ---------------
  const [usuarioLogueado, setUsuarioLogueado] = useState({
    idUsuario: 0, // completar
  });
  useEffect(() => {
    let usuario = sesion();
    setUsuarioLogueado(usuario);
  }, []);

  const altaComunidad = async () => {
    //--------inicia
    let respuesta = await Crear("/comunidades", { nombre: nuevaComunidad });
    if (respuesta.status == 200) {
      consultarComunidad();
      toast({
        title: "Nueva Comunidad Agregada",
        description: ` ${nuevaComunidad} se ha agregado`,
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
  const consultarComunidad = async () => {
    //---- inicia
    let respuesta = await Consultar("/comunidades");

    if (respuesta.status == 200) {
      setListaComunidades(respuesta.data);
      setCargandoComunidad(false);
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

  const guardarBeneficiario = async () => {
    try {
      let beneficiario = {
        nombre: nombreBeneficiario,
        direccion: direccion,
        telefonoLocal: telefonoLocal,
        telefonoCelular: telefonoCelular,
        correo: correo,
        fechaRegistro: new Date(Date.now()).toISOString(),
        rfc: rfc,
        usuarioCargaId: 1,
        comunidadId: comunidad.idComunidad,
      };

      console.log(beneficiario);
      let respuesta = await Crear("/beneficiarios", beneficiario);

      let beneficiarioFisica = {
        benficiarioId: respuesta.idBenficiario,
        apellidoPaterno: apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
        estadoSocioEconomico: estadoSocioEconomico,
        fechaNacimiento: fechaNacimiento,
        curp: curp,
      };

      let respuestaF = await Crear("/personas-fisicas", beneficiarioFisica);
      if (respuestaF.status === 200) {
        toast({
          title: "Nuevo Beneficiario Guardaro",
          descripcion: `El Beneficiario se ha guardado`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Oops.. Algo salio mal",
          descripcion: respuesta.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (e) {
      toast({
        title: "Verifica los datos",
        description: e.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.log(e.message);
    }
  };

  let rutas = [
    {
      url: "/nuevo_beneficiario_fisica",
      nombre: "Nuevo Beneficiario",
      isCurrentPage: true,
    },
  ];

  return (
    <Scaffold
      rutas={rutas}
      titulo="Nuevo Beneficiario"
      descripcion="Informacion del Beneficiario"
    >
      <div>
        <Head>
          <title>Nuevo Beneficiario</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Box>
            <Flex
              m="2rem"
              p="2rem"
              direction="column"
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="1px"
              rounded={6}
            >
              <Text m={1}>Nombre(s)</Text>
              <Input
                m={1}
                id="name"
                placeholder="Nombre(s)"
                required={true}
                onChange={(e) => {
                  setNombreBeneficiario(e.target.value);
                }}
              />
              <Text m={1}>Apellido Paterno</Text>
              <Input
                m={1}
                id="apellidoP"
                placeholder="Apellido Paterno"
                required={true}onChange={(e) => {
                  setApellidoPaterno(e.target.value);
                }}
              />
              <Text m={1}>Apellido Materno</Text>
              <Input
                m={1}
                id="apellidoM"
                placeholder="Apellido Materno"
                required={true}onChange={(e) => {
                  setApellidoMaterno(e.target.value);
                }}
              />
              <Text m={1}>CURP</Text>
              <Input m={1} id="curp" placeholder="curp" required={true} onChange={(e) => {
                  setCurp(e.target.value);
                }} />
              <Text m={1}>Fecha Nacimiento</Text>
              <Input m={1} id="dateREfistro" type="date" required={true} onChange={(e) => {
                  setFechaNacimiento(e.target.value);
                }}/>
              <Text m={1}>Telefono Celular</Text>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input
                  id="celular"
                  placeholder="Celular"
                  required={true}
                  onChange={(e) => {
                    setTelefonoCelular(e.target.value);
                  }}
                />
              </InputGroup>
              <Text m={1}>Telefono</Text>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input
                  id="telefono"
                  placeholder="Telefono"
                  required={true}
                  onChange={(e) => {
                    setTelefonoLocal(e.target.value);
                  }}
                />
              </InputGroup>
              <Text m={1}>correo</Text>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="gray.300" />}
                />
                <Input
                  id="correo"
                  placeholder="correo"
                  required={true}
                  onChange={(e) => {
                    setCorreo(e.target.value);
                  }}
                />
              </InputGroup>
              <Text m={1}>RFC</Text>
              <Input
                m={1}
                id="rfc"
                placeholder="rfc"
                required={true}
                onChange={(e) => {
                  setRfc(e.target.value);
                }}
              />
              <Text m={1}>Direccion</Text>
              <Input
                m={1}
                id="Direccion"
                placeholder="Direccion"
                required={true}
                onChange={(e) => {
                  setDireccion(e.target.value);
                }}
              />
              <FormLabel htmlFor="comunidad">Comunidad</FormLabel>{" "}
              {/* se ocupa para menu comunidades*/}
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      isActive={isOpen}
                      rightIcon={<ChevronDownIcon />}
                      onClick={() => {
                        setCargandoComunidad(true);
                        consultarComunidad();
                      }}
                    >
                      {isOpen
                        ? comunidad.nombre
                        : comunidad.nombre != ""
                        ? comunidad.nombre
                        : "Seleccione"}
                    </MenuButton>
                    <MenuList>
                      {cargandoComunidad ? (
                        <Stack p="0.5rem">
                          <Skeleton height="1.5rem" />
                          <Skeleton height="1.5rem" />
                          <Skeleton height="1.5rem" />
                        </Stack>
                      ) : listaComunidades.length == 0 ? (
                        <MenuItem>No comunidades agregadas</MenuItem>
                      ) : (
                        listaComunidades.map((com, index) => {
                          return (
                            <MenuItem
                              key={index}
                              onClick={() => setComunidad(com)}
                            >
                              {com.nombre}
                            </MenuItem>
                          );
                        })
                      )}
                      <MenuDivider />
                      <MenuItem ref={btnRef} onClick={onOpen}>
                        Agregar Comunidad
                      </MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>
              {/*  termina menu*/}
              <Text m={1}>Socio Economico</Text>
              <Input m={1} id="Comunidad" required={true} size="lg" onChange={(e) => {
                  setEstadoSocioEconomico(e.target.value);
                }}/>
            </Flex>

            <Flex w="170vh" alignItems="center" justifyContent="center">
              <Spacer />
              <Box>
                <Button
                  colorScheme="teal"
                  variant="solid"
                  mr="4"
                  onClick={() => guardarBeneficiario()}
                >
                  Guardar
                </Button>
                <Button colorScheme="teal" variant="outline">
                  Descartar
                </Button>
              </Box>
            </Flex>
          </Box>

          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Agregar Comunidad</DrawerHeader>
              <DrawerBody>
                <Input
                  placeholder="Nombre de la Comunidad"
                  onChange={(e) => setNuevaComunidad(e.target.value)}
                />
              </DrawerBody>

              <DrawerFooter>
                <Box>
                  <Button onClick={onClose}>Cancelar</Button>
                  <Button colorScheme="blue" onClick={() => altaComunidad()}>
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

export default NuevoBeneficiarioFisica;
