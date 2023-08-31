//teste

let arroz = 200
let feijao = 400
let suco = 50
let dinheiro = 600

let valordacompra = arroz + feijao + suco


let limite = valordacompra > dinheiro ? 'sem dinheiro' : 'tenho dinheiro'


console.log(limite)




let nome = 'rafael'
let idade = 2.5
let estaAprovado = true
let sobrenome = undefined
let corSelecionado = null 


//formas de localizar ou imprimir

/* console.log(typeof nome)
console.log(typeof idade)
console.log(typeof estaAprovado, sobrenome)
console.log(typeof corSelecionado)

console.log(nome, idade, estaAprovado, sobrenome, corSelecionado) */




//Objetos (são tipos por referência, como: objects arrays e funtions) São representados por chaves

let pessoa = {
    nome: 'rafael',
    idade: 2.5,
    estaAprovado: true,
}

console.log(pessoa)

console.log(pessoa.idade) //acessar apenas o item idade dentro de pessoa

//arrays, é um conjunto de dados que pode ser acessado por um índice, são representados por colchetes

let familia = [
    26,true,85,'Familia teste'
]

console.log(familia)

console.log(familia[2]) //exibir apenas o item número 2

console.log(familia.length) //exibir o tamanho do array




//funções, para nomear o certo é pensar em colocar: verbo + substantivo (como se determinasse uma ação e o que ela faz) (o valor dentro dos parênteses são os parâmetros)

/* let corSite = "azul"

function resetaCor() {
    corSite = ''; //aqui as aspas serve para resetar o valor
};

console.log(corSite) //aqui eu defini a cor do site como azul

resetaCor() //aqui eu executei a função de resetar a cor do site

console.log(corSite) */




//função com parâmetros 

let corSite = 'azul' //aqui defini a cor do site

function resetaCor(cor, tonalidade) {
    corSite = cor + ' ' + tonalidade; //isso no meio serve para dar espaço entre um parâmetro e outro
}

console.log(corSite) //aqui imprimi a cor atual do site, ou seja azul

resetaCor('cor de rosa' ,'escuro') //aqui modifiquei a cor e tonalidade

console.log(corSite) //aqui imprimi novamente já com as cores alteradas

//diferentes tipos de funções, temos dois tipos de função: a primeira realiza uma tarefa e não devolve nada

function dizerNome() {
    console.log('Rian william')
}

dizerNome()

// E a segunda é com retorno de dados que apresentam um resultado

function multiplicar(valor) {
    return valor* 2
}

let result = multiplicar(10)

console.log(result)


//console.log(multiplicar(5)) //aqui dentro de parênteses eu defini o "valor" mencionado acima para ele multiplicar


//operadores 
//operadores aritméticos(matemáticos)

let novaidade = 100;
console.log(++novaidade)//++ adiciona apenas um valor 

let novaidade2 = 50

console.log(--novaidade2) //-- subtrai apenas um valor

//operadores atribuição

//soma o valor do teclado duas vezes
let valorteclado = 100
valorteclado += valorteclado
console.log(valorteclado)

//operadores de igualdade

//igualdade estrita, leva em consideração o tipo 
//(number boolean ou string)

console.log( 1 === 'jorge') //false
console.log( 1 === 1) //true

//igualdade solta

console.log(1 =='1') //ignora o tipo e conta somente o valor

//operador ternario
//tem um cliente, se ele tiver +100(premium), se não comum

let pontos = 100

let tipo = pontos > 100 ? 'premium' : 'comum' 
console.log(tipo) //serve para ele comparar valores 


//operadores lógicos tem o and,or e not

//and (&&)

console.log(true && true) //true
console.log(false && true) //false

let maiordeidade = true
let carteiradetrabalho = false

let podeaplicar = maiordeidade && carteiradetrabalho

console.log('pode aplicar: ',podeaplicar)


//not (!)
let candidatorecusado = !podeaplicar; 

