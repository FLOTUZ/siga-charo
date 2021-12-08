import Scaffold from "../../components/layout/Scaffold";
import IBMDataTable from "../../components/Tabla/IBMDataTable";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import GenerateHash from "random-hash";
import { BiArchive, BiUserPlus } from "react-icons/bi";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Skeleton,
  DataTable,
  TableContainer,
} from "@chakra-ui/react";

import { Consultar } from "../../services/API";

function Usuarios() {
  //TODO: Poner el drawer en un componente
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [cargandoTabla, setCargandoTabla] = useState(false);
  const [usuarios, setUsuarios] = useState([]);

  let rutas = [
    {
      url: "/gestion_de_usuarios/usuarios",
      nombre: "Usuarios",
      isCurrentPage: true,
    },
  ];

  useEffect(() => {
    const datosTabla = async () => {
      let respuesta = await Consultar("/usuarios", {
        fields: {
          idUsuario: true,
          nombreUsuario: true,
          nombre: true,
          email: true,
          puesto: true,
        },
      });
      if (respuesta.status === 200) {
        setUsuarios(respuesta.data);
        setCargandoTabla(true);
      } else {
        console.log("No hay data");
      }
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
      <Skeleton isLoaded={cargandoTabla}>
        <IBMDataTable rows={usuarios}></IBMDataTable>
      </Skeleton>
    </Scaffold>
  );
}

export default Usuarios;
