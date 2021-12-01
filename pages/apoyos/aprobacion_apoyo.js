import Scaffold from "../../components/layout/Scaffold";
import { Divider, Stack, Text, Input, Box, HStack,Textarea,Select } from "@chakra-ui/react";
import { transparentize } from "@chakra-ui/theme-tools";
import Datetime from 'react-datetime';
import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

let rutas = [
  {
    url: "/Apoyos/aprobar",
    nombre: "Aprobar Apoyo",
    isCurrentPage: true,
  },
];
function aprobacionApoyo() {
  return (
    <Scaffold
      titulo="Ver Solicitud"
      descripcion="Folio xxx"
      rutas={rutas}
    >
      <Box
        m={2}
        borderStyle="solid"
        borderColor="gray.200"
        borderWidth="2px"
        direction="column"
        w="96%"
        p={10}
        rounded={6}
      >
        <Box direction="column" w="50%" rounded={6}>
          <Stack direction="row" h="100px" p={4}>
            <Divider orientation="vertical" />
            <Text fontSize="2xl">Detalles de la solicitud</Text>
          </Stack>

          <HStack align="stretch" m={5} >
            <Text fontWeight="bold" mb="10px">
              Fecha de solicitud:
            </Text>
            <Input
              variant="unstyled"
              disabled="true"
              placeholder="19 noviembre 2021"
              size="40px"
            />
          </HStack>
          <HStack m={5}>
            <Text fontWeight="bold" mb="10px">
              Beneficiario:
            </Text>
            <Input
              variant="unstyled"
              disabled="true"
              placeholder="Joe Sierra"
              size="40px"
            />
          </HStack>
          <HStack m={5}>
            <Text mb="10px" fontWeight="bold">
              Representante:
            </Text>
            <Input
              variant="unstyled"
              disabled="true"
              placeholder="Isabela Arias Belmonte"
              size="sm"
            />
          </HStack>
          <HStack m={5}>
            <Text fontWeight="bold" mb="10px">
              Comunidad:
            </Text>
            <Input
              variant="unstyled"
              disabled="true"
              placeholder="Charo"
              size="sm"
            />
          </HStack>
        </Box>
      </Box>
      <Box
        m={2}
        borderStyle="solid"
        borderColor="gray.200"
        borderWidth="2px"
        direction="column"
        w="96%"
        p={10}
        rounded={6}
      >
        <Box direction="column" w="50%" rounded={6}>
          <Stack direction="row" h="100px" p={4}>
            <Divider orientation="vertical" />
            <Text fontSize="2xl">Seguimiento</Text>
          </Stack>

          <HStack align="stretch" m={5} >
            <Text fontWeight="bold" mb="10px">
             Cantidad a Solicitar:
            </Text>
              <Select placeholder='Seleccione Cantidad'>
                <option value='option1'> 10</option>
                <option value='option2'> 20</option>
                <option value='option3'> 30</option>
              </Select>
          </HStack>
          <HStack m={5}>
            <Text fontWeight="bold" mb="10px">
              Fecha:
            </Text>
            <DayPicker />;
          </HStack>
          <HStack m={5}>
            <Text mb="10px" fontWeight="bold">
              Motivo de Rechazo:
            </Text>
            
              <Textarea placeholder='Motivo de Rechazo' />
            
          </HStack>
        </Box>
      </Box>
    </Scaffold>
  );
}

export default aprobacionApoyo;
