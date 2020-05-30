import React, { useState, Fragment } from "react";
import { calcularCotizacion } from "../helpers";

const Formulario = (props) => {
  const { valor, setValor, plazo, setPlazo, setTotal, setSpinner } = props;

  //state del error loclmente
  const [error, setError] = useState(false);

  //funcion main para calcular la cotización y mostrar spinner
  const calcularPrestamo = (e) => {
    e.preventDefault();

    //validad los campos
    if (valor === 0 || plazo === "") {
      setError(true);

      //elima el mensaje despues e 3 sg
      setTimeout(() => {
        setError(false);
      }, 3000);

      return;
    } else {
      setError(false);
    }
    // cambia el spinner a true
    setSpinner(true);
    //muestra el resultado despues de 3s y cambia el spinner a false
    setTimeout(() => {
      const resultado = calcularCotizacion(valor, plazo);
      //actualizar el state del total con el resultado
      setTotal(resultado);
      setSpinner(false);
    }, 3000);
  };

  return (
    <Fragment>
      {/* Muestra el mensaje de error condicionalmente */}
      {error ? (
        <p className="error">Todos los campos son obligatorios</p>
      ) : null}

      <form
        //sumit al form. NO al input
        onSubmit={calcularPrestamo}
      >
        <div className="row">
          <div>
            <label>Cantidad Prestamo</label>
            <input
              className="u-full-width"
              type="number"
              placeholder="Ejemplo: 3000"
              onChange={(e) => setValor(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Plazo para Pagar</label>
            <select
              className="u-full-width"
              onChange={(e) => setPlazo(parseInt(e.target.value))}
            >
              <option value="">Seleccionar</option>
              <option value="3">3 meses</option>
              <option value="6">6 meses</option>
              <option value="12">12 meses</option>
              <option value="24">24 meses</option>
            </select>
          </div>
          <div>
            <input
              type="submit"
              value="Calcular"
              className="button-primary u-full-width"
            />
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default Formulario;
