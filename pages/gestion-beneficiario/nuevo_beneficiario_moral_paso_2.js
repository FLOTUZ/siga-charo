import Scaffold from "../../components/layout/Scaffold";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Crear } from "../../services/API";
import { useState } from "react";
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

import { sesion } from "../../utils/Utils";

function NuevoBeneficiarioMoralPaso2() {
  const [usuarioLogeado, setUsuarioLogeado] = useState({});
  //--------------------Estado de la interfaz-----------------------//
  //const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const toast = useToast();
  //-------DATOS DE Beneficiario Tabla Beneficiario-----------//
  const [nombreRep, setNombreRep] = useState("");
  const [apellidoPaternoRep, setApellidoPaternoRep] = useState("");
  const [apellidoMaternoRep, setApellidoMaternoRep] = useState("");
  const [telefonoCelularRep, setTelefonoCelularRep] = useState("");
  const [telefonoLocalRep, setTelefonoLocalRep] = useState("");
  const [correoRep, setCorreoRep] = useState("");

  const [beneficiario, setBeneficiario] = useState({
    idBeneficiario: 0,
    nombre: "",
    direccion: "",
    rfc: "",
    telefonoLocal: "",
    telefonoCelular: "",
    correo: "",
    fechaRegistro: "",
    fechaBaja: "",
    usuarioCargaId: 0,
    comunidadId: 0,
  });

  let rutas = [
    {
      url: "/nuevo_beneficiario_moral_paso_2",
      nombre: "Nuevo Beneficiario",
      isCurrentPage: true,
    },
  ];

  //---------------------------------guarda el id entrante------------//

  useEffect(() => {
    //Se recupera la sesion
    let user = sesion();
    setUsuarioLogeado(user);

    //Se parsea el string a JSON
    let { beneficiarioString } = router.query;
    setBeneficiario(JSON.parse(beneficiarioString));
  }, []);

  const guardarBeneficiarioMoral = async () => {
    //Se da de alta beneficiario

    let benef = {
      nombre: beneficiario.nombre,
      direccion: beneficiario.direccion,
      rfc: beneficiario.rfc,
      telefonoLocal: beneficiario.telefonoLocal,
      telefonoCelular: beneficiario.telefonoCelular,
      correo: beneficiario.correo,
      fechaRegistro: new Date(Date.now()).toISOString(),
      usuarioCargaId: usuarioLogeado.idUsuario,
      comunidadId: beneficiario.comunidadId,
    };
    let respuestaBenef = await Crear("/beneficiarios", benef);
    //-------------------------------------------------------

    if (respuestaBenef.status == 200) {
      // Se da de alta persona moral
      let personaMoral = {
        nombreRepresentante: nombreRep,
        apellidoPaternoRepresentante: apellidoPaternoRep,
        apellidoMaternoRepresentante: apellidoMaternoRep,
        telefonoLocalRep: telefonoLocalRep,
        telefonoCelularRep: telefonoCelularRep,
        correoRep: correoRep,
        beneficiarioId: Number(respuestaBenef.data.idBeneficiario),
      };
      let respuesta = await Crear("/personas-morales", personaMoral);

      if (respuesta.status === 200) {
        toast({
          title: "Nueva persona moral creada",
          descripcion: `La Institución se ha guardado`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        router.push("/gestion-beneficiario");
      } else {
        toast({
          title: "Oops.. Algo salio mal",
          descripcion: respuesta.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

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
          <Box bg="white" p={5} color="white"></Box>
          <Box>
            <Progress m={5} value={100} />
            <Flex alignItems="center" justifyContent="center">
              <Flex alignItems="center" justifyContent="center" w="100vh">
                <Box p="4" bg="green.500" rounded={40} color="white">
                  1
                </Box>

                <Spacer />
                <Box p="4" bg="green.500" rounded={40} color="white">
                  2
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Box mt={10}>
            <Flex
              direction="column"
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="2px"
              p={10}
              rounded={6}
            >
              <Text m={1}>Nombre(s)</Text>
              <Input
                variant="filled"
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
                variant="filled"
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
                variant="filled"
                placeholder="Apellido Materno"
                required={true}
                onChange={(e) => {
                  setApellidoMaternoRep(e.target.value);
                }}
              />
              <Text m={1}>Telefono Local</Text>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <PhoneIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  id="telefono"
                  variant="filled"
                  placeholder="Telefono Local"
                  required={true}
                  onChange={(e) => {
                    setTelefonoLocalRep(e.target.value);
                  }}
                />
              </InputGroup>
              <Text m={1}>Telefono Celular</Text>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <PhoneIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  variant="filled"
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
                <InputLeftElement pointerEvents="none">
                  <EmailIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  variant="filled"
                  id="correo"
                  placeholder="correo"
                  required={true}
                  onChange={(e) => {
                    setCorreoRep(e.target.value);
                  }}
                />
              </InputGroup>
            </Flex>
          </Box>
          <Flex alignItems="center" justifyContent="center">
            <Spacer />
            <Box mt={10}>
              <Button
                colorScheme="green"
                variant="solid"
                mr="4"
                onClick={() => guardarBeneficiarioMoral()}
              >
                Guardar
              </Button>

              <Link href="/gestion-beneficiario">
                <a>
                  <Button
                    colorScheme="green"
                    variant="outline"
                  >
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
