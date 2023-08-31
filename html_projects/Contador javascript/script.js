let numero = 0

function mais() {
    numero = numero +1
    atualizar()
}

function menos() {
    numero = numero -1
    atualizar()
}

function atualizar() {
    const p = document.querySelector("p")
    p.innerText = numero
}

function resetar() {
    numero = 0 
    atualizar()
}

atualizar()