const empleados = [
  { nombre: "Ana", salario: 500000, departamento: "Ventas" },
  { nombre: "Carlos", salario: 350000, departamento: "Soporte" },
  { nombre: "Luis", salario: 600000, departamento: "Desarrollo" },
  { nombre: "Maria", salario: 450000, departamento: "Ventas" },
  { nombre: "Pedro", salario: 750000, departamento: "Desarrollo" },
  { nombre: "Sofia", salario: 550000, departamento: "Soporte" }
]

function calcularSalarioPromedio(empleados, departamento) {
    const empleadosDepartamento = empleados.filter(function (empleado) {
        return empleado.departamento === departamento
    })
    const sumaSalarios = empleadosDepartamento.reduce(function (acumulador, empleado) {
        return acumulador + empleado.salario
    }, 0)
    return sumaSalarios / empleadosDepartamento.length
}

console.log(calcularSalarioPromedio(empleados, "Desarrollo"))