import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { Filter, setSearchInput } from "../../redux/actions";
import { useDispatch } from "react-redux";

const ClearSearButton = () => {
  const dispatch = useDispatch();
  const clearFilter = () => {
    dispatch(setSearchInput(""));
    dispatch(Filter());
  };
  return (
    <Button
      onClick={clearFilter}
      bgColor="#272727"
      color="#f2f2f2"
      borderRadius="18px"
      _hover={{
        border: "1px solid #272727",
        bgColor: "#f2f2f2",
        color: "#272727",
      }}
    >
      Clear search
    </Button>
  );
};

export default ClearSearButton;
