//Escreva uma função que usa 2 números e retorna o maior entre eles


let valormaior = maiornumero(10, 5)
console.log(valormaior)

function maiornumero(numero1, numero2) {
     /* if(numero1 > numero2)
        return numero1
    return numero2 */ //uma forma de fazer

    return numero1 > numero2 ? numero1 : numero2; 
    //este também é um método viável de ser fazer.
}

let arroz = 'talvez'

function disponivel(tem, naotem) {
    arroz = tem + ' ' + naotem
}

console.log(arroz)

disponivel('tem' , 'nao tem')

console.log(arroz)


//Radar de velocidade
//valocidade máxima de até 70kmh 
//a cada 5 kmh acima do limite você ganha um ponto acima da carteira
//usar função math.floor
//caso os pontos sejam maior que 12 a carteira e suspendida

//Aqui eu disse que a velocidade minima é igual ao número do medirvelocidade

velocidademinima = medirvelocidade(130) 

function medirvelocidade(velocidade) { //criei a função medir velocidade

    const velocidademaxima = 70; //defini a constante para usar no valor do 70

    const kmporponto = 5; //defini para usar no valor do 5

    if (velocidade <= velocidademaxima) //disse que se velocidade estivesse igual ou abaixo de 70  retornasse a mensagem
        return 'esta na media de velocidade'

    else { //se não estivesse, criei a constante pontos que faz a velocidade atual -70 e divide por 5 depois disse que "se" pontos for maior ou igual a 12 retornar mensagem
        const pontos = Math.floor(((velocidade - velocidademaxima) / kmporponto))
        
        if (pontos >= 12)
            return 'carteira suspensa'
        
        else //se não fosse, retornar pontos e o valor de pontos
            return  pontos
    }

}//um else pode ser colocado dentro de um IF e virse versa

console.log(velocidademinima)


//Valor par ou ímpar 
//receber uma quantidade de valores para avaliar
//função exibe se cada valor passador é para ou ímpar

exibirtipo(10)

function exibirtipo(limite) { //aqui criei a função exibirtipo com o parâmetro limite
    for (let i = 0; i <= limite; i++) { //criei uma let com o índice = 0  e disse que se ele for menor que limite adicione um indice
        if (i % 2 === 0) //se a divisão entre indice não apresentar sobra o valor vai ser par
            console.log(i,'par') //aqui pedi para ele imprimir o valor de índice juntamente com o nome par
        
        else 
            console.log(i,'impar') //caso a condição acima não seja atendida o valor ser impar, também pedi aqui o valor de índice junto com o nome impar
    }
}

exibirtipo()

//criar método de exibir as propiedades um objeto e exibir apenas as strings
//criar um objeto para ler propriedades de um objeto 
//somente serão exibidas no console as propriedas que são string


const filme = { //aqui determinei dentro da const filmes (que no caso é um objeto)
    titulo: 'vingadores',
    ano: 2019,
    diretor: 'diretor',
    personagem: 'thor',
}


function exibirstring(obj) { //aqui disse que o parâmetro a ser alterado seria obj
    for (prop in obj) //prop é a propriedade ex: titulo e obj é o valor dentro de prop ou seja o valor denro de titulo
        if (typeof obj[prop] === 'string') //aqui eu disse que o tipo de objeto dentro da propriedade deveria ser uma string
            console.log(prop,obj[prop]) //aqui eu disse para ele imprimir o valor de prop ou seja titulo, e o valor de obj dentro da propriedade
}

exibirstring(filme) //aqui atribui os valores de filme dentro de obj

//somar apenas os múltiplos de 5 e de 3, limite (10)
//multiplos de 3 = 3,6,9
//multiplos de 5 = 5,10

somar(5)

function somar(valor) {
    let multiplosde3 = 0;
    let multiplosde5 = 0;

    for (i = 0; i <= valor; ++i){ //para cada valor de ínidice acrescentado ele vai passar o comando dentro de for
        if (i % 3 === 0) // aqui ele vai dividir o valor atual do índice por 3 caso seja true ele vai adicionar o valor do ínidice ao multiplo de 3 assim determinando quais são os múltiplos d e3
            multiplosde3 += i   //aqui ele vai adicionar e guardar o valor
        if (i % 5 === 0) // o mesmo acontece aqui 
            multiplosde5 += i
    }
    console.log(multiplosde3 + multiplosde5) // após ele executar o for ele vai somar os valores dos múltiplos que foram adicionados pelo índice 'i' imprimir no console.log


}


