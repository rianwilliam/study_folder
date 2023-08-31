teclas = {
    esquerda: false,
    direita: false
}

window.addEventListener("keydown", (evt) => {
    evt = evt.key
    
    if(evt.toLowerCase() == "a" || evt.toLowerCase() == "arrowleft") {
        teclas.esquerda = true
    }
    if(evt.toLowerCase() == "d" || evt.toLowerCase() == "arrowright") {
        teclas.direita = true
    }
})

window.addEventListener("keyup", (evt) => {
    evt = evt.key
    
    if(evt.toLowerCase() == "a" || evt.toLowerCase() == "arrowleft") {
        teclas.esquerda = false
    }
    if(evt.toLowerCase() == "d" || evt.toLowerCase() == "arrowright") {
        teclas.direita = false
    }
    
})