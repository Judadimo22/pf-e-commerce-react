import React from 'react'
import styles from "./LoadingCards.module.css"
import { Box, Flex } from '@chakra-ui/react'

const LoadingCards = () => {
  return (<>
    <Flex flexDir="column" alignItems="center" className={styles.container}>
        <Box className={styles.box}/>
        <Box className={styles.name}/>
        <Box className={styles.price}/>
    </Flex>
   
    <Flex flexDir="column" alignItems="center" className={styles.container}>
        <Box className={styles.box}/>
        <Box className={styles.name}/>
        <Box className={styles.price}/>
    </Flex>
   
    <Flex flexDir="column" alignItems="center" className={styles.container}>
        <Box className={styles.box}/>
        <Box className={styles.name}/>
        <Box className={styles.price}/>
    </Flex>
   
    <Flex flexDir="column" alignItems="center" className={styles.container}>
        <Box className={styles.box}/>
        <Box className={styles.name}/>
        <Box className={styles.price}/>
    </Flex>
   
    <Flex flexDir="column" alignItems="center" className={styles.container}>
        <Box className={styles.box}/>
        <Box className={styles.name}/>
        <Box className={styles.price}/>
    </Flex>
   
    <Flex flexDir="column" alignItems="center" className={styles.container}>
        <Box className={styles.box}/>
        <Box className={styles.name}/>
        <Box className={styles.price}/>
    </Flex>
   
    </>
  )
}

export default LoadingCards