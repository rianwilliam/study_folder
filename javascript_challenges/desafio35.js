var summation = function (num) {
    sum = 0;
    for(let i = 1; i <= num; i++) {
        sum += i
    }
    return sum
}

console.log(summation(5))

//? Outras maneiras de fazer

function summation(num) {
    return num * (num + 1) / 2 //* Numero vezes ele mesmo mais 1 e depois divide por 2
  }