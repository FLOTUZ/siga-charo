import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Grid,
  HStack,
  GridItem,
  Text,
  Button,
  Heading,
  Flex,
  Spacer,
  Input,
  Select,
  InputGroup,
  useDisclosure,
  useToast,
  Switch,
  Collapse,
  Lorem,Checkbox
} from "@chakra-ui/react";
import { duration } from "@mui/material";
import { useRouter } from "next/router";
import Scaffold from "../../components/layout/Scaffold";
import { useState, useRef } from "react";
import { Crear } from "../../services/API";

function Agregar_usuarios() {
  //----------Estado de la interfaz--------//
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  //-------DATOS DE USUARIO-----------//
  const [nombreUsuario, setNombreApoyo] = useState("");
  const [nombre, setnombre] = useState("");
  const [apellidoPaterno, setapellidoPaterno] = useState("");
  const [apellidoMaterno, setapellidoMaterno] = useState("");
  const [password, setpassword] = useState("");
  const [puesto, setpuesto] = useState("");
  const [email, setemail] = useState("");

  const [haceSolicitudes, setHaceSolicitudes] = useState(false);
  const [altaApoyos, setAltaApoyos] = useState(false);
  const guardarUsuario = async () => {
    try {
      let usuario = {
        nombre: nombreUsuario,
        nombre: nombre,
        apellidoPaterno: apellidoPaterno,
        apellidoPaterno: apellidoMaterno,
        password: password,
        puesto: puesto,
        email: email,
      };
      let respuesta = await Crear("/usuarios", usuario);
      if (respuesta.status == 200) {
        consultarUsuarios();
        toast({
          title: "Nuevo usuario creado",
          descripcion: `El usuario ${nuevoUsuario} se ha creado`,
          status: "succes",
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
            <Box>
              <FormControl m={1} id="Rol">
                <FormLabel m={2}>Rol del Usuario</FormLabel>
                <Select m={2} placeholder="Rol...">
                  <option>Personalizado</option>
                  <option>Capturador</option>
                  <option>Administrador</option>
                  <option>Director</option>
                </Select>
              </FormControl>
              <FormLabel m={5}>Permisos personalizados</FormLabel>
              <HStack spacing={10} direction="row">
                <Checkbox size="md" colorScheme="green" defaultValue>
                  Aceptar apoyos
                </Checkbox>
                <Checkbox size="md" colorScheme="green" defaultValue>
                  Registrar apoyos
                </Checkbox>
                <Checkbox size="md" colorScheme="green" defaultValue >
                  Dar de alta un apoyo
                </Checkbox>
              </HStack>
            </Box>
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

        <Box direction="column" w="100%" p={5} rounded={6}>
          <Button
            onClick={() => guardarUsuario()}
            m={1}
            colorScheme="teal"
            variant="solid"
          >
            Agregar
          </Button>
          <Button onClick={onClose} m={1} colorScheme="teal" variant="outline">
            Cancelar
          </Button>
        </Box>
      </Box>
    </Scaffold>
  );
}

export default Agregar_usuarios;
