import * as Chakra from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Chakra.Box as="footer" bg="#272727" color="white">
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
          <Chakra.Text fontWeight="bold" fontSize={20}>MARCA</Chakra.Text>
          <Chakra.Grid mt={1} fontSize={15}>
            <Chakra.Link href="#" fontWeight="100">
              Sobre nosotros
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
          <Chakra.Text fontWeight="bold" fontSize={20} mt={-12}>AYUDA</Chakra.Text>
          <Chakra.Grid mt={1} fontSize={15}>
            <Chakra.Link href="#" fontWeight="100">
              Mis pedidos
            </Chakra.Link>
            <Chakra.Link href="#" fontWeight="100">
              Devoluciones y cambios
            </Chakra.Link>
            <Chakra.Link href="#" fontWeight="100">
              Tiempo de envios
            </Chakra.Link>
          </Chakra.Grid>
        </Chakra.Box>
        <Chakra.Box mt={-12}>
          <Chakra.Text fontWeight="bold" fontSize={20}>SE PARTE DE NUESTRO VIAJE</Chakra.Text>
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
