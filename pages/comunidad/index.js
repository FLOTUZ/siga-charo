import Scaffold from "../../components/layout/Scaffold";
import IBMDataTable from "../../components/Tabla/IBMDataTable";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
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
  Spacer,
} from "@chakra-ui/react";

import { Consultar } from "../../services/API";

function Comunidades() {
  //TODO: Poner el drawer en un componente
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [cargandoTabla, setCargandoTabla] = useState(false);
  const [comunidades, setComunidades] = useState([]);

  const router = useRouter();
  let rutas = [
    {
      url: "/comunidad/comunidades",
      nombre: "Comunidades",
      isCurrentPage: true,
    },
  ];

  useEffect(() => {
    const datosTabla = async () => {
      let respuesta = await Consultar("/comunidades", {
        fields: {
          idComunidad: true,
          nombre: true,
        },
      });
      if (respuesta.status === 200) {
        setComunidades(respuesta.data);
        setCargandoTabla(true);
      } else {
        console.log("No hay data");
      }
    };
    datosTabla();
  }, []);

  return (
    <Scaffold rutas={rutas} titulo="Gestion de Comunidades" descripcion="Comunidades">
  
  
      <Link href="/comunidad/agregar_comunidad">
        <a>
          <Button leftIcon={<BiUserPlus size="40px " />} colorScheme="teal">
            Agregar nueva comunidad
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
        <IBMDataTable
          clickeada={(index) => {
            let idComunidad = index.cells[0].value;
            router.push(`/comunidad/${idComunidad}`);
          }}
          rows={comunidades}
        ></IBMDataTable>
      </Skeleton>
    </Scaffold>
  );
}

export default Comunidades;
