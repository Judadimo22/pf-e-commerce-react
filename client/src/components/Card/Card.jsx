import React, { useState } from "react";
import style from "./CardProduct.module.css";
import { Link } from "react-router-dom";
import { TbShoppingCartPlus } from "react-icons/tb";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { cartLength } from "../../redux/actions";
import { useDispatch } from "react-redux";

let products = [];
export const ProductCard = (props) => {
  const productPrice = props.product.price ? "$" + props.product.price : "";
  const productType = props.product.type;
  const productTrademark = props.product.trademark;
  const productImage = props.product.image;
  const productName = props.product.name;
  const dispatch = useDispatch()
  const handleAddToCart = () => {
    // Obtener los datos del producto seleccionado
    const product = {
      id: props.product.id,
      name: props.product.name,
      price: props.product.price,
      image: props.product.image,
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
    //setNumCartItems(cart.length);
    dispatch(cartLength(cart.length))

  };
  return (
    <Flex flexDirection="column" className={style.containerCard}>
      <Box
        className={style.boxContainer}
        backgroundImage={productImage}
        minH="320px"
      >
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to={`/details/${props.product._id}`}
        >
          <Box height="260px" />
        </Link>

        <Flex flexDir="row">
          <Link
            style={{ color: "inherit", textDecoration: "inherit" }}
            to={`/details/${props.product._id}`}
          >
            <Box width="190px" height="60px" />
          </Link>

          <Button
            className={style.cartContainer}
            backgroundColor="#DAEB0F"
            padding="0"
          >
            <TbShoppingCartPlus
              onClick={handleAddToCart}
              className={style.cart}
            />
          </Button>
        </Flex>
      </Box>

      <Flex flexDir="column" margin="10px 0" textAlign="center">
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to={`/details/${props.product._id}`}
        >
          <Text
            className={style.productName}
            sx={{ fontFamily: "Inter, sans-serif", fontWeight: "700" }}
          >
            {productName}
          </Text>
        </Link>

        <Text className={style.productPrice}>{productPrice}</Text>
      </Flex>
    </Flex>
  );
};

// className={style.productCardContainer} onClick={() => goToProductDetails()}
