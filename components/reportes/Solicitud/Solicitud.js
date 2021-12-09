import {VStack, HStack, Text, Center,title, Image, Heading, Spacer,Box, alignItems} from '@chakra-ui/react'
import { AiTwotoneBoxPlot } from 'react-icons/ai';
import estilo from '../Solicitud/Membrete.module.css'


function Solicitud({solicitante}){
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

        <div className={estilo.base}>
        <VStack h="13in" marginTop="3rem">
            <Text>  </Text> <br /><br /><br />
            <Heading> SOLICITUD DE APOYO</Heading>
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
    );
}



export default Solicitud;
