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
                    <Text fontSize={30} mt={10} mb={6}><strong>¡Hello!</strong></Text>
                    <Text fontSize={18} mb={6}>We are pleased to introduce ourselves as an online store for casual and sportswear. On our platform, we offer a wide selection of clothing to meet the style needs of men and women of all ages.</Text>
                    <Text fontSize={18} mb={5}>Our goal is to provide our customers with high quality products at reasonable prices. We work hard to ensure that our selection of clothing fits the latest styles and fashion trends, while maintaining a focus on quality and durability.</Text>
                    <Text fontSize={18} mb={5}>We strive to provide a smooth and secure online shopping experience for our customers. We ensure that your personal information is protected and that all transactions are processed securely.</Text>
                    <Text fontSize={18} mb={5}>In addition, we are committed to sustainability and social responsibility. We seek to work with suppliers and brands that adhere to ethical and sustainable practices in the manufacture of apparel...</Text>
                    <Text fontSize={18} mb={5}>Ultimately, we are here to serve our customers and provide them with a satisfying online shopping experience. We look forward to helping you find the perfect apparel to suit your style and needs.</Text>
                    <Text mb={6} fontSize={18}><strong>¡Thank you for visiting us</strong>!</Text>
                </Box>
                <Image w='40%' src={imageContact} objectFit='cover'/>
            </Box>
        </Box>
    )
};


export default About