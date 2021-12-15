import Scaffold from "../../components/layout/Scaffold";
import Head from "next/head";
import Link from "next/link";
import IBMDataTable from "../../components/Tabla/IBMDataTable";
import {
  Button,
  Flex,
  Box,
  Spacer,
  useToast,
  Skeleton,
  Container,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Consultar } from "../../services/API";
import { AiFillFileAdd } from "react-icons/ai";
import { BsBuilding } from "react-icons/bs";
import { useEffect, useState } from "react";

let rutas = [
  {
    url: "/solicitudes",
    nombre: "Solicitudes",
    isCurrentPage: true,
  },
];

export default function Catalogo() {
  let router = useRouter();

  const [solicitudes, setSolicitudes] = useState([]);
  const [cargandoTabla, setCargandoTabla] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const consultarSolicitudes = async () => {
      let respuesta = await Consultar("/solicitudes", {
        fields: {
          idSolicitud: true,
          fechaSolicitud: true,
          estatus: true,
          costoTotal: true,
        },
      });
      if (respuesta.status === 200) {
        setCargandoTabla(true);
        setSolicitudes(respuesta.data);
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
    consultarSolicitudes();
  }, [toast]);

  return (
    <Scaffold
      titulo="Solicitudes"
      descripcion="Lista de Solicitudes"
      rutas={rutas}
    >
      <div>
        <Head>
          <title>Catalogo de Solicitudes</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Flex
          textAlign="center"
          m={5}
          direction={{ base: "column-reverse", md: "row" }}
        >
          <Link href="/solicitudes/nueva_Solicitud_Paso_1">
            <a>
              <Container
                w="auto"
                color="white"
                bgColor="core.600"
                m={2}
                rounded={5}
              >
                <HStack p={1}>
                  <AiFillFileAdd size="4rem" />
                  <Text fontSize="md">Nueva Solicitud Persona Fisica</Text>
                </HStack>
              </Container>
            </a>
          </Link>

          <Link href="/solicitudes/nueva_Solicitud_Moral_Paso_1">
            <a>
              <Container
                w="auto"
                color="white"
                bgColor="core.600"
                m={2}
                rounded={5}
              >
                <HStack p={1}>
                  <BsBuilding size="4rem" />
                  <Text fontSize="md">Nueva Solicitud Persona Moral</Text>
                </HStack>
              </Container>
            </a>
          </Link>
        </Flex>

        <main>
          <Box bg="white" w="100%" p={5} color="white"></Box>
          <Box
            maxW="large"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <Skeleton isLoaded={cargandoTabla}>
              <IBMDataTable
                clickeada={(index) => {
                  let idSolicitud = index.cells[0].value;
                  router.push(`/solicitudes/${idSolicitud}`);
                }}
                rows={solicitudes}
              />
            </Skeleton>
          </Box>
        </main>
      </div>
    </Scaffold>
  );
}
