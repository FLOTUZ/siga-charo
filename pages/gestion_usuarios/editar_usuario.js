import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Text,
  Button,
  Heading,
  Flex,
  Spacer,
  Input,
  Select,
  InputGroup,
  MdBuild,
  Editable,
  EditablePreview,
  EditableInput,
  Switch,
} from "@chakra-ui/react";
import Scaffold from "../../components/layout/Scaffold";

function editar_usuario() {
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
              Datos del usuario
            </Heading>
            <Text m={1}>Nombre(s)</Text>
            <Editable placeholder="Nombre(s)" />
            <Editable
              borderStyle="solid"
              rounded={6}
              borderWidth="1px"
              color="gray.500"
              m={2}
              defaultValue="Juan"
            >
              <EditablePreview />
              <EditableInput />
            </Editable>

            <Text>Apellidos</Text>
            <Editable
              borderStyle="solid"
              rounded={6}
              borderWidth="1px"
              color="gray.500"
              m={2}
              defaultValue="Gomez"
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
            <Editable
              borderStyle="solid"
              rounded={6}
              borderWidth="1px"
              color="gray.500"
              m={2}
              defaultValue="Gonzales"
            >
              <EditablePreview />
              <EditableInput />
            </Editable>

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
              <Input m={2} placeholder="Nombre de usuario" />
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

        <Box direction="column" w="100%" p={5} rounded={6}>
          <Button m={1} colorScheme="teal" variant="solid">
            Guardar
          </Button>
          <Button m={1} colorScheme="teal" variant="outline">
            Cancelar
          </Button>
        </Box>
      </Box>
    </Scaffold>
  );
}
export default editar_usuario;
