import {
  Flex,
  FormLabel,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import React from "react";

const StockInput = ({ id, content, handleTalleChange,talla, placeHolder }) => {
    console.log(talla);
  return (
    <Flex flexDir="column" mr="9">
      <FormLabel w="100%" h="3" htmlFor={id} textAlign="center" fontSize="14px">
        {content}
      </FormLabel>
      <NumberInput size="md" maxW={16} id={id} min={0}>
        <NumberInputField
          placeholder={placeHolder}
          bgColor="#fff"
          boxShadow="-webkit-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                                    -moz-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
                                    box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);"
          textAlign="center"
          p={0}
          value={talla}
          onChange={(e) => handleTalleChange(content, e.target.value)}
        />
      </NumberInput>
    </Flex>
  );
};

export default StockInput;
