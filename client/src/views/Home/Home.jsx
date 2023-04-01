import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import style from './Home.module.css'

const Home = () => {
    return(
        <div>
            <div className={style.containerNavBar}>
            <NavBar/>
            </div>
        </div>
    )
};

export default Home