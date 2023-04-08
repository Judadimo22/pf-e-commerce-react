import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Chakra from "@chakra-ui/react";
import NavBar from "../NavBar/NavBar";
import StarRating from "../StarRating/StarRating";
import SizeSelector from "../SizeSelector/SizeSelector";
import ColorSelector from "../ColorSelector/ColorSelector";
import { FaShoppingCart } from 'react-icons/fa';

export const Details = () => {
  const productDetails = useSelector((state) => state.Details);
  const { name, trademark, description, image, price } = productDetails;

  const [selectedSize, setSelectedSize] = useState("");
  const sizes = ["S", "M", "L", "XL", "XXL"];

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
    console.log(
      `Agregaste el producto en talla ${selectedSize} y color ${selectedColor} al carrito.`
    );
  };

  return (
    <>
      <NavBar />
      <Chakra.Box p={8}>
        <Chakra.HStack spacing={4}>
          <Link to={`/home`}>
            <Chakra.Button>
              <Chakra.Box>
                  Home
              </Chakra.Box>
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
            <StarRating rating={4.5} />
            <Chakra.Text fontWeight="bold">Seleccionar Talle</Chakra.Text>
            <SizeSelector
              sizes={sizes}
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
