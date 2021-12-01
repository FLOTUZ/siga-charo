import Scaffold from "../../components/layout/Scaffold";
import {
  Switch,
  Grid,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Radio,
  RadioGroup,
  Input,
  Textarea,
  Box,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

let rutas = [
  {
    url: "/Apoyos",
    nombre: "Editar Apoyo",
    isCurrentPage: true,
  },
];

function Apoyos() {
  return (
    <Scaffold
      titulo="Catalogo de Apoyos"
      descripcion="Editar Apoyo"
      rutas={rutas}
    >
      <Flex>
        <Spacer />
        <Box>
          <Switch size="lg" align="right" />
        </Box>
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
            <FormControl id="Nombre del Apoyo">
              <FormLabel>FNombre del Apoyo</FormLabel>
              <Input placeholder="" />
            </FormControl>

            <FormLabel>Tipo de Apoyo</FormLabel>
            <RadioGroup defaultValue="1">
              <Stack spacing={4} direction="row">
                <Radio value="1">Material</Radio>
                <Radio value="2">Construcción</Radio>
                <Radio value="3">Económico</Radio>
              </Stack>
            </RadioGroup>
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
            w="96%">
        <Flex
        
        w="50%"
        p={10}
        rounded={6}
      >
        <FormLabel>Descripción</FormLabel>
        <Textarea placeholder="La descripción es..." />
      </Flex>
        </Flex>
    

      <Flex  
            direction="column"
            w="100%"
            p={5}
            rounded={6}>
        <Stack direction="row" spacing={4} marginRight="10px">
          <Button colorScheme="red" variant="outline">
            Descartar
          </Button>
          <Button colorScheme="blue" variant="solid">
            Guardar
          </Button>
        </Stack>
      </Flex>
    </Scaffold>
  );
}
export default Apoyos;
