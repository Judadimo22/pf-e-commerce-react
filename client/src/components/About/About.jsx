import { Box, Image, Text, FormControl, Input, Textarea, Button } from "@chakra-ui/react";
import React from "react";
import HomeNavBar from "../NavBar/HomeNavbar";
import imageContact from '../../assets/imagen_about.jpg'


const About = () => {
    return(
        <Box>
           <HomeNavBar/> 
            <Box display='flex' justifyContent='center' px={200} pt={5} pb={5}  backgroundColor='#272727' >
                <Box w='60%' justifyContent='center' backgroundColor='#F2F2F2' px={10} pb={5}  >
                    <Text fontSize={30} mt={10} mb={6}><strong>¡Hola!</strong></Text>
                    <Text fontSize={18} mb={6}>Nos complace presentarnos como una tienda en línea de ropa casual y deportiva. En nuestra plataforma, ofrecemos una amplia selección de prendas de vestir para satisfacer las necesidades de estilo de hombres y mujeres de todas las edades.</Text>
                    <Text fontSize={18} mb={5}>Nuestro objetivo es proporcionar a nuestros clientes productos de alta calidad a precios razonables. Trabajamos arduamente para asegurarnos de que nuestra selección de ropa se ajuste a los últimos estilos y tendencias de la moda, al mismo tiempo que mantenemos un enfoque en la calidad y durabilidad.</Text>
                    <Text fontSize={18} mb={5}>Nos esforzamos por ofrecer una experiencia de compra en línea fluida y segura para nuestros clientes. Nos aseguramos de que su información personal esté protegida y de que todas las transacciones se procesen de manera segura.</Text>
                    <Text fontSize={18} mb={5}>Además, estamos comprometidos con la sostenibilidad y la responsabilidad social. Buscamos trabajar con proveedores y marcas que se adhieran a prácticas éticas y sostenibles en la fabricación de prendas de vestir..</Text>
                    <Text fontSize={18} mb={5}>En última instancia, estamos aquí para servir a nuestros clientes y brindarles una experiencia de compra en línea satisfactoria. Esperamos poder ayudarlo a encontrar la ropa perfecta que se adapte a su estilo y necesidades.</Text>
                    <Text mb={6} fontSize={18}><strong>¡Gracias por visitarnos</strong>!</Text>
                </Box>
                <Image w='40%' src={imageContact} objectFit='cover'/>
            </Box>
        </Box>
    )
};


export default About