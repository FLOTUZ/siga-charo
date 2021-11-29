import Head from "next/head";

import { Heading, Button, Container, Grid, GridItem, Box} from '@chakra-ui/react';
import DataTable from 'react-data-table-component';

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
];

const data = [
    {
        id: 1,
        name: 'Irving',
        status: 'Aceptado',
        date: '20/10/2021',
    },
    {
        id: 2,
        name: 'Emmanuel',
        status: 'Rechazado',
        date: '20/10/2021',
    },
    {
      id: 3,
      name: 'Patricio',
      status: 'Pendiente',
      date: '20/10/2021',
  },
]

export default function Catalogo() {
  return (
    <div>
      <Head>
        <title>Catalogo de Solicitudes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid templateColumns='repeat(4, 1fr)' gap={6} alignItems="center">
        <div>
          <Heading as="h1" size="3xl">Solicitudes</Heading>
          <Heading size="md">Listado de Solicitudes</Heading>
        </div>
        <div></div>
        <div></div>
        <Button>
          Nueva Solicitud
        </Button>
      </Grid>
      <p/>
      <main>

          <Box maxW='large' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <DataTable
                title="solicitudes"
                columns={columns}
                data={data}
                pagination
                expandableRows
            />
          </Box>
      </main>
    </div>
  );
}