//! Para determinar seu cargo em um clube é feita uma verificação de sua idade e seu "nivel" para entrar sua idade tem que
//! Ser maior ou igual a 55 e seu nível maior que 7

function openOrSenior(data){
    const arr = []
    for(i of data) { //* Aqui fiz o loop para pegar o subArray
        i[0] >= 55 && i[1] > 7 ? arr.push('Senior') : arr.push('Open') //* E apliquei as condições
    }
    return arr
}

console.log(openOrSenior([[56,20],[40,10],[18,17]])) //*Aqui o valores vinha dentro de um subArray

//? Outras maneiras de se fazer


function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}