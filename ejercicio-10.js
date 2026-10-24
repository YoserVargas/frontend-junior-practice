const productos = [
  { nombre: "Mouse", precio: 8000 },
  { nombre: "Audífonos", precio: 10000 },
  { nombre: "Teclado", precio: 12000 },
  { nombre: "Webcam", precio: 10000 },
  { nombre: "Monitor", precio: 95000 }
]

function obtenerProductosCaros(productos){
    return productos.filter(function (producto) {
        return producto.precio > 10000
    })
}

const resultado = obtenerProductosCaros(productos)
console.log(resultado)

