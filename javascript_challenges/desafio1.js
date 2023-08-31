//! Faça um número positivo virar um número negativo

function makeNegative(num) {
    if (num < 0) {
        return num
    }
    else return num - num - num
}

console.log(makeNegative(900))

//? Outras maneiras de fazer 

function makeNegative1(num) {
    return -Math.abs(num);
}

console.log(makeNegative1(30))


function makeNegative2(num) {
    return num < 0 ? num : -num;
}

console.log(makeNegative2(20))