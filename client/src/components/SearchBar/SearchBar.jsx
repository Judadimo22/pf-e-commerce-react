import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import style from './SearchBar.module.css'

const SearchBar = () => {

    const dispatch = useDispatch;
    const [ name, setName ] = useState("");

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(GetGame(name))
        setName('')
    };
    return(
        <div className={style.containerSearchBar}>
            <div className={style.containerInput}>
            <input type="text" placeholder="Search ..." onChange={(e) => handleInputChange(e)} />
            <button onClick={(e) => handleClick(e)}><IoIosSearch/></button>
            </div>
        </div>
    )
};

export default SearchBar