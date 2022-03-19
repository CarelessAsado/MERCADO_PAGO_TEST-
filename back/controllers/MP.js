// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token: process.env.SECRET,
});

function createPreference(req, res) {
  console.log(req.body);
  // Crea un objeto de preferencia //creo q esto lo tengo q tomar dinamicamente, o sea q aca esta el primer paso cuando el cliente  comienza el pago, llamar a este API point
  let preference = {
    items: [
      //NO PONGO TOTAL, solo precio unitario y cantidad, ML se encarga dsp de hacer la cuenta, ya lo chequeé
      {
        title: "Flower 100ml Kenzo",
        unit_price: 10000,
        quantity: 1,
      },
      {
        title: "Very Irresistible 75ml Givenchy",
        unit_price: 7500,
        quantity: 2,
      },
    ],
    back_urls: {
      success: "http://localhost:5000/api/v1/checkout/pagos/feedback",
      failure: "http://localhost:5000/api/v1/checkout/pagos/feedback",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
      console.log(response.body);
      return res.json(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
function confirmPayment(req, res) {
  console.log(req.url, req.query, req.params);
  res.redirect("http://localhost:3000/");
}
module.exports = { createPreference, confirmPayment };
