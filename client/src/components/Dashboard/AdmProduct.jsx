import React from "react";
import { Clothes } from "./CLothes";
import { Link } from "react-router-dom";

const AdmProduct = () => {
    return(
        <div>
            <div>
            <Link to='/create'>
        <h1>Create new cloth</h1>
        </Link>
            </div>
            <Clothes/>
        </div>
    )
};

export default AdmProduct;