//! Quebre o CamelCase colocando um espaço antes da primeira letra da palavra

function solution(string) {
    newstring = ''
    for(i of string) {
        if(/[A-Z]/.test(i)) {
            newstring += ' '
        }
        newstring += i
    }
    return newstring
}

console.log(solution('camelCasing'))

//? Outras maneiras de se fazer

function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }