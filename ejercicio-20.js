const compras = [
  { cliente: "Ana", producto: "Mouse", categoria: "accesorios", precio: 8000 },
  { cliente: "Carlos", producto: "Teclado", categoria: "accesorios", precio: 12000 },
  { cliente: "Ana", producto: "Audífonos", categoria: "accesorios", precio: 10000 },
  { cliente: "Ana", producto: "Monitor", categoria: "pantallas", precio: 95000 },
  { cliente: "Carlos", producto: "Webcam", categoria: "accesorios", precio: 10000 },
  { cliente: "Ana", producto: "Mousepad", categoria: "accesorios", precio: 5000 }
]

function calcularGastoPorCategoria(compras, clienteBuscado, categoriaBuscada) {
  return compras.filter(function(compra){
    return compra.cliente === clienteBuscado && compra.categoria === categoriaBuscada
  }).reduce(function(acumulador ,compra){
    return acumulador + compra.precio 
  },0)
}

const resultado = calcularGastoPorCategoria(compras, "Ana", "accesorios")
console.log(resultado)


// Tu reto:
// Creá una función llamada calcularGastoPorCategoria(compras, clienteBuscado, categoriaBuscada)
//
// Debe sumar los precios de las compras que cumplan ambas condiciones:
// 1. Que pertenezcan al cliente indicado.
// 2. Que pertenezcan a la categoría indicada.
//
// Ejemplo:
// calcularGastoPorCategoria(compras, "Ana", "accesorios")
//
// Resultado esperado: 23000
