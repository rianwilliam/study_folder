//! Retorne true se a quantidade de X for igual a quantidade de O, tanto as maiusculas quanto as minusculas contam

function XO(str) {
    let countX = 0
    let countO = 0
    for(i of str) {
        if (i === 'x' || i === 'X') {
            countX += 1
        }
        if (i === 'o' || i === 'O') {
            countO += 1
        }
    }   
    return countO === countX ? true : false
}

console.log(XO('XxxoOO'))