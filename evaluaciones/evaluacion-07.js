const usuarios = [
  { nombre: "Ana", edad: 25, activo: true },
  { nombre: "Carlos", edad: 17, activo: true },
  { nombre: "Luis", edad: 30, activo: false },
  { nombre: "María", edad: 22, activo: true }
]

function buscarUsuarioActivo(usuarios, nombre) {
    return usuarios.find(function (usuario) {
        return usuario.nombre === nombre && usuario.activo === true
    })
}

console.log(buscarUsuarioActivo(usuarios, "María"))