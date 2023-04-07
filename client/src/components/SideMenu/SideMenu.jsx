import { Avatar, Box, Button, Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import NavItem from "./NavItem";
import { TbDeviceDesktopAnalytics, TbShirt, TbTruck } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";


export function DashboardLeftMenu() {
  // Verifica el token de autenticación y el rol del usuario
  //como lo hago? xd
  //que dios me guie
  const name = "Mateo"
  
  const navigate  = useNavigate()
  if ("admin" === "admin") {
    return (
      <Flex
      pos="sticky"
      h="685px"
      boxShadow="0 4px 12px 0 rgb(0,0,0,0.5)" 
      w="350px"
      flexDir="column"
      justifyContent="space-between"
      bgColor="#272727"
      >
        <Flex
        p="4%"
        flexDir="column"
        w="100%"
        alignItems="flex-start"
        >
            <Flex mt={4} align="center" alignSelf="center" flexDir="column" >
                <Avatar size="sm"/>
                <Heading as="h3" color="#ffffff" size="sm">{name}</Heading>
                <Button
                bgColor="#272727"
                color="#f2f2f2"
                border="1px solid #f2f2f2"
                _hover={{backgroundColor:"#353535"}}
                >Edit</Button>
            </Flex>

        </Flex>


        <Flex 
            flexDir="column"
            mb={20}
        >
            <NavItem icon={TbDeviceDesktopAnalytics} title="Dashboard"/>
            <NavItem icon={TbShirt} title="Products"/>
            <NavItem icon={FiUsers} title="Users"/>
            <NavItem icon={TbTruck} title="Orders"/>
        </Flex>
        <Flex
            justifyContent="center"
            marginBottom="40px"
        >
            <Button
            bgColor="#272727"
            color="#f2f2f2"
            border="1px solid #f2f2f2"
            _hover={{backgroundColor:"#353535"}}
            >Log out</Button>
        </Flex>




        {/* <ul>
          <li>
            <Link to="/dashboard">Estadísticas</Link>
          </li>
          <li>
            <Link to="/dashboard/products">Productos</Link>
          </li>
          <li>
            <Link to="/dashboard/users">Usuarios</Link>
          </li>
          <li>
            <Link to="/dashboard/orders">Ordenes</Link>
          </li>
        </ul> */}
      </Flex>
    );
  } else {
    return (
        navigate("/home")
    );
  }
}