const personajes = [
  { nombre: "Guerrero", nivel: 15 },
  { nombre: "Mago", nivel: 8 },
  { nombre: "Arquero", nivel: 20 },
  { nombre: "Curandera", nivel: 10 }
]

function obtenerPersonajesFuertes(personajes) {
    return personajes.filter(function (personaje) {
        return personaje.nivel > 10
    })
}
const resultado = obtenerPersonajesFuertes(personajes)
console.log(resultado)