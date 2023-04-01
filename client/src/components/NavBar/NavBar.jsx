import React from "react";
import style from './NavBar.module.css';
import SearchBar from "../SearchBar/SearchBar";
import {AiOutlineShoppingCart} from "react-icons/ai"

const NavBar = () => {
    return(
        <div className={style.containerNavBar}>
            <div className={style.containerTitle}>
                <h2>Tienda online</h2>
            </div>
            <div className={style.containerSearch}>
                <div>
                    <SearchBar/>
                </div>
                <h2><AiOutlineShoppingCart/></h2>
            </div>
        </div>
    )
};

export default NavBar;