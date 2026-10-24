const productos = [
  { nombre: "Mouse", precio: 8000 },
  { nombre: "Audífonos", precio: 10000 },
  { nombre: "Teclado", precio: 12000 },
  { nombre: "Webcam", precio: 10000 },
  { nombre: "Monitor", precio: 95000 }
]

function obtenerNombresEconomicos(productos) {
    return productos.filter(function (producto) {
        return producto.precio < 11000
    }).map(function (producto) {
        return producto.nombre
    })
}

const resultado =  obtenerNombresEconomicos(productos)
console.log(resultado)