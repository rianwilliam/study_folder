const itensp1 = [...document.querySelectorAll(".itemp1")]
const itensp2 = document.querySelector(".itensp2")
const btnjogar = document.querySelector("#jogar") 
const elementosp1 = document.querySelector(".p1")

let resultado = undefined

let opcaoSelecionada = itensp1.indexOf(document.querySelector(".selected"))
let escolhaBot = Math.floor(Math.random()*3)

itensp1.map((item) => {
    item.addEventListener("click", () => {
        itensp1.map(item => item.classList.remove("selected"))
        item.classList.add("selected")
    })
})

btnjogar.addEventListener("click", () => {
    opcaoSelecionada = itensp1.indexOf(document.querySelector(".selected"))
    escolhaBot = Math.floor(Math.random()*3)
    itensp2.children[escolhaBot].children[0].classList.add("selected")
    
    opcaoSelecionada == 0 && escolhaBot == 2 ? resultado = false :
    opcaoSelecionada == 0 && escolhaBot == 1 ? resultado = true :
    opcaoSelecionada == 1 && escolhaBot == 0 ? resultado = false :
    opcaoSelecionada == 1 && escolhaBot == 2 ? resultado = true :
    opcaoSelecionada == 2 && escolhaBot == 1 ? resultado = false :
    opcaoSelecionada == 2 && escolhaBot == 0 ? resultado = true : resultado = undefined

    setTimeout(() => {
        if(resultado == undefined) {
            alert("Empatou")
        }
        else if(resultado == false) {
            alert("Você perdeu")
        }
        else if(resultado == true) {
            alert("Você ganhou")
        }
        itensp2.children[escolhaBot].children[0].classList.remove("selected")
    },1000)
})