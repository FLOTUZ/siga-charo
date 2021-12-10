import Head from "next/head";
import Link from "next/link";
import IBMDataTable from "../../components/Tabla/IBMDataTable";
import Scaffold from "../../components/layout/Scaffold";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Consultar, Eliminar, Actualizar } from "../../services/API";
import { Button, Skeleton, Flex, Box, Spacer } from "@chakra-ui/react";
import GenerateHash from "random-hash";

 export default function Beneficiarios() {
  //TODO: Poner el drawer en un componente
  const [cargandoTabla, setCargandoTabla] = useState(false);
  const [beneficiario, setBeneficiarios] = useState([]);


  const router = useRouter();
  let rutas = [
    {
      url: "/gestion-beneficiario",
      nombre: "beneficiario",
      isCurrentPage: true,
    },
  ];

  useEffect(() => {
    const datosTabla = async () => {
      let respuesta = await Consultar("/beneficiarios", {
        fields: {
          idBeneficiario: true,
          nombre: true,
          direccion: true,
          telefonoLocal: true,
          telefonoCelular: true,
          email: true,
          comunidad: true,
        },
      });
      if (respuesta.status === 200) {
        setBeneficiarios(respuesta.data);
        setCargandoTabla(true);
      } else {
        console.log("No hay data");
      }
    };
    datosTabla();
  }, []);

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
          <Skeleton isLoaded={cargandoTabla}>
            <IBMDataTable
              clickeada={(index) => {
                let idBeneficiario = index.cells[0].value;
                router.push(`/gestion-beneficiarios/${idBeneficiario}`);
              }}
              rows={beneficiario}
            ></IBMDataTable>
          </Skeleton>
        </main>
      </div>
    </Scaffold>
  );
}
