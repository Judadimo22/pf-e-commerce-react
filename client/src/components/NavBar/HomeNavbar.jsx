import React, { useState, useEffect } from "react";
import style from "./NavBar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/login";
import { createUser, getUserById } from "../../redux/actions";
import SearchBar from "../SearchBar/SearchBar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Image,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo/logoC3.jpeg";
import { Badge, IconButton } from "@mui/material";

const HomeNavBar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, logout } = useAuth0();
  const [infoUser, setInfoUser] = useState({});
  const userState = useSelector((state) => state.user);
  const cartLength = useSelector((state) => state.cartLength);

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
          dispatch(createUser(newUser)).then(
            (e) => (window.location.href = `/user/edit/${e.payload.data._id}`)
          );
        } else {
          setInfoUser(userDb);
        }
        if (!userState.length) dispatch(getUserById(userDb._id));
      });
    }
  }, [user]);
  console.log(cartLength);

  return (
    <>
      <Flex display={{ base: "none", md: "block" }} h="70px" width="100%" />
      <Flex className={style.containerNavBar} position="fixed" zIndex="9999">
        <>
          <Link to={"/home"}>
            <Button background="none" display={{ base: "none", md: "block" }}>
              HOME
            </Button>
          </Link>
        </>

        <Link to="/home">
          <Flex textAlign="center">
            <Image
              boxSize={`70px`}
              borderRadius={`full`}
              src={logo}
              alt={``}
            ></Image>
            <Heading
              textAlign="center"
              position="relative"
              right={{ base: 5, md: 0 }}
              fontWeight={1000}
              fontSize={50}
              fontFamily="Alumni Sans, sans-serif"
            >
              Casual Couture
            </Heading>
          </Flex>
        </Link>
        <Box display={{ base: "none", md: "block" }}>
          <SearchBar />
        </Box>
        <Flex w="8%" justifyContent="space-between">
          {isAuthenticated ? (
            <Menu cursor="pointer">
              <MenuButton>
                <Avatar
                  src={user?.picture}
                  display={{ base: "none", md: "block" }}
                  size="md"
                />
              </MenuButton>
              <MenuList>
                <Link to={`/user/${infoUser._id}`}>
                  <MenuItem>Profile</MenuItem>
                </Link>
                <Link to={`/user/orders/${infoUser._id}`}>
                  <MenuItem>My orders</MenuItem>
                </Link>
                <Link to={`/user/notifications/${infoUser._id}`}>
                  <MenuItem>Notifications</MenuItem>
                </Link>
                {userState.roll === "admin" ? (
                  <Link to={`/admin`}>
                    <MenuItem>Dashboard</MenuItem>
                  </Link>
                ) : null}

                <MenuItem onClick={() => logout()}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <LoginButton />
          )}
          <Link to="/cart">
            <IconButton style={{backgroundColor:"#DAEB0F",color:"#272727"}} aria-label="cart">
              <Badge style={{width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center"}} badgeContent={cartLength} color="secondary">
                <AiOutlineShoppingCart />
              </Badge>
            </IconButton>
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeNavBar;
