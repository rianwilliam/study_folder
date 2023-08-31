const reviews = [
    {
    id: 1,

    nome: 'Rian william',

    job: 'developer',

    img: './Paisagem 1.jpg',

    text: 'Lorem ipsum dolor sit amet, maximus quis lacus vitae, volutpat vestibulum orci. Donec ullamcorper ex tortor, ut maximus lorem blandit interdum. Morbi consectetur ultrices lorem eget interdum. Nulla facilisi. Fusce vitae ipsum facilisis, maximus felis ac, tristique orci. Proin ac tempus lectus. Sed consectetur metus eget dui condimentum imperdiet sit amet in ligula. Ut dictum nec metus at ornare. Nunc vitae ultrices purus. Praesent eget porta justo. Aenean diam est, mollis quis consequat sit amet, viverra sit amet eros. Phasellus id dapibus tortor. Nullam gravida vel mauris id laoreet. Integer maximus, tortor id bibendum tempus, velit ligula porta odio, ac euismod magna sapien ac quam. Fusce tincidunt, sem quis blandit ullamcorper, orci enim tristique ex, quis facilisis sem augue vitae risus.'
    },
    {
    id: 2,

    nome: 'robert',

    job: 'medic',

    img: './Paisagem 2.jpg',

    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non ex justo. Praesent risus lorem, '
    },
    {
    id: 3,
    
    nome: 'Marco',
    
    job: 'teacher',
    
    img: './Paisagem 3.jpg',
    
    text: 'Vestibulum non ex justo. Praesent risus lorem, maximus quis lacus vitae, volutpat vestibulum orci. Donec ullamcorper ex tortor, ut maximus lorem blandit interdum. Morbi consectetur ultrices lorem eget interdum. Nulla facilisi. Fusce vitae ipsum facilisis, maximus felis ac, tristique orci. Proin ac tempus lectus. Sed consectetur metus eget dui condimentum imperdiet sit amet in ligula. Ut dictum nec metus at ornare. Nunc vitae ultrices purus. Praesent eget porta justo. Aenean diam est, mollis quis consequat sit amet, viverra sit amet eros. Phasellus id dapibus tortor. Nullam gravida vel mauris id laoreet. Integer maximus, tortor id bibendum tempus, velit ligula porta odio, ac euismod magna sapien ac quam. Fusce tincidunt, sem quis blandit ullamcorper, orci enim tristique ex, quis facilisis sem augue vitae risus.'
    },
];

let img = document.getElementById("img");
let title = document.getElementById("title");
let description = document.getElementById("description");

let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let random = document.querySelector('.random');

/* Items */

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
    showPerson() /* Aqui disse que showperson tem como dado variável o current item */
})

function showPerson() { /* Aqui criei o person e ele vai ser substituído pelo valor de current item */
    let item = reviews[currentItem]; 
    img.src = item.img; /* Aqui pedi para ele buscar a imagem de item pois "item" é igual a reviews */
    title.textContent = item.nome; /* O mesmo com o texto e a descrição */
    description.textContent = item.text
}

btn1.addEventListener("click", function(){
    currentItem++ /* Aqui ele vai adicionar mais um ao currentItem */
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson()
})

btn2.addEventListener("click",function(){
    currentItem--
    if (currentItem < 0){
        currentItem = reviews.length - 1 /* Não entendi o porque do menos 1 */
    }
    showPerson()
})

random.addEventListener("click", function(){
    
})