console.log('candidato recusado: ',candidatorecusado)

//or (||)

console.log(true || false) //true
console.log(false || false) //false

//falsy:
//undefined, null, 0, false, '', NaN

//truthy

//if, else

//se a hora estiver entre as 6 horas até 12, exibir bom dia 
//se estiver entre 12 e 18, exibir boa tarde
//caso contrário, boa noite

let hora = 6;

/* if (condicao) {
    //código a ser executado caso a condição seja atendida
} */

if (hora >= 6 && hora < 12) {
    console.log('bom dia')
}
else if (hora >= 12 && hora < 18) {
    console.log('boa tarde')
}
else {
    console.log('boa noite')
}


//Switch case (uma das outras formas de fazer comparação)

let permissao; //comum, gerente ou diretor

permissao = 'gerente'

switch (permissao) {
    case 'comum':
        console.log('Usuário comum')
        break

    case 'gerente':
        console.log('usuário gerente')
        break

    case 'diretor':
        console.log('usuário diretor')
        break

    default:
    console.log('usuário não reconhecido')
}

//loops

//for

for (let i = 5;i >= 1;i--) { //i é a propriedade de índice
    if(i % 2 !== 0) {
        console.log(i)
    } //aqui é para imprimir apenas os números ímpares
}

//while

let j = 5

while (j >= 1) { //Aqui ele vai ter a mesma função do anterior porém utilizando o "while"
    if (j % 2 !== 0) {
        console.log(j)
    }
    j--
}


//do while

let i = 0

do {
    console.log('Digitando...', i)
    i++
} while (i < 10) 
//se não colocar o while ele vai ficar me loop

//for in

const serhumano = {
    nome: 'marcos',
    idade: 25
}

//'chave' significa key-value
for (let chave in serhumano) {
    //para acessar uma propriedade específica
    console.log(chave, serhumano['idade']) 
}

const cores = ['vermelho', 'azul', 'verde']

for (indice in cores) { //indice em(in) cores 
    //para acessar os números dos índices junto com a informação dentro deles
    console.log(indice,cores[indice]) 
}

//for of

for (let cor of cores) { // let é "cor" de(of) "cores" 
    console.log(cor)
} //Aqui ele vai exibir os valores dentro do array cores, bem mais simples que a forma anterior

//fizzbuzz
//divisível por 3 =>  retorna fizz 
//divisível por 5 =>  retorna buzz
//divisível por 3 e 5 => retorna fizzbuzz
//não divisível por 3 e 5 => retorna entrada

const resultado = fizzbuzz(15)
console.log(resultado)

function fizzbuzz(entrada) {
    //aqui eu estou dizendo que se entrada for diferente do tipo número retornar a mensagem
    if (typeof entrada !== 'number') 
        return 'este não é um número'
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'Fizzbuzz'
    //aqui estou dizendo se entrada for divisível por 3 ou seja não apresente resto, exiba fizz
    if (entrada % 3 === 0)
        return 'fizz'
    //aqui estou dizendo se entrada for divisível por 5 ou seja não apresente resto, exiba buzz
    if (entrada % 5 === 0)
        return 'buzz'
    //caso nenhuma das condições acima seja atendida, exiba o valor de entrada
    else return entrada
}

//Factory Functions
//Aqui criei a funcao "criar celular" dentro dela coloquei para ele retornar os 3 itens mostrados abaixo e dentro dos parênteses coloquei os valores que vão ser alterados, para criar vários celulares e não precisar copiar e colar o código

function criarcelular(marcacelular,tamanhotela, capacidadebateria)//Aqui são os parâmetros a serem alterados
{ 
    return {
        marcacelular, //aqui ele vai mostar o nome "marca celular e depois a marca que descrevi"
        tamanhotela, //o mesmo vale para estes dois
        capacidadebateria,
        ligar() {
            console.log('fazendo ligação')
        }
    }
}

