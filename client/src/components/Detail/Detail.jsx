import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import styles from "./ProductDetailsPage.module.css";
import NavBar from '../NavBar/NavBar';

export const Details = () => {
  
  const productDetails = useSelector(state => state.Details) //hay que comprobar esta info nomas o ver como la vamos a traer

  const { name, trademark, description, image,} = productDetails;

  //hay que mover este componente a una page , xd

  return (
    <>
      <NavBar/>
    <div className={styles.container}>
            <div className={styles.card}>
              <div className={styles.card_container}>
              <div className={styles.button_back}>
                    <Link to={`/home`}> 
                        <button>
                          <span className={styles.icon}>
                            ⬅️
                          </span>
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
                  <p>Esta prenda marca: {trademark ? trademark :  "N/A "} .</p>
                  <p>Presenta las siguientes especificaciones {description ? description : "N/A "}.</p>
                </div>
              </div>
            </div>
          
        
      
    </div>
    </>
  );
}
