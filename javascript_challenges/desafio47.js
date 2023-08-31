//! Mutiplique um número por 8 se ele for par e por 9 caso ele seja ímpar

function simpleMultiplication(number) {
    return number % 2 !== 0 ? number * 9 : number * 8
}

console.log(simpleMultiplication())