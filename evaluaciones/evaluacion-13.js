const productos = [
  { nombre: "Mouse", precio: 8000 },
  { nombre: "Teclado", precio: 12000 },
  { nombre: "Monitor", precio: 95000 },
  { nombre: "Audífonos", precio: 10000 },
  { nombre: "Laptop", precio: 250000 },
  { nombre: "Webcam", precio: 9000 }
]

function encontrarProductoMasCaro(productos) {
    return productos.reduce(function (acumulador, producto) {
        if (producto.precio > acumulador.precio) {
            return producto
        } else {
            return acumulador
        }
    },productos[0])
}

console.log(encontrarProductoMasCaro(productos))