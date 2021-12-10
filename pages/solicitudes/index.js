import Head from "next/head";
import Link from "next/link";
import IBMDataTable from "../../components/Tabla/IBMDataTable";
import { Button, Flex, Box, Spacer, useToast, Skeleton } from "@chakra-ui/react";
import Scaffold from "../../components/layout/Scaffold";
import { Consultar } from "../../services/API";
import { useEffect, useState } from "react";

let rutas = [
  {
    url: "/solicitudes",
    nombre: "Solicitudes",
    isCurrentPage: true,
  },
];

export default function Catalogo() {

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
        <Flex>
          <Box p="2"></Box>
          <Spacer />
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Link href="/solicitudes/nueva_Solicitud_Paso_1">
              <a>
                <Button colorScheme="teal">Nueva Solicitud</Button>
              </a>
            </Link>
          </Flex>
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
              <IBMDataTable rows={solicitudes} />
            </Skeleton>
          </Box>
        </main>
      </div>
    </Scaffold>
  );
}
