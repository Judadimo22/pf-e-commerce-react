import { Button, GridItem } from "@chakra-ui/react";
import React from "react";

const AddressButton = ({ colSpan, content,onClick }) => {
  return (
    <GridItem colSpan={colSpan} rowSpan={1}>
      <Button
        onClick={onClick}
        bgColor="#272727"
        borderRadius="20px"
        color="#fff"
        boxShadow="-webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);"
        _hover={{
          bgColor: "#fff",
          color: "#272727",
        }}
        w="100%"
      >
        {content}
      </Button>
    </GridItem>
  );
};

export default AddressButton;
