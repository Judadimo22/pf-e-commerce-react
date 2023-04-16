import React from 'react'
import style from './Cloth.module.css'
import { useDispatch } from 'react-redux'
import { getClothById } from '../../redux/actions'
import { TbShoppingCartPlus } from "react-icons/tb";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Button, Flex, Icon, Image, Td, Tr } from '@chakra-ui/react';




export const Cloth = (props) => {
  const dispatch = useDispatch()

  // const goToProductDetails = () => {
  //   dispatch(getClothById(props.product._id))
  // }

  const Name = props.product.name
  const Price = props.product.price
  const Stock = props.product.

  
  


  return (
    
    <Tr >
      <Link to={`/details/${id}`}>
        <Td as='u'>{name}</Td>
      </Link>
      <Td>${price}</Td>
      <Td>{stock}</Td>
      <Flex height="50px" alignItems="center" justifyContent="center" >
        <AiFillEdit/>
        <AiFillDelete/>
      </Flex>
    </Tr>
  )
}

/*       <button className={style.cart}><AiFillEdit/></button>
      <button className={style.cart}><AiFillDelete/></button>
 */