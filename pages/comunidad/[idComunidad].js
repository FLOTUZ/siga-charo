import {
    Box,
    Text,
    Button,
    Heading,
    Flex,
    Input,
    Editable,
    Skeleton,
    useToast,
  } from "@chakra-ui/react";
  import Scaffold from "../../components/layout/Scaffold";
  import { Consultar } from "../../services/API";
  import { useEffect, useState } from "react";
import { Crear } from "../../services/API";
import Link from "next/link";
import { useRouter } from "next/router";


function Editar_Comunidades() {
    const [comunidad, setComunidad] = useState({});
    const [cargando, setCargando] = useState(true);
  //----------Estado de la interfaz--------//
  const router = useRouter();
  const toast = useToast();
  //-------DATOS DE COMUNIDAD-----------//
  const [nombre, setNombre] = useState("");
  

    const editarComunidad = async () => {
      try {
        let comunidad = {
          nombre: nombre,
        };
        console.log(comunidad);
        let respuesta = await Crear("/comunidades/{id}", comunidad);
        if (respuesta.status === 200) {
          toast({
            title: "Editar comunidad",
            descripcion: `La Comunidad se ha editado`,
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
  
    let { idComunidad } = router.query;
  
    useEffect(() => {
      const ejecutar = async () => {
        let respuesta = await Consultar(`/comunidades/${idComunidad}`);
        if (respuesta.status === 200) {
          setComunidad(respuesta.data);
          setCargando(false);
        }
      };
      ejecutar();
    }, [idComunidad]);
    let rutas = [
      {
        url: "/comunidad",
        nombre: "editar comunidades",
        isCurrentPage: true,
      },
    ];
  
    return (
      <Scaffold
        rutas={rutas}
        titulo="Gestion de Comunidad"
        descripcion="Editar comunidad"
      >
        <Skeleton isLoaded={!cargando}>
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
                  Nombre de la Comunidad
                </Heading>
                <Text m={1}>Nombre(s)</Text>
                <Editable placeholder="Nombre(s)" />
                <Input
                  pr="4.5rem"
                  placeholder="Nombre de comunidad"
                  variant="filled"
                  value={comunidad.nombre}
                />                   
              </Flex>
            </Flex>
  
            <Box direction="column" w="100%" p={5} rounded={6}>

              <Button  onClick={() => editarComunidad()}m={1} colorScheme="green" variant="solid">
                Guardar
              </Button>

              <Button
                m={1}
                colorScheme="red"
                variant="outline"
                onClick={() => {
                  router.back();
                }}
              >
                Cancelar
              </Button>
            </Box>

          </Box>
        </Skeleton>
      </Scaffold>
    );
  }
  export default Editar_Comunidades;
  