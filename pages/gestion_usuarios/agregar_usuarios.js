import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Grid,
  GridItem,
  Text,
  Button,
  Heading,
  Flex,
  Spacer,
  Input,
  Select,
  InputGroup,
} from "@chakra-ui/react";
import Scaffold from "../../components/layout/Scaffold";

function agregar_usuarios() {
  let rutas = [
    {
      url: "/gestion_de_usuarios",
      nombre: "Agregar Usuarios",
      isCurrentPage: true,
    },
  ];

  return (
    <Scaffold
      rutas={rutas}
      titulo="Gestion de Usuarios"
      descripcion="Agregar usuario"
    >
      <Box bg="white" w="100%" p={2}></Box>

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
              Ingrese los datos del usuario
            </Heading>
            <Text m={1}>Nombre(s)</Text>
            <Input m={2} placeholder="Nombre(s)" />
            <Text m={1}>Apellidos</Text>
            <Input m={2} placeholder="Apellido Paterno" />
            <Input m={2} placeholder="Apellido Materno" />
            <FormControl m={1} id="Rol">
              <FormLabel m={2}>Rol del Usuario</FormLabel>
              <Select m={2} placeholder="Rol...">
                <option>Capturador</option>
                <option>Administrador</option>
                <option>Director</option>
              </Select>
            </FormControl>
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
            background="gray.150"
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
            </Heading>

            <Input m={2} placeholder="Nombre de usuario" />
            <Text m={1}>usuario</Text>
            <FormControl id="email">
              <FormLabel>Correo Electronico</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormLabel>Contraseña</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={"password"}
                placeholder="Enter password"
              />
            </InputGroup>
          </Flex>
        </Flex>

        <Box 
            direction="column"
            w="100%"
            p={5}
            rounded={6}>
          <Button m={1} colorScheme="teal" variant="solid">
            Agregar
          </Button>
          <Button m={1} colorScheme="teal" variant="outline">
            Cancelar
          </Button>
        </Box>
      </Box>
    </Scaffold>
  );
}

export default agregar_usuarios;
