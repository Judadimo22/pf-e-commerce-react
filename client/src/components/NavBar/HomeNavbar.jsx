import React, { useState, useEffect } from "react";
import style from "./NavBar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/login";
import { createUser, getUserById } from "../../redux/actions";
import SearchBar from "../SearchBar/SearchBar";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
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
  Heading,IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo/logoC3.jpeg";

const HomeNavBar = () => {
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
          window.location.href = `/user/${userDb._id}`
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
      <Flex display={{ base: "none", md: "block" }}  h="70px" width="100%"  />
      <Flex className={style.containerNavBar} position="fixed" zIndex="9999" pl={{base:0, md:190}}>
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
              boxSize={{base:10,md:`70px`}
             } position='relative' left={{base:3, md:0}} borderRadius={`full`}
              src={logo}
              alt={``}
            ></Image>
            <Heading
              textAlign="center"
              position="relative"
              left={{ base: 4, md:0}} top={{base:1.2, md: 0 }}
              fontWeight={1000}
              fontSize={{base:30,md:50}} alignItems='center'
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
                  display={{ base: "block", md: "block" }}
                 position='relative' left={{base:5, md:0}}  size={{base:25,md:"md"}}
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
          <Box>
            <Link to="/cart">
              <Icon
                display={{ base: "none", md: "block" }}
                bgColor="white"
                cursor="pointer"
                boxSize={12}
                borderRadius={50}
                p={2.5}
                justifyContent="center"
                alignItems="center"
                as={AiOutlineShoppingCart}
              />
            </Link>
          </Box>
        </Flex>
        <Box background='none' border='none'>
          <Menu background='none' border='none' zIndex={400}>
            <MenuButton
            display={{base:'block', md:'none'}}
            as={IconButton}
            aria-label='Options'
            icon={<AiOutlineMenu />}
           variant='outline'
           background='white'
           border='none'
           fontSize={20}
           _active={{background:'none'}}
           />
          <MenuList zIndex={300}>
            <MenuItem mb={3}>
            <SearchBar/>
            </MenuItem>
            <Link to='/home'>
            <MenuItem>
            Home
            </MenuItem>
            </Link>
            <Link to='/cart'>
            <MenuItem>
          <Box display='flex'>
            <Text mr={2}>Cart</Text> 
            <Icon fontSize={21} position='relative' top={1}><AiOutlineShoppingCart /></Icon>
          </Box>
          </MenuItem>
            </Link>
         </MenuList>
       </Menu>
      </Box>

      </Flex>
    </>
  );
};

export default HomeNavBar;
