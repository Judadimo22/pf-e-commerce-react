import React from 'react'
import Style from "../LandingPage/LandingPage.module.css";
import NavBar from '../../components/NavBar/NavBar'
import { Link } from "react-router-dom";
import l1 from "../../assets/carousel-landing/c1.avif"
import l2 from "../../assets/carousel-landing/c2.jpg"
import l3 from "../../assets/carousel-landing/c3.jpg"
import l4 from "../../assets/carousel-landing/c4.jpg"
import l5 from "../../assets/carousel-landing/c5.jpg"
import l6 from "../../assets/carousel-landing/c6.jpg"
import l7 from "../../assets/carousel-landing/c7.jpg"
import l8 from "../../assets/carousel-landing/c8.jpg"


function LandingPage() {
  return (
  <>
  <NavBar/>
  <div className={Style.container}>
        <div className={Style.titulo}>
          <h1>El sitio que arma tus atuendos!</h1>
        </div>
        <div className={Style.boxBtn}>
          <Link to="/home">
            <button>Vamos!</button>
          </Link>
        </div>
      </div>

      <div className={Style.container_2}>
        <h2>
          ELIJE TU <span>ROPA</span>
        </h2>
        <div className={Style.info}>
          <p>
          Brindamos un enfoque personalizado para adaptarse a sus requisitos y consideraciones únicas. Ofrecemos soporte y servicio completo en todas las etapas de compra y financiamiento de sus prendas.
          </p>
          <Link to="/home">
            <button>EXPLORA MÁS</button>
          </Link>
        </div>

        <div className={Style.slider}>
          <div className={Style.slide_track}>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img1}>
                <img src={l1} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img2}>
                <img src={l2} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img3}>
                <img src={l3} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img4}>
                <img src={l4} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img5}>
                <img src={l5} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img6}>
                <img src={l6} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img7}>
                <img src={l7} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img8}>
                <img src={l8} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img11}>
                <img src={l1} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img22}>
                <img src={l2} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img33}>
                <img src={l3} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img44}>
                <img src={l4} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img55}>
                <img src={l5} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img66}>
                <img src={l6} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img77}>
                <img src={l7} alt="" />
              </div>
            </div>
            <div className={Style.con}>
              <div className={Style.slide} id={Style.img88}>
                <img src={l8} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

  </>
  )
}

export default LandingPage