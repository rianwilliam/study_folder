//! Substuia todas as palavras por "Sexta"

function toFreud(string) {
    let arr = string.split(' ').filter(function(i) {return i})
    const arr2 = []
    for(i of arr){
        arr2.push('sexta')
    }
    return arr2.join(' ')
}

console.log(toFreud('isso é um teste'))

//? Outras maneiras de se fazer

function toFreud(string) {
    return string.replace(/\S+/g, 'sex');
}