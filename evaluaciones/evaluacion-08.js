const empleados = [
  { nombre: "Ana", edad: 25, salario: 500000, activo: true },
  { nombre: "Carlos", edad: 17, salario: 350000, activo: true },
  { nombre: "Luis", edad: 30, salario: 600000, activo: false },
  { nombre: "María", edad: 22, salario: 450000, activo: true },
  { nombre: "Pedro", edad: 28, salario: 550000, activo: true }
]

function obtenerNombresEmpleados(empleados) {
  return empleados.filter(function(empleado){
    return empleado.activo === true && empleado.edad >= 18
  }).map(function(empleado){
    return empleado.nombre
  })
}

console.log(obtenerNombresEmpleados(empleados))