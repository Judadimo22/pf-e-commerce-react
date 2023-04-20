import React, { useEffect } from "react";
import { ListCard } from "../../components/ListCards/ListCards";
import Filtrers from "../../components/Filters/Filtrers";
import style from './Home.module.css'
import HomeNavBar from "../../components/NavBar/HomeNavbar";
import Footer from "../../components/Footer/Footer"
import { Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setSearchInput } from "../../redux/actions";
const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setSearchInput(""));
    },[])
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


