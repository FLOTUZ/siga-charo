import Scaffold from "../../components/layout/Scaffold";
import { useState } from "react";
import { Crear } from "../../services/API";
import Link from "next/link";
import {
  Box,
  Text,
  Button,
  Heading,
  Flex,
  Input,
  useToast,
} from "@chakra-ui/react";

function Agregar_comunidades() {
  //----------Estado de la interfaz--------//
  const toast = useToast();
  //-------DATOS DE COMUNIDAD-----------//
  const [nombre, setNombre] = useState("");

  const guardarComunidad = async () => {
    try {
      let comunidad = {
        nombre: nombre,
      };
      console.log(comunidad);
      let respuesta = await Crear("/comunidades", comunidad);
      if (respuesta.status === 200) {
        toast({
          title: "Nueva Comunidad ",
          descripcion: `La comunidad se ha guardado`,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Oops.. Algo salio mal",
          descripcion: respuesta.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (e) {
      toast({
        title: "Verifica los datos",
        description: e.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      console.log(e.message);
    }
  };

  let rutas = [
    {
      url: "/comunidad",
      nombre: "Agregar Comunidades",
      isCurrentPage: true,
    },
  ];

  return (
    <Scaffold
      rutas={rutas}
      titulo="Gestion de Comunidades"
      descripcion="Agregar Comunidad"
    >
      <Box bg="white" w="100%" p={2}></Box>

      <Box m={5}>
        <Flex m={2}>
          <Flex
            borderStyle="solid"
            borderColor="gray.200"
            borderWidth="2px"
            direction="column"
            w="100%"
            p={10}
            rounded={6}
          >
            <Heading color="gray" as="h3" fontSize="2xl">
              Ingrese la Comunidad
            </Heading>
            <Text m={1}>Comunidad</Text>
            <Input
              m={2}
              placeholder="Comunidad"
              onChange={(e) => setNombre(e.target.value)}
            />
          </Flex>
        </Flex>

        <Box direction="column" w="100%" p={5} rounded={6}>
          <Link href="/gestion-beneficiario">
            <a>
              <Button
                onClick={() => guardarComunidad()}
                m={1}
                colorScheme="green"
                variant="solid"
              >
                Agregar
              </Button>
            </a>
          </Link>
          <Link href="/gestion-beneficiario">
            <a>
              <Button m={1} colorScheme="red" variant="outline">
                Cancelar
              </Button>
            </a>
          </Link>
        </Box>
      </Box>
    </Scaffold>
  );
}

export default Agregar_comunidades;
