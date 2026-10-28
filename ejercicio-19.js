const compras = [
  { cliente: "Ana", producto: "Mouse", precio: 8000 },
  { cliente: "Carlos", producto: "Teclado", precio: 12000 },
  { cliente: "Ana", producto: "Audífonos", precio: 10000 },
  { cliente: "Pedro", producto: "Monitor", precio: 95000 },
  { cliente: "Carlos", producto: "Webcam", precio: 10000 },
  { cliente: "Ana", producto: "Mousepad", precio: 5000 }
]

function calcularGastoCliente(compras, clienteBuscado) {
  return compras.filter(function(compra){
    return compra.cliente === clienteBuscado
  }).reduce(function(acumulador, compra){
    return acumulador + compra.precio
  }, 0)
}

const resultado = calcularGastoCliente(compras, "Ana")
console.log(resultado)

// Tu reto:
// Creá una función llamada calcularGastoCliente(compras, clienteBuscado)
// que calcule cuánto gastó el cliente indicado.
//
// Ejemplo:
// calcularGastoCliente(compras, "Ana")
//
// Resultado esperado: 23000
