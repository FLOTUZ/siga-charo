import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/img/logo-ayuntamiento.svg";

import { VStack, Center, Button, Spacer, Tooltip, Container } from "@chakra-ui/react";

import { AiFillDashboard } from "react-icons/ai";
import { FiFilePlus } from "react-icons/fi";
import { FaRegChartBar, FaUserFriends } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { FiGrid } from "react-icons/fi";
const NavLateral = () => {
  const paginas = [
    {
      id: 1,
      nombre: "Dashboard",
      url: "/dashboard",
<<<<<<< Updated upstream
      icono: <AiFillDashboard size="2rem" />,
=======
      icono: <AiFillDashboard size="30px" />,
>>>>>>> Stashed changes
    },
    {
      id: 2,
      nombre: "Nueva Solicitud",
      url: "/solicitudes/catalogo",
<<<<<<< Updated upstream

      icono: <FiFilePlus size="2rem" />,
=======
      icono: <FiFilePlus size="30px" />,
>>>>>>> Stashed changes

    },
    {
      id: 3,
      nombre: "Apoyos",
      url: "/apoyos",
<<<<<<< Updated upstream
      icono: <FiGrid size="2rem"/>,
=======
      icono: <FiGrid size="30px"/>,
>>>>>>> Stashed changes
    },
    {
      id: 4,
      nombre: "Reportes",
      url: "/reportes",
<<<<<<< Updated upstream

      icono: <FaRegChartBar  size="2rem" />,
    },
    {
      id: 5,
      nombre: "Usuarios",
      url: "/gestion_usuarios/usuarios",

      icono: <FaUserFriends size="2rem" />,
=======
      icono: <FaRegChartBar size="30px" />
    },
    {
      id: 5,
      nombre: "Usarios",
      url: "/gestion_usuarios/usuarios",
      icono: <FaRegChartBar size="30px" />,
>>>>>>> Stashed changes
    },
    {
      id: 5,
      nombre: "Configuracion",
      url: "/configuracion",
<<<<<<< Updated upstream

      icono: <AiFillSetting size="2rem" />,
=======
      icono: <AiFillSetting size="30px" />,
>>>>>>> Stashed changes
    },
  ];

  return (
    <Center h="100vh">
      <VStack>
        <Image
<<<<<<< Updated upstream
          height={100}
          width={100}
=======
          height={60}
          width={120}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                  <Container
                    h="4rem"
                    w="4rem"
=======
                  <Button
                    h="5rem"
                    w="5rem"
>>>>>>> Stashed changes
                    color="core.800"
                    bg='#242B42'
                    
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
