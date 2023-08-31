const arrayCars = [
    {
        id: 1,
        car: './Carros/Carro1.png',
    },
    {
        id: 2,
        car: './Carros/Carro2.png'
    },
    {
        id: 3,
        car: './Carros/Carro3.png'
    },
    {
        id: 4,
        car: './Carros/Carro4.png'
    },
]

const carsP1 = document.querySelector('.cars-p1')
const carsP2 = document.querySelector('.cars-p2')

let arrowBeforeP1 = document.querySelector('.arrow-before-p1')
let arrowAfterP1 = document.querySelector('.arrow-after-p1')

let arrowBeforeP2 = document.querySelector('.arrow-before-p2')
let arrowAfterP2 = document.querySelector('.arrow-after-p2')

let currentItemP1 = 0
let currentItemP2 = 0

let selecionarP1 = document.querySelector('.selecionar-p1')
let selecionarP2 = document.querySelector('.selecionar-p2')

let carroSelecinadoP1 = document.querySelector('.carro-selecionado-p1')
let divCarsP1 = document.querySelector(".div-cars-p1")

let carroSelecinadoP2 = document.querySelector('.carro-selecionado-p2')
let divCarsP2 = document.querySelector('.div-cars-p2')

window.addEventListener('DOMContentLoaded',function() {
    selectCarsP1()
    selectCarsP2()
})

window.addEventListener('keypress',function(event) {
    const key = event.key
    if(key == 'a' || key == 'A') {
        previousP1()
    }
    if(key == 'd' || key == 'D') {
        nextP1()
    }
    if(key == 'j' || key == 'J') {
        previousP2()
    }
    if(key == 'l' || key == 'L') {
        nextP2()
    }
})

function selectCarsP1() {
    carsP1.src = arrayCars[currentItemP1].car
}

function selectCarsP2() {
    carsP2.src = arrayCars[currentItemP2].car
}

//! Seleçao de carros P1
arrowAfterP1.addEventListener('click',function() {
    nextP1()
})

function nextP1() {
    currentItemP1++
    if(currentItemP1 > arrayCars.length - 1) {
        currentItemP1 = 0
    }
    selectCarsP1()
}

arrowBeforeP1.addEventListener('click',function() {
    previousP1()
})

function previousP1() {
    currentItemP1--
    if(currentItemP1 < 0) {
        currentItemP1 = arrayCars.length - 1 
    }
    selectCarsP1()
}

//! Seleção de carros P2
arrowAfterP2.addEventListener('click',function() {
    nextP2()
})

function nextP2() {
    currentItemP2++
    if(currentItemP2 > arrayCars.length -1) {
        currentItemP2 = 0
    }
    selectCarsP2()
}

arrowBeforeP2.addEventListener('click',function() {
    previousP2()
})

function previousP2() {
    currentItemP2--
    if(currentItemP2 < 0) {
        currentItemP2 = arrayCars.length -1
    }
    selectCarsP2()
}

selecionarP1.addEventListener('click',function() {
    carroSelecinadoP1.src = arrayCars[currentItemP1].car

    arrowAfterP1.classList.add('remove')
    arrowBeforeP1.classList.add('remove')
    divCarsP1.classList.add('remove')
})

selecionarP2.addEventListener('click',function() {
    carroSelecinadoP2.src = arrayCars[currentItemP2].car
    
    arrowAfterP2.classList.add('remove')
    arrowBeforeP2.classList.add('remove')
    divCarsP2.classList.add('remove')
})