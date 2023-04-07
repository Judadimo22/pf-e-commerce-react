import { Flex, Icon, Menu, MenuButton, Text } from '@chakra-ui/react'
import React from 'react'
import { TbDeviceDesktopAnalytics } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const NavItem = ({title,icon}) => {
  return (
    <Flex
        mt={30}
        flexDir="column"
        w="100%"
        alignItems="center"
    >
        <Menu
        
        >
            <Link>
                <MenuButton>
                    <Flex 
                        color="#ffffff"
                        width="150px"
                        alignItems="center"
                    >
                        <Icon as={icon} mr={5}/>
                        <Text>{title}</Text>
                    </Flex>
                </MenuButton>
            </Link>
        </Menu>

    </Flex>
  )
}

export default NavItem