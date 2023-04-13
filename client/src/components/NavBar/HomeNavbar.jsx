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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const HomeNavBar = () => {
    const dispatch = useDispatch(); 
    const {isAuthenticated, user,logout} = useAuth0();
      const [infoUser, setInfoUser] = useState({});
      const userState = useSelector(state=>state.user)

    
      useEffect(() => {
        if (user && isAuthenticated) {
          axios.get("http://localhost:3001/users").then((element) => {
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
            if(!userState.length) dispatch(getUserById(userDb._id))
          });
        }
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
  console.log(userState.roll);

  return (
    <>
      <Flex h="70px" width="100%" />
      <Flex className={style.containerNavBar} position="fixed" zIndex="9999">
        <>

        <Flex h="70px" width="100%"/>
        <Flex className={style.containerNavBar} position="fixed" zIndex="9999">



        <>
            <Link to={'/home'}><button>HOME</button></Link>
            <Link to={'/about'}><button>ABOUT</button></Link>
            <Link to={'/contact'}><button>CONTACT</button></Link>
           
              
            </>




            <Link to="/home">
                <div className={style.containerTitle}>
                <Text sx={{fontSize: "50px",fontFamily:"Alumni Sans, sans-serif",fontWeight:"1000",marginLeft:"40px"}} >Ecommerce</Text>
                </div>
            </Link>
            <SearchBar/>
            <Flex w="8%" justifyContent="space-between">
                {isAuthenticated ?(
                <Menu cursor="pointer">
                    <MenuButton >
                        <Avatar src={user?.picture}  size="md"/>
                    </MenuButton>
                <MenuList >
                    <Link to={`/user/${infoUser._id}`}>
                        <MenuItem>Profile</MenuItem>
                    </Link>
                    <Link to={`/user/${infoUser._id}/orders`}>
                        <MenuItem>My orders</MenuItem>
                    </Link>
                    <Link to={`/user/${infoUser._id}/notifications`}>
                        <MenuItem>Notifications</MenuItem>
                    </Link>
                    {
                      userState.roll === "admin" ? 
                      (<Link to={`/admin`}>
                        <MenuItem>Dashboard</MenuItem>
                    </Link>) : null
                    }

          <Link to={"/home"}>
            <button>HOME</button>
          </Link>
          <Link to={"/about"}>
            <button>ABOUT</button>
          </Link>
          <Link to={"/contact"}>
            <button>CONTACT</button>
          </Link>
        </>


        <Link to="/home">
          <div className={style.containerTitle}>
            <Text
              sx={{
                fontSize: "50px",
                fontFamily: "Alumni Sans, sans-serif",
                fontWeight: "1000",
                marginLeft: "40px",
              }}
            >
              Ecommerce
            </Text>
          </div>
        </Link>
        <SearchBar />
        <Flex w="8%" justifyContent="space-between">
          {isAuthenticated ? (
            <Menu cursor="pointer">
              <MenuButton>
                <Avatar src={user?.picture} size="md" />
              </MenuButton>
              <MenuList>
                <Link to={`/user/${infoUser._id}`}>
                  <MenuItem>Profile</MenuItem>
                </Link>
                <Link to={`/user/${infoUser._id}/orders`}>
                  <MenuItem>My orders</MenuItem>
                </Link>
                <Link to={`/user/${infoUser._id}/notifications`}>
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
          <Link to={`/cart`}>
            <Icon
              bgColor="#f2f2f2"
              cursor="pointer"
              boxSize={12}
              borderRadius={50}
              p={2.5}
              justifyContent="center"
              alignItems="center"
              as={AiOutlineShoppingCart}
            />
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeNavBar;
