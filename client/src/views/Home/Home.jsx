import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import style from './Home.module.css'
import Filtrers from "../../components/Filters/Filtrers"

const Home = () => {
    return(
        <div>
            <div className={style.containerNavBar}>
            <NavBar/>
            <Filtrers/>
            </div>
        </div>
    )
};

export default Home