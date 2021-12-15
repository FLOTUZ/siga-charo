import NavLateral from "./NavLateral";
import Rutero from "./Rutero";
import Head from "next/head";

import { Grid, GridItem, Heading, Text, Box } from "@chakra-ui/react";

function Scaffold({ titulo = "", descripcion = "", rutas = [], children }) {
  return (
    <>
      <Head>
        <title>{titulo}</title>
      </Head>

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
          <GridItem h={50} rowSpan={1} colSpan={9} bg="core.900">
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
          <Box w="100%" p={2} mb={5} mt={2}>
            {children}
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default Scaffold;
