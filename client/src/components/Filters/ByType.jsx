import React from 'react'
import "./ByType.css"
import {filterByType,ChangefilterInputByType} from "../../redux/actions/index"
import { useDispatch } from 'react-redux'
import { Text } from '@chakra-ui/react'
import { capitalize } from '@mui/material'

const ByType = () => {
  const type = ["shirts","pants","hoodies","hats"]
  const dispatch = useDispatch()
  const onChange = (e) => {
    dispatch(ChangefilterInputByType(e.target.value))
    dispatch(filterByType(e.target.value))
  }

  return (
    <div className='select'>
        {type.map((a,index)=> <Text onClick={onChange} value={a}  className="option" key={index}>{capitalize(a)}</Text>)}
    </div>
  )
}

export default ByType