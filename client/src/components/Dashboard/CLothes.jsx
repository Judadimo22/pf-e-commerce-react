import React, { useEffect, useState } from 'react'
import styles from './Clothes.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Cloth } from './Cloth';
import { Pagination } from '../Paginado/Paginado';
import { getClothes, getClothesAdmin } from '../../redux/actions';
import { Flex, Table, Tbody, Th, Thead, Tr, Box, Text, Icon, Button } from '@chakra-ui/react';
import { GrAddCircle} from "react-icons/gr";
import { Link } from 'react-router-dom';


export const Clothes = () => {

  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("asc");
  const Products = useSelector((state) => state.ClothesAdminCopy)
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
      return dispatch(getClothesAdmin())
    }
    
  
    setProducts(getData());
  }, []);


  return (
    <Box>
      <Link to='/admin/create'>
      <Flex textAlign='center' justifyContent='center' py={{base:0,md:2}}>
        <Button backgroundColor='#DAEB0F' pl={6}> 
        <Text fontSize={{base:12,md:16}}>Create new product</Text>
        <Icon position='relative' ml={2} top='2.5px' fontSize={20}><GrAddCircle/></Icon>
        </Button>
      </Flex>
      </Link>
      <Flex flexDir="column" minH="590px" justifyContent="space-between"> 
        <Table>
          <Thead>
            <Tr>
              <Th justifyContent='center'>Image</Th>
              <Th>Name</Th>
              <Th display={{base:'none',md:'table-cell'}}>Price</Th>
              <Th display={{base:'none',md:'table-cell'}}>Stock</Th>
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
    </Box>
  )
}