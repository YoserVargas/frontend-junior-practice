const empleados = [
  {
    nombre: "Carlos",
    departamento: "Ventas",
    ventas: [120000, 85000, 95000]
  },
  {
    nombre: "Ana",
    departamento: "Ventas",
    ventas: [150000, 110000, 90000]
  },
  {
    nombre: "Luis",
    departamento: "Soporte",
    ventas: [50000, 45000, 60000]
  },
  {
    nombre: "María",
    departamento: "Ventas",
    ventas: [180000, 125000, 100000]
  },
  {
    nombre: "Pedro",
    departamento: "Soporte",
    ventas: [70000, 65000, 55000]
  },
  {
    nombre: "Sofía",
    departamento: "Ventas",
    ventas: [130000, 140000, 115000]
  }
];

function encontrarMejorEmpleado(empleados) {
    let mejorEmpleado = empleados[0];
    let mejorTotal = empleados[0].ventas.reduce((a, b) => a + b, 0);
    let mejorPromedio = mejorTotal / empleados[0].ventas.length;

    for (const empleado of empleados) {
        if (empleado.departamento !== "Ventas") {
            continue;
        }
        const totalVentas = empleado.ventas.reduce((a, b) => a + b, 0);
        const promedio = totalVentas / empleado.ventas.length;
        if (promedio > mejorPromedio) {
            mejorTotal = totalVentas;
            mejorPromedio = promedio;
            mejorEmpleado = empleado;
        }
    }
    return {
        nombre: mejorEmpleado.nombre,
        departamento: mejorEmpleado.departamento,
        totalVendido: mejorTotal,
        promedio: mejorPromedio
    };
}

console.log(encontrarMejorEmpleado(empleados));