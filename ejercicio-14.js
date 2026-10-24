const productos = [
  { nombre: "Mouse", precio: 8000 },
  { nombre: "Audífonos", precio: 10000 },
  { nombre: "Teclado", precio: 12000 },
  { nombre: "Webcam", precio: 10000 },
  { nombre: "Monitor", precio: 95000 }
]

function calcularPrecioTotal(productos) {
    return productos.reduce(function (acumulador, producto) {
        return acumulador + producto.precio
    }, 0)
}

const resultado = calcularPrecioTotal(productos)
console.log(resultado)