const celular1 = criarcelular('zenphone', 5.5, 5000)
console.log(celular1) //Aqui criei o celular 1 e atribui as características do celular

const celular2 = criarcelular('motorola', 6.5, 5000)
console.log(celular2) 

//este é um novo método de fazer o que foi feito no comado acima, porém utilizando os comandos "this" e "new"

function Celular(marcacelular, tamanhotela, capacidadebateria)//Aqui determinei os parâmetros
{
    this.marcacelular = marcacelular //aqui coloquei algo como "essa marcacelular é igual a marcacelular"
    this.tamanhotela = tamanhotela
    this.capacidadebateria = capacidadebateria
    this.ligar = function () {
        console.log ('fazendo ligação')
    }
}

//Aí como não utilizei o return no comando acima tive que usar a forma mostrada abaixo para que ele puxe as informações da função para aplicar no console.log

const celular = new Celular ('iphone', 4.4,1000)
console.log(celular) //criei a constante, celular dizendo que ela seria igual a "new Celular" depois passei as propriedades e imprimi no console.log  


//Natureza dinâmica de objetos 

let mouse = { //aqui criei uma variável e coloquei algumas propriedades dentro dela
    cor: 'blue', //determinei algumas propriedades para o mouse
    marca: 'multilaser',
}
mouse.velocidade = 400 //Essa é uma forma de adicionar propriedades a variável, usa o nome da variável o ponto o nome da nova propriedade e determina o valor
mouse.mudarDPI = function() { //pode-se também criar funções de maneira externa
    console.log('mudandodpi')
}
delete mouse.velocidade //neste comando podemos deletar alguma propriedade adicionada sem precisar ficar buscando por ela no código
delete mouse.cor

console.log(mouse)


//clonando objetos
//Para clonar um objeto usamos a função objeto.assign

const objetoclonado = Object.assign({ //O comando clona a variável que é colocada dentro dele 
    teste: '123', //aqui podemos também adicionar novas propriedades ao objeto clonado
    mouse //aqui é o nome da variável que clonei
})

console.log(objetoclonado)

const objetoclonado2 = {...mouse} //esta é outra forma de clonar um objeto
console.log(objetoclonado2)

//math 

//math.random() utilizado para criar número aleatorios

//math.max(3,6,9,12) Ele vai me dizer qual é o maior valor

//math.min(10,3,5,4) Ele vai me dizer qual é o menor valor


//String (Métodos de uma string)
//tem dois tipos de String, o primitivo que é o convencional

//temos também do tipo objeto
const mensagemnovastring = new String('bom dia')
//Usando o typeof o resultado retornado é um objeto e não uma string essa é a diferença

//para acessar uma informação dentro da string:
//mensagemnovastring[2] le vai mostrar apenas o índice número 2 da string

//para pesquisar dentro de uma string
//mensagemnovastring.includes('dia') ele vai retornar true pois a palavra dia existe dentro da mensagem

//para saber qual palavra a string se inicia
//mensagemnovastring.startswith('bom') ele vai retornar true pois a string se inicia com "bom"

//Para saber qual palavra a string termina
//mensagemnovastring.endswith("dia") ele vai retornar true pois a string termina com a palavra "dia"

//para indentificar o índice dentro da string
//mensagemnovastring.indexof("bom") ela vai me retornar o índice da palavra que eu coloquei dentro de parênteses

//o replace vai substituir o valor
//mensagemnovastring.replace('dia','noite') aqui ele vai substituir o nome "dia" por "noite"

//para tirar espaços a mais de uma mensagem
//mensagemnovastring.trin() ele vai tirar todos os espaços extras que a frase tiver

//para quebrar uma frase 
//mensagemnovastring.split(' ') essa função funciona igual o BR do html ele faz a quebra de linha, dentro de parênteses coloquei um espaço para ele adicionar o espaço entre cada palavra


