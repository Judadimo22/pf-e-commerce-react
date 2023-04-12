import React from "react";
import style from "./CardProduct.module.css";
import { Link } from "react-router-dom";
import { TbShoppingCartPlus } from "react-icons/tb";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export const ProductCard = (props) => {
  const productPrice = props.product.price ? "$" + props.product.price : "";
  const productType = props.product.type;
  const productTrademark = props.product.trademark;
  const productImage = props.product.image;
  const productName = props.product.name;
  let products = [];
  const handleClick = () => {
    products.push({
      image: props.product.image,
      name: props.product.name,
      price: props.product.price,
      trademark: props.product.trademark,
      type: props.product.type,
    });
    localStorage.setItem("cartItems", JSON.stringify(products));
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
            <TbShoppingCartPlus onClick={handleClick} className={style.cart} />
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
