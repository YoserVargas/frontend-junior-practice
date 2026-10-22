
const productos = [
  { nombre: "Teclado", precio: 15000 },
  { nombre: "Mouse", precio: 8000 },
  { nombre: "Monitor", precio: 95000 },
  { nombre: "Audífonos", precio: 12000 }
]
  
function obtenerProductosBaratos(productos) {
  return productos.filter(function (producto) {
  return producto.precio < 15000
})
}
  
const resultado = obtenerProductosBaratos(productos)
  console.log(resultado)
