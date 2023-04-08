import React from 'react'
import Style from "../LandingPage/LandingPage.module.css";
import { Link } from "react-router-dom";
import l1 from "../../assets/carousel-landing/c1.avif"
import l2 from "../../assets/carousel-landing/c2.jpg"
import l3 from "../../assets/carousel-landing/c3.jpg"
import l4 from "../../assets/carousel-landing/c4.jpg"
import l5 from "../../assets/carousel-landing/c5.jpg"
import l6 from "../../assets/carousel-landing/c6.jpg"
import l7 from "../../assets/carousel-landing/c7.jpg"
import l8 from "../../assets/carousel-landing/c8.jpg"
import member from "../../assets/carousel-landing/t-member.png";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import HomeNavBar from '../../components/NavBar/HomeNavbar';

function LandingPage() {
  return (
  <>
  <HomeNavBar/>
  <div className={Style.container}>
        {/*<div className={Style.titulo}>
          <h1>El sitio que arma tus atuendos!</h1>
        </div>*/}
       { /*<div className={Style.boxBtn}>
          <Link to="/home">
            <button>Vamos!</button>
          </Link>
        </div>*/}
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

      <div className={Style.container_3}>
        <div className={Style.col1}></div>
        <div className={Style.col2}>
          <h2>Explora nuestra nueva seccion </h2>
          <p>
          Aqui podras encontrar todo tipo de prenda exclusiva para completar y variar tu outfit.
          Nuestro trabajo esta basado en darte la mejor experiencia al momento de comprar tu nueva ropa y acompañarte en cada paso, estas listo?
          </p>
          <div className={Style.boxBtn}>
          <Link to="/home">
            <button>Vamos!</button>
          </Link>
        </div>
        </div>
        <div className={Style.col1}></div>
      </div>

      <div className={Style.container_4}>
        <h2 className={Style.miembros}>
        Conoce a los miembros de nuestro equipo
        </h2>
        <p className={Style.descripcionGrupo}>
        Este proyecto no hubiera sido posible sin estar 6 personas, siempre siguiendo la idea de hacer algo fuera de lo común.
        </p>


      <div className={Style.contenedorOrdenador}>
        <div className={Style.cartasIntegrantes}>
          <div className={Style.cartaIntegrante}>
            <div className={Style.descripcionIntegrante}>
              <div
                className="rounded-full bg-slate-400"
                style={{ height: "50px", width: "50px" }}
              >
                <img src={member} alt=""/>
              </div>
              <div className="text-left flex flex-col justify-center ml-3">
                <h3>Franco Mafferra</h3>
                <p className={Style.develop} >
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>
            <p className={Style.devAptitud}>
              Buscando constantemente formas de mejorar la productividad.
            </p>
            <div className={Style.links}>
              <a
                className="m-3 ml-0"
                href="https://github.com/FrancoMafferra"
                target="_blank"
              >
                <div>
                  <BsGithub></BsGithub>
                </div>
              </a>
              <a
                className="m-3"
                href="https://www.linkedin.com/in/franco-mafferra-82a5a1248/"
                target="_blank"
              >
                <div>
                  <BsLinkedin></BsLinkedin>
                </div>
              </a>
            </div>
          </div>
        </div>
      

       <div className={Style.container_4}>
        <div className={Style.cartasIntegrantes}>
          <div className={Style.cartaIntegrante}>
            <div className={Style.descripcionIntegrante}>
              <div
                className="rounded-full bg-slate-400"
                style={{ height: "50px", width: "50px" }}
              >
                <img src={member} alt=""/>
              </div>
              <div className="text-left flex flex-col justify-center ml-3">
                <h3>Mateo Villacreses</h3>
                <p className={Style.develop} >
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>
            <p className={Style.devAptitud}>
              Buscando constantemente formas de mejorar la productividad.
            </p>
            <div className={Style.links}>
              <a
                className="m-3 ml-0"
                href="https://github.com/Bach16"
                target="_blank"
              >
                <div>
                  <BsGithub></BsGithub>
                </div>
              </a>
              <a
                className="m-3"
                href="https://www.linkedin.com/in/mateo-rojas-villacreses-583438252/"
                target="_blank"
              >
                <div>
                  <BsLinkedin></BsLinkedin>
                </div>
              </a>
            </div>
          </div>
        </div>
       </div>





       <div className={Style.container_4}>
        <div className={Style.cartasIntegrantes}>
          <div className={Style.cartaIntegrante}>
            <div className={Style.descripcionIntegrante}>
              <div
                className="rounded-full bg-slate-400"
                style={{ height: "50px", width: "50px" }}
              >
                <img src={member} alt=""/>
              </div>
              <div className="text-left flex flex-col justify-center ml-3">
                <h3>Leandro Frette</h3>
                <p className={Style.develop} >
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>
            <p className={Style.devAptitud}>
              Buscando constantemente formas de mejorar la productividad.
            </p>
            <div className={Style.links}>
              <a
                className="m-3 ml-0"
                href=" https://github.com/Lafsitoo"
                target="_blank"
              >
                <div>
                  <BsGithub></BsGithub>
                </div>
              </a>
              <a
                className="m-3"
                href="https://www.linkedin.com/in/leandro-ariel-frette/"
                target="_blank"
              >
                <div>
                  <BsLinkedin></BsLinkedin>
                </div>
              </a>
            </div>
          </div>
        </div>
       </div>







       <div className={Style.container_4}>
        <div className={Style.cartasIntegrantes}>
          <div className={Style.cartaIntegrante}>
            <div className={Style.descripcionIntegrante}>
              <div
                className="rounded-full bg-slate-400"
                style={{ height: "50px", width: "50px" }}
              >
                <img src={member} alt=""/>
              </div>
              <div className="text-left flex flex-col justify-center ml-3">
                <h3>Martín Suárez</h3>
                <p className={Style.develop} >
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>
            <p className={Style.devAptitud}>
              Buscando constantemente formas de mejorar la productividad.
            </p>
            <div className={Style.links}>
              <a
                className="m-3 ml-0"
                href="https://github.com/Mmartinn02"
                target="_blank"
              >
                <div>
                  <BsGithub></BsGithub>
                </div>
              </a>
              <a
                className="m-3"
                href="https://www.linkedin.com/in/mmartinn02/"
                target="_blank"
              >
                <div>
                  <BsLinkedin></BsLinkedin>
                </div>
              </a>
            </div>
          </div>
        </div>
       </div>

       <div className={Style.container_4}>
        <div className={Style.cartasIntegrantes}>
          <div className={Style.cartaIntegrante}>
            <div className={Style.descripcionIntegrante}>
              <div
                className="rounded-full bg-slate-400"
                style={{ height: "50px", width: "50px" }}
              >
                <img src={member} alt=""/>
              </div>
              <div className="text-left flex flex-col justify-center ml-3">
                <h3>Juan David Díaz </h3>
                <p className={Style.develop} >
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>
            <p className={Style.devAptitud}>
              Buscando constantemente formas de mejorar la productividad.
            </p>
            <div className={Style.links}>
              <a
                className="m-3 ml-0"
                href="https://github.com/Judadimo22"
                target="_blank"
              >
                <div>
                  <BsGithub></BsGithub>
                </div>
              </a>
              <a
                className="m-3"
                href="https://www.linkedin.com/in/juan-david-d%C3%ADaz-a32a2a268"
                target="_blank"
              >
                <div>
                  <BsLinkedin></BsLinkedin>
                </div>
              </a>
            </div>
          </div>
        </div>
       </div>














       <div className={Style.container_4}>
        <div className={Style.cartasIntegrantes}>
          <div className={Style.cartaIntegrante}>
            <div className={Style.descripcionIntegrante}>
              <div
                className="rounded-full bg-slate-400"
                style={{ height: "50px", width: "50px" }}
              >
                <img src={member} alt=""/>
              </div>
              <div className="text-left flex flex-col justify-center ml-3">
                <h3>Dylan Gonzalez </h3>
                <p className={Style.develop} >
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>
            <p className={Style.devAptitud}>
              Buscando constantemente formas de mejorar la productividad.
            </p>
            <div className={Style.links}>
              <a
                className="m-3 ml-0"
                href="https://github.com/Delamm"
                target="_blank"
              >
                <div>
                  <BsGithub></BsGithub>
                </div>
              </a>
              <a
                className="m-3"
                href="https://www.linkedin.com/in/dylan-gonzalez-875117246/"
                target="_blank"
              >
                <div>
                  <BsLinkedin></BsLinkedin>
                </div>
              </a>
            </div>
          </div>
        </div>
       </div>


      </div>
  </div>

  </>
  )
}

export default LandingPage