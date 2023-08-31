//! Multiplique todos os itens dentro do parametro x e retorne o valor

function grow(x){
    const valor = x.reduce((acc,atual) => {
        return acc * atual
    })
    return valor
}

console.log(grow([2,5,7,10]))

//? Outra maneira de fazer

const multiply = x => x.reduce((a,b) => a*b);