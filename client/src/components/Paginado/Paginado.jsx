import React from 'react'
// import style from './Pagination.module.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import style from './Paginado.module.css'
import { Text, Box } from '@chakra-ui/react';


export const Pagination = ({pageNumber, prevPageFn, nextPageFn, totalPages}) => {
  return (
    totalPages > 1 ?
    <Box pb={5} className={style.containerPaginado}>
      <button
        
        onClick={() => prevPageFn()}
        disabled={pageNumber < 2}
      >
         <Text fontSize={{base:12,md:16}}><AiOutlineArrowLeft/></Text>
      </button>
      <Text fontSize={{base:12,md:16}}>Actual page: {pageNumber} of {totalPages}</Text>
      <button
        onClick={() => nextPageFn()}
        disabled={pageNumber === totalPages}
      >
        <Text fontSize={{base:12,md:16}}><AiOutlineArrowRight/></Text>
      </button>
    </Box>
    :
    <></>
  )
}
