import {VStack, HStack, Text, Center} from '@chakra-ui/react'
import estilo from '../Solicitud/Membrete.module.css'

function Solicitud({solicitante}) {
    return (
        <div className={estilo.base}>
        <VStack h="11in">
            <Text>{solicitante}</Text>
            <Text>Reportes</Text>
            <Text>Reportes</Text>
        </VStack>
    </div>
    );
}

export default Solicitud;