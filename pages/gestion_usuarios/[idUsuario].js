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
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Scaffold from "../../components/layout/Scaffold";
import { Consultar } from "../../services/API";

import { useEffect, useState } from "react";

function Editar_usuario() {
  const [usuario, setUsuario] = useState({});
  const [cargando, setCargando] = useState(true);
  const router = useRouter();

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
                    <Select m={2} placeholder="Rol...">
                      <option>Capturador</option>
                      <option>Administrador</option>
                      <option>Director</option>
                    </Select>
                  </FormControl>
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
            </Flex>
          </Flex>

          <Box direction="column" w="100%" p={5} rounded={6}>
            <Button m={1} colorScheme="teal" variant="solid">
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
