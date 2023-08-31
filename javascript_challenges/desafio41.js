//! Retorne um array onde o primeiro elemento é a contagem dos números positivos e o segundo a soma dos 
//! números negativos

function countPositivesSumNegatives(input) {
    let positive = 0
    let negative = 0
    for(i of input) {
        if(i > 0) {
            positive += 1
        }
        else negative += i
    }
    const arr = []
    if(input.length) {
        arr.push(positive,negative)
    }
    return arr
}

console.log(countPositivesSumNegatives([]))

//! Deu erro dizendo que input não é interável