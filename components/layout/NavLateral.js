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
  useDisclosure,
  Stack,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { AiFillDashboard } from "react-icons/ai";
import { FiFilePlus } from "react-icons/fi";
import { FaRegEye, FaUserAstronaut, FaRegChartBar } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { FiGrid } from "react-icons/fi";
import { RiFolderUserFill } from "react-icons/ri";
import React from "react";
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
      id: 4,
      nombre: "Beneficiarios",
      url: "/gestion-beneficiario",

      icono: <RiFolderUserFill size="2rem" />,
    },
    {
      id: 5,
      nombre: "Reportes",
      url: "/reportes",

      icono: <FaRegChartBar size="2rem" />,
    },
    {
      id: 6,
      nombre: "Usuarios",
      url: "/gestion_usuarios",

      icono: <FaUserAstronaut size="2rem" />,
    },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
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
        <Spacer paddingY="0.8rem" />
        <Center width="90px">
          <Divider color="white" orientation="horizontal" />
        </Center>
        <Spacer paddingY="0.8rem" />
        <a>
          <Tooltip hasArrow label="Actividad" bg="transparent">
            <Container
              h="4rem"
              w="full"
              color="core.800"
              bg="#242B42"
              _hover={{ bg: "core.500" }}
            >
              <Center h="4rem">
                <IconButton
                  size={40}
                  icon={<FaRegEye size="40px " />}
                  ref={btnRef}
                  colorScheme="core.800"
                  onClick={onOpen}
                ></IconButton>
              </Center>
            </Container>
          </Tooltip>
        </a>
        <Link href="/">
          <a>
            <Tooltip hasArrow label="Salir" bg="transparent">
              <Container
                h="4rem"
                w="full"
                color="core.800"
                bg="#242B42"
                _hover={{ bg: "red.500" }}
              >
                <Center h="4rem">
                  <BiLogOutCircle color="white" size={40} />
                </Center>
              </Container>
            </Tooltip>
          </a>
        </Link>

        <Stack direction="row" h="100px">
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Actividad Reciente</DrawerHeader>

              <DrawerBody>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Salir
                </Button>
                <Button colorScheme="blue">Guardar</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Stack>
      </VStack>
    </Center>
  );
};

export default NavLateral;
