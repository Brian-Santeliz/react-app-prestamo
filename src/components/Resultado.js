import React, { Fragment } from "react";

const Resultado = ({ total, valor, plazo }) => (
  <Fragment>
    <div className="u-full-width resultado">
      <h2>Resumen:</h2>
      <p>la cantidad solicita es de: ${valor}</p>
      <p>En un plazo de tiempo de: {plazo} meses</p>
      <p>Su pago Mensual es de: ${(total / plazo).toFixed(2)}</p>
      <p>El total a pagar es: ${total}</p>
    </div>
  </Fragment>
);

export default Resultado;
