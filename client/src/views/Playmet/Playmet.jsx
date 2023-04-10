import React from "react";
import { MPButton } from "../../components/MPButton/MPButton";
import { useSelector } from "react-redux";

function Playmet() {
  const allData = useSelector((state) => state.details);
  const id = "6400ba3a6d535131765b3c1a";
  return <MPButton id={id}>a</MPButton>;
}

export default Playmet;
