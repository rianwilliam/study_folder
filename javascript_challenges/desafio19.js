//! Some os números do parametro e retorne eles em binário

function addBinary(a,b) {
    let convert = a + b
    return convert.toString(2)
}

console.log(addBinary(20,10))

//? outras maneiras de se fazer

const addBinary2 = (a, b) => (a + b).toString(2);

console.log(addBinary2(10,10))