import Head from "next/head";
import Link from "next/link";
import { Heading, Button, Stack, Flex, Box, Spacer } from "@chakra-ui/react";
import DataTable from "react-data-table-component";
import Scaffold from "../../components/layout/Scaffold";
import { useState, useEffect } from "react";
import { Consultar, Eliminar, Actualizar} from "../../services/API"
 

const columns = [
  {
    name: "Nombre",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Comunidad",
    selector: (row) => row.comunidad,
    sortable: true,
  },
  {
    name: "Telefono(Celular)",
    selector: (row) => row.celular,
    sortable: true,
  },
  {
    name: "Fecha de Registro",
    selector: (row) => row.registro,
    sortable: true,
  },
  {
    name: "Opciones",
    selector: (row) => row.detalles,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    name: "Esteban",
    comunidad: "Charo",
    celular: "0000000000",
    registro: "04/12/2021",
    detalles: (
      <Stack direction="row" spacing={4}>
        <Button colorScheme="teal" variant="solid" h={6}>
          Historial
        </Button>
        <Button colorScheme="teal" variant="solid" h={6}>
          Editar
        </Button>
        <Button colorScheme="red" variant="solid" h={6}>
          Archivar
        </Button>
      </Stack>
    ),
  },
  {
    id: 2,
    name: "Emmanuel",
    comunidad: "Charo",
    celular: "0000000001",
    registro: "04/12/2021",
    detalles: (
      <Stack direction="row" spacing={4}>
        <Button colorScheme="teal" variant="solid" h={6}>
          Historial
        </Button>
        <Button colorScheme="teal" variant="solid" h={6}>
          Editar
        </Button>
        <Button colorScheme="red" variant="solid" h={6}>
          Archivar
        </Button>
      </Stack>
    ),
  },
  {
    id: 3,
    name: "Patricio",
    comunidad: "Charo",
    celular: "0000000002",
    registro: "04/12/2021",
    detalles: (
      <Stack direction="row" spacing={4}>
        <Button colorScheme="teal" variant="solid" h={6}>
          Historial
        </Button>
        <Button colorScheme="teal" variant="solid" h={6}>
          Editar
        </Button>
        <Button colorScheme="red" variant="solid" h={6}>
          Archivar
        </Button>
      </Stack>
    ),
  },
];

let rutas = [
  {
    url: "/gestion-beneficiario",
    nombre: "beneficiario",
    isCurrentPage: true,
  },
];

export default function Beneficiarios() {

        const [cargando, setCargando] = useState(true);
        const [listaBeneficiario, setListaBeneficiario] = useState([]);

        useEffect(() => {
          const ejecutar = async() => {
            let apiRespuesta = await Consultar(`/beneficiarios`);
            setListaBeneficiario(apiRespuesta);
            setCargando(false);
          }

          ejecutar()
        });

  return (
    <Scaffold
      titulo="Beneficiarios"
      descripcion="Gestion de Beneficiarios"
      rutas={rutas}
    >
      <div>
        <Head>
          <title>Beneficiarios</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Flex>
          <Box p="2"></Box>
          <Spacer />
          <Flex direction="column" alignItems="center" justifyContent="center">
            <Link href="/gestion-beneficiario/nuevo_beneficiario_fisica">
              <a>
                <Button colorScheme="teal">Persona Fisica</Button>
              </a>
            </Link>
          </Flex>
          <Flex margin="2rem">
            <Link href="/gestion-beneficiario/nuevo_beneficiario_moral_paso_1">
              <a>
                <Button colorScheme="teal">Persona Moral</Button>
              </a>
            </Link>
          </Flex>
        </Flex>

        <main>
          <Box bg="white" w="100%" p={5} color="white"></Box>
          <Box
            maxW="large"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
<<<<<<< HEAD
            <DataTable
              title="Lista de Solicitudes"
              columns={columns}
              
              pagination
              expandableRows
            />
=======
>>>>>>> AltaComunidad
          </Box>
        </main>
      </div>
    </Scaffold>
  );
}
