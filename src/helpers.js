//algotimo para la cotización
export function calcularCotizacion(valor, plazo) {
  /* 
        Cantidades:
        0 - 1000 = 25%
        1001 - 5000 = 20%
        5001 - 10000 = 15%
        +10000 = 10%    
    */
  //calcular la cantidad
  let totalCantidad = 0;

  if (valor <= 1000) {
    totalCantidad = valor * 0.25;
  } else if (valor > 1001 && valor <= 5000) {
    totalCantidad = valor * 0.2;
  } else if (valor > 5000 && valor <= 10000) {
    totalCantidad = valor * 0.15;
  } else {
    totalCantidad = valor * 0.1;
  }
  //calcularPlazo
  /* 
        3 meses = 5% 
        6 meses = 10% 
        12 meses = 15% 
        24 meses = 20% 
    */
  //se guardara el plazo aqui
  let totalPlazo = 0;

  //comprobar el plazo ingreasado
  switch (plazo) {
    case 3:
      totalPlazo = valor * 0.05;
      break;
    case 6:
      totalPlazo = valor * 0.1;
      break;
    case 12:
      totalPlazo = valor * 0.15;
      break;
    case 24:
      totalPlazo = valor * 0.2;
      break;

    default:
      break;
  }
  return totalPlazo + totalCantidad + valor;
}
