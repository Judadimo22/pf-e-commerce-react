import React, { useEffect } from "react";
import MyProfile from "../../components/UserProfile/MyProfile";
import { useAuth0 } from "@auth0/auth0-react";
import { TbTruckDelivery, TbUserCircle } from "react-icons/tb";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { useParams } from "react-router-dom";
import HomeNavBar from "../../components/NavBar/HomeNavbar";
import { DashboardLeftMenu } from "../../components/SideMenu/SideMenu";

import { Flex } from "@chakra-ui/react";

const UserEditPage = () => {
  const { user, loginWithPopup, isAuthenticated } = useAuth0();
  const { id } = useParams();
  useEffect(() => {
    if (!isAuthenticated) window.location.href = "/home";
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
      <Flex minH="500px">
        <Flex width="100%" justifyContent="center">
          {user ? <MyProfile user={user} id={id} /> : null}
        </Flex>
      </Flex>
    </>
  );
};

export default UserEditPage;
