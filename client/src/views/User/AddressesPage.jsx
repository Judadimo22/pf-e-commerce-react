import React, { useEffect, useState } from 'react'
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
import axios from 'axios';

const AddressesPage = () => {
    const userState = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const { id } = useParams();
    const {isAuthenticated, user } = useAuth0()
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

      const [infoUser, setInfoUser] = useState({});
    
      useEffect(() => {
          if (user && isAuthenticated) {
            axios
              .get("https://backend-pf-uh1o.onrender.com/users")
              .then((element) => {
                const userDb = element.data.find(
                  (element) => element.email === user.email
                );
                if (!userDb) {
                  const newUser = {
                    name: user.given_name,
                    lastname: user.family_name,
                    email: user.email,
                  };
      
                  console.log(newUser);
                  dispatch(createUser(newUser));
                } else {
                  setInfoUser(userDb);
                }
                if (!userState.length) dispatch(getUserById(userDb._id));s
              });
          }
        }, [user]);
        if (userState.active !== "valid") window.location.href = "/banned";
  
    return (
      <>
      <HomeNavBar/>
      <Flex mt={{base:10, md:0}} display='flex' minH="91.1vh" flexWrap={{base:'wrap', md:'nowrap'}}>
        <DashboardLeftMenu nav={nav} edit={true} user={user} userState={userState}/>
        <UserAddresses/>
      </Flex>
      <Footer/>
    </>
    )
}

export default AddressesPage