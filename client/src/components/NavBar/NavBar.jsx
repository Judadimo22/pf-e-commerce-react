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
import { Text } from "@chakra-ui/react";







const NavBar = () => {
    const {isAuthenticated, user} = useAuth0();
    console.log(user)
    return(
        <div className={style.containerNavBar}>
            <div>
                <ByType/>
            </div>
            <div className={style.containerTitle}>
                <Text sx={{fontSize: "50px",fontFamily:"Alumni Sans, sans-serif",fontWeight:"1000",marginLeft:"40px"}} >Ecommerce</Text>
            </div>
            <div className={style.containerSearchBar}>
            <SearchBar/>
            </div>
            <div className={style.containerSearch}>
                <div>
                {isAuthenticated ?(<>
                <div>Bienvenido!{user.name}</div>
        <LogOutButton/>
      </>):<LoginButton/>}
                </div>
                <button><AiOutlineShoppingCart/></button>
            </div>
        </div>
    )
};

export default NavBar;