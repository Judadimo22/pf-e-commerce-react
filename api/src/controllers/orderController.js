const orderSchema = require("../models/Order");
const Order = require("../models/Order");
const axios = require("axios");
const productSchema = require("../models/Product");
const userSchema = require("../models/User");
const User = require("../models/User");
const nodemailer = require("nodemailer");

const postOrder = async (req, res) => {
  try {
    const idData = req.body.data.id;
    const shopping = await axios.get(
      `https://api.mercadopago.com/v1/payments/${idData}`,
      {
        headers: {
          "Content-Type": "application/javascript",
          Authorization: `Bearer ${process.env.MERCADOPAGO_KEY}`,
        },
      }
    );
    const userCompra = orderSchema(shopping.data);

    const newUserCompra = await new Order({
      items: shopping.data.additional_info.items[0],
      id_pay: idData,
      date_approved: userCompra.date_approved,
      operation_type: userCompra.operation_type,
      order: userCompra.order,
      payer: shopping.data.payer.identification,
      status: userCompra.status,
      status_detail: userCompra.status_detail,
      email: shopping.data.external_reference,
      transaction_amount: shopping.data.transaction_amount,
    });
    ///////////////////////////////////////////////////////////
    const saveCompra = await newUserCompra.save();
    const users = await User.find({ email: shopping.data.external_reference });
    let order = users[0].order;
    order.push(newUserCompra);
    await userSchema.updateOne(
      { email: shopping.data.external_reference },
      { order }
    );
    //////////////////////////////////////////////////////////
    res.status(200).json(saveCompra);

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.USSER,
        pass: process.env.PASS,
      },
    });

    transporter.sendMail(
      {
        from: '"TuTienda" <tu.Tienda.OnlineHenry@gmail.com>',
        to: newUserCompra.email,
        subject: "Compra con Exito",
        text: `Querido usuario: ${users.name} Sus compras ya fueron programadas
            \n Buys data:
            \nProducto ${carSchema[0].brand} ${newUserCompra[0].order}\n Para cualquier consulta, póngase en contacto con <tu.Tienda.OnlineHenry@gmail.com>
            \n Gracias por elegirnos
            
          `,
      },
      (error, info) => {
        if (error) {
          res.status(500).send(`no se pudo enviar ${error}`);
        } else {
          res.status(200).send(`Mail enviado ${info.value}`);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

const getOrder = async (req, res) => {
  try {
    const facturas = await orderSchema.find();
    res.status(200).json(facturas);
  } catch (error) {
    res.status(400).json(error);
  }
};

const putOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { statusProduct } = req.body;
    const modelOrder = await orderSchema.updateOne(
      { _id: id },
      { statusProduct }
    );

    res.status(200).json(modelOrder);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  postOrder,
  getOrder,
  putOrder,
};
