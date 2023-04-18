import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  GridItem,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";

const AddAddressForm = ({ input, setInput, setIsError, isError }) => {
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    if (e.target.value == "") {
      setIsError({
        ...isError,
        [e.target.name]: true,
      });
    } else {
      setIsError({
        ...isError,
        [e.target.name]: false,
      });
    }
  };

  return (
    <>
      <GridItem colSpan={3} rowSpan={1}>
        <FormControl mb="20px" isInvalid={isError.country}>
          <FormLabel>Country</FormLabel>
          <Input
            type="text"
            name="country"
            bgColor="#fff"
            value={input.country}
            boxShadow="-webkit-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
            -moz-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
            box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);"
            onChange={handleInputChange}
          />
          {!isError.country ? null : (
            <FormErrorMessage>Country is required.</FormErrorMessage>
          )}
        </FormControl>
      </GridItem>
      <GridItem colSpan={1} rowSpan={1} />
      <GridItem colSpan={3} rowSpan={1}>
        <FormControl mb="20px" isInvalid={isError.city}>
          <FormLabel>City</FormLabel>
          <Input
            type="text"
            name="city"
            bgColor="#fff"
            value={input.city}
            boxShadow="-webkit-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
            -moz-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
            box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);"
            onChange={handleInputChange}
          />
          {!isError.city ? null : (
            <FormErrorMessage>City is required.</FormErrorMessage>
          )}
        </FormControl>
      </GridItem>
      <GridItem colSpan={7} rowSpan={1}>
        <FormControl mb="20px" isInvalid={isError.addres}>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            name="addres"
            value={input.addres}
            onChange={handleInputChange}
            bgColor="#fff"
            boxShadow="-webkit-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
            -moz-box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);
            box-shadow: 1px 1px 2px 0.5px rgba(0,0,0,0.15);"
          />
          {!isError.addres ? null : (
            <FormErrorMessage>Address is required.</FormErrorMessage>
          )}
        </FormControl>
      </GridItem>
    </>
  );
};

export default AddAddressForm;
