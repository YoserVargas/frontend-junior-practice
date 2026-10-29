const estudiantes = [
  { nombre: "Ana", nota: 90, aprobado: true },
  { nombre: "Carlos", nota: 55, aprobado: false },
  { nombre: "María", nota: 80, aprobado: true },
  { nombre: "Luis", nota: 65, aprobado: true },
  { nombre: "Pedro", nota: 40, aprobado: false }
]

function calcularPromedioAprobados(estudiantes) {
    const aprobados = estudiantes.filter(function (estudiante) {
        return estudiante.aprobado === true
    })
    const suma = aprobados.reduce(function (acumulador, estudiante) {
        return acumulador + estudiante.nota
    }, 0)
    return suma / aprobados.length
}

console.log(calcularPromedioAprobados(estudiantes))