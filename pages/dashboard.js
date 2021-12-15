import Scaffold from "../components/layout/Scaffold";
import Link from "next/link";
import { useEffect, useState } from "react";
import { sesion } from "../utils/Utils";
import {
  WrapItem,
  Wrap as HStack,
  Button,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  Center,
  Container,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { MdAddCircle } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { BsCardChecklist } from "react-icons/bs";
import { Consultar } from "../services/API";
import BarAgrupada from "../components/graficas/BarAgrupada";
import Dona from "../components/graficas/Dona";

function Dashboard() {
  const [usuarioLoguado, setUsuarioLoguado] = useState({});
  const [solicitudesEnEspera, setSolicitudesEnEspera] = useState("");
  const [solicitudesAprobadas, setSolicitudesAprobadas] = useState("");

  const [isLargerThanHD] = useMediaQuery([
    "(min-width: 720px)",
    "(display-mode: browser)",
  ]);

  useEffect(() => {
    let user = sesion();
    setUsuarioLoguado(user);
  }, []);

  useEffect(() => {
    const enEspera = async () => {
      let respuesta = await Consultar("/solicitudes", {
        where: {
          estatus: "PENDIENTE",
        },
      });
      respuesta.status === 200
        ? setSolicitudesEnEspera(respuesta.data.length)
        : setSolicitudesEnEspera("Error");
    };

    const aprobados = async () => {
      let respuesta = await Consultar("/solicitudes", {
        where: {
          estatus: "AUTORIZADA",
        },
      });

      respuesta.status === 200
        ? setSolicitudesAprobadas(respuesta.data.length)
        : setSolicitudesAprobadas("Error");
    };

    enEspera();
    aprobados();
  }, []);

  let rutas = [
    {
      url: "/dashboard",
      nombre: "Dashboard",
      isCurrentPage: true,
    },
  ];

  return (
    <>
      <Scaffold
        titulo={`Bienvenid(a) ${
          usuarioLoguado != undefined ? usuarioLoguado.nombreUsuario : ""
        }`}
        rutas={rutas}
      >
        <HStack textAlign="center" m={5} spacing={12}>
          <Container
            
            size="lg"
            background="core.900"
            borderRadius="10px"
            w="150px"
          >
            <Center p={2}>
              <VStack>
                <BiTime size="40px " color="808FBE" />
                <Text m="1" color="core.800" fontSize="20px">
                  {solicitudesEnEspera}
                </Text>
                <Text m="1" color="core.800" fontSize="20px">
                  Pendientes
                </Text>
              </VStack>
            </Center>
          </Container>

          <Container
            size="lg"
            background="core.900"
            borderRadius="10px"
            w="150px"
          >
            <Center p={2}>
              <VStack>
                <BsCardChecklist size="40px " color="808FBE" />
                <Text m="1" color="core.800" fontSize="20px">
                  {solicitudesAprobadas}
                </Text>
                <Text m="1" color="core.800" fontSize="20px">
                  Autorizadas
                </Text>
              </VStack>
            </Center>
          </Container>
          <Link href="/solicitudes">
            <a>
              <Container
                size="lg"
                background="core.900"
                borderRadius="100%"
                w={150}
                h={150}
              >
                <Center p={2}>
                  <VStack>
                    <MdAddCircle size="40px " color="808FBE" />
                    <Text m="1" color="core.800" fontSize="20px">
                      Nueva Solicitud
                    </Text>
                  </VStack>
                </Center>
              </Container>
            </a>
          </Link>
        </HStack>

        {isLargerThanHD ? (
          <BarAgrupada />
        ) : (
          <Container
            m={0}
            borderStyle="solid"
            borderColor="gray.200"
            borderWidth="2px"
            rounded={6}
          >
            <Dona />
          </Container>
        )}
      </Scaffold>
    </>
  );
}

export default Dashboard;
