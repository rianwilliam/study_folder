let h1 = document.createElement("h1") //Aqui criei um h1

let span1 = document.querySelector('.span1') //aqui apontei a variável span1 para a classe .span1 do html

let elemento_pai = document.getElementById('div_pai') //Aqui eu criei o elemento pai apontando para a div pai do html

elemento_pai.insertBefore(h1, span1) //Aqui eu disse para o elemento pai inserir o h1 antes do span


//Aqui é outro projeto onde eu modifico informações do html pelo javascript

let span_text = document.querySelector('span') //Aqui eu selecionei todas as tags span do html e criei a variável span_text

span_text.innerText = "Sei lá" //Aqui modifiquei o texto dentro de todos os spans do html

h1.innerText = "Teste2" //Aqui eu direciono o texto ao h1 criado anteriormente

span_text.style.fontSize = "80px" //Aqui determinei tamanho da fonte do h1

let img = document.createElement('img') //aqui criei o elemento img

img.src = "./Panda.png" // Aqui busquei a imagem que eu queria que fosse adicionada

img.style.width = "100px" //Aqui determinei o tamanho da imagem

elemento_pai.insertBefore(img, span1) //e aqui apliquei a imagem no html

//Alterar texto através do botão

let h3_alterado = document.querySelector(".h3") //Aqui apontei para a classe do h3 que está no html


let interruptor = 0 //aqui criei o interruptor que tem como valor 0, ou também poderia usar boolean (true e false)

let btn_alterar = document.querySelector('.alterar') //Aqui peguei a tag do botao

btn_alterar.addEventListener("click", function(){ //Aqui criei a função do botao para executar toda vez que ele for pressionado
    if(interruptor === 0) { //perguntei o valor do interruptor
        h3_alterado.innerText = "ele foi alterado"  //alterei o texto do h3
        interruptor = 1 //mudei o valor do interruptor
    }
    else {
        h3_alterado.innerText = '' //alterei o texto para ele sumir
        interruptor = 0 //resetei o valor do interruptor
    }
})

function teste(valor1, valor2) {
    valor1 + valor2
}

console.log(teste(10, 20))