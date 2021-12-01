import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Box,
  Grid,
  GridItem,
  Text,
  Button,
  Heading,
  Flex,
  Spacer,
  Input,
  Select,
} from "@chakra-ui/react";

function editar_usuario() {
  return (
    <div className="container">
      <Heading as="h1" color="gray.500" fontSize="4xl">
        Gestion de Usuarios
      </Heading>
      <Text color="gray.500" fontSize="2xl">
        Agregar Usuarios
      </Text>
      <Box
        p="100"
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Box w="100%" p={1}></Box>
        <Box>
          <Flex height="100vh" w="100vh" justifyContent="center">
            <Flex
              
              direction="column"
              alignItems="center"
              justifyContent="center"
              w="100vh"
              background="gray.200"
              p={12}
              rounded={6}
            >
              <FormControl id="country">
                <FormLabel>Rol del Usuario</FormLabel>
                <Select placeholder="Rol...">
                  <option>Capturador</option>
                  <option>Administrador</option>
                  <option>Director</option>
                </Select>
              </FormControl>
            </Flex>
          </Flex>

          <Button size="lg" colorScheme="green" mt="24px">
            Create a free account
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default editar_usuario;
