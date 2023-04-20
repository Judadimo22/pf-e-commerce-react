import React from "react";
import style from "./Cloth.module.css";
import { useDispatch } from "react-redux";
import { TbShoppingCartPlus } from "react-icons/tb";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button, Flex, Icon, Image, Td, Tr } from "@chakra-ui/react";

const User = (props) => {
  const dispatch = useDispatch();

  const Name = props.user.name;
  const LastName = props.user.lastname;
  const Country = props.user.country;
  const Address = props.user.addres;
  const Email = props.user.email;
  const Rol = props.user.roll;
  const Active = props.user.active;

  return (
    <Tr>
      <Td fontSize={{base:10,md:16}}>{Name}</Td>
      <Td display={{base:'none', md:'table-cell'}}>{LastName}</Td>
      <Td fontSize={{base:10,md:16}}>{Email}</Td>
      <Td display={{base:'none', md:'table-cell'}}>{Rol}</Td>
      <Td  display={{base:'none', md:'table-cell'}}>{Active}</Td>
      <Link to={`/Update/${props.user._id}`}>
        <Td fontSize={{base:10,md:16}}>Edit</Td>
      </Link>
    </Tr>
  );
};

export default User;

/*       <button className={style.cart}><AiFillEdit/></button>
      <button className={style.cart}><AiFillDelete/></button>
 */
