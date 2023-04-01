import React from "react";
import style from './NavBar.module.css';
import { IoIosSearch } from "react-icons/io";
import SearchBar from "../SearchBar/SearchBar";
import {AiOutlineShoppingCart, AiOutlineMenu} from "react-icons/ai";
import { BiMenu} from "react-icons/bi";

const NavBar = () => {
    return(
        <div className={style.containerNavBar}>
            <div className={style.containerTitle}>
                <h2>E-Commerce</h2>
            </div>
            <div className={style.containerSearch}>
                <div>
                    <SearchBar/>
                </div>
                <button className={style.cart}><AiOutlineShoppingCart/></button>
                <button className={style.menu}><BiMenu/></button>
            </div>
        </div>
    )
};

export default NavBar;