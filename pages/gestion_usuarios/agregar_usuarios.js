import {
  FormControl,
  FormLabel,
  Box,
  HStack,
  Text,
  Button,
  Heading,
  Flex,
  Input,
  Select,
  InputGroup,
  useDisclosure,
  useToast,
  Checkbox,
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

  const guardarUsuario = async () => {
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
    let respuesta = await Crear("/usuarios", usuario);
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
            <Input
              m={2}
              placeholder="Nombre(s)"
              onChange={(e) => setNombre(e.target.value)}
            />
            <Text m={1}>Apellidos</Text>
            <Input
              m={2}
              placeholder="Apellido Paterno"
              onChange={(e) => setApellidoPaterno(e.target.value)}
            />
            <Input
              m={2}
              placeholder="Apellido Materno"
              onChange={(e) => setApellidoMaterno(e.target.value)}
            />
            <Box>
              <FormControl m={1} id="Rol">
                <FormLabel m={2}>Puesto del Usuario</FormLabel>
                <Select m={2} placeholder="Puesto...">
                  <option>Personalizado</option>
                  <option>Capturador</option>
                  <option>Administrador</option>
                  <option>Director</option>
                </Select>
              </FormControl>
              <Box>
                <FormLabel m={5}>Permisos personalizados</FormLabel>
                <HStack spacing={10} direction="row">
                  <Checkbox
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

            <Input
              m={2}
              placeholder="Nombre de usuario"
              onChange={(e) => setNombreUsuario(e.target.value)}
            />
            <Text m={1}>usuario</Text>
            <FormControl id="email">
              <FormLabel>Correo Electronico</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormLabel>Contraseña</FormLabel>
            <InputGroup size="md">
              <Input
              onChange={(e) => setPassword(e.target.value)} 
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
