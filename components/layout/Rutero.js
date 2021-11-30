import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Rutero = ({ rutas = [] }) => {
  return (
    <Breadcrumb
      style={{ display: "flex", alignItems: "center" }}
      h="100%"
      px="2rem"
      spacing="8px"
      textColor="white"
      separator={<ChevronRightIcon color="white" />}
    >
      {rutas.length > 0
        ? rutas.map((ruta, index) => {
            return (
              <BreadcrumbItem key={index} isCurrentPage={ruta.isCurrentPage}>
                <BreadcrumbLink href={ruta.url}>{ruta.nombre}</BreadcrumbLink>
              </BreadcrumbItem>
            );
          })
        : null}
    </Breadcrumb>
  );
};

export default Rutero;
