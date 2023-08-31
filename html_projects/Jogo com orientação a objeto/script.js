let canvas = document.querySelector("#canvas"); 
let ctx = canvas.getContext("2d");

// * Aqui determino o valor incial da largura e altura da tela subtraindo com o gap
let gap = 2
let width = window.innerWidth - gap
let height = window.innerHeight - gap

// * Depois digo que o canvas terá exatamente essa largura / altura
canvas.width = width
canvas.height = height

// * Textos
const carteira = new Carteira(ctx)  

// * Cada botão vai precisar de:
let larguraBotao = 5
let alturaBotao = 12

// * ctx,caminho,largura,altura,Número do botão,carteira
const btnDinheiroPorSegundo = new Botao(ctx,carteira,"./images/teste.png",larguraBotao,alturaBotao,0)
const btnTempoGeracao = new Botao(ctx,carteira,"./images/teste.png",larguraBotao,alturaBotao,1)
const btnUpBanco = new Botao(ctx,carteira,"./images/teste.png",larguraBotao,alturaBotao,2)


let botoes = [
    btnDinheiroPorSegundo,
    btnTempoGeracao,
    btnUpBanco,
]

window.addEventListener("click", (evt) => {
    // * Pegar a posição X e Y do click do usuário
    for(botao of botoes) {
        botao.click(evt.clientX,evt.clientY)
    }
})

// * Essa função é ativada assim que o script é carregado
//TODO Colocar um botão de iniciar o jogo que vai rodar essa função
carteira.gerar()


// * Animações
const anima = () => {

    // * Caso o tamanho da tela determinado no início do código seja diferente da que está constantemente sendo verificada ele vai atribuir esse novo tamanho ao canvas
    if(width != window.innerWidth || height != window.innerHeight) {
        width = window.innerWidth
        height = window.innerHeight
        canvas.width = width - gap
        canvas.height = height - gap

        // * E também executa as funções de responsividade para ajustar os elementos, assim os deixando responsivos
        btnDinheiroPorSegundo.responsividade()
        btnTempoGeracao.responsividade()
        btnUpBanco.responsividade()
        carteira.responsividade()
    }
    btnTempoGeracao.desenhar()
    btnDinheiroPorSegundo.desenhar()
    btnUpBanco.desenhar()
    carteira.desenhar()

    requestAnimationFrame(anima)
}

anima()