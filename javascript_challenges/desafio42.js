//! Inverta as palavras sem trocar as posições que elas estão

function reverseWords(str) {
    const word = str.split(' ')
    const arr = []
    word.forEach(function(item) {
        newItem = item.split('').reverse().join('')
        arr.push(newItem)
    })
    return arr.join(' ')
}

console.log(reverseWords('essas palavras tem que ficar ao contrário'))

//? Outras maneiras de se fazer

function reverseWords(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}