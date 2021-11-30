import Head from "next/head";
import { Heading, Button, Container, Input, Stack, Grid, GridItem, Tag} from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nueva Solicitud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Heading as="h1" size="3xl">Solicitud de Apoyo</Heading>
        <Heading size="md">Datos del Solicitante</Heading>
        <div>

        </div>
      <main>
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
            <Container w='20%'>
                <Stack spacing={9}>
                    <Tag>Nombre(s)</Tag>
                    <Tag>Apellido Paterno</Tag>
                    <Tag>Apellido Materno</Tag>
                    <Tag>Celular</Tag>
                    <Tag>Telefono</Tag>
                </Stack>
            </Container>
            <Container w='120%'>
                <Stack spacing={3}>
                    <Input placeholder='Nombre(s)' size='md' />
                    <Input placeholder='Apellido Paterno' size='md' />
                    <Input placeholder='Apellido Materno' size='md' />
                    <Input placeholder='Celular' size='md' />
                    <Input placeholder='Telefono' size='md' />
                </Stack>
            </Container>
        </Grid> 
      </main>
    </div>
  );
}