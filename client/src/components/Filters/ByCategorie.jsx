import React, { useEffect, useState } from "react";
import "./ByCategorie.css";
import {
  ChangefilterInputByCategorie, Filter, clearFilters,
} from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Tab, TabList, Tabs, Text, VStack } from "@chakra-ui/react";
import { capitalize } from "@mui/material";

const ByCategorie = () => {
  const typeFilter = useSelector(state=>state.filterInputs.byCategorie)
  const [selectIndex,setSelectIndex] = useState(-1)

  const dispatch = useDispatch();
  const categories = ["men", "women", "kid"];

  const onChange = (e) => {
    dispatch(ChangefilterInputByCategorie(e.target.value));
    dispatch(Filter());
  };
  const clearFilter = () => {
    dispatch(clearFilters("category"))
    dispatch(Filter());
    setSelectIndex(-1)
  }
  return (
    <>
      
      <Flex justifyContent="space-between"  alignItems="center">
      <Text fontFamily="Jaldi" fontSize="2rem" fontWeight="bold" pt="1rem">
      Category
      </Text>
      {
        typeFilter !== "" ?  (<Text fontFamily="Jaldi" cursor="pointer" as='u' fontSize="1rem" onClick={clearFilter} fontWeight="medium" pt="1rem">
          Clear Filter
        </Text>): null
      }
    </Flex>
      <Tabs variant='unstyled' align='start' onChange={(index)=>setSelectIndex(index)}  index={selectIndex} defaultIndex="" justifyContent="flex-start">
  <TabList flexDir="column" >
  {categories.map((a,index)=> 
          (<Tab _selected={{ color: '#272727', bg: '#DAEB0F' }} onClick={onChange} value={a} display="flex" justifyContent="flex-start" className="option" key={index}>{capitalize(a)}</Tab>)
          )}
  </TabList>
  
</Tabs>
    </>
  );
};

export default ByCategorie;
