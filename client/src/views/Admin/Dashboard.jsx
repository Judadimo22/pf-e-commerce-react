import React, { useEffect, useState } from "react";
import { DashboardLeftMenu } from "../../components/SideMenu/SideMenu";
import AdminNavBar from "../../components/NavBar/AdminNavBar";
import { TbDeviceDesktopAnalytics, TbShirt, TbTruck } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import HomeNavBar from "../../components/NavBar/HomeNavbar";
import { getUserById } from "../../redux/actions";
import Footer from "../../components/Footer/Footer";
import { Flex, Box, Text, Heading } from '@chakra-ui/react';
import {GraficoTrademarks } from '../../components/Dashboard/GraficoTrademarks';
import { GraficoTypes } from '../../components/Dashboard/GraficoTypes';
import { GraficoCategories } from '../../components/Dashboard/GraficoCategories';
// import GraficoLineas from '../../components/Dashboard/GraficoLineas';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, logout } = useAuth0();
  const [infoUser, setInfoUser] = useState({});
  const userState = useSelector((state) => state.user);

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
          if (!userState.length) dispatch(getUserById(userDb._id));
        });
    }
  }, [user]);
  if (userState.roll !== "admin") window.location.href = "/home";

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
        <Flex wrap='wrap' minH='90vh'>
        <DashboardLeftMenu nav={nav} user={user} userState={userState}/>
        <Flex>
        <Box pl='10%'>
          <Heading pt={4} pb={2}>
          Stadistics
          </Heading>
          <Text>
          A page that assists in the identification of patterns and insights to help with decision-making and performance optimization.
          </Text>
        </Box>
        </Flex>
        
        <Box flexDirection='column' pl='25%' >
        <Box display='flex' justifyContent='space-between' mx='auto' pt={5}>
        <Box mx={5} w={560} h={260}  justifyContent='center' display='flex' >

          <GraficoCategories/>
        </Box>
        <Box mx={5} w={560}>
          <GraficoTypes/>
          </Box> 
        </Box>
        <Box mx='auto' pt={5}>
          <Flex  h={285} justifyContent='center' mb={10}>
          <GraficoTrademarks/>
          </Flex>
        </Box>
        </Box>

        </Flex>
      </>
  )
};

export default Dashboard
