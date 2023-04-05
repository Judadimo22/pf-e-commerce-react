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




const NavBar = () => {
    const {isAuthenticated, user} = useAuth0();
    console.log(user)
    return(
        <div className={style.containerNavBar}>
            <div>
                <ByType/>
            </div>
            <div className={style.containerTitle}>
                <h2>E-Commerce</h2>
            </div>
            <div>
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