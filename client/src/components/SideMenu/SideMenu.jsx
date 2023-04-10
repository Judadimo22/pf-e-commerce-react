import { Avatar, Box, Button, Divider, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation, useNavigate  } from "react-router-dom";
import NavItem from "./NavItem";


export function DashboardLeftMenu({ nav,edit,user }) {
  // Verifica el token de autenticación y el rol del usuario
  //como lo hago? xd
  //que dios me guie


  
  const navigate  = useNavigate()
  if ("admin" === "admin") {
    return (
      <>
      <Flex
      minW="350px"
      bgColor="#272727"
      pos="sticky"
      />
      <Flex
      pos="fixed"
      h="720px"
      boxShadow="0 0px 0 0 rgb(0,0,0,0.5)" 
      w="350px"
      flexDir="column"
      justifyContent="space-between"
      bgColor="#272727"
      >
        <Flex
        p="4%"
        flexDir="column"
        w="100%"
        alignItems="flex-start"
        >
            <Flex mt={4} align="center" alignSelf="center" flexDir="column" >
                <Avatar size="md" m={2} >
                  <Image src={user?.picture} />
                </Avatar>
                <Heading as="h3" color="#ffffff" m={2} size="md">{user?.name} {user?.lastname}</Heading>
               <Button
                bgColor="#272727"
                color="#f2f2f2"
                border="1px solid #f2f2f2"
                _hover={{backgroundColor:"#353535"}}
                h="30px"
                w="100px"
                borderRadius={15}
                m={2}
                visibility={edit === true ? "visible":"hidden"}
                >Edit</Button>
            </Flex>

        </Flex>


        <Flex 
            flexDir="column"
            mb={20}
        >
          {
            nav.map(item=>(
              <NavItem key={item.title} icon={item.icon} title={item.title} redirect={item.redirect}/>
            ))
          }
        </Flex>
        <Flex
            justifyContent="center"
            marginBottom="40px"
        >
            <Button
          bgColor="#272727"
          color="#f2f2f2"
          border="1px solid #f2f2f2"
          _hover={{backgroundColor:"#353535"}}
          h="40px"
          w="100px"
          borderRadius={20}
          m={2}
            >Log out</Button>
        </Flex>

      </Flex>
      </>
    );
  } else {
    return (
        navigate("/home")
    );
  }
}