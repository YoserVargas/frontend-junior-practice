const productos = [
  { nombre: "Mouse", precio: 8000, disponible: true },
  { nombre: "Teclado", precio: 12000, disponible: false },
  { nombre: "Audífonos", precio: 10000, disponible: true },
  { nombre: "Monitor", precio: 95000, disponible: true },
  { nombre: "Webcam", precio: 9000, disponible: false },
  { nombre: "Micrófono", precio: 14000, disponible: true }
]

// function calcularTotalProductosDisponiblesBaratos(productos) {
//     return productos.filter(function (producto) {
//         return producto.disponible === true
//     }).reduce(function (acumulador, producto) {
//         if (producto.precio < 15000) {
//             return acumulador + producto.precio
//         } else {
//             return acumulador
//         }
//     }, 0)
// }

function calcularTotalProductosDisponiblesBaratos(productos) {
   return productos.filter(function (producto) {
           return producto.disponible === true
       }).reduce(function (acumulador, producto) {
           return producto.precio < 15000
               ? acumulador + producto.precio
               : acumulador
       }, 0)
} 

const resultado = calcularTotalProductosDisponiblesBaratos(productos)
console.log(resultado)