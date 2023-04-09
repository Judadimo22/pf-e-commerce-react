import React from 'react'
import style from './Cloth.module.css'
import { useDispatch } from 'react-redux'
import { TbShoppingCartPlus } from "react-icons/tb";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Button, Flex, Icon, Image, Td, Tr } from '@chakra-ui/react';




const User = ({name, lastname, country, addres}) => {
  const dispatch = useDispatch()



  
  


  return (
    
    <Tr >
      <Td>{name}</Td>
      <Td>{lastname}</Td>
      <Td>{country}</Td>
      <Td>{addres}</Td>
      <Flex height="50px" alignItems="center" justifyContent="center" >
        <AiFillEdit/>
        <AiFillDelete/>
      </Flex>
    </Tr>
  )
};

export default User;

/*       <button className={style.cart}><AiFillEdit/></button>
      <button className={style.cart}><AiFillDelete/></button>
 */