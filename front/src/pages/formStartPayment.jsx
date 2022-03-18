import axios from "axios";
export const FormStartPayment = () => {
  async function startPayment() {
    const {
      data: {
        body: { sandbox_init_point },
      },
    } = await axios.post("http://localhost:5000/api/v1/checkout/pagos/mp", [
      "hola",
    ]);

    console.log(sandbox_init_point);
    /*     document.location.replace(sandbox_init_point); */
  }
  return (
    <form>
      formStartPayment
      <button onClick={startPayment} type="button">
        Pagar
      </button>
    </form>
  );
};
