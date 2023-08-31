

//! n,s,w,e

let x = 0
let y = 0

let matriz = ['w','e','w','e','w','e','w','e','w','e','w','e']

const resultado = () => {
    for(i of matriz) {
        i == "n" ? y += 1 : 
        i == "s" ? y -= 1 :
        i == "e" ? x += 1 :
        i == "w" ? x -= 1 : false
    }
    return x == 0 && y == 0  && matriz.length <= 10 ? true : false
}


console.log(resultado())