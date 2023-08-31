let div_pai = document.getElementById('div_2') //aqui atribuí a div_pai

let not_see = document.getElementById('not_see') //Aqui atribuí o not_see que é quando não se está vendo o valor

let not_see_value = document.getElementById('not_see_value') //aqui é a barra que oculta o valor na conta

let see = document.createElement('img') //aqui criei o elemento image, que seria o do olho aberto

see.src = './view.png' //aqui busquei a imagem do olho aberto
see.style.transform = 'scale(0)'; // aqui defini o tamanho do olho aberto como 0

div_pai.insertBefore(see, not_see) //Depois usando o elemento pai eu inseri a imagem
see.style.visibility = 'hidden' //e a ocultei (lembrando, esta é a imagem do olho aberto)

let interruptor = 0 //criei a variável interruptor 
let dinheiro = 400 //criei o valor do dinheiro que vai aparecer

not_see.addEventListener('click', function(){ //e aqui definir a função click no olho fechado
    if(interruptor === 0){ //aqui  disse que o valor do interruptor tinha que ser igual a 0 para executar
        not_see.style.transition = 'all 200ms ease-in-out'; //Aqui defini a transição
        not_see.style.transform = 'scale(0.0)'; //e aqui disse para ele diminuir para zero quando a função fosse executada
        not_see.style.visibility = 'hidden' //escondi o olho fechado

        see.style.transition = 'all 200ms ease-in-out';//Aqui defini a transição
        see.style.transform = 'scale(1)'; //aqui pedi que ele aumentasse a escala na qual diminui anteriormente
        see.style.visibility = 'visible' //deixei visivel o olho aberto

        not_see_value.classList.remove('ativado') //e removi a classe que deixava o valor bloqueado
        not_see_value.classList.add('desativado') //e adicionei a classe que deixa o valor mostrado com a aparência que defini no css
        not_see_value.innerText = dinheiro //aqui disse que o valor ia ser igual a variável dinheiro
        interruptor = 1 //e liguei o interruptor no 1
    }    
})
see.addEventListener('click', function(){ //aqui é a função de click no olho fechado
    if(interruptor === 1) { //Verfiquei se o interruptor era 1
        see.style.visibility = 'hidden' //escondi o olho aberto

        not_see.style.transition = 'all 200ms ease-in-out'; //defini a animação de aprecer o olho aberto
        not_see.style.transform = 'scale(1)'; //aumentei o tamanho dele

        see.style.transition = 'all 200ms ease-in-out'; //animacao de sumir o olho aberto
        see.style.transform = 'scale(0)'; //diminui o tamanho dele

        not_see.style.visibility = 'visible' //tornei visivel o olho fechado
        not_see_value.classList.remove('desativado') //removi a classe que personalizava o dinheiro na conta
        not_see_value.classList.add('ativado') //e adicionei a classe que era o borrão que bloqueia o valor do saldo
        not_see_value.innerText = '' //E tornei o valor do saldo '' que seria nada para ele não aparecer mais
        interruptor = 0 //e desliquei o interruptor mudando ele para zero
    }
})