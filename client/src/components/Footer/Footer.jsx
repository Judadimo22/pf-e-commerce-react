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
        padding="1.5rem"
      >
        <Chakra.Box mt={8} mb={8}>
          <Chakra.Text fontWeight="bold">MARCA</Chakra.Text>
          <Chakra.Grid>
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

        <Chakra.Box>
          <Chakra.Text fontWeight="bold">AYUDA</Chakra.Text>
          <Chakra.Grid>
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
        <Chakra.Box>
          <Chakra.Text fontWeight="bold">SE PARTE DE NUESTRO VIAJE</Chakra.Text>
          <Chakra.Flex justify="center" align="center" py="4" mt="8">
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
      <Chakra.Box>
        <span>
          &copy; {new Date().getFullYear()} Reservados todos los derechos.
        </span>
      </Chakra.Box>
    </Chakra.Box>
  );
};

export default Footer;
