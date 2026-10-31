const empleados = [
  { nombre: "Ana", salario: 500000, departamento: "Ventas" },
  { nombre: "Carlos", salario: 350000, departamento: "Soporte" },
  { nombre: "Luis", salario: 600000, departamento: "Desarrollo" },
  { nombre: "Maria", salario: 450000, departamento: "Ventas" },
  { nombre: "Pedro", salario: 750000, departamento: "Desarrollo" },
  { nombre: "Sofia", salario: 550000, departamento: "Soporte" }
]

function encontrarEmpleadoMejorPagado(empleados) {
    return empleados.reduce(function (acumulador, empleado) {
        if (acumulador.salario < empleado.salario) {
            return empleado
        } else {
            return acumulador
        }
    }, empleados[0])
}

console.log(encontrarEmpleadoMejorPagado(empleados))