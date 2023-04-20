import React, { useEffect } from 'react'
import HomeNavBar from '../../components/NavBar/HomeNavbar';
import { Flex } from '@chakra-ui/react';
import { DashboardLeftMenu } from '../../components/SideMenu/SideMenu';
import UserInfo from '../../components/UserInfo/userInfo';
import { TbTruckDelivery, TbUserCircle } from 'react-icons/tb';
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { getUserById } from '../../redux/actions';
import UserAddresses from '../../components/UserInfo/UserAddresses';
import Footer from '../../components/Footer/Footer';

const AddressesPage = () => {
    const userState = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const { id } = useParams();
    const { user } = useAuth0()
    useEffect(()=>{
     if(!userState.length) dispatch(getUserById(id))
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
              redirect:`/user/orders/${id}`
          },
          {
              icon:HiOutlineMail,
              title:"Notifications",
              redirect:`/user/notifications/${id}`
          },
          {
              icon:HiOutlineLocationMarker,
              title:"Addresses",
              redirect:`/user/addresses/${id}`
          },
      ]
  
    return (
      <>
      <HomeNavBar/>
      <Flex minH="91.1vh">
        <DashboardLeftMenu nav={nav} edit={true} user={user} userState={userState}/>
        <UserAddresses/>
      </Flex>
      <Footer/>
    </>
    )
}

export default AddressesPage