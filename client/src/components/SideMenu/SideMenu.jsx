import { Avatar, Box, Button, Divider, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation, useNavigate  } from "react-router-dom";
import NavItem from "./NavItem";
import { useAuth0 } from "@auth0/auth0-react";


export function DashboardLeftMenu({ nav,edit,user,userState, id }) {

  const {logout} = useAuth0()
  const location = useLocation().pathname
  console.log(user);
  console.log(userState);

  
  const navigate  = useNavigate()
  if ("admin" === "admin") {
    return (
      <>
      <Flex
      minW={{base:'auto',md:"350px"}}
      bgColor="#272727"
      pos={{base:'relative',md:"sticky"}}
      />
      <Flex
      pos={{base:'relative',md:"fixed"}}
      h={{base:'400px',md:"720px"}}
      boxShadow="0 0px 0 0 rgb(0,0,0,0.5)" 
      w={{base:'full' ,md:"350px"}}
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
            <Flex mt={4} align="center" alignSelf="center" flexDir={{base:'row', md:"column"}} >
                <Avatar size="md" m={2} >
                  <Image src={user?.picture} />
                </Avatar>
                <Heading as="h3" color="#ffffff" m={2} size="md">{user?.name} {user?.lastname}</Heading>
                <Link to={`/user/edit/${id}`}>
                  <Button
                    border="1px solid #f2f2f2"
                    _hover={{backgroundColor:"#DEE965", color:"#272727"}}
                    h="30px"
                    w="100px"
                    borderRadius={15}
                    m={2}
                    visibility={edit === true ? "visible":"hidden"}
                    color={location==="/user/edit" ? "#272727" : "#f2f2f2"}
                    bgColor={location==="/user/edit" ? "#DAEB0F" : "#272727"}
                    >Edit</Button>
                </Link>
            </Flex>

        </Flex>


        <Box
            flexDir={{base:'row', md:"column"}}
            display={{base:'flex',md:'flex'}}
            flexWrap='wrap'
            ml={{base:5, md:0}}
            justifyContent={{base:'space-between',md:'left'}}
            mb={20}
        >
          {
            nav.map(item=>(
              <NavItem key={item.title} icon={item.icon} title={item.title} redirect={item.redirect}/>
            ))
          }
        </Box>
        <Flex
            justifyContent="center"
            marginBottom="40px"
        >
        <Button display={{base:'none', md:'block'}}
          bgColor="#272727"
          color="#f2f2f2"
          border="1px solid #f2f2f2"
          _hover={{backgroundColor:"#353535"}}
          h="40px"
          w="100px"
          borderRadius={20}
          m={2}
          onClick={logout}
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