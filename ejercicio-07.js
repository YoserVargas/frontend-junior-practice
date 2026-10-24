const productos = [
  { nombre: "Teclado", precio: 12000 },
  { nombre: "Mouse", precio: 8000 },
  { nombre: "Monitor", precio: 95000 },
  { nombre: "Audífonos", precio: 10000 }
] 

function buscarProducto(productos, nombreBuscado) {
    return productos.find(function (producto) {
        return producto.nombre === nombreBuscado
    })

}
const resultado = buscarProducto(productos, "Monitor")
console.log(resultado)