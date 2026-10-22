const numeros = [4, 15, 8, 23, 10, 31, 6]

function obtenerDoblesDeMayoresDe10(numeros) {
    return numeros.filter(function (numero) {
        return numero > 10
    }).map(function (numero) {
        return numero * 2
    })
}

const resultado = obtenerDoblesDeMayoresDe10(numeros)
console.log(resultado)