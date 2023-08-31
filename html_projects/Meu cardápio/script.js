const menu = [
    {
        id: 1,
        img: './images/item-2.jpg',
        text: 'escritório 2',
        desc: 'desc 2',
    },
    {
        id: 2,
        img: './images/item-3.jpg',
        text: 'escritório 3',
        desc: 'desc 3',
    },
    {
        id: 3,
        img: './images/item-4.jpg',
        text: 'escritório 4',
        desc: 'desc 4',
    },
]

let section = document.querySelector('.main-section')
let item = document.querySelector('.menu')


window.addEventListener('DOMContentLoaded',function() {
   displayMenu(menu)
})

function displayMenu(menuItems) {
    let display = menu.map(function(item) {
        console.log(item)
        return `
        <div class="menu">
            <div>
                <img src=${item.img} alt="" class="img" />
            </div>
            <div>
                <h1 class="text">${item.text}</h1>
                <h2 class="desc">
                    ${item.desc}
                </h2>
            </div>
        </div>`
    })
    display = display.join("") //o join serve para juntar eles retirar virgulas e espaços entre os elementos, pelo meno é o que acontece no console.log()
    section.innerHTML = display
}
