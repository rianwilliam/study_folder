let tarefa = document.querySelector('.tarefa')
let addTarefa = document.querySelector('.add-tarefa');
let lista = document.querySelector('.lista');

addTarefa.addEventListener("click", function() {
    let li = document.createElement('li');
    li.innerHTML = tarefa.value;
    lista.appendChild(li);
    tarefa.value = '';
    list(li)
})

function list(li) {
    let button = document.createElement('button');
    button.classList.add('button');

    li.appendChild(button)
    button.onclick = () => button.parentElement.style.display = "none";
} 