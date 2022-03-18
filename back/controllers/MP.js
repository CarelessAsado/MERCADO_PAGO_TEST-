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
      {
        title: "Mi producto",
        unit_price: 100,
        quantity: 1,
      },
    ],
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
module.exports = { createPreference };
