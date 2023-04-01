import React from 'react'
import style from './Pagination.module.css'

export const Pagination = ({pageNumber, prevPageFn, nextPageFn, totalPages}) => {
  return (
    totalPages > 0 ?
    <div className={style.pagination}>
      <button
        className={style.prevPageBtn}
        onClick={() => prevPageFn()}
        disabled={pageNumber < 2}
      >
         Página anterior
      </button>
      <p className={style.numberOfPagesText}>Actual page: {pageNumber} of {totalPages}</p>
      <button
        className={style.nextPageBtn}
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
