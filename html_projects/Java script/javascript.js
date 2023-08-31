/* alert ('testando') */

//tipos de var//

/* 
var vOUF = false
console.log(typeof(vOUF))

var numero = 1
numero= 3
console.log(typeof(numero))

var nome = 'Rian'
console.log(typeof(nome)) */

//escopo local e global//

/*
 var escopoglobal = 'global'
console.log(escopoglobal)

function escopolocal() {
    let escopolocalinterno = 'local'
    console.log(escopolocalinterno)
}

escopolocal() 
*/

//Tipos de comparação

/* 
var comparacao = 0 == 0;
console.log(comparacao)

var comparacaoidentica = '0' === 0
console.log(comparacaoidentica)

var comparacaoidentica = 0 === 0
console.log(comparacaoidentica) 
*/

//Representação da matemática no Java

/*
var adicao = 1 + 1
console.log(adicao)

var subtracao = 8 - 3
console.log(subtracao)

var multiplicacao = 4 * 5
console.log(multiplicacao)

var divisao = 9 / 3
console.log(divisao)

var divisaoreal = 9 % 2
console.log(divisaoreal)

var potenciacao = 4 ** 4
console.log(potenciacao)
*/

//Maior e Menor que

/*
var maiorque = 5 > 2
console.log(maiorque)

var menorque = 5 < 2
console.log(menorque)

var maiorouigual = 5 >= 2
console.log(maiorouigual)

var menorqueouigual = 5 <= 2
console.log(menorqueouigual)
*/

//verdadeiro ou falso

/*
var e = false && true
console.log(e)

var e2 = true && true
console.log(e2)

var ou = true || false
console.log(ou)

var inverter = !false
console.log(inverter)
*/

//vetores ou arrays

/*
let array = ['string', 2, true]
console.log(array)

let arraymultiplo2 = ['string', 2, false, ['array2'], ['array3'], ['array4']]
console.log(arraymultiplo2[3])

array.forEach(function(item, index){console.log(item, index)})

array.unshift()
console.log(array)

console.log(array.indexOf(true))
 */


//Lidando com vários arrays

/*let array = ['teste', 1, true, ['array2'], ['array3'], ['array4']]

array.splice(0, 3)
console.log(array)

let novoarray = array.slice(0, 2)
console.log(novoarray)

let object = {string: 'arroz', number: 1, boolean: false, array: [array]}
console.log(object.number)

var string = object.string
console.log(string)

var {string, boolean} = object 
console.log(string, boolean)
*/

//IF Junto com placar 

/*
var jogador1 = 80
var jogador2 = 100
var placar

jogador1 != -1 && jogador2 != -1 ? console.log('os jogadores são válidos') : 
console.log('os jogadores são inválidos')
    if (jogador1 > 0 && jogador2 < jogador1) {
    console.log('jogador 1 marcou um ponto')
    placar = jogador1 > jogador2

}else if (jogador2 > 0 && jogador1 < jogador2) {
    console.log('o jogador 2 marcou ponto')
    placar = jogador2 > jogador1

}else {
    (console.log('ninguém marcou ponto'))
}

switch (placar) {
    case placar = jogador2 > jogador1:
        console.log('o jogador 2 ganhou')
        break
    case placar = jogador1 > jogador2:
        console.log('o jogador 1 ganhou')
        break
    default: console.log('ninguém venceu')
}   
 */

//for e seus derivados

/*  
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5', 'valor6',]

let object = {
     propriedade1: 'valor1', propriedade2: 'valor2', propridade3: 'valor3', propridade3: 'valor4',
}

for (let indice = 0; indice < array.length; indice++) {
    console.log(indice)
} 
 */



//for in

/* for (let i in array) {
    console.log(i)
}

for (i in object) {
    console.log(i)
} 
*/

//for of

/*
 for (i of array) {
    console.log(i)
} 
*/

//while

/*
 var a = 0

while (a < 10) {
    a++
    console.log(a)
} 
*/

//do while

/* 
do {
    a++
    console.log(a)
} while (a < 10) 
*/


//Função

/* 
function funcao() {
    console.log('teste de impressão da função')
}

funcao(); 
*/

//função com parâmetro

/*
 function mensagem (primeiro, segundo) {
    console.log(segundo, primeiro)
}

mensagem('falta', 'tempo')
*/

//Expressão de função

/* 
var funcao = function () {
    console.log('mensagem de funçao de expressao')
}

funcao() 
*/

//Arrow Function

/*
var funcao = () => {
    console.log('eu sou uma arrow function')
}

funcao() 
*/