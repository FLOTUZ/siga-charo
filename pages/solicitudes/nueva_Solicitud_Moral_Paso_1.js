import Head from "next/head";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Text,
  Button,
  Flex,
  Box,
  Input,
  Spacer,
  Switch,
  HStack,
} from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import Scaffold from "../../components/layout/Scaffold";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { sesion } from "../../utils/Utils";

function Nueva_Solicitud_Moral_Paso_1() {
  const router = useRouter();

  const [nameI, setNameI] = useState("");
  const [celularI, setCelularI] = useState("");
  const [telefonoI, setTelefonoI] = useState("");
  const [correoI, setCorreoI] = useState("");
  const [name, setName] = useState("");
  const [apellidoP, setApellidoP] = useState("");
  const [apellidoM, setApellidoM] = useState("");
  const [direccion, setDireccion] = useState("");
  const [rfc, setRfc] = useState("");
  const [celular, setCelular] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");

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
  }, []);

  const ejecutar = async () => {
    let tipo = "moral";
    router.push({
      pathname: "/solicitudes/nueva_Solicitud_Paso_2",
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
      },
    });
  };

  let rutas = [
    {
      url: "/nueva_solicitud_moral_paso_1",
      nombre: "Nueva Solicitud",
      isCurrentPage: true,
    },
  ];

  return (
    <Scaffold
      rutas={rutas}
      titulo="Nueva Solicitud"
      descripcion="Informacion de la empresa, escuela o institución"
    >
      <div>
        <Head>
          <title>Nueva Solicitud</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Box>
            <Progress m={5} value={30} />
            <Flex alignItems="center" justifyContent="center">
              <Flex alignItems="center" justifyContent="center" w="100vh">
                <Box p="4" bg="green.400" rounded={40}>
                  1
                </Box>

                <Spacer />
                <Box p="4" bg="gray.400" rounded={40}>
                  2
                </Box>
                <Spacer />
                <Box p="4" bg="gray.400" rounded={40}>
                  3
                </Box>
                <Spacer />
                <Box p="4" bg="gray.400" rounded={40}>
                  4
                </Box>
              </Flex>
            </Flex>
          </Box>

          <Flex
            direction="column"
            borderStyle="solid"
            borderColor="gray.200"
            borderWidth="2px"
            p={2}
            m={5}
            rounded={6}
          >
            <Text m={1}>Nombre de la Institucion</Text>
            <Input
              m={1}
              id="nameI"
              value={nameI}
              onChange={(e) => {
                setNameI(e.currentTarget.value);
              }}
              placeholder="Nombre Institucion"
              required={true}
            />
            <Text m={1}>Direccion Fiscal</Text>
            <Input
              m={1}
              id="direccion"
              value={direccion}
              onChange={(e) => {
                setDireccion(e.currentTarget.value);
              }}
              placeholder="Direccion"
              required={true}
            />
            <Text m={1}>RFC</Text>
            <Input
              m={1}
              id="rfc"
              value={rfc}
              onChange={(e) => {
                setRfc(e.currentTarget.value);
              }}
              placeholder="RFC"
              required={true}
            />
            <Text m={1}>Telefono Celular</Text>
            <Input
              m={1}
              id="celularI"
              value={celularI}
              onChange={(e) => {
                setCelularI(e.currentTarget.value);
              }}
              type="tel"
              placeholder="Celular"
              required={true}
            />
            <Text m={1}>Telefono</Text>
            <Input
              m={1}
              id="telefonoI"
              value={telefonoI}
              onChange={(e) => {
                setTelefonoI(e.currentTarget.value);
              }}
              type="tel"
              placeholder="Telefono"
              required={true}
            />
            <Text m={1}>Correo</Text>
            <Input
              m={1}
              id="correoI"
              value={correoI}
              onChange={(e) => {
                setCorreoI(e.currentTarget.value);
              }}
              type="email"
              placeholder="Correo"
              required={true}
            />
          </Flex>

          <Flex height="80vh" justifyContent="center" m={5}>
            <Flex
              direction="column"
              w="100vw"
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
                value={name}
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
                placeholder="Nombre(s)"
                required={true}
              />
              <Text m={1}>Apellido Paterno</Text>
              <Input
                m={1}
                id="apellidoP"
                value={apellidoP}
                onChange={(e) => {
                  setApellidoP(e.currentTarget.value);
                }}
                placeholder="Apellido"
                required={true}
              />
              <Text m={1}>Apellido Materno</Text>
              <Input
                m={1}
                id="apellidoM"
                value={apellidoM}
                onChange={(e) => {
                  setApellidoM(e.currentTarget.value);
                }}
                placeholder="Apellido Materno"
                required={true}
              />
              <Text m={1}>Telefono Celular</Text>
              <Input
                m={1}
                id="celular"
                value={celular}
                onChange={(e) => {
                  setCelular(e.currentTarget.value);
                }}
                type="tel"
                placeholder="Celular"
                required={true}
              />
              <Text m={1}>Telefono</Text>
              <Input
                m={1}
                id="telefono"
                value={telefono}
                onChange={(e) => {
                  setTelefono(e.currentTarget.value);
                }}
                type="tel"
                placeholder="Telefono"
                required={true}
              />
              <Text m={1}>Correo</Text>
              <Input
                m={1}
                id="correo"
                value={correo}
                onChange={(e) => {
                  setCorreo(e.currentTarget.value);
                }}
                type="email"
                placeholder="Correo"
                required={true}
              />
            </Flex>
          </Flex>

          <Flex justifyContent="flex-end" m={10}>
            <HStack>
              <Button
                colorScheme="teal"
                variant="solid"
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
            </HStack>
          </Flex>
        </main>
      </div>
    </Scaffold>
  );
}

export default Nueva_Solicitud_Moral_Paso_1;
