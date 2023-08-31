//! verifique se a segunda string termina com as mesmas letras do começo da segunda string

function solution(str, ending){
    if(str.endsWith(ending)) { //* endsWith verfica se aquela palavra termina com o que foi comparado (Mais explicações no arquivo voltado para essa função)
        return true
    }
    return false
}

console.log(solution('abrr','brr'))

//? Maneira correta de se fazer

function solution(str, ending){
    return str.endsWith(ending);
}

//* também da para usar o indexOf para resolver

function solution(str, ending){
    return str.indexOf(ending, str.length - ending.length) !== -1;
}
  