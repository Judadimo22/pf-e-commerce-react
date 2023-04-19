import * as Chakra from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logoC3.jpeg"


const Footer = () => {
  return (
    <Chakra.Box as="footer" bg="#272727" color="white" id="miFooter" >
      <Chakra.Flex
        as="footer"
        align="center"
        justify="space-between"
        wrap="wrap"
        pl="6.5rem"
        pr="10.5rem"
        pt="6rem"
        pb={12}
      >
        <Chakra.Box mt={8} mb={8}>
        <Chakra.Image boxSize={`70px`} borderRadius={`full`} src={logo}  alt={``}textAlign="center" position='relative' right={{base:5, md:0}} fontWeight={1000} fontSize={50} fontFamily="Alumni Sans, sans-serif"></Chakra.Image>
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
        <Chakra.Box pr="10.5rem">
          <Chakra.Text fontWeight="bold" fontSize={20} mt={-12}>HELP</Chakra.Text>
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
          <Chakra.Text fontWeight="bold" fontSize={20}>Don't miss the new!</Chakra.Text>
          <Chakra.Flex justify="center" align="center" py="4" mt="4" gap={3} pr="1rem">
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
      </Chakra.Flex>
      <Chakra.Box ml={2} fontSize={13} fontWeight="200">
        <span>
          &copy; {new Date().getFullYear()} Reservados todos los derechos.
        </span>
      </Chakra.Box>
    </Chakra.Box>
  );
};

export default Footer;
