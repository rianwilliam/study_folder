//! pegue o valor de cada item do parametro se o valor for menor que 5 retorne 0, se for maior que 5 retorne 1

function fakeBin(x){
    finalResult = '';
    for(i of x) {
        if(i < 5) {
            finalResult += '0'
        }
        else finalResult += '1'
    }
    return finalResult
}

console.log(fakeBin('65165165'))


//? Maneiras corretas de se fazer

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join(''); //* aqui ele adicionou o valor da string dentro do array com split depois passou um por um com o map
                                                        //* E atribuiu se n menor que 5 se sim retorne zero se não retorne 1
}