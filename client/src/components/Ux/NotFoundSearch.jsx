import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import ClearSearButton from "./ClearSearButton";

const NotFoundSearch = () => {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-around"
      justifySelf="center"
      height="70vh"
      alignItems="center"
    >
      <Heading as="h1" size="3xl" w="auto" textAlign="center">
        There are no products matching the search
      </Heading>
      <ClearSearButton />
    </Flex>
  );
};

export default NotFoundSearch;
