import React, { useEffect } from "react";
import ByCategorie from "./ByCategorie";
import ByType from "./ByType";
import ByTrademark from "./ByTrademark";
import SortByPrice from "./SortByPrice";
import { Box, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Filter, changeIndex, clearFilters } from "../../redux/actions";

const Filtrers = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(clearFilters("all"))
    dispatch(Filter());
    dispatch(changeIndex(["all",-1]))
  },[])

  return (
    <Box display={{ base:'flex',md:'block'}} flexWrap='wrap'>
      <div>
        <ByCategorie />
      </div>
      <Box
        borderBottom="2px"
        borderColor="#b5babb"
        borderRadius="full"
        width="100%"
        margin="auto"
      />
      <div>
        <ByTrademark />
      </div>
      <Box
        borderBottom="2px"
        borderColor="#b5babb"
        borderRadius="full"
        width="100%"
        margin="auto"
      />
      <div>
        <ByType/>
      </div>
      <Box
        borderBottom="2px"
        borderColor="#b5babb"
        borderRadius="full"
        width="100%"
        margin="auto"
      />
      <div className="filter-sort-bytype"> 
        <SortByPrice />
      </div>
    </Box>
  );
};

export default Filtrers;
