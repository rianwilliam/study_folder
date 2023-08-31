//! Defina 2 valores um para "a" e um para "b" e mostre dentro de um array os valores dentro do intervalos dos números, regra: A tem que ser sempre menor que B

function between(a, b) {
    arr = []
    for(i = a;i <= b; i++){ 
        arr.push(i)
    }
    return arr
}

console.log(between(-10,70))


//? outra Maneira de se fazer

function between(a, b) {  
    const betweenArray = []
    
    while (a <= b) {
      betweenArray.push(a);
      a++;
    }
    
    return betweenArray;
  }