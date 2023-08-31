//* Canvas
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

//* largura e altura do canvas
let larguraCanvas = window.innerWidth / 3
let alturaCanvas= window.innerHeight / 1.05
canvas.width = larguraCanvas
canvas.height = alturaCanvas

const body = document.querySelector("body")

//* Botões
let btnIniciar = document.querySelector(".btn-iniciar")

//* Aúdios
let somToqueBola = document.querySelector("#SomToqueBola")
somToqueBola.volume = 1

let somGameOver = document.querySelector("#SomGameOver")
somGameOver.volume = 0.05

const somAumentarTamanho = document.querySelector("#SomAumentarTamanho")
somAumentarTamanho.volume = 0.4

const somVidaExtra = document.querySelector("#SomVidaExtra")
somVidaExtra.volume = 0.2

const somPerderVida = document.querySelector("#SomPerderVida")
somPerderVida.volume = 0.3

const somUpgrade = document.querySelector("#somUpgrade")
somUpgrade.volume = 0.5

//* Upgrades
const upgradeText = document.querySelector(".upgradeText")

//* Pontos
let exibirPontos = document.querySelector("#pontos")
let pontos = 0
let multiplicador = 1

//* Vidas
let vidas = 3
let exibirVidas = document.querySelector("#vidas")
exibirVidas.innerHTML = vidas

//* Textos
let gameOverScreen = document.querySelector(".game-over")
let roundText = document.querySelector("#roundText")

//* Botão de iniciar
btnIniciar.addEventListener("click", () => {
    setTimeout(() => {
        bola.iniciar()
        jogador.iniciar()
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

const inputVelBola = document.querySelector("#inputVelBola")
const mudarVelocidade = document.querySelector("#mudarVelocidade")
mudarVelocidade.addEventListener("click",() => {
    if(!bola.movendo && Number(inputVelBola.value) <= 5 && Number(inputVelBola.value) >= 1) {
        bola.vel = Number(inputVelBola.value)
    }
})

window.addEventListener("resize", () => {
    let larguraCanvas = window.innerWidth / 3
    let alturaCanvas= window.innerHeight / 1.05
    canvas.width = larguraCanvas
    canvas.height = alturaCanvas

    grid.blocos.map(bloco => bloco.resize())
    jogador.resize()
    bola.resize()
})
