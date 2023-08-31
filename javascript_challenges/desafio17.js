//! Pegue o valor do parametro de str e o devolva a palavra invertida

function solution(str){
    return str.split('').reverse().join('') //* aqui joguei ele dentro de um array com o split apliquei o reverse e depois dei o join para retirar ele do array
}   

console.log(solution('string'))

//? outras maneiras de fazer

const solution2 = s => [...s].reverse().join('')

console.log(solution2('teste'))