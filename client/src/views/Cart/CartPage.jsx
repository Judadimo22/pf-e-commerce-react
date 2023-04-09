import { useEffect, useState } from "react";
import { Box, Button, Flex, Text, Grid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HomeNavBar from "../../components/NavBar/HomeNavbar";
import CartItem from "../../components/CartItem/CartItem";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(cart);

    // Agregar event listener para cambios en el localStorage
    window.addEventListener("storage", handleStorageChange);

    // Limpieza: remover event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleStorageChange = () => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(cart);
  };

  const handleRemoveItem = (product) => {
    const updatedItems = cartItems.filter(
      (item) =>
        item.name !== product.name ||
        item.size !== product.size ||
        item.color !== product.color
    );
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = newQuantity;
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {};

  return (
    <Box bgColor="#F2F2F2">
      <HomeNavBar />
      <Box mt={4} mb={1} mx="auto" maxW="800px">
        <Flex justify="space-between" alignItems="center" mb="6">
          <Text fontSize="3xl" fontWeight="bold">
            Carrito de Compras
          </Text>
          <Link to="/home">
            <Button variant="solid" colorScheme="blue">
              Seguir comprando
            </Button>
          </Link>
        </Flex>
        {cartItems.length === 0 ? (
          <Text>No hay productos en el carrito</Text>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <CartItem
                key={index}
                item={item}
                handleRemoveItem={handleRemoveItem}
                handleQuantityChange={(newQuantity) =>
                  handleQuantityChange(index, newQuantity)
                }
              />
            ))}
            <Text fontSize="xl" fontWeight="bold">
              Total: ${totalPrice}.00
            </Text>
            <Grid mt="6">
              <Button
                mt={2}
                mb={5}
                variant="solid"
                colorScheme="green"
                onClick={handleCheckout}
              >
                Comprar
              </Button>
            </Grid>
          </>
        )}
      </Box>
    </Box>
  );
};

export default CartPage;