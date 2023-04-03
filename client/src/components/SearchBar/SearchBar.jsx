import { useState } from "react";
import { getCloth } from "../../redux/actions";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import style from './SearchBar.module.css'

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleCLick = (e) => {
        e.preventDefault();
        dispatch(getCloth(name))
        setName('')
    };

    return(
        <div className={style.containerSearch}>
            <form onSubmit={(e) => handleCLick(e)}>
                <input type="text" id="" placeholder="Search ..." onChange={(e) => handleInputChange(e)} />
                <button onClick={(e) => handleCLick(e)}><IoIosSearch/></button>
            </form>
        </div>
    )
}
