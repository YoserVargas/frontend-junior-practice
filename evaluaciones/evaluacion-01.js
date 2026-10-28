const productos = [
  { nombre: "Mouse", precio: 8000, disponible: true },
  { nombre: "Teclado", precio: 12000, disponible: false },
  { nombre: "Audífonos", precio: 10000, disponible: true },
  { nombre: "Monitor", precio: 95000, disponible: true },
  { nombre: "Webcam", precio: 9000, disponible: false }
]

function obtenerProductosDisponiblesBaratos(productos){
    return productos.filter(function(producto){
        return producto.disponible === true && producto.precio < 15000
    })
}

const resultado = obtenerProductosDisponiblesBaratos(productos)
console.log(resultado)