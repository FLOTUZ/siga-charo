import {
  FormControl,
  FormLabel,
  Box,
  Text,
  Button,
  Heading,
  Flex,
  Input,
  Select,
  InputGroup,
  Editable,
  Switch,
  VStack,
  Skeleton,
  StackDivider,
  HStack,
  Checkbox,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Scaffold from "../../components/layout/Scaffold";
import { Consultar } from "../../services/API";

import { useEffect, useState } from "react";

function Editar_usuario() {
  const [usuario, setUsuario] = useState({});
  const [cargando, setCargando] = useState(true);
  const router = useRouter();

  //----------Estado de la interfaz--------//
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  //-------DATOS DE USUARIO-----------//
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidoPaterno, setApellidoPaterno] = useState("");
  const [apellidoMaterno, setApellidoMaterno] = useState("");
  const [password, setPassword] = useState("");
  const [puesto, setPuesto] = useState("");
  const [email, setEmail] = useState("");
  //-----------------PERMISOS
  const [haceSolicitudes, setHaceSolicitudes] = useState(false);
  const [altadeApoyos, setAltaDeApoyos] = useState(false);
  const [autorizaApoyos, setAutorizaApoyos] = useState(false);
  const [haceReportes, setHaceReportes] = useState(false);
  const [administraSistema, setAdministraSistema] = useState(false);

  const editarUsuario = async () => {
    try {
      let usuario = {
        nombreUsuario: nombreUsuario,
        nombre: nombre,
        apellidoPaterno: apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
        email: email,
        password: password,
        puesto: "TI",
        haceSolicitudes: haceSolicitudes,
        altaDeApoyos: altadeApoyos,
        autorizaApoyos: autorizaApoyos,
        haceReportes: haceReportes,
        administraSistema: administraSistema,
        activo: true,
      };
      console.log(usuario);
      let respuesta = await Crear("/usuarios/{id}", usuario);
      if (respuesta.status === 200) {
        toast({
          title: "Nuevo usuario creado",
          descripcion: `El usuario se ha creado`,
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

  let { idUsuario } = router.query;

  useEffect(() => {
    const ejecutar = async () => {
      let respuesta = await Consultar(`/usuarios/${idUsuario}`);
      if (respuesta.status === 200) {
        setUsuario(respuesta.data);
        setCargando(false);
      }
    };
    ejecutar();
  }, [idUsuario]);
  let rutas = [
    {
      url: "/gestion_de_usuarios",
      nombre: "editar usuarios",
      isCurrentPage: true,
    },
  ];

  return (
    <Scaffold
      rutas={rutas}
      titulo="Gestion de Usuarios"
      descripcion="Editar usuario"
    >
      <Skeleton isLoaded={!cargando}>
        <Box m={5}>
          <Flex m={2}>
            <Flex
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="2px"
              direction="column"
              w="100%"
              p={10}
              rounded={6}
            >
              <Heading color="gray" as="h3" fontSize="2xl">
                Datos del usuario
              </Heading>
              <Text m={1}>Nombre(s)</Text>
              <Editable placeholder="Nombre(s)" />
              <Input
                pr="4.5rem"
                placeholder="Nombre de usuario"
                variant="filled"
                value={usuario.nombre}
              />

              <Text>Apellidos</Text>
              <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={1}
                align="stretch"
              >
                <Input
                  pr="4.5rem"
                  placeholder="Nombre de usuario"
                  variant="filled"
                  value={usuario.apellidoPaterno}
                />

                <Input
                  pr="4.5rem"
                  placeholder="Nombre de usuario"
                  variant="filled"
                  value={usuario.apellidoMaterno}
                />

                <Flex
                  borderStyle="solid"
                  borderColor="gray.200"
                  borderWidth="2px"
                  background="gray.200"
                  direction="column"
                  w="100%"
                  p={4}
                  rounded={6}
                >
                  <FormControl display="flex">
                    <FormLabel>Habilitar opciones</FormLabel>
                    <Switch />
                  </FormControl>
                  <FormControl m={1} id="country">
                    <FormLabel m={2}>Rol del Usuario</FormLabel>
                    <Select isDisabled  m={2} placeholder="Rol...">
                      <option>Capturador</option>
                      <option>Administrador</option>
                      <option>Director</option>
                    </Select>
                  </FormControl>
                  <Box>
                    <FormLabel m={5}>Permisos personalizados</FormLabel>
                    <HStack spacing={10} direction="row">
                      <Checkbox
                        isDisabled
                        defaultIsChecked
                        isChecked={autorizaApoyos}
                        onChange={() => {
                          autorizaApoyos
                            ? setAutorizaApoyos(false)
                            : setAutorizaApoyos(true);
                        }}
                        size="md"
                        colorScheme="green"
                        defaultValue
                      >
                        Autoriza apoyos
                      </Checkbox>
                      <Checkbox
                        isDisabled
                        defaultIsChecked
                        isChecked={altadeApoyos}
                        onChange={() => {
                          altadeApoyos
                            ? setAltaDeApoyos(false)
                            : setAltaDeApoyos(true);
                        }}
                        size="md"
                        colorScheme="green"
                        defaultValue
                      >
                        Alta de apoyos
                      </Checkbox>
                      <Checkbox
                        isDisabled
                        defaultIsChecked
                        isChecked={haceSolicitudes}
                        onChange={() => {
                          haceSolicitudes
                            ? setHaceSolicitudes(false)
                            : setHaceSolicitudes(true);
                        }}
                        size="md"
                        colorScheme="green"
                        defaultValue
                      >
                        Alta de solicitudes
                      </Checkbox>
                      <Checkbox
                        isDisabled
                        defaultIsChecked
                        isChecked={haceReportes}
                        onChange={() => {
                          haceReportes
                            ? setHaceReportes(false)
                            : setHaceReportes(true);
                        }}
                        size="md"
                        colorScheme="green"
                        defaultValue
                      >
                        Realiza Reportes
                      </Checkbox>
                      <Checkbox
                        isDisabled
                        defaultIsChecked
                        isChecked={administraSistema}
                        onChange={() => {
                          administraSistema
                            ? setAdministraSistema(false)
                            : setAdministraSistema(true);
                        }}
                        size="md"
                        colorScheme="green"
                        defaultValue
                      >
                        Administrador del sistema
                      </Checkbox>
                    </HStack>
                  </Box>
                </Flex>
              </VStack>
            </Flex>
            <Box
              m={10}
              bg="purple.200"
              w=".1%"
              direction="column"
              justifyContent="Center"
            ></Box>
            <Flex
              borderStyle="solid"
              borderColor="gray.200"
              borderWidth="2px"
              background="gray.200"
              direction="column"
              w="100%"
              p={12}
              rounded={6}
            >
              <Heading
                m={2}
                justifyContent="Left"
                color="gray"
                as="h3"
                fontSize="2xl"
              >
                Detalles de login
                <FormLabel htmlFor="email-alerts" mb="0">
                  editar opciones de login
                </FormLabel>
                <FormControl display="flex" alignItems="center">
                  <Switch id="email-alerts" />
                </FormControl>
              </Heading>
              <Text m={1}>usuario</Text>
              <Input
                m={2}
                placeholder="Nombre de usuario"
                value={usuario.nombre}
              />
              <FormControl id="email">
                <FormLabel>Correo Electronico</FormLabel>
                <Input type="email" value={usuario.email} />
              </FormControl>
              <FormLabel>Contraseña</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={"password"}
                  placeholder="Enter password"
                  value={usuario.password}
                />
              </InputGroup>
            </Flex>{" "}
          </Flex>

          <Box direction="column" w="100%" p={5} rounded={6}>
            <Button  onClick={() => editarUsuario()}m={1} colorScheme="teal" variant="solid">
              Guardar
            </Button>
            <Button
              m={1}
              colorScheme="teal"
              variant="outline"
              onClick={() => {
                router.back();
              }}
            >
              Cancelar
            </Button>
          </Box>
        </Box>
      </Skeleton>
    </Scaffold>
  );
}
export default Editar_usuario;
