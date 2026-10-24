const productos = [
  { nombre: "Mouse", precio: 8000, disponible: true },
  { nombre: "Audífonos", precio: 10000, disponible: true },
  { nombre: "Teclado", precio: 12000, disponible: false },
  { nombre: "Webcam", precio: 10000, disponible: true },
  { nombre: "Monitor", precio: 95000, disponible: true },
  { nombre: "Micrófono", precio: 15000, disponible: false }
]


function obtenerProductosDisponibles(productos, presupuesto) {
  return productos.filter(function (producto) {
    return producto.precio <= presupuesto && producto.disponible === true
  })
}

const resultado = obtenerProductosDisponibles(productos, 10000)
console.log(resultado)
