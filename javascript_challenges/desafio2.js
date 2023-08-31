//! transforme o valor booleano do console.log em string

function booleanToString(b){
    if (b === true) {
        return 'true'
    }
    else return 'false'
}

console.log(booleanToString(true))

//? Maneiras corretas de se fazer

function booleanToString(b){
    return b.toString();
}

function booleanToString(b){
    return String(b);
}

function booleanToString(b){
    return `${b}`
}

