import React, { useEffect, useState } from 'react'
import styles from './Clothes.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Cloth } from './Cloth';
import { Pagination } from '../Paginado/Paginado';
import { getClothes } from '../../redux/actions';
import { Flex, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';

export const Clothes = () => {

  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("asc");
  const Products = useSelector((state) => state.Clothes)
  const ADIDAS = Products?.filter(product => product.trademark === 'ADIDAS')
  console.log(ADIDAS.length)
  const resultsPerPage = 15
  const numberOfResults = Products.length
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


  return (
    <Flex flexDir="column" minH="590px" justifyContent="space-between">    
        <Table>
          <Thead>
            <Tr>
              <Th justifyContent='center'>Image</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Stock</Th>
            </Tr>
          </Thead>
          <Tbody>
        {
          Products.length ?
            Products.slice(pageSliceStart, pageSliceEnd).map(product => (<Cloth key={product._id} product={product} />)) : null  
        }
          </Tbody>

        </Table>
      
      <Pagination
          pageNumber={pageNumber}
          totalPages={numberOfPages}
          nextPageFn={() => setPageNumber(page => page + 1)}
          prevPageFn={() => setPageNumber(page => page - 1)}
        />
    </Flex>
  )
}