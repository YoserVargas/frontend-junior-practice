const productos = [
  { nombre: "Mouse", precio: 8000 },
  { nombre: "Teclado", precio: 12000 },
  { nombre: "Monitor", precio: 95000 },
  { nombre: "Audífonos", precio: 10000 }
]

function buscarProductoPorNombre(productos, nombreBuscado) {
    return productos.find(function(producto){
        return producto.nombre === nombreBuscado
    })
}

const resultado = buscarProductoPorNombre(productos, "Monitor")
console.log(resultado)