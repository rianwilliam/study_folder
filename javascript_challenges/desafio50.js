//! Retorne os números em array e em ordem contrária

function digitize(n) {
    let number = n.toString()
    const arr = []
    for(i of number) {
        arr.push(parseInt(i))
    }
    return arr.reverse()
}

console.log(digitize(123456789))

//? Maneira correta de se fazer

function digitize(n) {
    return String(n).split('').map(Number).reverse()
}
  