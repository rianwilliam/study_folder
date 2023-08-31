//! Retorne true caso um valor do parâmetro seja par e o outro ímpar

function lovefunc(flower1, flower2){
    return (flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 == 0)
}

console.log(lovefunc(470,597))