import Scaffold from "../../components/layout/Scaffold";
import {
  Switch,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  Flex,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { BiXCircle, BiUpArrowCircle } from "react-icons/bi";
import { useState } from "react";
import Router from "next/router";

function AgregarApoyo() {
  const [nombreApoyo, setNombreApoyo] = useState("");
  const [encargado, setEncargado] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [costo, setCosto] = useState(0.0);
  const [activo, setActivo] = useState(true);

  const guardar = async () => {
    let apoyoAGuardar = {
      nombreApoyo,
      encargado,
      descripcion,
      costo,
    };

    console.log(apoyoAGuardar);
  };

  let rutas = [
    {
      url: "/Apoyos",
      nombre: "Agregar Apoyo",
      isCurrentPage: true,
    },
  ];

  return (
    <Scaffold
      titulo="Catalogo de Apoyos"
      descripcion="Agregar Apoyo"
      rutas={rutas}
    >
      <Flex>
        <Spacer />
        <HStack m="2rem">
          <FormLabel htmlFor="email-alerts" mb="0">
            Activo
          </FormLabel>
          <Switch
            size="lg"
            align="right"
            onChange={() => {
              setActivo(!activo);
            }}
          />
        </HStack>
      </Flex>

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
            <Flex w="48%" p={1} rounded={6}>
              <FormControl id="Nombre del Apoyo">
                <FormLabel> Nombre del Apoyo:</FormLabel>
                <Input
                  placeholder=""
                  onChange={(e) => {
                    setNombreApoyo(e.target.value);
                  }}
                />
              </FormControl>
            </Flex>

            <Flex w="48%" rounded={6}></Flex>
          </Flex>
        </Flex>
      </Box>

      <Flex
        m={6}
        borderStyle="solid"
        borderColor="gray.200"
        borderWidth="2px"
        background="gray.150"
        direction="column"
        rounded={6}
        w="96%"
      >
        <Flex w="88%">
          <FormLabel p="4" m={1}>
            Descripción:{" "}
          </FormLabel>
          <Textarea m={4} placeholder="La descripción es..." />

          <FormLabel p="4">Costo: </FormLabel>
          <FormControl m={1} id="Costo" marginTop="30px">
            <Input
              m={4}
              type="number"
              placeholder="$0.00"
              onChange={(e) => setCosto(e.target.value)}
            />
          </FormControl>
        </Flex>
      </Flex>

      <Flex m={5} p={10}>
        <Spacer />
        <Button
          colorScheme="red"
          variant="outline"
          rightIcon={<BiXCircle size="25px " />}
          m={5}
          onClick={() => Router.back()}
        >
          Descartar
        </Button>
        <Button
          colorScheme="blue"
          variant="solid"
          rightIcon={<BiUpArrowCircle size="25px " />}
          m={5}
          onClick={guardar}
        >
          Guardar
        </Button>
      </Flex>
    </Scaffold>
  );
}
export default AgregarApoyo;
