import React from 'react'
import style from './Cloth.module.css'
import { useDispatch } from 'react-redux'
import { TbShoppingCartPlus } from "react-icons/tb";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete} from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Button, Flex, Icon, Image, Td, Tr } from '@chakra-ui/react';




const User = (props) => {
  const dispatch = useDispatch()

  const Name = props.user.name
  const LastName = props.user.lastname
  const Country = props.user.country
  const Address = props.user.addres




  
  


  return (
    
    <Tr >
      <Td>{Name}</Td>
      <Td>{LastName}</Td>
      <Td>{Country}</Td>
      <Td>{Address}</Td>
      <Link to={`/Update/${props.user._id}`}>
      <button>Edit</button>
      </Link>
    </Tr>
  )
};

export default User;

/*       <button className={style.cart}><AiFillEdit/></button>
      <button className={style.cart}><AiFillDelete/></button>
 */