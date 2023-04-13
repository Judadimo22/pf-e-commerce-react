import React, { useEffect, useState } from "react";
import "./ByTrademark.css";
import {
  ChangeFilterInputByTradeMark, Filter, changeIndex, clearFilters,
} from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Tab, TabList, Tabs, Text, VStack } from "@chakra-ui/react";

const ByTrademark = () => {
  const typeFilter = useSelector(state=>state.filterInputs.byTrademark)
  const selectIndex = useSelector(state=>state.filterIndex.byTrademark)

  const dispatch = useDispatch();
  const trademarks = [
    "ADIDAS",
    "Nike",
    "Vandalia",
    "Oldtown Polo",
    "Topper",
    "Puma",
  ];

  const onChange = (e) => {
    dispatch(ChangeFilterInputByTradeMark(e.target.value));
    dispatch(Filter());
  };
  const clearFilter = () => {
    dispatch(clearFilters("trademark"))
    dispatch(Filter());
    dispatch(changeIndex(["trademark",-1]))
  }

  return (
    <>
    <Flex justifyContent="space-between"  alignItems="center">
      <Text fontFamily="Jaldi" fontSize="2rem" fontWeight="bold" pt="1rem">
      Trademark
      </Text>
      {
        typeFilter !== "" ?  (<Text fontFamily="Jaldi" cursor="pointer" as='u' fontSize="1rem" onClick={clearFilter} fontWeight="medium" pt="1rem">
          Clear Filter
        </Text>): null
      }
    </Flex>
      <Tabs variant='unstyled' align='start' onChange={(index)=>dispatch(changeIndex(["trademark",index]))}  index={selectIndex} defaultIndex="" justifyContent="flex-start">
  <TabList flexDir="column" >
  {trademarks.map((a,index)=> 
          (<Tab
            _selected={{ color: '#272727', bg: '#DAEB0F' }}
            onClick={(e)=>onChange(e)}
            value={a}
            display="flex" 
            justifyContent="flex-start"
            className="option" 
            key={index}
            >{a}</Tab>)
          )}
  </TabList>
  </Tabs>
    </>
  );
};

export default ByTrademark;
