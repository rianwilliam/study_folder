//! Retorne o maior e o menor valor do Array

let arr = [10,20,30,2,1,1,0];

const retorno = [
    arr.reduce((a,b) => {
        return Math.min(a,b)
    }),
    arr.reduce((a,b) => {
        return Math.max(a,b)
    })
]

console.log(retorno)