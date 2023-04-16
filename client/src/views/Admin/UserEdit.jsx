import React from 'react'
import { DashboardLeftMenu } from '../../components/SideMenu/SideMenu'
import AdminNavBar from '../../components/NavBar/AdminNavBar'
import { Flex, TableContainer } from '@chakra-ui/react'
import { TbDeviceDesktopAnalytics, TbShirt, TbTruck } from 'react-icons/tb'
import { FiUsers } from 'react-icons/fi'
import UserEdit from '../../components/UserEdit/UserEdit'

const UserEditsPage = () => {
  const nav= [
    {
        icon:TbDeviceDesktopAnalytics,
        title:"Dashboard",
        redirect:"/admin"
    },
    {
        icon:TbShirt,
        title:"Products",
        redirect:"/admin/products"
    },
    {
        icon:FiUsers,
        title:"Users",
        redirect:"/admin/users"
    },
    {
        icon:TbTruck,
        title:"Orders",
        redirect:"/admin/orders"
    },
]

  return (
    <div>
      <AdminNavBar/>
      <Flex>
        <DashboardLeftMenu nav={nav} />
      <Flex width="100%" justifyContent="center" >
        <Flex 
        backgroundColor='#F2F2F2'
        width="80%"
        minH="630px"
        border='none'
        bgColor="#ffffff"
        m="40px 0"
        >
          <TableContainer w="100%"  backgroundColor='#F2F2F2' alignItems='center'  >
              <UserEdit/>
          </TableContainer>
        </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default UserEditsPage