import { useRouter } from "next/router";
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
} from "@chakra-ui/react";
import { BsCheckCircle } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import Scaffold from "../../components/layout/Scaffold";
import { Consultar, Actualizar } from "../../services/API";
import { useEffect, useState } from "react";

function Ver_solicitud() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let router = useRouter();

  const [solicitud, setSolicitud] = useState({
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
    apellidoPaterno: "",
    apellidoMaterno: "",
    estadoSocioEconomico: "",
    fechaNacimiento: "",
    curp: "",
    beneficiarioId: 0,
  });
  const [personaMoral, setPersonaMoral] = useState({
    idPersonaMoral: 0,
    nombreRepresentante: "",
    apellidoPaternoRepresentante: "",
    apellidoMaternoRepresentante: "",
    telefonoLocalRep: "",
    telefonoCelularRep: "",
    correoRep: "",
    beneficiarioId: 0,
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

  let idSolicitud = 13;
  useEffect(() => {
    const consultarSolicitud = async () => {
      let respuesta = await Consultar(`/solicitudes/${idSolicitud}`);
      if (respuesta.status === 200) {
        setSolicitud(respuesta.data);
      }
    };
    consultarSolicitud();
    console.log({ solicitud: solicitud });
  }, []);

  useEffect(() => {
    const consultarBeneficiario = async () => {
      let respuesta = await Consultar(
        `/beneficiarios/${solicitud.beneficiarioId}`
      );
      if (respuesta.status === 200) {
        setBeneficiario(respuesta.data);
      }
    };
    consultarBeneficiario();
    console.log({ beneficiario: beneficiario });
  }, [solicitud]);

  useEffect(() => {
    /**
     * SE CONSULTA LA PERSONA FISICA CON EL ID DEL BENEFICIARIO
     * Si retorna un arreglo vacio, significa que deberia ser
     * una persona Fisica
     */
    const consultarPersonaFisica = async () => {
      let respuesta = await Consultar(`/personas-fisicas`, {
        where: {
          beneficiarioId: beneficiario.idBeneficiario, //Id del beneficiario
        },
        fields: {
          idPersonaFisica: true,
          apellidoPaterno: true,
          apellidoMaterno: true,
          estadoSocioEconomico: true,
          fechaNacimiento: true,
          curp: true,
          beneficiarioId: true,
        },
      });
      if (respuesta.status === 200) {
        setpersonaFisica(respuesta.data[0]);
      }
    };

    consultarPersonaFisica();
    console.log({ personaFISICA: personaFisica });
  }, [beneficiario]);

  useEffect(() => {
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
        fields: {
          idPersonaMoral: true,
          nombreRepresentante: true,
          apellidoPaternoRepresentante: true,
          apellidoMaternoRepresentante: true,
          telefonoLocalRep: true,
          telefonoCelularRep: true,
          correoRep: true,
          beneficiarioId: true,
        },
      });
      if (respuesta.status === 200) {
        setPersonaMoral(respuesta.data[0]);
      }
    };
    consultarPersonaMoral();
    console.log({ personaMoral: personaMoral });
  }, [beneficiario]);

  const rechazar = () => {
    console.log("Rechazada");
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
        <Text fontSize="3xl" my="1rem">
          Detalles solicitante
        </Text>
        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Fecha Solicitud:</Text>
          <Text as="mark" fontWeight="bold">
            DD MM AAAA
          </Text>
        </HStack>

        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Beneficiario:</Text>
          <Text as="mark" fontWeight="bold">
            Escuela Primaria Benito Juarez
          </Text>
        </HStack>
        <Spacer />
        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Representante:</Text>
          <Text as="mark" fontWeight="bold">
            Pepito Perez
          </Text>
        </HStack>

        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Comunidad:</Text>
          <Text as="mark" fontWeight="bold">
            Charo
          </Text>
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
          <Text as="mark" fontWeight="bold">
            Calentador Solar
          </Text>
        </HStack>

        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Cantidad solicitada:</Text>
          <Text as="mark" fontWeight="bold">
            2 piezas
          </Text>
        </HStack>
        <Spacer />
        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Costo del apoyo:</Text>
          <Text as="mark" fontWeight="bold">
            $ 2, 000
          </Text>
        </HStack>

        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Comunidad:</Text>
          <Text as="mark" fontWeight="bold">
            Charo
          </Text>
        </HStack>
        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Status:</Text>
          <Badge variant="solid" colorScheme="yellow">
            Pendiente
          </Badge>
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

        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm" width="sm">
            Cantidad a autorizar [UNIDAD]
          </Text>
          <Input type="number" variant="filled" />
        </HStack>

        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm" width="sm">
            Fecha prevista
          </Text>
          <Input type="date" variant="filled" />
        </HStack>
        <Spacer />
        <HStack spacing="1rem" my="2rem">
          <Text fontSize="sm">Total Autorizado</Text>
          <Text fontSize="2xl" variant="filled" color="green" fontWeight="bold">
            $1 200
          </Text>
        </HStack>
        <Stack direction="row" spacing={4} justifyContent="center">
          <Button
            leftIcon={<BsCheckCircle />}
            colorScheme="green"
            variant="solid"
            size="lg"
          >
            Aprobar
          </Button>
          <Button
            leftIcon={<ImCancelCircle />}
            colorScheme="red"
            variant="solid"
            size="lg"
            onClick={onOpen}
          >
            Reachazar
          </Button>
        </Stack>
      </Box>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Razon:</FormLabel>
              <Input isRequired={true} placeholder="First name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Scaffold>
  );
}

export default Ver_solicitud;
