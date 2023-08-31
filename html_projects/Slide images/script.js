const mainContainer = document.querySelector('#images-container');
const controlBtns = [...document.querySelectorAll('.img-btn')]

window.addEventListener('DOMContentLoaded',() => {
    controlBtns[0].classList.add('ativo')
})

const imagesGroup = [
    './images/img-1.jpg',
    './images/img-2.jpg',
    './images/img-3.jpg',
    './images/img-4.jpg',
    './images/img-5.jpg'
]

imagesGroup.map((img) => {
    const createDiv = document.createElement('div');
    const createImg = document.createElement('img');
    createImg.setAttribute('src',`${img}`);
    createImg.classList.add('imagem')
    createDiv.appendChild(createImg);
    mainContainer.appendChild(createDiv);
})

controlBtns.map((btn) => {
    btn.addEventListener('click', (btn) => {
        btn = btn.target
        for(item of controlBtns) {
            item.classList.remove('ativo')
        }
        btn.classList.add('ativo')
        btnIndice = controlBtns.indexOf(btn)
        
        const imagens = [...document.querySelectorAll('.imagem')]

        imagens.map((img) => {
            img.style.transform = `translateX(-${100 * btnIndice}%)`
        })
    })
})