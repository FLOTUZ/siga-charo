import {VStack, HStack, Text, Center,title, Image, Heading, Spacer,Box, alignItems, Button} from '@chakra-ui/react'
import EstiloSolicitud from '../Solicitud/Solicitud.module.css'


function Solicitud({id, solicitante}){

    const imprimir = (html, style) => {
        extractCSS()
        console.log(style);
        let mywindow = window.open("", "my div", "height=500,width=500");
        mywindow.document.write("<html><head><title>Imprtimir Tiket</title>");
        mywindow.document.write("</head><body >");
        mywindow.document.write(`<div class="tiket">${html}</div>`);
        mywindow.document.write("</body></html>");
      
        //El delay es para que cargue el css
        setTimeout(() => {
          mywindow.focus();
          mywindow.print();
        }, 1000);
      };

    const property = {
    Apaterno:'Apellido Paterno',
    Amaterno:'Apellido Materno',
    Direccion: 'Direccion del usuario',
    Numero: '01-900-XXX',
    Sexo: 'F/M/NA',
    FechaN: 'DD/MM/YYYY',
    Ciudad: 'Ciudad' ,
    Estado: 'Estado',
    DiaDocumento: 'DD',
    MesDocumento: 'MM',
    AñoDocumento: '20YY',
    Apoyo: 'SIGA-CHARO'

    
    }
    return (
        <>

        <div id="solicitud" className={EstiloSolicitud.base}>
        <VStack>
            <Text>  </Text> <br /><br /><br />
            <Heading id="texto"> SOLICITUD DE APOYO</Heading>
            <Heading>AYUNTAMIENTO DE CHARO</Heading><br /><br /><br />
            <Text> Charo, Michoacan con fecha {property.DiaDocumento}  mes de {property.MesDocumento}  del año {property.AñoDocumento} </Text>
            <Text>Lea detenidamente su informacion y verifique que sus datos se han escrito correctamente.</Text>
            <Text>Datos personales:</Text><br />
            <Text as="b">Nombre: {solicitante} </Text>
            <Text as="b">Apellido: {property.Apaterno} {property.Amaterno}  </Text>
            <Text as="b">Direccion: {property.Direccion} </Text>
            <Text as="b">Numero: {property.Numero} </Text>
            <Text as="b">Sexo: {property.Sexo} </Text>
            <Text as="b">Fecha de nacimiento: {property.FechaN} </Text>
            <Text as="b">Ciudad: {property.Ciudad} </Text>
            <Text as="b">Estado: {property.Estado} </Text><br /><br /> 
            <Text>Para la solicitud del apoyo {property.Apoyo} </Text> 
            <Text>Los datos anteriormente puestos en este documento se utilizaran para el tramite de solicitud de apoyo</Text> 
            <Text>brindado por el Ayuntamiento De Charo. Toda la informacion debera ser validada para su confirmacion.</Text><br /> <br /><br /> 
            <Text alignItems="self-end">FIRMA DE LA INSTITUCION</Text>
        </VStack>

        
    </div>
    <Button onClick={()=> imprimir(document.getElementById("solicitud").innerHTML, document.getElementById("solicitud").style.cssText)}>Imprimir</Button>
    </>
    );
}



export default Solicitud;
