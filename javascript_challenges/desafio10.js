//! converta strings para numbers

const stringToNumber = function(str){
    conversao = parseInt(str)
    return conversao
}

console.log(stringToNumber('10'))

//? outras maneiras de se fazer

const stringToNumber2 = (str) => +str //* tenho que estudar se a única função do "+" é converter o valor

console.log(stringToNumber2(20))