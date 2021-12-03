import Scaffold from "../../components/layout/Scaffold";
import {
  Divider,Select,Textarea,
  Stack,
  Text,
  Input,
  Box,
  HStack,
  Badge,
  Button,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { transparentize } from "@chakra-ui/theme-tools";
import Datetime from "react-datetime";
import React from "react";
import DayPicker from "react-day-picker";
import { DatePicker, DatePickerInput } from "carbon-components-react";
import "react-day-picker/lib/style.css";

let rutas = [
  {
    url: "/Apoyos/aprobar",
    nombre: "Aprobar Apoyo",
    isCurrentPage: true,
  },
];
function aprobacionApoyo() {
  return (
    <Scaffold titulo="Apoyo" descripcion="Folio : 007" rutas={rutas}>

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

          <HStack align="stretch" m={5}>
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
        <Divider />
        <Box direction="column" w="50%" rounded={6}>
          <Stack direction="row" h="100px" p={4}>
            <Divider orientation="vertical" />
            <Text fontSize="2xl">Apoyo Solicitado</Text>
          </Stack>
          <HStack align="stretch" m={5}>
            <Text fontWeight="bold" mb="10px">
              Apoyo:
            </Text>
            <Input
              variant="unstyled"
              disabled="true"
              placeholder="Calentador Solar"
              size="40px"
            />
          </HStack>
          <HStack m={5}>
            <Text fontWeight="bold" mb="10px">
              Cantidad Solicitada:
            </Text>
            <Input
              variant="unstyled"
              disabled="true"
              placeholder="2 "
              size="40px"
            />
          </HStack>
          <HStack m={5}>
            <Text mb="10px" fontWeight="bold">
              Costo del apoyo:
            </Text>
            <Input
              variant="unstyled"
              disabled="true"
              placeholder="$2,000"
              size="sm"
            />
          </HStack>
          <HStack m={5}>
            <Text fontWeight="bold" mb="10px">
              Descuento:
            </Text>
            <Input
              variant="unstyled"
              disabled="true"
              placeholder="N/A"
              size="sm"
            />
          </HStack>
          <HStack m={5}>
            <Text fontWeight="bold" mb="10px">
              Estatus:
            </Text>
            <Badge variant="solid" colorScheme="yellow">
              Pendiente
            </Badge>
          </HStack>
        </Box>
        <Divider />
        <Box m={2}>
          <Flex>
            <Spacer />
            <Button colorScheme="green" variant="solid">
              Aceptar
            </Button>
            <Button marginLeft="10px" colorScheme="red" variant="outline">
              Rechazar
            </Button>
          </Flex>
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

          <HStack align="stretch" m={5}>
            <Text fontWeight="bold" mb="10px">
              Cantidad a Solicitar:
            </Text>
            <Select placeholder="Seleccione Cantidad">
              <option value="option1"> 10</option>
              <option value="option2"> 20</option>
              <option value="option3"> 30</option>
            </Select>
          </HStack>
          <HStack m={5}>
            <Text fontWeight="bold" mb="10px">
              Fecha:
            </Text>

          </HStack>
          <HStack m={5}>
            <Text mb="10px" fontWeight="bold">
              Motivo de Rechazo:
            </Text>

            <Textarea placeholder="Motivo de Rechazo" />
          </HStack>
        </Box>
      </Box>
    </Scaffold>
  );
}

export default aprobacionApoyo;
