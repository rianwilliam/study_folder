//! Dois números serão colocados substituindo X e Y fatore esses números guarde os valores dentro de um array e retorne true caso eles
//! Tenham somente um número em comum ou retorne false caso eles tenham mais de um número em comum

function isCoprime(x,y) {
    const arrayX = []
    for(let i = 1; i <= x; i++) {
        if (x % i === 0) {
            arrayX.push(i)
        }
    }
    for(let e = 1; e <= y; e++) {
        if (y % e === 0) {
            if(arrayX.includes(e) && e != 1) {
                return false
            }
        }
    }
    return true
}

console.log(isCoprime(20,27))