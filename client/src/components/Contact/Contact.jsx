import { Box, Image, Text, FormControl, Input, Textarea, Button } from "@chakra-ui/react";
import React from "react";
import HomeNavBar from "../NavBar/HomeNavbar";
import imageContact from '../../assets/image_contact.jpeg'
import Footer from "../Footer/Footer";


const Contact = () => {
    const sarasa=()=>{
        alert(`recivimos su mensaje pronto le daremos respuesta`)
    }
    return(
        <Box>
           <HomeNavBar/> 
            <Box display={{base:'block',md:'flex'}}h={{base:650,md:741}} justifyContent='center' px={{base:0,md:300}} pt={{base:10,md:75}}  backgroundColor='#272727' >
                <Box w={{base:'100%',md:'40%'}} justifyContent='center' backgroundColor='#F2F2F2'h={600} px={10} pt={{base:10,md:0}}  >
                    <Text fontSize={30} mt={10} mb={10}><strong>Get in touch</strong></Text>
                    <Text mb={10}>To contact with us, fill out the form and we <br /> will get back to you promptly</Text>
                    <FormControl>
                        <Box display='flex' mb={5}>
                        <Input mr={2} backgroundColor='#D9D9D9' py={1} placeholder="Name"/>
                        <Input ml={2} backgroundColor='#D9D9D9' py={1} placeholder="Lastname"/>
                        </Box>
                        <Input mb={5} backgroundColor='#D9D9D9' py={1} placeholder="Email"/>
                        <Textarea backgroundColor='#D9D9D9' py={1} mb={5}  placeholder="Message"/>
                        <Button backgroundColor='#DAEB0F' w='full' onClick={sarasa}>Send Message</Button>
                        
                    </FormControl>
                </Box>
                <Image display={{base:'none',md:'block'}} w='60%' h={600} src={imageContact} objectFit='cover'/>
            </Box>
            <Footer/>
        </Box>
        
    )
};


export default Contact