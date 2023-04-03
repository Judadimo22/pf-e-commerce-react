import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { ListCard } from "../../components/ListCards/ListCards";
import Filtrers from "../../components/Filters/Filtrers";

const Home = () => {
    return(
        <div>
            <NavBar/>
            <ListCard/>
            <Filtrers/>
        </div>
    )
};

export default Home


{/* <div>
<div>
<NavBar/>
<ListCard/>
<div/>
</div> */}