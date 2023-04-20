import React from "react";
import { Flex, Box, Text, Button, Image } from "@chakra-ui/react";

const CartItem = ({ item, handleRemoveItem, handleQuantityChange }) => {
  const handleIncrement = () => {
    handleQuantityChange(item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      handleQuantityChange(item.quantity - 1);
    }
  };


  return (
    <Flex display={{base:'block',md:'flex'}}textAlign={{base:'center', md:'left'}} alignItems="center" justifyContent={{base:'center',md:"space-between"}} mb="4">
      <Box  h="150px" borderRadius="lg" overflow="hidden" display='flex' justifyContent='center' textAlign='center'>
        <Image display='flex' justifyContent='center' src={item.image} alt={item.name} />
      </Box>
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb="2">
          {item.name}
        </Text>
        <Text>Price: ${item.price}.00</Text>
        <Text>
          Size: {item.size ? item.size : item.sizes[0].talla}
        </Text>
        <Box mr="4">
          <Button
            size="sm"
            mr="2"
            onClick={handleDecrement}
            disabled={item.quantity === 1}
          >
            -
          </Button>
          <Text display="inline-block" w="20px" textAlign="center">
            {item.quantity}
          </Text>
          <Button size="sm" ml="2" onClick={handleIncrement}>
            +
          </Button>
        </Box>
        <Button
          mt="2"
          variant="outline"
          colorScheme="red"
          onClick={() => handleRemoveItem(item)}
        >
          Delete
        </Button>
      </Box>
    </Flex>
  );
};

export default CartItem;
