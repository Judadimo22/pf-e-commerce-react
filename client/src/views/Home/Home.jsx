import React, { useEffect, useState } from "react";
import { ListCard } from "../../components/ListCards/ListCards";
import Filtrers from "../../components/Filters/Filtrers";
import style from './Home.module.css'
import HomeNavBar from "../../components/NavBar/HomeNavbar";
import Footer from "../../components/Footer/Footer"
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getUserById, setSearchInput } from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setSearchInput(""));
    },[])

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
              if (!userState.length) dispatch(getUserById(userDb._id));s
            });
        }
      }, [user]);
      if (userState.active === "invalid") window.location.href = "/banned";
    return(
        <Box>
            <HomeNavBar/>
            <Box display={{base:'block' ,md:'flex'}} justifyContent={{base:'center' ,md:'space-between'}} mx={20}>
                <Box mt={{base:20,md:10}} display={{base:'none' , md:'block'}}>
                <Filtrers/>
                </Box>
                <Box mb={10} mt={{base:20,md:10}} >
                <ListCard/>
                </Box>
            </Box>
            <Footer/>
        </Box>
    )
};

export default Home


