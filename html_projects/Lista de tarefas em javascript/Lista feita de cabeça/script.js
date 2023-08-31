let text = document.querySelector('.text');


function addTarefa() {
    let list = document.querySelector('.list');
    let li = document.createElement('li')
    li.innerHTML = text.value
    list.appendChild(li)
    buttonRemove(li)
    text.value = ''
}

function buttonRemove(li) {
    let btnRemove = document.createElement('button')
    btnRemove.classList.add('btn-remove')
    li.appendChild(btnRemove)

    btnRemove.addEventListener('click', () => {btnRemove.parentElement.style.display = 'none'})
}