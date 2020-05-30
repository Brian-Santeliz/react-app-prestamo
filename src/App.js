import React, { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Mensaje from "./components/Mensaje";
import Resultado from "./components/Resultado";
import Spinner from "./components/Spinner";

function App() {
  //State del valor
  const [valor, setValor] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);
  const [spinner, setSpinner] = useState(false);

  let mensaje;
  //compurbe el state del spiner si el total calculado es cero muestra un mensaje u otro
  if (spinner) {
    mensaje = <Spinner />;
  } else if (total === 0) {
    mensaje = <Mensaje />;
  } else {
    mensaje = <Resultado valor={valor} total={total} plazo={plazo} />;
  }
  return (
    <Fragment>
      <Header titulo="Calcula tu prestamo" />

      <div className="container">
        <Formulario
          valor={valor}
          setValor={setValor}
          plazo={plazo}
          setPlazo={setPlazo}
          setTotal={setTotal}
          setSpinner={setSpinner}
        />
        <div className="mensajes">{mensaje}</div>
      </div>
    </Fragment>
  );
}

export default App;
