import React, { useEffect } from 'react'
import MyProfile from '../../components/UserProfile/MyProfile'
import { useAuth0 } from '@auth0/auth0-react'
import { TbTruckDelivery, TbUserCircle } from 'react-icons/tb'
import { HiOutlineMail } from 'react-icons/hi'
import { useParams } from 'react-router-dom'
import HomeNavBar from '../../components/NavBar/HomeNavbar'
import { DashboardLeftMenu } from '../../components/SideMenu/SideMenu'

import { Flex } from '@chakra-ui/react'


const UserEditPage = () => {
  const { user,loginWithPopup,isAuthenticated } = useAuth0()
  const { id } = useParams();
  useEffect(()=>{
    if(!isAuthenticated) window.location.href = '/home'
  },[])
  
  const nav= [
    {
        icon:TbUserCircle,
        title:"General",
        redirect:`/user/${id}`
    },
    {
        icon:TbTruckDelivery,
        title:"My orders",
        redirect:`/user/${id}/orders`
    },
    {
        icon:HiOutlineMail,
        title:"Notifications",
        redirect:`/user/${id}/notifications`
    },
]
return (
<>
<HomeNavBar/>
<Flex>
  <DashboardLeftMenu nav={nav} edit={true} user={user}/>
  <Flex width="100%" justifyContent="center" >
    {
      user ? <MyProfile user={user}/> : null
    }
  </Flex>
</Flex>
</>
)
}

export default UserEditPage