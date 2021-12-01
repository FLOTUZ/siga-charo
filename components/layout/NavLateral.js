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
      icono: <AiFillDashboard size="70px" />,
    },
    {
      id: 2,
      nombre: "Nueva Solicitud",
      url: "/solicitudes/catalogo",
<<<<<<< Updated upstream
      icono: <FiFilePlus size="70px" />,
=======
<<<<<<< HEAD
      icono: <FiFilePlus size="70px"/>,
=======
      icono: <FiFilePlus size="70px" />,
>>>>>>> main
>>>>>>> Stashed changes
    },
    {
      id: 3,
      nombre: "Apoyos",
      url: "/apoyos",
      icono: <FiGrid size="70px"/>,
    },
    {
      id: 4,
      nombre: "Reportes",
      url: "/reportes",
<<<<<<< Updated upstream
      icono: <FaRegChartBar  size="70px" ></FaRegChartBar>,
    },
    {
      id: 5,
      nombre: "Configuracion",
      url: "/gestion_usuarios/usuarios",
=======
<<<<<<< HEAD
      icono: <FaRegChartBar size="70px" />,
    },
    {
      id: 5,
      nombre: "Dashboard",
      url: "/configuracion",
=======
      icono: <FaRegChartBar  size="70px" ></FaRegChartBar>,
    },
    {
      id: 5,
      nombre: "Configuracion",
      url: "/gestion_usuarios/usuarios",
>>>>>>> main
>>>>>>> Stashed changes
      icono: <AiFillSetting size="70px" />,
    },
  ];

  return (
    <Center h="100vh">
      <VStack>
        <Image
          height={200}
          width={200}
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
