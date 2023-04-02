import { useState } from "react";
import { getCloth } from "../../redux/actions";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";

export default function SearchBar(){
    const dispatch = useDispatch();
    const [trademark, setTradeMark] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();
        setTradeMark(e.target.value);
    }

    const handleCLick = (e) => {
        e.preventDefault();
        dispatch(getCloth(trademark))
        setTradeMark('')
    };

    return(
        <div>
            <form onSubmit={(e) => handleCLick(e)}>
                <input type="text" id="" placeholder="Search ..." onChange={(e) => handleInputChange(e)} />
                <h3><IoIosSearch/></h3>
            </form>
        </div>
    )
}
