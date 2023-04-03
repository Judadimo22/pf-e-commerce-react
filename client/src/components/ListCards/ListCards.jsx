import React, { useEffect, useState } from 'react'
import styles from './ListCard.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from '../Card/Card';
import { Pagination } from '../Paginado/Paginado';
import { getClothes } from '../../redux/actions';
import SortByPrice from '../Filters/SortByPrice';

export const ListCard = () => {

  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("asc");
  const filteredProducts = useSelector((state) => state.ClothesCopy)
  const resultsPerPage = 9
  const numberOfResults = filteredProducts.length
  const numberOfPages = numberOfResults ? Math.ceil(numberOfResults / resultsPerPage) : 0
  const [pageNumber, setPageNumber] = useState(1)
  const pageSliceStart = pageNumber === 1 ? 0 : (pageNumber - 1) * resultsPerPage
  const pageSliceEnd = pageNumber * resultsPerPage

  const dispatch = useDispatch()
  useEffect(() => {
    setPageNumber(1)
  }, [numberOfResults])
  useEffect(() => {
    getClothes()
    const getData = async ( ) => {
      return dispatch(getClothes())
    }
    
  
    setProducts(getData());
  }, []);


  function sortProducts(type, list) {
    console.log(list);
    const sorted = list.sort((a, b) => {
      const isAsc = type === "asc";
      if (isAsc) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    return sorted;
  }

  function handleSelectChange(event) {
    const newSortType = event.target.value;
    const sortedProducts = sortProducts(newSortType, filteredProducts);
    setSortType(newSortType);
    setProducts(sortedProducts);
  }
  return (
    <div>      
      <SortByPrice sortType={sortType} handleSelectChange={handleSelectChange}/>
      <div className={styles.product}>
        {
          filteredProducts.length
            ? filteredProducts.slice(pageSliceStart, pageSliceEnd).map(product => (<ProductCard key={product._id} product={product} />))
            : (
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <img className={styles.noResultImg} src={`https://images.unsplash.com/photo-1483392707171-cb3e4b1cb8b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`} />
                {/* aparece un imagen cuando no encuentra nada , hay que cambiarla*/}
                <h3 className={styles.noResultTitle}>{"Sorry! No results found :("}</h3>
              </div>
            )
        }
      </div>
      <Pagination
          pageNumber={pageNumber}
          totalPages={numberOfPages}
          nextPageFn={() => setPageNumber(page => page + 1)}
          prevPageFn={() => setPageNumber(page => page - 1)}
        />
    </div>
  )
}