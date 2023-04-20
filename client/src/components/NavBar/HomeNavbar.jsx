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
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import logo from "../../assets/logo/logoC3.jpeg";
import Filtrers from "../Filters/Filtrers";
import { Badge, IconButton } from "@mui/material";

const HomeNavBar = () => {
  const location = useLocation();
  const search = location.search;
  const searchParams = new URLSearchParams(search);
  let id = searchParams.get("payment_id");
  const dispatch = useDispatch();
  const { isAuthenticated, user, logout } = useAuth0();
  const [infoUser, setInfoUser] = useState({});
  const userState = useSelector((state) => state.user);
  const cartLength = useSelector((state) => state.cartLength);

  // const orderId = {
  //   id: id,
  // };

  if (id) {
    const fetchOrder = async () => {
      const order = await axios.post(`https://backend-pf-uh1o.onrender.com/feedback`, {
        id,
      });

      const orden = await order.json();
    };

    fetchOrder();
  }

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

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

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
          <Link to="/cart">
            <Box display={{base:'none', md:'block'}}>
            <IconButton display={{base:'none',md:'block'}} style={{backgroundColor:"#DAEB0F",color:"#272727"}} aria-label="cart">
              <Badge display={{base:'none',md:'block'}} style={{width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center"}} badgeContent={cartLength} color="secondary">
                <AiOutlineShoppingCart />
              </Badge>
            </IconButton>
            </Box>
          </Link>
        </Flex>
        <Box display={{base:'block',md:'none'}}>
      <Button ref={btnRef} background='none' onClick={onOpen}>
        <AiOutlineMenu/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        w={200}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Link to='/cart'><Button w='full' mt={5}>Go to cart</Button></Link>
            <SearchBar/>
            <Filtrers/> 
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
      </Flex>
    </>
  );
};

export default HomeNavBar;
