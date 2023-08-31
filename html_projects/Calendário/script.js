const mainSection = document.querySelector('.main-section');


const criarElementos = (elemento) => {
    for(let i = 1; i <= 31; i++) {
        const firstDiv = document.createElement('div')
        const secondDiv = document.createElement('div')
        const btn = document.createElement('button')
        const h5 = document.createElement('h5')

        firstDiv.appendChild(secondDiv)

        h5.innerHTML = i
        btn.innerHTML = 'Novo Lembrete'
        btn.setAttribute('class','add-btn')
        
        firstDiv.setAttribute('class','bloco')
        secondDiv.appendChild(h5)
        secondDiv.appendChild(btn)

        elemento.appendChild(firstDiv)
        
    }
}

criarElementos(mainSection)
const addBtn = [...document.querySelectorAll('.add-btn')]

addBtn.map((item) => {
    item.addEventListener('click',(elemento) => {
        item = elemento.target
        const textBox = document.createElement("textarea")

        textBox.setAttribute('class','task')
        textBox.setAttribute('cols','15')
        textBox.setAttribute('rows','2')

        const textBoxValue = document.querySelector('.task')
        const p = document.createElement('h6')

        if (!item.nextElementSibling) {
            item.parentElement.append(textBox)
            item.innerHTML = 'Adicionar'
        }
        else {
            const taskDiv = document.createElement('div')
            taskDiv.setAttribute('class','taskText')
            taskDiv.innerHTML = textBoxValue.value

            item.parentElement.append(taskDiv)
            item.remove()
            textBoxValue.remove()
        }
    })
})

