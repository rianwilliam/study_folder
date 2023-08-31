//! Retorne dentro de um array apenas os valores ímpares e remova os valores pares

function removeEveryOther(arr){
    for(let i = 1; i <= arr.length; i++) {
        if(i % 2 !== 0) { //* Aqui peguei os valores ímpares do array
            arr[i] = '' //* Disse que os substituisse por strings vazias
        }
    }
    arr2 = arr.filter(function(i){return(i)}) //* estudar mais esta função
    return arr2
}

console.log(removeEveryOther(["keep",'remove',"keep",'remove',"keep",'remove',]))


//? Outras maneiras de fazer

function removeEveryOther(arr){
    return arr.filter(function(elem, index) {  //* Aqui ele usou o filter para passar o index
      return index % 2 === 0; //* e pediu para retornar apenas os números pares
    });
}

console.log(removeEveryOther(["keep",'remove',"keep",'remove',"keep",'remove',]))