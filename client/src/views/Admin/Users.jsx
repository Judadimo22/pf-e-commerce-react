import React from 'react'
import { DashboardLeftMenu } from '../../components/SideMenu/SideMenu'
import AdminNavBar from '../../components/NavBar/AdminNavBar'
import { Flex } from '@chakra-ui/react'

const UsersPage = () => {
  return (
    <div>
      <AdminNavBar/>
      <Flex>
        <DashboardLeftMenu/>
      </Flex>
    </div>
  )
}

export default UsersPage