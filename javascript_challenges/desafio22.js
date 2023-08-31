//! transforme o número binário em hexadecimal

const binaryArrayToNumber = arr => {
    let newarr = arr.reverse()
    let acc = 1
    let result = 0
    for(i of newarr) {
        if(i === 1) {
            result += (i * acc)
        }
        acc *= 2
    }
    return result
}

console.log(binaryArrayToNumber([0,1,0,1,0,1]))

//? Outras maneiras de se fazer
//! Aqui basicamnte ele usou o reduce, o total é o acumulador e é somado com o currentItem o zero no final é o que
//! Se deve desconsiderar ou seja ele não vai passar pela função reduce

const binaryArrayToNumber2 = arr => {
    return arr.reduce((total, cur) => (total = total * 2 + cur), 0);
}

