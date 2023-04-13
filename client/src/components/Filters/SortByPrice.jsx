import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortAscending, sortDescending } from "../../redux/actions";
import { Stack, Radio, RadioGroup, VStack, Text, Flex, Container, Tabs, TabList, Tab } from "@chakra-ui/react";

const SortByPrice = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    if (e.target.value === "asc") {
      dispatch(sortAscending());
    } else if (e.target.value === "desc") {
      dispatch(sortDescending());
    }
  };

  return (
    <>
      <Text fontFamily="Jaldi" fontSize="2rem" fontWeight="bold" pt="0.5rem">
      Sort
      </Text>
      <Tabs variant='unstyled' align='start' defaultIndex="" justifyContent="flex-start">
  <TabList flexDir="column" >
          <Tab _selected={{ color: '#272727', bg: '#DAEB0F' }} onClick={handleChange} value="asc" display="flex" justifyContent="flex-start" >Higher price</Tab>
          <Tab _selected={{ color: '#272727', bg: '#DAEB0F' }} onClick={handleChange} value="desc" display="flex" justifyContent="flex-start" >Lower price</Tab>
  </TabList>
  </Tabs>
    </>
  );
};

export default SortByPrice;
