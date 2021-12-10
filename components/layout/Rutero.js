import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Flex,
  HStack,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FaRegEye } from "react-icons/fa";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Center,
  Box,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const Rutero = ({ rutas = [], dataDrawer = [] }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
