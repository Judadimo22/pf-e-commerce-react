import React from "react";
import style from './NavBar.module.css';
//import {BsBagCheckFill} from "react-icons/bs"
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton} from '../Login/login'
import { LogOutButton } from '../Login/logOut'
import { FaRegUserCircle } from "react-icons/fa"
import ByType from "../Filters/ByType";
import SearchBar from '../SearchBar/SearchBar'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Avatar, Box, Button, Flex, Icon, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";








const HomeNavBar = () => {

    const {isAuthenticated, user,logout} = useAuth0();
    console.log(user)
    return(
        <>
        <Flex h="70px" width="100%"/>
        <Flex className={style.containerNavBar} position="fixed" zIndex="9999">
            <div>
                <ByType/>
            </div>
            <Link to="/home">
                <div className={style.containerTitle}>
                    <Text sx={{fontSize: "50px",fontFamily:"Alumni Sans, sans-serif",fontWeight:"1000",marginLeft:"40px"}} >Ecommerce</Text>
                </div>
            </Link>
            <SearchBar/>
            <Flex w="8%" justifyContent="space-between">
                {isAuthenticated ?(
                <Menu>
                    <MenuButton>
                        <Avatar src={user?.picture} size="md"/>
                    </MenuButton>
                <MenuList >
                    <Link to={`/user/${ user.id ? user.id:"642e55eb8debb5e04fd0ff37"}`}>
                        <MenuItem>Profile</MenuItem>
                    </Link>
                    <Link to={`/user/${ user.id ? user.id:"642e55eb8debb5e04fd0ff37"}/orders`}>
                        <MenuItem>My orders</MenuItem>
                    </Link>
                    <Link to={`/user/${ user.id ? user.id:"642e55eb8debb5e04fd0ff37"}/notifications`}>
                        <MenuItem>Notifications</MenuItem>
                    </Link>
                    <MenuItem onClick={()=>logout()}>Logout</MenuItem>
                </MenuList>
                </Menu>
                ):<LoginButton/>}
                <Icon bgColor="#f2f2f2" boxSize={12} borderRadius={50} p={2.5} justifyContent="center" alignItems="center"  as={AiOutlineShoppingCart}/> 
            </Flex>
        </Flex>
        </>
    )
};

export default HomeNavBar;