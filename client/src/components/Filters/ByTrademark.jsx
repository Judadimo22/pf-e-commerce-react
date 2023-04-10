import React, { useEffect, useState } from "react";
import "./ByTrademark.css";
import {
  filterByTrademark,
  ChangeFilterInputByTradeMark,
} from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Text, VStack } from "@chakra-ui/react";

const ByTrademark = () => {
  const dispatch = useDispatch();
  const trademarks = [
    "ADIDAS",
    "Nike",
    "Vandalia",
    "Oldtown Polo",
    "Topper",
    "Puma",
  ];

  const onChange = (e) => {
    dispatch(ChangeFilterInputByTradeMark(e.target.value));
    dispatch(filterByTrademark(e.target.value));
  };
  return (
    <>
      <Text fontFamily="Jaldi" fontSize="1.95rem" fontWeight="bold" pt="1rem">
        Trademark
      </Text>
      <VStack alignItems="flex-start" pb="1rem" fontFamily="'Jaldi', sans-serif" fontSize="1.2rem" spacing={1}>
        <button
          onClick={onChange}
          value={"ADIDAS"}
          className="option"
          key={"ADIDAS"}
        >
          ADIDAS
        </button>
        <button
          onClick={onChange}
          value={"Nike"}
          className="option"
          key={"Nike"}
        >
          Nike
        </button>
        <button
          onClick={onChange}
          value={"Vandalia"}
          className="option"
          key={"Vandalia"}
        >
          Vandalia
        </button>
        <button
          onClick={onChange}
          value={"Oldtown Polo"}
          className="option"
          key={"Oldtown Polo"}
        >
          Oldtown Polo
        </button>
        <button
          onClick={onChange}
          value={"Topper"}
          className="option"
          key={"Topper"}
        >
          Topper
        </button>
        <button
          onClick={onChange}
          value={"Puma"}
          className="option"
          key={"Puma"}
        >
          Puma
        </button>
      </VStack>
    </>
  );
};

export default ByTrademark;
