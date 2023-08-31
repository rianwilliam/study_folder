function calculadora () {
    const operacao = prompt('escolha uma operação:\n 1 - soma(+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)')

    if (!operacao || operacao >= 7){
        alert('operação inválida')
        calculadora()
    }else {   
    let n1 = Number(prompt('insira o primeiro valor'))
    let n2 = Number(prompt('insira o segundo valor'))
    let resultado;

    if (!n1 || !n2) {
        alert('parâmetros inválidos')
        calculadora()
    }else {    
        function soma () {
        resultado = n1 + n2
        alert(`${n1} + ${n2} = ${resultado}`) 
        novaoperacao()
    }

    function subtracao () {
        resultado = n1 - n2
        alert(`${n1} - ${n2} = ${resultado}`)
        novaoperacao()
    }
    function multiplicacao () {
        resultado = n1 * n2
        alert(`${n1} * ${n2} = ${resultado}`) 
        novaoperacao()
    }

    function divisaoreal () {
        resultado = n1 / n2
        alert(`${n1} / ${n2} = ${resultado}`)
        novaoperacao()
    }
    function divisaointeira () {
        resultado = n1 % n2
        alert(`o resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`) 
        novaoperacao()
    }

    function potenciacao () {
        resultado = n1 ** n2
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
        novaoperacao()
    }

    function novaoperacao () {

        let opcao = prompt ('deseja fazer uma nova operação? \n 1 - Sim \n 2 - não')
        if (opcao == 1) {
            calculadora()
        }else if (opcao == 2){
            alert('até mais')
        }else {
            alert('digite uma opção válida')
            novaoperacao()
        }
    }

    if (operacao == 1) {
        soma()
    } else if (operacao == 2) {
        subtracao()
    } else if (operacao == 3) {
        multiplicacao()
    } else if (operacao == 4) {
        divisaoreal()
    } else if (operacao == 5) {
        divisaointeira()
    } else if (operacao == 6) {
        potenciacao()
    }
 }
    
    function novaoperacao () {

        let opcao = prompt ('deseja fazer uma nova operação? \n 1 - Sim \n 2 - não')
        if (opcao == 1) {
            calculadora()
        }else if (opcao == 2){
            alert('até mais')
        }else {
            alert('digite uma opção válida')
            novaoperacao()
        }
    }
}
/*     switch (operacao) {
        case 1: soma()
        break
        case 2: subtracao()
        break
        case 3: multiplicacao()
        break
        case 4: divisaoreal()
        break
        case 5: divisaointeira()
        break
        case 6: potenciacao()
    } */
}


calculadora()