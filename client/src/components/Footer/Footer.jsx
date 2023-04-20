import * as Chakra from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logoC3.jpeg"


const Footer = () => {
  return (
    <Chakra.Box as="footer" bg="#272727" color="white" h='full'>
      <Chakra.Box
        display={{md:'flex', base:'block'}}
        mx='auto'
        textAlign={{base:'center', md:'left'}}
        justifyContent={{base: 'center',md:'space-between'}}
        alignItems={{ base: 'center',md:"center"}}
        wrap='wrap'
        pl={{base:0,md:104}}
        pr={{base:0, md:168}}
        pt={{base:10, md:20}}
        pb={{base:20 ,md:12}}
      >
        <Chakra.Box mt={8} mb={8}>
        <Chakra.Text mt={{base:0,md:4}}  fontWeight="bold" fontSize={20} >BRAND
        </Chakra.Text>
          <Chakra.Grid mt={1} fontSize={15}>
            <Chakra.Link href="#" fontWeight="100">
            <Link to={'/about'}>About</Link>
            </Chakra.Link>
            <Chakra.Link href="#" fontWeight="100">
              Hoodies
            </Chakra.Link>
            <Chakra.Link href="#" fontWeight="100">
              Shirts
            </Chakra.Link>
            <Chakra.Link href="#" fontWeight="100">
              Pants
            </Chakra.Link>
            <Chakra.Link href="#" fontWeight="100">
              Hats
            </Chakra.Link>
          </Chakra.Grid>
        </Chakra.Box>
        <Chakra.Box pr={{base:0,md:"10.5rem"}} >
          <Chakra.Text mt={{base:0,md:-12}}  fontWeight="bold" fontSize={20} >HELP</Chakra.Text>
          <Chakra.Grid mt={1} fontSize={15}>
            <Chakra.Link href="#" fontWeight="100">
            <Link to={'/contact'}>Contact</Link>
            </Chakra.Link>
            <Chakra.Link href="#" fontWeight="100">
            <Link to={'/preg-frecuentes'}>Frequently asked questions</Link>
            </Chakra.Link>
          </Chakra.Grid>
        </Chakra.Box>
        <Chakra.Box mt={-12}>
          <Chakra.Text fontWeight="bold" position='relative' top={{base:20, md:0}} fontSize={20}>Don't miss the new!</Chakra.Text>
          <Chakra.Flex position='relative' top={{base:16, md:0}} justify="center" align="center" py="4" mt="4" gap={3} pr="1rem">
            <Chakra.Link href="#">
              <Chakra.Box as={FaFacebook} size="24px" color="#DAEB0F" mx="2" />
            </Chakra.Link>
            <Chakra.Link href="#">
              <Chakra.Box as={FaTwitter} size="24px" color="#DAEB0F" mx="2" />
            </Chakra.Link>
            <Chakra.Link href="#">
              <Chakra.Box as={FaInstagram} size="24px" color="#DAEB0F" mx="2" />
            </Chakra.Link>
          </Chakra.Flex>
        </Chakra.Box>
      </Chakra.Box>
      <Chakra.Box pb={{base:10,md:0}} ml={{base:0,md:2}} fontSize={13} fontWeight="200" textAlign={{md:'left', base:'center'}}>
        <span>
          &copy; {new Date().getFullYear()} Reservados todos los derechos.
        </span>
      </Chakra.Box>
    </Chakra.Box>
  );
  
};

export default Footer;
