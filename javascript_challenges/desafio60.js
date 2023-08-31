
//! Faça retornar o valor das letras da palvra desconsiderando a primeira e a última letra

function contagem(palavra) {
    arrPalavra = palavra.split('')
    arrPalavraCortada = arrPalavra.slice(1,-1).length
    return `${arrPalavra[0]}${arrPalavraCortada}${arrPalavra.slice(-1)}`
}


console.log(contagem('Otorrinolaringologista')) //* Insira a palavra