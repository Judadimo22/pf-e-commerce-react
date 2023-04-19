import { useState } from "react";
import { Filter, changeIndex, clearFilters, getCloth, setSearch, setSearchAdmin, setSearchInput } from "../../redux/actions";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";
import { Box, Button, FormControl, Input } from "@chakra-ui/react";

export default function SearchBarAdmin() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleCLick = (e) => {
    e.preventDefault();
    dispatch(clearFilters("all"));
    dispatch(Filter());
    dispatch(changeIndex(["all", -1]));
    dispatch(setSearchAdmin(name));;

    setName("");
  };

    return(
        <Box color='#565656' >
            <FormControl display='flex' justifyContent='center'>
            <form onSubmit={(e) => handleCLick(e)}>
            <Button fontSize={25} cursor='pointer' position='relative' zIndex={20} left={{base:0,md:14}} _hover='none' border='none' background='none' bac onClick={(e) => handleCLick(e)}><IoIosSearch/></Button>
                <Input  pl={{base:0 ,md:50}} borderRadius={20} backgroundColor='#F2F2F2' border='none' fontSize={16} h={{base:5,md:35}} w={{base:100,md:250}}  type="text" id="" value={name} placeholder="Search ..." onChange={(e) => handleInputChange(e)} />
            </form>
            </FormControl>
        </Box>
    )
}
