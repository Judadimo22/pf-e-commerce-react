import React from "react";
import style from './NavBar.module.css';
//import {BsBagCheckFill} from "react-icons/bs"
import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton} from '../Login/login'
import { LogOutButton } from '../Login/logOut'
//import logo from "../../assets/logo/logo.png" no funciona!!


const NavBar = () => {
    const {isAuthenticated} = useAuth0();
    return(
        <div className={style.containerNavBar}>
            <div className={style.containerTitle}>
                {/*<h2>{logo}</h2>*/}
                <h2>Tienda Online</h2>
            </div>
            <div className={style.containerSearch}>
                <div>
                {isAuthenticated ?(<>
        <LogOutButton/>
      </>):<LoginButton/>}
                </div>
                {/*<h2 className={style.logoCarritoCompras}><BsBagCheckFill/></h2>*/}
            </div>
        </div>
    )
};

export default NavBar;