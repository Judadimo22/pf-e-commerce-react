import React from 'react'
import { Link } from 'react-router-dom'
import { TbShoppingCartPlus } from "react-icons/tb";
import { Box,  Button,  Flex, Image, Text } from '@chakra-ui/react'
import style from './ProductLanding.module.css'


export const ProductLanding = (props) => {

 
  
  const onClick = (event) => {
    alert("alguien que añada el carrito o rompo development")
  }

  const productPrice = props.product.price ?  '$' + props.product.price  : ''
  const productType = props.product.type
  const productTrademark = props.product.trademark
  const productImage = props.product.image
  const productName = props.product.name


  return (
    <Flex flexDirection="column"  className={style.containerCard}>    


      <Box className={style.boxContainer} backgroundImage={productImage} minH="320px">

        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/details/${props.product._id}`}>
          <Box  height="260px" />
        </Link>    

        <Flex flexDir="row" >

          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/details/${props.product._id}`}>
            <Box width="190px" height="60px" />
          </Link>    

        </Flex>

      </Box>


      <Flex flexDir="column" margin="10px 0" textAlign="center">

        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/details/${props.product._id}`}>
          <Text className={style.productName} sx={{fontFamily:"Inter, sans-serif",fontWeight:"700"}} >{productName}</Text>
        </Link>

        <Text className={style.productPrice}>{productPrice}</Text>

      </Flex>

    </Flex>
  )
}