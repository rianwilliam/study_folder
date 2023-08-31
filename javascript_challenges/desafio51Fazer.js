//! Pegue as letras em pares de 2 e separe-as dentro de um array caso o número seja ímpar coloque o caractere "_" no lugar
//! da letra

function solution(str){
    arr = []
    for(i in str) {
        arr.push(str[i+i])
    }
    console.log(arr)
}

console.log(solution('abcde'))