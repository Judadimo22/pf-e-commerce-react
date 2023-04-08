import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getClothById } from "../../redux/actions";
import HomeNavBar from "../NavBar/HomeNavBar";
import * as Chakra from "@chakra-ui/react";
import StarRating from "../StarRating/StarRating";
import SizeSelector from "../SizeSelector/SizeSelector";
import ColorSelector from "../ColorSelector/ColorSelector";
import { FaShoppingCart } from "react-icons/fa";

export const Details = () => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.Details);
  const { id } = useParams();

  const { name, trademark, description, image, price, size, review } =
    productDetails;
  console.log(id);

  useEffect(() => {
    dispatch(getClothById(id));
  }, []);

  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const [selectedColor, setSelectedColor] = useState("#000");
  const colors = ["#000", "#FFF", "#FF5733", "#2ECC71", "#3498DB"];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    // Aquí iría la lógica para agregar el producto al carrito
    alert(
      `Agregaste el producto en talla ${selectedSize} y color ${selectedColor} al carrito.`
    );
  };

  return (
    <>
      <HomeNavBar />
      <Chakra.Box p={8}>
        <Chakra.HStack spacing={4}>
          <Link to={`/home`}>
            <Chakra.Button>
              <Chakra.Box>Home</Chakra.Box>
            </Chakra.Button>
          </Link>
        </Chakra.HStack>
        <Chakra.Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={6}>
          <Chakra.Box>
            <Chakra.Image src={image} alt={name} borderRadius="10px" />
          </Chakra.Box>
          <Chakra.Box>
            <Chakra.Text fontSize="3xl" fontWeight="extrabold" mb={4}>
              {name}
            </Chakra.Text>
            <Chakra.Text fontSize="3xl" mb={4}>
              ${price}.00
            </Chakra.Text>
            <Chakra.Box h="3px" w="100%" bg="#DAEB0F" borderRadius="full" />
            <Chakra.Flex>
              <StarRating rating={4.5} />
              <Chakra.Text ml={1}>({review}1 review)</Chakra.Text>
            </Chakra.Flex>

            <Chakra.Text fontWeight="bold">Seleccionar Talle</Chakra.Text>
            <SizeSelector
              sizes={size}
              selectedSize={selectedSize}
              onSizeSelect={handleSizeSelect}
            />
            <Chakra.Text fontWeight="bold">Colores Disponibles</Chakra.Text>
            <ColorSelector
              colors={colors}
              selectedColor={selectedColor}
              onColorSelect={handleColorSelect}
            />
            <Chakra.Box mt={8}>
              <Chakra.Button
                colorScheme="blue"
                size="lg"
                disabled={!selectedSize || !selectedColor}
                onClick={handleAddToCart}
                leftIcon={<FaShoppingCart />}
              >
                Agregar al carrito
              </Chakra.Button>
            </Chakra.Box>
            <Chakra.Box h="3px" w="100%" bg="#DAEB0F" borderRadius="full" />
            <Chakra.Text fontSize="lg" mb={4}>
              Esta prenda marca: {trademark ? trademark : "N/A"} .
            </Chakra.Text>
            <Chakra.Text fontSize="lg" mb={4}>
              Presenta las siguientes especificaciones:{" "}
              {description ? description : "N/A"}.
            </Chakra.Text>
          </Chakra.Box>
        </Chakra.Grid>
      </Chakra.Box>
    </>
  );
};
