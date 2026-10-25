const ventas = [
  { producto: "Mouse", categoria: "accesorios", cantidad: 2, precio: 8000 },
  { producto: "Audífonos", categoria: "accesorios", cantidad: 1, precio: 10000 },
  { producto: "Teclado", categoria: "accesorios", cantidad: 3, precio: 12000 },
  { producto: "Monitor", categoria: "pantallas", cantidad: 2, precio: 95000 },
  { producto: "Webcam", categoria: "accesorios", cantidad: 2, precio: 10000 }
]

function calcularVentasPorCategoria(ventas, categoriaBuscada) {
    return ventas.filter(function (venta) {
        return venta.categoria === categoriaBuscada
    }).reduce(function (acumulador ,venta) {
        return acumulador + (venta.cantidad * venta.precio)
    }, 0)
}

const resultado = calcularVentasPorCategoria(ventas, "accesorios")
console.log(resultado)