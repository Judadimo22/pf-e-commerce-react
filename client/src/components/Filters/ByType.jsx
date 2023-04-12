import React, { useState } from 'react'
import "./ByType.css"
import {ChangefilterInputByType, Filter, clearFilters} from "../../redux/actions/index"
import { useDispatch, useSelector } from 'react-redux'
import { Button, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from '@chakra-ui/react'
import { capitalize } from '@mui/material'

const ByType = () => {
  const typeFilter = useSelector(state=>state.filterInputs.byType)
  const type = ["shirts","pants","hoodies","hats"]
  const dispatch = useDispatch()
  const [selectIndex,setSelectIndex] = useState(-1)

  const onChange = (e) => {
    dispatch(ChangefilterInputByType(e.target.value))
    dispatch(Filter());
  }
  const clearFilter = () => {
    dispatch(clearFilters("type"))
    dispatch(Filter());
    setSelectIndex(-1)
  }

  return (
  <>
    <Flex justifyContent="space-between"  alignItems="center">
      <Text fontFamily="Jaldi" fontSize="2rem" fontWeight="bold" pt="1rem">
        Type
      </Text>
      {
        typeFilter !== "" ?  (<Text fontFamily="Jaldi" cursor="pointer" as='u' fontSize="1rem" onClick={clearFilter} fontWeight="medium" pt="1rem">
          Clear Filter
        </Text>): null
      }
    </Flex>
    <Tabs className="type" variant='unstyled' align='start' onChange={(index)=>setSelectIndex(index)}  index={selectIndex} justifyContent="flex-start">
      <TabList flexDir="column" >
        {type.map((a,index)=> 
          (<Tab
            _selected={{ color: '#272727', bg: '#DAEB0F' }}
            onClick={(e)=>{
              onChange(e)
            }}
            value={a}
            display="flex"
            justifyContent="flex-start"
            key={index}>{capitalize(a)}</Tab>)
        )}
      </TabList>
    </Tabs>
  </>
  )}

export default ByType