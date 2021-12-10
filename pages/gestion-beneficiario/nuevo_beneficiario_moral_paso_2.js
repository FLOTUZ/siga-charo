import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Crear } from "../../services/API";
import Scaffold from "../../components/layout/Scaffold";
import { useState,} from "react";
import Link from "next/link";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Text,
  Button,
  InputGroup,
  InputLeftElement,
  Flex,
  Box,
  Input,
  Spacer,
  Progress,
  useToast,
} from "@chakra-ui/react";

function NuevoBeneficiarioMoralPaso2() {
  //--------------------Estado de la interfaz-----------------------//
  //const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const router = useRouter();
  const toast = useToast();
  //-------DATOS DE Beneficiario Tabla Beneficiario-----------//
  const [nombreRep, setNombreRep] = useState("");
  const [apellidoPaternoRep, setApellidoPaternoRep] =
    useState("");
  const [apellidoMaternoRep, setApellidoMaternoRep] =
    useState("");
  const [telefonoCelularRep, setTelefonoCelularRep] = useState("");
  const [telefonoLocalRep, setTelefonoLocalRep] = useState("");
  const [correoRep, setCorreoRep] = useState("");
  const [beneficiarioId, setBEneficiarioId] = useState("");
  //---------------------------------guarda el id entrante------------//
  let { idBeneficiario } = router.query;


  const guardarBeneficiarioMoral = async () => {
    try {
      let personaMoral = {
        nombreRepresentante: nombreRep,
        apellidoPaternoRepresentante: apellidoPaternoRep,
        apellidoMaternoRepresentante: apellidoMaternoRep,
        telefonoLocalRep: telefonoLocalRep,
        telefonoCelularRep: telefonoCelularRep,
        correoRep: correoRep,
        beneficiarioId: idBeneficiario,
      };
      console.log(personaMoral);
      let respuesta = await Crear("/personas-morales", personaMoral);
      if (respuesta.status === 200) {
        router.push({
          pathname: "/gestion-beneficiario/nuevo_beneficiario_moral_paso_2",
          query: { idBeneficiario: respuesta.data.idBeneficiario },
        });
        toast({
          title: "Nuevo Represante",
          descripcion: `La Institución se ha guardado`,
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
      url: "/nuevo_beneficiario_moral_paso_2",
      nombre: "Nuevo Beneficiario",
      isCurrentPage: true,
    },
  ];

  return (
    <Scaffold
      rutas={rutas}
      titulo="Nuevo Beneficiario"
      descripcion="Informacion del Representante"
    >
      <div>
        <Head>
          <title>Nuevo Represante De la Institución</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Box bg="white" w="100%" p={5} color="white"></Box>
          <Box>
            <Progress m={5} value={100} />
            <Flex w="170vh" alignItems="center" justifyContent="center">
              <Flex alignItems="center" justifyContent="center" w="100vh">
                <Box p="4" bg="green.400" rounded={40}>
                  1
                </Box>

                <Spacer />
                <Box p="4" bg="green.400" rounded={40}>
                  2
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Box bg="white" w="100%" p={5} color="white"></Box>
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
                    setNombreRep(e.target.value);
                  }}
                />
                <Text m={1}>Apellido Paterno</Text>
                <Input
                  m={1}
                  id="apellidoP"
                  placeholder="Apellido"
                  required={true}
                  onChange={(e) => {
                    setApellidoPaternoRep(e.target.value);
                  }}
                />
                <Text m={1}>Apellido Materno</Text>
                <Input
                  m={1}
                  id="apellidoM"
                  placeholder="Apellido Materno"
                  required={true}
                  onChange={(e) => {
                    setApellidoMaternoRep(e.target.value);
                  }}
                />
                <Text m={1}>Telefono Local</Text>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="gray.300" />}
                  />
                <Input
                  id="telefono"
                  placeholder="Telefono Local"
                  required={true}
                  onChange={(e) => {
                    setTelefonoLocalRep(e.target.value);
                  }}
                />
                </InputGroup>
                <Text m={1}>Telefono Celular</Text>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="gray.300" />}
                  />
                <Input
                  id="telefono"
                  placeholder="Telefono Celular"
                  required={true}
                  onChange={(e) => {
                    setTelefonoCelularRep(e.target.value);
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
              </Flex>
            </Flex>
          </Box>
          <Box bg="white" w="100%" p={5} color="white"></Box>
          <Flex w="170vh" alignItems="center" justifyContent="center">
            <Box p="2"></Box>
            <Spacer />
            <Box>
              <Link href="/gestion-beneficiario">
                <a>
                  <Button 
                  colorScheme="teal"
                   variant="solid" 
                   mr="4"
                   onClick={() => guardarBeneficiarioMoral()}
                   >
                    Guardar
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

export default NuevoBeneficiarioMoralPaso2;
