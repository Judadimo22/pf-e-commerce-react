import React, { useEffect } from 'react'
import HomeNavBar from '../../components/NavBar/HomeNavbar'
import { DashboardLeftMenu } from '../../components/SideMenu/SideMenu'
import { TbRuler, TbTruckDelivery, TbUserCircle } from 'react-icons/tb'
import { HiOutlineMail } from 'react-icons/hi'
import { Flex } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserById } from '../../redux/actions'
import UserInfo from '../../components/UserInfo/userInfo'
import MyCloth from '../../components/UserProfile/MyCloth'
import MyProfile from '../../components/UserProfile/MyProfile'
import { useAuth0 } from '@auth0/auth0-react'

const UserPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const { user } = useAuth0()
  useEffect(()=>{
   //if(!user.length) dispatch(getUserById(id))
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
    console.log(user);
  return (
    <>
    <HomeNavBar/>
    <Flex>
      <DashboardLeftMenu nav={nav} edit={true} user={user}/>
    <Flex width="100%" justifyContent="center" >
      </Flex>
    </Flex>
  </>
  )
}

export default UserPage