import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { ListCard } from "../../components/ListCards/ListCards";
import Filtrers from "../../components/Filters/Filtrers";
import style from './Home.module.css'

const Home = () => {
    return(
        <div className={style.containerHome}>
            <NavBar/>
            <div className={style.containerFilters}>
                <div className={style.filters}>
                <Filtrers/>
                </div>
                <div className={style.cards}>
                <ListCard/>
                </div>
            </div>
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