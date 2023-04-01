import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import style from './Home.module.css'
import { Pagination } from "../../components/Paginado/Paginado";

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