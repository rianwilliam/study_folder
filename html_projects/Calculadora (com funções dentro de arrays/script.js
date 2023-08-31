const calculator = document.querySelector('#calculator');
const buttonsNumbers = [...document.querySelectorAll('.btn-numbers')];
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
let input = document.querySelector('#input');

buttonsNumbers.map(button => {
    button.addEventListener('click',() => {
        input.value += button.innerHTML;
    })  
})


equal.addEventListener('click', ()=> {
    const resultado = eval(input.value);
    input.value = resultado;
})

clear.addEventListener('click',()=> {
  input.value = ''
})

console.log(window.innerWidth);