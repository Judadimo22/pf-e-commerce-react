import React from "react";
import style from './NavBar.module.css';
//import {BsBagCheckFill} from "react-icons/bs"
import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton} from '../Login/login'
import { LogOutButton } from '../Login/logOut'
import ByCategorie from "../Filters/ByCategorie";
import ByType from "../Filters/ByType";
import SearchBar from '../SearchBar/SearchBar'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";







const AdminNavBar = () => {
    const {isAuthenticated, user} = useAuth0();
    console.log(user)
    return(
        <Flex className={style.containerNavBar}>            
            <Link to="/home">
                <div className={style.containerTitle}>
                    <Text sx={{fontSize: "50px",fontFamily:"Alumni Sans, sans-serif",fontWeight:"1000",marginLeft:"40px"}} >Casual Couture</Text>
                </div>
            </Link>
            <SearchBar/>
        </Flex>
    )
};

export default AdminNavBar;