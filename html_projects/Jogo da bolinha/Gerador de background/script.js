const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

canvas.setAttribute("width",window.innerWidth)
canvas.setAttribute("height",window.innerHeight)

ctx.fillRect(0,0,canvas.width,canvas.height)

const imagem = new Image()
imagem.src = "estrela.png"

//* Começa do x
let incialX = 0
let finalX = 256

//* Vai até o 256
let finalY = []


let quantidadeEstrelas = 1000

imagem.onload = () => {
    for(let i = 0; i < quantidadeEstrelas; i++) {
        randomCutX = Math.floor(Math.random()*10) > 5 ? finalY = [0,256] : finalY = [256,512]
        randomX = Math.random()*canvas.width
        randomY = Math.random()*canvas.height
        ctx.drawImage(imagem,incialX,finalY[0],finalX,finalY[1],randomX,randomY,3,3)
    }
}


// const body = document.querySelector("body")
// let cnt = 0

// const anima = () => {

//     body.style.backgroundPositionY = `${cnt}px`

//     cnt++
//     requestAnimationFrame(anima)
// }

// anima()
