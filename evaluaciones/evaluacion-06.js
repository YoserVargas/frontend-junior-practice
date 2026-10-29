const ventas = [
  { cliente: "Ana", producto: "Mouse", total: 8000, pagada: true },
  { cliente: "Carlos", producto: "Teclado", total: 12000, pagada: false },
  { cliente: "Ana", producto: "Monitor", total: 95000, pagada: true },
  { cliente: "Luis", producto: "Audífonos", total: 10000, pagada: true },
  { cliente: "Carlos", producto: "Webcam", total: 9000, pagada: true },
  { cliente: "Ana", producto: "Micrófono", total: 14000, pagada: false }
]

function calcularVentasPagadas(ventas) {
  return ventas.filter(function(venta){
    return venta.pagada === true
  }).reduce(function(acumulador, venta){
    return acumulador + venta.total
  },0)
}

console.log(calcularVentasPagadas(ventas))