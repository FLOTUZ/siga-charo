import Scaffold from "../components/layout/Scaffold";
import Link from "next/link";
import { useEffect } from "react";
import { obtenerSesion } from "../utils/Utils";
import {
  WrapItem,
  Wrap,
  Stack,
  Button,
  Textarea,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Center,
  AspectRatio,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

function Dashboard() {
  useEffect(() => {
    let user = obtenerSesion("user");
    console.log(user);
  });

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
      <Scaffold titulo="Inicio" rutas={rutas}>
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
                    2
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
                    5
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
                    Entregados Hoy
                  </Text>
                </StatLabel>
                <StatNumber>
                  <Text color="white" fontSize="20px">
                    5
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
                    Borradores
                  </Text>
                </StatLabel>
                <StatNumber>
                  <Text color="white" fontSize="20px">
                    2
                  </Text>
                </StatNumber>
              </Stat>
            </Center>
          </WrapItem>
          <Link href="/solicitudes/catalogo">
            <a>
              <WrapItem>
                <Button
                  rightIcon={<AddIcon color="white" />}
                  colorScheme="white"
                  variant="ghost"
                  size="lg"
                  background="teal"
                  borderRadius="50px"
                  w="180px"
                  h="100px"
                >
                  <Text color="white" fontSize="20px">
                    Nueva Solicitud
                  </Text>
                </Button>
              </WrapItem>
            </a>
          </Link>
        </Wrap>
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
            alt="demo"
          />
        </AspectRatio>
      </Scaffold>
    </>
  );
}

export default Dashboard;
