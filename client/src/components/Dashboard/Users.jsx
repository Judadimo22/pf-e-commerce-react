import React, { useEffect, useState } from 'react'
import styles from './Clothes.module.css'
import { useDispatch, useSelector } from 'react-redux';
import User from './User'
import { Pagination } from '../Paginado/Paginado';
import { getUsers} from '../../redux/actions';
import { Flex, Table, Tbody, Th, Thead, Tr } from '@chakra-ui/react';

const Users = () => {

  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("asc");
  const Users = useSelector((state) => state.UsersCopy)
  const resultsPerPage = 15
  const numberOfResults = Users.length
  const numberOfPages = numberOfResults ? Math.ceil(numberOfResults / resultsPerPage) : 0
  const [pageNumber, setPageNumber] = useState(1)
  const pageSliceStart = pageNumber === 1 ? 0 : (pageNumber - 1) * resultsPerPage
  const pageSliceEnd = pageNumber * resultsPerPage

  const dispatch = useDispatch()
  useEffect(() => {
    setPageNumber(1)
  }, [numberOfResults])
  useEffect(() => {
    getUsers()
    const getData = async ( ) => {
      return dispatch(getUsers())
    }
    
  
    setProducts(getData());
  }, []);


  return (
    <Flex flexDir="column" minH="590px" justifyContent="space-between">    
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Rol</Th>
              <Th>Active</Th>
            </Tr>
          </Thead>
          <Tbody>
        {
          Users.length ?
             Users.slice(pageSliceStart, pageSliceEnd).map(user => (<User key={user._id} user={user} />)) : null 
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
};

export default Users;