import Scaffold from "../../components/layout/Scaffold";
import { Button } from "@chakra-ui/react";

let rutas = [
  {
    url: "/Reportes",
    nombre: "Generar Reporte",
    isCurrentPage: true,
  },
];

function Reportes() {
  return (
    <Scaffold
      titulo="Reporte"
      descripcion="Generación de Reporte"
      rutas={rutas}
    >
      <body>
        <div className="inicio1">SOLICITUD DE APOYO</div>
        <div className="inicio2">AYUNTAMIENTO DE CHARO</div>

        <div className="subtitulo">
          Charo, Michoacan con fecha DD mes de MM del año 20YY
          <br />
          Lea detenidamente su informacion y verifique que sus datos se han
          escrito correctamente.
          <br />
          Datos personales:
        </div>

        <div className="datosPersonales">
          Nombre: Nombre del usuario
          <br />
          Apellido: Apellido Paterno Apellido Materno
          <br />
          Direccion: Direccion del usuario
          <br />
          Numero: 01-900-XXX
          <br />
          Sexo: F/M/NA
          <br />
          Fecha de nacimiento: DD/MM/YYYY
          <br />
          Ciudad: Ciudad
          <br />
          Estado: Estado
          <br />
          <br />
        </div>
        <br />
        <div className="fin1">
          Para la solicitud del apoyo SIGA-CHARO
          <br />
          Los datos anteriormente puestos en este documento se utilizaran para
          el tramite de solicitud de apoyo
          <br />
          Brindado por el Ayuntamiento De Charo. Toda la informacion debera ser
          validada para su confirmacion.
          <br />
          <br />
          <br />
          <br />
          FIRMA DE LA INSTITUCION
        </div>
      </body>

      <Button colorScheme="blue" variant="solid">
        Imprimir
      </Button>
    </Scaffold>
  );
}

export default Reportes;
