import React from 'react'
import LoadingText from './LoadingText'
import { Box, Flex, GridItem, Heading, Icon, Text } from '@chakra-ui/react'

const InfoCard = ({header,info,icon, conditional}) => {
  console.log(conditional,info);
  return (
  <GridItem colSpan={3} bg='white' borderRadius="15px" boxShadow="1px 1px 5px 1px rgba(0,0,0,0.25);" p="30px 30px" rowSpan={2} >
    <Flex justifyContent="space-between">
      <Box>
        <Heading  color="#272727" fontFamily="Jaldi">{header}</Heading>
        <Text>{!conditional ? info :<LoadingText/>}</Text>
      </Box>
      <Icon boxSize={9} as={icon}/>
    </Flex>
  </GridItem>
  )
}

export default InfoCard