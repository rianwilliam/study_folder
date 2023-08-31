//! animated header

let sectionHeader = document.querySelector('.header-section');
let section1 = document.querySelector('.section1');


let interruptor1 = 0;
let interruptor2 = 0;

function sectionHeaderFixed() {
    let tela = window.pageYOffset;

    if (tela > 55 && interruptor1 == 0) {
        sectionHeader.classList.toggle('transition');
        setTimeout(() => {
            section1.classList.toggle('on');
            sectionHeader.classList.toggle('fixed');
        }, 200);
        interruptor1 = 1;
    }

    else if (tela < 55 && interruptor1 == 1 ) {
        section1.classList.toggle('on');
        sectionHeader.classList.toggle('transition');
        sectionHeader.classList.toggle('fixed');
        interruptor1 = 0;
    }
    
    console.log(tela)
}

window.addEventListener('scroll', function() {
    sectionHeaderFixed();
    animateDivSection2();
})

/* Cards animation */

let section2Div1 = document.querySelector('.animated-card-div-1');
let section2Div2 = document.querySelector('.animated-card-div-2');
let section2Div3 = document.querySelector('.animated-card-div-3');

function removeHide() {
    section2Div1.classList.toggle('hide');
    section2Div2.classList.toggle('hide');
    section2Div3.classList.toggle('hide');
}

function cardAddOn() {
    section2Div1.classList.toggle('on');
    section2Div2.classList.toggle('on');
    section2Div3.classList.toggle('on');
}

function animateDivSection2() {
    let tela = window.pageYOffset
    if (tela > 240 && interruptor2 == 0) {
        removeHide();
        interruptor2 = 1;
        setTimeout(() => {
            cardAddOn();
        },1900);
    }
    else if (tela < 100 && interruptor2 == 1) {
        removeHide();
        cardAddOn();
        interruptor2 = 0;
    }
}


/* Menu mobile */


let menuDesktop = document.querySelector('.menu-desktop');
let menuMobile = document.querySelector('.menu-mobile');

function animateBar() {
    let barOne = document.querySelector('.one').classList.toggle('on');
    let barTwo = document.querySelector('.two').classList.toggle('on');
    let barThree = document.querySelector('.three').classList.toggle('on');
}

menuMobile.addEventListener('click', function() {
    animateBar()
    sectionHeader.classList.toggle('on')
    menuDesktop.classList.toggle('on')
})

/* Acordeon */

let itemAcordeon1 = document.querySelector('.item-acordeon1').addEventListener('click', function() {
    this.classList.toggle('acordeon-open')
})

let itemAcordeon2 = document.querySelector('.item-acordeon2').addEventListener('click', function() {
    this.classList.toggle('acordeon-open')
})

let itemAcordeon3 = document.querySelector('.item-acordeon3').addEventListener('click', function() {
    this.classList.toggle('acordeon-open')
})

let itemAcordeon4 = document.querySelector('.item-acordeon4').addEventListener('click', function() {
    this.classList.toggle('acordeon-open')
})

