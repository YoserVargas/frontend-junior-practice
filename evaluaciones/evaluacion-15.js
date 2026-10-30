const productos = [
  { nombre: "Mouse", categoria: "accesorios", precio: 8000 },
  { nombre: "Teclado", categoria: "accesorios", precio: 12000 },
  { nombre: "Monitor", categoria: "electronica", precio: 95000 },
  { nombre: "Audífonos", categoria: "accesorios", precio: 10000 },
  { nombre: "Laptop", categoria: "electronica", precio: 250000 },
  { nombre: "Webcam", categoria: "electronica", precio: 9000 },
  { nombre: "Micrófono", categoria: "accesorios", precio: 14000 }
]

function encontrarProductoMasCaroPorCategoria(productos, categoria) {
    const productosCategoria = productos.filter(function (producto) {
        return producto.categoria === categoria
    })
    const productoMasCaro = productosCategoria.reduce(function (acumulador, producto) {
        if (acumulador.precio < producto.precio) {
            return producto
        } else {
            return acumulador
        }
    }, productosCategoria[0])
    return productoMasCaro
}

console.log(encontrarProductoMasCaroPorCategoria(productos, "accesorios"))