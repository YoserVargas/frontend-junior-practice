const compras = [
  { cliente: "Ana", precio: 8000 },
  { cliente: "Carlos", precio: 12000 },
  { cliente: "Ana", precio: 10000 },
  { cliente: "Pedro", precio: 15000 },
  { cliente: "Ana", precio: 5000 }
]

function calcularGastoCliente(compras, clienteBuscado) {
    return compras.filter(function(compra){
        return compra.cliente === clienteBuscado
    }).reduce(function(acumulador, compra){
        return acumulador + compra.precio
    },0)
}

const resultado = calcularGastoCliente(compras, "Ana")
console.log(resultado)