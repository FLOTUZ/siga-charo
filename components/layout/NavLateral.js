import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/img/logo-ayuntamiento.svg";

import { VStack, Center, Button, Spacer, Tooltip } from "@chakra-ui/react";

import { AiFillDashboard } from "react-icons/ai";
import { FiFilePlus } from "react-icons/fi";
import { FaRegChartBar } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { FiGrid } from "react-icons/fi";
const NavLateral = () => {
  const paginas = [
    {
      id: 1,
      nombre: "Dashboard",
      url: "/dashboard",
      icono: <AiFillDashboard />,
    },
    {
      id: 2,
      nombre: "Nueva Solicitud",
      url: "/solicitudes/catalogo",
      icono: <FiFilePlus />,
    },
    {
      id: 3,
      nombre: "Apoyos",
      url: "/apoyos",
      icono: <FiGrid />,
    },
    {
      id: 4,
      nombre: "Reportes",
      url: "/reportes",
      icono: <FaRegChartBar />,
    },
    {
      id: 5,
      nombre: "Dashboard",
      url: "/configuracion",
      icono: <AiFillSetting />,
    },
  ];

  return (
    <Center h="100vh">
      <VStack>
        <Image
          height={100}
          width={100}
          src={Logo}
          alt="Logo ayuntamiento charo"
        />
        <Spacer paddingY="0.5rem" />
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
                  <Button
                    h="7rem"
                    w="7rem"
                    color="core.800"
                    bg='#242B42'
                    _hover={{ bg: "core.800" }}
                    leftIcon={pagina.icono}
                  />
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
