import React, { useEffect, useState } from "react";
import "./ByCategorie.css";
import {
  filterByCategorie,
  ChangefilterInputByCategorie,
} from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Text, VStack } from "@chakra-ui/react";

const ByCategorie = () => {
  const dispatch = useDispatch();
  const categories = ["men", "women", "child"];

  const onChange = (e) => {
    dispatch(ChangefilterInputByCategorie(e.target.value));
    dispatch(filterByCategorie(e.target.value));
  };
  return (
    <>
      <Text fontFamily="Jaldi" fontSize="1.95rem" fontWeight="bold">
        Category
      </Text>
      <VStack alignItems="flex-start" pb="1rem" fontFamily="'Jaldi', sans-serif" fontSize="1.2rem" spacing={1}>
        <button onClick={onChange} value={"men"} className="option" key={"men"}>
          Men
        </button>
        <button
          onClick={onChange}
          value={"women"}
          className="option"
          key={"women"}
        >
          Women
        </button>
        <button
          onClick={onChange}
          value={"child"}
          className="option"
          key={"child"}
        >
          Child
        </button>
      </VStack>
    </>
  );
};

export default ByCategorie;
