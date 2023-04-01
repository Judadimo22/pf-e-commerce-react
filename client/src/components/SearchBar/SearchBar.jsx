import React from "react";
import { IoIosSearch } from "react-icons/io";
import style from './SearchBar.module.css'

const SearchBar = () => {
    return(
        <div className={style.containerSearchBar}>
            <div className={style.containerInput}>
            <input type="text" placeholder="Search ..." />
            <h3><IoIosSearch/></h3>
            </div>
        </div>
    )
};

export default SearchBar