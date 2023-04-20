import React, { useEffect, useState } from "react";
import { DashboardLeftMenu } from "../../components/SideMenu/SideMenu";
import AdminNavBar from "../../components/NavBar/AdminNavBar";
import { Flex, TableContainer } from "@chakra-ui/react";
import { TbDeviceDesktopAnalytics, TbShirt, TbTruck } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import UserEdit from "../../components/UserEdit/UserEdit";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

const UserEditsPage = () => {
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

  return (
    <>
      <AdminNavBar />
      <Flex flexWrap={{base:'wrap', md:'nowrap'}} overflowX='hidden'>
        <DashboardLeftMenu nav={nav} user={user} userState={userState} />
        <Flex width="100%" justifyContent="center">
          <Flex width="80%" p="10px" m="40px 0" h="100%">
            <TableContainer w="100%">
              <UserEdit />
            </TableContainer>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default UserEditsPage;
