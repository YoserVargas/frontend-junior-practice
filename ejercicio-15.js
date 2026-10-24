const productos = [
    { nombre: "Mouse", precio: 8000, disponible: true },
    { nombre: "Audífonos", precio: 10000, disponible: true },
    { nombre: "Teclado", precio: 12000, disponible: false },
    { nombre: "Webcam", precio: 10000, disponible: true },
    { nombre: "Monitor", precio: 95000, disponible: true },
    { nombre: "Micrófono", precio: 15000, disponible: false }
]

function calcularTotalDisponibles(productos) {
    return productos.filter(function (producto) {
        return producto.disponible === true
    }).reduce(function (acumulador, producto) {
        return acumulador + producto.precio
    }, 0)
}

const resultado = calcularTotalDisponibles(productos)
console.log(resultado)