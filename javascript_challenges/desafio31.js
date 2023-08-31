//! Faça retornar os multiplicadores do número estabelecido no parametro, por exemplo os 20 primeiros multiplicadores de 2

function countBy(x, n) {
    arr = []
    for(let i = 1; i <= n; i++) {
        arr.push(x*i)
    }
    return arr
}

console.log(countBy(2,20))

//? Maneira correta de se fazer
