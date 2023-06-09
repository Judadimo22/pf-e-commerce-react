import React, { useEffect } from 'react'
import HomeNavBar from '../../components/NavBar/HomeNavbar'
import { DashboardLeftMenu } from '../../components/SideMenu/SideMenu'
import { TbRuler, TbTruckDelivery, TbUserCircle } from 'react-icons/tb'
import { HiOutlineLocationMarker, HiOutlineMail } from 'react-icons/hi'
import { Flex } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserById } from '../../redux/actions'
import UserInfo from '../../components/UserInfo/userInfo'
import MyCloth from '../../components/UserProfile/MyCloth'
import MyProfile from '../../components/UserProfile/MyProfile'
import { useAuth0 } from '@auth0/auth0-react'
import Footer from '../../components/Footer/Footer'
import  VistasNotificaciones from '../../components/Notificaciones/VistasNotificaciones'

const UserNotification = () => {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useAuth0();
  useEffect(() => {
    if (!userState.length) dispatch(getUserById(id));
  }, []);
  console.log(user);
  const nav = [
    {
      icon: TbUserCircle,
      title: "General",
      redirect: `/user/${id}`,
    },
    {
      icon: TbTruckDelivery,
      title: "My orders",
      redirect: `/user/orders/${id}`,
    },
    {
      icon: HiOutlineMail,
      title: "Notifications",
      redirect: `/user/notifications/${id}`,
    },
    {
      icon: HiOutlineLocationMarker,
      title: "Addresses",
      redirect: `/user/addresses/${id}`,
    },
  ];

  return (
    <>
    <HomeNavBar/>
    <Flex minH="91.1vh">
      <DashboardLeftMenu nav={nav} edit={true} user={user} userState={userState} id={id}/>
      <VistasNotificaciones/>
    </Flex>
    <Footer/>
  </>
  )
}

export default UserNotification