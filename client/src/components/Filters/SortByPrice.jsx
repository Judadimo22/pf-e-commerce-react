import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortAscending, sortDescending } from "../../redux/actions";
import { Stack, Radio, RadioGroup, VStack, Text, Flex, Container } from "@chakra-ui/react";

const SortByPrice = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(null);

  const handleChange = (value) => {
    setValue(value);
    if (value === "asc") {
      dispatch(sortAscending());
    } else if (value === "desc") {
      dispatch(sortDescending());
    }
  };

  return (
    <>
      <Text fontFamily="Jaldi" fontSize="1.95rem" fontWeight="bold" pt="1rem">SORT</Text>
      <VStack alignItems="flex-start">
        <RadioGroup onChange={handleChange} value={value} isInline={false}>
          <Stack direction="column" spacing={1}>
            <Flex>
              <Text fontFamily="'Jaldi', sans-serif" fontSize="1.2rem">Higher price</Text>
              <Radio value="asc" pl=".5rem" size="md" colorScheme="gray"></Radio>
            </Flex>
            <Flex>
              <Text fontFamily="'Jaldi', sans-serif" fontSize="1.2rem">Lower price</Text>
              <Radio value="desc" pl=".8rem" size="md" colorScheme="gray"></Radio>
            </Flex>
          </Stack>
        </RadioGroup>
      </VStack>
    </>
  );
};

export default SortByPrice;
