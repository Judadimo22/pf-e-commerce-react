import { Box, Image, Text, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import mainImage from '../../assets/main_landing.jpeg'
import imageRegister from '../../assets/image_register.jpeg'
import HomeNavBar from "../NavBar/HomeNavbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClothes } from "../../redux/actions";
import { ProductLanding } from "./ProductLanding";

const NewLanding = () => {

    const [products, setProducts] = useState([]);
    const [sortType, setSortType] = useState("asc");
    const filteredProducts = useSelector((state) => state.ClothesCopy)
    const resultsPerPage = 3
    const numberOfResults = filteredProducts.length
    const numberOfPages = numberOfResults ? Math.ceil(numberOfResults / resultsPerPage) : 0
    const [pageNumber, setPageNumber] = useState(2)
    const pageSliceStart = pageNumber === 1 ? 0 : (pageNumber - 1) * resultsPerPage
    const pageSliceEnd = pageNumber * resultsPerPage
  
    const dispatch = useDispatch()
    useEffect(() => {
      setPageNumber(1)
    }, [numberOfResults])
    useEffect(() => {
      getClothes()
      const getData = async ( ) => {
        return dispatch(getClothes())
      }
      
    
      setProducts(getData());
    }, []);
    return(
        <Box w='full'>
            <HomeNavBar/>
            <Box h={800}>
            <Image w='100' h={800} objectFit='cover' src={mainImage}/>
            <Text textAlign='center' position='relative' bottom={500} fontSize={200} color='#DAEB0F' textShadow='2xl'>Be Yourself</Text>
            </Box>
            <Box>
                <Text textAlign='center' fontSize={50} mt={10} mb={5}>Don’t miss our <strong>latest trends</strong></Text>
            </Box>
            <Box  textAlign='center'>
                <Link to={'/home'}><Button  backgroundColor='#272727' color='#F2F2F2' mb={10} py={0} px={5} _hover={{color:'white'}}>See more</Button></Link>
            </Box>
            <Box display='flex' justifyContent='center'>
        {
          filteredProducts.length
            ? filteredProducts.slice(pageSliceStart, pageSliceEnd).map(product => (<ProductLanding key={product._id} product={product} />))
            : (
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              </div>
            )
        }
      </Box>

      <Box display='flex' mx={300} justifyContent='center' borderRadius={10} backgroundColor='#272727' mb={50}>
        <Image  w='50%' src={imageRegister}></Image>
        <Box w='50%' textAlign='left' alignItems='center' my='auto' mx={20} position='relative' bottom={8}>
            <Text mb={5} fontSize={40} color='#DAEB0F'>The latest trends</Text>
            <Text>Don’t miss all of our products and all our offers </Text>
            <Button>Register</Button>
        </Box>
      </Box>
        </Box>
    )
};

export default NewLanding;