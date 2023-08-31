const filtrarBtn = document.querySelector('#filtrar')
const numeros = document.querySelector('#numeros')
const moreOrLess = [...document.querySelectorAll('.checkbox')]
let textoResultado = document.querySelector('#resultado')

const pares = (arr,tam,num) => {
    const retorno = arr.filter((item) => {
        if(tam == 'maior_que') {
            return item % 2 == 0 && item > num
        }
        else if (tam == 'menor_que') {
            return item % 2 == 0 && item < num
        }
        else {
            return item % 2 == 0
        }
    })
    
    return retorno
}

const impares = (arr,tam,num) => {
    const retorno = arr.filter((item) => {
        if (tam == 'maior_que') {
            return item % 2 != 0 && item > num
        }
        else if (tam == 'menor_que') {
            return item % 2 != 0 && item < num
        }
        else {
            return item % 2 != 0
        }
    }) 
    return retorno
}

const verificacao = (arr) => {
    if (arr.length == 1) {
        if (arr[0].classList.contains('maior_que')) {
            return 'maior_que'
        }
        else {
            return 'menor_que'
        }
    }
    else {
        return ''
    }
}

const maioresOuMenores = (arr,tam,num) => {
    const retorno = arr.filter((item) => {
        if (tam == 'maior_que') {
            return item > num
        }
        else if (tam == 'menor_que') {
            return item < num
        }
        else {
            return alert('Marque uma opção')
        }
    })
    return retorno
}


filtrarBtn.addEventListener('click', () => {
    const numerosTam = document.querySelector("#numeros_tam").value
    
    const numerosArr = numeros.value.split(' ')
    let numerosArrConvert = []
    for(item of numerosArr) {
        if(item != '') {
            numerosArrConvert.push(parseInt(item))
        }
    }

    const select = [...document.querySelectorAll('.select')].filter((item) => {
        return item.checked
    })
    const moreOrLess = [...document.querySelectorAll('.checkbox')].filter((item) => {
        return item.checked
    })

    const tamanho = verificacao(moreOrLess)

    try {
        if(select[0].classList.contains('par')) {
             resultadoPares = pares(numerosArrConvert,tamanho,parseInt(numerosTam))
             textoResultado.innerHTML = resultadoPares
        }
        else if (select[0].classList.contains('impar')) {
            resultadoImpares = impares(numerosArrConvert,tamanho,parseInt(numerosTam))
            textoResultado.innerHTML = resultadoImpares
        }
    }
    catch {
        teste = maioresOuMenores(numerosArrConvert,tamanho,parseInt(numerosTam))
        textoResultado.innerHTML = teste
    }


})
