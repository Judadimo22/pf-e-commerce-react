import { Box, Image, Text, FormControl, Input, Textarea, Button } from "@chakra-ui/react";
import React from "react";
import HomeNavBar from "../NavBar/HomeNavbar";
import imageContact from '../../assets/imagen_about.jpg'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import member from "../../assets/carousel-landing/t-member.png";
import Style from "./About.css"


const About = () => {
    return(<>
        <Box>
           <HomeNavBar/> 
            <Box display='flex' justifyContent='center' px={200} pt={5} pb={5}  backgroundColor='#272727' >
                <Box w='60%' justifyContent='center' backgroundColor='#F2F2F2' px={10} pb={5}  >
                    <Text fontSize={30} mt={10} mb={6}><strong>¡Hello!</strong></Text>
                    <Text fontSize={18} mb={6}>We are pleased to introduce ourselves as an online store for casual and sportswear. On our platform, we offer a wide selection of clothing to meet the style needs of men and women of all ages.</Text>
                    <Text fontSize={18} mb={5}>Our goal is to provide our customers with high quality products at reasonable prices. We work hard to ensure that our selection of clothing fits the latest styles and fashion trends, while maintaining a focus on quality and durability.</Text>
                    <Text fontSize={18} mb={5}>We strive to provide a smooth and secure online shopping experience for our customers. We ensure that your personal information is protected and that all transactions are processed securely.</Text>
                    <Text fontSize={18} mb={5}>In addition, we are committed to sustainability and social responsibility. We seek to work with suppliers and brands that adhere to ethical and sustainable practices in the manufacture of apparel...</Text>
                    <Text fontSize={18} mb={5}>Ultimately, we are here to serve our customers and provide them with a satisfying online shopping experience. We look forward to helping you find the perfect apparel to suit your style and needs.</Text>
                    <Text mb={6} fontSize={18}><strong>¡Thank you for visiting us</strong>!</Text>
                </Box>
                <Image w='40%' src={imageContact} objectFit='cover'/>
            </Box>
        <div className={Style.container_4}>
        <h2 className={Style.miembros}>
        Meet our team members
        </h2>
        <p className={Style.descripcionGrupo}>
        This project would not have been possible without these 5 people, always following the idea of doing something out of the ordinary.
        </p>


      <div className={Style.contenedorOrdenador}>

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
                <h3>Franco Mafferra</h3>
                <p className={Style.develop} >
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>
            <p className={Style.devAptitud}>
            Constantly looking for ways to improve productivity.
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
             Constantly looking for ways to improve productivity.
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
                <h3>Martín Suárez</h3>
                <p className={Style.develop} >
                  FULL-STACK DEVELOPER
                </p>
              </div>
            </div>
            <p className={Style.devAptitud}>
            Constantly looking for ways to improve productivity.
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
            Constantly looking for ways to improve productivity.
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
            Constantly looking for ways to improve productivity.
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
        </Box>
        </>
    )
};


export default About