//Fazer média escolar
//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const array = [100,70,70] //aqui criei um array que guarda os valores das médias dos alunos

console.log(mediadoaluno(array)) //aqui pedi para ele imprimir a função media do aluno junto com os valores do array (nao tenho certeza se é isso mesmo)

function mediadoaluno(notas) { //aqui criei a função de media do aluno com o parâmetro "notas" 
    const media = calcularmedia(notas) //aqui apontei a função de calculo das medias que criei abaixo

    if (media < 59) return 'F' //aqui eu disse se "media" for menor que 59 retorne a nota "F"
    if (media < 69) return 'D' //já se ela for maior que 59  porém for menor que 69 retorne a nota "D"
    if (media < 79) return 'C' //já se ela for maior que 69 porém for menor que 79 retorne a "C"
    if (media < 89) return 'B' //já se ela for maior que 79 porém for menor que 89 retorne "B"
    return 'A' //caso nehuma das condições acima seja atendida significa que ela é maior que 89 ou seja, retorne "A"
}
function calcularmedia(array) { //esta é a função responsável por calcular as medias
    let soma = 0; //aqui criei uma variável chamada soma e determinei que o valor dela seria 0

    for (let valor of array) { //aqui no "for" eu disse que seria  o "valor" "do" array (ele pegou os valores dentro do array) 
        soma += valor; //depois ele pegou soma e somou com os valores do array ou seja "soma" é igual aos valores somados dentro do array
    }
    return  soma/(array.length) //depois pedi para que ele retornasse "soma" dividindo o valor dele pelo número de itens dentro do array, o ".lenght" faz ele ler toda a linha do array e determinar quantos itens há dentro daquele array
}


//fazer uma função que indice o número de asteriscos de acordo com as linhas, 1 linha 1 asterisco 2 linha 2 asteriscos, e assim por diante

asteriscos(4)

function asteriscos(linhas) { //aqui eu criei a função asteriscos com o parâmetro linhas
     let asterisco = '' //aqui criei um asterisco com uma string vazia

    for (let linha = 1; linha < linhas; linha++) { //depois criei um loop e coloquei "linha" como valor do índice e caso as condições fossem atendidas o asterisco seria adicionado
        asterisco += '*' //aqui eu digo para adiconar um asterisco e manter o valor
        console.log(asterisco) //depois dou um console log dentro do próprio loop para ele imprimir cada vez que o comando for executado
    }


    /* for (let linha = 1; linha <= linhas; linha++) {   //esta é outra maneira de fazer, aqui colocamos um loop dentro do outro
        let asterisco = '';
        for(let i = 0; i < linha; i++) {
            asterisco += '*'
        }
        console.log(asterisco)
    } */
} 


//numeros primos
//do número colocado a função deverá somente exibir os números primos

numerosprimos(10) //O 10 serve para substituir o parâmetro "primos"

function numerosprimos(primos) { //aqui criei a funçao numeros primos com o parâmetro "primos"
    for (let numero = 2; numero <= primos; numero++) { //depois criei "numero" que é igual a "2" "numero" menor ou igual a primos; numero +1
         
    if (numeroprimo(numero)) console.log(numero) //aqui ele verfica "se" numero é verdadeiro caso seja ele passa o console.log
    }
}

function numeroprimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++){ //aqui criei um divisor que era igual a 2 e caso menor que "numero"; divisor +1
    if (numero % divisor === 0) { //esta parte eu nao entendi
    return false
        }
    }
    return true
}

//Criando objeto com o constructor function

function jogos(jogo, categoria, estoque) {  //aqui criei os atributos que vao ser dados ao jogo, fazendo dessa maneira os atributos vão ser exibidos junto com o nome, categoria e estoque do jogo que vou colocar
    return {    //aqui pedi para ele retornar esses valores 
        jogo,
        categoria,
        estoque,
        teste() {
            console.log('testando')
        }
    }
}

const jogo1 = jogos('horizon' , 'terror', 'sim') //Aqui criei a constante jogo1 e disse os valores do jogo 1 como: nome, categoria e estoque
console.log(jogo1)