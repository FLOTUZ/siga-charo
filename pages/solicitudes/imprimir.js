import { useRouter } from "next/router";
import { useEffect } from "react";

function FormatoSolicitud() {
  const router = useRouter();

  let { idSolicitud } = router.query;

  const imprimir = (html) => {
    let mywindow = window.open("", "my div", "height=1080,width=1000");
    mywindow.document.write("<html><head><title>Imprimir Solicitud</title>");
    mywindow.document.write(
      '<link rel="stylesheet" href="../solicitud.css" type="text/css" />'
    );
    mywindow.document.write("</head><body >");
    mywindow.document.write(`<div class="solicitud">${html}</div>`);
    mywindow.document.write("</body></html>");

    //El delay es para que cargue el css
    setTimeout(() => {
      mywindow.focus();
      mywindow.print();
      router.back();
    }, 1000);
  };

  useEffect(() => {
    imprimir(document.getElementById("solicitud").innerHTML);
  }, []);

  return (
    <>
      <div id="solicitud" className="solicitud">
        <div className="encabezado">
          <h1>SOLICITUD DE APOYO</h1>
          <p>AYUNTAMIENTO DE CHARO</p>
        </div>
        <p className="fecha">
          Charo, Michoacan con fecha DD mes de MM del año 20YY
        </p>
        <div className="cuerpo">
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
        </div>
        <br />
        <div className="footer">
          Para la solicitud del apoyo SIGA-CHARO
          <br />
          Los datos anteriormente puestos en este documento se utilizaran para
          el tramite de solicitud de apoyo
          <br />
          Brindado por el Ayuntamiento De Charo. Toda la informacion debera ser
          validada para su confirmacion.
          <br />
        </div>
        <p className="sello">SELLO DE LA INSTITUCION</p>
      </div>
    </>
  );
}

export default FormatoSolicitud;
