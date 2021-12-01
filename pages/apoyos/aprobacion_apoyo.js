import Scaffold from "../../components/layout/Scaffold";
import { Divider, Stack, Text, Input, Box } from "@chakra-ui/react";
import { transparentize } from "@chakra-ui/theme-tools";
let rutas = [
  {
    url: "/Apoyos",
    nombre: "Aprobar Apoyo",
    isCurrentPage: true,
  },
];
function aprobacionApoyo() {
  return (
    <Scaffold
      titulo="Catalogo de apoyos"
      descripcion="apoyo por aceptar"
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
        <Box
          borderStyle="solid"
          borderColor="gray.200"
          borderWidth="2px"
          direction="column"
          w="50%"
          rounded={6}
        >
          <Stack direction="row" h="100px" p={4}>
            <Divider orientation="vertical" />
            <Text fontSize="2xl">Detalles de la solicitud</Text>
          </Stack>
          <Text mb="8px">Fecha de solicitud:</Text>
          <Input
            variant='unstyled'
            disabled="true"
            placeholder="19 noviembre 2021"
            size="sm"
          />

          <Text mb="8px">Beneficiario:</Text>
          <Input
            variant='unstyled'
            disabled="true"
            placeholder="Joe Sierra"
            size="sm"
          />

          <Text mb="8px">Representante:</Text>
          <Input
            variant='unstyled'
            disabled="true"
            placeholder="Isabela Arias Belmonte"
            size="sm"
          />

          <Text mb="8px">Comunidad:</Text>
          <Input
            variant='unstyled'
            disabled="true"
            placeholder="Charo"
            size="sm"
          />
        </Box>
      </Box>
    </Scaffold>
  );
}

export default aprobacionApoyo;
