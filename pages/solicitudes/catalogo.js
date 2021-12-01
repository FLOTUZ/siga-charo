import Head from "next/head";
import Link from "next/link";
import { Heading, Button, Stack, Flex, Box, Spacer} from '@chakra-ui/react';
import DataTable from 'react-data-table-component';
import Scaffold from "../../components/layout/Scaffold";

const columns = [
    {
        name: 'Nombre',
        selector: row => row.name,
        sortable:true,
    },
    {
        name: 'Estatus',
        selector: row => row.status,
        sortable:true,
    },
    {
        name: 'Fecha de Captura',
        selector: row => row.date,
        sortable:true,
    },
    {
      name: 'Opciones',
      selector: row => row.detalles,
      sortable:true,
  },
];

const data = [
    {
        id: 1,
        name: 'Irving',
        status: 'Aceptado',
        date: '20/10/2021',
        detalles:
        <Stack direction='row' spacing={4}>
          <Button colorScheme='teal' variant='solid' h={6}>Detalles</Button>
          <Button colorScheme='teal' variant='solid' h={6}>Agregar</Button>
          <Button colorScheme='teal' variant='solid' h={6}>Editar</Button>
          <Button colorScheme='red' variant='solid' h={6}>Archivar</Button>
        </Stack>,
    },
    {
        id: 2,
        name: 'Emmanuel',
        status: 'Rechazado',
        date: '20/10/2021',
        detalles:
        <Stack direction='row' spacing={4}>
          <Button colorScheme='teal' variant='solid' h={6}>Detalles</Button>
          <Button colorScheme='teal' variant='solid' h={6}>Agregar</Button>
          <Button colorScheme='teal' variant='solid' h={6}>Editar</Button>
          <Button colorScheme='red' variant='solid' h={6}>Archivar</Button>
        </Stack>,
    },
    {
      id: 3,
      name: 'Patricio',
      status: 'Pendiente',
      date: '20/10/2021',
      detalles:
      <Stack direction='row' spacing={4}>
          <Button colorScheme='teal' variant='solid' h={6}>Detalles</Button>
          <Button colorScheme='teal' variant='solid' h={6}>Agregar</Button>
          <Button colorScheme='teal' variant='solid' h={6}>Editar</Button>
          <Button colorScheme='red' variant='solid' h={6}>Archivar</Button>
        </Stack>,
  },
]

export default function Catalogo() {
  return (
    <Scaffold titulo="Solicitudes" descripcion="Lista de Solicitudes">
    <div>
      <Head>
        <title>Catalogo de Solicitudes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex>
        <Box p='2'>
          
        </Box>
        <Spacer />
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Button colorScheme='teal'>Nueva Solicitud</Button>
        </Flex>
      </Flex>
      
      <main>
        <Box bg='white' w='100%' p={5} color='white'></Box>
        <Box maxW='large' borderWidth='1px' borderRadius='lg' overflow='hidden'>
          <DataTable
            title="Lista de Solicitudes"
            columns={columns}
            data={data}
            pagination
            expandableRows
          />
        </Box>
      </main>
    </div>
    </Scaffold>
  );
}