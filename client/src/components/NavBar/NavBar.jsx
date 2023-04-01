import React from "react";
import style from './NavBar.module.css';
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useAuth0 } from '@auth0/auth0-react'
import { Profile } from "../Profile/profile"; 
import { LoginButton} from '../Login/login'
import { LogOutButton } from '../Login/logOut'


const NavBar = () => {
    const {isAuthenticated} = useAuth0();
    return(
        <div className={style.containerNavBar}>
            <div className={style.containerTitle}>
                <h2>Tienda online</h2>
            </div>
            <div className={style.containerSearch}>
                <div>
                {isAuthenticated ?(<>
        <Profile/>
        <LogOutButton/>
      </>):<LoginButton/>}
                </div>
                <h2><AiOutlineShoppingCart/></h2>
            </div>
        </div>
    )
};

export default NavBar;