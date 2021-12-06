import Scaffold from "../../components/layout/Scaffold";
import IBMDataTable from "../../components/Tabla/IBMDataTable";
import Link from "next/link";
import Router from "next/router";
import { useRef, useEffect, useState } from "react";
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

import { Consultar } from "../../services/API";

function Usuarios() {
  //TODO: Poner el drawer en un componente
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const [usuarios, setUsuarios] = useState([]);

  let rutas = [
    {
      url: "/gestion_de_usuarios/usuarios",
      nombre: "Usuarios",
      isCurrentPage: true,
    },
  ];

  const headers = [
    {
      key: "idUsuario",
      header: "idUsuario",
    },
    {
      key: "nombreUsuario",
      header: "nombreUsuario",
    },
    {
      key: "nombre",
      header: "nombre",
    },
    {
      key: "apellidoPaterno",
      header: "apellidoPaterno",
    },
    {
      key: "apellidoMaterno",
      header: "apellidoMaterno",
    },
    {
      key: "email",
      header: "email",
    },
    {
      key: "password",
      header: "password",
    },
    {
      key: "puesto",
      header: "puesto",
    },

    {
      key: "haceSolicitudes",
      header: "haceSolicitudes",
    },

    {
      key: "altaDeApoyos",
      header: "altaDeApoyos",
    },

    {
      key: "autorizaApoyos",
      header: "autorizaApoyos",
    },
    {
      key: "haceReportes",
      header: "haceReportes",
    },
    {
      key: "administraSistema",
      header: "administraSistema",
    },
    {
      key: "activo",
      header: "activo",
    },
  ];

  useEffect(() => {
    const datosTabla = async () => {
      let respuesta = await Consultar("/usuarios");

      setUsuarios(respuesta.data);
    };

    datosTabla();
  }, []);

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
          <Button leftIcon={<BiUserPlus size="40px " />} colorScheme="teal">
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

      <IBMDataTable
        headers={headers}
        rows={usuarios}
        filaClickeada={(index) => {
          Router.push({
            pathname: "/gestion_usuarios/editar_usuario",
            query:{index}
          })
          console.log("Redireccion");
        }}
      ></IBMDataTable>
    </Scaffold>
  );
}

export default Usuarios;
