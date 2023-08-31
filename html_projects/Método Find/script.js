const sectionItens = document.querySelector('.secondary-section')
const resetar = document.querySelector('#resetar')
const btnBuscar = document.querySelector('#btn-buscar')
const inputBuscar = document.querySelector('#input-buscar')
const divBase = document.querySelector('.div-base')

const itens = [
    {
        nome: 'calça',
        preco: 25.0
    },

    {
        nome: 'camisa',
        preco: 50.0
    },

    {
        nome: 'boné',
        preco: 10.0
    },
    
]

function injectItens(element) {

    for(let i = 0; i < element.length; i++) {

        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        const h4 = document.createElement('h4')

        h2.innerHTML = element[i].nome
        h4.innerHTML = element[i].preco + 'R$'

        div.append(h2)
        div.append(h4)

        div.setAttribute('class','divs mx-1 text-center')
        

        if(element.length == 1) {
            sectionItens.innerHTML = ''
            return sectionItens.append(div)
        }
        else {
            sectionItens.append(div)
        }
    }
}

resetar.addEventListener('click', () => {
    sectionItens.innerHTML = ''
    inputBuscar.value = ''
    injectItens(itens)
})

window.addEventListener('DOMContentLoaded', () => {
    injectItens(itens)
})


btnBuscar.addEventListener('click', () => {

    const busca = itens.find((elemento) => {
        return elemento.nome == inputBuscar.value.toLowerCase()
    })

    injectItens([busca])
    
})
