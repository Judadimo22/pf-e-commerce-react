import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { cartLength, getClothById } from "../../redux/actions";
import HomeNavBar from "../NavBar/HomeNavbar";
import * as Chakra from "@chakra-ui/react";
import StarRating from "../StarRating/StarRating";
import SizeSelector from "../SizeSelector/SizeSelector";
import ColorSelector from "../ColorSelector/ColorSelector";
import { FaShoppingCart } from "react-icons/fa";
import Footer from "../Footer/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import ClothReviews from "../Reviews/clothReviews";

export const Details = () => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.Details);
  console.log('productDetails', productDetails)
  const { id } = useParams();

  const { name, trademark, description, image, price, size, review, stock } = productDetails;
  // const tallas = productDetails.tallas;
  // const totalStock = productDetails.tallas.reduce((total, talla) => {
  //   return total + talla.stock;
  // }, 0);


  const { isAuthenticated, user } = useAuth0();
  const [pay, setPay] = useState(false);
  const allData = useSelector((state) => state.Details);

  function handlerPay() {
    setPay(true);
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "You need a login",
      showConfirmButton: true,
      //timer: 3000,
    });
  }

  useEffect(() => {
    dispatch(getClothById(id));
  }, []);

  const [selectedSize, setSelectedSize] = useState("");
  console.log('selectedSize', selectedSize)

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const [selectedColor, setSelectedColor] = useState("#000");
  const colors = ["#000", "#FFF", "#FF5733", "#2ECC71", "#3498DB"];

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleAddToCart = () => {
    // Obtener los datos del producto seleccionado
    const product = {
      id: productDetails.id,
      name: productDetails.name,
      price: productDetails.price,
      size: selectedSize ,
      color: selectedColor,
      image: productDetails.image,
      quantity: 1,
    };

    // Obtener el carrito actual desde el localStorage
    let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Verificar si el producto ya está en el carrito
    const existingProductIndex = cart.findIndex(
      (item) =>
        item.id === product.id &&
        item.size === product.size &&
        item.color === product.color &&
        item.image === product.image
    );

    if (existingProductIndex >= 0) {
      // Si el producto ya está en el carrito, aumentar la cantidad
      cart[existingProductIndex].quantity += 1;
    } else {
      // Si el producto no está en el carrito, agregarlo
      cart.push(product);
    }

    // Actualizar el carrito en el localStorage
    localStorage.setItem("cartItems", JSON.stringify(cart));

    // Actualizar el estado del número de productos en el carrito

    dispatch(cartLength(cart.length))
    setNumCartItems(cart.length);
    setSelectedSize("");
  };

  return (
    <>
      <HomeNavBar />
      <Chakra.Box h="100%" pt="1rem">
        <Chakra.HStack spacing={4}>
          <Link to={`/home`}>
            <Chakra.Box m={3} pl="2rem" pb=".5rem">
              <Chakra.Text>Home {`>`}</Chakra.Text>
              <Chakra.Box h="1px" w="100%" bg="gray" borderRadius="full" />
            </Chakra.Box>
          </Link>
        </Chakra.HStack>
        <Chakra.Grid templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} gap={6}>
          <Chakra.Box>
            <Chakra.Image
              w={{base:200, md:'auto'}}
              src={image}
              alt={name}
              borderRadius="10px"
              mx="auto"
            />
          </Chakra.Box>
          <Chakra.Box>
            <Chakra.Text fontSize={{base:'20px',md:"4xl"}} textAlign={{base:'center', md:'left'}} fontWeight="extrabold" mb={3} mt={-4}>
              {name}
            </Chakra.Text>
            <Chakra.Text fontSize={{base:'20px',md:"3xl"}} textAlign={{base:'center', md:'left'}} fontWeight="bold" pb="1.5rem">
              ${price}.00
            </Chakra.Text>
            <Chakra.Box h="1px" bg="gray" borderRadius="full" justifyContent={{base:'center', md:'left'}} />
            <Chakra.Flex pt="1.5rem" pb="2rem" justifyContent={{base:'center', md:'left'}}  >
              <StarRating rating={4.5} justifyContent={{base:'center', md:'left'}} />
              <Chakra.Text ml={1} justifyContent={{base:'center', md:'left'}} >(1 review)</Chakra.Text>{" "}
           
            </Chakra.Flex>
            <Chakra.Flex justifyContent={{ base:'center',md:'left'}}>
            {productDetails.tallas?.map((talla) => (
              <SizeSelector
                size={talla.talla}
                stock={talla.stock}
                key={talla._id}
                selectedSize={selectedSize}
                onSizeSelect={handleSizeSelect}
              />))}
            </Chakra.Flex>
            <Chakra.Text fontWeight="bold" fontSize="lg" pt="1.5rem" pb="1rem" textAlign={{ base:'center',md:'left'}}>
            Colors available
            </Chakra.Text>
            <Chakra.Box  display='flex' justifyContent={{ base:'center',md:'left'}}>
            <ColorSelector 
              colors={colors}
              selectedColor={selectedColor}
              onColorSelect={handleColorSelect}
            />
            </Chakra.Box>
            <Chakra.Box pt="1.5rem" pb="1.5rem" mt={8} mb={4}>
              <Chakra.Box display={{base:'block',md:'flex'}} textAlign={{ base:'center',md:'left'}}>
                <Chakra.Button
                  borderRadius="100px"
                  colorScheme="#DAEB0F"
                  bg="#DAEB0F"
                  size="lg"
                  pl="3rem"
                  pr="3rem"
                  _hover="white"
                  color="#272727"
                  isDisabled={!selectedSize}
                  onClick={handleAddToCart} 
                  leftIcon={<FaShoppingCart />}
                >
                 Add to cart
                </Chakra.Button>
              
                <Chakra.Text fontSize="md" fontWeight="bold" pl={{base:0,md:"2rem"}} pt=".7rem" color="#565656">
                {selectedSize === "" ? "Select a size" : (productDetails.tallas.find(t => t.talla === selectedSize).stock + " Disponibles")}

                </Chakra.Text>
              </Chakra.Box>
            </Chakra.Box>
            <Chakra.Box h="1px" w="95%" bg="gray" borderRadius="full" />
            <Chakra.Text
              fontSize="md"
              fontWeight="normal"
              mb={1}
              pt="1.5rem"
              color="#565656"
              mx={{base:5 ,md:0}}
            >
              Trademark: {trademark ? trademark : "N/A"}
            </Chakra.Text>
            <Chakra.Text
              fontSize="md"
              fontWeight="normal"
              mb={1}
              color="#565656"
              pb="5rem"
              mx={{base:5 ,md:0}}
            >
              {description ? description : "N/A"}
            </Chakra.Text>
          </Chakra.Box>
        </Chakra.Grid>
      </Chakra.Box>
      <ClothReviews id={id} comment={allData.review}  />
      <Footer />
    </>
  );
};
