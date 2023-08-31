//! Diga se o número dado é narcisista ou não
//! Número narcisista é aquele que ao ser somado com cada número individual elevado ao número de dígitos do número inteiro é retornado ele mesmo_

function isNarcissistic(n) {
    const str = n.toString()
    let result = 0
    for(let i = 0; i < str.length; i++)
        result += Math.pow(Number(str[i]), str.length)
    return result === n
}

console.log(isNarcissistic(153))

//? Outras maneiras de se fazer

function isNarcissistic(n){
    return n === +[...n.toString()].reduce((s, v, i, arr) => s + Math.pow(v, arr.length),0)
}