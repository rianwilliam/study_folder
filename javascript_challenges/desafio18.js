//! Identifique quantas vogais tem dentro do parametro de getCount e retorne apenas o número de vogais

const vogals = ['a','e','i','o','u']
function getCount(str) {
    let count = 0;
    for(let i of str) { //? estudar o for of e for in
        if(vogals.includes(i)) {
            count++
        }
    }
    return count
}

console.log(getCount('aeuioteaaa'))

//? outras maneiras de fazer

function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}


function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

//! Estudar este metodo


function getCount(str) {
    var vowelsCount = 0;
    var vowels = 'aeiou';
    return str.split("").reduce((acc,char) => {
        if (vowels.indexOf (char) > -1) {
          acc++ //* acc++ pega o valor depois ele é somando
          ++acc //* ++acc primeiro a soma e realizada para depois obter o valor
        }
        return acc
    }, 0) 
}

console.log(getCount('rian'))