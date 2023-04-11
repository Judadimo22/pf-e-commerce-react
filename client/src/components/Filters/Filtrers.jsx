import React from "react";
import "./Filtrers.css";
import ByCategorie from "./ByCategorie";
import ByType from "./ByType";
import ByTrademark from "./ByTrademark";
import SortByPrice from "./SortByPrice";
import * as Chakra from "@chakra-ui/react";

const Filtrers = () => {
  return (
    <div className="Filters-container">
      <div>
        <ByCategorie />
      </div>
      <Chakra.Box
        borderBottom="2px"
        borderColor="#b5babb"
        borderRadius="full"
        width="100%"
        margin="auto"
      />
      <div>
        <ByTrademark />
      </div>
      <Chakra.Box
        borderBottom="2px"
        borderColor="#b5babb"
        borderRadius="full"
        width="100%"
        margin="auto"
      />
      <div>
        <SortByPrice />
      </div>
      <div className="filter-sort-bytype"> 
        <ByType/>
      </div>
    </div>
  );
};

export default Filtrers;
