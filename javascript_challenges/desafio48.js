//! Some todos os elementos dentro do array exceto o elemento mais alto e o mais baixo

function sumArray(array) {
    if(!array) return 0;

    const arr = [ ...array ];
    
    arr.splice(arr.indexOf(Math.max(...arr)), 1);
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    
    if(!arr.length) return 0;
    
    return arr.reduce((a, b) => a + b);
}

console.log(sumArray([6, 2, 1, 8, 10]))

//? Outras maneiras de se fazer

function sumArray(array) {
    if(!array || array.length <= 1) return 0
    return array.reduce((a, b) => a + b) - Math.min(...array) - Math.max(...array);
}

