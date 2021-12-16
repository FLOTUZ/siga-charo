import Scaffold from "../../components/layout/Scaffold";
import Link from "next/link";
import {
  Switch,
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Input,
  Textarea,
  Box,
  Flex,
  Spacer,
  useToast,
  Skeleton,
} from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { BsPencil } from "react-icons/bs";
import { IoMdSave } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Consultar } from "../../services/API";

function Apoyos() {
  const [apoyo, setApoyo] = useState({
    idPrograma: 0,
    nombre: "",
    costoUnitario: 0,
    descripcion: "",
    habilitado: false,
    fechaRegistro: "",
    fechaFinalizacion: "",
    usuarioId: 0,
    unidadId: 0,
  });

  const [cargandoApoyo, setCargandoApoyo] = useState(true);
  const [modoEdicion, setModoEdicion] = useState(false);

  const [habilitado, setHabilitado] = useState(false);
  const [nombre, setNombre] = useState("");
  const [unidadMedida, setUnidadMedida] = useState(0);
  const [fechaVigencia, setFechaVigencia] = useState("");
  const [costoUnitario, setCostoUnitario] = useState(0);
  const [descripcion, setDescripcion] = useState("");

  let router = useRouter();
  const toast = useToast();

  let idApoyo = router.query.idApoyo;
  idApoyo = Number(idApoyo);

  let rutas = [
    {
      url: "/apoyos",
      nombre: "Apoyos",
      isCurrentPage: true,
    },
    {
      url: "/Apoyos",
      nombre: `Apoyo #${idApoyo}`,
      isCurrentPage: true,
    },
  ];

  const consultarApoyo = async () => {
    let respuesta = await Consultar(`/programas/${1}`);
    if (respuesta.status === 200) {
      setApoyo(respuesta.data);
      setCargandoApoyo(false);
    } else {
      toast({
        title: "Error",
        description: `${respuesta.message}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    consultarApoyo();
  }, []);

  return (
    <Scaffold
      titulo={
        apoyo.nombre !== undefined
          ? apoyo.nombre + ` -- ${apoyo.idPrograma}`
          : "Ver Apoyo"
      }
      descripcion="Editar Apoyo"
      rutas={rutas}
    >
      <Flex>
        <HStack justifyContent="end">
          {modoEdicion ? (
            <Button
              colorScheme="red"
              variant="outline"
              rightIcon={<MdCancel size="25px " />}
              m={5}
              onClick={() => setModoEdicion(false)}
            >
              Descartar
            </Button>
          ) : (
            ""
          )}

          <Button
            colorScheme="blue"
            variant="solid"
            rightIcon={
              modoEdicion ? <IoMdSave size="25px" /> : <BsPencil size="25px" />
            }
            m={5}
            onClick={() => setModoEdicion(!modoEdicion)}
          >
            {modoEdicion ? "Guardar" : "Editar"}
          </Button>
        </HStack>
        <Spacer />
        <FormLabel htmlFor="activo">Activo:</FormLabel>
        <Skeleton isLoaded={!cargandoApoyo}>
          <Switch
            id="activo"
            size="lg"
            align="right"
            defaultChecked={apoyo.habilitado}
            onChange={() => {
              setHabilitado(!habilitado);
              console.log(habilitado);
            }}
          />
        </Skeleton>
      </Flex>

      <Flex
        borderStyle="solid"
        borderColor="gray.200"
        borderWidth="2px"
        direction="column"
        p={10}
        rounded={6}
      >
        <FormLabel htmlFor="nombre-apoyo"> Nombre del Apoyo: </FormLabel>
        <Input
          isReadOnly={!modoEdicion}
          id="nombre-apoyo"
          variant="filled"
          placeholder={apoyo.nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <FormLabel htmlFor="unidad-medida">Unidad de medida </FormLabel>
        <Input
          isReadOnly={!modoEdicion}
          id="unidad-medida"
          variant="filled"
          placeholder={apoyo.unidadId}
          onChange={(e) => setUnidadMedida(e.target.value)}
        />

        <FormLabel htmlFor="fecha-vigencia"> Fecha vigencia</FormLabel>
        <Input
          isReadOnly={!modoEdicion}
          id="fecha-vigencia"
          variant="filled"
          placeholder={apoyo.fechaFinalizacion}
          onChange={(e) => setFechaVigencia(e.target.value)}
        />

        <FormLabel htmlFor="costo-unitario">Costo Unitario: </FormLabel>
        <Input
          isReadOnly={!modoEdicion}
          id="costo-unitario"
          variant="filled"
          placeholder={apoyo.costoUnitario}
          onChange={(e) => setCostoUnitario(e.target.value)}
        />

        <FormLabel htmlFor="descripcion">Descripción: </FormLabel>
        <Textarea
          isReadOnly={!modoEdicion}
          id="descripcion"
          variant="filled"
          h={200}
          placeholder={apoyo.descripcion}
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
        />
      </Flex>
    </Scaffold>
  );
}
export default Apoyos;
