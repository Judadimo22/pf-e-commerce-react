import { useDispatch, useSelector } from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import styles from "./ProductDetailsPage.module.css";
import { getClothById } from '../../redux/actions';
import HomeNavBar from "../NavBar/HomeNavbar";
import { MPButton } from "../MPButton/MPButton";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import NavBar from '../NavBar/NavBar';

export const Details = () => {
  const dispatch = useDispatch()
  const productDetails = useSelector((state) => state.Details); //hay que comprobar esta info nomas o ver como la vamos a traer
  const { id } = useParams();
  const { name, trademark, description, image } = productDetails;

  const { isAuthenticated, user } = useAuth0();
  const [pay, setPay] = useState(false);

  function handlerPay() {
    setPay(true);
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "You need a login",
      showConfirmButton: true,
      //timer: 3000,
    });
  }

  useEffect(()=>{
    dispatch(getClothById(id))
  },[])

  return (
    <>
      <HomeNavBar />
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card_container}>
            <div className={styles.button_back}>
              <Link to={`/home`}>
                <button>
                  <span className={styles.icon}>⬅️</span>
                  <span className={styles.label}>atras</span>
                </button>
              </Link>
            </div>
            <div className={styles.name}>
              <h1>{name}</h1>
            </div>
            <div>
              <img src={image} alt={name} className={styles.image} />
            </div>
            <div className={styles.container__info}>
              <p>Esta prenda marca: {trademark ? trademark : "N/A "} .</p>
              <p>
                Presenta las siguientes especificaciones{" "}
                {description ? description : "N/A "}.
              </p>
            </div>
          </div>
        </div>

        <div>
          {isAuthenticated ? (
            <MPButton id={id} />
          ) : (
            <button onClick={handlerPay}>Buy</button>
          )}
        </div>
      </div>
    </>
  );
};
