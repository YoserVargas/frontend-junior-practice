const productos = [
  { nombre: "Mouse", categoria: "accesorios", precio: 8000 },
  { nombre: "Teclado", categoria: "accesorios", precio: 12000 },
  { nombre: "Monitor", categoria: "electronica", precio: 95000 },
  { nombre: "Audífonos", categoria: "accesorios", precio: 10000 },
  { nombre: "Webcam", categoria: "electronica", precio: 9000 },
  { nombre: "Micrófono", categoria: "accesorios", precio: 14000 },
  { nombre: "Impresora", categoria: "oficina", precio: 45000 },
  { nombre: "Laptop", categoria: "electronica", precio: 250000 }
]

function contarProductosPorCategoria(productos, categoria) {
  const acce = productos.filter(function(producto){
    return producto.categoria === categoria
  })
  return acce.length
}

console.log(contarProductosPorCategoria(productos, "accesorios"))