import React from "react";
import { ListCard } from "../../components/ListCards/ListCards";
import Filtrers from "../../components/Filters/Filtrers";
import style from './Home.module.css'
import HomeNavBar from "../../components/NavBar/HomeNavbar";
import Footer from "../../components/Footer/Footer"
const Home = () => {
    return(
        <div className={style.containerHome}>
            <HomeNavBar/>
            <div className={style.containerFilters}>
                <div className={style.filters}>
                <Filtrers/>
                </div>
                <div className={style.cards}>
                <ListCard/>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Home


