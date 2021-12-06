import Scaffold from "../../components/layout/Scaffold";
import IBMDataTable from "../../components/Tabla/IBMDataTable";
import Link from "next/link";
import React, { useRef } from "react";
import { BiArchive, BiUserPlus } from "react-icons/bi";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
} from "@chakra-ui/react";

function usuarios() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  let rutas = [
    {
      url: "/gestion_de_usuarios/usuarios",
      nombre: "Usuarios",
      isCurrentPage: true,
    },
  ];

  const rows = [
    {
      id: "a",
      name: "Laura Gomez",
      status: "Deshabilitado",
      rol: "Administrador",
    },
    {
      id: "b",
      name: "Joe Sierra",
      status: "Activo",
      rol: "Capturador",
    },
    {
      id: "c",
      name: "Emmanuel Esquivel",
      status: "Activo",
      rol: "Director",
    },
  ];

  const headers = [
    {
      key: "name",
      header: "Nombre",
    },
    {
      key: "status",
      header: "Estado",
    },
    {
      key: "rol",
      header: "Rol",
    },
    {
      key: "configuration",
      header: "Configuracion",
    },
  ];

  return (
    <Scaffold rutas={rutas} titulo="Gestion de Usuarios" descripcion="Usuarios">
      <Button
        m={5}
        rightIcon={<BiArchive size="40px " />}
        ref={btnRef}
        background="gray.200"
        onClick={onOpen}
      >
        Actividad mas reciente...
      </Button>
      <Link href="/gestion_usuarios/agregar_usuarios">
        <a>
          <Button
            leftIcon={<BiUserPlus size="40px " />}
            colorScheme="teal"
          >
            Agregar nuevo usuario
          </Button>
        </a>
      </Link>

      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Ultima Actividad</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Salir
            </Button>
            <Button colorScheme="blue">Exportar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <IBMDataTable headers={headers} rows={rows}></IBMDataTable>
    </Scaffold>
  );
}

export default usuarios;
