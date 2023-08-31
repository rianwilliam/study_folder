//! Verificar se a string possui letra maiuscula

function solution(string) {
    return /[A-Z]/.test(string)
}

console.log(solution('camelCasing'))