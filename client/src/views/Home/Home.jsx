import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { ListCard } from "../../components/ListCards/ListCards";

const Home = () => {
    return(
        <div>
            <div className={style.containerNavBar}>
            <NavBar/>
            <ListCard/>
        </div>
    )
};

export default Home