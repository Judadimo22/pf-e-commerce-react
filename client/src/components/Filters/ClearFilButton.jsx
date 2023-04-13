import { Button, Text } from '@chakra-ui/react'
import React from 'react'
import { Filter, changeIndex, clearFilters } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const ClearFilButton = () => {
    const dispatch = useDispatch()
    const clearFilter = () => {
        dispatch(clearFilters("all"))
        dispatch(Filter());
        dispatch(changeIndex(["all",-1]))
      }
  return (
    <Button onClick={clearFilter} bgColor="#272727" color="#f2f2f2" borderRadius="18px" _hover={{border:"1px solid #272727",bgColor:"#f2f2f2", color:"#272727" }}>
        <Text>Clear Filters</Text>
    </Button>
  )
}

export default ClearFilButton