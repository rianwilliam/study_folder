//! retire os valores negativos dentro do parametro arr e some eles

function positiveSum(arr) {
    newarr = arr.filter((item) => item > 0) //* o filter retorna apenas os valores que atendem a condição
    sum = 0;
    for(i in newarr) { //*isso substitui o for normal, faz a mesma função, O "i" é igual a cada elemento dentro do array
        sum += newarr[i]
    }
    return sum
}

console.log(positiveSum([1,-2,4,-10]))

//? Outras maneiras de se fazer

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
 }