import { Box, Flex, TableContainer } from "@chakra-ui/react";
import { DashboardLeftMenu } from "../../components/SideMenu/SideMenu";
import AdminNavBar from "../../components/NavBar/AdminNavBar";
import React, { useEffect, useState } from "react";
import { TbDeviceDesktopAnalytics, TbShirt, TbTruck } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import AdmProduct from "../../components/Dashboard/AdmProduct";
import { getUserById } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
import Footer from "../../components/Footer/Footer";

const ProductsAdmin = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, logout } = useAuth0();
  const [infoUser, setInfoUser] = useState({});
  const userState = useSelector((state) => state.user);

  useEffect(() => {
    if (user && isAuthenticated) {
      axios.get("/users").then((element) => {
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
          <Flex
            width={{base:'100%',md:"80%"}}
            borderRadius={{base:0,md:"20px"}}
            p={{base:0,md:"10px"}}
            bgColor={{base:'none',md:"#ffffff"}}
            m="40px 0"
            boxShadow={{base:'none',md:'2xl'}}
          >
            <TableContainer w="100%">
              <AdmProduct />
            </TableContainer>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default ProductsAdmin;
