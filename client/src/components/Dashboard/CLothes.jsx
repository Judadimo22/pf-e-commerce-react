import React, { useEffect, useState } from 'react'
import styles from './Clothes.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Cloth } from './Cloth';
import { Pagination } from '../Paginado/Paginado';
import { getClothes } from '../../redux/actions';

export const Clothes = () => {

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
      <div className={styles.product}>
        {
          filteredProducts.length
            ? filteredProducts.slice(pageSliceStart, pageSliceEnd).map(product => (<Cloth key={product._id} product={product} />))
            : (
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <img className={styles.noResultImg} src={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c110454-5b33-4416-bf9b-72992c7cb56f/d60eb1v-79212624-e842-4e55-8d58-4ac7514ca8e4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjMTEwNDU0LTViMzMtNDQxNi1iZjliLTcyOTkyYzdjYjU2ZlwvZDYwZWIxdi03OTIxMjYyNC1lODQyLTRlNTUtOGQ1OC00YWM3NTE0Y2E4ZTQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9LDpLmLlbA507H7fKa8aEDxFr8k3SlwCGC1zuJ13d1w`} />
                {/* aparece un imagen cuando no encuentra nada , hay que cambiarla*/}
                <h3 className={styles.noResultTitle}>{"Sorry! No results found :("}</h3>
                <a href='/home'>Back to home!</a>
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