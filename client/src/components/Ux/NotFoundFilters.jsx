import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import ClearFilButton from '../Filters/ClearFilButton'

const NotFoundFilters = () => {
  return (
    <Flex flexDir="column" justifyContent="space-around" justifySelf="center" height="70vh" alignItems="center">
        <Heading as='h1' size="3xl" w="auto" textAlign="center">There are no products matching the filters</Heading>
        <ClearFilButton/>
    </Flex>
  )
}

export default NotFoundFilters