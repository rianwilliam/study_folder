//! retorne uma saudação para o nome inserido no parametro

function greet(name){
    return `Hello, ${name} how are you doing today?`
}


console.log(greet('rian'))

//? Outras Maneiras de se fazer


function greet2(name) {
    return 'Hello <name> how are you doing today'.replace('<name>',name)
}

console.log(greet2('rian'))


const greet3=n=>`Hello, ${n} how are you doing today?`;

console.log(greet3('rian'))