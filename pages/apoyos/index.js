import Scaffold from "../../components/layout/Scaffold";
import IBMDataTable from "../../components/Tabla/IBMDataTable";
import {
  Link,
  Button,
  Skeleton,
  Container,
  HStack,
  Text,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { AiFillFileAdd } from "react-icons/ai";
import { Consultar } from "../../services/API";
import { useEffect, useState } from "react";
function Apoyos() {
  const [apoyos, setApoyos] = useState([]);
  const [cargandoTabla, setCargandoTabla] = useState(false);

  const toast = useToast();

  useEffect(() => {
    const consultarApoyos = async () => {
      let respuesta = await Consultar("/programas", {
        fields: {
          idPrograma: true,
          fechaRegistro: true,
          nombre: true,
          descripcion: true,
          fechaFinalizacion: true,
          habilitado: true,
        },
      });
      if (respuesta.status === 200) {
        setCargandoTabla(true);
        setApoyos(respuesta.data);
      } else {
        toast({
          title: "Error",
          description: `${respuesta.message}`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    };
    consultarApoyos();
  }, [toast]);

  let rutas = [
    {
      url: "/Apoyos",
      nombre: "Apoyo",
      isCurrentPage: true,
    },
  ];

  return (
    <Scaffold titulo="Apoyos" descripcion="Catalogo de apoyos" rutas={rutas}>
      <HStack>
        <Link href="/apoyos/agregarApoyo">
          <a>
            <Container
              color="white"
              bgColor="core.600"
              m={2}
              rounded={5}
            >
              <HStack p={1}>
                <AiFillFileAdd size="4em" />
                <Text fontSize="md">Nuevo Apoyo</Text>
              </HStack>
            </Container>
          </a>
        </Link>
      </HStack>
      <Skeleton isLoaded={cargandoTabla}>
        <IBMDataTable rows={apoyos} />
      </Skeleton>
    </Scaffold>
  );
}

export default Apoyos;
