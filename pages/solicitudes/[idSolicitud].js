import Head from "next/head";
import { useRouter } from "next/router";
import {
  Button,
  Input,
  Flex,
  Box,
  Heading,
  Text,
  Spacer,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import Scaffold from "../../components/layout/Scaffold";

function Ver_solicitud() {
  let router = useRouter();
  let { idSolicitud } = router.query;
  console.log(idSolicitud);
  let rutas = [
    {
      url: "/ver_solicitud",
      nombre: "ver Solicitud",
      isCurrentPage: true,
    },
  ];

  return (
    <Scaffold
      rutas={rutas}
      titulo="Datos de Solicitud"
      descripcion="Folio xxxx"
    >
      <div>
        <Head>
          <title>Datos de Solicitud</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Box bg="white" w="100%" p={5} color="white"></Box>
          <Box m={5}>
            <Flex m="2">
              <Flex direction="column" m={5}>
                <Flex
                  borderStyle="solid"
                  borderColor="gray.200"
                  borderWidth="2px"
                  direction="column"
                  w="120vh"
                  p={10}
                  rounded={6}
                >
                  <Heading color="gray" as="h3" fontSize="2xl">
                    Detalles Solicitante
                  </Heading>
                  <Flex m={5}>
                    <Text m={5} as="em">
                      Fecha de Solicitud:{" "}
                    </Text>
                    <Text m={5}>18 Noviembre 2021</Text>
                  </Flex>
                  <Flex m={5}>
                    <Text m={5} as="em">
                      Nombre del Beneficiario:{" "}
                    </Text>
                    <Text m={5}>Escuela Primaria Benito Juarez</Text>
                  </Flex>
                  <Flex m="5">
                    <Text m={5} as="em">
                      Representante:{" "}
                    </Text>
                    <Text m={5}>Isabela Arias Belmonte</Text>
                  </Flex>
                  <Flex m={5}>
                    <Text m={5} as="em">
                      Comunidad:{" "}
                    </Text>
                    <Text m={5}>Charo</Text>
                  </Flex>
                </Flex>
                <Flex
                  borderStyle="solid"
                  borderColor="gray.200"
                  borderWidth="2px"
                  direction="column"
                  w="100%"
                  p={10}
                  rounded={6}
                >
                  <Heading color="gray" as="h3" fontSize="2xl">
                    Apoyo Solicitado
                  </Heading>
                  <Flex m={5}>
                    <Text m={5} as="em">
                      Apoyo:{" "}
                    </Text>
                    <Text m={5}>Calentador Solar</Text>
                  </Flex>
                  <Flex m={5}>
                    <Text m={5} as="em">
                      Cantidad Solicitada:{" "}
                    </Text>
                    <Text m={5}>2.00</Text>
                  </Flex>
                  <Flex m={5}>
                    <Text m={5} as="em">
                      Costo del Apoyo:{" "}
                    </Text>
                    <Text m={5}>$2,000</Text>
                  </Flex>
                  <Flex m={5}>
                    <Text m={5} as="em">
                      Descuento:{" "}
                    </Text>
                    <Text m={5}>N/A</Text>
                  </Flex>
                  <Flex m={5}>
                    <Text m={5} as="em">
                      Total:{" "}
                    </Text>
                    <Text m={5}>$4,000</Text>
                  </Flex>
                  <Flex m={5}>
                    <Text m={5} as="em">
                      Estatus:{" "}
                    </Text>
                    <Box background="yellow" m={5} rounded={6}>
                      Pendiente
                    </Box>
                  </Flex>
                  <Flex w="100%" alignItems="center" justifyContent="center">
                    <Box p="2"></Box>
                    <Spacer />
                    <Box>
                      <Button colorScheme="teal" variant="solid" mr="4">
                        Aprobar
                      </Button>
                      <Button colorScheme="teal" variant="outline">
                        Rechazar
                      </Button>
                    </Box>
                  </Flex>
                </Flex>
                <Flex
                  borderStyle="solid"
                  borderColor="gray.200"
                  borderWidth="2px"
                  direction="column"
                  w="100%"
                  p={10}
                  rounded={6}
                >
                  <Heading color="gray" as="h3" fontSize="2xl">
                    Seguimiento
                  </Heading>
                  <Flex m={5}>
                    <Box>
                      <Text m={5} as="em">
                        Cantidad a Autorizar:{" "}
                      </Text>
                      <NumberInput defaultValue={0} min={100} max={2000}>
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    </Box>
                    <Spacer />
                    <Box>
                      <Text m={5} as="em">
                        Total Autorizado:{" "}
                      </Text>
                      <Text m={5} color="green">
                        $4,000
                      </Text>
                    </Box>
                  </Flex>
                  <Flex m={5} alignItems="center" justifyContent="center">
                    <Text m={5} as="em">
                      Fecha:{" "}
                    </Text>
                    <Input type="date" />
                    <Box></Box>
                  </Flex>
                  <Flex m={5} alignItems="center" justifyContent="center">
                    <Text m={5} as="em">
                      Motivo de Rechazo:{" "}
                    </Text>
                    <Input type="textBox" />
                  </Flex>
                </Flex>
              </Flex>

              <Box
                m={10}
                bg="white"
                w=".1%"
                direction="column"
                justifyContent="Center"
              ></Box>

              <Flex
                borderStyle="solid"
                borderColor="gray.200"
                borderWidth="2px"
                background="gray.150"
                direction="column"
                w="25%"
                p={2}
                rounded={6}
              >
                <Heading
                  m={2}
                  justifyContent="Left"
                  color="gray"
                  as="h3"
                  fontSize="2xl"
                >
                  Actividad
                </Heading>
              </Flex>
            </Flex>
          </Box>
        </main>
      </div>
    </Scaffold>
  );
}

export default Ver_solicitud;
