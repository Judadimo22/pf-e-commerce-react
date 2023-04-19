import OrderTrackingContainer from "../../components/Dashboard/AdmOrders";
import { Box, Flex, TableContainer } from "@chakra-ui/react";
import { DashboardLeftMenu } from "../../components/SideMenu/SideMenu";
import AdminNavBar from "../../components/NavBar/AdminNavBar";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { getUserById } from "../../redux/actions";
import HomeNavBar from "../../components/NavBar/HomeNavbar";
import { useParams } from "react-router-dom";
import { TbTruckDelivery, TbUserCircle } from "react-icons/tb";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import Footer from "../../components/Footer/Footer";

const UserOrdersPage = () => {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useAuth0();
  useEffect(() => {
    if (!userState.length) dispatch(getUserById(id));
  }, []);

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
      <HomeNavBar />
      <Flex>
        <DashboardLeftMenu
          nav={nav}
          edit={true}
          user={user}
          userState={userState}
        />
        <Flex width="100%" justifyContent="center">
          <Flex
            width="80%"
            minH="630px"
            borderRadius="20px"
            p="10px"
            bgColor="#ffffff"
            m="40px 0"
            boxShadow="-webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);"
          >
            <TableContainer w="100%">
              <OrderTrackingContainer />
            </TableContainer>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default UserOrdersPage;
