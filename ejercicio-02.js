const numeros = [4, 15, 8, 23, 10, 31, 6]

function obtenerMayoresDe10(numeros) {
    return numeros.filter(function (numero) {
        return numero > 10
    })
}

const resultado = obtenerMayoresDe10(numeros)
console.log(resultado)
