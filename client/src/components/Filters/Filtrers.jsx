import React from "react";
import ByCategorie from "./ByCategorie";
import ByType from "./ByType";
import ByTrademark from "./ByTrademark";
import SortByPrice from "./SortByPrice";
import { Box, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Filtrers = () => {
  return (
    <Flex flexDir="column">
      <div>
        <ByCategorie />
      </div>
      <Box
        borderBottom="2px"
        borderColor="#b5babb"
        borderRadius="full"
        width="100%"
        margin="auto"
      />
      <div>
        <ByTrademark />
      </div>
      <Box
        borderBottom="2px"
        borderColor="#b5babb"
        borderRadius="full"
        width="100%"
        margin="auto"
      />
      <div>
        <ByType/>
      </div>
      <Box
        borderBottom="2px"
        borderColor="#b5babb"
        borderRadius="full"
        width="100%"
        margin="auto"
      />
      <div className="filter-sort-bytype"> 
        <SortByPrice />
      </div>
    </Flex>
  );
};

export default Filtrers;
