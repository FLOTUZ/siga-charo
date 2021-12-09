import Scaffold from "../../components/layout/Scaffold";
import Router from "next/router";
import { Consultar, Crear } from "../../services/API";
import {
  useToast,
  useDisclosure,
  Switch,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  Flex,
  Spacer,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

import { BiXCircle, BiUpArrowCircle, BiSave } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";
import { useEffect, useState, useRef } from "react";
import { sesion } from "../../utils/Utils";
import { useRouter } from "next/router";
function AgregarApoyo() {
  //------------------ Estado de la interfaz  ---------------
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cargandoUnidades, setCargandoUnidades] = useState(true); //---
  const btnRef = useRef();
  const toast = useToast();
  //------------------ Datos de apoyo  ---------------
  const [nombreApoyo, setNombreApoyo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [costo, setCosto] = useState(0.0);
  const [activo, setActivo] = useState(false);
  const [vigencia, setVigencia] = useState("");
  //------------------ Datos de unidad  ---------------
  const [unidad, setUnidad] = useState({ idUnidad: 0, nombre: "" });
  const [listaDeUnidades, setListaDeUnidades] = useState([]);
  const [nuevaUnidad, setNuevaUnidad] = useState(""); //------
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

  const altaUnidad = async () => {                                     //--------inicia
    let respuesta = await Crear("/unidades", { nombre: nuevaUnidad });
    if (respuesta.status == 200) {
      consultarUnidades();
      toast({
        title: "Nueva unidad Creada",
        description: `La unidad ${nuevaUnidad} se ha creado`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });                                                             
    } else {
      toast({
        title: "Oops.. Algo salio mal",
        description: respuesta.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };  //--- termina
  //---------------------------------------
  const consultarUnidades = async () => {    //---- inicia
    let respuesta = await Consultar("/unidades");

    if (respuesta.status == 200) {
      setListaDeUnidades(respuesta.data);
      setCargandoUnidades(false);
    } else {
      toast({
        title: "Oops.. Algo sucedió",
        description: respuesta.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };    //---termina
  const guardarApoyo = async () => {
    try {
      let programa = {
        nombre: nombreApoyo,
        costoUnitario: Number(costo),
        descripcion: descripcion,
        habilitado: activo,
        fechaRegistro: new Date(Date.now()).toISOString(),
        fechaFinalizacion: new Date(vigencia).toISOString(),
        usuarioId: usuarioLogueado.idUsuario,
        unidadId: unidad.idUnidad,
      };

      let respuesta = await Crear("/programas", programa);

      if (respuesta.status == 200) {
        toast({
          title: "Apoyo Creado",
          description: "Se ha creado el apoyo",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        router.back();
      } else {
        toast({
          title: "Oops.. Algo sucedió",
          description: respuesta.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (e) {
      toast({
        title: "Verifica los campos",
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
      url: "/Apoyos",
      nombre: "Agregar Apoyo",
      isCurrentPage: true,
    },
  ];

  return (
    <Scaffold
      titulo="Catalogo de Apoyos"
      descripcion="Agregar Apoyo"
      rutas={rutas}
    >
      <Box p="1rem">
        <Flex
          borderStyle="solid"
          borderColor="gray.200"
          borderWidth="2px"
          direction="column"
          w="100%"
          p={10}
          rounded={6}
        >
          <Flex>
            <Spacer />
            <HStack spacing="1rem">
              <FormLabel htmlFor="email-alerts" mb="0">
                Activo
              </FormLabel>
              <Switch
                isChecked={activo}
                size="lg"
                align="right"
                onChange={() => {
                  setActivo(!activo);
                }}
              />
            </HStack>
          </Flex>
          <HStack spacing="3rem">
            <FormControl id="Nombre del Apoyo">
              <FormLabel> Nombre del Apoyo:</FormLabel>
              <Input
                variant="filled"
                placeholder=""
                onChange={(e) => {
                  setNombreApoyo(e.target.value);
                }}
              />
              <FormLabel htmlFor="unidad">Unidad de medida</FormLabel>  {/* se ocupa para menu comunidades*/}
              <Menu>
                {({ isOpen }) => (
                  <>
                    <MenuButton
                      isActive={isOpen}
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      onClick={() => {
                        setCargandoUnidades(true);
                        consultarUnidades();
                      }}
                    >
                      {isOpen
                        ? unidad.nombre
                        : unidad.nombre != ""
                        ? unidad.nombre
                        : "Seleccione"}
                    </MenuButton>
                    <MenuList>
                      {cargandoUnidades ? (
                        <Stack p="0.5rem">
                          <Skeleton height="1.5rem" />
                          <Skeleton height="1.5rem" />
                          <Skeleton height="1.5rem" />
                        </Stack>
                      ) : listaDeUnidades.length == 0 ? (
                        <MenuItem>No hay unidades</MenuItem>
                      ) : (
                        listaDeUnidades.map((u, index) => {
                          return (
                            <MenuItem key={index} onClick={() => setUnidad(u)}>
                              {u.nombre}
                            </MenuItem>
                          );
                        })
                      )}
                      <MenuDivider />
                      <MenuItem ref={btnRef} onClick={onOpen}>
                        Crear nueva unidad
                      </MenuItem>
                    </MenuList>
                  </>
                )}
              </Menu>    {/*  termina menu*/ }

              <FormLabel htmlFor="fecha-vigencia">Fecha de vigencia</FormLabel>   
              <Input
                id="fecha-vigencia"
                type="date"
                width="100%"
                placeholder="Fecha de vigencia"
                variant="filled"
                value={vigencia}
                onChange={(e) => setVigencia(e.target.value)}
              />

              <FormLabel htmlFor="descripcion">Descripción: </FormLabel>
              <Textarea
                id="descripcion"
                variant="filled"
                placeholder="La descripción es..."
                onChange={(e) => setDescripcion(e.target.value)}
              />

              <FormLabel htmlFor="costo">Costo Unitario: </FormLabel>

              <Input
                id="costo"
                variant="filled"
                type="number"
                placeholder="$0.00"
                onChange={(e) => setCosto(e.target.value)}
              />
            </FormControl>
          </HStack>

          <Flex>
            <Spacer />
            <HStack my={2} spacing={2}>
              <Button
                colorScheme="red"
                variant="outline"
                rightIcon={<GiCancel />}
                onClick={() => Router.back()}
              >
                Cancelar
              </Button>
              <Button
                colorScheme="blue"
                variant="solid"
                rightIcon={<BiSave />}
                onClick={guardarApoyo}
              >
                Guardar
              </Button>
            </HStack>
          </Flex>
        </Flex>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Crear nueva unidad</DrawerHeader>

          <DrawerBody>
            <Input
              placeholder="Nombre de la unidad"
              onChange={(e) => setNuevaUnidad(e.target.value)}
            />
          </DrawerBody>

          <DrawerFooter>
            <Box>
              <Button onClick={onClose}>Cancelar</Button>
              <Button colorScheme="blue" onClick={() => altaUnidad()}>
                Guardar
              </Button>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Scaffold>
  );
}
export default AgregarApoyo;
