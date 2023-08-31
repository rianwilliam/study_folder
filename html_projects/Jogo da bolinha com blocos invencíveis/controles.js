teclas = {
    esquerda: false,
    direita: false
}

window.addEventListener("keydown", (evt) => {
    evt = evt.key
    
    if(evt.toLowerCase() == "a") {
        teclas.esquerda = true
    }
    if(evt.toLowerCase() == "d") {
        teclas.direita = true
    }
})

window.addEventListener("keyup", (evt) => {
    evt = evt.key
    
    if(evt.toLowerCase() == "a") {
        teclas.esquerda = false
    }
    if(evt.toLowerCase() == "d") {
        teclas.direita = false
    }
    
})