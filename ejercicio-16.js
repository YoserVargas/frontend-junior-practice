const ventas = [
  { producto: "Mouse", cantidad: 2, precio: 8000 },
  { producto: "Audífonos", cantidad: 1, precio: 10000 },
  { producto: "Teclado", cantidad: 3, precio: 12000 },
  { producto: "Webcam", cantidad: 2, precio: 10000 }
]

function calcularVentas(ventas) {
    return ventas.reduce(function (acumulador, venta) {
        return acumulador + (venta.cantidad * venta.precio)
    }, 0)
}

const resultado = calcularVentas(ventas)
console.log(resultado)

// Tu reto:
// Creá una función llamada calcularTotalVentas(ventas)
// que calcule el total de dinero de todas las ventas.
//
// Importante:
// El total de cada venta se calcula multiplicando
// la cantidad por el precio del producto.
//
// Al final, llamá a la función y mostrá el resultado
// con console.log().
