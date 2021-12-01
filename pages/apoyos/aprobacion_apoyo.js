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
      <Stack direction="row" h="100px" p={4}>
        <Divider orientation="vertical" />
        <Text fontSize="2xl">Detalles de la solicitud</Text>
      </Stack>
      <Box
        m = {5}
        borderStyle="solid"
        borderColor="gray.200"
        borderWidth="2px"
        direction="column"
        w="96%"
        p={10}
        rounded={6}
      >
        <Text>Fecha de solicitud:</Text>
        <Text>18 noviembre 2021</Text>
      </Box>
    </Scaffold>
  );
}

export default aprobacionApoyo;
