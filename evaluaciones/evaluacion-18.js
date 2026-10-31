const empleados = [
    { nombre: "Ana", salario: 500000, departamento: "Ventas" },
    { nombre: "Carlos", salario: 350000, departamento: "Soporte" },
    { nombre: "Luis", salario: 600000, departamento: "Desarrollo" },
    { nombre: "Maria", salario: 450000, departamento: "Ventas" },
    { nombre: "Pedro", salario: 750000, departamento: "Desarrollo" },
    { nombre: "Sofia", salario: 550000, departamento: "Soporte" },
    { nombre: "Laura", salario: 900000, departamento: "Gerencia" },
    { nombre: "Diego", salario: 850000, departamento: "Gerencia" }
]

const departamentos = ["Ventas", "Soporte", "Desarrollo", "Gerencia"]

function encontrarDepartamentoMejorPagado(empleados, departamentos) {
    const promedios = departamentos.map(function (departamento) {
        const empleadosDepartamento = empleados.filter(function (empleado) {
            return empleado.departamento === departamento
        })
        const sumaSalarios = empleadosDepartamento.reduce(function (acumulador, empleado) {
            return acumulador + empleado.salario
        }, 0)
        return {
            departamento: departamento,
            promedio: sumaSalarios / empleadosDepartamento.length
        }
    })
    return promedios.reduce(function (acumulador, departamento) {
        if (departamento.promedio > acumulador.promedio) {
            return departamento
        } else {
            return acumulador
        }
    }, promedios[0])
}

console.log(encontrarDepartamentoMejorPagado(empleados, departamentos))