import React, { useEffect, useState } from "react";
import MyProfile from "../../components/UserProfile/MyProfile";
import { useAuth0 } from "@auth0/auth0-react";
import { TbTruckDelivery, TbUserCircle } from "react-icons/tb";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { useParams } from "react-router-dom";
import HomeNavBar from "../../components/NavBar/HomeNavbar";
import { DashboardLeftMenu } from "../../components/SideMenu/SideMenu";

import { Flex } from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import axios from "axios";
import { getUserById } from "../../redux/actions";

const UserEditPage = () => {
  const { user, loginWithPopup, isAuthenticated } = useAuth0();
  const { id } = useParams();
  

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
            if (!userState.length) dispatch(getUserById(userDb._id));s
          });
      }
    }, [user]);
    if (userState.active === "invalid") window.location.href = "/banned";
  return (
    <>
      <HomeNavBar />
      <Flex minH="500px" mt={{base:'90px', md:0}}>
        <Flex width="100%" justifyContent="center">
          {user ? <MyProfile user={user} id={id} /> : null}
        </Flex>
      </Flex>
      <Footer/>
    </>
  );
};

export default UserEditPage;
