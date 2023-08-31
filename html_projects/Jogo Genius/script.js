const cores = [...document.querySelectorAll(".cores")]
const valoresCores = ["rgb(0, 235, 0)","red","yellow","blue"]
const btnPlay = document.querySelector("#play")

let jogadas = []
let cnt = 0
let cnt2 = 0

//* Essa função gera um número aleátorio de 0 até a length de cores
const numAleatorio = () => {
    return Math.floor(Math.random()*cores.length)
}

//* Essa função é responsável apenas por acender os botões
const interacao = (n) => {
    cores[n].setAttribute("style",`background-color: ${valoresCores[n]}; box-shadow: 0px 0px 200px ${valoresCores[n]}; z-index: 1000;`)
    setTimeout(() => {
        cores[n].removeAttribute("style")
    }, 200);
}

//* Esse é responsável por pegar as informações clicadas pelo jogador
cores.map(cor => {
    cor.addEventListener("click", () => {
        //* Aqui ele executa a ação que o usuário vai ver
        interacao(cores.indexOf(cor))

        //* Depois, a partir de um contador ele vai verificar se a cor que o usuário clicou é a mesma que foi disparada pelo jogo
        if(cores.indexOf(cor) == jogadas[cnt]) {
            //* Aqui ele adiciona um contador caso o jogador acerte
            cnt++

            //* Se essa condição for verdadeira é por que o jogador acertou o número de cores disparadas pelo jogo
            if(cnt == jogadas.length) {
                //* Ele espera um tempo para executar a função
                setTimeout(() => {
                    jogo()
                },1500)
                cnt = 0
            }
        }
        //* Caso o jogador erre
        else {
            alert("Você Perdeu")
            jogadas = []
        }
    })
})

const jogo = () => {
    //* Aqui o jogo adiciona uma cor aleatória ao array de jogadas
    jogadas.push(numAleatorio())
    //* Esse contador é responsável pelo controle de vezes que o interval vai ser executado
    cnt2 = 0
    game = setInterval(() => {
        //* O interval vai ser executado até o cnt2 ser igual a quantidade de itens no array
        if(cnt2 != jogadas.length) {
            //* Aqui ele dispara a interação visual
            interacao(jogadas[cnt2])
            //* E adiciona mais um ao contador
            cnt2++
        }
        //* É para quando o contador for igual a quantidade de itens do array
        else {
            clearInterval(game)
        }
        
    },1000)
}

btnPlay.addEventListener("click", () => {
    jogo()
})
