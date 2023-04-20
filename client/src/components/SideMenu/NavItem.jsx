import { Flex, Icon, Menu, MenuButton, Text } from '@chakra-ui/react'
import React from 'react'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { Link, useLocation } from 'react-router-dom'

const NavItem = ({title,icon,redirect}) => {

    const location =  useLocation().pathname
  
  return (
    <Flex
        mt={30}
        flexDir={{base:'row',md:"column"}}
        w="100%"
        alignItems="center"
        flexWrap='wrap'
    >
        <Menu
        
        >
            <Link to={redirect}>
                <MenuButton>
                    <Flex 
                        color={location===redirect ? "#272727" : "#ffffff"}
                        bgColor={location===redirect ? "#DAEB0F" : "#272727"}
                        width={"140px"}
                        height="35px"
                        alignItems="center"
                        borderRadius={15}
                        flexWrap='wrap'
                    >
                        <Icon marginLeft="10px" as={icon} mr={3}/>
                        <Text>{title}</Text>
                    </Flex>
                </MenuButton>
            </Link>
        </Menu>

    </Flex>
  )
}

export default NavItem