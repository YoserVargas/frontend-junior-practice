const compras = [
  { cliente: "Ana", producto: "Mouse", categoria: "accesorios", precio: 8000 },
  { cliente: "Carlos", producto: "Teclado", categoria: "accesorios", precio: 12000 },
  { cliente: "Ana", producto: "Monitor", categoria: "electronica", precio: 95000 },
  { cliente: "Luis", producto: "Audífonos", categoria: "accesorios", precio: 10000 },
  { cliente: "Carlos", producto: "Webcam", categoria: "electronica", precio: 9000 },
  { cliente: "Ana", producto: "Micrófono", categoria: "accesorios", precio: 14000 },
  { cliente: "Luis", producto: "Monitor", categoria: "electronica", precio: 85000 }
]

function calcularGastoCliente(compras, nombreCliente) {
  return compras.filter(function(compra){
    return compra.cliente === nombreCliente
  }).reduce(function(acumulador, compra){
    return acumulador + compra.precio
  },0)
}

console.log(calcularGastoCliente(compras, "Ana"))

