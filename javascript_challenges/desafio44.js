//! Remova a primeira e a última letra da palavra dada

function removeChar(str){
    return str.split('').splice((1),str.length -2,'').join('')
}

console.log(removeChar('personificação'))

//? Maneira certa de fazer

function removeChar(str) {
    return str.slice(1, -1);
} 