import React from 'react'
import "./ByType.css"
import {filterByType,ChangefilterInputByType} from "../../redux/actions/index"
import { useDispatch } from 'react-redux'
import { Text, VStack } from '@chakra-ui/react'
import { capitalize } from '@mui/material'

const ByType = () => {
  const type = ["shirts","pants","hoodies","hats"]
  const dispatch = useDispatch()
  const onChange = (e) => {
    dispatch(ChangefilterInputByType(e.target.value))
    dispatch(filterByType(e.target.value))
  }

  return (<>
   <Text fontFamily="Jaldi" fontSize="1.3rem" fontWeight="bold" pt="1rem">
        Type
      </Text>
      <VStack alignItems="flex-start" pb="1rem" fontFamily="'Jaldi', sans-serif" fontSize="1.2rem" spacing={1}>
        {type.map((a,index)=> <button>
          <Text onClick={onChange} value={a}  className="option" key={index}>{capitalize(a)}</Text>
          </button>)}
      </VStack>
  </>)
}

export default ByType