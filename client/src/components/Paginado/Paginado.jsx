import React from 'react'
// import style from './Pagination.module.css'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import style from './Paginado.module.css'


export const Pagination = ({pageNumber, prevPageFn, nextPageFn, totalPages}) => {
  return (
    totalPages > 1 ?
    <div className={style.containerPaginado}>
      <button
        
        onClick={() => prevPageFn()}
        disabled={pageNumber < 2}
      >
         <h1><AiOutlineArrowLeft/></h1>
      </button>
      <p >Actual page: {pageNumber} of {totalPages}</p>
      <button
        onClick={() => nextPageFn()}
        disabled={pageNumber === totalPages}
      >
        <h1><AiOutlineArrowRight/></h1>
      </button>
    </div>
    :
    <></>
  )
}
