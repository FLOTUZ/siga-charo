import Scaffold from "../components/layout/Scaffold";
import Link from "next/link";
import { useEffect, useState } from "react";
import { sesion } from "../utils/Utils";
import {
  WrapItem,
  Wrap,
  Button,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  Center,
  AspectRatio,
} from "@chakra-ui/react";
import { AiFillFileAdd } from "react-icons/ai";

import { Consultar } from "../services/API";
import Linea from "../components/graficas/Linea";
import VerticalBar from "../components/graficas/VerticalBar";
import BarAgrupada from "../components/graficas/BarAgrupada";

function Dashboard() {
  const [usuarioLoguado, setUsuarioLoguado] = useState({});
  const [solicitudesEnEspera, setSolicitudesEnEspera] = useState("");
  const [solicitudesAprobadas, setSolicitudesAprobadas] = useState("");

  useEffect(() => {
    let user = sesion();
    setUsuarioLoguado(user);
  }, []);

  useEffect(() => {
    const enEspera = async () => {
      let respuesta = await Consultar("/solicitudes", {
        where: {
          estatus: "pendiente",
        },
      });
      respuesta.status === 200
        ? setSolicitudesEnEspera(respuesta.data.length)
        : setSolicitudesEnEspera("Error");
    };

    const aprobados = async () => {
      let respuesta = await Consultar("/solicitudes", {
        where: {
          estatus: "aprobado",
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
        <Wrap spacing="5rem" m={10} textAlign="center">
          <WrapItem>
            <Center w="140px" h="100px" bg="core.850" borderRadius="10px">
              <Stat>
                <StatLabel>
                  <Text color="white" fontSize="20px">
                    Solicitud en Espera
                  </Text>
                </StatLabel>
                <StatNumber>
                  <Text color="white" fontSize="20px">
                    {solicitudesEnEspera}
                  </Text>
                </StatNumber>
              </Stat>
            </Center>
          </WrapItem>
          <WrapItem>
            <Center w="140px" h="100px" bg="core.850" borderRadius="10px">
              <Stat>
                <StatLabel>
                  <Text color="white" fontSize="20px">
                    Aprobados
                  </Text>
                </StatLabel>
                <StatNumber>
                  <Text color="white" fontSize="20px">
                    {solicitudesAprobadas}
                  </Text>
                </StatNumber>
              </Stat>
            </Center>
          </WrapItem>
          <Link href="/solicitudes/catalogo">
            <a>
              <WrapItem>
                <Button
                  rightIcon={<AiFillFileAdd size="40px " color="white" />}
                  colorScheme="white"
                  variant="ghost"
                  size="lg"
                  background="teal"
                  borderRadius="10px"
                  w="280px"
                  h="100px"
                >
                  <Text m="1" color="white" fontSize="20px">
                    Nueva Solicitud
                  </Text>
                </Button>
              </WrapItem>
            </a>
          </Link>
        </Wrap>
        <AspectRatio ratio={16 / 9}>
          <BarAgrupada/>
        </AspectRatio>
      </Scaffold>
    </>
  );
}

export default Dashboard;
