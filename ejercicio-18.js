const productos = [
  { nombre: "Mouse", categoria: "accesorios" },
  { nombre: "Audífonos", categoria: "accesorios" },
  { nombre: "Teclado", categoria: "accesorios" },
  { nombre: "Monitor", categoria: "pantallas" },
  { nombre: "Webcam", categoria: "accesorios" },
  { nombre: "Televisor", categoria: "pantallas" }
]

function contarProductosPorCategoria(productos, categoriaBuscada) {
  return productos.filter(function (producto) {
    return producto.categoria === categoriaBuscada
  }).length
}

const resultado = contarProductosPorCategoria(productos, "accesorios")
console.log(resultado)

// Tu reto:
// Creá una función llamada contarProductosPorCategoria(productos, categoriaBuscada)
// que devuelva cuántos productos pertenecen a la categoría buscada.
//
// Ejemplo:
// contarProductosPorCategoria(productos, "accesorios")
// Resultado esperado: 4
