import { useEffect, useState } from "react";
import axios from "axios";

/* eslint-disable no-undef */
export const FormStartPayment = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  useEffect(() => {
    if (!preferenceId) {
      return;
    }
    const mp = new MercadoPago("TEST-400dbf2f-d44a-47f3-b468-2b32d7c2adec", {
      locale: "es-AR",
    });

    // Inicializa el checkout
    mp.checkout({
      preference: {
        id: preferenceId,
      },
      render: {
        container: ".cho-container", // Indica el nombre de la clase donde se mostrará el botón de pago
        label: "Pagar la platita", // Cambia el texto del botón de pago (opcional)
      },
    });
  }, [preferenceId]);
  async function startPayment() {
    const {
      data: {
        body: { id },
      },
    } = await axios.post("http://localhost:5000/api/v1/checkout/pagos/mp", [
      "hola",
    ]);
    console.log(id);
    setPreferenceId(id);
    /*     document.location.replace(sandbox_init_point); */
  }

  return (
    <>
      <form>
        formStartPayment
        <button onClick={startPayment} type="button">
          Pagar
        </button>
      </form>
      {preferenceId && <button className="cho-container"></button>}
    </>
  );
};
