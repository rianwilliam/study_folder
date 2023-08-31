//! Script da barra de progresso

let progressBar1 = document.getElementById("progress-bar-1")
let carga = 0
let intbarra = setInterval(()=>{
    progressBar1.innerHTML = carga+"%"
    progressBar1.style.width = carga+"%";
    carga ++

    if (carga >= 100){
        carga = 0
    }
},50)

document.querySelector('.button-spinner').addEventListener('click',function() {
    document.querySelector('.button-spinner').children[0].classList.toggle('d-none')
})

//! Script da paginação

function ativar(elemento){
    let itens = document.getElementsByClassName("page-item")
    for (let i = 0; i < itens.length; i++) {
        itens[i].classList.remove("active")
    }
    elemento.classList.add('active')
}