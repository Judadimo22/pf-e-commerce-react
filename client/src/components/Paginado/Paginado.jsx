import React from 'react'
// import style from './Pagination.module.css'

export const Pagination = ({pageNumber, prevPageFn, nextPageFn, totalPages}) => {
  return (
    totalPages > 0 ?
    <div>
      <button
        
        onClick={() => prevPageFn()}
        disabled={pageNumber < 2}
      >
         Página anterior
      </button>
      <p >Actual page: {pageNumber} of {totalPages}</p>
      <button
        onClick={() => nextPageFn()}
        disabled={pageNumber === totalPages}
      >
         Página siguiente
      </button>
    </div>
    :
    null
  )
}
