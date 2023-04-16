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

  const Name = props.product.name
  const Price = props.product.price
  const Stock = props.product.stock
  const Img = props.product.image

  
  


  return (
    
    <Tr >
      <Td><Image h={100} src={Img}/></Td>
      <Td>{Name}</Td>
      <Td>${Price}</Td>
      <Td>{Stock}</Td>
      <Td>
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