import {
  Grid,
  GridItem,
} from "@chakra-ui/react";
import NavLateral from "./NavLateral";
import Rutero from "./Rutero";

const Scaffold = ({rutas}, ...props) => {
  return (
    <>
      <Grid
        h="100vh"
        gridGap="0px"
        templateRows="repeat(15, 1fr)"
        templateColumns="repeat(10, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={15} colSpan={1} bg="core.850">
          <NavLateral />
        </GridItem>
        <GridItem rowSpan={1} colSpan={9} bg="core.900">
          <Rutero rutas={rutas}/>
        </GridItem>
        <GridItem
          rowSpan={14}
          colSpan={9}
          bg="white"
        >
          {props.children}
        </GridItem>
      </Grid>
    </>
  );
};

export default Scaffold;
