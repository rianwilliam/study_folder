//* Canvas
let canvas = document.querySelector("#canvas"); 
let ctx = canvas.getContext("2d");

//* Botões
let btnIniciar = document.querySelector(".btn-iniciar")

//* Aúdios
let somToqueBola = document.querySelector("#SomToqueBola")
somToqueBola.volume = 0.08

let somGameOver = document.querySelector("#SomGameOver")
somGameOver.volume = 0.05

const somAumentarTamanho = document.querySelector("#SomAumentarTamanho")
somAumentarTamanho.volume = 1

const somVidaExtra = document.querySelector("#SomVidaExtra")
somVidaExtra.volume = 1

//* Upgrades
const upgradeText = document.querySelector(".UpgradeText")

//* Pontos
let exibirPontos = document.querySelector("#pontos")
let pontos = 0
let multiplicador = 1

//* Vidas
let vidas = 3
let exibirVidas = document.querySelector("#vidas")
exibirVidas.innerHTML = vidas

//* Mensagem game-over
let gameOverScreen = document.querySelector(".game-over")

//* Botão de iniciar
btnIniciar.addEventListener("click", () => {
    setTimeout(() => {
        bola.iniciar()
        btnIniciar.style.display = "none"
    },300)
})

//* Classes
const jogador = new Jogador(ctx,teclas);
const bola = new Bola(ctx,jogador);
const grid = new Grid(ctx)
let upgrades = []

//* Animação
const anima = () => {
    //* Jogador
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = "#000"
    jogador.desenhar()
    
    //* Sombra dos blocos
    ctx.shadowColor = "#e6e6e6"
    ctx.shadowOffsetX = 10
    ctx.shadowOffsetY = 10
    ctx.shadowBlur = 2  
    
    //* Blocos
    grid.blocos.map(bloco => {
        bloco.desenhar()
    })

    //* Resetar sombra
    ctx.shadowColor = "rgba(255, 255, 255,0)"
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.shadowBlur = 0    
    
    //* Bola
    ctx.fillStyle = "#00f"
    bola.desenhar()

    //* Renderização dos upgrades
    upgrades.map(upgrade => {
        upgrade.desenhar()
    })

    requestAnimationFrame(anima)
}

anima()


