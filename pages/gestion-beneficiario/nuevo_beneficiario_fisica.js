import Scaffold from "../../components/layout/Scaffold";
import Link from "next/link";
import Head from "next/head";
import React from "react";
import { sesion } from "../../utils/Utils";
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
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { Crear } from "../../services/API";

function NuevoBeneficiarioFisica() {
  //----------Estado de la interfaz--------//
  const router = useRouter();
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

  //-------DATOS DE Beneficiario Tabla Fisica-----------//
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [estadoSocioEconomico, setEstadoSocioEconomico] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [curp, setCurp] = useState("");
  //------------------ Usuario Logueado  ---------------
  const [usuarioLogueado, setUsuarioLogueado] = useState({
    idUsuario: 0, // completar
  });
  useEffect(() => {
    let usuario = sesion();
    setUsuarioLogueado(usuario);
  }, []);

  const [comunidad, setComunindad] = useState("");

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
        comunidadId: 1,
      };

      let respuesta = await Crear("/beneficiarios", beneficiario);

      console.log(respuesta);
      
   let beneficiarioFisica = {
     beneficiarioId: respuesta.data.idBeneficiario,
     apellidoPaterno: apellidoPaterno,
     apellidoMaterno: apellidoMaterno,
     estadoSocioEconomico: estadoSocioEconomico,
     fechaNacimiento: new Date(fechaNacimiento).toISOString(),
     curp: curp,
   };
    console.log(beneficiarioFisica);

   let respuestaF = await Crear("/personas-fisicas", beneficiarioFisica);
    if (respuestaF.status === 200) {
       toast({
         title: "Nuevo Beneficiario Guardado",
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
          <HStack>
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <Spacer />
            <>
              <Flex margin="2rem">
                <Button
                  ref={btnRef}
                  colorScheme="teal"
                  onClick={onOpen}
                  margin="2rem"
                >
                  Agregar Comunidad
                </Button>
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
                  <DrawerHeader>Agregar Comunidad</DrawerHeader>

                  <DrawerBody>
                    <Input placeholder="Comunidad" />
                  </DrawerBody>

                  <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button colorScheme="blue">Save</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </>
            <Spacer />
          </HStack>
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
                  required={true}
                  onChange={(e) => {
                    setApellidoPaterno(e.target.value);
                  }}
                />
                <Text m={1}>Apellido Materno</Text>
                <Input
                  m={1}
                  id="apellidoM"
                  placeholder="Apellido Materno"
                  required={true}
                  onChange={(e) => {
                    setApellidoMaterno(e.target.value);
                  }}
                />
                <Text m={1}>CURP</Text>
                <Input 
                m={1} 
                id="curp" 
                placeholder="curp" 
                required={true} 
                onChange={(e) => {
                  setCurp(e.target.value);
                }}/>
                <Text m={1}>Fecha Nacimiento</Text>
                <Input 
                m={1} 
                id="dateREfistro" 
                type="date" 
                required={true} 
                onChange={(e) => {
                  setFechaNacimiento(e.target.value);
                }}/>
                <Text m={1}>Telefono Celular</Text>
                <Input
                  m={1}
                  id="celular"
                  placeholder="Celular"
                  required={true}
                  onChange={(e) => {
                    setTelefonoCelular(e.target.value);
                  }}
                />
                <Text m={1}>Telefono</Text>
                <Input
                  m={1}
                  id="telefono"
                  placeholder="Telefono"
                  required={true}
                  onChange={(e) => {
                    setTelefonoLocal(e.target.value);
                  }}
                />
                <Text m={1}>correo</Text>
                <Input
                  m={1}
                  id="correo"
                  placeholder="correo"
                  required={true}
                  onChange={(e) => {
                    setCorreo(e.target.value);
                  }}
                />
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
                <Text m={1}>Comunidad</Text>
                <Input
                  m={1}
                  id="Comunidad"
                  placeholder="Comunidad"
                  required={true}
                />
                <Text m={1}>Socio Economico</Text>
                <Input
                  m={1}
                  id="Comunidad"
                  required={true}
                  size="lg"
                  onChange={(e) => {
                    setEstadoSocioEconomico(e.target.value);
                  }}
                />
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
                onClick={() => guardarBeneficiario()}
              >
                Guardar
              </Button>
              <Button colorScheme="teal" variant="outline">
                Descartar
              </Button>
            </Box>
          </Flex>
        </main>
      </div>
    </Scaffold>
  );
}

export default NuevoBeneficiarioFisica;
