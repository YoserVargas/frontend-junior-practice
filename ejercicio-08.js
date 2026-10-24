const productos = [
    { nombre: "Teclado", precio: 12000 },
    { nombre: "Mouse", precio: 8000 },
    { nombre: "Monitor", precio: 95000 },
    { nombre: "Audífonos", precio: 10000 }
]

function buscarProductoPorPrecio(productos, precioBuscado) {
    return productos.find(function (producto) {
        return producto.precio === precioBuscado
    })
}

const resultado = buscarProductoPorPrecio(productos, 8000)
console.log(resultado)