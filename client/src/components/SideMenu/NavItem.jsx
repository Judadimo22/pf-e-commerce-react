import { Flex, Icon, Menu, MenuButton, Text } from '@chakra-ui/react'
import React from 'react'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'

const NavItem = ({title,icon,redirect}) => {

    const location =  useLocation().pathname

    console.log(location);
  
  return (
    <Flex
        mt={30}
        flexDir="column"
        w="100%"
        alignItems="center"
    >
        <Menu
        
        >
            <Link to={redirect}>
                <MenuButton>
                    <Flex 
                        color={location===redirect ? "#272727" : "#ffffff"}
                        bgColor={location===redirect ? "#DAEB0F" : "#272727"}
                        width="135px"
                        height="35px"
                        alignItems="center"
                        borderRadius={15}
                    >
                        <Icon marginLeft="12px" as={icon} mr={4}/>
                        <Text>{title}</Text>
                    </Flex>
                </MenuButton>
            </Link>
        </Menu>

    </Flex>
  )
}

export default NavItem