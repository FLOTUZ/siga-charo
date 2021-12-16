import Scaffold from "../../components/layout/Scaffold";
import { useRouter } from "next/router";
import { sesion } from "../../utils/Utils";
import {
  Button,
  Input,
  Box,
  Text,
  Spacer,
  HStack,
  Badge,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Skeleton,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import { BsCheckCircle } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { useEffect, useState } from "react";
import { Consultar, Actualizar } from "../../services/API";

function Ver_solicitud() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  let router = useRouter();

  // -----------  Estados de carga --------------------------
  const [cargandoSolicitud, setCargandoSolicitud] = useState(true);
  const [cargandoBeneficiario, setCargandoBeneficiario] = useState(true);
  const [cargandoPersonaFisica, setCargandoPersonaFisica] = useState(true);
  const [cargandoPersonaMoral, setCargandoPersonaMoral] = useState(true);
  const [cargandoComunidades, setCargandoComunidades] = useState(true);
  const [cargandoApoyo, setCargandoApoyo] = useState(false);
  const [cargandoUnidad, setCargandoUnidad] = useState(false);

  // -----------  INTERFAZ --------------------------
  const [btnRechazarHabilitado, setBtnRechazarHabilitado] = useState(true);
  const [btnAprobarHabilitado, setBtnAprobarHabilitado] = useState(false);
  const [cargandoBTNRechazar, setCargandoBTNRechazar] = useState(false);
  const [cargandoBTNAprobar, setCargandoBTNAprobar] = useState(false);
  // -----------  DATOS A DAR DE ALTA --------------------------
  const [motivoRechazo, setMotivoRechazo] = useState("");
  const [cantidadAAutorizar, setCantidadAAutorizar] = useState(0);

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

  const [solicitud, setSolicitud] = useState({
    idSolicitud: 0,
    fechaSolicitud: "",
    fechaAutorizacion: "",
    estatus: "",
    cantidad: 0,
    descuento: 0,
    costoTotal: 0,
    motivoRechazo: "",
    fechaEntrega: "",
    notas: "",
    usuarioAutorizadorId: 0,
    usuarioEntregaId: 0,
    programaId: 0,
    beneficiarioId: 0,
  });
  const [apoyo, setApoyo] = useState({
    idPrograma: 0,
    nombre: "",
    costoUnitario: 0,
    descripcion: "",
    habilitado: true,
    fechaRegistro: "",
    fechaFinalizacion: "",
    usuarioId: 0,
    unidadId: 0,
  });
  const [unidad, setUnidad] = useState({
    idUnidad: 0,
    nombre: "",
  });
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
    solicitudes: [],
  });
  const [personaFisica, setpersonaFisica] = useState({
    idPersonaFisica: 0,
    apellidoPaterno: "NA",
    apellidoMaterno: "NA",
    estadoSocioEconomico: "NA",
    fechaNacimiento: "NA",
    curp: "NA",
    beneficiarioId: 0,
  });
  const [personaMoral, setPersonaMoral] = useState({
    idPersonaMoral: 0,
    nombreRepresentante: "NA",
    apellidoPaternoRepresentante: "NA",
    apellidoMaternoRepresentante: "NA",
    telefonoLocalRep: "NA",
    telefonoCelularRep: "NA",
    correoRep: "NA",
    beneficiarioId: 0,
  });
  const [comunidad, setComunidad] = useState({
    idComunidad: 0,
    nombre: "",
  });
  //------------------- -------------------------------

  let rutas = [
    {
      url: "/solicitudes",
      nombre: "Solicitudes",
      isCurrentPage: true,
    },
    {
      url: "/ver_solicitud",
      nombre: ` Solicitud #${router.query.idSolicitud}`,
      isCurrentPage: true,
    },
  ];

  const consultarSolicitud = async () => {
    let { idSolicitud } = router.query;
    let respuesta = await Consultar(`/solicitudes/${idSolicitud}`);
    if (respuesta.status === 200) {
      setSolicitud(respuesta.data);
      setCargandoSolicitud(false);
    } else {
      toast({
        title: "Error: no se pudo recuperar solicitud",
        description: `${respuesta.message}`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };
  const consultarBeneficiario = async () => {
    let respuesta = await Consultar(
      `/beneficiarios/${solicitud.beneficiarioId}`
    );
    if (respuesta.status === 200) {
      setBeneficiario(respuesta.data);
      setCargandoBeneficiario(false);
    } else {
      console.error(respuesta.message);
    }
  };

  const consultarComunidad = async () => {
    let respuesta = await Consultar(`/comunidades/${beneficiario.comunidadId}`);
    if (respuesta.status === 200) {
      setComunidad(respuesta.data);
      setCargandoComunidades(false);
    } else {
      console.error(respuesta.message);
    }
  };

  const consultarApoyo = async () => {
    let respuesta = await Consultar(`/programas/${solicitud.programaId}`);
    if (respuesta.status === 200) {
      setApoyo(respuesta.data);
      setCargandoApoyo(false);
    } else {
      console.error(respuesta.message);
    }
  };

  const consultarUnidad = async () => {
    let respuesta = await Consultar(`/unidades/${apoyo.unidadId}`);
    if (respuesta.status === 200) {
      setUnidad(respuesta.data);
      setCargandoUnidad(false);
    } else {
      console.error(respuesta.message);
    }
  };

  /**
   * SE CONSULTA LA PERSONA MORAL CON EL ID DEL BENEFICIARIO
   * Si retorna un arreglo vacio, significa que deberia ser
   * una persona Fisica
   */
  const consultarPersonaFisica = async () => {
    let respuesta = await Consultar(`/personas-fisicas`, {
      where: {
        beneficiarioId: beneficiario.idBeneficiario,
      },
    });
    if (respuesta.status === 200) {
      setpersonaFisica(respuesta.data[0]);
      setCargandoPersonaFisica(false);
    } else {
      console.error(respuesta.message);
    }
  };

  /**
   * SE CONSULTA LA PERSONA MORAL CON EL ID DEL BENEFICIARIO
   * Si retorna un arreglo vacio, significa que deberia ser
   * una persona Fisica
   */
  const consultarPersonaMoral = async () => {
    let respuesta = await Consultar(`/personas-morales`, {
      where: {
        beneficiarioId: beneficiario.idBeneficiario, //Id del beneficiario
      },
    });
    if (respuesta.status === 200) {
      setPersonaMoral(respuesta.data[0]);
      setCargandoPersonaMoral(false);
    } else {
      console.error(respuesta.message);
    }
  };

  useEffect(() => {
    let usuario = sesion();
    setUsuarioLogueado(usuario);
    consultarSolicitud();
  }, []);

  useEffect(() => {
    consultarBeneficiario();
    consultarApoyo();
    consultarUnidad();
  }, [solicitud]);

  useEffect(() => {
    consultarPersonaFisica();
    consultarPersonaMoral();
    consultarComunidad();
  }, [beneficiario]);

  const autorizar = async () => {
    setCargandoBTNAprobar(true);
    if (cantidadAAutorizar === 0) {
      setCantidadAAutorizar(solicitud.cantidad);
    }
    let respuesta = await Actualizar(`/solicitudes/${solicitud.idSolicitud}`, {
      estatus: "AUTORIZADA",
      cantidad: Number(cantidadAAutorizar),
      usuarioAutorizadorId: usuarioLogueado.idUsuario,
    });
    if (respuesta.status === 204) {
      toast({
        title: "Se aprobo la solicitud",
        description: "Se ha aprobado la solicitud con exito",
        status: "success",
        duration: 9000,
        position: "top-right",
        isClosable: true,
      });
      setCargandoBTNAprobar(false);
    }
    await consultarApoyo();
  };

  const rechazar = async () => {
    setCargandoBTNRechazar(true);
    let respuesta = await Actualizar(`/solicitudes/${solicitud.idSolicitud}`, {
      estatus: "RECHAZADA",
      motivoRechazo: motivoRechazo,
    });
    if (respuesta.status === 204) {
      toast({
        title: "Se rechazo solicitud.",
        description: "Exito al rechazar la solicitud",
        status: "info",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
    }

    setCargandoBTNRechazar(false);
    await consultarApoyo();
  };

  return (
    <Scaffold
      rutas={rutas}
      titulo="Datos de Solicitud"
      descripcion={`FOLIO --- ${solicitud.idSolicitud}`}
    >
      <Box
        p={5}
        borderWidth="1px"
        _hover={{
          shadow: "xl",
          border: "0.5px",
          borderColor: "gray.300",
          borderRadius: "1rem",
        }}
      >
        <Button
          onClick={() => {
            router.push({
              pathname: "/solicitudes/imprimir",
              query: { idSolicitud: solicitud.idSolicitud },
            });
          }}
        >
          {" "}
          Imprimir{" "}
        </Button>
        <Text fontSize="3xl" my="1rem">
          Detalles solicitante
        </Text>
        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Fecha Solicitud:</Text>
          <Skeleton isLoaded={!cargandoSolicitud}>
            <Text as="mark" fontWeight="bold">
              {solicitud.fechaSolicitud}
            </Text>
          </Skeleton>
        </HStack>

        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Beneficiario:</Text>
          <Skeleton isLoaded={!cargandoBeneficiario && !cargandoPersonaFisica}>
            <Text as="mark" fontWeight="bold">
              {beneficiario.nombre}{" "}
              {personaFisica === undefined ? "" : personaFisica.apellidoPaterno}{" "}
              {personaFisica === undefined ? "" : personaFisica.apellidoMaterno}
            </Text>
          </Skeleton>
        </HStack>
        <Spacer />
        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Representante:</Text>
          <Skeleton isLoaded={!cargandoPersonaMoral}>
            <Text as="mark" fontWeight="bold">
              {personaMoral === undefined
                ? "NA"
                : personaMoral.nombreRepresentante}
            </Text>
          </Skeleton>
        </HStack>

        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Comunidad:</Text>
          <Skeleton isLoaded={!cargandoComunidades}>
            <Text as="mark" fontWeight="bold">
              {comunidad.nombre}
            </Text>
          </Skeleton>
        </HStack>
      </Box>

      <Box
        p={5}
        borderWidth="1px"
        _hover={{
          shadow: "xl",
          border: "0.5px",
          borderColor: "gray.300",
          borderRadius: "1rem",
        }}
      >
        <Text fontSize="3xl" my="1rem">
          Apoyo Solicitado
        </Text>
        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Apoyo:</Text>
          <Skeleton isLoaded={!cargandoApoyo}>
            <Text as="mark" fontWeight="bold">
              {apoyo.nombre}
            </Text>
          </Skeleton>
        </HStack>

        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Cantidad solicitada:</Text>
          <Skeleton isLoaded={!cargandoSolicitud && !cargandoUnidad}>
            <Text as="mark" fontWeight="bold">
              {solicitud.cantidad} {unidad.nombre}
            </Text>
          </Skeleton>
        </HStack>
        <Spacer />
        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Costo unitario del apoyo:</Text>
          <Skeleton isLoaded={!cargandoSolicitud}>
            <Text as="mark" fontWeight="bold">
              $ {solicitud.costoTotal}
            </Text>
          </Skeleton>
        </HStack>

        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Comunidad:</Text>
          <Skeleton isLoaded={!cargandoComunidades}>
            <Text as="mark" fontWeight="bold">
              {comunidad.nombre}
            </Text>
          </Skeleton>
        </HStack>
        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Status:</Text>
          <Skeleton isLoaded={!cargandoSolicitud}>
            <Badge
              variant="solid"
              colorScheme={
                solicitud.estatus === "PENDIENTE"
                  ? "yellow"
                  : solicitud.estatus === "RECHAZADA"
                  ? "red"
                  : "green"
              }
            >
              {solicitud.estatus}
            </Badge>
          </Skeleton>
        </HStack>
      </Box>

      <Box
        p={5}
        borderWidth="1px"
        _hover={{
          shadow: "xl",
          border: "0.5px",
          borderColor: "gray.300",
          borderRadius: "1rem",
        }}
      >
        <Text fontSize="3xl" my="1rem">
          Seguimiento
        </Text>

        <Skeleton isLoaded={!cargandoUnidad}>
          <FormLabel htmlFor="cantidad" fontSize="sm">
            Cantidad a autorizar en <b>{unidad.nombre}</b>
          </FormLabel>
        </Skeleton>
        <Input
          id="cantidad"
          type="number"
          variant="filled"
          placeholder={solicitud.cantidad}
          onChange={(e) => setCantidadAAutorizar(e.target.value)}
        />

        {/* <FormLabel htmlFor="fecha-prevista" fontSize="sm">
          Fecha prevista
        </FormLabel>
        <Input id="fecha-prevista" type="date" variant="filled" />
        */}
        <Spacer />
        <HStack spacing="1rem" my="2rem">
          <Text fontSize="3xl" fontWeight="bold">
            Total Autorizado
          </Text>
          <Text fontSize="4xl" variant="filled" color="green" fontWeight="bold">
            ${" "}
            {cantidadAAutorizar === 0
              ? solicitud.cantidad * solicitud.costoTotal
              : cantidadAAutorizar * solicitud.costoTotal}
          </Text>
        </HStack>
        <Stack direction="row" spacing={4} justifyContent="center">
          <Button
            isDisabled={btnAprobarHabilitado}
            isLoading={cargandoBTNAprobar}
            leftIcon={<BsCheckCircle />}
            colorScheme="green"
            variant="solid"
            size="lg"
            onClick={autorizar}
          >
            AUTORIZAR
          </Button>
          <Button
            leftIcon={<ImCancelCircle />}
            colorScheme="red"
            variant="solid"
            size="lg"
            onClick={onOpen}
          >
            RECHAZAR
          </Button>
        </Stack>
      </Box>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Motivo de rechazo</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Escribe el motivo de rechazo</FormLabel>
              <Textarea
                isRequired={true}
                variant="filled"
                height="10rem"
                value={motivoRechazo}
                placeholder="El motivo de rechazo de esta solicitud es ...."
                onChange={(e) => {
                  setMotivoRechazo(e.target.value);
                  motivoRechazo === ""
                    ? setBtnRechazarHabilitado(true)
                    : setBtnRechazarHabilitado(false);
                }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button
              isLoading={cargandoBTNRechazar}
              isDisabled={btnRechazarHabilitado}
              colorScheme="red"
              variant="solid"
              onClick={rechazar}
            >
              Confirmar Rechazo
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Scaffold>
  );
}

export default Ver_solicitud;
