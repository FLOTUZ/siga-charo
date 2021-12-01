import Head from "next/head";
import Scaffold from "../../components/layout/Scaffold";
import IBMDataTable from "../../components/Tabla/IBMDataTable";
import React, { useRef } from "react";
import { BiArchive,BiUserPlus } from "react-icons/bi";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,Button,Input
  } from '@chakra-ui/react'



function solicitudes() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()




  let rutas = [
    {
      url: "/solicitudes/index",
      nombre: "Solicitudes",
      isCurrentPage: true,
    },
  ];

  const rows = [
    {
      id: "a",
      name: "Laura Gomez",
      status: "Autorizado",
      date: "20/11/2021",
    },
    {
      id: "b",
      name: "Joe Sierra",
      status: "Rechazado",
      date: "20/11/2021",
    },
    {
      id: "c",
      name: "Emmanuel Esquivel",
      status: "Pendiente",
      date: "20/11/2021",
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
      key: "date",
      header: "Fecha",
    },

  ];

  return (
    <Scaffold rutas={rutas} titulo="Solicitudes" descripcion="Listado de Solicitudes">


            <Head>
                <title>Nueva Solicitud</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
<Button m ={5} rightIcon= {<BiArchive size = "40px "/>} ref={btnRef} background='gray.200'   onClick={onOpen}>
        Actividad mas reciente...
      </Button>
      <Button  leftIcon={<BiUserPlus size = "40px "/>} colorScheme='teal' url = "/nueva_Solicitud_Paso_1">
        Nueva Solicitud
      </Button>      
      
      <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Ultima Actividad</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Salir
            </Button>
            <Button colorScheme='blue'>Exportar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>


      <IBMDataTable headers={headers} rows={rows}></IBMDataTable>



    </Scaffold>
  );
}

export default solicitudes;
