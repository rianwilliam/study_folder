//! Retorne os números negativos caso sejam positivos e positivos caso sejam negativos

function invert(array) {
    let e = 0
    const result = []
    for(i of array) {
        result.push(array[e] * -1)
        e += 1
    }
    return result
}

console.log(invert([1,2,3,4,5]))


//? Maneira correta de se fazer

function invert(array) {
    return array.map( x => x === 0 ? x : -x);
}