import React, {useState, useEffect} from "react";
import style from './NavBar.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton} from '../Login/login'
import { createUser } from "../../redux/actions";
import SearchBar from '../SearchBar/SearchBar'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Avatar, Box, Button, Flex, Icon, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";







const HomeNavBar = () => {
    const dispatch = useDispatch(); 
    const {isAuthenticated, user,logout} = useAuth0();
      const [infoUser, setInfoUser] = useState({});
    
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
              return false;
            }
          });
        }
      }, [user]);
    
    return(
        <>
        <Flex h="70px" width="100%"/>
        <Flex className={style.containerNavBar} position="fixed" zIndex="9999">



        <>
              <a href="/home"><button>HOME</button></a>
            <a href="/about"><button>ABOUT</button></a>
            <a href="/contact"><button>CONTACT</button></a>
           
              
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
                    <Link to={`/user/${ user.id ? user.id:"642e55eb8debb5e04fd0ff37"}`}>
                        <MenuItem>Profile</MenuItem>
                    </Link>
                    <Link to={`/user/${ user.id ? user.id:"642e55eb8debb5e04fd0ff37"}/orders`}>
                        <MenuItem>My orders</MenuItem>
                    </Link>
                    <Link to={`/user/${ user.id ? user.id:"642e55eb8debb5e04fd0ff37"}/notifications`}>
                        <MenuItem>Notifications</MenuItem>
                    </Link>
                    <MenuItem onClick={()=>logout()}>Logout</MenuItem>
                </MenuList>
                </Menu>
                ):<LoginButton/>}
                <Icon bgColor="#f2f2f2" cursor="pointer" boxSize={12} borderRadius={50} p={2.5} justifyContent="center" alignItems="center"  as={AiOutlineShoppingCart}/> 
            </Flex>
        </Flex>
        </>
    )
};

export default HomeNavBar;
