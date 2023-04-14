import React, {useState, useEffect} from "react";
import style from './NavBar.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton} from '../Login/login'
import { createUser, getUserById } from "../../redux/actions";
import SearchBar from '../SearchBar/SearchBar'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Avatar, Box, Button, Flex, Icon, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
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
            if(!userState.length) dispatch(getUserById(userDb._id))
          });
        }

      }, [user]);
      console.log(userState.roll);
    
    return(
        <>
        <Flex display={{base:'none' ,md:'block'}} h="70px" width="100%"/>
        <Flex className={style.containerNavBar} position="fixed" zIndex="9999">
        <>
            <Link to={'/home'}><Button display={{base:'none', md:'block'}}>HOME</Button></Link>
            <Link to={'/about'}><Button display={{base:'none', md:'block'}}>ABOUT</Button></Link>
            <Link to={'/contact'}><Button display={{base:'none', md:'block'}}>CONTACT</Button></Link>
           
              
            </>




            <Link to="/home">
                <Box textAlign='center'>
                  <Text textAlign="center" position='relative' right={{base:5, md:0}} fontWeight={1000} fontSize={50} fontFamily="Alumni Sans, sans-serif">Ecommerce</Text>
                </Box>
            </Link>
            <Box display={{base:'none', md:'block'}}>
            <SearchBar/>
            </Box>
            <Flex w="8%" justifyContent="space-between">
                {isAuthenticated ?(
                <Menu cursor="pointer" >
                    <MenuButton >
                        <Avatar src={user?.picture} display={{base:'none' ,md:'block'}}  size="md"/>
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

                    <MenuItem onClick={()=>logout()}>Logout</MenuItem>
                </MenuList>
                </Menu>
                ):<LoginButton/>}
                <Box >
                <Link to='/cart'>
                <Icon display={{base:'none' ,md:'block'}}  bgColor="#f2f2f2" cursor="pointer" boxSize={12} borderRadius={50} p={2.5} justifyContent="center" alignItems="center"  as={AiOutlineShoppingCart}/> 
                </Link>
                </Box>
            </Flex>
        </Flex>
        </>
    )
};

export default HomeNavBar;
