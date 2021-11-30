import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import NavLateral from "./NavLateral";
import Rutero from "./Rutero";

function Scaffold({ titulo = "", descripcion = "", rutas = [], children }) {
  return (
    <>
      <Grid
        h="100vh"
        gridGap="0px"
        templateRows="repeat(15, 1fr)"
        templateColumns="repeat(10, 1fr)"
        gap={4}
      >
        {/* ---------------------------  NAV LATERAL  --------------------------------- */}
        <GridItem rowSpan={15} colSpan={1} bg="core.850">
          <NavLateral />
        </GridItem>

        {/* ---------------------------  RUTERO  --------------------------------- */}
        {rutas.length > 0 ? (
          <GridItem rowSpan={1} colSpan={9} bg="core.900">
            <Rutero rutas={rutas} />
          </GridItem>
        ) : null}
        {/* ----------------------   TITULO Y DESCRIPCION   ------------------------------ */}
        <GridItem rowSpan="auto" colSpan={9} bg="white">
          <Heading paddingStart={2} as="h1" size="2xl" color="black">
            {titulo}
          </Heading>
          <Text paddingStart={2} fontSize="2xl" color="gray.500" isTruncated>
            {descripcion}
          </Text>
          {children}
        </GridItem>
      </Grid>
    </>
  );
}

export default Scaffold;
