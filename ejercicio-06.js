const productos = [
  { nombre: "Teclado", precio: 12000, categoria: "accesorios" },
  { nombre: "Mouse", precio: 8000, categoria: "accesorios" },
  { nombre: "Monitor", precio: 95000, categoria: "pantallas" },
  { nombre: "Audífonos", precio: 10000, categoria: "accesorios" },
  { nombre: "Webcam", precio: 18000, categoria: "accesorios" }
]

function obtenerAccesoriosEconomicos(productos) {
    return productos.filter(function (producto) {
        return producto.categoria === "accesorios" && producto.precio < 11000
    })
}

const resultado = obtenerAccesoriosEconomicos(productos)
console.log(resultado)