const usuarios = [
  { nombre: "Ana", edad: 17, activo: true },
  { nombre: "Carlos", edad: 25, activo: true },
  { nombre: "María", edad: 30, activo: false },
  { nombre: "Pedro", edad: 19, activo: true },
  { nombre: "Laura", edad: 16, activo: false }
]

function obtenerUsuariosActivosMayores(usuarios) {
  return usuarios.filter(function (usuario) {
    return usuario.edad >= 18 && usuario.activo === true
  }).map(function(usuario){
    return usuario.nombre
  })
}

const resultado = obtenerUsuariosActivosMayores(usuarios)
console.log(resultado)