const productos = [
    { nombre: "Teclado", precio: 12000 },
    { nombre: "Mouse", precio: 8000 },
    { nombre: "Monitor", precio: 95000 },
    { nombre: "Audífonos", precio: 10000 }
]

function obtenerProductosEnOferta(productos) {
    return productos.filter(function (producto) {
        return producto.precio < 11000
    })
}

const resultado = obtenerProductosEnOferta(productos)
console.log(resultado)