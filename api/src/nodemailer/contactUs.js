const nodemailer = require("nodemailer");
require("dotenv").config();
const { USSER, PASS } = process.env;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: USSER,
    pass: PASS,
  },
});

transporter.verify().then(() => {
  console.log("Listo para enviar");
});

const eMail1 = async (email) => {
  let html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          p,
          a,
          h1,
          h2,
          h3,
          h4,
          h5 {
            font-family: "Roboto", sans-serif !important;
          }
          h1 {
            font-size: 60px !important;
          }
          h2 {
            font-size: 45px !important;
          }
          h3 {
            font-size: 35px !important;
          }
          h4 {
            font-size: 25px !important;
          }
          h5 {
            font-size: 15px !important;
          }
          p,
          a {
            font-size: 15px !important;
          }
        </style>
      </head>
      <div style="width: 100%; height: 100%; background-color: #e3e3e3">
        <div style="padding: 20px 10px 20px 10px; height: 100%">
          <div
            style="
              background-color: rgb(203, 173, 3);
              padding: 10px 0px 10px 0px;
              width: 100%;
              height: 100%;
              text-align: center;
            "
          ></div>
        </div>
        <div
          style="
            background-color: #e3e3e3;
            margin-top: 47px;
            padding: 20px 0px 5px 0px;
            text-align: center;
          "
        >
          <h2>Contactanos</h2>
          <p>
            Hemos recibido tu mensaje, en este momento lo estamos procesando. En el
            futuro te estaremos contactando.
          </p>
          <p>GRACIAS POR CONTACTAR CON NOSOTROS</p>
          <div style="display: flex; padding: 20px 10px 20px 10px">
            <div
              style="padding: 10px 0px 10px 0px; width: 100%; text-align: center"
            ></div>
          </div>
          <p style="margin-bottom: 10px"></p>
          <a
            style="
              background-color: rgb(203, 173, 3);
              border: 2px solid rgb(8, 8, 8);
              color: rgb(0, 0, 0);
              padding: 16px 32px;
              text-align: center;
              text-decoration: none;
              font-weight: bold;
              display: inline-block;
              font-size: 16px;
              margin: 4px 2px;
              transition-duration: 0.4s;
              cursor: pointer;
            "
            >Landing</a
          >
          <div
            style="
              background-color: rgb(203, 173, 3);
              color: rgb(0, 0, 0);
              padding: 5px 0px 0px 0px;
              width: 100%;
              text-align: center;
            "
          >
            <p style="font-size: 20px; padding: 0px 20px 0px 20px">Soporte</p>
            <p>
              Contactenos a través de los siguientes canales:<br /><br />
              <a
                href="tu.Tienda.OnlineHenry@gmail.com"
                style="color: rgb(199, 186, 5)"
                ><img
                  src="https://ucarecdn.com/536d8731-dfa6-49e7-ab49-fc204b464708/"
                  style="width: 30px; height: 30px"
              /></a>
              <a style="color: rgb(199, 186, 5)"
                ><img
                  src="https://ucarecdn.com/7e8ca567-e42a-442d-9949-00af92194412/124034.png"
                  style="width: 30px; height: 30px"
              /></a>
              <a style="color: rgb(199, 186, 5)"
                ><img
                  src="https://ucarecdn.com/96346a92-c11f-4bb9-8663-d454362c3469/iconofacebook1.png"
                  style="width: 30px; height: 30px"
              /></a>
              <a style="color: #9faa09"
                ><img
                  src="https://ucarecdn.com/a8624f95-6615-487b-a1ad-09117e6ee150/instagram.jpg"
                  style="width: 30px; height: 30px"
              /></a>
            </p>
            <p
              style="
                color: #e3e3e3;
                background-color: rgb(0, 0, 0);
                padding: 10px 0px 10px 0px;
                font-size: 12 !important;
                height: 100%;
              "
            >
              @ 2023 TuTienda, todos los derechos reservados.
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <body style="height: 100%"></body>
    </html>
    `;
  let msj = {
    from: '"TuTienda" <tu.Tienda.OnlineHenry@gmail.com>',
    to: email,
    subject: "Contact Notification",
    text: "Contact Us",
    html: html,
  };

  const data = await transporter.sendMail(msj);
};

module.exports = { eMail1 };
