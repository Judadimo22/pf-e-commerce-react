import React, { useEffect, useState } from 'react'
import styles from './ListCard.module.css'
import { useSelector} from 'react-redux';
import { ProductCard } from '../Card/Card';
import { Pagination } from '../Paginado/Paginado';

export const ListCard = () => {
  
  const filteredProducts = useSelector((state) => state.dogs)
  const resultsPerPage = 8
  const numberOfResults = filteredProducts.length
  const numberOfPages = numberOfResults ? Math.ceil(numberOfResults / resultsPerPage) : 0
  const [pageNumber, setPageNumber] = useState(1)
  const pageSliceStart = pageNumber === 1 ? 0 : (pageNumber - 1) * resultsPerPage
  const pageSliceEnd =  pageNumber  * resultsPerPage
  useEffect(() => {
    setPageNumber(1)
  }, [numberOfResults])
  

  return (
    <div>
    <div className={styles.product}>
      {
        filteredProducts.length
        ? filteredProducts.slice(pageSliceStart, pageSliceEnd).map(product => (<ProductCard key={product.title} product={product} />))
        : (
          <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <img className={styles.noResultImg} src={`https://images.unsplash.com/photo-1483392707171-cb3e4b1cb8b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`} />
            <h3 className={styles.noResultTitle}>{"Sorry! No results found :("}</h3>
          </div>
        )
      }
    <Pagination 
      pageNumber={pageNumber}
      totalPages={numberOfPages}
      nextPageFn={() => setPageNumber(page => page + 1)}
      prevPageFn={() => setPageNumber(page => page - 1)}
    />
    </div>
    </div>
  )
}
 