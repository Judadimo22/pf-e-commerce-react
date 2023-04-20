import { Box, Flex, TableContainer } from "@chakra-ui/react";
import { DashboardLeftMenu } from "../../components/SideMenu/SideMenu";
import AdminNavBar from "../../components/NavBar/AdminNavBar";
import React, { useEffect, useState } from "react";
import { TbDeviceDesktopAnalytics, TbShirt, TbTruck } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { getUserById } from "../../redux/actions";
import AdmUsers from "../../components/Dashboard/AdmUsers";
import SearchUserNavBar from "../../components/NavBar/SearchUserNavBar";
import Footer from "../../components/Footer/Footer";

const UsersPage = () => {
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
  const nav = [
    {
      icon: TbDeviceDesktopAnalytics,
      title: "Dashboard",
      redirect: "/admin",
    },
    {
      icon: TbShirt,
      title: "Products",
      redirect: "/admin/products",
    },
    {
      icon: FiUsers,
      title: "Users",
      redirect: "/admin/users",
    },
    {
      icon: TbTruck,
      title: "Orders",
      redirect: "/admin/orders",
    },
  ];
  if (userState.roll !== "admin") window.location.href = "/home";

  return (
    <>
      <SearchUserNavBar />
      <Flex flexWrap={{base:'wrap', md:'nowrap'}} overflowX='hidden'>
        <DashboardLeftMenu nav={nav} user={user} />
        <Flex width="100%" justifyContent="center">
          <Flex
            width={{base:'100%',md:"80%"}}
            borderRadius={{base:0,md:"20px"}}
            p={{base:0,md:"10px"}}
            bgColor={{base:'none',md:"#ffffff"}}
            m="40px 0"
            boxShadow={{base:'none',md:'2xl'}}
          >
            <TableContainer w="100%">
              <AdmUsers />
            </TableContainer>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default UsersPage;
