import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/img/logo-ayuntamiento.svg";

import {
  VStack,
  Center,
  Button,
  Spacer,
  Tooltip,
  Container,
} from "@chakra-ui/react";

import { AiFillDashboard } from "react-icons/ai";
import { FiFilePlus } from "react-icons/fi";
import { FaUserAstronaut, FaRegChartBar, FaUserFriends } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { FiGrid } from "react-icons/fi";
import {RiFolderUserFill} from "react-icons/ri"
const NavLateral = () => {
  const paginas = [
    {
      id: 1,
      nombre: "Dashboard",
      url: "/dashboard",
      icono: <AiFillDashboard size="2rem" />,
    },
    {
      id: 2,
      nombre: "Nueva Solicitud",
      url: "/solicitudes",

      icono: <FiFilePlus size="2rem" />,
    },
    {
      id: 3,
      nombre: "Apoyos",
      url: "/apoyos",
      icono: <FiGrid size="2rem" />,
    },
    {
      id: 6,
      nombre: "Beneficiarios",
      url: "/gestion-beneficiario",

      icono: <RiFolderUserFill size="2rem" />,
    },
    {
      id: 4,
      nombre: "Reportes",
      url: "/reportes",

      icono: <FaRegChartBar size="2rem" />,
    },
    {
      id: 5,
      nombre: "Usuarios",
      url: "/gestion_usuarios",

      icono: <FaUserAstronaut size="2rem" />,
    },
  
  
  ];

  return (
    <Center h="100vh">
      <VStack spacing={1} w="full">
        <Image
          height={100}
          width={100}
          src={Logo}
          alt="Logo ayuntamiento charo"
        />
        <Spacer paddingY="0.2rem" />
        {paginas.map((pagina) => {
          return (
            <Link href={pagina.url} key={pagina.id}>
              <a>
                <Tooltip
                  key={pagina.id}
                  hasArrow
                  label={pagina.nombre}
                  bg="transparent"
                >
                  <Container
                    h="4rem"
                    w="full"
                    color="core.800"
                    bg="#242B42"
                    _hover={{ bg: "core.800" }}
                  >
                    <Center h="4rem">{pagina.icono}</Center>
                  </Container>
                </Tooltip>
              </a>
            </Link>
          );
        })}
      </VStack>
    </Center>
  );
};

export default NavLateral;
