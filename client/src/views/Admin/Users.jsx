import React from 'react'
import { DashboardLeftMenu } from '../../components/SideMenu/SideMenu'
import AdminNavBar from '../../components/NavBar/AdminNavBar'
import { Flex, TableContainer } from '@chakra-ui/react'
import TableUsersContainer from '../../components/Dashboard/AdmUsers'

const UsersPage = () => {
  return (
    <div>
      <AdminNavBar/>
      <Flex>
        <DashboardLeftMenu/>
      <Flex width="100%" justifyContent="center" >
        <Flex 
        width="80%"
        minH="630px"
        borderRadius="20px"
        p="10px"
        bgColor="#ffffff"
        m="40px 0"
        boxShadow="-webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);"
        >
          <TableContainer w="100%" >
              <TableUsersContainer/>
          </TableContainer>
        </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default UsersPage