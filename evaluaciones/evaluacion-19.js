const ventas = [
  { producto: "Mouse", cantidad: 3, precio: 8000 },
  { producto: "Teclado", cantidad: 2, precio: 12000 },
  { producto: "Mouse", cantidad: 2, precio: 8000 },
  { producto: "Monitor", cantidad: 1, precio: 95000 },
  { producto: "Teclado", cantidad: 3, precio: 12000 },
  { producto: "Audifonos", cantidad: 5, precio: 10000 },
  { producto: "Monitor", cantidad: 2, precio: 95000 },
  { producto: "Audifonos", cantidad: 2, precio: 10000 },
  { producto: "Laptop", cantidad: 1, precio: 250000 }
];

function encontrarProductoMayorIngreso(ventas) {

  // 1. Obtener productos sin repetir
  const nombres = ventas.map(venta => venta.producto);

  const productosUnicos = nombres.filter((producto, index) => {
    return nombres.indexOf(producto) === index;
  });

  // 2. Calcular el ingreso total de cada producto
  const resultados = productosUnicos.map(producto => {

    const ingresoTotal = ventas.reduce((acumulador, venta) => {

      if (venta.producto === producto) {
        return acumulador + (venta.cantidad * venta.precio);
      }

      return acumulador;

    }, 0);

    return {
      producto: producto,
      ingresoTotal: ingresoTotal
    };
  });

  // 3. Encontrar el producto con mayor ingreso
  const mayorIngreso = resultados.reduce((acumulador, actual) => {

    if (actual.ingresoTotal > acumulador.ingresoTotal) {
      return actual;
    }

    return acumulador;

  }, resultados[0]);

  return mayorIngreso;
}

console.log(encontrarProductoMayorIngreso(ventas));