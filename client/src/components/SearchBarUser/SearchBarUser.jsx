import { useState } from "react";
import { getCloth, setSearch, setSearchUser } from "../../redux/actions";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import style from './SearchBarUser.module.css'

export default function SearchBarUser(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleCLick = (e) => {
        e.preventDefault();
        dispatch(setSearchUser(name))
        setName('')
    };

    return(
        <div className={style.containerSearch}>
            <form onSubmit={(e) => handleCLick(e)}>
            <button onClick={(e) => handleCLick(e)}><IoIosSearch/></button>
                <input type="text" id="" value={name} placeholder="Search ..." onChange={(e) => handleInputChange(e)} />
            </form>
        </div>
    )
}