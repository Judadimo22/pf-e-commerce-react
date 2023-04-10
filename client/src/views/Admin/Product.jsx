import React from 'react'
import { DashboardLeftMenu } from '../../components/SideMenu/SideMenu'
import AdminNavBar from '../../components/NavBar/AdminNavBar'
import { Flex, TableContainer } from '@chakra-ui/react'
import AdmProduct from '../../components/Dashboard/AdmProduct'
import { TbDeviceDesktopAnalytics, TbShirt, TbTruck } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";


const ProductsAdmin = () => {
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
      <>
        <AdminNavBar/>
        <Flex>
          <DashboardLeftMenu nav={nav} />
        <Flex width="100%" justifyContent="center" >
        <Flex 
        width="80%"
        borderRadius="20px"
        p="10px"
        bgColor="#ffffff"
        m="40px 0"
        boxShadow="-webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);"
        >
          <TableContainer w="100%" >
              <AdmProduct/>
          </TableContainer>
        </Flex>
        </Flex>
      </Flex>
    </>
    )
}

export default ProductsAdmin