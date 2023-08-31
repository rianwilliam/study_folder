let subMenuButton = document.querySelector('.submenu-button');
let subMenu = document.querySelector('.submenu');

subMenuButton.addEventListener('click', () => {
    subMenu.classList.toggle('on');
})


let menuMobile = document.querySelector('.menu-mobile');
let html = document.querySelector('.html')

menuMobile.addEventListener('click', function() {
    menuMobile.classList.toggle('on');
    html.classList.toggle('on')
})