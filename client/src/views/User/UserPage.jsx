import React from 'react'
import HomeNavBar from '../../components/NavBar/HomeNavbar'
import { DashboardLeftMenu } from '../../components/SideMenu/SideMenu'
import { TbTruckDelivery, TbUserCircle } from 'react-icons/tb'
import { HiOutlineMail } from 'react-icons/hi'
import { Flex } from '@chakra-ui/react'

const UserPage = () => {

    const nav= [
        {
            icon:TbUserCircle,
            title:"General",
            redirect:"/user/5"
        },
        {
            icon:TbTruckDelivery,
            title:"My orders",
            redirect:"/user/5/orders"
        },
        {
            icon:HiOutlineMail,
            title:"Notifications",
            redirect:"/user/5/notifications"
        },
    ]

  return (
    <>
    <HomeNavBar/>
    <Flex>
      <DashboardLeftMenu nav={nav}/>
    <Flex width="100%" justifyContent="center" >
      
      </Flex>
    </Flex>
  </>
  )
}

export default UserPage