import Scaffold from "../../components/layout/Scaffold";
import IBMDataTable from "../../components/Tabla/IBMDataTable";
import { Link, Button, Skeleton, useToast } from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";
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
      <div style={{ margin: "2rem" }}>
        <Link href="/apoyos/agregarApoyo">
          <a>
            <Button
              leftIcon={<BiAddToQueue size="40px " />}
              colorScheme="teal"
              m={5}
            >
              Agregar Apoyo
            </Button>
          </a>
        </Link>
        <Skeleton isLoaded={cargandoTabla}>
          <IBMDataTable rows={apoyos} />
        </Skeleton>
      </div>
    </Scaffold>
  );
}

export default Apoyos;
