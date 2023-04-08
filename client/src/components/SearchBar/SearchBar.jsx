import { useState } from "react";
import { getCloth, setSearch } from "../../redux/actions";
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
        dispatch(setSearch(name))
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






// *

// function SearchBar({ setPage }) {
//     const dispatch = useDispatch();
//     const [input, setInput] = useState("");
  
//     function handleChange(e) {
//       e.preventDefault();
//       setInput(e.target.value);
//       //dispatch(setSearch(input));
//     }
  
//     function handleSubmit(e) {
//       e.preventDefault();
//       dispatch(setSearch(input));
//       setInput("");
//       setPage(1);
//     }
  
//     function handleOnKeyDown(e) {
//       if (e.keyCode === 13) {
//         dispatch(setSearch(input));
//         setInput("");
//         setPage(1);
//       }
//     }
  
//     return (
//       <React.Fragment>
//         <div className="flex  mt-[130px] mb-12 flex-wrap  justify-center static">
//           <div>
//             <input
//               className="bg-white py-3 pl-4 w-[500px] rounded-l-xl outline-none text-black"
//               //focus:border focus:border-[#FB8500] border-1
//               type="search"
//               name="search"
//               value={input}
//               placeholder="Search by car make..."
//               onKeyDown={(e) => handleOnKeyDown(e)}
//               onChange={(e) => handleChange(e)}
//             />
//             <FiSearch className="text-[#FB8500]  mt-[-36px] ml-[460px] text-[25px] static" />
//           </div>
//           <button
//             className="text-[19px] px-1 rounded-tr-xl rounded-br-xl rounded-bl-none rounded-tl-none py-[9.5px] static"
//             onClick={(e) => handleSubmit(e)}
//           >
//             Search
//           </button>
//         </div>
//       </React.Fragment>
//     );
//   }
  
//   export default SearchBar;
