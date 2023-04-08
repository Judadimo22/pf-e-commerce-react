import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import styles from "./ProductDetailsPage.module.css";
import { getClothById } from '../../redux/actions';
import HomeNavBar from '../NavBar/HomeNavbar';

export const Details = () => {
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.Details)
  const { id } = useParams();

  const { name, trademark, description, image,} = productDetails;
  console.log(id);

  useEffect(()=>{
    dispatch(getClothById(id))
  },[])

  return (
    <>
      <HomeNavBar/>
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
          
        <a href='/mercadopago'><button>Comprar!</button></a>
      
    </div>
    </>
  );
}
