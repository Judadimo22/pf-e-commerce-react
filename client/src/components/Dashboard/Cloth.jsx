import React from 'react'
import style from './Cloth.module.css'
import { useDispatch } from 'react-redux'
import { getClothById } from '../../redux/actions'
import { TbShoppingCartPlus } from "react-icons/tb";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Button, Flex, Icon, Image, Td, Tr } from '@chakra-ui/react';
import { VscEdit } from "react-icons/vsc";





export const Cloth = (props) => {
  const dispatch = useDispatch()

  // const goToProductDetails = () => {
  //   dispatch(getClothById(props.product._id))
  // }

  const totalStock = props.product.tallas.length ? props.product.tallas.reduce((total, talla) => {
     return total + talla?.stock;
   }, 0) : 0;

  const Name = props.product.name
  const Price = props.product.price
  const Stock = props.product.stock
  const Img = props.product.image

  
  


  return (
    
    <Tr>
      <Td><Image h={{base:50,md:100}} src={Img}/></Td>
      <Td fontSize={{base:10,md:16}}>{Name}</Td>
      <Td display={{base:'none',md:'table-cell'}}>${Price}</Td>
      <Td display={{base:'none',md:'table-cell'}}>{totalStock}</Td>
      <Td position='relative' right={{base:'5%',md:0}}>
      <Link to={`/product/edit/${props.product._id}`}>
      <VscEdit/>
        </Link>
      </Td>
    </Tr>
  )
}

/*       <button className={style.cart}><AiFillEdit/></button>
      <button className={style.cart}><AiFillDelete/></button>
 */