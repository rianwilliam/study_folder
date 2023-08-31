let div_pai = document.getElementById('div_2') ;

let not_see = document.getElementById('not_see') ;

let not_see_value = document.getElementById('not_see_value');

let see = document.createElement('img') ;
see.src = './view.png' ;
see.style.transform = 'scale(0)';

div_pai.insertBefore(see, not_see);
see.style.visibility = 'hidden' ;

let interruptor = 0;
let dinheiro = 400.00;

not_see.addEventListener('click', function(){ 
    if(interruptor === 0){
        not_see.style.transition = 'all 200ms ease-in-out';
        not_see.style.transform = 'scale(0.0)';
        not_see.style.visibility = 'hidden';

        see.style.transition = 'all 200ms ease-in-out';
        see.style.transform = 'scale(1)';
        see.style.visibility = 'visible' ;

        not_see_value.classList.remove('ativado');
        not_see_value.classList.add('desativado');
        not_see_value.innerText = dinheiro.toFixed(2) ;

        interruptor = 1 
    }    
})

see.addEventListener('click', function(){ 
    if(interruptor === 1) {
        see.style.visibility = 'hidden';

        not_see.style.visibility = 'visible';
        not_see.style.transition = 'all 200ms ease-in-out';
        not_see.style.transform = 'scale(1)';

        see.style.transition = 'all 200ms ease-in-out';
        see.style.transform = 'scale(0)';

        not_see_value.classList.remove('desativado'); 
        not_see_value.classList.add('ativado'); 
        not_see_value.innerText = '';

        interruptor = 0;

    }
})
